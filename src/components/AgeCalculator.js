import React,{useState} from 'react';
import "./AgeCalculator.css";
const AgeCalculator=()=>{
    const [birthdate,setBirthDate]=useState('');
    const[age,setAge]=useState(0);

     const resetCalculator=()=>{
        setBirthDate('');
        setAge(0);
     }
    const calculateAge=()=>{
        const today=new Date();
        const birthdateDate=new Date(birthdate);        
        let age=today.getFullYear() - birthdateDate.getFullYear();        
        const monthDiff=today.getMonth()-birthdateDate.getMonth();
        if(monthDiff<0 ||(monthDiff===0 && today.getDate()<birthdateDate.getDate())){
            age--;
        }
        setAge(age);
    }
    return (
        <div class="container">
            <h2 className="heading container_title">Age Calculator</h2>
            <p className ="para container_title">The Age Calculator can deteremine the age or interval</p>
            
            <div className="Container_middle">
                <div className="right">
                <h4>Data of Birth</h4>
                <input className='date' type="date" value={birthdate} onChange={e=>setBirthDate(e.target.value)}/>
                    <div className="button_div">
                    <button className="button-65" onClick={calculateAge} >Calculate Age</button>
                    <button className="button-65" onClick={resetCalculator}>Reset</button>
                    </div>
                </div>


                <div className="left">
                    <div className="Container_middle_para">                        
                        <h1>Your Age is</h1>
                    </div>                                        
                    <h1 className='age_heading'>{age>0 ? `${age}`:'nothing'}</h1>
                </div>
            </div>
        </div>
    );
}
export default AgeCalculator;