'use client';

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import MenuButton from "../UI/Buttons/MenuButton/MenuButton";
import { SERVICES } from "../../config/index";
import Link from "next/link";
import NavRow from "./NavRow";

import styles from "./Navbar.module.scss";
import cn from "classnames";

const DropdownMenu = (label, href, switchIsExpanded) => {

    const hideDropdown = () => {
        switchIsExpanded(false);
    }

    const path = usePathname();

    return (
        <div className={styles.wrapperDdM}>
            <div className={styles.dropdownDdM}>
                {SERVICES.map((i, ind) => (
                    <div key={ind}>
                        {typeof i.href === 'string'
                            ? 
                        <Link  href={i.href} className={path === i.href ? cn(styles.link, styles.active) : cn(styles.link)} onClick={hideDropdown}>
                            {i.title}
                        </Link>
                            :
                        <NavRow title={i.title} options={i.options} onClick={hideDropdown}/>
                        }
                    </div>
                ))}
            </div>
            <Link
                className={cn(styles.btn, styles.link)}
                target="_blank"
                href="/price.pdf" 
                download="price"
            >
                Прайс
            </Link>
            <Link  href='/order' className={path === '/order' ? cn(styles.link, styles.active, styles.width) : cn(styles.link, styles.width)} onClick={hideDropdown}>
                Заказ онлайн
            </Link>
            <Link  href='/blog' className={path === '/blog' ? cn(styles.link, styles.active, styles.width) : cn(styles.link, styles.width)} onClick={hideDropdown}>
                Блог    
            </Link>
            <Link  href='/contacts' className={path === '/contacts' ? cn(styles.link, styles.active, styles.width) : cn(styles.link, styles.width)} onClick={hideDropdown}>
                Контакты
            </Link>
        </div>
    )
}

export default DropdownMenu;