$ ->
	$('#page-content').hide()
	$("#nav-bar").mouseover ->
		$("#page-content").fadeIn("slow")
	$("#page-content").mouseout ->
		$("#page-content").fadeOut("slow")