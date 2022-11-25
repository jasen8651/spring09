$(document).ready(function(){
	$('#btn').click(process);
});


function process(){
	alert('test');
	$.ajax({
		type:'GET',
		url:'https://dapi.kakao.com/v3/search/book?target=title',
		headers:{"Authorization": "KakaoAK 9773624f2adcc1df4fcaaa99e96d7b92"},
		dataType:'json',
		data:{"query": $('#search').val()},
		success:viewMessage
	});
}


function viewMessage(res){
	//console.log(res);
	//alert(res.documents[0].title);
		$.each(res.documents, function(index, element){
		$('#wrap table').append(`<tr><td>${element.title}</td>
								     <td><a href="${element.url}"><img src="${element.thumbnail}"</a></td>
									 <td>${element.price}</td></tr>`);
		});
	
}

