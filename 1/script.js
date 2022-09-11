const today = new Date();
const day = today.getDay();
const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"]
console.log("Today is : " + daylist[day] + ".");

const hour = today.getHours();
const minute = today.getMinutes();
const sec = today.getSeconds();

const prepand = (hour >= 12)? "PM" : "AM"

console.log( "Current Time is :" + hour + ":"+ minute + ":" + sec + prepand );