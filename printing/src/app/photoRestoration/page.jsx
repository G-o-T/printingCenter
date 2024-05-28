import BreadCrumbs from "../../components/UI/BreadCrumbs/BreadCrumbs";
import Service from "../../components/Service/Service";
import MaxWidthWrapper from "../../components/MaxWidthWrapper/MaxWidthWrapper";
import Table from "../../components/Table/Table";
import Carousel from "../../components/Carousel/Carousel";
import { getPrices } from "@/utils/getPrices";
import TableSkeleton from "../../components/UI/TableSkeleton/TableSkeleton";

import styles from "./photoRestorationPage.module.scss";

import { SERVICESDATA } from "../../config/index";

const ServicePage = async () => {

    const prices = await getPrices();

    const id = 2;
    const data = SERVICESDATA[id];
    const href = "/photoRestoration";
    
    const minPrice = prices.minPriceData[id][1];

    export const metadata = {
        title: "Реставрация фото в Минске",
        description: "Качественная реставрация фото в Минске",
    };

    return (
        <div className={styles.w768}>
            <BreadCrumbs items={[
                    { title: "Каталог услуг", href: "/catalog" },
                    { title: "Реставрация фото", href: href },
            ]}/>
            <Service title={data.title} parag={data.parag} list={data.list} url={data.url} color={data.color} id={id} minPrice={minPrice}/>
            <div className={styles.bgc}>
                {prices.length === 0 ? <TableSkeleton /> : <Table path={href} allData={prices}/>}
                <MaxWidthWrapper>
                <div className={styles.note}>
                    <div className={styles.wrapper}>
                        <p className={styles.noteTitle}>Примечание:</p>
                        <ul className={styles.list}>
                            <li className={styles.par}>В стоимость услуги входит: сканирование фотоснимка, обработка поврежденных фрагментов, запись цифровой копии снимка и отретушированной фотографии на Ваш носитель информации или отправка их на адрес Вашей электронной почты.</li>
                        </ul>
                    </div>
                </div>
                </MaxWidthWrapper>
                <Carousel />
            </div>
        </div>
    )
}

export default ServicePage;