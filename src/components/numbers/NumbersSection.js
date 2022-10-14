import { useState } from "react";

function NumbersSection() {

  const [round, setRound] = useState(new Array())
  const [lastRound, setLastRound] = useState(new Array())


  const randomNumbers = () => {

    // const firstSixRandoms = 
    const fullNumbers = []
    const firstSixRandomsArray = []

    if (firstSixRandomsArray.length < 5) {

      const firstSixRandom = Math.floor(Math.random() * 64)

      firstSixRandomsArray = [...firstSixRandom]

    }
    setRound(firstSixRandomsArray)



    const lastRandom = Math.floor(Math.random() * 10)
    const lastNumberArray = [lastRandom]
    setLastRound(lastNumberArray)

    fullNumbers = round.concat(lastRound)
  }



  return ( 

   );
}

export default NumbersSection;