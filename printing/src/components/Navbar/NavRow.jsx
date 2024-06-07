'use client';

import { usePathname } from "next/navigation";
import { useState } from "react";
import ArrowNav from "../UI/icons/ArrowNav";
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { useRouter } from "next/navigation";

import styles from "./Navbar.module.scss";
import cn from "classnames";

import arrow from "../../../public/add/arrowNav.svg"

const mont = Montserrat({ subsets: ["latin"] });

const NavRow = ({ title, options, onClick }) => {
    const [isExpanded, setExpanded] = useState(false);
    const path = usePathname();

    const handleNavClick = () => {
        setExpanded(prev => !prev);
    }

    const router = useRouter();

    const handleClick = (href) => {
        console.log(href);
        router.push(href);
    }

    return (
        <>
            <button className={cn(styles.block, mont.className)} onClick={handleNavClick}>
                <div className={styles.title}>{title}</div>
                <Image alt="стрелка" src={arrow} className={isExpanded ? cn(styles.rotate, styles.size) : styles.size}/>
            </button>
            {isExpanded && (
                <div className={styles.links}>
                    {options.map((i, ind) => (
                        <Link
                            key={ind}
                            className={path === i.href ? cn(styles.subtitle, styles.active, styles.bold, mont.className) : cn(styles.subtitle, mont.className)} 
                            href={i.href}
                            onClick={onClick}
                        >{i.name}</Link>
                    ))}
                </div>)}
        </>
    )
}

export default NavRow;