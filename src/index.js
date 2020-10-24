import User from "./javascripts/User";
import imageBox from "./javascripts/imageBox";
import datas from "./assets/SampleCSVFile_2kb.csv";
import "./styles/style.scss";

const heading = document.createElement("h1");
const box = document.createElement("div");

const user = new User("Smith", 39);

heading.classList.add("pack-text");

heading.textContent = "Webpack";

box.classList.add("box");

document.body.prepend(box);

box.innerText = datas.map((data) => `${data}\n`);

document.body.prepend(imageBox);

document.body.prepend(heading);
