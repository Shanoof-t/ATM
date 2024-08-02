
var depositAmount=0
var withdrawAmount=0
var balanceAmount= 0
function depositFunction(){
    depositAmount = parseFloat(document.getElementById("depositAmount").value)
    if(depositAmount>0){
        window.alert("Deposited Successfully");
        balanceAmount +=depositAmount
    }
    document.getElementById("depositAmount").value=" "
}
function withdrawFunction(){
    withdrawAmount=parseFloat(document.getElementById("withdrawAmount").value)
    if(balanceAmount>=withdrawAmount && withdrawAmount>0){
        window.alert("Withdrawn Successfully")
        balanceAmount =balanceAmount-withdrawAmount 
    }else if(depositAmount<withdrawAmount){
        window.alert("You dont have this much money to withdraw")
    }
    document.getElementById("withdrawAmount").value=" "
}
function balanceFunction(){
    if(balanceAmount<0){
        balanceAmount=0
        document.getElementById("balance").innerHTML=balanceAmount
    }else{
        document.getElementById("balance").innerHTML=balanceAmount
    }
}
document.querySelectorAll("label","id").eventListener("click",clearBalance())

function clearBalance(){
    document.getElementById("balance").innerHTML=" "
}

