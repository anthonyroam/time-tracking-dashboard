import React from "react";

function Person ({name, image}) {
    return (
        <div className="w-full h-auto flex gap-4 items-center p-6 rounded-xl bg-blue text-pale-Blue md:flex-col md:items-start md:h-4/6 md:gap-6">
            <div className={`h-20 w-20 rounded-full border-2 border-white ${image} bg-cover`}>
            </div>
            <div>
                <p>Report for</p>
                <h2 className="text-2xl text-white">{name}</h2>
            </div>
        </div>
    );
}

export { Person };