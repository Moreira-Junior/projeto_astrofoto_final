import { divideDate, verifyDateValid, verifyDateFormat, convertDate } from './entry.js'

async function sendApiRequest() {
    let dia = document.querySelector('#dia').value;
    let dia2 = document.querySelector('#dia2').value;
    if (dia == '' && dia2==''){
      dia='17/06/1995'
      dia2='17/06/1995'
    }
    

    const divided = divideDate(dia);
    const divided2 = divideDate(dia2);
    if (verifyDateFormat(dia) && verifyDateValid(divided) && verifyDateFormat(dia2) && verifyDateValid(divided2)) {
        const apiKey = 'otlzWVf3ynbjohbextgzRNhK71o6xotzHSSOLxhd'
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${convertDate(divided)}&end_date=${convertDate(divided2)}`)
        return await response.json();
    }
        return await response.json();
    
}


export default { sendApiRequest };
export  { sendApiRequest };