import BreadCrumbs from "../../components/UI/BreadCrumbs/BreadCrumbs";
import Service from "../../components/Service/Service";
import MaxWidthWrapper from "../../components/MaxWidthWrapper/MaxWidthWrapper";
import Link from "next/link";
import Table from "../../components/Table/Table";
import Carousel from "../../components/Carousel/Carousel";
import { getPrices } from "@/utils/getPrices";
import TableSkeleton from "../../components/UI/TableSkeleton/TableSkeleton";

import styles from "./collagePage.module.scss";

import { SERVICESDATA } from "../../config/index";

export const metadata = {
    title: "Фотоколлаж в Минске",
    description: "Создание стильных фотоколлажей из фото в Минске",
};

const ServicePage = async () => {

    const prices = await getPrices();

    const id = 3;
    const data = SERVICESDATA[id];
    const href = "/collage";

    const minPrice = prices.minPriceData[id][1];

    return (
        <div className={styles.w768}>
            <BreadCrumbs items={[
                    { title: "Каталог услуг", href: "/catalog" },
                    { title: "Фотоколлаж", href: href },
            ]}/>
            <Service title={data.title} parag={data.parag} list={data.list} url={data.url} color={data.color} id={id} minPrice={minPrice}/>
            <div className={styles.bgc}>
                {prices.length === 0 ? <TableSkeleton /> : <Table path={href} allData={prices}/>}
                <MaxWidthWrapper>
                <div className={styles.note}>
                    <p className={styles.par}>Сроки и стоимость выполнения работ устанавливаются при приёме заказа специалистом печатного центра.</p>
                    <p className={styles.par}>В стоимость не входит печать готового коллажа, выбрать необходимый формат фотографии можно в <Link href="/photoPrint" className={styles.link}>разделе «Печать фотографий»</Link>.</p>
                </div>
                </MaxWidthWrapper>
                {/* <Carousel /> */}
            </div>
        </div>
    )
}

export default ServicePage;

