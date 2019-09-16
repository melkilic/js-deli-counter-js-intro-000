var katzDeliLine = [];
function takeANumber(currentLine, name){
  currentLine.push(name);

  console.log("Welcome, " + name + ". You are number " + currentLine.length + " in line.");

  return "Welcome, " + name + ". You are number " + currentLine.length + " in line."
}
takeANumber(katzDeliLine, "Ada")
takeANumber(katzDeliLine, "Grace")
takeANumber(katzDeliLine, "Kent")

// function nowServing(line){
//   console.log(line[0]);
//    legal.slice(1);
// }if(!line.length){
//  console.log("There is nobody waiting to be served!");
//   return "There is nobody waiting to be served!";
//
// }
// function nowServing(line) {
//   if(!line.length) {
//     console.log("There is nobody waiting to be served!")
//     return "There is nobody waiting to be served!"
//   } else {
//     //console.log("Currently serving " + line.shift());
//     return "Currently serving " + line.shift();
//   }
function nowServing(newLine){
  if (newLine.length === 0){
return “There is nobody waiting to be served!”
}else{
  var personOne= newLine[0];
  newLine.splice(0,1);
return “Currently serving ” + personOne[0] + “.”;
}
}
// function nowServing(x) {
//   if (x.length === 0) {
//     return "There is nobody waiting to be served!"
//   } else {
//     var name = x[0];
//     x.splice(0, 1);
//     return "Currently serving " + name + ".";
//   }
// }