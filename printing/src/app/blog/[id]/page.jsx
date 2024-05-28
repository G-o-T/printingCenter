import MaxWidthWrapper from "../../../components/MaxWidthWrapper/MaxWidthWrapper";
import BreadCrumbs from "../../../components/UI/BreadCrumbs/BreadCrumbs";
import Title from "../../../components/UI/Title/Title";
import { getPosts } from "../../../utils/getPosts";
import Image from "next/image";
import { fixSquare } from "../../../utils/fixSquare";
import { getImg } from "../../../utils/getImg";

import styles from "./BlogPost.module.scss";

export const generateMetadata = ({params}) => {
    return {
        title: `Печатный центр Subli.by | Пост ${params.id}`
    }
}

const BlogPost = async ({params}) => {

    const postsResponse = await getPosts();
    const posts = postsResponse.blogData;
    const post = posts[params.id-1];
    const title = post.title;
    const desc = post.description;
    const text = post.text;
    const textArr = text.split('\n');
    const src = await getImg(post.img);

    return (
        <div className={styles.w768}>
            <BreadCrumbs items={[
                { title: "Блог", href: "/blog" },
                { title: title, href: `/${params.id}` },
            ]}/>
            <MaxWidthWrapper className={styles.wrapper}>
                <Title>{title}</Title>
                <div className={styles.container}>
                    <Image className={styles.size} src={src.urls.regular} alt={title} width="500" height={(src.height * 500) / src.width} />
                    <div className={styles.desc}>{desc}</div>
                </div>
                <div className={styles.text}>
                    {textArr.map((i, ind) => <div key={ind} className={styles.par}>{fixSquare(i)}</div>)}
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export default BlogPost;