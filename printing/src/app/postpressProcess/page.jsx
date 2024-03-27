import BreadCrumbs from "../../components/UI/BreadCrumbs/BreadCrumbs";
import Service from "../../components/Service/Service";
import Table from "../../components/Table/Table";
import Carousel from "../../components/Carousel/Carousel";

import styles from "./postpressProcess.module.scss";

import { SERVICESDATA } from "../../config/index";

const ServicePage = () => {

    const id = 7;
    const data = SERVICESDATA[id];
    const href = "/postpressProcess";

    return (
        <>
            <BreadCrumbs items={[
                    { title: "Каталог услуг", href: "#" },
                    { title: "Послепечатная обработка", href: href },
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