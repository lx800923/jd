// JavaScript Document

 $(function(){

function window_resize(){
	var window_w=window.innerWidth;
var window_h=window.innerHeight;
var isSmallScreen=window_w <768;

	$("#main_ad > .carousel-inner > .item").each(function(index, element) {
	
    $el=$(element);
	var domSrc=$el.attr(isSmallScreen?"img_sx":"img_lg");
	var domSize=isSmallScreen?"contain":"cover";
	var h=isSmallScreen?"128px":"400px";
	$el.css('background-image',"url("+domSrc+")").css("background-size","cover").css("height",h);
	
});
var li_w_sum=0;
var $ul_container=$("#main_3 > .container  .nav-tabs");
var $lis=$ul_container.children();
    $lis.each(function(index, element) {
	 var $el=$(element);
	 li_w_sum+=$el.width();
       
    });
	$ul_container.css("width",li_w_sum).parent()
	.css("overflow-x","scroll");
	//设置父元素内的子元素超出隐藏并且横向滚动
    var elli_w=0;
	var elli2_w=0;
	if(window_w<=768)
	{
		
		var current_w=window.innerWidth;
		
		$("#main_4 .nav-stacked li").each(function(index, element) {
            $elli=$(element);
			elli_w+=$elli.width();
			
        });
		
		var margin_l=(current_w-elli_w)/2;
 
	$("#main_4 .nav-stacked").css("margin-left",margin_l);
    $("#main_4 .ul_2").css("text-align","center").css("list-style","none");
		    
		}else{
			$("#main_4 .nav-stacked").css("margin-left",0);
			
			$("#main_4 .ul_2").css("text-align","left");
			
			}
		
		
	
	
	}


//-----------------------------------------	
	
$(window).on("resize",window_resize).trigger("resize");
$(window).on("scroll",function(){
	//绝对定位
	var mid=(window.innerWidth-$("#header .topbar").width())/2;
	$("#header .topbar").css("position","fixed").css("top",0).css("left",mid).css("z-index",3000);
	if($("body").scrollTop()==0){
		$("#header .topbar").css("position","static");
		}
	
	});
$('[data-toggle="tooltip"]').tooltip();	
$("#main_4 .nav-stacked a").on("click",function(){
	$this=$(this);
	var title=$this.attr("my_title");
	$("#main_4 .news_title").text(title);
	
	});

	});