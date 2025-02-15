

// generate two arrays then concatenate them after shuffle and push to a final array of shuffeled numbers
export const generateNumbers = (): number[] => {
    const firstArray: number[] = []
    const secondArray: number[] = []
    let thirdArray: number[] = []
    let numbers: number[] = []
    
    for (let i = 1; i < 21; i++) {
        firstArray.push(i)   
    }

    for (let i = 1; i < 21; i++) {
        secondArray.push(i)
    }

    thirdArray = firstArray.concat(secondArray)
    for (let i = 0; i < thirdArray.length; i++) {
        const randomIndex: number = Math.floor(Math.random() * thirdArray.length)
        numbers.splice(randomIndex, 0, thirdArray[i])
    }
    return numbers;
}

