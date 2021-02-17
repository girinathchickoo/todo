
var date=new Date();
var d=date.toDateString()



document.querySelector("h1").textContent=d;



document.querySelector(".list").addEventListener("change",value)
function value(event){
	window.input=event.target.value  
}


document.querySelector(".btn").addEventListener("click",function(){
	if(window.input.length >0){
	var node=document.createElement("LI")
	var text=document.createTextNode(window.input)
	var button=document.createElement("BUTTON")
	var btext=document.createTextNode("-")
	button.appendChild(btext)
	button.classList.add('btn-sm')
	node.appendChild(text)
	node.appendChild(button)
	node.setAttribute("onclick","line(this)")
	button.setAttribute("onclick","display(this)")
	var parent=document.getElementsByClassName("lst")[0]
	parent.appendChild(node)
	 document.querySelector("input").value="";}
	 window.input="";

})

function display(t){
	t.parentNode.style.display="none";
}
function line(t){
	t.classList.toggle("line")
}