'use client';

import { Montserrat } from "next/font/google";
import { useRouter } from "next/navigation";

import styles from "./MainButton.module.scss";
import cn from "classnames";

const mont = Montserrat({ subsets: ["latin"] });

const MainButton = ({classNameBtn, children, href}) => {

    const router = useRouter();

    const handleClick = () => {
        router.push(href);
    }

    return (
        <button className={cn(styles.btn, classNameBtn, mont.className)} onClick={handleClick}>
            {children}
        </button>

    )
}

export default MainButton;