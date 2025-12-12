import ToggleThemeButton from "../ToggleThemeButton/ToggleThemeButton";
import style from "./Navbar.module.css";

function Navbar(){
    return(
        <nav className={style.nav}>
            <ToggleThemeButton/>
        </nav>
    );
} export default Navbar;