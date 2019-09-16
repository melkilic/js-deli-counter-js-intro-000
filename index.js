var katzDeliLine=[];
function takeANumber(katzDeliLine,name){
katzDeliLine.push("${name}");
return("Welcome,${name}. You are number ${katzDeliLine.length}in line.");
}
takeANumber(1,"Ada")
takeANumber(4,"Grace")
takeANumber(katzDeliLine,"Kent")
