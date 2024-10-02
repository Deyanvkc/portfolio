"use client";

import * as React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

export const AnimatePp = () => {
    const constraintsRef = useRef(null);

    return (
        <motion.div className="container rounded-full" ref={constraintsRef}>
            <motion.div className="item rouned-full" drag dragConstraints={constraintsRef} />
        </motion.div>
    );
};