import { useState } from "react";

function NumbersSection() {

  const firstFive = [, , , , ,]
  const lastOne = []

  const [round, setRound] = useState(firstFive)
  const [lastRound, setLastRound] = useState(lastOne)

  const randomNumbers = () => {

    round.map((item) =>
      item = Math.floor(Math.random() * 64)
    )

    const firstSixRandomsArray = [...round]

    setRound(firstSixRandomsArray)

    const lastRandom = Math.floor(Math.random() * 10)

    setLastRound(lastRandom)

  }

  return (
    <div >
      <div className="flex justify-center mt-[40px] mb-[30px]" >
        {
          round.map((item, idx) =>
            <div key={idx} className='border-3 border-solid border-sky-300 w-[30px] h-[30px] rounded-full' >{item}</div>
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