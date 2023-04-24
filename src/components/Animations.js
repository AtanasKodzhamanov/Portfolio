export const transition = { duration: 0.3 };

export const variants = {
    up: {
        initial: { opacity: 0, y: -300 },
        animate: { opacity: 1, y: 0, transition },
        exit: { opacity: 0, y: 100, transition },
    },
    down: {
        initial: { opacity: 0, y: 100 },
        animate: { opacity: 1, y: 0, transition },
        exit: { opacity: 0, y: -100, transition },
    },
};
