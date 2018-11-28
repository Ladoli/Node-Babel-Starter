import express from 'express';

import { telephonePad, port } from './config';

import tallL from './functions/tallL';
import smallL from './functions/smallL';


const app = express();


app.listen(port, ()=>{
    console.log('Listening on the ' + port);
    console.log(getQualifyingNumbers(4));
});



function getQualifyingNumbers(n){
    if(n < 1){
        return 0;
    }

    let qualifying = 0;
    let currentCoords = {
        row: 3, 
        column: 1,
        numberCombo: "0"
    };

    let possibilities =[currentCoords];

    for(let i = 1, j = 0; i<n; i++, j=cycle(j)){
        if(j===0){
            console.log("triggered")
            if(i===1){
                possibilities = tallL(currentCoords);
            }else{
                let newPossibilities = [];
                for(let k = 0; k<possibilities.length; k++){
                    newPossibilities = [...newPossibilities, ...tallL(possibilities[k])];
                }
                possibilities = newPossibilities;
            }
        }else{
            let newPossibilities = [];
            for(let k = 0; k<possibilities.length; k++){
                newPossibilities = [...newPossibilities, ...smallL(possibilities[k])];
            }
            possibilities = newPossibilities;
        }
        
        if(i === n-1){
            console.log(possibilities)
            return possibilities.length;
        }
    }
    console.log(possibilities)
    return possibilities.length;
}


function cycle(j){
    if(j === 2){
        return 0;
    }else{
        return ++j;
    }
}

