import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import LogoIcon from "../UI/icons/Logo";
import EmailIcon from "../UI/icons/Email";
import LabourIcon from "../UI/icons/Labour";
import LocationIcon from "../UI/icons/Location";
import TelegramIcon from "../UI/icons/Telegram";
import ViberIcon from "../UI/icons/Viber";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.scss";
import cn from "classnames";


const Header = () => {

    return (
        <header>
            <MaxWidthWrapper>
                <div className={styles.rowUpper}>
                    <div className={styles.item}>
                        <LocationIcon />
                        <p className={styles.text}>ул. Долгобродская 14, комната 26</p>
                    </div>
                    <div className={styles.listItems}>
                        <div className={styles.item}>
                            <EmailIcon />
                            <p className={styles.text}>subliby@mail.ru</p>
                        </div>
                        <div className={styles.item}>
                            <ViberIcon />
                            <TelegramIcon />
                            <p className={styles.text}>+375 (29) 612 95 85</p>
                        </div>
                        <div className={styles.item}>
                            <LabourIcon />
                            <p className={styles.text}>пн-пт с 10.00 - 18.00</p>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
            <div className={styles.rowLower}>
                <MaxWidthWrapper className={styles.container}>
                    <Link href="/">
                        <LogoIcon />
                    </Link>
                    <Navbar />
                </MaxWidthWrapper>
            </div>
        </header>

    )
}

export default Header;