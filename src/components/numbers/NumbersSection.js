import { useState } from "react";

function NumbersSection() {

  const firstFive = new Array(5).fill(null)
  const lastOne = new Array(1).fill(null)

  const [round, setRound] = useState(firstFive)
  const [lastRound, setLastRound] = useState(lastOne)


  const randomNumbers = () => {
    console.log('click');

    const firstSixRandomsArray = [round.map((item) =>
      item = Math.floor(Math.random() * 64)
    )]
    console.log(firstSixRandomsArray);


    setRound(firstSixRandomsArray)

    const lastRandom = Math.floor(Math.random() * 9 + 1)
    console.log(lastRandom);

    setLastRound(lastRandom)

  }

  const resetNumbers = () => {
    setRound(firstFive)
    setLastRound(lastOne)
    console.log('CLICK');
  }



  return (
    <div >
      <div className="flex justify-center mt-[40px] mb-[30px]" >
        <span>
          {
            round.map((item, idx) =>
              <div key={idx} className='border-3 rounded-full border-solid border-sky-300 w-[30px] h-[30px] mr-[10px]' >{item}</div>
            )
          }
        </span>
        <span>
          {
            // lastRound.map((item, idx) =>
            <div className='border-solid border-sky-300 bg-sky-300 w-[30px] h-[30px] rounded-full ' >{lastRound}</div>
            // )
            // 
          }
        </span>
      </div>
      <div>
        <button onClick={resetNumbers} className="border-2 rounded border-teal-600 text-teal-700 w-[70px] h-[45px]">Reset</button>
        <button onClick={randomNumbers} className="bg-teal-700 rounded text-white w-[200px] h-[45px] ml-5" >Show me lucky numbers</button>
      </div>
    </div>
  );
}

export default NumbersSection;