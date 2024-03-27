import { MENU } from "../../config/index";
import NavItem from "./NavItem";

import styles from "./Navbar.module.scss";

const Navbar = () => {

    return (
        <div className={styles.navbar}>
            <div className={styles.menu}>
                {MENU.map((item, i) => <NavItem key={i} label={item.label} href={item.href}/>)}
            </div>
        </div>
    )
}

export default Navbar;