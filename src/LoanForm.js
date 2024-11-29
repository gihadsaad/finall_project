import { findAllByAltText } from "@testing-library/react";
import "./FormStyles.css"
import Model from "./Model"
import { useState } from "react"
export default function LoanForm(){
    const [errorMessage,seterrorMessage]=useState(null);
    const [showModel,setshowModel]=useState(false);    
    const [loanInputs ,setloanInputs] = useState({
        name:"",
        phoneNumber:"",
        age:"",
        isEmployee:false,
        salaryRang:""
    });
    function handleFormSubmit(event){        
        event.preventDefault();
        seterrorMessage(null);
        const {age , phoneNumber}=loanInputs;
        if( age<18 || age>100){
            seterrorMessage("the age is notallowed")
        }else if (phoneNumber.length <10 ||phoneNumber.length > 12)
        {
                seterrorMessage("phonenumber is coorect")
            }
        
        setshowModel(true)
            
    }

    
    const IsAnDisabled=loanInputs.name=="" ||
    loanInputs.age=="" ||
     loanInputs.phoneNumber=="";


    function handClick(){
        if(showModel){
            setshowModel(false)
        }
    }    
    
    return(
        <div onClick={handClick} 
        className="flex">
            <form className="flex" id="LoanForm">
                <h>requesting aLoan</h>
                <hr></hr>
                <label>Name:</label>
                <input 
                value={loanInputs.name}
                onChange={(event)=>{
                    setloanInputs({...loanInputs, name: event.target.value});
                }

                }/>
                <label>Phone Number:</label>
                <input
                 value={loanInputs.phoneNumber}
                 onChange={(event)=>{
                     setloanInputs({...loanInputs, phoneNumber: event.target.value});
                 }
 
                 }/>
                <label>Age: </label>
                <input
                 value={loanInputs.age}
                 onChange={(event)=>{
                     setloanInputs({...loanInputs, age: event.target.value});
                 }
 
                 }/>
                <label style={{marginTop:"30px"}}>Are You an employe?</label>
                <input type="checkbox"
                 checked={loanInputs.isEmployee}
                 onChange={(event)=>{
                     setloanInputs({...loanInputs, isEmployee: event.target.checked});
                 }
 
                 }/>
                <label>Salary</label>
                <select  value={loanInputs.salaryRang}
                onChange={(event)=>{
                    setloanInputs({...loanInputs, salaryRang: event.target.value});
                }

                }>
                    <option>Less than 500$</option>
                    <option>Between 500$ and 2000$</option>
                    <option>above 2000$</option>
                </select>
                <button className={IsAnDisabled ? "disabled" : ""}
                onClick={handleFormSubmit}
                disabled={IsAnDisabled}
                   id="submit-btn"> Submit</button>

            </form>
            <Model errorMessage={errorMessage} isVisable={showModel}/>
            
        </div>
    )
}

