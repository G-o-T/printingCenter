import BreadCrumbs from "../../components/UI/BreadCrumbs/BreadCrumbs";
import Service from "../../components/Service/Service";
import MaxWidthWrapper from "../../components/MaxWidthWrapper/MaxWidthWrapper";
import Table from "../../components/Table/Table";
import Carousel from "../../components/Carousel/Carousel";

import styles from "./scanPage.module.scss";

import { SERVICESDATA } from "../../config/index";

const ServicePage = () => {

    const id = 6;
    const data = SERVICESDATA[id];
    const href = "/scan";

    const lists = [
        [
            "допустимо любое состояние материалов",
            "возможно сканирование больших форматов А2-А0",
            "плотность материалов - любая",
        ],
        [
            "сканируемые материалы не сшиты, не ветхие (рваные)",
            "материалы имеют одинаковый размер А4 или А3",
            "плотность материалов не более 130 г/м²",
        ],
    ]

    return (
        <>
            <BreadCrumbs items={[
                    { title: "Каталог услуг", href: "#" },
                    { title: "Сканирование", href: href },
            ]}/>
            <Service title={data.title} parag={data.parag} list={data.list} url={data.url} color={data.color} id={id} />
            <div className={styles.bgc}>
                <Table path={href}/>
                <MaxWidthWrapper>
                    <div className={styles.block}>
                        <div className={styles.items}>
                            <div className={styles.itemTitle}>Ручная подача оригиналов</div>
                            <ul className={styles.itemText}>
                                {lists[0].map((i, ind) => <li key={ind} className={styles.item}>{i}</li>)}
                            </ul>
                        </div>
                        <div className={styles.items}>
                            <div className={styles.itemTitle}>Экспресс-сканирование</div>
                            <ul className={styles.itemText}>
                                {lists[1].map((i, ind) => <li key={ind} className={styles.item}>{i}</li>)}
                            </ul>
                        </div>
                    </div>
                </MaxWidthWrapper>
                <Carousel />
            </div>
        </>
    )
}

export default ServicePage;