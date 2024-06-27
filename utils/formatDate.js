import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime.js';
dayjs.extend(relativeTime);

//this function changes an ISO date into a readable string
const parsedDate = (dateString) => dayjs(dateString).format('MMMM D, YYYY, hh:mm:ss A UTC');

//this function converts date formats to show how long ago the given date was
const longAgo = (dateString) => dayjs(dateString).fromNow();

//another function changing ISO dates to readable strings but more simplictic
const simpleDate = (dateString) => dayjs(dateString).format('dddd, MMMM DD, YYYY');

//yet another function changing ISO dates to readable strings be even MORE simplictic
const simplerDate = (dateString) => dayjs(dateString).format('MM/DD/YYYY');

export { parsedDate, longAgo, simpleDate, simplerDate };