//conditionalstatement

//if hour btwn 6 and 12 "GoodMorning "
//if hour btw 12 and 18 print "Good Afternoon"

var hour = 17

if (hour >= 6 && hour <12){
    console.log('Good Morning')
} else if(hour >= 12 && hour  < 18){
  console.log('Good Afternoon')
}else {
    console.log('Good Evening')
}

var ageIsMoreThanEighteen =true
var isUSCitizen = false

if (ageIsMoreThanEighteen && isUSCitizen){
    console.log('Customer is eligible for DL')
} else{
    console.log('Customer is not eligible for DL')
}