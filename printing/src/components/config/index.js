import EmailIcon from "../components/UI/icons/Email.jsx";
import LabourIcon from "../components/UI/icons/Labour";
import LocationIcon from "../components/UI/icons/Location";
import TelegramIcon from "../components/UI/icons/Telegram";
import ViberIcon from "../components/UI/icons/Viber";

import doc from "../../public/serviceImg/documents.jpg";
import design from "../../public/serviceImg/design.jpg";
import photoPrint from "../../public/serviceImg/printPhoto.jpg";
import restoration from "../../public/serviceImg/restoration.jpg";
import collage from "../../public/serviceImg/photocollage.jpg";
import scan from "../../public/serviceImg/photocopy.jpg";
import widescreen from "../../public/serviceImg/widescreen.jpg";
import postprocess from "../../public/serviceImg/postPressProcessing.jpg";
import fabric from "../../public/serviceImg/fabric.jpg";
import mug from "../../public/serviceImg/mug.jpg";
import businessCard from "../../public/serviceImg/businessCard.jpg";
import sticker from "../../public/serviceImg/sticker.jpg";
import calendar from "../../public/serviceImg/calendar.jpg";
import canvas from "../../public/serviceImg/canvas.jpg";

import docC from "../../public/services/carousel/docs.png";
import designC from "../../public/services/carousel/mug.png";
import photoPrintC from "../../public/services/carousel/photo.png";
import restorationC from "../../public/services/carousel/restoration.png";
import collageC from "../../public/services/carousel/collage.png";
import scanC from "../../public/services/carousel/copy.png";
import widescreenC from "../../public/services/carousel/largeFormat.png";
import postprocessC from "../../public/services/carousel/postPrint.png";
import fabricC from "../../public/services/carousel/mug.png";
import mugC from "../../public/services/carousel/mug.png";
import businessCardC from "../../public/services/carousel/businessCard.png";
import stickerC from "../../public/services/carousel/mug.png";
import calendarC from "../../public/services/carousel/calendar.png";

export const SERVICES = [
    {
        title: 'Фотоуслуги',
        val: 'photoServices',
        href: null,
        options: [
            {
                name: 'Печать фотографий',
                val: 'photoPrint',
                href: "/photoPrint",
            },
            {
                name: 'Фото на документы',
                val: 'photoForDocuments',
                href: "/photoForDocuments",
            },
            {
                name: 'Реставрация фото',
                val: 'restoration',
                href: "/restorationData",
            },
            {
                name: 'Фотоколлаж',
                val: 'collage',
                href: "/collage",
            },
        ]
    },
    {
        title: 'Печать документов',
        val: 'documentsPrinting',
        href: null,
        options: [
            {
                name: 'Ксерокопия и печать',
                val: 'copyprint',
                href: "/photocopy",
            },
            {
                name: 'Широкоформатная печать',
                val: 'fullscreen',
                href: "/largeFormatPrint",
            },
            {
                name: 'Сканирование',
                val: 'scan',
                href: "/scan",
            },
        ]
    },
    {
        title: 'Сувениры и подарки',
        val: 'souvenirs',
        href: null,
        options: [
            {
                name: 'Печать на футболках',
                val: 'shirt',
                href: "/fabricPrint",
            },
            {
                name: 'Печать на кружках',
                val: 'mug',
                href: "/mugPrint",
            },
            {
                name: 'Фотоколлаж',
                val: 'collage',
                href: "/collage",
            },
            {
                name: 'Печать на холсте',
                val: 'canvas',
                href: "/canvasPrint",
            },
            {
                name: 'Календарь с фото',
                val: 'calendar',
                href: "/calendar",
            },
        ]
    },
    {
        title: 'Дизайн и верстка',
        val: 'design',
        href: "/design",
        options: []
    },
    {
        title: 'Полиграфическая продукция',
        val: 'printingProducts',
        href: null,
        options: [
            {
                name: 'Визитки',
                val: 'cards',
                href: "/businessCard",
            },
            {
                name: 'Наклейки',
                val: 'stickers',
                href: "/sticker",
            },
            {
                name: 'Календарь с фото',
                val: 'calendar',
                href: '/calendar',
            },
        ]
    },
    {
        title: 'Послепечатная обработка',
        val: 'postprocess',
        href: "/postpressProcess",
        options: []
    }
];

export const MENU = [
    {
        label: 'Каталог услуг',
        href: '/catalog',
    },
    {
        label: 'Прайс',
        href: '#',
    },
    {
        label: 'Заказ онлайн',
        href: '/order',
    },
    {
        label: 'Блог',
        href: '/blog',
    },
    {
        label: 'Контакты',
        href: '/contacts',
    }
];

export const CONTACTS = [
    {
        id: 0,
        text: "ул. Долгобродская 14, комната 26",
        icon: <LocationIcon />,
        icon2: null,
    },
    {
        id: 1,
        text: "subliby@mail.ru",
        icon: <EmailIcon />,
        icon2: null,
    },
    {
        id: 2,
        text: "+375 (29) 755 35 65",
        icon: <ViberIcon />,
        icon2: <TelegramIcon />,
    },
    {
        id: 3,
        text: "пн-пт с 10.00 - 18.00",
        icon: <LabourIcon />,
        icon2: null,
    },
];

export const OFFER = [
    {
        title: "СРОЧНОЕ ФОТО",
        subtitle: "ЛЮБЫЕ ВИДЫ ДОКУМЕНТОВ",
        features: [
            "Быстрая печать",
            "Высокое качество",
            "Ретушь, замена одежды - если необходимо"
        ]
    },
    {
        title: "ФУТБОЛКИ",
        subtitle: "С ФОТО И НАДПИСЬЮ",
        features: [
            "Стойкое изображение",
            "ДТФ принт, флекс",
            "Заказ от 1 шт."
        ]
    },
    {
        title: "ПЕЧАТЬ ФОТО",
        subtitle: "СОХРАНИМ ВОСПОМНАНИЯ",
        features: [
            "Качественные материалы",
            "Точная цветопередача",
            "Профессиональное оборудование"
        ]
    }
]

export const SERVICESDATA = [
    {
        title: 'Фото на документы',
        parag: ['Мы сделаем несколько кадров, и вы сами выберете лучшее фото', 'Обработаем фото перед печатью — уберём несовершенства и то, что вам не нравится', 'Вы получите готовые фото через 5 – 10 минут'],
        list: ['Срочное изготовление', 'Все виды документов', 'Замена одежды'],
        url: doc,
        color: null,
    }, 
    {
        title: 'Печать фотографий',
        parag: ['Напечатанные на качественных материалах фотографии сохраняют яркость цвета очень длительное время.', 'Профессиональное оборудование позволит напечатать любое необходимое Вам количество снимков.'],
        list: ['Профессиональное оборудование', 'Высокое качество', 'Печать любого количества снимков', 'Полноцветная печать'],
        url: photoPrint,
        color: null,
    },
    {
        title: 'Реставрация фото',
        parag: ["Восстановление старых фотографий включает в себя как простое устранение пятен и трещин, так и более сложные процедуры - дорисовку, устранение шумности и мутности."],
        list: ['Полное восстановление', 'Дизайнеры профессионалы', 'Бережное обращение с Вашим фото'],
        url: restoration,
        color: "turquoise",
    },
    {
        title: 'Фотоколлаж',
        parag: ['Не можете выбрать из серии фотографий лучшую? А может быть, хотите подарить близкому человеку ваши совместные снимки и не знаете, как эффектно их оформить?', 'Предлагаем оригинальное решение – создайте стильный коллаж, объединив любое количество фотографий в единую композицию с помощью  наших креативных и опытных дизайнеров.'],
        list: [],
        url: collage,
        color: null,
    },
    {
        title: 'Ксерокопия и печать',
        parag: ['Ксерокопия высокого качества, цветная и черно-белая формата А4 или А3 (а также любого другого формата от визиток до А1). Мы готовы оперативно выполнить заказы. Также мы предлагаем распечатать документы онлайн, для этого необходимо воспользоваться формой обратной связи «Заказ онлайн».'],
        list: [],
        url: scan,
        color: "turquoise",
    },
    {
        title: 'Широкоформатная печать',
        parag: ['Широкоформатная печать бумаги имеет широкую область применения - от печати рекламы для билбордов до изготовления плакатов. Широкоформатная печать производится на плоттере EPSON c максимальным разрешением 2880 x 1440 dpi, на бумагах со специальным покрытием для струйной печати, что обеспечивает отличное качество отпечатков, стойкость к выцветанию и влаге.', 'Максимальная ширина срочной широкоформатной печати на бумаге — 61 см.'],
        list: ['Любой формат до А1', 'Матовая и глянцевая бумага', 'Высокая четкость изображения', 'Индивидуальный дизайн'],
        url: widescreen,
        color: null,
    },
    {
        title: 'Сканирование',
        parag: ['В печатном центре можно отсканировать черно-белые и цветные изображения, документы, книги, чертежи и многое другое. Оборудование позволяет делать четкие и точные электронные копии ваших оригиналов.'],
        list: ['Экспресс сканирование', 'Низкая стоимость экземпляра', 'Одинаковая стоимость на черно-белое и цветное сканирование', 'Форматы до А3', 'Доступно двустороннее сканирование', 'Профессиональное оборудование'],
        url: scan,
        color: "lavender",
    },
    {
        title: 'Послепечатная обработка',
        parag: ['Послепечатная обработка – процесс, выполняемый после печати полиграфической продукции. Включает в себя несколько различных операций, таких как нарезка, брошюровка, ламинация и пр. Все процессы целенаправленны на завершение производства и получения уже готовых качественных материалов.'],
        list: [],
        url: postprocess,
        color: null,
    },
    {
        title: 'Печать на футболках',
        parag: ['Полноцветная печать на футболках с вашим дизайном: фото, надписи, забавные картинки и мемы.', 'Варианты нанесения: ДТФ, термопечать, сублимация'],
        list: ['ДТФ печатью на футболку можно нанести даже фото! При этом цвет самой футболки может быть любым, а изображение получится ярким и передаст все цвета фотографии. Изделие выдержит 30 стирок и больше, если стирать вручную при 40 C°', 'Если Вам необходимо нанести изображение содержащее не более трех цветов на хлопчатобумажную футболку - стоит выбрать печать термопленками. Мы изготовим любой тираж цветных футболок с печатью изображений (до формата А3).', 'Сублимационная печать отлично подходит для печати на синтетических тканях. Принты выдерживают много стирок. Создавайте самые креативные дизайны: печать сублимацией переносит изображение в точности как на макете. А мы поможем совместить качество и выгоду!'],
        url: fabric,
        color: null,
    },
    {
        title: 'Печать на кружках',
        parag: ['Печать на кружке — это отличный и необычный подарок для ваших родных, знакомых и коллег.Благодаря нанесению фотографии или логотипа на простое изделие — становится отличным сувениром или оригинальной продукцией рекламного характера.', 'Заказать печать на кружке по собственному эскизу или со своей фотографией можно онлайн.'],
        list: ['Изготовлено из керамики', 'Полноцветная печать', 'Стойкое изображение'],
        url: mug,
        color: null,
    },
    {
        title: 'Визитки',
        parag: ['Цифровая печать визиток - это самый простой и быстрый способ изготовить визитки. Можем сделать комплект  за час.'],
        list: ['от 24 штук', 'разработаем макет', 'срочное изготовление'],
        url: businessCard,
        color: "violet",
    },
    {
        title: 'Наклейки',
        parag: ['Предлагаем услуги по изготовлению наклеек на самоклея щейся бумаге и любой формы. Только качественная печать стикеров с логотипом или уникальным дизайном.'],
        list: ['Изображения уже будут прорезаны по контуру', 'Поможем с дизайном и созданием макета', 'Соблюдаем сроки и требования заказчика'],
        url: sticker,
        color: "skyBlue",
    },
    {
        title: 'Календари из ваших фото',
        parag: ['Календари висят на стенах, стоят на столах руководителей или же являются перекидными настенными украшениями для дома или офиса.  Мы предлагаем заказать печать календарей, имеющих малый и большой размер, разместить всю необходимую информацию, сделать насыщенную цветовую фактуру для каждого из них и предоставить удобные условия для приобретения всех видов товаров.'],
        list: [],
        url: calendar,
        color: "pink",
    },
    {
        title: 'Дизайн и верстка',
        parag: ['В нашем печатном центре всегда можно заказать создание макета требуемой продукции, мы подготовим все исходя из ваших пожеланий. Для ускорения процесса и снижения цены дизайна мы рекомендуем предоставлять как можно больше материалов, которые могут понадобиться при верстке.'],
        list: ['Быстро', 'Профессиональные дизайнеры', 'Уникальность дизайна'],
        url: design,
        color: null,
    },
    {
        title: 'Печать на холсте',
        parag: ['Напечатаем на холсте любое изображение. Пришлите макет или закажите обработку фото у наших дизайнеров.', 'Рама изготавливается из дерева. Цену холста с рамой уточняйте при подтверждении заказа.'],
        list: ['Точная цветопередача', 'Галерейная натяжка на подрамник', 'Поработаем над вашим макетом, чтобы печать была максимально похожа на цифровую версию'],
        url: canvas,
        color: "pink",
    },
];

export const CAROUSELDATA = [
    {
        title: 'Фото на документы',
        url: docC,
        color: "turquoise",
        href: "/photoForDocuments",
    }, 
    {
        title: 'Печать фотографий',
        url: photoPrintC,
        color: "violet",
        href: "/photoPrint",
    },
    {
        title: 'Фотоколлаж',
        url: collageC,
        color: "pink",
        href: "/collage",
    },
    {
        title: 'Ксерокопия и печать',
        url: scanC,
        color: "skyBlue",
        href: "/photocopy",
    },
    {
        title: 'Широкоформатная печать',
        url: widescreenC,
        color: "yellow",
        href: "/largeFormatPrint",
    },
    {
        title: 'Реставрация фото',
        url: restorationC,
        color: "turquoise",
        href: "/photoRestoration",
    },
    {
        title: 'Послепечатная обработка',
        url: postprocessC,
        color: "grey",
        href: "/postpressProcess",
    },
    {
        title: 'Печать на кружках',
        url: mugC,
        color: "pink",
        href: "/mugPrint",
    },
    {
        title: 'Визитки',
        url: businessCardC,
        color: "violet",
        href: "/businessCard",
    },
    {
        title: 'Наклейки',
        url: stickerC,
        color: "turquoise",
        href: "/sticker",
    },
    {
        title: 'Календари из ваших фото',
        url: calendarC,
        color: "skyBlue",
        href: "/calendar",
    },
    {
        title: 'Печать на футболках',
        url: fabricC,
        color: "pink",
        href: "/fabricPrint",
    },
    {
        title: 'Дизайн и верстка',
        url: designC,
        color: "lavender",
        href: "/design",
    },
    {
        title: 'Сканирование',
        url: scanC,
        color: "yellow",
        href: "/scan",
    },
    {
        title: 'Печать на холсте',
        url: mugC,
        color: "skyBlue",
        href: "/canvasPrint",
    },
];



