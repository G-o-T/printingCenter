'use client';

import { useState } from "react";
import { usePathname } from "next/navigation";
import MenuButton from "../UI/Buttons/MenuButton/MenuButton";
import { SERVICES } from "../../config/index";
import Link from "next/link";
import NavRow from "./NavRow";

import styles from "./Navbar.module.scss";
import cn from "classnames";

const Dropdown = (label, href) => {
    const [isExpanded, setExpanded] = useState(false);

    const showDropdown = () => {
        setExpanded(true);
    }

    const hideDropdown = () => {
        setExpanded(false);
    }

    const path = usePathname();

    return (
        <div className={styles.wrapper}>
            <MenuButton label="Каталог услуг" href="/catalog" onMouseEnter={showDropdown} onMouseLeave={hideDropdown} />
            {isExpanded && (
                <div className={styles.dropdown} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                    {SERVICES.map((i, ind) => (
                        <div key={ind}>
                            {typeof i.href === 'string'
                                ? 
                            <Link  href={i.href} className={path === i.href ? cn(styles.link, styles.active) : cn(styles.link)}>
                                {i.title}
                            </Link>
                                :
                            <NavRow title={i.title} options={i.options}/>
                            }
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Dropdown;