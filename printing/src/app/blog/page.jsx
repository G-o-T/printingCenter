import BreadCrumbs from "../../components/UI/BreadCrumbs/BreadCrumbs";
import Title from "../../components/UI/Title/Title";
import BlogList from "../../components/Blog/BlogList";
import MaxWidthWrapper from "../../components/MaxWidthWrapper/MaxWidthWrapper";

import styles from "./BlogPage.module.scss";

const BlogPage = () => {

    return (
        <>
            <BreadCrumbs items={[
                { title: "Блог", href: "/blog" },
            ]}/>
            <MaxWidthWrapper>
                <Title>Блог</Title>
            </MaxWidthWrapper>
            <div className={styles.bgc}>
                <MaxWidthWrapper className={styles.wrapper}>
                    <BlogList page="blog"/>
                </MaxWidthWrapper>
            </div>
        </>
    )
}

export default BlogPage;


