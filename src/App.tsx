import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import { generateNumbers } from './utils/numbers';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/store';
import { updateValues } from './store/features/numbers/numbersSlice';


function App() {
  
  const [ numbers, setNumbers ] = useState<number[]>(generateNumbers());
  const [ rotates, setRotates ] = useState<boolean[]>(new Array(numbers.length).fill(false));
  
  const dispatch = useDispatch();
  const firstNumber = useSelector((state: RootState) => state.numbers.firstNumber);
  const secondNumber = useSelector((state: RootState) => state.numbers.secondNumber);

  const handleClick = (value: number, index: number) => {
    dispatch(updateValues(value))

    setRotates(prevRotates => 
      prevRotates.map((rotate, i) => (i === index ? !rotate : rotate))
    )
  }

  useEffect(() => {
    if (typeof secondNumber === "number") {
      if (firstNumber === secondNumber) {
        console.log("success");
      } else {
        console.log("try again");
      }
    }
  }, [secondNumber])
  

  return (
    <>
      <section className='cards'>
        {numbers.map((n, index) => {
          return (
            <Card key={index} value={n} handleClick={() => handleClick(n, index)} rotate={rotates[index]} />
          )
        })}
      </section>
    </>
  )
}

export default App
