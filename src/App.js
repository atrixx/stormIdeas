import React from "react";
import HeaderMenu from './components/HeaderMenu'
import Logo from './components/Logo'
import './App.css';
import { NewsContextProvider } from "./NewsContext"
import News from "./components/News"
import Categories from "./components/Categories"

function App() {

  return (
    <>
    <div className= "header">
        <Logo />
        <HeaderMenu />
    </div>
        <NewsContextProvider>
            <nav className = "categories">
                <Categories />
            </nav>
        <h3 className = "news--container news--breaking">Breaking News</h3>
            <News />
        </NewsContextProvider>
    </>
  );
}

export default App;
