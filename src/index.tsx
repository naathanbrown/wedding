import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Home from "./pages/home/Home";
import RSVP from "./pages/rsvp/rsvp";
import reportWebVitals from "./reportWebVitals";

let queryStringParam = window.location.href.split("guest=")[1];

if (queryStringParam != "all") {
  queryStringParam = "reception";
}

localStorage.setItem("guest_type", queryStringParam);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rsvp" element={<RSVP />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
