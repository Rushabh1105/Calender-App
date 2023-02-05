import { selectedMonth, selectedYear, MonthDays, daysInMonth } from "../utils/dateUtil"
import { getDays } from "../utils/calenderUtils";
import { CHANGE_MONTH } from "../Actions/calenderAction";

const startDay = MonthDays(`${selectedMonth + 1}-01-${selectedYear}`);

const endDay = daysInMonth(selectedMonth, selectedYear);


const initialState = {
    startDay, 
    endDay,
    selectedMonth,
    selectedYear,
    days : getDays(startDay, endDay),

}


export const reducers = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_MONTH :
            const {selectedMonth, selectedYear} = action.payload;
            const startDay = MonthDays(`${selectedMonth+1}-01-${selectedYear}`);
            const endDay = daysInMonth(selectedMonth, selectedYear);
            const days = getDays(startDay, endDay);

            return {...state, selectedMonth, selectedYear, days};
        
        default :
            return state;
    }
}

//console.log(startDay)