import React from "react";
import { useReducer} from "./useReducer";

function Filter ({setTimeframe}) {
    const {
        dailyButton,
        weeklyButton,
        monthlyButton,
        dispatch,
    } = useReducer()

    const onDaily = () => {
        setTimeframe("daily");
        dispatch({ type:"DAILY_BUTTON"});
    }

    const onWeekly = () => {
        setTimeframe("weekly");
        dispatch({ type:"WEEKLY_BUTTON"});
    }

    const onMonthly = () => {
        setTimeframe("monthly");
        dispatch({ type:"MONTHLY_BUTTON"});
    }

    return (
        <div className={`h-auto w-full flex items-center justify-between gap-4 px-6 py-4 text-pale-Blue md:flex-col md:items-start md:gap-3`}>
            <button 
                className={`hover:cursor-pointer hover:text-white hover:font-medium transition-all ease-in ${dailyButton && "text-white font-medium"}`}
                onClick={onDaily}
            >
                Daily
            </button>
            <button 
                className={`hover:cursor-pointer hover:text-white hover:font-medium transition-all ease-in ${weeklyButton && "text-white font-medium"}`}
                onClick={onWeekly}
            >
                Weekly
            </button>
            <button 
                className={`hover:cursor-pointer hover:text-white hover:font-medium transition-all ease-in ${monthlyButton && "text-white font-medium"}`}
                onClick={onMonthly}
            >
                Monthly
            </button>
        </div>
    );
};

export { Filter };