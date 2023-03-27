import React from "react";
import styled from "styled-components";
import { useMousePosition } from "../utils/useMousePosition";
import { motion } from "framer-motion";

const CursorStyles = styled(motion.div)`
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 15px;
    height: 15px;
    padding: 10px;
    border-radius: 100%;
    background-color: var(--chessapp-primer-color);
    border: 0px solid var(--chessapp-primer-color);
    mix-blend-mode: difference;
    z-index: 20;
    opacity: 0.3;
    @media (hover: none) and (pointer: coarse), (max-width: 500px){
        display: none;
    }
`

const PointerStyles = styled.div`
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: var(--chessapp-primer-color);
    transform: translate(-50%, -50%);
    z-index: 20;
    &.on-focus {
        background-color: transparent;
    }
    @media (hover: none) and (pointer: coarse), (max-width: 500px){
        display: none;
    }
`


const Cursor = ({ children }: any) => {
    const { x, y } = useMousePosition();

    return (
        <>
            <CursorStyles
                animate={{
                    top: y,
                    left: x,
                    x: "-50%",
                    y: "-50%",
                }}
                transition={{ ease: "linear", duration: 0.08 }}
            />
            {children}
            <PointerStyles
                style={{
                    top: y,
                    left: x
                }}
            />
        </>
    )
}

export { Cursor }