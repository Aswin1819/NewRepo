function btnclick(val){
    document.getElementById("display").value+=val
}
function equalClick(){
    console.log("nooooo")
    var text=document.getElementById("display").value
    var result=eval(text)
    document.getElementById("display").value=result
}
function cleardisplay(){
    document.getElementById("display").value=""
}
