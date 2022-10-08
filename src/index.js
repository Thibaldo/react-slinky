import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import ReactSlinky from "./ReactSlinky";
import exampleItems from "./exampleItems";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ReactSlinky items={exampleItems} />);
