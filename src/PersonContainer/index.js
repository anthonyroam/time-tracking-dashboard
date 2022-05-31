import React from "react";

function PersonContainer ({ children }) {
    return (
        <div className="w-full h-full rounded-xl bg-dark-blue md:row-span-2">
            { children }
        </div>
    );
}

export { PersonContainer };