import '../App.css'
import search from "../img/search.png"

export default function HeaderMenu() {
    return (
        <>
        <header className = 'header--menu' >
                <p className = 'header--item'>Newsletter</p>
                <p className = 'header--item'>SignIn</p>
                <p className = 'header--button'>Subscribe</p>
            <img src = {search} alt="" />
        </header>
       <div className = "header--icon"> </div>
        </>
    )
}