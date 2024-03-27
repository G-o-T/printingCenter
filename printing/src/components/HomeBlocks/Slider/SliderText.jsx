import styles from "./Slider.module.scss";
import cn from "classnames";

const SliderText = ({title, subtitle, features, pipeClassName}) => {

    return (
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.h1}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
                <div className={styles.list}>
                    <div className={cn(styles.deco, pipeClassName)}></div>
                    <div className={styles.features}>
                        {features.map((f, i) => (
                            <p className={styles.text} key={i}>{f}</p>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SliderText;