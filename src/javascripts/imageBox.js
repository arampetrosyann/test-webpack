import "../styles/imageBox.scss";
import wpUrl from "../assets/images/awesome_webpack.png";
import rnUrl from "../assets/images/react-native.jpg";

const imageBox = document.createElement("div");
const packImg = document.createElement("img");
const reactImg = document.createElement("img");

imageBox.classList.add("image-box");
reactImg.classList.add("nat-img");
packImg.classList.add("web-img");

packImg.src = wpUrl;
reactImg.src = rnUrl;

imageBox.append(packImg);
imageBox.append(reactImg);

export default imageBox;
