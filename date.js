/* | JavaScript Date |
 * | Prabhat Kumar
 * | 11:41:44 PM; 24/12/2012
 * | Copyright © 2012. All Rights Reserved.
 */
var d=new Date();
var weekDay=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
var monthName=new Array("January","February","March","April","May","June","July","August","September","October","November","December");
var result = weekDay[d.getDay()] + ", " + monthName[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
document.write(result.link("http://kumarlab.org/"));
