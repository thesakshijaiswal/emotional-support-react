import React from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/footer";
import Banner from "./component/Banner";

const App = () => {
  return (
    <div className="w-[1800px] m-auto">
      <Navbar />
      <Banner />
      <Footer />
    </div>
  );
};

export default App;
