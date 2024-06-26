"use client";

import { useEffect, useState } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import styles from "./Map.module.scss";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const MapBlock = ({ children }) => {

    const [width, setWidth] = useState(undefined);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        handleResize();
        window.addEventListener('resize', handleResize);
        return window.removeEventListener('resize', handleResize)
    }, []);

    const conversion = (45*0.06944444444*(width/100))*2;

    return (
        <MaxWidthWrapper className={styles.wrapper}>
            {children}
            <YMaps>
                <div className={styles.map}>
                    <Map 
                        defaultState={{ center: [53.896806628524374, 27.596246030060172], zoom: 16 }} 
                        width={Math.min(1350, width-conversion)}
                        height={Math.min(626, width*626/1440)}
                    >
                        <Placemark 
                            geometry={[53.89829217156126, 27.604303373225434]} 
                        />
                    </Map>
                </div>
            </YMaps>
        </MaxWidthWrapper>
    )
}

export default MapBlock;