function AppContainer ({ children }) {
    return (
        <main className="flex items-center justify-center max-h-full min-h-screen w-full bg-very-dark-blue">
            <section className="min-h-screen w-full max-w-lg flex flex-col items-center gap-6 py-20 px-6  font-rubik md:grid md:grid-cols-4 md:grid-rows-2 md:min-h-[550px] md:max-w-none lg:w-4/5">
                { children }
            </section>
        </main>
    );
};

export { AppContainer };