import { telephonePad } from '../config';
import validNumber from './validNumber';

export default (coords) =>{
    let possibilities = [];
    let { row, column } = coords;

    let northRowLarge = row - 2;
    let southRowLarge = row + 2;
    let leftColLarge = column - 2;
    let rightColLarge = column + 2;

    let northRowSmall = row - 1;
    let southRowSmall = row + 1;
    let leftColSmall = column - 1;
    let rightColSmall = column + 1;

    //Up 2x, Left 1x
    if(northRowLarge > -1 && leftColSmall > -1){
        possibilities.push({
            row: northRowLarge,
            column: leftColSmall,
            numberCombo: coords.numberCombo + telephonePad[northRowLarge][leftColSmall]
        });
    }

    //Up 2x, Right 1x
    if(northRowLarge > -1 && rightColSmall < 3){
        possibilities.push({
            row: northRowLarge,
            column: rightColSmall,
            numberCombo: coords.numberCombo + telephonePad[northRowLarge][rightColSmall]
        });
    }

     //Down 2x, Left 1x
     if(southRowLarge < 4 && leftColSmall > -1){
        if(validNumber([southRowLarge],[leftColSmall])){
            possibilities.push({
                row: southRowLarge,
                column: leftColSmall,
                numberCombo: coords.numberCombo + telephonePad[southRowLarge][leftColSmall]
            });
        }   
    }

    //Down 2x, Right 1x
    if(southRowLarge < 4 && rightColSmall < 3){
        if(validNumber([southRowLarge],[rightColSmall])){
            possibilities.push({
                row: southRowLarge,
                column: rightColSmall,
                numberCombo: coords.numberCombo + telephonePad[southRowLarge][rightColSmall]
            });
        }
    }

    //Left 2x, Up 1x
    if(leftColLarge > -1 && northRowSmall > -1){
        possibilities.push({
            row: leftColLarge,
            column: northRowSmall,
            numberCombo: coords.numberCombo + telephonePad[northRowSmall][leftColLarge]
        });
    }

     //Left 2x, Down 1x
     if(leftColLarge > -1 && southRowSmall < 4){
        if(validNumber([southRowSmall],[leftColLarge])){
            possibilities.push({
                row: leftColLarge,
                column: southRowSmall,
                numberCombo: coords.numberCombo + telephonePad[southRowSmall][leftColLarge]
            });
        }
    }

    //Right 2x, Up 1x
    if(rightColLarge < 3 && northRowSmall > -1){
        possibilities.push({
            row: rightColLarge,
            column: northRowSmall,
            numberCombo: coords.numberCombo + telephonePad[northRowSmall][rightColLarge]

        });
    }

    //Right 2x, Down 1x
    if(rightColLarge < 3 && southRowSmall < 4){
            if(validNumber([southRowSmall],[rightColLarge])){
            possibilities.push({
                row: rightColLarge,
                column: southRowSmall,
                numberCombo: coords.numberCombo + telephonePad[southRowSmall][rightColLarge]
            });
        }
    }
    return possibilities;
}