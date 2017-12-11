// JavaScript Document
//模拟tomcat访问请求
var http=require("http");
var server=http.createServer(function(request,response){
	console.log(request.url);
	response.writeHead(200,{'Content-Type':'text/html',
	                         'key1':'value1'});
	response.write('<h1>哈哈哈</h1>');
	response.end();
	});
server.listen(8099,function(error){
	
	console.log("成功监听8099端口");
	});