$(document).ready(function(){
	$('#btn').click(process);
});

function process(){
	$.ajax({
		type:'POST',
		dataType:'json',
		url: 'empsearch.do',
		data:{data:$('#data').val()},
		success:viewMessage
	});
}

function viewMessage(res){
	$.each(res, function(index, element){
		$('#wrap table').append(`<tr><td>${element.employee_id}</td>
									 <td>${element.first_name}</td>
									 <td>${element.salary}</td></tr>`);
	});
}

