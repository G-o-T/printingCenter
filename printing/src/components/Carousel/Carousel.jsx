'use client';

import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import Title from "../UI/Title/Title.jsx";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper.jsx";
import Link from "next/link.js";

import { CAROUSELDATA } from "../../config/index.js";

import styles from "./Carousel.module.scss";
import cn from "classnames";

import img from "../../../public/arrowSlider.svg";

const Carousel = () => {

    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }, 
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
        ]
    };

    const defineClassName = (color) => {
        let className;
        switch (color) {
            case "turquoise":
                className = cn(styles.card, styles.turquoise);
                break;
            case "lavender":
                className = cn(styles.card, styles.lavender);
                break;
            case "violet":
                className = cn(styles.card, styles.violet);
                break;
            case "skyBlue":
                className = cn(styles.card, styles.skyBlue);
                break;
            case "pink":
                className = cn(styles.card, styles.pink);
                break;
            case "yellow":
                className = cn(styles.card, styles.yellow);
                break;
            case "grey":
                className = cn(styles.card, styles.grey);
                break;
            default:
                className = styles.card;
        }
        return className;
    }

    return (
        <MaxWidthWrapper className={styles.container}>
            <Title>Другие наши услуги</Title>
            <div className={styles.wrapper}>
                <Slider 
                    ref={slider => {
                        sliderRef = slider;
                    }}
                    {...settings}
                >
                    {CAROUSELDATA.map((i, ind) => (
                        <div className={defineClassName(i.color)} key={ind}>
                            <Link href={i.href} className={styles.link} index={ind+1}>
                                <Image src={i.url} className={styles.img} alt="иллюстрация услуги" width="" height="" />
                                <div className={styles.title}>{i.title}</div>
                            </Link>
                        </div> 
                    ))}
                </Slider>
                <div className={styles.btns}>
                    <button className={styles.btn} onClick={previous}>
                        <Image src={img} alt="стрелка влево" className={cn(styles.arrow, styles.left)}/>
                    </button>
                    <button className={styles.btn} onClick={next}>
                        <Image src={img} alt="стрелка вправо" className={styles.arrow}/>
                    </button>
                </div>
            </div>
        </MaxWidthWrapper>
    );
}

export default Carousel;