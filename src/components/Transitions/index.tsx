import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type BoxProps = {
    children: React.ReactNode;
};

const Transitions = ({ children }: BoxProps) => {
    const [windowWidth, setWindowWidth] = useState<number>(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
    }, []);

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: windowWidth }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};

export default Transitions;
