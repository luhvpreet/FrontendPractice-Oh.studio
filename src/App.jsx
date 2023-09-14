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
          <Route path="/FrontendPractice-oh.studio/" element={<Home />} />
          <Route
            path="/FrontendPractice-oh.studio/profile"
            element={<Profile />}
          />
          <Route
            path="/FrontendPractice-oh.studio/contact"
            element={<Contact />}
          />
        </Routes>
      </>
      <Footer />
    </>
  );
}

export default App;
