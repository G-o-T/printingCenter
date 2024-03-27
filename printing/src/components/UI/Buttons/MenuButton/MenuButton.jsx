'use client';

import { Montserrat } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

import styles from "./MenuButton.module.scss";
import cn from "classnames";

const mont = Montserrat({ subsets: ["latin"] });

const MenuButton = ({label, href, onMouseEnter, onMouseLeave}) => {

    const path = usePathname();
    const router = useRouter();

    const handleClick = () => {
        router.push(href);
    }

    return (
            <button className={path === href ? cn(styles.btn, styles.btnActive, mont.className) : cn(styles.btn, mont.className)} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={handleClick}>
                {label}
            </button>
    )

}

export default MenuButton;