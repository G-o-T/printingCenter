import BreadCrumbs from "../../components/UI/BreadCrumbs/BreadCrumbs";
import Service from "../../components/Service/Service";
import MaxWidthWrapper from "../../components/MaxWidthWrapper/MaxWidthWrapper";
import Table from "../../components/Table/Table";
import Carousel from "../../components/Carousel/Carousel";
import { getPrices } from "@/utils/getPrices";
import TableSkeleton from "../../components/UI/TableSkeleton/TableSkeleton";

import styles from "./PhotocopyPage.module.scss";

import { SERVICESDATA } from "../../config/index";

export const metadata = {
    title: "Ксерокопия и печать в Минске",
    description: "Оперативная ксерокопия и печать документов в Минске",
};

const ServicePage = async () => {

    const prices = await getPrices();

    const id = 4;
    const data = SERVICESDATA[id];
    const href="/photocopy";
    
    const minPrice = prices.minPriceData[id][1];

    return (
        <div className={styles.w768}>
            <BreadCrumbs items={[
                    { title: "Каталог услуг", href: "/catalog" },
                    { title: "Ксерокопия и печать", href: href },
            ]}/>
            <Service title={data.title} parag={data.parag} list={data.list} url={data.url} color={data.color} id={id} minPrice={minPrice}/>
            <div className={styles.bgc}>
                {prices.length === 0 ? <TableSkeleton /> : <Table path={href} allData={prices}/>}
                <MaxWidthWrapper>
                <div className={styles.note}>
                    <p>* Печать на данном виде бумаги осуществляется в формате А3 (297х420мм)</p>
                    <div className={styles.wrapper}>
                        <p className={styles.noteTitle}>Примечание:</p>
                        <ul className={styles.list}>
                            <li className={styles.par}>Цена двусторонней печати рассчитывается как стоимость двух односторонних страниц.</li>
                            <li className={styles.par}>Скидка 15% при объеме заказа более 100 листов.</li>
                        </ul>
                    </div>
                </div>
                </MaxWidthWrapper>
                {/* <Carousel /> */}
            </div>
        </div>
    )
}

export default ServicePage;

