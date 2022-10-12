import React from 'react'

const West = () => {
    return (
        <div>
            <div align = "center">
              <form name = "myForm" method="post" action="https://sheetdb.io/api/v1/tfyuim9qryyvs" id = "west-form" onSubmit={validateForm}>
                  <div>
                      <h1>Fission Fantasy League Mumbai</h1>
                  </div>
                  Name <input name="data[Name]"/>
                  <br></br>
                  VFID <input name="data[VFID]"/>
                  <br></br>
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

            <div align = "center">
            <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTBd20L-G_kJlnsG8zodEg-1UJm1kaQzFoqQTsqrU1UCW0aLSKiyWtrtOEpF4vAQq3IPRe-3c-tN-Vo/pubhtml?gid=1754538151&amp;single=true&amp;widget=true&amp;headers=false" width = "700px" height = "500px" align = "center"></iframe>
            </div>

        </div>
    );
  };

    function validateForm() {
        var inputs = document.getElementsByTagName('input');
        var total_sum = 20
            for (var i = 0; i < inputs.length; ++i) {
                if(inputs[i].type == 'number'){
                total_sum = total_sum -  inputs[i].value;
                }
            }

        if(total_sum != 0){
            alert("did not add up to 20")
            return false;
        }

        else 
            alert('total was 100')
            return true

    }

    
        

export default West