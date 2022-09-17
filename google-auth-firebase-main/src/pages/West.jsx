import React from 'react'

const West = () => {
    return (
        <div>
            <form name = "myForm" method="post" action="https://sheetdb.io/api/v1/d2yebm50k3j5p" id = "mumbai-register">
                <div>
                    <h1>Fission Fantasy League Mumbai</h1>
                </div>
                Smashers <input name="data[Smashers]"/>
                <br></br>
                Chargers <input name="data[Chargers]"/>
                <br></br>
                Blasters <input name="data[Blasters]"/>
                <br></br>
                Warriors <input name="data[Warriors]"/>
                <br></br>
                Strikers <input name="data[Strikers]"/>
                <br></br>
                Thunderbolts <input name="data[Thunderbolts]"/>
                <br></br>
                Riders <input name="data[Riders]"/>
                <br></br>
                Gladiators <input name="data[Gladiators]"/>
                <br></br>
                <button type="submit" >Submit</button>
            </form>
        </div>
    );
  };
    // document.forms['sheetdb-form'].addEventListener('submit', function (event) {
    // //     Do something with the form's data here
    //     this.style['display'] = 'none';
    //     event.preventDefault();
    // });

    // var form = document.getElementById('sheetdb-form');
    //         form.addEventListener("submit", e => {
    //         e.preventDefault();
    //         fetch(form.action, {
    //             method : "POST",
    //             body: new FormData(document.getElementById("sheetdb-form")),
    //         }).then(
    //             response => response.json()
    //         ).then((html) => {
    //             // you can put any JS code here
    //             alert('success')
    //         });
    //         });
        
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

export default West