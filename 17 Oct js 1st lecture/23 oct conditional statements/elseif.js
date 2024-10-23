var per = 60;

if (per >= 90) {
  console.log("Outstanding With first division");
} else if (per <= 90 && per >= 60) {
  console.log("First Division");
} else if (per <= 60 && per >= 45) {
  console.log("second Division");
} else if (per <= 45 && per >= 30) {
  console.log("Third Division");
} else {
  console.log("fail !!!");
}
