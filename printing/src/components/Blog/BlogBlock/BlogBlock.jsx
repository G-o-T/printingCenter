import MaxWidthWrapper from "../../MaxWidthWrapper/MaxWidthWrapper";
import SecondButton from "../../UI/Buttons/SecondButton/SecondButton";
import BlogList from "../../Blog/BlogList";

import styles from "../Blog.module.scss";


const BlogBlock = () => {

    return (
        <div className={styles.bg}>
            <MaxWidthWrapper>
                <h2 className={styles.title}>Последнее из блога</h2>
                <BlogList page="main" />
                <SecondButton className={styles.btnPadding} path='/blog'>Все статьи</SecondButton>
            </MaxWidthWrapper>
        </div>
    )

}

export default BlogBlock;