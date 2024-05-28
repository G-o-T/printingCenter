import MaxWidthWrapper from "../../MaxWidthWrapper/MaxWidthWrapper";
import SecondButton from "../../UI/Buttons/SecondButton/SecondButton";
import BlogList from "../../Blog/BlogList";

import styles from "../Blog.module.scss";
import Title from "@/components/UI/Title/Title";


const BlogBlock = () => {

    return (
        <div className={styles.bg}>
            <MaxWidthWrapper>
                <Title className={styles.title}>Последнее из блога</Title>
            </MaxWidthWrapper>
            <MaxWidthWrapper className={styles.alignment}>
                <BlogList page="main" />
                <SecondButton className={styles.btnPadding} path='/blog'>Все статьи</SecondButton>
            </MaxWidthWrapper>
        </div>
    )

}

export default BlogBlock;