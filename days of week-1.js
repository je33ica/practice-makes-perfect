// Write a function that takes in a number and returns the corresponding day of the week.
//   Ex:
//   Input: 1
//   Output: 'Monday'
//   Input: 5
//   Output: 'Friday'
//   Input: 8
//   Output: undefined

var DaysOfTheWeek = {1:"Monday", 2:"Tuesday", 3:"Wednesday", 4:"Thursday", 5:"Friday", 6:"Saturday", 7:"Sunday"}

//var DOTW =

const dayOfWeek = num => {
    let daysArr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Saturday"];
    if (typeof num !== "number"){
        return 'Please enter a number'
    } else{
        return daysArr[num]
    }
}


function dayOfWeekAsString(dayIndex) {
    return ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][dayIndex] || '';
  }


  var weekday=new Array(7);
weekday[0]="Monday";
weekday[1]="Tuesday";
weekday[2]="Wednesday";
weekday[3]="Thursday";
weekday[4]="Friday";
weekday[5]="Saturday";
weekday[6]="Sunday";
console.log("Today is " + weekday[3]);

//todays date
console.log(new Date().toLocaleString('en-us', {  weekday: 'long' }));


def dayNameFromWeekday(weekday):
    days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    return days[weekday];
    if 0 < weekday < len(days) else None



    function numberToDOW(num){
        if(typeof num !== "number") {
            throw new Error('num must be type of number')
        }
        var dows = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

        return dows[num];
    }





//make it a number, dont rely on coersion
    var dow = "3";
    vardowNumber = parseInt(dow)
    numberToDOW 

    //swith statement 