import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
import image8 from "../images/image8.jpg";
import image9 from "../images/image9.jpg";
import image10 from "../images/image10.jpg";
import image11 from "../images/image11.jpg";
import image12 from "../images/image12.jpg";
import image13 from "../images/image13.jpg";
import image14 from "../images/image14.jpg";
import image15 from "../images/image15.jpg";
import image16 from "../images/image16.jpg";
import image17 from "../images/image17.jpg";
import image18 from "../images/image18.jpg";
import image19 from "../images/image19.jpg";
import image20 from "../images/image20.jpg";

const img1 = {
    image: image1,
    innerHeight: 768,
};
const img2 = {
    image: image2,
    innerHeight: 768,
};
const img3 = {
    image: image3,
    innerHeight: 768,
};
const img4 = {
    image: image4,
    innerHeight: 768,
};
const img5 = {
    image: image5,
    innerHeight: 768,
};
const img6 = {
    image: image6,
    innerHeight: 761,
};
const img7 = {
    image: image7,
    innerHeight: 768,
};
const img8 = {
    image: image8,
    innerHeight: 768,
};
const img9 = {
    image: image9,
    innerHeight: 381,
};
const img10 = {
    image: image10,
    innerHeight: 768,
};
const img11 = {
    image: image11,
    innerHeight: 768,
};
const img12 = {
    image: image12,
    innerHeight: 768,
};
const img13 = {
    image: image13,
    innerHeight: 768,
};
const img14 = {
    image: image14,
    innerHeight: 492,
};
const img15 = {
    image: image15,
    innerHeight: 768,
};
const img16 = {
    image: image16,
    innerHeight: 768,
};
const img17 = {
    image: image17,
    innerHeight: 768,
};
const img18 = {
    image: image18,
    innerHeight: 483,
};
const img19 = {
    image: image19,
    innerHeight: 543,
};
const img20 = {
    image: image20,
    innerHeight: 768,
};

export const objImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
];

export const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
];

//webpack

// require.context("../images", false, /\.(png|jpe?g|svg)$/);

// const importAll = (r: { (arg0: string): any; keys: () => string[] }) => {
//     let images: any = {};
//     r.keys().forEach((item: string, index: any) => {
//         images[item.replace("./", "")] = r(item);
//     });

//     return images;
// };

// const images = importAll(require.context("../images", false, /\.(png|jpe?g|svg)$/));
