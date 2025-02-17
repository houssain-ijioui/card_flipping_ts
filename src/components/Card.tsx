import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setFirstNumber, setSecondNummber, resetAll } from '../store/features/numbers/numbersSlice';

type CardProps = {
    content: number
}

const Card: React.FC<CardProps> = ({ content }) => {

    const disptach = useDispatch();
    const firstNumber = useSelector((state: RootState) => state.numbers.firstNumber);
    const secondNumber = useSelector((state: RootState) => state.numbers.secondNumber);

    

    const handleClick = () => {
        if (firstNumber === null && secondNumber === null) {
            disptach(setFirstNumber(content))
        } else if (typeof firstNumber === "number" && secondNumber === null) {
            disptach(setSecondNummber(content))
        }
    }


    useEffect(() => {
        console.log(firstNumber);
        console.log(secondNumber);
    }, [firstNumber, secondNumber])

    return (
        <article onClick={handleClick} className='card'>
            <p className='content'>{content}</p>
        </article>
    )
};


export default Card;