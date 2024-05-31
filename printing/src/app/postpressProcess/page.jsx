import BreadCrumbs from "../../components/UI/BreadCrumbs/BreadCrumbs";
import Service from "../../components/Service/Service";
import Table from "../../components/Table/Table";
import Carousel from "../../components/Carousel/Carousel";
import { getPrices } from "@/utils/getPrices";
import TableSkeleton from "../../components/UI/TableSkeleton/TableSkeleton";

import styles from "./postpressProcess.module.scss";

import { SERVICESDATA } from "../../config/index";

export const metadata = {
    title: "Послепечатная обработка фото и документов в Минске",
    description: "Послепечатная обработка фото и документов (брошюровка, резка, ламинирование) в Минске",
};

const ServicePage = async () => {

    const prices = await getPrices();

    const id = 7;
    const data = SERVICESDATA[id];
    const href = "/postpressProcess";
    
    const minPrice = prices.minPriceData[id][1];

    return (
        <div className={styles.w768}>
            <BreadCrumbs items={[
                    { title: "Каталог услуг", href: "/catalog" },
                    { title: "Послепечатная обработка", href: href },
            ]}/>
            <Service title={data.title} parag={data.parag} list={data.list} url={data.url} color={data.color} id={id} minPrice={minPrice}/>
            <div className={styles.bgc}>
                {prices.length === 0 ? <TableSkeleton /> : <Table path={href} allData={prices}/>}
                <Carousel />
            </div>
        </div>
    )
}

export default ServicePage;