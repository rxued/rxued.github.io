//处理部分鼠标移入显示详情
$(".handle-ul li").mouseenter(function () {
    if ($(this).index() == "0") {
        var tip_index = layer.tips('个人业绩良好，不做处理动作，点击正常，在输入框填写备注，提交即可', $(".handle-ul li").eq(0), {
            tips: [1, '#3595CC'],
            time: 100000000
        });
    } else if ($(this).index() == "1") {
        var tip_index = layer.tips('个人当前业绩差，历史业绩差，为部门低产人员，但是可能存在直接淘汰，有些可惜，所以给下一个整改任务 ，截止到什么时间，完成什么样的业绩，如果不能完成就要淘汰了，在右侧需要输入 “业绩指标”，选择倒计时，在输入框填写备注，提交。此条消息会推送到员工APP 。（属于最后通牒）', $(".handle-ul li").eq(1), {
            tips: [1, '#3595CC'],
            time: 100000000
        });
    } else if ($(this).index() == "2") {
        var tip_index = layer.tips('个人当前业绩差，历史业绩差，一直属于负产值人员，此类员工坚决淘汰，绝不姑息。点击淘汰，在输入框提交备注，直接提交 。提交完毕，该信息不同步任何人，行政经理直接告知人事，对员工进行淘汰面谈，办理离职手续 。离职手续办理完毕，人事系统就没有这个人了，但是系统会抓取行政经理“淘汰”的这个管理动作。作为经理绩效', $(".handle-ul li").eq(2), {
            tips: [1, '#3595CC'],
            time: 100000000
        });
    } else if ($(this).index() == "3") {
        var tip_index = layer.tips('相当于之前的事件 ，勾选奖罚金额，输入框输入备注，提交即可 ', $(".handle-ul li").eq(3), {
            tips: [1, '#3595CC'],
            time: 100000000
        });
    } else if ($(this).index() == "4") {
        var tip_index = layer.tips('红包是管理激励，特定的时间，完成特定的任务，有特定的奖励，按时完成，奖金自动进入薪酬收入 ，既定时间未完成，红包自动取消 （管理目的：业绩突破，逼单） ', $(".handle-ul li").eq(4), {
            tips: [1, '#3595CC'],
            time: 100000000
        });
    }
}).mouseleave(function () {
    layer.closeAll('tips');
});
$(function(){
    //中间二段tab切换
    rxued.areaSwitch.Tab($('.j_uiTab9'), 'uiTab10-active', $('.uiTab10Con'), 'click',function(){
        // 二段状态固定高度计算
        TwoCenterHeight(".j_uiTab9",".uiTab10Con");
    });

// 二段状态固定高度计算
    TwoCenterHeight(".j_uiTab9",".uiTab10Con");
    $(window).resize(function() {
        // 二段状态固定高度计算
        TwoCenterHeight(".j_uiTab9",".uiTab10Con")
    });
})

//点击处理显示弹框
threeLayerShow(".handle-clickDiv",".handle-alert");
//点击结果的量房显示弹框
threeLayerShow(".jieGuo-liangFang",".jieGuo-liangFang-alert");
//点击结果的经纪人显示弹框
threeLayerShow(".jieGuo-jingJiRen",".jieGuo-jingJiRen-alert");
//点击结果的项目显示弹框
threeLayerShow(".jieGuo-xiangMu",".jieGuo-xiangMu-alert");
//点击结果的管理显示弹框
threeLayerShow(".jieGuo-guanLi",".jieGuo-guanLi-alert");

/*过程信访*/
threeLayerShow(".guoCheng-xinFang",".guoCheng-xinFang-alert");
/*过程经访*/
threeLayerShow(".guoCheng-jingFang",".guoCheng-jingFang-alert");
/*过程信息员*/
threeLayerShow(".guoCheng-xinXiYuan",".guoCheng-xinXiYuan-alert");
/*过程客户*/
threeLayerShow(".guoCheng-keHu",".guoCheng-keHu-alert");
/*过程其他*/
threeLayerShow(".guoCheng-else",".guoCheng-else-alert");

/*人事入口*/
threeLayerShow(".renShi-ruKou",".renShi-ruKou-alert");
/*人事信息*/
threeLayerShow(".renShi-xinXi",".renShi-xinXi-alert");
/*人事级别*/
threeLayerShow(".renShi-jiBie",".renShi-jiBie-alert");

/*薪酬工资*/
threeLayerShow(".xinChou-gongZi",".xinChou-gongZi-alert");
/*薪酬过程*/
threeLayerShow(".xinChou-guoCheng",".xinChou-guoCheng-alert");
/*薪酬结果*/
threeLayerShow(".xinChou-jieGuo",".xinChou-jieGuo-alert");

