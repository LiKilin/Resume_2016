$(document).ready(function(){
	 //对象命名空间，防止变量污染。
	 var LYC = {}
	 //header连接的选中标记
	 $("nav a").each(function(index,elem){
	 	var href = elem.getAttribute("href");
	 	var arr = window.location.toString().split("/");
	 	var location = arr[arr.length-1];
	 	if(href == location || href == ""){
	 		$(elem).addClass("aSelect");
	 	}
	 });
})