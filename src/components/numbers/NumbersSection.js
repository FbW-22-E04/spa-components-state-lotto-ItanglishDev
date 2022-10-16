import { useState } from "react";

function NumbersSection() {

  const firstFive = new Array(5).fill(null)
  const lastOne = new Array(1).fill(null)

  const [round, setRound] = useState(firstFive)
  const [lastRound, setLastRound] = useState(lastOne)

  const randomNumbers = () => {

    const firstSixRandomsArray = [round.map((item) =>
      item = Math.floor(Math.random() * 64)
    )]
    console.log(firstSixRandomsArray);

    // const firstSixRandomsArray = [...round]

    setRound(firstSixRandomsArray)

    const lastRandom = Math.floor(Math.random() * 9 + 1)
    console.log(lastRandom);

    setLastRound(lastRandom)

  }
  const resetNumbers = () => {
    setRound(firstFive)
    setLastRound(lastOne)


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
            <div key={idx} className='border-solid border-sky-300 w-[30px] h-[30px] rounded-full ' >{item}</div>
          )
          // bg-sky-300
        }
      </div>
      <div>
        <button onClick={resetNumbers} className="border-2 rounded border-teal-600 text-teal-700 w-[70px] h-[45px]">Reset</button>
        <button onClick={randomNumbers} className="bg-teal-700 rounded text-white w-[200px] h-[45px] ml-5" >Show me lucky numbers</button>
      </div>
    </div>
  );
}

export default NumbersSection;