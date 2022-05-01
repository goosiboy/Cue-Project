import { Component } from 'react';
import './App.css';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Main from "../components/main/Main";
import SidebarLeft from "../components/sidebar/SidebarLeft";
import SidebarRight from "../components/sidebar/SidebarRight";

export default class App extends Component {

  constructor(props: any) {
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

