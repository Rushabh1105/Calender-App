

export const selectedYear = new Date().getFullYear();
export const selectedMonth = new Date().getMonth();

// return total number of days in a month

export const daysInMonth = function(month, year){


    return new Date(year, month+1, 0).getDate();
}

//returns day of the starting date {sunday - 01}

export const MonthDays = function (date){

    console.log(date);
    return new Date(date).getDay();

}

