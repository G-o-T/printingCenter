import BreadCrumbs from "../../components/UI/BreadCrumbs/BreadCrumbs";
import Service from "../../components/Service/Service";
import MaxWidthWrapper from "../../components/MaxWidthWrapper/MaxWidthWrapper";
import Image from "next/image";
import Table from "../../components/Table/Table";
import Carousel from "../../components/Carousel/Carousel";

import withFields from "../../../public/serviceImg/withFields.jpg";
import withoutFields from "../../../public/serviceImg/withoutFields.jpg";

import styles from "./photoPrintPage.module.scss";

import { SERVICESDATA } from "../../config/index";

const ServicePage = () => {
    const id = 1;
    const data = SERVICESDATA[id];
    const href = "/photoPrint";

    const pros = [
        {
            title: "Профессиональное оборудование",
            text: "Профессиональное оборудование позволит напечатать любое необходимое Вам количество снимков",
        },
        {
            title: "Полноцветная печать",
            text: "Напечатанные фотографии передают яркие насыщенные цвета с множеством оттенков и градаций",
        },
        {
            title: "Премиальные материалы",
            text: "Напечатанные на качественных материалах фотографии сохраняют яркость цвета очень длительное время",
        },
    ];

    const options = [
        {
            title: "Без полей",
            text: "Данный вид печати позволяет целиком заполнить выбранный формат фото изображением. Если пропорции кадра отличны от формата, то часть изображения обрезается.",
            img: withoutFields,
            alt: "Пример фото без полей",
        },
        {
            title: "С полями",
            text: "Фото с полями сохранит все элементы вашего изображения. В случае несовпадения пропорций выбранного формата с оригиналом будут добавлены белые поля.",
            img: withFields,
            alt: "Пример фото с полями",
        },
    ];

    return (
        <>
            <BreadCrumbs
                items={[
                    { title: "Каталог услуг", href: "#" },
                    { title: "Печать фотографий", href: href },
                ]}
            />
            <Service
                title={data.title}
                parag={data.parag}
                list={data.list}
                url={data.url}
                color={data.color}
                id={id}
            />
            <div className={styles.bgc}>
                <Table path={href} />
                <MaxWidthWrapper>
                    <div className={styles.note}>
                        <p className={styles.par}>
                            * Скидка 15% при объеме заказа более 20 фото
                        </p>
                    </div>
                    <div className={styles.pros}>
                        {pros.map((i, ind) => (
                            <div className={styles.item} key={ind}>
                                <div className={styles.header}>{i.title}</div>
                                <div className={styles.itemText}>{i.text}</div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.options}>
                        {options.map((i, ind) => (
                            <div className={styles.block} key={ind}>
                                <div className={styles.exmpl}>
                                    <Image
                                        src={i.img}
                                        alt={i.alt}
                                        className={styles.img}
                                    />
                                </div>
                                <div className={styles.desc}>
                                    <div className={styles.title}>
                                        {i.title}
                                    </div>
                                    <div className={styles.text}>{i.text}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </MaxWidthWrapper>
                <Carousel />
            </div>
        </>
    );
};

export default ServicePage;
