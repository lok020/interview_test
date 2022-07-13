import './App.scss';
import { useState } from 'react';

import Step1 from "./STEPS/Step1";
import Step2 from "./STEPS/Step2";
import Step3 from "./STEPS/Step3";

function App() {
  const [step, setStep] = useState([true, false, false]);

  const expandStep1 = () => {
    setStep([true, false, false]);
  }

  const expandStep2 = () => {
    setStep([false, true, false]);
  }
  
  const expandStep3 = () => {
    setStep([false, false, true]);
  }

  return (
    <div className="App">
      <div className='form-area'>
        <Step1 is_expand={step[0]} expand={expandStep1} nextStep={expandStep2} />
        <Step2 is_expand={step[1]} expand={expandStep2} nextStep={expandStep3} />
        <Step3 is_expand={step[2]} expand={expandStep3} nextStep={expandStep1} />
      </div>
    </div>
  );
}

export default App;
