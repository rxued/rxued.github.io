$(function() {
    //移入、移出问号
    $(".fixedTrangle").mouseenter(function() {
        $(this).find(".fixedtipscon").show()
    }).mouseleave(function() {
        $(this).find(".fixedtipscon").hide();
    });


    //点击团号搜索

    $(".serial_number").on("click",function() {
        $(this).parents("table").parent().find(".dailyftSearch1").show();
    });
    $(".uiText-searchIcon").click(function() {
        $(this).parents(".dailyftSearch1").hide();
    });

    //点击日期搜索
    $(".serial_number_data").click(function() {
        $(".dailyftSearch2").show();
    });
    $(".endTime").blur(function() {
        $(this).parents(".dailyftSearch2").hide();
    });

    //点击搜索》出现可选项搜索
    // $(".serial_number").click(function() {
    //     $(".dailyftSearch3").show();
    // });
    // $(".uiText-searchIcon").click(function() {
    //     $(this).parents(".dailyftSearch3").hide();
    // });
    //左侧导航收起
    $(".setup_nav").click();
    //点击角色添加样式
    $(".daily_title li").on("click",function(){
        $(this).addClass("title_cur").siblings().removeClass("title_cur");
    })
    //左侧JS
    rxued.table.LChangeapart($("#tab1 tr"), "#fff", "#eee");
    rxued.table.hoverChage($("#tab1 tr"), "#d1ecfe");
    //表格的点击事件
    $("#tab1 tr").on("click",function(){
        $(this).addClass("tractive").siblings().removeClass("tractive");
    })

    rxued.init.countH($(".scroll-content"), "15", function() {
        $(".scroll-content").slimScroll({
            height: $(".scroll-content").eq(0).height(),
            borderRadius: "0px"
        });
    });
    $(window).resize(function() {
        rxued.init.countH($(".scroll-content"), "15", function() {
            $(".scroll-content").slimScroll({
                height: $(".scroll-content").eq(0).height(),
                borderRadius: "0px"
            });
            $(".scroll-content").parents(".slimScrollDiv").height($(".scroll-content").eq(0).height())
        });
    });

    //中间JS


    //中间二段tab切换
    rxued.areaSwitch.Tab($('.j_uiTab9'), 'uiTab9-active', $('.uiTab9Con'), 'click',function(){
        // 二段状态固定高度计算
        TwoCenterHeight(".j_uiTab9",".uiTab9Con");
    });
    var theight = $("body").height() - $("#topnav").height() - $(".j_uiTab9").outerHeight() - 11;
    //中间tab内容区计算
    $("#j-tc-center-content").height(theight).slimScroll({
        height: theight,
        borderRadius: "0px"
    });
    // 二段状态固定高度计算
    TwoCenterHeight(".j_uiTab9",".uiTab9Con");

    $(window).resize(function() {
        var theight = $("body").height() - $("#topnav").height() - $(".j_uiTab9").outerHeight() - 11;
        $("#j-tc-center-content").height(theight).slimScroll({
            height: theight,
            borderRadius: "0px"
        });
        $("#j-tc-center-content").parents(".slimScrollDiv").eq(0).height(theight);
        // 二段状态固定高度计算
        TwoCenterHeight(".j_uiTab9",".uiTab9Con");

    });


    //右侧JS
    var rightHeight = $("body").height() - $("#topnav").outerHeight() - $(".j-tc-righttop-tab").outerHeight() - $(".tc-right-bottom").outerHeight() - 10;
    $(".tc-right-top").height(rightHeight);

    $(".visitbox").css({
        height: rightHeight,
        overflowY: "auto"
    });
    $(".visitbox").scrollTop($("#j-visit")[0].scrollHeight);

    var layerEvalHei=$("body").height() - $("#topnav").outerHeight()-$(".layerRtb-head").outerHeight()-$(".layerRtb-foot").outerHeight()-67;

    //计算评价标签列表高度
    $(".layerRtbEval-scroll").slimScroll({
        height: layerEvalHei,
        borderRadius: "0px"
    });


    $(window).resize(function() {
        var rightHeight = $("body").height() - $("#topnav").outerHeight() - $(".j-tc-righttop-tab").outerHeight() - $(".tc-right-bottom").outerHeight() - 10;
        $(".tc-right-top").height(rightHeight);
        $(".visitbox").css({
            height: rightHeight,
            overflowY: "auto"
        });
        $(".visitbox").scrollTop($("#j-visit")[0].scrollHeight);

    });

    //计算待办弹窗高度
    $(".tc-taskDiv").height(rightHeight - 22);
    $(".tc-taskDiv").width($(".tc-right-top").width() - 102);

    $(".topdaily .topdailybtn").click(function() {

        $(this).parents(".topdaily").find(".topdailybtn").removeClass("active");
        $(this).addClass("active");
        $(".dailyrgt-divZi").hide();
        $(".visi-text-content").show();
      /*  $(".dailyrgt-botradio").show();*/
    });

    $(".dailyrgt-botradio .uiRadio12").click(function() {
        $(".dailyrgt-divZi").hide();
        $(".dailyrgt-botradio").hide();
      /*  $(".visi-text-content").show();*/
    });

    $(".hf-submit").click(function() {
        $(".topdaily").find(".topdailybtn").removeClass("active");
      /*  $(".dailyrgt-divZi").show();*/
        $(".visi-text-content").hide();
        $(".dailyrgt-botradio").hide();
    });

    //点击待办
    $(".needdealt li").click(function() {
        $(".tc-taskDiv").show();
        $(".tc-taskDiv").animate({
            left: '81px',
            opacity: 1
        });
    });

    $(".rig_close").click(function() {
        $(this).parents(".tc-taskDiv").animate({
            left: '-100%',
            opacity: 0
        }, function() {
            $(this).hide();
        });
    });



    //点击三段弹框关闭按钮
    $(".layerRtb .rig_close").click(function() {
        $(this).parents(".layerRtb").animate({
            left: '-102%',
        }, function() {
            $(this).hide();
            $(".anItemBor").removeClass("anItemBor-active");
        });
    });
    //点击四段弹框关闭按钮
    $(".layerRtb-right .rig_close").on('click',function () {
        $(this).parents(".layerRtb-right").stop().animate({
            right: '-102%'
        }, function () {
            $(this).hide();
            $(".layerRtb-right .anItemBor-active").removeClass("anItemBor-active");
        });
    })
    //点击大弹框的关闭按钮
    $(".layerRtb-return").on('click',function () {
        $(this).parents(".layerRtb-big").stop().animate({
            right: '-102%'
        }, function () {
            $(this).hide();
        });
    })

  //显示列表大弹框
    $(".list-btn").on("click",function(){
        $(".layerRtb-big").show();
        $(".layerRtb-big").stop().animate({ "right": "0" });
        LayerBigTableH();
    })
    //隔行划过换色
    rxued.table.LChangeapart($(".centerTable-div tr"), "#eee", "#fff");
    rxued.table.hoverChage($(".centerTable-div tr"), "#d1ecfe");
    //点击升降序
    $(".thSortA").on("click", function () {
        $(this).parents("table").find(".thSortA").not($(this)).removeClass("current");
        $(this).addClass("current");
    })
    //点击周显示时间筛选
    $(".selectWeek-btn").on("click", function () {
        $(".select-timeDiv").show();
    })

    //点击搜索隐藏事件段筛选
    $(".search-btn").on("click", function () {
        $(".select-timeDiv").hide();
    })

    //点击切换添加选中样式
    $(".uiTab3 li").on("click",function(){
        $(this).addClass("uiTab3-active").siblings().removeClass("uiTab3-active");
    })
    //点击列表的时间筛选
    $(".time-selectDiv .p-checked").on("click",function(){
        $(this).addClass("p_checked_Active").siblings().removeClass("p_checked_Active");
        console.log($(this).index())
        if($(this).index()=="0"){
            $(".selectCycle").show();
            $(".startEndTimeDiv").hide();
        }
        else{
            $(".selectCycle").hide();
            $(".startEndTimeDiv").show();
        }
    })

})
// 二段状态固定高度计算
function TwoCenterHeight(tabClass,tabConClass){
    if($(tabConClass).length>0){
        $(".uiTabCenter").each(function () {
            var TwoCenterH = $("body").height() - $("#topnav").height() - $(tabClass).outerHeight(true) - $(this).parents(tabConClass).find(".uiTabTop").outerHeight(true)-$(this).parents(tabConClass).find(".uiTabBottom").outerHeight(true) - 20;
            $(this).height(TwoCenterH).slimScroll({ height: TwoCenterH, borderRadius: "0px"});
            $(this).parent(".slimScrollDiv").eq(0).height(TwoCenterH);
        })
    }
}
/*点击二段显示三段弹框*/
function threeLayerShow(clickClass,alertClass,fn) {
    $(clickClass).each(function () {
        $(this).on("click",function(event){
            //阻止事件冒泡
            if (event.stopPropagation) {
                event.stopPropagation();
            }
            else if (window.event) {
                window.event.cancelBubble = true;
            }
            //其他弹框隐藏
            $(".layerRtb").not(alertClass).stop().animate({
                left:"-102%"
            }, function() {
                $(this).hide();
            });
            //四段弹框隐藏
            $(".layerRtb-right").stop().animate({
                right: '-102%'
            }, function () {
                $(this).hide();
                $(".layerRtb-right .anItemBor-active").removeClass("anItemBor-active");
            });
            //当前弹框显示
            $(alertClass).show();
            $(alertClass).stop().animate({
                left:"0px"
            });
            //计算中间内容区高度
            threeLayerHeight();
            //添加选中样式
            $(".anItemBor-active").removeClass("anItemBor-active");
            $(this).addClass("anItemBor-active");
            if (typeof (fn) == "function") {
                fn()
            }
        })
    })
}
/*点击显示四段弹框*/
function fourLayerShow(clickClass,alertClass,fn) {
    $(clickClass).each(function () {
        $(this).on("click",function(event){
            //阻止事件冒泡
            if (event.stopPropagation) {
                event.stopPropagation();
            }
            else if (window.event) {
                window.event.cancelBubble = true;
            }
            $(this).parents(".analyItem").addClass("anItemBor-active").siblings().removeClass("anItemBor-active");
            $(alertClass).show();
            $(alertClass).stop().animate({ "right": "0" });
            //计算中间内容区高度
            fourLayerHeight();
            //返回函数
            if (typeof (fn) == "function") {
                fn()
            }
        })
    })
}
$(window).resize(function () {
    threeLayerHeight();
    fourLayerHeight();
    LayerBigTableH();
})
//计算三段弹框中间高度
function threeLayerHeight() {
    $(".layerRtb-scroll").each(function () {
        var layerRtbHei=$("body").height()-$("#topnav").outerHeight(true)-$(this).parents(".layerRtb").find(".layerRtb-head").outerHeight(true)-$(this).parents(".layerRtb").find(".layerRtb-footer").outerHeight(true)-10;
        $(this).height(layerRtbHei).slimScroll({
            height: layerRtbHei,
            borderRadius: "0px"
        });
        $(this).parents(".slimScrollDiv").eq(0).height(layerRtbHei);
    })
}
//计算四段弹框中间高度
function fourLayerHeight() {
    $(".layerRtb-right-scroll").each(function () {
        var layerRtbHei2=$("body").height()-$("#topnav").outerHeight(true)-$(this).parents(".layerRtb-right").find(".layerRtb-right-head").outerHeight(true)-$(this).parents(".layerRtb-right").find(".layerRtb-right-footer").outerHeight(true)-10;
        $(this).height(layerRtbHei2).slimScroll({
            height: layerRtbHei2,
            borderRadius: "0px"
        });
        $(this).parents(".slimScrollDiv").eq(0).height(layerRtbHei2);
    })
}
//大弹框列表高度中间计算
function LayerBigTableH() {
    var tableH=$("body").height()-$("#main_header").outerHeight(true)-$(".topTable-div").outerHeight(true)-$(".tab-div").outerHeight(true)-$(".layerRtb-big-head").outerHeight(true)-20;
    $(".centerTable-div").height(tableH).slimScroll({ height: tableH, borderRadius: "0px"});
    $(".centerTable-div").parents(".slimScrollDiv").eq(0).height(tableH);
}
