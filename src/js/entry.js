function divideDate(data) {
    return data.split('/');
}

function verifyDateValid(divided) {
    if (divided[2] < 1995) {
        alert('Must be after 1995-06-16, the first day an APOD picture was posted.');
    }
    else {
        if (divided[2] == 1995 && divided[1] < 6) {
            alert('Must be after 1995-06-16, the first day an APOD picture was posted.');
        }
        else {
            if (divided[2] == 1995 && divided[1] == 6 && divided[0] < 16) {
                alert('Must be after 1995-06-16, the first day an APOD picture was posted.');
            }
            else {
                return true
            }
        }
    }
}

function verifyDateFormat(data) {
    const regexp = /((0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
    if (regexp.test(data) === false) {
      alert('Formato de data inválido.')
      return false;
    }
    return true;
}

function convertDate(divided) {
    return `${divided[2]}-${divided[1]}-${divided[0]}`;
}

export { divideDate, verifyDateValid, verifyDateFormat, convertDate };