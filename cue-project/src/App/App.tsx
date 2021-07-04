import React from 'react';
import './App.css';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Main from "../Components/Main/Main";
import SidebarLeft from "../Components/Sidebar/SidebarLeft";
import SidebarRight from "../Components/Sidebar/SidebarRight";

function App() {
  return (
    <div className="App">     
      <Header />
      <SidebarLeft />
      <Main />
      <SidebarRight />
      <Footer />
    </div>
  );
}

export default App;
