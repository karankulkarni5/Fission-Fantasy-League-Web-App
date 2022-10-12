import React from 'react'
import { useState } from 'react'

function East() {

    const [details, setDetails] = useState({
        Zone : 'East',
        Smashers: '',
        Chargers: '',
        Blasters: '',
        Warriors: '',
        Strikers: '',
        Thunderbolts: '',
        Riders : '',
        Gladiators: '',
       
    })

    const PostData =async(e)=>{
        e.preventDefault()

        const{Zone, Smashers, Chargers, Blasters, Warriors, Strikers, Thunderbolts, Riders, Gladiators}=details;

       const res=await fetch("https://ffl-test-1-default-rtdb.firebaseio.com/fflform.json",
       {
        
           method:'POST',
           headers:{
               'Content-Type':'application/json'
           },
           body:JSON.stringify({
            Zone ,
            Smashers ,
            Chargers ,
            Blasters ,
            Warriors ,
            Strikers ,
            Thunderbolts ,
            Riders ,
            Gladiators ,
           
           })
        })

    }

  return (
    <div>
    <h1>East Registration</h1>
        <div className='form' >
            <input type='text' placeholder='Smashers Units' onChange={(e)=>
                setDetails({...details,Smashers:e.target.value})} />
            <input type='text' placeholder='Chargers Units' onChange={(e)=>
                setDetails({...details,Chargers:e.target.value})}  />
            <input type='email' placeholder='Blasters Units' onChange={(e)=>
                setDetails({...details,Blasters:e.target.value})} />
            <input type='text' placeholder='Warriors Units' onChange={(e)=>
                setDetails({...details,Warriors:e.target.value})}  />
            <input type='text' placeholder='Strikers Units' onChange={(e)=>
                setDetails({...details,Strikers:e.target.value})}  />
            <input type='text' placeholder='Thunderbolts Units' onChange={(e)=>
                setDetails({...details,Thunderbolts:e.target.value})}  />
            <input type='text' placeholder='Riders Units' onChange={(e)=>
                setDetails({...details,Riders:e.target.value})}  />
            <input type='text' placeholder='Gladiators Units' onChange={(e)=>
                setDetails({...details,Gladiators:e.target.value})}  />

            <button onClick={PostData}>Submit</button>
        </div>
    </div>
  )
}

export default East;

    // document.forms['sheetdb-form'].addEventListener('submit', function (event) {
    // //     Do something with the form's data here
    //     this.style['display'] = 'none';
    //     event.preventDefault();
    // });

    // function validateForm() {
    //     var inputs = document.getElementsByTagName('input');
    //     var total_sum = 20
    //         for (var i = 0; i < inputs.length; ++i) {
    //             if(inputs[i].type == 'number'){
    //             total_sum = total_sum -  inputs[i].value;
    //             }
    //         }

    //     if(total_sum != 0){
    //         alert("did not add up to 20")
    //         return false;
    //     }

    //     else 
    //         alert('total was 100')
    //         return true

    // }