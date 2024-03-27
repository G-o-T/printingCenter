'use client';

import { Montserrat } from "next/font/google";
import { useRouter } from "next/navigation";

import styles from "./SecondButton.module.scss";
import cn from "classnames";

const mont = Montserrat({ subsets: ["latin"] });

const SecondButton = ({className, children, path, onClick}) => {
    
    const router = useRouter();

    const handleBtnClick = () => {
        router.push(path);
    }

    return (
        <button className={cn(styles.btn, className, mont.className)} onClick={onClick ? onClick : handleBtnClick}>
            {children}
        </button>

    )
}

export default SecondButton;