webpackJsonp(
  [9],
  {
    23: function (n, o, t) {
      "use strict";
      (function (n) {
        t(0), t(7);
        var o = t(2);
        n(function () {
          n(".flexslider").flexslider({
            animation: "slide",
            before: function (n) {
              n.pause(), n.play();
            },
          });
          var t = {
            useEasing: !1,
            useGrouping: !1,
            separator: ",",
            decimal: ".",
          };
          n(window).on("scroll.countup", function (i) {
            n(window).scrollTop() + (n(window).height() - 100) >=
            n(".section-count").offset()&&n(".section-count").offset().top &&
              (n(".count-up").each(function () {
                new o(
                  n(this)[0],
                  n(this).data("start"),
                  n(this).data("ended"),
                  0,
                  4,
                  t
                ).start();
              }),
              n(window).off("scroll.countup"));
          });
        });
      }.call(o, t(1)));
    },
    7: function (n, o) {},
  },
  [23]
);
