import BreadCrumbs from "../../components/UI/BreadCrumbs/BreadCrumbs";
import Title from "../../components/UI/Title/Title";
import BlogList from "../../components/Blog/BlogList";
import MaxWidthWrapper from "../../components/MaxWidthWrapper/MaxWidthWrapper";

export const metadata = {
    title: "Блог печатного центра Subli.by",
    description: "Помощь и рекомендации при подготовке макетов, выборе вида печати и бумаги для фото",
};

import styles from "./BlogPage.module.scss";

const BlogPage = () => {

    return (
        <div className={styles.w768}>
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
        </div>
    )
}

export default BlogPage;


