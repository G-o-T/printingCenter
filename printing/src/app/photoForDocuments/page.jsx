import BreadCrumbs from "../../components/UI/BreadCrumbs/BreadCrumbs";
import Service from "../../components/Service/Service";
import MaxWidthWrapper from "../../components/MaxWidthWrapper/MaxWidthWrapper";
import Table from "../../components/Table/Table";
import Carousel from "../../components/Carousel/Carousel";

import styles from "./photoForDocumentsPage.module.scss";

import { SERVICESDATA } from "../../config/index";

const ServicePage = () => {

    const id = 0;
    const data = SERVICESDATA[id];
    const info = [
        "пенсионерам;",
        "многодетным семьям;",
        "инвалидам;",
        "лицам, воспитывающим ребенка-инвалида в возрасте до 18 лет;",
        "школьникам и студентам (учащихся средних, средних специальных и высших учебных заведений).",
    ]
    const href = "/photoForDocuments";

    return (
        <>
            <BreadCrumbs items={[
                    { title: "Каталог услуг", href: "#" },
                    { title: "Фото на документы", href: href },
            ]}/>
            <Service title={data.title} parag={data.parag} list={data.list} url={data.url} color={data.color} id={id}/>
            <div className={styles.bgc}>
                <Table path={href}/>
                <MaxWidthWrapper>
                    <div className={styles.note}>
                        <p className={styles.par}>* Скидку на услугу предоставляем:</p>
                        <ul className={styles.list}>
                            {info.map((i, ind) => <li key={ind} className={styles.item}>{i}</li>)}
                        </ul>
                        <p className={styles.par}>Скидка предоставляется при предъявлении документа, подтверждающего право на скидку (студенческий билет, удостоверение&nbsp;и&nbsp;т.д.), или его копии.</p>
                    </div>
                </MaxWidthWrapper>
                <Carousel />
            </div>
        </>
    )
}

export default ServicePage;