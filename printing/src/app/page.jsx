import SimpleSlider from "../components/SimpleSlider/SimpleSlider";
import InstagramBlock from "../components/HomeBlocks/Instagram/Instagram";
import BlogBlock from "../components/Blog/BlogBlock/BlogBlock";
import Services from "../components/HomeBlocks/Services/Services";
import OrderForm from "../components/OrderForm/OrderForm";

import styles from "./page.module.scss";

export const metadata = {
    title: "Печатный центр Subli.by",
    description: "Печать документов, фотографий, изготовление сувениров, фото на документы в Минске по приемлемым ценам",
};

export default function Home() {
    return (
        <div className={styles.w768}>
            <SimpleSlider />
            <Services />
            <InstagramBlock />
            <OrderForm className={{
                wrapper: styles.formWrapper,
                form: styles.form,
            }}/>
            <BlogBlock />
        </div>
    );
}
