import styles from "./Title.module.scss";
import cn from "classnames";

const Title = ({ children, className}) => {
    return (
        <h2 className={cn(styles.title, className)}>
            {children}
        </h2>
    )
}

export default Title;