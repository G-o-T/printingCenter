import BreadCrumbs from "../../components/UI/BreadCrumbs/BreadCrumbs";
import Service from "../../components/Service/Service";
import MaxWidthWrapper from "../../components/MaxWidthWrapper/MaxWidthWrapper";
import Table from "../../components/Table/Table";
import Carousel from "../../components/Carousel/Carousel";

import styles from "./PhotocopyPage.module.scss";

import { SERVICESDATA } from "../../config/index";

const ServicePage = () => {

    const id = 4;
    const data = SERVICESDATA[id];
    const href="/photocopy";

    return (
        <>
            <BreadCrumbs items={[
                    { title: "Каталог услуг", href: "#" },
                    { title: "Ксерокопия и печать", href: href },
            ]}/>
            <Service title={data.title} parag={data.parag} list={data.list} url={data.url} color={data.color} id={id}/>
            <div className={styles.bgc}>
                <Table path={href}/>
                <MaxWidthWrapper>
                <div className={styles.note}>
                    <p className={styles.par}>* Цена двусторонней печати рассчитывается как стоимость двух односторонних страниц.</p>
                    <p className={styles.par}>* Скидка 15% при объеме заказа более 100 листов.</p>
                </div>
                </MaxWidthWrapper>
                <Carousel />
            </div>
        </>
    )
}

export default ServicePage;

