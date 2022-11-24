let httpRequest;

/*
window.onload = function(){
let btn = document.getElementById("btn");
btn.onclick = process;
}
*/

let btn = document.getElementById("btn");
btn.onclick = process;

function process(){

 	//ajaxe 처리를 위한 브라우저별 객체 생성
 	if(window.XMLHttpRequest){
	httpRequest = new XMLHttpRequest();
	}else{
		httpRequest = new ActiveXObject("Microsoft.XMLHttP");
	}
	//2서버가 응답한 데이터를 처리하기위한 함수 등록
	httpRequest.onreadystatechange = viewMessage;
	
	//3서버 요청준비
	httpRequest.open('GET','ajaxview/part01/sample.txt', true);
	
	//4서버요청
	httpRequest.send();
 }
 //서버로 응답을 받을떼 수행한느 함수 정의
 function viewMessage(){
	 //alert("3");
	if(httpRequest.readyState==4 && httpRequest.status==200){
		document.getElementById("wrap").innerHTML = httpRequest.responseText;
	}
 }