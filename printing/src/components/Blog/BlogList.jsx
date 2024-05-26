import BlogCard from "./BlogCards/BlogCard";
import { getPosts } from "../../utils/getPosts";

import styles from "./Blog.module.scss";

const BlogList = async ({page}) => {


    const postsResponse = await getPosts();
    const posts = postsResponse.blogData;

    const lastPosts = posts.slice(-3);

    const blogPosts =  posts.reverse().map(i => <BlogCard key={i.id} id={i.id} title={i.title} desc={i.description} img={i.img} page={page} />);
    const homePosts =  lastPosts.map(i => <BlogCard key={i.id} id={i.id} title={i.title} desc={i.description} img={i.img} page={page} />);
    
    return (
            <div className={styles.wrapper} >
                {page === 'blog' 
                        ? 
                    blogPosts
                        :
                    homePosts
                }
            </div>
    )
}

export default BlogList;