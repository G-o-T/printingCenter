import BreadCrumbs from "../../components/UI/BreadCrumbs/BreadCrumbs";
import Service from "../../components/Service/Service";
import MaxWidthWrapper from "../../components/MaxWidthWrapper/MaxWidthWrapper";
import Link from "next/link";
import Table from "../../components/Table/Table";
import Carousel from "../../components/Carousel/Carousel";

import styles from "./collagePage.module.scss";

import { SERVICESDATA } from "../../config/index";

const ServicePage = () => {

    const id = 3;
    const data = SERVICESDATA[id];
    const href = "/collage";

    return (
        <>
            <BreadCrumbs items={[
                    { title: "Каталог услуг", href: "#" },
                    { title: "Фотоколлаж", href: href },
            ]}/>
            <Service title={data.title} parag={data.parag} list={data.list} url={data.url} color={data.color} id={id}/>
            <div className={styles.bgc}>
                <Table path={href}/>
                <MaxWidthWrapper>
                <div className={styles.note}>
                    <p className={styles.par}>Сроки и стоимость выполнения работ устанавливаются при приёме заказа специалистом печатного центра.</p>
                    <p className={styles.par}>В стоимость не входит печать готового коллажа, выбрать необходимый формат фотографии можно в <Link href="/printPhoto" className={styles.link}>разделе «Печать фотографий»</Link>.</p>
                </div>
                </MaxWidthWrapper>
                <Carousel />
            </div>
        </>
    )
}

export default ServicePage;

