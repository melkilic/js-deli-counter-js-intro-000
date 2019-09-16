
function takeANumber(katzDeliLine,name){
katzDeliLine.push("${name}");
katzDeliLine.push("${katzDeliLine.length}")
return("Welcome,${name}. You are number ${katzDeliLine.length}in line.");
}
takeANumber(1,"Ada")
takeANumber(4,"Grace")
takeANumber(6,"Kent")
