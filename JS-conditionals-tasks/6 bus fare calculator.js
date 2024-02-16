/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
var age=62;
var work="job";
var regual_Price=800;

if(work=="student"){
    var Discount=regual_Price*50/100;
    var final=regual_Price-Discount;
    console.log(final);
}
else if(age<10){
    console.log("Free");
}
else if(age>=60){
    var Discount=regual_Price*15/100;
    var final=regual_Price-Discount;
    console.log(final);
}
else{
    console.log(regual_Price);
}
