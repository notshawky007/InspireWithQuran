import { clickingLabelsWithKeyboard, observeElements } from "./utils.js";
import "./styles/style.scss";

const labelElements = document.querySelectorAll("label");
const sectionElements = document.querySelectorAll("section");

clickingLabelsWithKeyboard(labelElements);

observeElements(sectionElements);
