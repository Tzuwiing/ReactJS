import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import App2 from "./meeting2/tugas2.jsx";
import App3 from "./meeting3/praktek3.jsx";
import Form from "./meeting4/fragment/form.jsx";
import Header from "./meeting4/fragment/header.jsx";
import Login from "./meeting4/layout/login.jsx";
import Register from "./meeting4/layout/register.jsx";
import Pages from "./meeting4/page/page.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Pages />
  </StrictMode>
);
