import { useState } from "react";

function NumbersSection() {

  // const fullNumbers = []
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

    // fullNumbers = round.concat(lastRound)
  }



  return (
    <div class="flex justify-center mt-[40px]" >
      <div>

        {
          firstSixRandomsArray.map((item, idx) =>
            <li key={idx} class='border-solid border-sky-300 w-5 h-5 rounded-full' >{item}</li>
          )
        }
        {
          lastNumberArray.map((item, idx) =>
            <li key={idx} class='border-solid border-sky-300 w-5 h-5 rounded-full bg-sky-300' >{item}</li>
          )
        }
      </div>
      <div>
        <button className="border-2 rounded border-teal-600 text-teal-700 w-[70px] h-[45px]">Reset</button>
        <button class="bg-teal-700 rounded text-white w-[200px] h-[45px] ml-5" >Show me lucky numbers</button>
      </div>
    </div>
  );
}

export default NumbersSection;