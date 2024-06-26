import Link from "next/link";
import InstaIcon from "../UI/icons/Instagram";
import styles from "./Footer.module.scss";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import { CONTACTS, SERVICES } from "../../config/index";
import cn from "classnames";

const Footer = () => {

    return (
        <footer className={styles.container}>
            <MaxWidthWrapper className={styles.wrapper}>
                <div className={styles.contactInfo}>
                    <div className={styles.list}>
                        <h5 className={styles.title}>Информация о компании</h5>
                        <div className={styles.data}>
                            <p>ЧТУП “Сублимационые материалы”</p>
                            <p>г.Минск, ул.Долгобродская, д.14, пом.26, индекс 220037</p>
                            <p>УНП 192013317</p>
                            <p>Р/С:BY67UNBS30120104310000010933, в&nbsp;РКЦ№10, ЗАО «БСБ Банк», BIC UNBSBY2X</p>
                        </div>
                    </div>
                    <div className={styles.list}>
                        <h5 className={styles.title}>Контактная информация</h5>
                        <div className={styles.contacts}>
                            {CONTACTS.map((i, ind) => 
                                <div className={styles.row} key={ind}>
                                    {i.icon2
                                    ?
                                    <div className={styles.icons}>
                                        {i.icon}
                                        {i.icon2}
                                    </div>
                                    :
                                    i.icon}
                                    <p>{i.text}</p>
                                </div>
                            )}
                            <Link href="https://www.instagram.com/subli.by/" className={styles.link} target="_blank">
                                <div className={styles.row}>
                                    <InstaIcon />
                                    <p>subli.by</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className={cn(styles.list, styles.catalog)}>
                        <h5 className={styles.title}>Каталог услуг</h5>
                        <ul className={styles.items}>
                            <li>
                                <Link className={styles.item} href='/catalog/#photo'>Фотоуслуги</Link>
                            </li>
                            <li>
                                <Link className={styles.item} href='/catalog/#print'>Печать документов</Link>
                            </li>
                            <li>
                                <Link className={styles.item} href='/catalog/#present'>Сувениры и подарки</Link>
                            </li>
                            <li>
                                <Link className={styles.item} href='/catalog/#poly'>Полиграфическая продукция</Link>
                            </li>
                            <li>
                                <Link className={styles.item} href='/catalog/#design'>Дизайн и верстка</Link>
                            </li>
                            <li>
                                <Link className={styles.item} href='/catalog/#post'>Послепечатная обработка</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </MaxWidthWrapper>
        </footer>
    )
}

export default Footer;