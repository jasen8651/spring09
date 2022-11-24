let httpRequest;

let btn = document.querySelector("#btn")
btn.onclick = process;

function process(){
	
	//ajaxe 처리를 위한 브라우저별 객체 생성
 	if(window.XMLHttpRequest){
	httpRequest = new XMLHttpRequest();
	}else{
		httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
	}
	//2서버가 응답한 데이터를 처리하기위한 함수 등록
	httpRequest.onreadystatechange = viewMessage;
	
	//3서버 요청준비
	httpRequest.open('POST','name.do', true);
	
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	//4서버요청
	httpRequest.send('name=' + document.querySelector("#name").value);
}

function viewMessage(){
	if(httpRequest.readyState==4 && httpRequest.status==200){
		document.querySelector("#wrap").innerHTML = httpRequest.responseText;
	}
 }