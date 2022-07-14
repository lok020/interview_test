import './App.scss';
import { useState } from 'react';

import Step1 from "./STEPS/Step1";
import Step2 from "./STEPS/Step2";
import Step3 from "./STEPS/Step3";

function App() {
  const [step, setStep] = useState([true, false, false]);
  const [step1_content, setStep1Content] = useState(["","",""]);
  const [step2_content, setStep2Content] = useState(["","","","",""]);
  const [step3_content, setStep3Content] = useState([""]);
  // warning index representaion -> [firstName, surname, email]
  const [step1_warning, setStep1Warning] = useState([false, false, false]);
  // warning index representaion -> [telephone, gender, year, month, day]
  const [step2_warning, setStep2Warning] = useState([false, false, false, false, false]);
  // warning index representaion -> [comments]
  const [step3_warning, setStep3Warning] = useState([false]);

  const expandStep1 = () => {
    setStep([true, false, false]);
  }

  const expandStep2 = () => {
    setStep([false, true, false]);
  }
  
  const expandStep3 = () => {
    setStep([false, false, true]);
  }

  const updateStep1 = (content) => {
    setStep1Content(content);
  }
  
  const updateStep2 = (content) => {
    setStep2Content(content);
  }
  
  const updateStep3 = (content) => {
    setStep3Content(content);
  }
  
  const warningonStep1 = () => {
    // deep copy for edit
    let new_warning = JSON.parse(JSON.stringify(step1_warning));
    // first name checking
    if (step1_content[0] !== "")
        new_warning[0] = false;
    else
        new_warning[0] = true;
        
    // surname checking
    if (step1_content[1] !== "")
        new_warning[1] = false;
    else
        new_warning[1] = true;

    // email checking
    if (step1_content[2] !== "" && step1_content[2].includes("@") &&
        step1_content[2].slice(-1) !== "@" && step1_content[2].includes(".") &&
        step1_content[2].slice(-1) !== ".")
        new_warning[2] = false;
    else
        new_warning[2] = true;  
    setStep1Warning(new_warning);
    if (!new_warning.includes(true)) expandStep2();
    return new_warning.includes(true);
  }

  const warningonStep2 = () => {
    // deep copy for edit
    let new_warning = JSON.parse(JSON.stringify(step2_warning));
    // telephone checking
    if (step2_content[0] !== "")
        new_warning[0] = false;
    else
        new_warning[0] = true;
        
    // gender checking
    if (step2_content[1] !== "")
        new_warning[1] = false;
    else
        new_warning[1] = true;

    // year checking
    if (step2_content[2] !== "")
        new_warning[2] = false;
    else
        new_warning[2] = true;
        
    // month checking
    if (step2_content[3] !== "")
        new_warning[3] = false;
    else
        new_warning[3] = true;
        
    // day checking
    if (step2_content[4] !== "")
        new_warning[4] = false;
    else
        new_warning[4] = true; 
    setStep2Warning(new_warning);
    if (!new_warning.includes(true)) expandStep3();
    return new_warning.includes(true);
  }

  const warningonStep3 = () => {
    // deep copy for edit
    let new_warning = JSON.parse(JSON.stringify(step3_warning));
    // comments checking
    if (step3_content[0] !== "")
      new_warning[0] = false;
    else
      new_warning[0] = true;    
    setStep3Warning(new_warning);
    if (new_warning.includes(true)) expandStep3();
    else if (warningonStep1()) expandStep1();
    else if (warningonStep2()) expandStep2();
    else save();
  }

  const save = () => {
    // SAVE ACTION
  }

  return (
    <div className="App">
      <div className='form-area'>
        <Step1 is_expand={step[0]} expand={expandStep1} content={step1_content} update={updateStep1} warning={step1_warning} check={warningonStep1}/>
        <Step2 is_expand={step[1]} expand={expandStep2} content={step2_content} update={updateStep2} warning={step2_warning} check={warningonStep2}/>
        <Step3 is_expand={step[2]} expand={expandStep3} content={step3_content} update={updateStep3} warning={step3_warning} check={warningonStep3}/>
      </div>
    </div>
  );
}

export default App;
