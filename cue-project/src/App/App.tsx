import React from 'react';
import './App.css';
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import Main from "@components/Main/Main";
import SidebarLeft from "@components/Sidebar/SidebarLeft";
import SidebarRight from "@components/Sidebar/SidebarRight";

export default class App extends React.Component {

  constructor(props : any) {
    super(props);
    this.state = {}
  }

  render() {
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
}

