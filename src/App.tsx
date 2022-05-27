import React from "react";
import "./App.css";
import Content from "./components/content/Content";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <div className="App">
      <Menu />
      <SideBar />
      <Header />
      <Content />
    </div>
  );
}

export default App;
