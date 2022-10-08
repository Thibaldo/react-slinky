import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #f6f7f8;
  width: 100%;
  ${({ height }) =>
    Boolean(height) &&
    `
      height: ${height}px;
    `};
  overflow: hidden;
  transform: translateZ(0);
  transition-duration: 300ms;

  & > ul {
    left: 0;
    position: relative;
    transform: translateZ(0);
    transition-duration: 300ms;
  }

  ul {
    margin: 0;
    width: 100%;
  }

  li {
    list-style: none;
    margin: 0;

    a {
      display: flex;
      align-items: center;
      text-decoration: none;

      &:hover {
        color: #59e671;
      }

      &:not(.back) {
        padding: 1em;
        color: #333;
      }

      &:not(.back):hover {
        background: rgba(90, 200, 250, 0.25);
      }

      span {
        text-align: start;
        flex: 1;
        line-height: 1.4;
      }
    }

    ul {
      left: 100%;
      position: absolute;
      top: 0;
    }

    &.header {
      display: flex;
    }
  }

  .back::before {
    padding: 1em;
    transform: scaleX(-1);
  }

  .next::after,
  .back::before {
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+ICAgIDxwYXRoIGQ9Ik0xMi4yMTkgMi4yODFMMTAuNzggMy43MiAxOC4wNjIgMTFIMnYyaDE2LjA2M2wtNy4yODIgNy4yODEgMS40MzggMS40MzggOS05IC42ODctLjcxOS0uNjg3LS43MTl6IiAvPjwvc3ZnPg==)
      center no-repeat;
    background-size: 1em;
    content: "";
    height: 1em;
    opacity: 0.25;
    transition: 200ms;
    width: 1em;
  }

  .next:hover::after,
  .back:hover::before {
    opacity: 0.75;
  }
`;

export { Wrapper };
