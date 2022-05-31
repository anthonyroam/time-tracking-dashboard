import React from "react";

function Display ({ index, data, timeframe }) {
    return (
        <div className="absolute bottom-0 h-4/5 w-full flex flex-col items-center justify-center gap-2 p-6 rounded-lg bg-dark-blue hover:bg-desaturated-blue transition-all ease-in hover:cursor-pointer">
            <div className="flex items-center justify-between gap-2 w-full text-white space-y-2">
                <h3>{data[index].title} </h3>
                <p className="text-2xls pb-2">...</p>
            </div>
            <div className="flex items-center justify-between gap-2 w-full text-pale-Blue text-right md:flex-col md:items-start ">
                <p className="text-3xl">{data[index].timeframes[timeframe].current}hrs</p>
                <p className="text-sm">Last {timeframe === "weekly" && "week"}{timeframe === "daily" && "day"}{timeframe === "monthly" && "month"} - {data[index].timeframes[timeframe].previous}hrs </p>
            </div>
        </div>
    );
};

export { Display };