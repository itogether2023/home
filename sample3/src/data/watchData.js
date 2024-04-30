import watch1 from "../asset/img/main/watch1.jpg";
import watch2 from "../asset/img/main/watch2.jpg";
import watch3 from "../asset/img/main/watch3.jpg";
import watch4 from "../asset/img/main/watch4.jpg";
import watch5 from "../asset/img/main/watch5.jpg";
import watch6 from "../asset/img/main/watch6.jpg";
import watch7 from "../asset/img/main/watch7.png";

let watch = [
    {
        name: "ChronoCraft II",
        price: 1400,
        src: watch1,
    },
    {
        name: "TimeTrend EX-VI",
        price: 2000,
        src: watch2,
    },
    {
        name: "WristWise with Adam",
        price: 36000,
        src: watch3,
    },
    {
        name: "TempoTrack",
        price: 150,
        src: watch4,
    },
];

const cateData = {
    Luxury: [
        {
            name: "ChronoCraft LS",
            price: 1100,
            src: watch1,
        },
        {
            name: "ChronoCraft Old Triger II",
            price: 1400,
            src: watch1,
        },
        {
            name: "ChronoCraft",
            price: 1400,
            src: watch1,
        },
        {
            name: "ChronoCraft Ab VI",
            price: 3600,
            src: watch1,
        },
    ],
    Sports: [
        {
            name: "Chrono Fit",
            price: 64,
            src: watch6,
        },
        {
            name: "Chrono Fit 2",
            price: 64,
            src: watch6,
        },
        {
            name: "Chrono Fit Pro",
            price: 64,
            src: watch6,
        },
        {
            name: "Chrono Fit 2",
            price: 64,
            src: watch6,
        },
    ],
    Customized: [
        {
            name: "TimeTrend II",
            price: 4200,
            src: watch2,
        },
        {
            name: "TimeTrend EX-VI",
            price: 2000,
            src: watch2,
        },
    ],
    Desk: [
        {
            name: "TempoTrack",
            price: 14,
            src: watch4,
        },
    ],
    Wall: [
        {
            name: "AnticFlower",
            price: 11,
            src: watch7,
        },
    ],
};

export default { watch, cateData };
