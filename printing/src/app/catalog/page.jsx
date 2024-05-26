import BreadCrumbs from "../../components/UI/BreadCrumbs/BreadCrumbs";
import Service from "../../components/Service/Service";
import MaxWidthWrapper from "../../components/MaxWidthWrapper/MaxWidthWrapper";
import Title from "@/components/UI/Title/Title";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";

import docs from "../../../public/services/homeBlock/catalog/doc.png";
import print from "../../../public/services/homeBlock/catalog/copy.png";
import photo from "../../../public/services/homeBlock/photo.png";
import mug from "../../../public/services/homeBlock/mug.png";
import shirt from "../../../public/services/homeBlock/shirt.png";
import businessCard from "../../../public/services/homeBlock/catalog/cards.png";
import restoration from "../../../public/services/homeBlock/restoration.png";
import widescreen from "../../../public/services/homeBlock/catalog/largescreen.png";
import sticker from "../../../public/services/homeBlock/catalog/stickers.png";
import calendar from "../../../public/services/homeBlock/calendar.png";
import design from "../../../public/services/homeBlock/catalog/design.png";
import collage from "../../../public/services/homeBlock/catalog/collage.png";
import scan from "../../../public/services/homeBlock/scan.png";
import canvas from "../../../public/services/homeBlock/canvas.png";
import postprint from "../../../public/services/homeBlock/catalog/postprint.png";

import styles from "./catalogPage.module.scss";

const CatalogPage = () => {

    return (
        <>
            <BreadCrumbs items={[
                    { title: "Каталог услуг", href: "/catalog" },
            ]}/>
        <MaxWidthWrapper className={styles.container}>
            <div className={styles.block} id="photo">
                <Title>Фотоуслуги</Title>
                <div className={styles.itemsPhoto}>
                    <Link href="/photoForDocuments" className={cn(styles.item, styles.docs)}>
                        <Image alt='фото услуги' src={docs} className={styles.img}/>
                        <h4 className={styles.title}>Фото на документы</h4>
                    </Link>
                    <Link href="/photoPrint" className={cn(styles.item, styles.photo)}>
                        <Image alt='фото услуги' src={photo} className={styles.img}/>
                        <h4 className={styles.title}>Печать фото</h4>
                    </Link>
                    <Link href="/canvasPrint" className={cn(styles.item, styles.canvas)}>
                        <Image alt='фото услуги' src={canvas} className={styles.img}/>
                        <h4 className={styles.title}>Печать на холсте</h4>
                    </Link>
                    <Link href="/calendar" className={cn(styles.item, styles.calendar)}>
                        <Image alt='фото услуги' src={calendar} className={styles.img}/>
                        <h4 className={styles.title}>Календари с фото</h4>
                    </Link>
                    <Link href="/photoRestoration" className={cn(styles.item, styles.restoration)}>
                        <Image alt='фото услуги' src={restoration} className={styles.img}/>
                        <h4 className={styles.title}>Реставрация фото</h4>
                    </Link>
                    <Link href="/collage" className={cn(styles.item, styles.collage)}>
                        <Image alt='фото услуги' src={collage} className={styles.img}/>
                        <h4 className={styles.title}>Фотоколлаж</h4>
                    </Link>
                </div>
            </div>
            <div className={styles.block} id="print">
                <Title>Печать документов</Title>
                <div className={styles.itemsPrint}>
                    <Link href="/photocopy" className={cn(styles.item, styles.print)}>
                        <Image alt='фото услуги' src={print} className={styles.img}/>
                        <h4 className={styles.title}>Печать и ксерокопия</h4>
                    </Link>
                    <Link href="/largeFormatPrint" className={cn(styles.item, styles.widescreen)}>
                        <Image alt='фото услуги' src={widescreen} className={cn(styles.img, styles.imgCorrectPosition)}/>
                        <h4 className={styles.title}>Широкоформатная печать</h4>
                    </Link>
                    <Link href="scan" className={cn(styles.item, styles.scan)}>
                        <Image alt='фото услуги' src={scan} className={styles.img}/>
                        <h4 className={styles.title}>Сканирование</h4>
                    </Link>
                </div>
            </div>
            <div className={styles.block} id="present">
                <Title>Сувениры и подарки</Title>
                <div className={styles.itemsPresent}>
                    <Link href="/fabricPrint" className={cn(styles.item, styles.shirt)}>
                        <Image alt='фото услуги' src={shirt} className={styles.img}/>
                        <h4 className={styles.title}>Печать на футболках</h4>
                    </Link>
                    <Link href="/collage" className={cn(styles.item, styles.collage)}>
                        <Image alt='фото услуги' src={collage} className={styles.img}/>
                        <h4 className={styles.title}>Фотоколлаж</h4>
                    </Link>
                    <Link href="/mugPrint" className={cn(styles.item, styles.mug)}>
                        <Image alt='фото услуги' src={mug} className={cn(styles.img, styles.imgCorrect)}/>
                        <h4 className={styles.title}>Печать на кружках</h4>
                    </Link>
                    <Link href="/calendar" className={cn(styles.item, styles.calendarPres)}>
                        <Image alt='фото услуги' src={calendar} className={styles.img}/>
                        <h4 className={styles.title}>Календари с фото</h4>
                    </Link>
                    <Link href="/canvasPrint" className={cn(styles.item, styles.canvasPres)}>
                        <Image alt='фото услуги' src={canvas} className={styles.img}/>
                        <h4 className={styles.title}>Печать на холсте</h4>
                    </Link>
                </div>
            </div>
            <div className={styles.block} id="poly">
                <Title>Полиграфическая продукция</Title>
                <div className={styles.itemsPoly}>
                    <Link href="/businessCard" className={cn(styles.item, styles.businessCard)}>
                        <Image alt='фото услуги' src={businessCard} className={styles.img}/>
                        <h4 className={styles.title}>Изготовление визиток</h4>
                    </Link>
                    <Link href="/sticker" className={cn(styles.item, styles.sticker)}>
                        <Image alt='фото услуги' src={sticker} className={cn(styles.img, styles.imgCorrect)}/>
                        <h4 className={styles.title}>Стикеры и наклейки</h4>
                    </Link>
                </div>
            </div>
            <div className={styles.block} id="design">
                <Title>Дизайн и верстка</Title>
                <div className={styles.itemsDesign}>
                    <Link href="/design" className={cn(styles.specItem, styles.design)}>
                        <Image alt='фото услуги' src={design} className={styles.img}/>
                        <h4 className={styles.title}>Дизайн и верстка</h4>
                    </Link>
                </div>
            </div>
            <div className={styles.block} id="post">
                <Title>Послепечатная обработка</Title>
                <div className={styles.itemsPost}>
                    <Link href="/postpressProcess" className={cn(styles.specItem, styles.stitching)}>
                        <Image alt='фото услуги' src={postprint} className={styles.img}/>
                        <h4 className={styles.title}>Послепечатная обработка</h4>
                    </Link>
                </div>
            </div>
        </MaxWidthWrapper>
        </>
    )
}

export default CatalogPage;