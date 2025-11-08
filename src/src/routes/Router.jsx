import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import AdminPage from "../pages/AdminPage/AdminPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
