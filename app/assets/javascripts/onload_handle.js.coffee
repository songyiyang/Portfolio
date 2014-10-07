$ ->
	$('#page-content').hide()
	$("#yiyang").mouseover ->
		$("#page-content").fadeIn("slow")
	$("#page-content").mouseout ->
		$("#page-content").fadeOut("slow")