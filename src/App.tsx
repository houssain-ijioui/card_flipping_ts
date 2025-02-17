import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import { generateNumbers } from './utils/numbers';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/store';
import { updateValues } from './store/features/numbers/numbersSlice';


function App() {
  
  const [ numbers, setNumbers ] = useState<number[]>(generateNumbers());
  
  const dispatch = useDispatch();

  const handleClick = (value: number) => {
    dispatch(updateValues(value))
  }
  

  return (
    <>
      <section className='cards'>
        {numbers.map((n, index) => {
          return (
            <Card key={index} value={n} handleClick={handleClick} />
          )
        })}
      </section>
    </>
  )
}

export default App
