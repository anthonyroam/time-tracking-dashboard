function DisplayContainer ({ children, backgroundColor, backgroundIcon}) {
    return (
        <div className={`relative w-full h-44 rounded-xl ${backgroundColor} ${backgroundIcon} bg-no-repeat bg-[right_1rem_top_-0.5rem] md:h-full`}>
            {children}
        </div>
    );
};

export { DisplayContainer };