import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

function Hero() {
    const [titleNumber, setTitleNumber] = useState(0);
    const titles = useMemo(
        () => ["Stories", "Data", "Awareness"],
        []
    );

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (titleNumber === titles.length - 1) {
                setTitleNumber(0);
            } else {
                setTitleNumber(titleNumber + 1);
            }
        }, 2000);
        return () => clearTimeout(timeoutId);
    }, [titleNumber, titles]);

    return (
        <div className="w-full">
            <div className="container mx-auto">
                <div className="flex gap-4 py-12 lg:py-20 items-center justify-center flex-col">
                    <div className="flex gap-4 flex-col">
                        <h1 className="text-6xl md:text-8xl font-extrabold text-center tracking-tighter bg-gradient-to-r from-sky-400 to-purple-500 text-transparent bg-clip-text bg-[length:200%_200%] animate-gradient-x">
                            BlueCircle
                        </h1>
                        <h2 className="text-4xl md:text-6xl max-w-2xl tracking-tight text-center font-semibold text-spektr-cyan-50">
                            Connecting
                            <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1 text-3xl md:text-5xl font-medium">
                                &nbsp;
                                {titles.map((title, index) => (
                                    <motion.span
                                        key={index}
                                        className="absolute"
                                        initial={{ opacity: 0, y: "-100" }}
                                        transition={{ type: "spring", stiffness: 50 }}
                                        animate={
                                            titleNumber === index
                                                ? {
                                                    y: 0,
                                                    opacity: 1,
                                                }
                                                : {
                                                    y: titleNumber > index ? -150 : 150,
                                                    opacity: 0,
                                                }
                                        }
                                    >
                                        {title}
                                    </motion.span>
                                ))}
                            </span>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Hero }; 