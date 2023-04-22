import React from 'react';
import './App.css';
import India from './Images/Indian.png';
import Australia from './Images/Australia.png';
import newArrow from './Images/newArrow.png';



function App() {
  return (
    <div className="App">
      <h1 className='heading'>Score Panel | Word Cup 2019</h1>
    
      <div className='panel'>
        <div className='p-left'>
          <img src={India} alt=" " />
        </div>

        <div className='p-mid'>
          <div className='players'>
            <img src={newArrow} alt=" " />
            <p>Rohit</p>
            <p>Dhawan</p>
          </div>
          <div className='run'>
            <p>32 <small>56</small></p>
            <p>46 <small>50</small></p>
          </div>
          <div className='ining'>
            <p>AUS v <span id="india">IND</span> <span id='run-wicket'>18-0</span> <spn id='P2'>P2</spn> <span id='over'>16</span> <span id='match'>MATCH 14 - THE OVAL</span></p>
          </div>
          <div className='balls'>
          <p>COUNTER-NILE</p>

          <div className='move'>
            <div className='circle'></div>
            <div className='circle'></div>
            <div className='circle'></div>
            <div className='circle'></div>
            <div className='circle'></div>
            <div className='circle'></div>
          </div>
        </div>
        </div>

        <div className='p-right'>
          <img src={Australia} alt=" " />
        </div>

       
      </div>
    </div>

  );
}


export default App;
