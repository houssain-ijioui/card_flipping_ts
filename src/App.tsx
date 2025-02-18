import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import { generateNumbers } from './utils/numbers';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/store';
import { updateValues } from './store/features/numbers/numbersSlice';


function App() {

  const [numbers, setNumbers] = useState<number[]>(generateNumbers());
  const [rotates, setRotates] = useState<boolean[]>(new Array(numbers.length).fill(false));
  const [solvedCards, setSolvedCards] = useState<number[]>([]);
  const [score, setScore] = useState<number>(0);
  const [allowedToPlay, setAllowedToPlay] = useState<boolean>(true);

  const dispatch = useDispatch();
  const firstNumberIndex = useSelector((state: RootState) => state.numbers.firstNumberIndex);
  const secondNumberIndex = useSelector((state: RootState) => state.numbers.secondNumberIndex);

  const handleClick = (value: number, index: number) => {
    if (!solvedCards.includes(index)) {
      if (allowedToPlay) {
        dispatch(updateValues(index))

        setRotates(prevRotates =>
          prevRotates.map((rotate, i) => (i === index ? !rotate : rotate))
        )
      }
    }
  }

  useEffect(() => {
    if (typeof secondNumberIndex === "number" && typeof firstNumberIndex === "number") {
      if (numbers[firstNumberIndex] === numbers[secondNumberIndex]) {
        setScore(prev => prev + 1)
        setSolvedCards([...solvedCards, secondNumberIndex, firstNumberIndex])
      } else {
        setAllowedToPlay(false)
        setTimeout(() => {
          // change the value to false for only non solved cards
          setRotates(
            rotates.map((rotate, i) => (solvedCards.includes(i) ? true : false))
          )
          setAllowedToPlay(true)
        }, 1000);
      }
    }
  }, [secondNumberIndex])




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


