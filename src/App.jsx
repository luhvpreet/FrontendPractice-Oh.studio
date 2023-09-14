import "./styles/reset.css";
import "./styles/root.css";
import "./styles/general.css";

import Header from "./Header";

import ScrollToTop from "./ScrollToTop";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";

import Footer from "./Footer";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </>
      <Footer />
    </>
  );
}

export default App;
