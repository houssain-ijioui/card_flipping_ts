import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import { generateNumbers } from './utils/numbers';

function App() {

  const [ numbers, setNumbers ] = useState<number[]>(generateNumbers());

  useEffect(() => {
    console.log(numbers);
  }, [])

  return (
    <>
      <section className='cards'>
        {numbers.map((n, index) => {
          return (
            <Card key={index} content={n} />
          )
        })}
      </section>
    </>
  )
}

export default App
