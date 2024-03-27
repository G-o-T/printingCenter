import SimpleSlider from "../components/SimpleSlider/SimpleSlider";
import InstagramBlock from "../components/HomeBlocks/Instagram/Instagram";
import BlogBlock from "../components/Blog/BlogBlock/BlogBlock";
import Services from "../components/HomeBlocks/Services/Services";
import OrderForm from "../components/OrderForm/OrderForm";

import styles from "./page.module.scss";

export default function Home() {

    return (
        <>
            <SimpleSlider />
            <Services />
            <InstagramBlock />
            <OrderForm className={{
                wrapper: styles.formWrapper,
                form: styles.form,
            }}/>
            <BlogBlock />
        </>
    );
}
