import { useState } from 'react';
import Top from './Top';
import Header from './Header';
import './App.css';
import InputShortener from './InputShortener';
import LinkResult from './LinkResult';
import Footer from './Footer';
function App() {
const [inputValue, setInputValue] = useState("");

  return (
 
   <>
   <Top />
   <div className="container">
      <Header />
      
      
      <InputShortener setInputValue={setInputValue} />
      <LinkResult inputValue={inputValue} />
    </div>
  <Footer />
   </>
  );
}

export default App;
