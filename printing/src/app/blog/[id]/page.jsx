import MaxWidthWrapper from "../../../components/MaxWidthWrapper/MaxWidthWrapper";
import BreadCrumbs from "../../../components/UI/BreadCrumbs/BreadCrumbs";
import Title from "../../../components/UI/Title/Title";
import { getPosts } from "../../../utils/getPosts";
import Image from "next/image";
import { fixSquare } from "../../../utils/fixSquare";
import { getImg } from "../../../utils/getImg";

import styles from "./BlogPost.module.scss";

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
        <>
            <BreadCrumbs items={[
                { title: "Блог", href: "/blog" },
                { title: title, href: `/${params.id}` },
            ]}/>
            <MaxWidthWrapper className={styles.wrapper}>
                <Title>{title}</Title>
                <div className={styles.container}>
                    <Image src={src.urls.regular} alt={title} width="500" height={(src.height * 500) / src.width} />
                    <div className={styles.desc}>{desc}</div>
                </div>
                <div className={styles.text}>
                    {textArr.map((i, ind) => <div key={ind} className={styles.par}>{fixSquare(i)}</div>)}
                </div>
            </MaxWidthWrapper>
        </>
    )
}

export default BlogPost;