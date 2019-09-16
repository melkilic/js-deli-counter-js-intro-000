var katzDeliLine = [];
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);

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
// function nowServing(newLine){
//   if (newLine.length === 0){
// return “There is nobody waiting to be served!”
// }else{
//   var personOne= newLine[0];
//   newLine.splice(0,1);
// return “Currently serving ” + personOne[0] + “.”;
// }
// }
function nowServing(a) {
  if (a.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var name = a[0];
    a.splice(0, 1);
    return "Currently serving " + name + ".";
  }
}

// function currentLine(y){
//   var y=[]
//   if(y.length===0){
//   return "The line is empty."
// }else{
//   return(`The line is currently:` + y);
// }
function currentLine(NewLine) {
    var line = []
    if (NewLine.length === 0) {
      return "The line is currently empty."
    } else {
      for(var i = 0; i < NewLine.length; i++) {
        line += (i + 1) + ". " + NewLine[i] + ", "
      }
      line = line.slice(0, line.length-2)
      return "The line is currently: " + line
    }
}
