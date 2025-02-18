import React from "react";


export const resetGame = (setScore: React.Dispatch<React.SetStateAction<number>>, setRotates: React.Dispatch<React.SetStateAction<boolean[]>>, numbersLength: number) => {
    setScore(0)
    setRotates(new Array(numbersLength).fill(false))
}