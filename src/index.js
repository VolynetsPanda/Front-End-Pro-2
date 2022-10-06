import 'styles/all'
import { api } from "helpers/api";
import moment from "moment";
import Slider from "components/Slider";
// import {MDCSlider} from '@material/slider';
import {MDCChipSet} from '@material/chips';
import Chips from "components/Chips";
api('products', (res) => {
    console.log(res)
})
console.log('test moment ',
    moment("12-25-1995", "MM-DD-YYYY")
        .format('Do MMM YY'))

// Slider()
Chips()
const chipset = new MDCChipSet(document.querySelector('.mdc-evolution-chip-set'));
// const slider = new MDCSlider(document.querySelector('.mdc-slider'));
