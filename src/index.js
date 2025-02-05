import style from './style.css'
import { format } from "date-fns";


const modal = document.querySelector('.modal')
let date = new Date();
let newDate = format(date, 'dd/MM/yyyy');

const detailsBtn = document.querySelector('.details')
const modalCloseBtn = document.querySelector('.modal-close')
const dateSpan = document.querySelector('.date-span');

detailsBtn.addEventListener('click',()=>{
    dateSpan.textContent = `${newDate}`
    modal.showModal();
})
modalCloseBtn.addEventListener('click',()=>{
    modal.close();
})