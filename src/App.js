import React from "react";
import Headermenu from './components/Headermenu'
import Logo from './components/Logo'
import './App.css';
import { NewsContextProvider } from "./NewsContext"
import News from "./components/News"

function App() {

  return (
    <>
    <div className= "header">
        <Logo />
        <span><Headermenu /></span>
    </div>

        <NewsContextProvider>
            <News />
        </NewsContextProvider>

    </>
  );
}

export default App;
