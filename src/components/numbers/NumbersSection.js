import { useState } from "react";

function NumbersSection() {

  // const lastNumberArray = []
  // const firstSixRandomsArray = []

  const [round, setRound] = useState(new Array(5).fill(false))
  const [lastRound, setLastRound] = useState(new Array(1).fill(false))

  const randomNumbers = () => {

    round.map((item) =>
      item = Math.floor(Math.random() * 64)
    )
    // const firstSixRandom = 
    // console.log(firstSixRandom);

    const firstSixRandomsArray = [...round]
    // const firstSixRandomsArray = [...firstSixRandom]

    setRound(firstSixRandomsArray)


    const lastRandom = Math.floor(Math.random() * 10)
    const lastNumberArray = [...lastRound, lastRandom]

    setLastRound(lastNumberArray)

    // fullNumbers = round.concat(lastRound)
  }

  return (
    <div >
      <div className="flex justify-center mt-[40px]" >
        {
          round.map((item, idx) =>
            <div key={idx} className='border-3border-solid border-sky-300 w-[30px] h-[30px] rounded-full' >{item}</div>
          )
        }
        {
          lastRound.map((item, idx) =>
            <div key={idx} className='border-solid border-sky-300 w-[30px] h-[30px] rounded-full bg-sky-300' >{item}</div>
          )
        }
      </div>
      <div>
        <button className="border-2 rounded border-teal-600 text-teal-700 w-[70px] h-[45px]">Reset</button>
        <button onClick={randomNumbers} className="bg-teal-700 rounded text-white w-[200px] h-[45px] ml-5" >Show me lucky numbers</button>
      </div>
    </div>
  );
}

export default NumbersSection;