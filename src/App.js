import './App.css';
import { useState, useEffect } from 'react'

function App() {
  
  const [num1 , setNum1 ] = useState(null);
  const [num2 , setNum2 ] = useState(null);

  const setNumbers = () => {
    setNum1(getNum())
    setNum2(getNum())
  }

  useEffect(() => {
    const subscribe = setNumbers();
  },[])

  const getNum = ( ) => {
    return Math.floor(Math.random()*(99-10+1)+10);
  }
  
  return (
    <div>
      <header></header>
      <section>
        <h1 style={{textAlign:'center'}}>Addition</h1>
        <section>
        <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p><span>{num1}</span> + <span>{num2}</span></p>
              </div>
              <div className="flip-card-back">
               <p>{num1 + num2}</p>
              </div>
            </div>
          </div>
        </section>
        <section style={{textAlign:'center'}}> 
         <button className='btn' onClick={() => setNumbers()}>Next</button>
        </section>
      </section>
    </div>
  );
}

export default App;
