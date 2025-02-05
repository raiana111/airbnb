// import React from "react";
// import Header from "./components/Header";
// import CardGrid from "./components/CardGrid";
// import Footer from "./components/Footer";
// import LoginModal from "./components/LoginModal";

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <CardGrid />
//       <Footer />
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import Header from "./components/Header";
// import CardGrid from "./components/CardGrid";
// import Footer from "./components/Footer";
// import LoginModal from "./components/LoginModal";

// const App = () => {
//   const [isLoginVisible, setIsLoginVisible] = useState(false);

//   const handleLoginOpen = () => setIsLoginVisible(true);
//   const handleLoginClose = () => setIsLoginVisible(false);

//   return (
//     <div>
//       <Header onLoginClick={handleLoginOpen} />
//       <CardGrid />
//       <Footer />
//       {isLoginVisible && <LoginModal onClose={handleLoginClose} />}
//     </div>
//   );
// };

// export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import SearchPage from "./Pages/SearchPage";

const App = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Gallery />} path="/random/:id" />
      <Route element={<SearchPage />} path="/search_page" />
    </Routes>
  );
};

export default App;

