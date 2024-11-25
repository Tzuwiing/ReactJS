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
import Conditional from "./meeting5/coba/coba2.jsx";
import Coba from "./meeting5/coba/coba3.jsx";
import Execution from "./meeting5/praktek/soal1.jsx";
import And from "./meeting5/coba/coba4.jsx";
import KotakPesan from "./meeting5/coba/coba5.jsx";
import Paket from "./meeting5/praktek/soal2.jsx";
import Message from "./meeting5/praktek/soal3.jsx";
import Waktu from "./meeting5/praktek/soal4.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Waktu />
  </StrictMode>
);
