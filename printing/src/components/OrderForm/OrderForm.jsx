import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import Link from "next/link";

import styles from "./OrderForm.module.scss";
import cn from "classnames";

const OrderForm = ({className}) => {

    const {wrapper, form} = className;

    const telegramLink = "https://t.me/Subliby";
    const viberLink = "viber://chat?number=%2B375296129585";
    const emailLink="mailto:subliby@mail.ru";


    return (
        <div className={wrapper}>
            <MaxWidthWrapper className={styles.paddings}>
                <div className={cn(styles.form, form)}>
                    <h2 className={styles.title}>Оформить онлайн заказ</h2>
                    <div className={styles.desc}>Нажмите кнопку &quot;Отправить&quot;, чтобы загрузить файлы для печати или получить консультацию</div>
                    <div className={styles.btns}>
                        <Link href={telegramLink} target="_blank" className={styles.link}>
                            <button className={styles.btn}>Отправить файлы в Telegram</button>
                        </Link>
                        <Link href={viberLink} target="_blank" className={styles.link}>
                            <button className={styles.btn}>Отправить файлы в Viber</button>
                        </Link>
                        <Link href={emailLink} target="_blank" className={styles.link}>
                            <button className={styles.btn}>Отправить файлы на почту</button>
                        </Link>
                    </div>
                    <div className={styles.desc}>Вы также можете оформить заказ, позвонив нам <Link href="tel:+375297553565" className={styles.link}>+375&nbsp;(29)&nbsp;755&nbsp;35&nbsp;65</Link></div>

                </div>
            </MaxWidthWrapper>
        </div>
    )

}

export default OrderForm;