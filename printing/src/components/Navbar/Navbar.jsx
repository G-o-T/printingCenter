import { MENU } from "../../config/index";
import NavItem from "./NavItem";
import cn from "classnames";

import styles from "./Navbar.module.scss";

const Navbar = ({className}) => {

    return (
        <div className={cn(styles.navbar, className)}>
            <div className={styles.menu}>
                {MENU.map((item, i) => <NavItem key={i} label={item.label} href={item.href} />)}
            </div>
        </div>
    )
}

export default Navbar;