import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';

const pageVariants = {
    initial: {
        opacity: 0,
        y: 8,
    },
    enter: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: 'easeOut',
        },
    },
    exit: {
        opacity: 0,
        y: -8,
        transition: {
            duration: 0.2,
            ease: 'easeIn',
        },
    },
};

export default function PageTransition({ children }: PropsWithChildren) {
    return (
        <motion.div initial="initial" animate="enter" exit="exit" variants={pageVariants}>
            {children}
        </motion.div>
    );
}
