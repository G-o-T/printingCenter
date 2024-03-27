"use client";

import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import styles from "./Map.module.scss";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const MapBlock = ({ children }) => {
    return (
        <MaxWidthWrapper className={styles.wrapper}>
            <YMaps>
                <div className={styles.map}>
                    <Map 
                        defaultState={{ center: [53.896806628524374, 27.596246030060172], zoom: 16 }} 
                        width={1440}
                        height={626}
                    >
                        <Placemark 
                            geometry={[53.89829217156126, 27.604303373225434]} 
                        />
                    </Map>
                </div>
            </YMaps>
            {children}
        </MaxWidthWrapper>
    )
}

export default MapBlock;