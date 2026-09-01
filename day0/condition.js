//if , eseif , else, boolean.
let age = 18;
let hastickets = true;
if (age >= 18 && hastickets) {
    console.log("u are eligible to enter the stadium");
}
else if (age >= 18 && !hastickets) {
    console.log(" u are eligible to enter the stadium ,but u need to buy the tickets");
}
else if (age < 18 && hastickets) {
    console.log("u are not eligible to enter the stadium");
}
else {
    console.log("go home");
}
//lets go for switch
const passport = "moroccan_passport";
switch (passport) {
  case "american_passport":
    const message = "you're welcome";
    console.log(message);
    break;
  case "UK_passport":
    const message1 = "nice_to_have_u";
    console.log(message1);
    break;
  default:
    console.log("stay at morocco.");
}