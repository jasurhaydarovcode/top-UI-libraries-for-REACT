import React, { useEffect, useState } from "react";

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedMode = localStorage.getItem("theme");
        return savedMode === "dark";
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <button
            onClick={toggleDarkMode}
            className="overflow-hidden relative w-24 p-2 h-9 bg-neutral-900 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 border-none rounded-md text-[14px] font-bold cursor-pointer group"
        >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
            <span
                className="absolute w-36 h-32 -top-8 -left-2 bg-neutral-100 dark:bg-neutral-900 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
            ></span>
            <span
                className="absolute w-36 h-32 -top-8 -left-2 bg-neutral-200 dark:bg-neutral-800 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
            ></span>
            <span
                className="absolute w-36 h-32 -top-8 -left-2 bg-neutral-300 dark:bg-neutral-700 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"
            ></span>
            <span
                className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
            >
                {isDarkMode ? "Light" : "Dark"}
            </span>
        </button>
    );
};

export default DarkModeToggle;
