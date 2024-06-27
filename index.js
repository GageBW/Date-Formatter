import { parsedDate, longAgo, simpleDate, simplerDate } from "./utils/formatDate.js";
import chalk from "chalk";

console.log(chalk.black.bgGreen('Parsed Dates:'));
console.log(parsedDate('2007-04-21T09:40:26+0000'));
console.log(parsedDate('2024-06-27T17:59:12+0000'));
console.log(parsedDate('1998-08-12T18:04:10+0000'));
console.log(parsedDate('2001-06-30T18:05:52+0000'));
console.log(parsedDate('Mon, 7 Jan 2024 18:05:52 +0000'));

console.log(chalk.black.bgGreen('How Long Ago:'));
console.log(longAgo('2007-04-21T09:40:26+0000'));
console.log(longAgo('2024-06-27T17:59:12+0000'));
console.log(longAgo('1998-08-12T18:04:10+0000'));
console.log(longAgo('2001-06-30T18:05:52+0000'));
console.log(longAgo('Mon, 7 Jan 2024 18:05:52 +0000'));

console.log(chalk.black.bgGreen('Simple Dates:'));
console.log(simpleDate('2007-04-21T09:40:26+0000'));
console.log(simpleDate('2024-06-27T17:59:12+0000'));
console.log(simpleDate('1998-08-12T18:04:10+0000'));
console.log(simpleDate('2001-06-30T18:05:52+0000'));
console.log(simpleDate('Mon, 7 Jan 2024 18:05:52 +0000'));

console.log(chalk.black.bgGreen('Simpler Dates:'));
console.log(simplerDate('2007-04-21T09:40:26+0000'));
console.log(simplerDate('2024-06-27T17:59:12+0000'));
console.log(simplerDate('1998-08-12T18:04:10+0000'));
console.log(simplerDate('2001-06-30T18:05:52+0000'));
console.log(simplerDate('Mon, 7 Jan 2024 18:05:52 +0000'));