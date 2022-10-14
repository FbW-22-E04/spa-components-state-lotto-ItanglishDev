import { useState } from "react";

function NumbersSection() {

  const fullNumbers = []
  const firstSixRandomsArray = []
  const lastNumberArray = []
  const [round, setRound] = useState(firstSixRandomsArray)
  const [lastRound, setLastRound] = useState(lastNumberArray)


  const randomNumbers = () => {

    // const firstSixRandoms = 

    if (firstSixRandomsArray.length < 5) {

      const firstSixRandom = Math.floor(Math.random() * 64)

      firstSixRandomsArray = [...firstSixRandom]

    }
    setRound(firstSixRandomsArray)

    const lastRandom = Math.floor(Math.random() * 10)
    lastNumberArray = [lastRandom]

    setLastRound(lastNumberArray)

    fullNumbers = round.concat(lastRound)
  }



  return (
    <div class="flex justify-center mt-[40px]" >

      {
        firstSixRandomsArray.map((item, idx) => (
          item
        ))
      }
    </div>
  );
}

export default NumbersSection;