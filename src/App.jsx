import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Home } from "./pages/home";
import { Shop } from "./pages/shop";
import Navigation from "./components/navigation";
import { Contact } from "./pages/contact";
import { Signin } from "./pages/signin";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signin" element={<Signin />} />
      </Route>
    </Routes>
  );
}

export default App;
