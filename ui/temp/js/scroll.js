(function(e) {
    e.fn.extend({
        slimScroll: function(n) {
            var i = e.extend({
                width: "auto",
                height: "250px",
                size: "7px",
                color: "#000",
                position: "right",
                distance: "1px",
                start: "top",
                opacity: .4,
                alwaysVisible: !1,
                disableFadeOut: !1,
                railVisible: !1,
                railColor: "#333",
                railOpacity: .2,
                railDraggable: !0,
                railClass: "slimScrollRail",
                barClass: "slimScrollBar",
                wrapperClass: "slimScrollDiv",
                allowPageScroll: !1,
                wheelStep: 20,
                touchScrollStep: 200,
                borderRadius: "7px",
                railBorderRadius: "7px"
            }, n);
            return this.each(function() {
                function o(t) {
                    if (d) {
                        t = t || window.event;
                        var n = 0;
                        t.wheelDelta && (n = -t.wheelDelta / 120),
                        t.detail && (n = t.detail / 3),
                        e(t.target || t.srcTarget || t.srcElement).closest("." + i.wrapperClass).is(y.parent()) && r(n, !0),
                        t.preventDefault && !v && t.preventDefault(),
                        v || (t.returnValue = !1)
                    }
                }
                function r(e, t, n) {
                    v = !1;
                    var o = e
                      , r = y.outerHeight() - _.outerHeight();
                    t && (o = parseInt(_.css("top")) + e * parseInt(i.wheelStep) / 100 * _.outerHeight(),
                    o = Math.min(Math.max(o, 0), r),
                    o = e > 0 ? Math.ceil(o) : Math.floor(o),
                    _.css({
                        top: o + "px"
                    })),
                    f = parseInt(_.css("top")) / (y.outerHeight() - _.outerHeight()),
                    o = f * (y[0].scrollHeight - y.outerHeight()),
                    n && (o = e,
                    e = o / y[0].scrollHeight * y.outerHeight(),
                    e = Math.min(Math.max(e, 0), r),
                    _.css({
                        top: e + "px"
                    })),
                    y.scrollTop(o),
                    y.trigger("slimscrolling", ~~o),
                    s(),
                    l()
                }
                //	计算slimScrollBar高度
                function a() {
                	
                    m = Math.max(y.outerHeight() / y[0].scrollHeight * y.outerHeight(), 30),
                    _.css({
                        height: m + "px"
                        
                    });
                    var e = m == y.outerHeight() ? "none" : "block";
                    _.css({
                        display: e
                    })
                }
                function s() {
                    a(),
                    clearTimeout(u),
                    f == ~~f ? (v = i.allowPageScroll,
                    g != f && y.trigger("slimscroll", 0 == ~~f ? "top" : "bottom")) : v = !1,
                    g = f,
                    m >= y.outerHeight() ? v = !0 : (_.stop(!0, !0).fadeIn("fast"),
                    i.railVisible && x.stop(!0, !0).fadeIn("fast"))
                }
                function l() {
                    i.alwaysVisible || (u = setTimeout(function() {
                        i.disableFadeOut && d || c || h || (_.fadeOut("slow"),
                        x.fadeOut("slow"))
                        //alert(_.html())
                    }
                    , 1e3))
                }
                var d, c, h, u, p, m, f, g, v = !1, y = e(this);
                //console.log(i.wrapperClass) slimScrollDiv
               // console.log(y) nav-wrapper-content
                if (y.parent().hasClass(i.wrapperClass)) {
                    var b = y.scrollTop()
                      , _ = y.closest("." + i.barClass)
                      , x = y.closest("." + i.railClass);
                    if (a(),
                    e.isPlainObject(n)) {
                    	
                        if ("height" in n && "auto" == n.height) {
                            y.parent().css("height", "auto"),
                            y.css("height", "auto");
                            var E = y.parent().parent().height();
                            y.parent().css("height", E),
                            y.css("height", E)
                        }
                        if ("scrollTo" in n)
                            b = parseInt(i.scrollTo);
                        else if ("scrollBy" in n)
                            b += parseInt(i.scrollBy);
                        else if ("destroy" in n)
                            return _.remove(),
                            x.remove(),
                            void y.unwrap();
                        r(b, !1, !0)
                    }
                } else if (!(e.isPlainObject(n) && "destroy" in n)) {
                	//执行这里
                    i.height = "auto" == i.height ? y.parent().height() : i.height,
                    b = e("<div></div>").addClass(i.wrapperClass).css({//b=slimScrollDiv
                        position: "relative",
                        overflow: "hidden",
                        width: i.width,
                        height: i.height
                    }),
                    y.css({//y=nav-wrapper-content
                        overflow: "hidden",
                        width: i.width,
                        height: i.height
                    });
                    
                   //slimScrollRail
                    var x = e("<div></div>").addClass(i.railClass).css({
                        width: i.size,
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        display: i.alwaysVisible && i.railVisible ? "block" : "none",
                        "border-radius": i.railBorderRadius,
                        background: i.railColor,
                        opacity: i.railOpacity,
                        zIndex: 90
                    })
                      , _ = e("<div></div>").addClass(i.barClass).css({
                        background: i.color,
                        width: i.size,
                        position: "absolute",
                        top: 0,
                        opacity: i.opacity,
                        display: i.alwaysVisible ? "block" : "none",
                        "border-radius": i.borderRadius,
                        BorderRadius: i.borderRadius,
                        MozBorderRadius: i.borderRadius,
                        WebkitBorderRadius: i.borderRadius,
                        zIndex: 99
                    })
                      , E = "right" == i.position ? {
                        right: i.distance
                    } : {
                        left: i.distance
                    };
                    
                    x.css(E),
                    _.css(E),
                    y.wrap(b),
                    y.parent().append(_),
                    y.parent().append(x),
                    i.railDraggable && _.bind("mousedown", function(n) {
                        var i = e(document);
                        return h = !0,
                        t = parseFloat(_.css("top")),
                        pageY = n.pageY,
                        i.bind("mousemove.slimscroll", function(e) {
                            currTop = t + e.pageY - pageY,
                            _.css("top", currTop),
                            r(0, _.position().top, !1)
                        }
                        ),
                        i.bind("mouseup.slimscroll", function(e) {
                            h = !1,
                            l(),
                            i.unbind(".slimscroll")
                        }
                        ),
                        !1
                    }
                    ).bind("selectstart.slimscroll", function(e) {
                        return e.stopPropagation(),
                        e.preventDefault(),
                        !1
                    }
                    ),
                    x.hover(function() {
                        s()
                    }
                    , function() {
                        l()
                    }
                    ),
                    _.hover(function() {
                        c = !0
                    }
                    , function() {
                        c = !1
                    }
                    ),
                    y.hover(function() {
                        d = !0,
                        s(),
                        l()
                    }
                    , function() {
                        d = !1,
                        l()
                    }
                    ),
                    y.bind("touchstart", function(e, t) {
                        e.originalEvent.touches.length && (p = e.originalEvent.touches[0].pageY)
                    }
                    ),
                    y.bind("touchmove", function(e) {
                        v || e.originalEvent.preventDefault(),
                        e.originalEvent.touches.length && (r((p - e.originalEvent.touches[0].pageY) / i.touchScrollStep, !0),
                        p = e.originalEvent.touches[0].pageY)
                    }
                    ),
                    a(),
                    "bottom" === i.start ? (_.css({
                        top: y.outerHeight() - _.outerHeight()
                    }),
                    r(0, !0)) : "top" !== i.start && (r(e(i.start).position().top, null , !0),
                    i.alwaysVisible || _.hide()),
                    window.addEventListener ? (this.addEventListener("DOMMouseScroll", o, !1),
                    this.addEventListener("mousewheel", o, !1)) : document.attachEvent("onmousewheel", o)
                }
            }
            ),
            this
        }
    }),
    e.fn.extend({
        slimscroll: e.fn.slimScroll
    })
})(jQuery);



$(function () {
    $(".nav-wrapper-content").slimScroll({ height: "100%", borderRadius: "6px" });
    
	//$(".nav-wrapper-content").slimScroll({height:"100%",borderRadius:"6px"});
	
})
