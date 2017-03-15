$(function(){
				//能够自己手动打分
	        	$("#pf-box .star_scorePs1").each(function () {
		            rxued.scores.scoreFun(1, $(this));
		        });
		        $("#pf-box .star_scorePs2").each(function () {
		            rxued.scores.scoreFun(1, $(this));
		        });
		        $("#pf-box .star_scorePs3").each(function () {
		            rxued.scores.scoreFun(1, $(this));
		        });
		        //进度条
		        rxued.progress.doProgress(".uiBar", ".uiBar-hor", ".uiBar-num");
		});
		//引用代码显示插件
		SyntaxHighlighter.config.clipboardSwf = 'js/SyntaxHighlighter/scripts/clipboard.swf';
		SyntaxHighlighter.all();
		//控制滚动导航
			$("#tablist li").click(function(){
				$(this).addClass("uiTab1-active").siblings().removeClass("uiTab1-active")
			});
			var scrollBox = $(".ysinner");
			$(window).scroll(function(){
				changeTab()
			});
			$(window).load(function(){
				changeTab()
			});
			$(window).resize(function(){
				changeTab()
			});
			function changeTab(){
				scrollBox.each(function(index){
		            if($(window).scrollTop()>$(this).offset().top-50){
		                //console.log($(this).index())
		                $("#tablist li").eq($(this).index()).addClass("uiTab1-active").siblings().removeClass("uiTab1-active")
		            }
		        })
			}
		