import React from "react";

function useReducer () {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const {
        dailyButton,
        weeklyButton,
        monthlyButton,
    } = state

    return ({
        dailyButton,
        weeklyButton,
        monthlyButton,
        dispatch,
    })
}

const reducer = (state, action) => {
    switch (action.type) {
        case "DAILY_BUTTON": 
            return {
                dailyButton: true,
                weeklyButton: false,
                monthlyButton: false,
        }
            break;
        case "WEEKLY_BUTTON":
            return {
                dailyButton: false,
                weeklyButton: true,
                monthlyButton: false,
            }
            break;
        case "MONTHLY_BUTTON":
            return {
                dailyButton: false,
                weeklyButton: false,
                monthlyButton: true,
            }     
            break;         
        default:
            return {
                ...state
            }
            break;
    }
}

const initialState = {
    dailyButton: false,
    weeklyButton: false,
    monthlyButton: false,
}

export { useReducer };