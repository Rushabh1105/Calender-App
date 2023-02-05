

export const selectedYear = new Date().getFullYear();
export const selectedMonth = new Date().getMonth();

//returns day of the starting date {sunday - 01}

export const MonthDays = function (date){


    return new Date(date).getDay();
}

// return total number of days in a month

export const daysInMonth = function(month, year){

    
    return new Date(year, month+1, 0).getDate();
}