
function takeANumber(currentLine, name){
  currentLine.push(name);

  console.log("Welcome, " + name + ". You are number " + currentLine.length + " in line.");

  return "Welcome, " + name + ". You are number " + currentLine.length + " in line."
}
takeANumber(katzDeliLine, "Ada")
takeANumber(katzDeliLine, "Grace")
takeANumber(katzDeliLine, "Kent")

function nowServing(currentLine){
  console.log(currentLine[0]);
}
