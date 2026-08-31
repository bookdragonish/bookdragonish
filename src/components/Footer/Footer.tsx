import SomeContainer from "../SomeContainer/SomeContainer";
import Gears from "../ui/Gears";
import style from "./Footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <h2>Contact me</h2>
      <SomeContainer />
      <div className={style.gear_container}>
        <Gears />
      </div>
      
    </footer>
  );
}
export default Footer;
