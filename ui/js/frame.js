//记录顶部导航条和主导航固定状态下文档的高度，以便于和二级三级导航菜单展开时nav的高度做对比
//j_outer位主导航菜单中除了nav-ul外的其他标签加上j_outer,用于计算nav高度并和文档高度做对比
//var odocumentH=0;
//$(function(){
//	odocumentH=$(document).height();
//})

//var odocumentH=$(document).height();
function countnavH(){
	if($("body").hasClass("nav-vertical"))
	{
		if($("#nav").hasClass("nav-fixed"))
		{
			return false;
		}else{
			var navOtherH=0;
			var onavconH=0;
			for(var oj=0;oj<$(".j_outer").length;oj++)
			{
				navOtherH+=$(".j_outer").eq(oj).outerHeight(true);
			}
			//判断是导航是否是选项卡形式的，如果是选向卡则计算当前nav-ul的高度
			$("#nav .nav-ul").each(function(){
				if($(this).css("display")=="block")
				{
					onavconH=$(this).outerHeight()+navOtherH;
				}
			})
			if(onavconH<$(document).height()-$("#main_header").height())
			{
				$("#nav").height($(document).height()-$("#main_header").height());
			}else{
				$("#nav").height(onavconH);
			}
		}
	}else{
		$("#nav").height("auto");
	}
}
//左侧导航js 一级菜单点击
$(".nav-ul>li>a").click(function(){
	$(this).parent("li").siblings().removeClass("open");
	$(this).parent("li").siblings().find(".open").removeClass("open");
	$(this).parent("li").siblings().find("ul").slideUp(200);
	if($(this).next("ul").length>0)
	{
		//竖直左侧导航菜单折叠如果body含有class=nav-collapsed-min，就取消含有二级导航的一级导航的click事件
		if($("body").hasClass("nav-collapsed-min")||$("body").hasClass("nav-horizontal"))
		{
			return false;
		}
		if($(this).next("ul").css("display")!="block")
		{
			$(this).parent("li").addClass("open");
			$(this).next("ul:first").slideDown(200,function(){
				countnavH();
			});
		}
		else
		{
			$(this).parent("li").removeClass("open");
			$(this).parent("li").find(".open").removeClass("open");
			$(this).parent("li").find("ul").slideUp(200,function(){
				countnavH();
			});
		}
	}
	else
	{
		$(this).parent("li").addClass("active").siblings().removeClass("active");
		$(this).parent("li").siblings().find(".active").removeClass("active");
	}
});

//左侧导航js 二级菜单点击
$(".nav-ul ul>li>a").click(function(){
	$(this).parent("li").siblings().removeClass("open");
	$(this).parent("li").siblings().find(".open").removeClass("open");
	$(this).parent("li").siblings().find("ul").slideUp(200);
	if($(this).next("ul").length>0)
	{
		//水平方向展示的导航菜单，如果二级菜单中有三级菜单，则取消二级菜单点击事件
		if($("body").hasClass("nav-horizontal")&&$(this).next("ul").length>0)
		{
			return false;
		}
		//竖直方向折叠导航，如果二级菜单中有三级菜单，则取消二级菜单点击事件
		if($("body").hasClass("nav-collapsed-min")&&$(this).next("ul").length>0)
		{
			return false;
		}
		if($(this).next("ul").css("display")!="block")
		{
			$(this).parent("li").addClass("open");
			$(this).next("ul:first").slideDown(200,function(){
				countnavH();
			});
		}
		else
		{
			$(this).parent("li").removeClass("open");
			$(this).parent("li").find("ul").slideUp(200,function(){
				countnavH();
			});
		}
	}
	else
	{
		$(this).parent("li").addClass("active").siblings().removeClass("active");
		$(this).parent("li").siblings().find(".active").removeClass("active");
		$(this).parents("li").addClass("active");
		$(this).parents("li").siblings().removeClass("active");
		$(this).parents("li").siblings().find(".active").removeClass("active");
		$(this).parents("li").siblings().find(".open").removeClass("open");
		$(this).parents("li").siblings().find("ul").slideUp(200);
	}
});
//左侧导航js 三级菜单点击
$(".nav-ul ul ul>li>a").click(function(){
	$(this).parent("li").addClass("active").siblings().removeClass("active");
	$(this).parents("li").addClass("active");
	$(this).parents("li").siblings().removeClass("active");
	$(this).parents("li").siblings().find(".active").removeClass("active");
	$(this).parents("li").siblings().find(".open").removeClass("open");
	$(this).parents("li").siblings().find("ul").slideUp(200);
});
//折叠导航js
$(".setup_nav").click(function(){
	$(".nav-horizontal .more-nav-li").removeClass("open_link");
	$(".nav-ul .open").removeClass("open");
	$(".nav-ul li ul").hide();
	$("body").toggleClass("nav-collapsed-min");
	if($("body").hasClass("nav-vertical"))
	{
		$(".AccordingDiv").css("margin-top","0px");
		if($("body").hasClass("nav-collapsed-min"))
		{
			$(".rolechange").hide();
			//判断nav-features位置(导航内容数据比较少时，.nav-features div以顶部对齐，内容比较多少，.nav-features div以底部对齐)
			if($(".nav-features").length>0)
			{
				if($(".nav-ul").outerHeight()>300&&$(".nav-vertical").hasClass("nav-collapsed-min"))
				{
					$(".nav-vertical.nav-collapsed-min .nav-features div").css({"top":"auto","bottom":"0"});
				}else{
					$(".nav-vertical.nav-collapsed-min .nav-features div").css({"top":"0","bottom":"auto"});
				}
			}
			$("#main_content").css("marginLeft","50px");
		}else{
			$(".rolechange").show();
			$("#main_content").css("marginLeft","180px");
		}
		//由水平方向导航切换到垂直方向
		///$(".nav-vertical .nav-ul>li").css("display","block");
	}else{
		//alert(1)
		$("#main_content").css("marginLeft","0px");
		jisuans();
		if($("#nav").hasClass("nav-fixed"))
		{
			$(".AccordingDiv").css("margin-top",$("#nav").outerHeight());
		}else{
			$(".AccordingDiv").css("margin-top","0px");
		}
		if ($("#hid_method").length > 0) {
		    eval($("#hid_method").attr("data-function"));
		}
	}
	countnavH();
});
//网页换肤 开始
$(".skin-item").click(function(){
	var odataClass=$("body").attr("data-class");
	if($("body").hasClass("nav-collapsed-min"))
	{
		$("body").attr("class","").addClass(odataClass).addClass("nav-collapsed-min");
	}else{
		$("body").attr("class","").addClass(odataClass)
	}
	//换肤时折叠起三级菜单
	$(".nav-ul .open").removeClass("open");
	$(".sub-2-nav").hide();
	
	$(".skin-item.active").removeClass("active");
	$(this).addClass("active");
	var thisIndex=$(this).index();
	if($(this).parent().hasClass("col-item-header"))
	{
		switch (thisIndex){
			case 0:
				$("body").addClass("logo-c000000 bar-cffffff nav-black");
				break;
			case 1:
				$("body").addClass("logo-c009688 bar-cffffff nav-black");
				break;
			case 2:
				$("body").addClass("logo-c8bc34a bar-cffffff nav-black");
				break;	
			case 3:
				$("body").addClass("logo-c00bcd4 bar-cffffff nav-black");
				break;	
			case 4:
				$("body").addClass("logo-cffca28 bar-cffffff nav-black");
				break;	
			case 5:
				$("body").addClass("logo-cf44336 bar-cffffff nav-black");
				break;	
			default:
				break;
		}
	}
	else if($(this).parent().hasClass("col-item-nav"))
	{
		switch (thisIndex){
			case 0:
				$("body").addClass("logo-cffffff bar-cffffff nav-black");
				break;
			case 1:
				$("body").addClass("logo-c009688 bar-c009688 nav-black");
				break;
			case 2:
				$("body").addClass("logo-c8bc34a bar-c8bc34a nav-black");
				break;	
			case 3:
				$("body").addClass("logo-c00bcd4 bar-c00bcd4 nav-black");
				break;	
			case 4:
				$("body").addClass("logo-cffca28 bar-cffca28 nav-black");
				break;	
			case 5:
				$("body").addClass("logo-cf44336 bar-cf44336 nav-black");
				break;	
			default:
				break;
		}
	}
	else if($(this).parent().hasClass("col-item-bar"))
	{
		switch (thisIndex){
			case 0:
				$("body").addClass("logo-c000000 bar-c000000 nav-white");
				break;
			case 1:
				$("body").addClass("logo-c009688 bar-c009688 nav-white");
				break;
			case 2:
				$("body").addClass("logo-c8bc34a bar-c8bc34a nav-white");
				break;	
			case 3:
				$("body").addClass("logo-c00bcd4 bar-c00bcd4 nav-white");
				break;	
			case 4:
				$("body").addClass("logo-cffca28 bar-cffca28 nav-white");
				break;	
			case 5:
				$("body").addClass("logo-cf44336 bar-cf44336 nav-white");
				break;	
			default:
				break;
		}
	}
		
})
//网页换肤 结束
function init(){
	//给nav赋自定义属性值，以便于导航不固定时调用
	var navH=$("#nav").outerHeight();
	var main_contentH=$("#main_box").height();
	if(navH<main_contentH)
	{
		$("#nav").attr("data-height",main_contentH);
	}
}
$(function(){
	init();
	//点击顶部按钮下拉菜单
	$("#topnav .dropdown").click(function(event){
		event.stopPropagation();//  阻止事件冒泡
		$(this).toggleClass("open");
		$(this).siblings("#topnav .dropdown").removeClass("open");
	});
	$(document).click(function(){
		$("#topnav .open").removeClass("open");
	});
	$(".dropdown-menu").click(function(event){
		event.stopPropagation();//  阻止事件冒泡
	})
	//水平、垂直方向导航切换
	$(".setup-layout-lable input").change(function(){
		$(".nav-horizontal .more-nav-li").removeClass("open_link");
		if($(this).parent().attr("data-direction")=="top")
		{
			$("body").addClass("nav-horizontal").removeClass("nav-vertical");
			$("body").attr("data-class","nav-horizontal");
			$(".rolechange").hide();
			$(".rolenav").show();
			//如果默认是竖直方向二级导航菜单展开状态，切换到横向菜单时，二级展开的菜单折叠起来
			$("#nav .nav-ul li.open").removeClass("open");
			$("#nav .nav-ul>li ul").hide();
			$("#main_content").css("marginLeft","0px");
			$("#nav").height("auto");
			jisuans();
			if($("#nav").hasClass("nav-fixed"))
			{
				$(".AccordingDiv").css("margin-top",$("#nav").outerHeight());
			}
			else
			{
				$(".AccordingDiv").css("margin-top","0");
			}
			//判断nav-features位置(导航内容数据比较少时，.nav-features div以顶部对齐，内容比较多少，.nav-features div以底部对齐)
			if($(".nav-features").length>0)
			{
				$(".nav-horizontal .nav-features div").css({"top":"100%","bottom":"auto"});
			}
			$("#nav").addClass("j_outerHeight");
		}
		else 
		{
			$("body").addClass("nav-vertical").removeClass("nav-horizontal");
			$("body").attr("data-class","nav-vertical");
			$(".rolenav").hide();
			
			$(".AccordingDiv").css("margin-top","0px");
			if($("body").hasClass("nav-collapsed-min"))
			{
				$("#main_content").css("marginLeft","50px");
			}
			else
			{
				$(".rolechange").show();
				$("#main_content").css("marginLeft","180px");
			}
			//从水平方向切换到竖直方向时，隐藏更多按钮，并且设置nav-ul的宽度自适应
			$(".nav-vertical .nav-ul").css("width","auto");
			$(".nav-vertical .nav-ul>li").css("display","block");
			$(".more-nav-li").hide();
			countnavH();
			if($(".nav-features").length>0)
			{
				$(".nav-vertical .nav-features div").css({"top":"auto","bottom":"0"});
			}
			$("#nav").removeClass("j_outerHeight");
		}
		if ($("#hid_method").length > 0) {
		    eval($("#hid_method").attr("data-function"));
		}
	});
	//导航的固定和取消
	$("#j-fixed-header").click(function(){
		$(".AccordingDiv").css("margin-top","0");
		if($(this).attr("data-check")=="true"){
			$("#main_header").removeClass("header-fixed");
			$("#nav").removeClass("nav-fixed");
			$(this).attr("data-check","flase").removeClass("fixed-check");
			$("#j-fixed-nav").attr("data-check","flase").removeClass("fixed-check");
			countnavH();
		}
		else
		{
			$("#main_header").addClass("header-fixed");
			$(this).attr("data-check","true").addClass("fixed-check");
		}
	});
	$("#j-fixed-nav").click(function(){
		$(".nav-horizontal .more-nav-li").removeClass("open_link");
		if($(this).attr("data-check")=="true"){
			$("#nav").removeClass("nav-fixed");
			$(this).attr("data-check","flase").removeClass("fixed-check");
			$(".AccordingDiv").css("margin-top","0");
			//nav高度和浏览器高度对比
			countnavH();
		}
		else
		{
			$("#main_header").addClass("header-fixed");
			$("#nav").addClass("nav-fixed");	
			$(this).attr("data-check","true").addClass("fixed-check");
			$("#j-fixed-header").attr("data-check","true").addClass("fixed-check");
			if($("body").hasClass("nav-vertical"))
			{
				$(".AccordingDiv").css("margin-top","0");
				//$("#nav").height("100%");
				$("#nav").height($(window).height()-$("#logo").height());
			}
			else
			{
				$("#nav").height("auto");
				$(".nav-horizontal .nav-ul>li").css("display","inline-block");
				jisuans();
				$(".AccordingDiv").css("margin-top",$("#nav").outerHeight());
			}
		}
	})
})
function jisuans(){
	//计算水平方向主导航li展示个数
	var bodyW=$("#nav").width()-200;
	var owidth=0;
	var ole=$(".nav-horizontal .nav-ul>li").length;
	$(".nav-horizontal .nav-ul").css("width",bodyW);
	$(".nav-horizontal .nav-ul>li").css("display","inline-block");
	for(var oi=0;oi<ole;oi++)
	{
		if(owidth<=bodyW)
		{
			owidth+=$(".nav-horizontal .nav-ul>li").eq(oi).outerWidth();
			$(".more-nav-li").hide();
		}else{
			//alert(1)
			$(".more-nav-li").show();
			for(var ob=(oi-1);ob<ole;ob++)
			{
				$(".nav-horizontal .nav-ul>li").eq(ob).attr("data-msg","1").hide();
			}
		}
	}
}
$(window).resize(function(){
	jisuans();
	$(".nav-horizontal .more-nav-li").removeClass("open_link");
})
//点击水平方向导航内的更多按钮
$(document).on("click",".nav-horizontal .more-nav-li",function(){
	$("#nav").height("auto");
	$(this).toggleClass("open_link");
	if($(this).hasClass("open_link"))
	{
		$(".nav-horizontal .nav-ul>li[data-msg='1']").show();
	}else{
		$(".nav-horizontal .nav-ul>li[data-msg='1']").hide();
	}
	if($("#nav").hasClass("nav-fixed"))
	{
		$(".AccordingDiv").css("margin-top",$("#nav").outerHeight());
	}else{
		$(".AccordingDiv").css("margin-top","0px");
	}
	
});
//点击头部导航圆圈效果
!function(t, i, e, o) {
    function n(i, e) {
        this.$element = t(i),
        this.options = t.extend({}, n.Defaults, this._getOptionsFromElementAttributes(), e),
        this._prepare(),
        this._bind()
    }
    n.prototype._bind = function() {
        var n, r, a, s, p, c = this.$element, l = this.options;
        s = "ontouchend" in i || i.DocumentTouch && e instanceof DocumentTouch,
        p = 1 == s ? "touchend.rippleria" : "click.rippleria",
        this.$element.bind(p, function(i) {
           // i.stopPropagation();
            var e = t("<span class='rippleria-ink'></span>");
            if (c.prepend(e),
            l.color != o && e.css("background-color", l.color),
            e.css("animation", "rippleria " + l.duration / 1e3 + "s " + l.easing),
            setTimeout(function() {
                e.remove()
            }
            , parseFloat(l.duration)),
            e.height() || e.width() || (n = Math.max(c.outerWidth(), c.outerHeight()),
            e.css({
                height: n,
                width: n
            })),
            1 == s) {
                var p = i.originalEvent.touches[0] || i.originalEvent.changedTouches[0];
                r = p.pageX - c.offset().left - e.width() / 2,
                a = p.pageY - c.offset().top - e.height() / 2
            } else
                r = i.pageX - c.offset().left - e.width() / 2,
                a = i.pageY - c.offset().top - e.height() / 2;
            e.css({
                top: a + "px",
                left: r + "px"
            })
        }
        )
    }
    ,
    n.prototype._prepare = function() {
        var t = this.$element;
        "static" == t.css("position") && t.css("position", "relative"),
        t.css("overflow", "hidden");
        var i = "block" == t.css("display") ? "block" : "inline-block";
        t.css("display", i),
        t.wrapInner("<div class='rippleria-wrap'></div>")
    }
    ,
    n.prototype._getOptionsFromElementAttributes = function() {
        var i = this;
        return attrs = {},
        t.each(n.Defaults, function(t, e) {
            var o = i.$element.attr("data-rippleria-" + t);
            null  != o && (attrs[t] = o)
        }
        ),
        attrs
    }
    ,
    n.prototype.changeColor = function(t) {
        this.options.color = t
    }
    ,
    n.prototype.changeEasing = function(t) {
        this.options.easing = t
    }
    ,
    n.prototype.changeDuration = function(t) {
        this.options.duration = t
    }
    ,
    n.Defaults = {
        duration: 750,
        easing: "linear",
        color: o
    },
    t.fn.rippleria = function(i) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var o = t(this)
              , r = o.data("rippleria");
            r || (r = new n(this,"object" == typeof i && i),
            o.data("rippleria", r)),
            "string" == typeof i && "_" !== i.charAt(0) && r[i].apply(r, e)
        }
        )
    }
    ,
    t(function() {
        t("[data-rippleria]").rippleria()
    }
    )
}
(window.jQuery, window, document);






//左侧菜单滚动条调用
$(function () {
    $(".nav-wrapper-content").slimScroll({ height: "100%", borderRadius: "6px" });
    
	//$(".nav-wrapper-content").slimScroll({height:"100%",borderRadius:"6px"});
	
})