import BreadCrumbs from "../../components/UI/BreadCrumbs/BreadCrumbs";
import Service from "../../components/Service/Service";
import MaxWidthWrapper from "../../components/MaxWidthWrapper/MaxWidthWrapper";
import Table from "../../components/Table/Table";
import Carousel from "../../components/Carousel/Carousel";

import styles from "./fabricPrintPage.module.scss";

import { SERVICESDATA } from "../../config/index";

const ServicePage = () => {

    const id = 8;
    const data = SERVICESDATA[id];
    const href = "/fabricPrint";

    return (
        <>
            <BreadCrumbs items={[
                    { title: "Каталог услуг", href: "#" },
                    { title: "Печать на футболках", href: href },
            ]}/>
            <Service title={data.title} parag={data.parag} list={data.list} url={data.url} color={data.color} id={id}/>
            <div className={styles.bgc}>
                <Table path={href}/>
                <MaxWidthWrapper>
                <div className={styles.note}>
                    <p className={styles.par}>* При изготовлении футболки методом сублимации изображение/лого/принт наносят на крой, а затем сшивают в изделие. Размер и место нанесения изображений/лого/принтов на стоимость не влияет.</p>
                    <p className={styles.par}>Минимальный заказ от 5 штук.</p>
                </div>
                </MaxWidthWrapper>
                <Carousel />
            </div>
        </>
    )
}

export default ServicePage;