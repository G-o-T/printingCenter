import BreadCrumbs from "../../components/UI/BreadCrumbs/BreadCrumbs";
import Service from "../../components/Service/Service";
import MaxWidthWrapper from "../../components/MaxWidthWrapper/MaxWidthWrapper";
import Table from "../../components/Table/Table";
import Carousel from "../../components/Carousel/Carousel";
import { getPrices } from "@/utils/getPrices";
import TableSkeleton from "../../components/UI/TableSkeleton/TableSkeleton";

import styles from "./businessCardPage.module.scss";

import { SERVICESDATA } from "../../config/index";

export const metadata = {
    title: "Изготовление визиток в Минске",
    description: "Оперативная и качественная печать визиток в Минске",
};

const ServicePage = async () => {
    const prices = await getPrices();

    const id = 10;
    const data = SERVICESDATA[id];
    const href = "/businessCard";

    const minPrice = prices.minPriceData[id][1];

    return (
        <div className={styles.w768}>
            <BreadCrumbs
                items={[
                    { title: "Каталог услуг", href: "/catalog" },
                    { title: "Визитки", href: href },
                ]}
            />
            <Service
                title={data.title}
                parag={data.parag}
                list={data.list}
                url={data.url}
                color={data.color}
                id={id}
                minPrice={minPrice}
            />
            <div className={styles.bgc}>
                {prices.length === 0 ? (
                    <TableSkeleton />
                ) : (
                    <Table path={href} allData={prices} />
                )}
                <MaxWidthWrapper>
                    <div className={styles.note}>
                        <p className={styles.par}>
                            * Комплект визиток – 96 штук
                        </p>
                    </div>
                </MaxWidthWrapper>
                {/* <Carousel /> */}
            </div>
        </div>
    );
};

export default ServicePage;
