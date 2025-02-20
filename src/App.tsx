import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import { generateNumbers } from './utils/numbers';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/store';
import { updateValues, resetAll } from './store/features/numbers/numbersSlice';
import { resetGame } from './utils/resetGame';
import { setTimeColor, setScoreColor } from './store/features/animation/animationSlice';


function App() {

  const [numbers, setNumbers] = useState<number[]>(generateNumbers());
  const [rotates, setRotates] = useState<boolean[]>(new Array(numbers.length).fill(false));
  const [solvedCards, setSolvedCards] = useState<number[]>([]);
  const [score, setScore] = useState<number>(0);
  const [allowedToPlay, setAllowedToPlay] = useState<boolean>(true);
  const [time, setTime] = useState<number>(120);
  const [ moves, setMoves ] = useState<number>(0);

  const dispatch = useDispatch();
  const firstNumberIndex = useSelector((state: RootState) => state.numbers.firstNumberIndex);
  const secondNumberIndex = useSelector((state: RootState) => state.numbers.secondNumberIndex);
  const timeColored = useSelector((state: RootState) => state.animation.timeColored);
  const scoreColored = useSelector((state: RootState) => state.animation.scoreColored)

  const handleClick = (value: number, index: number) => {

    // if card clicked twice resetAll
    if (index === firstNumberIndex) {
      dispatch(resetAll())
    }

    if (!solvedCards.includes(index)) {
      if (allowedToPlay) {
        if (index !== firstNumberIndex) {
          dispatch(updateValues(index))
        }

        setRotates(prevRotates =>
          prevRotates.map((rotate, i) => (i === index ? !rotate : rotate))
        )
      }
    }
  }

  useEffect(() => {
    if (typeof secondNumberIndex === "number" && typeof firstNumberIndex === "number") {
      // check if numbers equal each other
      if (numbers[firstNumberIndex] === numbers[secondNumberIndex] && firstNumberIndex !== secondNumberIndex) {
        setTimeout(() => {
          setScore(prev => prev + 1)
        }, 800);
        setSolvedCards([...solvedCards, secondNumberIndex, firstNumberIndex])
      } else {
        setAllowedToPlay(false)
        setTimeout(() => {
          // change the value to false for only non solved cards
          setRotates(
            rotates.map((rotate, i) => (solvedCards.includes(i) ? true : false))
          )
        }, 1000);
        setTimeout(() => {
          setAllowedToPlay(true)
        }, 2000);
      }
      dispatch(resetAll())
      setTimeout(() => {
        setMoves(moves + 1);
      }, 500);
    }
  }, [secondNumberIndex])

  useEffect(() => {
    // change color of time that is shown
    if (time < 20) {
      dispatch(setTimeColor())
    }

    // decrease time and if time runs out reset all 
    if (time > 0) {
      setTimeout(() => {
        setTime(prev => prev - 1)
      }, 1000);
    } else {
      resetGame(setScore, setRotates, numbers.length, setTime)
    }
  }, [time])

  useEffect(() => {
    // change color of the score if it rises and rechange it again
    if (score !== 20 && score !== 0) {
      dispatch(setScoreColor())
      setTimeout(() => {
        dispatch(setScoreColor())
      }, 500);
    }

    // reset game if maximum score is attained
    if (score === 20) {
      resetGame(setScore, setRotates, numbers.length, setTime)
    }
  }, [score])


  return (
    <>
      <div id='game'>
        <div id='top-bar'>
          <h1 id='score' className={`${scoreColored ? "score-colored": ""}`}>Score: <br />{score}</h1>
          <h1 id='time' className={`${timeColored ? "time-colored": ""}`}>Time Left: <br />{time}s</h1>
          <h1>Moves: <br />{moves}</h1>
        </div>
        <section className='cards'>
          {numbers.map((n, index) => {
            return (
              <Card key={index} value={n} handleClick={() => handleClick(n, index)} rotate={rotates[index]} />
            )
          })}
        </section>
      </div>
    </>
  )
}

export default App


