import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth } from "../components/shared/auth";
import { Home } from "../components/shared/home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
