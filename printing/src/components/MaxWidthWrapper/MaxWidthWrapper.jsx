import styles from "./MaxWidthWrapper.module.scss";
import cn from "classnames";

const MaxWidthWrapper = ({ className, children }) => {
    return (
        <div className={cn(styles.wrapper, className)}>
            {children}
        </div>
    )
}

export default MaxWidthWrapper;