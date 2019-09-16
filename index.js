
function takeANumber(katzDeliLine,name){
katzDeliLine.push(name);
katzDeliLine.push(katzDeliLine.length)
return("Welcome,${name}. You are number ${katzDeliLine.length}in line.");
}
takeANumber(1,"Ada")
takeANumber(4,"Grace")
takeANumber(6,"Kent")
// function takeANumber(line, name){
//   line.push(name);
// 
//   console.log("Welcome, " + name + ". You are number " + line.length + " in line.");
// 
//   return "Welcome, " + name + ". You are number " + line.length + " in line."
// }
// takeANumber(katzDeli, "Ada")
// takeANumber(katzDeli, "Grace")
// takeANumber(katzDeli, "Kent")
