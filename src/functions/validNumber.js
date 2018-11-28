import { telephonePad } from '../config';

export default (row,column) => {
    return telephonePad[row][column] !== '*' && telephonePad[row][column] !== '#'
}