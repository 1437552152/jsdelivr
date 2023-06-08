
webpackJsonp([10], {
	21: function(e, i, n) {
		"use strict";
		(function(e) {
			n(0), n(5);
			var i = n(2);
			e(function() {
				function n(i) {
					var n = i || d.find(".timeline-item.current");
					return {
						length: d.find(".timeline-item").length,
						index: n.index(),
						offset: .5 * e(window).width(),
						width: n.width(),
						scrollLeft: d.scrollLeft()
					}
				}
				var t = e(".timeline-box"),
					d = t.find(".timeline-handle"),
					s = t.find(".timeline-content"),
					r = {
						useEasing: !2,
						useGrouping: !2,
						separator: ",",
						decimal: "."
					};
				e(window).on("scroll.countup", function(n) {
					e(window).scrollTop() + (e(window).height() - 100) >= e(".section-count").offset().top && (e(".count-up").each(function() {
						new i(e(this)[0], e(this).data("start"), e(this).data("ended"), 0, 4, r).start()
					}), e(window).off("scroll.countup"))
				}), d.find(".timeline-item").eq(0).addClass("current"), s.find(".timeline-item").eq(0).addClass("current"), e(document).bind("keydown", ".timeline-box", function(e) {
					var i = e || window.event,
						t = n(),
						r = t.index,
						l = t.offset;
					
					return i && 37 == i.keyCode ? (r = t.index > 0 ? t.index - 1 : t.index, l = t.width * r, s.find(".timeline-item").siblings().removeClass("current").eq(r).addClass("current"), d.find(".timeline-item").siblings().removeClass("current").eq(r).addClass("current"), d.animate({
						scrollLeft: l + "px"
					}, 300), !1) : i && 39 == i.keyCode ? (r = t.index < t.length - 1 ? t.index + 1 : t.index, l = t.width * r, s.find(".timeline-item").siblings().removeClass("current").eq(r).addClass("current"), d.find(".timeline-item").siblings().removeClass("current").eq(r).addClass("current"), d.animate({
						scrollLeft: l + "px"
					}, 300), !1) : void 0
				}), 
				
				d.on("click", ".timeline-item", function(i) {   //click  点击切换
				
				 
					var t = n(e(i.currentTarget)),
						r = t.width * t.index;
					s.find(".timeline-item").siblings().removeClass("current").eq(t.index).addClass("current"), d.find(".timeline-item").siblings().removeClass("current").eq(t.index).addClass("current"), d.animate({
						scrollLeft: r + "px"}, 300)
					
					
				})
				
			})
		}).call(i, n(1))
	},
	5: function(e, i) {}
}, [21]);