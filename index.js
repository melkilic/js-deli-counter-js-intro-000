
function takeANumber(currentLine, name){
  currentLine.push(name);

  console.log("Welcome, " + name + ". You are number " + currentLine.length + " in line.");

  return "Welcome, " + name + ". You are number " + currentLine.length + " in line."
}
takeANumber(katzDeli, "Ada")
takeANumber(katzDeli, "Grace")
takeANumber(katzDeli, "Kent")
