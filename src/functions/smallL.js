import { telephonePad } from '../config';
import validNumber from './validNumber';

export default (coords) =>{
    let possibilities = [];
    let { row, column } = coords;

    let north = row - 1;
    let south = row + 1;
    let left = column - 1;
    let right = column + 1;

    //Up 2x, Left 1x
    if(north > -1 && left > -1){
        possibilities.push({
            row: north,
            column: left,
            numberCombo: coords.numberCombo + telephonePad[north][left]
        });
    }

    //Up 2x, Right 1x
    if(north > -1 && right < 3){
        possibilities.push({
            row: north,
            column: right,
            numberCombo: coords.numberCombo + telephonePad[north][right]
        });
    }

     //Down 2x, Left 1x
     if(south < 4 && left > -1){
        if(validNumber([south],[left])){
            possibilities.push({
                row: south,
                column: left,
                numberCombo: coords.numberCombo + telephonePad[south][left]
            });
        }   
    }

    //Down 2x, Right 1x
    if(south < 4 && right < 3){
        if(validNumber([south],[right])){
            possibilities.push({
                row: south,
                column: right,
                numberCombo: coords.numberCombo + telephonePad[south][right]
            });
        }
    }

   
    return possibilities;
}