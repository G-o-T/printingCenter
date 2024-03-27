import MenuButton from "../UI/Buttons/MenuButton/MenuButton";
import Dropdown from "./Dropdown";

import styles from "./Navbar.module.scss";

const NavItem = ({ label, href }) => {
    return (
        <div className={styles.item}>
            {label === "Каталог услуг" 
                    ? 
                <Dropdown label={label} href={href}/> 
                    :
                <MenuButton label={label} href={href}/>
            }
        </div>
    )
}

export default NavItem;