import styles from "./Services.module.scss";
import cn from "classnames";
import Link from "next/link";
import MaxWidthWrapper from "../../MaxWidthWrapper/MaxWidthWrapper";
import Title from "../../UI/Title/Title";
import Image from "next/image";
import SecondButton from "@/components/UI/Buttons/SecondButton/SecondButton";

import docs from "../../../../public/services/homeBlock/docs.png";
import print from "../../../../public/services/homeBlock/printNew.png";
import photo from "../../../../public/services/homeBlock/photo.png";
import mug from "../../../../public/services/homeBlock/mug.png";
import shirt from "../../../../public/services/homeBlock/shirt.png";
import businessCard from "../../../../public/services/homeBlock/businessCard.png";
import restoration from "../../../../public/services/homeBlock/restoration.png";
import lam from "../../../../public/services/homeBlock/lam.png";
import stitch from "../../../../public/services/homeBlock/stitch.png";
import widescreen from "../../../../public/services/homeBlock/widescreen.png";
import sticker from "../../../../public/services/homeBlock/sticker.png";
import calendar from "../../../../public/services/homeBlock/calendar.png";
import design from "../../../../public/services/homeBlock/design.png";
import collage from "../../../../public/services/homeBlock/collage.png";
import scan from "../../../../public/services/homeBlock/scan.png";
import canvas from "../../../../public/services/homeBlock/canvas.png";
import { getPrices } from "@/utils/getPrices";

const Services = () => {

    return (
        <MaxWidthWrapper className={styles.container}>
            <Title>Популярные услуги</Title>
            <div className={styles.wrapper}>
                <div className={styles.wrapperShort}>
                    <Link href="/photocopy" className={cn(styles.item, styles.print)}>
                        <Image alt='фото услуги' src={print} className={cn(styles.img, styles.imgCorrectPositionLeft)}/>
                        <h4 className={styles.title}>Печать и ксерокопия</h4>
                    </Link>
                    <Link href="/photoForDocuments" className={cn(styles.item, styles.docs)}>
                        <Image alt='фото услуги' src={docs} className={styles.img}/>
                        <h4 className={styles.title}>Фото на документы</h4>
                    </Link>
                    <Link href="/photoPrint" className={cn(styles.item, styles.photo)}>
                        <Image alt='фото услуги' src={photo} className={styles.img}/>
                        <h4 className={styles.title}>Печать фото</h4>
                    </Link>
                    <Link href="/mugPrint" className={cn(styles.item, styles.mug)}>
                        <Image alt='фото услуги' src={mug} className={cn(styles.img, styles.imgCorrect)}/>
                        <h4 className={styles.title}>Печать на кружках</h4>
                    </Link>
                    <Link href="/fabricPrint" className={cn(styles.item, styles.shirt)}>
                        <Image alt='фото услуги' src={shirt} className={styles.img}/>
                        <h4 className={styles.title}>Печать на футболках</h4>
                    </Link>
                    <Link href="/photoRestoration" className={cn(styles.item, styles.restoration)}>
                        <Image alt='фото услуги' src={restoration} className={styles.img}/>
                        <h4 className={styles.title}>Реставрация фото</h4>
                    </Link>
                    <Link href="/largeFormatPrint" className={cn(styles.item, styles.widescreen)}>
                        <Image alt='фото услуги' src={widescreen} className={cn(styles.img, styles.imgCorrectPosition)}/>
                        <h4 className={styles.title}>Широкоформатная печать</h4>
                    </Link>
                    <Link href="/businessCard" className={cn(styles.item, styles.businessCard)}>
                        <Image alt='фото услуги' src={businessCard} className={styles.img}/>
                        <h4 className={styles.title}>Изготовление визиток</h4>
                    </Link>
                    <Link href="/postpressProcess" className={cn(styles.item, styles.stitching, styles.short)}>
                        <div className={styles.imgs}>
                        <Image alt='фото услуги' src={stitch} className={styles.imgMin1}/>
                        <Image alt='фото услуги' src={lam} className={styles.imgMin2}/>
                        </div>
                        <h4 className={styles.title}>Послепечатная обработка</h4>
                    </Link>
                    <Link href="/sticker" className={cn(styles.item, styles.sticker)}>
                        <Image alt='фото услуги' src={sticker} className={cn(styles.img, styles.imgCorrect)}/>
                        <h4 className={styles.title}>Стикеры и наклейки</h4>
                    </Link>
                </div>
                <div className={styles.btn}>
                    <SecondButton className={styles.btnPadding} path='/catalog'>Все услуги</SecondButton>
                </div>
            </div>

        </MaxWidthWrapper>
    )
}

export default Services;