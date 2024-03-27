import BreadCrumbs from "../../components/UI/BreadCrumbs/BreadCrumbs";
import styles from "./ContactsPage.module.scss";
import Title from "../../components/UI/Title/Title";
import MapBlock from "../../components/Map/Map";
import MaxWidthWrapper from "../../components/MaxWidthWrapper/MaxWidthWrapper";

const ContactsPage = () => {
    return (
        <>
            <BreadCrumbs items={[
                { title: "Контакты", href: "/contacts" },
            ]}/>
            <MaxWidthWrapper>
                <Title>Контакты печатного центра</Title>
            </MaxWidthWrapper>
            <MapBlock>
                <div className={styles.contacts}>
                    <div className={styles.info}>
                        <div>
                            <p>г. Минск, </p>
                            <p>ул. Долгобродская, д. 14, ком. 26</p>
                        </div>
                        <div className={styles.row}>
                            <h4 className={styles.row}>Телефон:</h4>
                            <p>+375 (29) 612-95-85</p>
                        </div>
                        <div className={styles.row}>
                            <h4 className={styles.row}>E-mail:</h4>
                            <p>subliby@mail.ru</p>
                        </div>
                    </div>
                    <div className={styles.schedule}>
                        <h4 className={styles.row}>График работы</h4>
                        <p>пн-пт: 10:00 - 18:00 без обеда</p>
                        <p>сб-вс: выходной</p>
                    </div>
                </div>
            </MapBlock>
        </>
    )
}

export default ContactsPage;