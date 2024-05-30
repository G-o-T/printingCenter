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

let screenWidth;

const Header = () => {

    useEffect(() => {
        screenWidth = window.innerWidth;
    }, []);

    const widthLogo = convertImageSize(screenWidth, 176);
    const heightLogo = convertImageSize(screenWidth, 46);
    const s23 = convertImageSize(screenWidth, 23);
    const s24 = convertImageSize(screenWidth, 24);
    const s25 = convertImageSize(screenWidth, 25);
    const s26 = convertImageSize(screenWidth, 26); 

    const [isShown, setShown] = useState(false);

    const switchIsExpanded = (expandedState) => {
        setShown(expandedState);
    }

    return (
        <header>
            <MaxWidthWrapper className={styles.hidden}>
                <div className={styles.rowUpper}>
                    <div className={styles.item}>
                        <LocationIcon width={Math.min(s24, 24)} height={Math.min(s24, 24)}/>
                        <p className={styles.text}>ул. Долгобродская 14, комната 26</p>
                    </div>
                    <div className={styles.listItems}>
                        <div className={styles.item}>
                            <EmailIcon width={Math.min(s24, 24)} height={Math.min(s24, 24)}/>
                            <p className={styles.text}>subliby@mail.ru</p>
                        </div>
                        <div className={styles.item}>
                            <ViberIcon width={Math.min(s25, 25)} height={Math.min(s26, 26)}/>
                            <TelegramIcon width={Math.min(s23, 23)} height={Math.min(s24, 24)}/>
                            <p className={styles.text}>+375 (29) 755 35 65</p>
                        </div>
                        <div className={styles.item}>
                            <LabourIcon width={Math.min(s24, 24)} height={Math.min(s24, 24)}/>
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
                        <LogoIcon width={screenWidth > 768 ? Math.min(widthLogo, 176) : 118} height={screenWidth > 768 ? Math.min(heightLogo, 46) : 32} />
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