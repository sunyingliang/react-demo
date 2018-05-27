/**
 * index.js
 */

import {add, subtract, createObject, multiby} from './module';
//import {add, subtract} from './module';
import styles from './style.css';

if (module.hot) {
    module.hot.accept();
}

const resultA = add(1, 2);
const resultB = subtract(3, 1);
const resultC = createObject({'name':'tim'});
const resultD = multiby(2, 4);

console.log(resultA, resultB, resultC, resultD);
console.log(styles.globalClass);
console.log(styles.localClass);
console.log(process.env.APP_NAME)
