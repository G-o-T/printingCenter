import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import { getPrices } from "../../utils/getPrices";
import TableBlock from "./TableBlock";

import styles from "./Table.module.scss";

const info = {
    "/photoPrint" : {
        id: "photoPrintData",
        headers: ['Формат', 'Вид бумаги', 'Цена, руб. коп.'],
        title: null,
    },
    "/photoForDocuments": {
        id: "documentsPhotoData",
        headers: ['Услуга', 'Цена, руб. коп.'],
        title: null,
    },   
    "/photoRestoration": {
        id: "restorationData",
        headers: ['Виды восстановления фотографий', 'Описание', 'Цена, руб. коп.',],
        title: null,
    },
    "/collage": {
        id: "collageData",
        headers: ['Количество фотографий в коллаже', 'Цена, руб. коп.',],
        title: null,
    },
    "/photocopy1": {
        id: "photocopyJetData",
        headers: ['Услуга', 'А4', 'А3',],
        title: "Струйная печать",
    },
    "/photocopy2": {
        id: "photocopyLaserData",
        headers: ['Вид бумаги', 'А4', 'SRА3',],
        title: "Полноцветная лазерная печать",
    },
    "/largeFormatPrint1": {
        id: "largeFormatPrint190Data",
        headers: [],
        title: "Ватман 190г/м²",
    },
    "/largeFormatPrint2": {
        id: "largeFormatPrintPhotoData",
        headers: [],
        title: "Фотобумага",
    },
    "/scan": {
        id: "scanData",
        headers: ['Услуга', 'А4', 'А3',],
        title: null,
    },
    "/postpressProcess1": {
        id: "postLaminationData",
        headers: [],
        title: "Ламинирование пакетное 100 микрон",
    },
    "/postpressProcess2": {
        id: "postStichingData",
        headers: [],
        title: "Брошюровка на металлическую пружину",
    },
    "/postpressProcess3": {
        id: "postCutData",
        headers: [],
        title: "Резка",
    },
    "/postpressProcess4": {
        id: "postOperatorData",
        headers: [],
        title: "Работа оператора",
    },
    "/fabricPrint1": {
        id: "fabricDTFData",
        headers: [],
        title: "Нанесение DTF принта на майки и текстиль (стоимость без учета изделия под нанесение)",
    },
    "/fabricPrint2": {
        id: "fabricSubliData",
        headers: [],
        title: "Нанесение принта на текстиль методом сублимации",
    },  
    "/mugPrint": {
        id: "mugData",
        headers: [],
        title: "Печать на кружках",
    },
    "/businessCard": {
        id: "bussinessCardData",
        headers: ['Тип/количество', '1/2 комплекта', 'Комплект*'],
        title: null,
    },
    "/sticker1": {
        id: "stickerPrintData",
        headers: [],
        title: "Печать наклеек/стикеров на самоклеящейся бумаге",
    },
    "/sticker2": {
        id: "stickerCutData",
        headers: [],
        title: "Резка плоттерная по контуру стикеров/наклеек",
    },
    "/calendar": {
        id: "calendarData",
        headers: ['Вид календаря', 'Цена, руб. коп.',],
        title: null,
    },
    "/design": {
        id: "designData",
        headers: [],
        title: "Разработка макетов", 
    },
    "/canvasPrint": {
        id: "canvasPrintData",
        headers: ['Размер готовой картины (см)', 'Цена (руб. коп.) за холст хлопковый'],
        title: null,
    },
};

const defineInfo = (path) => {
    let tableDataArr = [];

    for (let key in info ) {
        if(key.includes(path)) {
            tableDataArr = [...tableDataArr, info[key]]            
        }
    }

    return tableDataArr;
}

const defineData = (allData, tableDataArr) => {
    tableDataArr.map((i) => {
        const id = i.id;
        i.data = allData[id];
    })

    return tableDataArr;
}


const Table = async ({ path }) => {

    const allData = await getPrices();
    const tableDataArr = defineInfo(path);
    defineData(allData, tableDataArr);

    return (
        <MaxWidthWrapper className={styles.margin}>
            {tableDataArr.map((i, ind) => (
                <TableBlock key={ind} title={i.title} headers={i.headers} data={i.data} path={path} className={tableDataArr.length > 1 ? styles.space : undefined} />
            ))}
        </MaxWidthWrapper>
    );
}


export default Table;
