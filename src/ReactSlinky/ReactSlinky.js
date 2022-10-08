import React, { useState, useRef, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./style";

const ReactSlinky = ({ items }) => {
  const [menus, setMenus] = useState([]);
  const [heights, setHeights] = useState([]);
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (ref.current) {
      setHeights((previous) => [...previous, ref.current.offsetHeight]);
    }
  }, [menus]);

  const selectBack = () => {
    setMenus(menus.slice(0, menus.length - 1));
    setHeights(heights.slice(0, heights.length - 1));
  };

  const selectNext = (subMenuId) => {
    setMenus([...menus, subMenuId]);
  };

  const displaySubMenu = ({ id, link, isParent }) => {
    const getNextIndex = () => {
      if (isParent) {
        return 0;
      }

      return (menus.indexOf(id) + 1) % menus.length;
    };

    return (
      <ul ref={ref} style={isParent && { left: `${menus.length * -100}%` }}>
        {!isParent && (
          <li className="header">
            <a href="#" className="back" onClick={selectBack}></a>
          </li>
        )}
        {link.map((item) => (
          <li key={item.id}>
            {Array.isArray(item.link) ? (
              <a
                href={"#"}
                className="next"
                onClick={() => selectNext(item.id)}
              >
                <span>{item.label}</span>
              </a>
            ) : (
              <a href={item.link}>
                <span>{item.label}</span>
              </a>
            )}

            {item.id === menus[getNextIndex()] &&
              displaySubMenu(
                link.find((item) => item.id === menus[getNextIndex()])
              )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <Wrapper height={heights[heights.length - 1]}>
      {displaySubMenu({ isParent: true, link: items })}
    </Wrapper>
  );
};

const itemShape = {
  id: PropTypes.number,
  label: PropTypes.string,
};

itemShape.link = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.arrayOf(PropTypes.shape(itemShape)),
]);

ReactSlinky.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(itemShape)),
};

export default ReactSlinky;
