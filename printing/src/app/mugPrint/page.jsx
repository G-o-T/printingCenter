import BreadCrumbs from "../../components/UI/BreadCrumbs/BreadCrumbs";
import Service from "../../components/Service/Service";
import Table from "../../components/Table/Table";
import Carousel from "../../components/Carousel/Carousel";

import styles from "./mugPrint.module.scss";

import { SERVICESDATA } from "../../config/index";

const ServicePage = () => {

    const id = 9;
    const data = SERVICESDATA[id];
    const href = "/mugPrint";

    return (
        <>
            <BreadCrumbs items={[
                    { title: "Каталог услуг", href: "#" },
                    { title: "Печать на кружках", href: href },
            ]}/>
            <Service title={data.title} parag={data.parag} list={data.list} url={data.url} color={data.color} id={id}/>
            <div className={styles.bgc}>
                <Table path={href}/>
                <Carousel />
            </div>
        </>
    )
}

export default ServicePage;