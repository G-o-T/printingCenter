import MaxWidthWrapper from "../../components/MaxWidthWrapper/MaxWidthWrapper";
import BreadCrumbs from "../../components/UI/BreadCrumbs/BreadCrumbs";
import Title from "../../components/UI/Title/Title";
import OrderForm from "../../components/OrderForm/OrderForm";
import Link from "next/link";

import styles from "./OrderPage.module.scss";
import cn from "classnames";

const OrderPage = () => {

    const steps = [
        "Вам пришлют инструкции для оплаты",
        "Вы, следуя инструкциям, оплачиваете заказ",
        "Мы выполняем ваш заказ",
        "Когда заказ будет готов, вы получите уведомление в телеграмме/вайбере",
    ];

    return (
        <>
            <BreadCrumbs items={[
                    { title: "Заказ онлайн", href: "/order" },
            ]}/>
            <div className={styles.w768}>
                <MaxWidthWrapper>
                    <Title>Как сделать заказ</Title>
                </MaxWidthWrapper>
                <MaxWidthWrapper className={styles.wrapper}>
                    <div className={styles.instructions}>
                        <ul className={styles.steps}>
                            <li className={styles.step} key={1}>
                                <div className={styles.deco}>1</div>
                                <p className={styles.text}>Чтобы заказать полиграфические услуги в нашей компании, используйте форму ниже. Нажмите «Отправить файл» в любой удобный для вас мессенджер или на электронную почту.</p>
                            </li>
                            <li className={styles.step} key={2}>
                                <div className={styles.deco}>2</div>
                                <p className={styles.text}>В сообщении прикрепите файлы для печати, напишите количество экземпляров, желаемый размер и другие характеристики, если требуются. Если вам необходима консультация - напишите ваш вопрос.</p>
                            </li>
                            <li className={styles.step} key={3}>
                                <div className={styles.deco}>3</div>
                                <div className={styles.column}>
                                    <p className={styles.text}>Как только заявка будет обработана, мы обязательно свяжемся с вами. Наши сотрудники проконсультируют вас, просчитают стоимость выполнения заказа и сформируют счет для оплаты.</p>
                                    <ul className={styles.addSteps}>
                                        {steps.map((step, ind) => <li key={ind} className={cn(styles.text, styles.item)}>{step}</li>)}
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <div className={styles.text}>Вы также можете оформить заказ, позвонив нам по телефону <Link href="tel:+375296129585" className={styles.link}>+375 (29) 755 35 65</Link></div>
                    </div>
                </MaxWidthWrapper>
                <MaxWidthWrapper className={styles.container}>
                    <OrderForm className={{
                        wrapper: styles.formWrapper,
                        form: styles.form,
                    }}/>
                </MaxWidthWrapper>
            </div>
        </>
    )
}

export default OrderPage;