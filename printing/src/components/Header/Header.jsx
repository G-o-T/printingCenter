"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import LogoIcon from "../UI/icons/Logo";
import EmailIcon from "../UI/icons/Email";
import LabourIcon from "../UI/icons/Labour";
import LocationIcon from "../UI/icons/Location";
import TelegramIcon from "../UI/icons/Telegram";
import ViberIcon from "../UI/icons/Viber";
import PhoneIcon from "../UI/icons/Phone";
import BurgerIcon from "../UI/icons/BurgerIcon";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.scss";
import cn from "classnames";
import { convertImageSize } from "@/components/utils/convertImageSize";
import DropdownMenu from "../Navbar/DropdownMenu";


const Header = () => {

    const [screenWidth, setScreenWidth] = useState(undefined);
    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        handleResize();
        window.addEventListener('resize', handleResize);
        return window.removeEventListener('resize', handleResize)
    }, []);

    const widthLogo = convertImageSize(screenWidth, 176);
    const heightLogo = convertImageSize(screenWidth, 46);

    const [isShown, setShown] = useState(false);

    const switchIsExpanded = (expandedState) => {
        setShown(expandedState);
    }

    return (
        <header>
            <MaxWidthWrapper className={styles.hidden}>
                <div className={styles.rowUpper}>
                    <div className={styles.item}>
                        <LocationIcon width={24} height={24}/>
                        <p className={styles.text}>ул. Долгобродская 14, комната 26</p>
                    </div>
                    <div className={styles.listItems}>
                        <div className={styles.item}>
                            <EmailIcon width={24} height={24}/>
                            <p className={styles.text}>subliby@mail.ru</p>
                        </div>
                        <div className={styles.item}>
                            <ViberIcon width={25} height={26}/>
                            <TelegramIcon width={23} height={24}/>
                            <p className={styles.text}>+375 (29) 755 35 65</p>
                        </div>
                        <div className={styles.item}>
                            <LabourIcon width={24} height={24}/>
                            <p className={styles.text}>пн-пт с 10.00 - 18.00</p>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
            <div className={styles.rowLower}>
                <MaxWidthWrapper className={styles.container}>
                    <div className={styles.shown}>
                        <Link href="tel:+375297553565">
                            <PhoneIcon />
                        </Link>
                    </div>
                    <Link href="/" onClick={() => setShown(false)}>
                        <LogoIcon width={screenWidth > 768 ? 176 : 118} height={screenWidth > 768 ? 46 : 32} />
                    </Link>
                    <Navbar className={styles.hidden} />
                    <div className={styles.shown}>
                        <button className={styles.burgerBtn} onClick={() => setShown(prev => !prev)}>
                            <BurgerIcon />
                        </button>
                    </div>
                </MaxWidthWrapper>
            </div>
            {isShown &&
                    <MaxWidthWrapper className={styles.dropdownMenu}>
                        <DropdownMenu switchIsExpanded={switchIsExpanded} />
                    </MaxWidthWrapper>}
        </header>

    )
}

export default Header;