!(function (e) {
  function t(n) {
    if (i[n]) return i[n].exports;
    var r = (i[n] = {
      i: n,
      l: !1,
      exports: {},
    });
    return e[n].call(r.exports, r, r.exports, t), (r.l = !0), r.exports;
  }
  var n = window.webpackJsonp;
  window.webpackJsonp = function (i, o, a) {
    for (var s, l, u, c = 0, d = []; c < i.length; c++)
      (l = i[c]), r[l] && d.push(r[l][0]), (r[l] = 0);
    for (s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s]);
    for (n && n(i, o, a); d.length; ) d.shift()();
    if (a) for (c = 0; c < a.length; c++) u = t((t.s = a[c]));
    return u;
  };
  var i = {},
    r = {
      12: 0,
    };
  (t.e = function (e) {
    function n() {
      (s.onerror = s.onload = null), clearTimeout(l);
      var t = r[e];
      0 !== t &&
        (t && t[1](new Error("Loading chunk " + e + " failed.")),
        (r[e] = void 0));
    }
    var i = r[e];
    if (0 === i)
      return new Promise(function (e) {
        e();
      });
    if (i) return i[2];
    var o = new Promise(function (t, n) {
      i = r[e] = [t, n];
    });
    i[2] = o;
    var a = document.getElementsByTagName("head")[0],
      s = document.createElement("script");
    (s.type = "text/javascript"),
      (s.charset = "utf-8"),
      (s.async = !0),
      (s.timeout = 12e4),
      t.nc && s.setAttribute("nonce", t.nc),
      (s.src = t.p + "/assets/js/" + e + ".js");
    var l = setTimeout(n, 12e4);
    return (s.onerror = s.onload = n), a.appendChild(s), o;
  }),
    (t.m = e),
    (t.c = i),
    (t.i = function (e) {
      return e;
    }),
    (t.d = function (e, n, i) {
      t.o(e, n) ||
        Object.defineProperty(e, n, {
          configurable: !1,
          enumerable: !0,
          get: i,
        });
    }),
    (t.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return t.d(n, "a", n), n;
    }),
    (t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (t.p = "/"),
    (t.oe = function (e) {
      throw e;
    });
})([
  function (e, t, n) {
    "use strict";
    (function (e) {
      n(32), n(33), n(37), n(19);
      var t = n(41);
      e(function () {
        new t({
          boxClass: "wow",
          animateClass: "animated",
          offset: 50,
          mobile: !0,
          live: !0,
          callback: function (e) {},
          scrollContainer: null,
        }).init(),
          e(".module-product-preview").on(
            "mouseenter",
            ".preview-color .color",
            function (t) {
              var n = e(t.currentTarget),
                i = n.index() - 1;
              n.addClass("current").siblings().removeClass("current"),
                n
                  .closest(".module-product-preview")
                  .find(".preview-picture img")
                  .removeClass("current")
                  .eq(i)
                  .addClass("current");
            }
          );
      });
    }.call(t, n(1)));
  },
  function (e, t, n) {
    var i, r;
    /*!
     * jQuery JavaScript Library v1.12.4
     * http://jquery.com/
     *
     * Includes Sizzle.js
     * http://sizzlejs.com/
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2016-05-20T17:17Z
     */
    !(function (t, n) {
      "object" == typeof e && "object" == typeof e.exports
        ? (e.exports = t.document
            ? n(t, !0)
            : function (e) {
                if (!e.document)
                  throw new Error("jQuery requires a window with a document");
                return n(e);
              })
        : n(t);
    })("undefined" != typeof window ? window : this, function (n, o) {
      function a(e) {
      }
      function s(e, t, n) {
        if (ve.isFunction(t))
          return ve.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n;
          });
        if (t.nodeType)
          return ve.grep(e, function (e) {
            return (e === t) !== n;
          });
        if ("string" == typeof t) {
          if (ke.test(t)) return ve.filter(t, e, n);
          t = ve.filter(t, e);
        }
        return ve.grep(e, function (e) {
          return ve.inArray(e, t) > -1 !== n;
        });
      }
      function l(e, t) {
        do {
          e = e[t];
        } while (e && 1 !== e.nodeType);
        return e;
      }
      function u(e) {
        var t = {};
        return (
          ve.each(e.match(Me) || [], function (e, n) {
            t[n] = !0;
          }),
          t
        );
      }
      function c() {
        se.addEventListener
          ? (se.removeEventListener("DOMContentLoaded", d),
            n.removeEventListener("load", d))
          : (se.detachEvent("onreadystatechange", d),
            n.detachEvent("onload", d));
      }
      function d() {
        (se.addEventListener ||
          "load" === n.event.type ||
          "complete" === se.readyState) &&
          (c(), ve.ready());
      }
      function f(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
          var i = "data-" + t.replace(Oe, "-$1").toLowerCase();
          if ("string" == typeof (n = e.getAttribute(i))) {
            try {
              n =
                "true" === n ||
                ("false" !== n &&
                  ("null" === n
                    ? null
                    : +n + "" === n
                    ? +n
                    : He.test(n)
                    ? ve.parseJSON(n)
                    : n));
            } catch (e) {}
            ve.data(e, t, n);
          } else n = void 0;
        }
        return n;
      }
      function p(e) {
        var t;
        for (t in e)
          if (("data" !== t || !ve.isEmptyObject(e[t])) && "toJSON" !== t)
            return !1;
        return !0;
      }
      function h(e, t, n, i) {
        if (qe(e)) {
          var r,
            o,
            a = ve.expando,
            s = e.nodeType,
            l = s ? ve.cache : e,
            u = s ? e[a] : e[a] && a;
          if (
            (u && l[u] && (i || l[u].data)) ||
            void 0 !== n ||
            "string" != typeof t
          )
            return (
              u || (u = s ? (e[a] = ae.pop() || ve.guid++) : a),
              l[u] ||
                (l[u] = s
                  ? {}
                  : {
                      toJSON: ve.noop,
                    }),
              ("object" != typeof t && "function" != typeof t) ||
                (i
                  ? (l[u] = ve.extend(l[u], t))
                  : (l[u].data = ve.extend(l[u].data, t))),
              (o = l[u]),
              i || (o.data || (o.data = {}), (o = o.data)),
              void 0 !== n && (o[ve.camelCase(t)] = n),
              "string" == typeof t
                ? null == (r = o[t]) && (r = o[ve.camelCase(t)])
                : (r = o),
              r
            );
        }
      }
      function m(e, t, n) {
        if (qe(e)) {
          var i,
            r,
            o = e.nodeType,
            a = o ? ve.cache : e,
            s = o ? e[ve.expando] : ve.expando;
          if (a[s]) {
            if (t && (i = n ? a[s] : a[s].data)) {
              ve.isArray(t)
                ? (t = t.concat(ve.map(t, ve.camelCase)))
                : t in i
                ? (t = [t])
                : ((t = ve.camelCase(t)), (t = t in i ? [t] : t.split(" "))),
                (r = t.length);
              for (; r--; ) delete i[t[r]];
              if (n ? !p(i) : !ve.isEmptyObject(i)) return;
            }
            (n || (delete a[s].data, p(a[s]))) &&
              (o
                ? ve.cleanData([e], !0)
                : me.deleteExpando || a != a.window
                ? delete a[s]
                : (a[s] = void 0));
          }
        }
      }
      function v(e, t, n, i) {
        var r,
          o = 1,
          a = 20,
          s = i
            ? function () {
                return i.cur();
              }
            : function () {
                return ve.css(e, t, "");
              },
          l = s(),
          u = (n && n[3]) || (ve.cssNumber[t] ? "" : "px"),
          c = (ve.cssNumber[t] || ("px" !== u && +l)) && Ie.exec(ve.css(e, t));
        if (c && c[3] !== u) {
          (u = u || c[3]), (n = n || []), (c = +l || 1);
          do {
            (o = o || ".5"), (c /= o), ve.style(e, t, c + u);
          } while (o !== (o = s() / l) && 1 !== o && --a);
        }
        return (
          n &&
            ((c = +c || +l || 0),
            (r = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
            i && ((i.unit = u), (i.start = c), (i.end = r))),
          r
        );
      }
      function g(e) {
        var t = Xe.split("|"),
          n = e.createDocumentFragment();
        if (n.createElement) for (; t.length; ) n.createElement(t.pop());
        return n;
      }
      function y(e, t) {
        var n,
          i,
          r = 0,
          o =
            void 0 !== e.getElementsByTagName
              ? e.getElementsByTagName(t || "*")
              : void 0 !== e.querySelectorAll
              ? e.querySelectorAll(t || "*")
              : void 0;
        if (!o)
          for (o = [], n = e.childNodes || e; null != (i = n[r]); r++)
            !t || ve.nodeName(i, t) ? o.push(i) : ve.merge(o, y(i, t));
        return void 0 === t || (t && ve.nodeName(e, t)) ? ve.merge([e], o) : o;
      }
      function b(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++)
          ve._data(n, "globalEval", !t || ve._data(t[i], "globalEval"));
      }
      function x(e) {
        ze.test(e.type) && (e.defaultChecked = e.checked);
      }
      function w(e, t, n, i, r) {
        for (
          var o, a, s, l, u, c, d, f = e.length, p = g(t), h = [], m = 0;
          m < f;
          m++
        )
          if ((a = e[m]) || 0 === a)
            if ("object" === ve.type(a)) ve.merge(h, a.nodeType ? [a] : a);
            else if (Ge.test(a)) {
              for (
                l = l || p.appendChild(t.createElement("div")),
                  u = (Be.exec(a) || ["", ""])[1].toLowerCase(),
                  d = Ue[u] || Ue._default,
                  l.innerHTML = d[1] + ve.htmlPrefilter(a) + d[2],
                  o = d[0];
                o--;

              )
                l = l.lastChild;
              if (
                (!me.leadingWhitespace &&
                  $e.test(a) &&
                  h.push(t.createTextNode($e.exec(a)[0])),
                !me.tbody)
              )
                for (
                  a =
                    "table" !== u || Ye.test(a)
                      ? "<table>" !== d[1] || Ye.test(a)
                        ? 0
                        : l
                      : l.firstChild,
                    o = a && a.childNodes.length;
                  o--;

                )
                  ve.nodeName((c = a.childNodes[o]), "tbody") &&
                    !c.childNodes.length &&
                    a.removeChild(c);
              for (
                ve.merge(h, l.childNodes), l.textContent = "";
                l.firstChild;

              )
                l.removeChild(l.firstChild);
              l = p.lastChild;
            } else h.push(t.createTextNode(a));
        for (
          l && p.removeChild(l),
            me.appendChecked || ve.grep(y(h, "input"), x),
            m = 0;
          (a = h[m++]);

        )
          if (i && ve.inArray(a, i) > -1) r && r.push(a);
          else if (
            ((s = ve.contains(a.ownerDocument, a)),
            (l = y(p.appendChild(a), "script")),
            s && b(l),
            n)
          )
            for (o = 0; (a = l[o++]); ) Ve.test(a.type || "") && n.push(a);
        return (l = null), p;
      }
      function T() {
        return !0;
      }
      function C() {
        return !1;
      }
      function S() {
        try {
          return se.activeElement;
        } catch (e) {}
      }
      function N(e, t, n, i, r, o) {
        var a, s;
        if ("object" == typeof t) {
          "string" != typeof n && ((i = i || n), (n = void 0));
          for (s in t) N(e, s, n, i, t[s], o);
          return e;
        }
        if (
          (null == i && null == r
            ? ((r = n), (i = n = void 0))
            : null == r &&
              ("string" == typeof n
                ? ((r = i), (i = void 0))
                : ((r = i), (i = n), (n = void 0))),
          !1 === r)
        )
          r = C;
        else if (!r) return e;
        return (
          1 === o &&
            ((a = r),
            (r = function (e) {
              return ve().off(e), a.apply(this, arguments);
            }),
            (r.guid = a.guid || (a.guid = ve.guid++))),
          e.each(function () {
            ve.event.add(this, t, r, i, n);
          })
        );
      }
      function k(e, t) {
        return ve.nodeName(e, "table") &&
          ve.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr")
          ? e.getElementsByTagName("tbody")[0] ||
              e.appendChild(e.ownerDocument.createElement("tbody"))
          : e;
      }
      function E(e) {
        return (e.type = (null !== ve.find.attr(e, "type")) + "/" + e.type), e;
      }
      function A(e) {
        var t = at.exec(e.type);
        return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
      }
      function M(e, t, n, i) {
        t = ue.apply([], t);
        var r,
          o,
          a,
          s,
          l,
          u,
          c = 0,
          d = e.length,
          f = d - 1,
          p = t[0],
          h = ve.isFunction(p);
        if (
          h ||
          (d > 1 && "string" == typeof p && !me.checkClone && ot.test(p))
        )
          return e.each(function (r) {
            var o = e.eq(r);
            h && (t[0] = p.call(this, r, o.html())), M(o, t, n, i);
          });
        if (
          d &&
          ((u = w(t, e[0].ownerDocument, !1, e, i)),
          (r = u.firstChild),
          1 === u.childNodes.length && (u = r),
          r || i)
        ) {
          for (s = ve.map(y(u, "script"), E), a = s.length; c < d; c++)
            (o = u),
              c !== f &&
                ((o = ve.clone(o, !0, !0)), a && ve.merge(s, y(o, "script"))),
              n.call(e[c], o, c);
          if (a)
            for (
              l = s[s.length - 1].ownerDocument, ve.map(s, A), c = 0;
              c < a;
              c++
            )
              (o = s[c]),
                Ve.test(o.type || "") &&
                  !ve._data(o, "globalEval") &&
                  ve.contains(l, o) &&
                  (o.src
                    ? ve._evalUrl && ve._evalUrl(o.src)
                    : ve.globalEval(
                        (o.text || o.textContent || o.innerHTML || "").replace(
                          st,
                          ""
                        )
                      ));
          u = r = null;
        }
        return e;
      }
      function P(e, t, n) {
        for (var i, r = t ? ve.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
          n || 1 !== i.nodeType || ve.cleanData(y(i)),
            i.parentNode &&
              (n && ve.contains(i.ownerDocument, i) && b(y(i, "script")),
              i.parentNode.removeChild(i));
        return e;
      }
      function j(e, t) {
        var n = ve(t.createElement(e)).appendTo(t.body),
          i = ve.css(n[0], "display");
        return n.detach(), i;
      }
      function q(e) {
        var t = se,
          n = dt[e];
        return (
          n ||
            ((n = j(e, t)),
            ("none" !== n && n) ||
              ((ct = (
                ct || ve("<iframe frameborder='0' width='0' height='0'/>")
              ).appendTo(t.documentElement)),
              (t = (ct[0].contentWindow || ct[0].contentDocument).document),
              t.write(),
              t.close(),
              (n = j(e, t)),
              ct.detach()),
            (dt[e] = n)),
          n
        );
      }
      function H(e, t) {
        return {
          get: function () {
            return e()
              ? void delete this.get
              : (this.get = t).apply(this, arguments);
          },
        };
      }
      function O(e) {
        if (e in kt) return e;
        for (
          var t = e.charAt(0).toUpperCase() + e.slice(1), n = Nt.length;
          n--;

        )
          if ((e = Nt[n] + t) in kt) return e;
      }
      function F(e, t) {
        for (var n, i, r, o = [], a = 0, s = e.length; a < s; a++)
          (i = e[a]),
            i.style &&
              ((o[a] = ve._data(i, "olddisplay")),
              (n = i.style.display),
              t
                ? (o[a] || "none" !== n || (i.style.display = ""),
                  "" === i.style.display &&
                    We(i) &&
                    (o[a] = ve._data(i, "olddisplay", q(i.nodeName))))
                : ((r = We(i)),
                  ((n && "none" !== n) || !r) &&
                    ve._data(i, "olddisplay", r ? n : ve.css(i, "display"))));
        for (a = 0; a < s; a++)
          (i = e[a]),
            i.style &&
              ((t && "none" !== i.style.display && "" !== i.style.display) ||
                (i.style.display = t ? o[a] || "" : "none"));
        return e;
      }
      function I(e, t, n) {
        var i = Tt.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t;
      }
      function _(e, t, n, i, r) {
        for (
          var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
            a = 0;
          o < 4;
          o += 2
        )
          "margin" === n && (a += ve.css(e, n + _e[o], !0, r)),
            i
              ? ("content" === n && (a -= ve.css(e, "padding" + _e[o], !0, r)),
                "margin" !== n &&
                  (a -= ve.css(e, "border" + _e[o] + "Width", !0, r)))
              : ((a += ve.css(e, "padding" + _e[o], !0, r)),
                "padding" !== n &&
                  (a += ve.css(e, "border" + _e[o] + "Width", !0, r)));
        return a;
      }
      function W(e, t, n) {
        var i = !0,
          r = "width" === t ? e.offsetWidth : e.offsetHeight,
          o = vt(e),
          a = me.boxSizing && "border-box" === ve.css(e, "boxSizing", !1, o);
        if (r <= 0 || null == r) {
          if (
            ((r = gt(e, t, o)),
            (r < 0 || null == r) && (r = e.style[t]),
            pt.test(r))
          )
            return r;
          (i = a && (me.boxSizingReliable() || r === e.style[t])),
            (r = parseFloat(r) || 0);
        }
        return r + _(e, t, n || (a ? "border" : "content"), i, o) + "px";
      }
      function R(e, t, n, i, r) {
        return new R.prototype.init(e, t, n, i, r);
      }
      function z() {
        return (
          n.setTimeout(function () {
            Et = void 0;
          }),
          (Et = ve.now())
        );
      }
      function B(e, t) {
        var n,
          i = {
            height: e,
          },
          r = 0;
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
          (n = _e[r]), (i["margin" + n] = i["padding" + n] = e);
        return t && (i.opacity = i.width = e), i;
      }
      function V(e, t, n) {
        for (
          var i,
            r = (U.tweeners[t] || []).concat(U.tweeners["*"]),
            o = 0,
            a = r.length;
          o < a;
          o++
        )
          if ((i = r[o].call(n, t, e))) return i;
      }
      function $(e, t, n) {
        var i,
          r,
          o,
          a,
          s,
          l,
          u,
          c = this,
          d = {},
          f = e.style,
          p = e.nodeType && We(e),
          h = ve._data(e, "fxshow");
        n.queue ||
          ((s = ve._queueHooks(e, "fx")),
          null == s.unqueued &&
            ((s.unqueued = 0),
            (l = s.empty.fire),
            (s.empty.fire = function () {
              s.unqueued || l();
            })),
          s.unqueued++,
          c.always(function () {
            c.always(function () {
              s.unqueued--, ve.queue(e, "fx").length || s.empty.fire();
            });
          })),
          1 === e.nodeType &&
            ("height" in t || "width" in t) &&
            ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
            (u = ve.css(e, "display")),
            "inline" ===
              ("none" === u ? ve._data(e, "olddisplay") || q(e.nodeName) : u) &&
              "none" === ve.css(e, "float") &&
              (me.inlineBlockNeedsLayout && "inline" !== q(e.nodeName)
                ? (f.zoom = 1)
                : (f.display = "inline-block"))),
          n.overflow &&
            ((f.overflow = "hidden"),
            me.shrinkWrapBlocks() ||
              c.always(function () {
                (f.overflow = n.overflow[0]),
                  (f.overflowX = n.overflow[1]),
                  (f.overflowY = n.overflow[2]);
              }));
        for (i in t)
          if (((r = t[i]), Dt.exec(r))) {
            if (
              (delete t[i],
              (o = o || "toggle" === r),
              r === (p ? "hide" : "show"))
            ) {
              if ("show" !== r || !h || void 0 === h[i]) continue;
              p = !0;
            }
            d[i] = (h && h[i]) || ve.style(e, i);
          } else u = void 0;
        if (ve.isEmptyObject(d))
          "inline" === ("none" === u ? q(e.nodeName) : u) && (f.display = u);
        else {
          h ? "hidden" in h && (p = h.hidden) : (h = ve._data(e, "fxshow", {})),
            o && (h.hidden = !p),
            p
              ? ve(e).show()
              : c.done(function () {
                  ve(e).hide();
                }),
            c.done(function () {
              var t;
              ve._removeData(e, "fxshow");
              for (t in d) ve.style(e, t, d[t]);
            });
          for (i in d)
            (a = V(p ? h[i] : 0, i, c)),
              i in h ||
                ((h[i] = a.start),
                p &&
                  ((a.end = a.start),
                  (a.start = "width" === i || "height" === i ? 1 : 0)));
        }
      }
      function X(e, t) {
        var n, i, r, o, a;
        for (n in e)
          if (
            ((i = ve.camelCase(n)),
            (r = t[i]),
            (o = e[n]),
            ve.isArray(o) && ((r = o[1]), (o = e[n] = o[0])),
            n !== i && ((e[i] = o), delete e[n]),
            (a = ve.cssHooks[i]) && "expand" in a)
          ) {
            (o = a.expand(o)), delete e[i];
            for (n in o) n in e || ((e[n] = o[n]), (t[n] = r));
          } else t[i] = r;
      }
      function U(e, t, n) {
        var i,
          r,
          o = 0,
          a = U.prefilters.length,
          s = ve.Deferred().always(function () {
            delete l.elem;
          }),
          l = function () {
            if (r) return !1;
            for (
              var t = Et || z(),
                n = Math.max(0, u.startTime + u.duration - t),
                i = n / u.duration || 0,
                o = 1 - i,
                a = 0,
                l = u.tweens.length;
              a < l;
              a++
            )
              u.tweens[a].run(o);
            return (
              s.notifyWith(e, [u, o, n]),
              o < 1 && l ? n : (s.resolveWith(e, [u]), !1)
            );
          },
          u = s.promise({
            elem: e,
            props: ve.extend({}, t),
            opts: ve.extend(
              !0,
              {
                specialEasing: {},
                easing: ve.easing._default,
              },
              n
            ),
            originalProperties: t,
            originalOptions: n,
            startTime: Et || z(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
              var i = ve.Tween(
                e,
                u.opts,
                t,
                n,
                u.opts.specialEasing[t] || u.opts.easing
              );
              return u.tweens.push(i), i;
            },
            stop: function (t) {

            },
          }),
          c = u.props;
        for (X(c, u.opts.specialEasing); o < a; o++)
          if ((i = U.prefilters[o].call(u, e, c, u.opts)))
            return (
              ve.isFunction(i.stop) &&
                (ve._queueHooks(u.elem, u.opts.queue).stop = ve.proxy(
                  i.stop,
                  i
                )),
              i
            );
        return (
          ve.map(c, V, u),
          ve.isFunction(u.opts.start) && u.opts.start.call(e, u),
          ve.fx.timer(
            ve.extend(l, {
              elem: e,
              anim: u,
              queue: u.opts.queue,
            })
          ),
          u
            .progress(u.opts.progress)
            .done(u.opts.done, u.opts.complete)
            .fail(u.opts.fail)
            .always(u.opts.always)
        );
      }
      function G(e) {
        return ve.attr(e, "class") || "";
      }
      function Y(e) {
        return function (t, n) {
          "string" != typeof t && ((n = t), (t = "*"));
          var i,
            r = 0,
            o = t.toLowerCase().match(Me) || [];
          if (ve.isFunction(n))
            for (; (i = o[r++]); )
              "+" === i.charAt(0)
                ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
                : (e[i] = e[i] || []).push(n);
        };
      }
      function J(e, t, n, i) {

      }
      function K(e, t) {
        var n,
          i,
          r = ve.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
        return n && ve.extend(!0, e, n), e;
      }
      function Q(e, t, n) {

      }
      function Z(e, t, n, i) {

      }

      function te(e) {

      }
      function ne(e, t, n, i) {

      }
      function ie() {

      }
      function re() {

      }
      function oe(e) {
        return ve.isWindow(e)
          ? e
          : 9 === e.nodeType && (e.defaultView || e.parentWindow);
      }
      var ae = [],
        se = n.document,
        le = ae.slice,
        ue = ae.concat,
        ce = ae.push,
        de = ae.indexOf,
        fe = {},
        pe = fe.toString,
        he = fe.hasOwnProperty,
        me = {},
        ve = function (e, t) {
          return new ve.fn.init(e, t);
        },
        ge = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ye = /^-ms-/,
        be = /-([\da-z])/gi,
        xe = function (e, t) {
          return t.toUpperCase();
        };
      (ve.fn = ve.prototype =
        {
          jquery: "1.12.4",
          constructor: ve,
          selector: "",
          length: 0,
          toArray: function () {
            return le.call(this);
          },
          get: function (e) {
            return null != e
              ? e < 0
                ? this[e + this.length]
                : this[e]
              : le.call(this);
          },
          pushStack: function (e) {
            var t = ve.merge(this.constructor(), e);
            return (t.prevObject = this), (t.context = this.context), t;
          },
          each: function (e) {
            return ve.each(this, e);
          },
          map: function (e) {
            return this.pushStack(
              ve.map(this, function (t, n) {
                return e.call(t, n, t);
              })
            );
          },
          slice: function () {
            return this.pushStack(le.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          eq: function (e) {
            var t = this.length,
              n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: ce,
          sort: ae.sort,
          splice: ae.splice,
        }),
        (ve.extend = ve.fn.extend =
          function () {
            var e,
              t,
              n,
              i,
              r,
              o,
              a = arguments[0] || {},
              s = 1,
              l = arguments.length,
              u = !1;
            for (
              "boolean" == typeof a && ((u = a), (a = arguments[s] || {}), s++),
                "object" == typeof a || ve.isFunction(a) || (a = {}),
                s === l && ((a = this), s--);
              s < l;
              s++
            )
              if (null != (r = arguments[s]))
                for (i in r)
                  (e = a[i]),
                    (n = r[i]),
                    a !== n &&
                      (u && n && (ve.isPlainObject(n) || (t = ve.isArray(n)))
                        ? (t
                            ? ((t = !1), (o = e && ve.isArray(e) ? e : []))
                            : (o = e && ve.isPlainObject(e) ? e : {}),
                          (a[i] = ve.extend(u, o, n)))
                        : void 0 !== n && (a[i] = n));
            return a;
          }),
        ve.extend({
          expando: "jQuery" + ("1.12.4" + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (e) {
            throw new Error(e);
          },
          noop: function () {},
          isFunction: function (e) {
            return "function" === ve.type(e);
          },
          isArray:
            Array.isArray ||
            function (e) {
              return "array" === ve.type(e);
            },
          isWindow: function (e) {
            return null != e && e == e.window;
          },
          isNumeric: function (e) {
            var t = e && e.toString();
            return !ve.isArray(e) && t - parseFloat(t) + 1 >= 0;
          },
          isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0;
          },
          isPlainObject: function (e) {
            var t;
            if (!e || "object" !== ve.type(e) || e.nodeType || ve.isWindow(e))
              return !1;
            try {
              if (
                e.constructor &&
                !he.call(e, "constructor") &&
                !he.call(e.constructor.prototype, "isPrototypeOf")
              )
                return !1;
            } catch (e) {
              return !1;
            }
            if (!me.ownFirst) for (t in e) return he.call(e, t);
            for (t in e);
            return void 0 === t || he.call(e, t);
          },
          type: function (e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? fe[pe.call(e)] || "object"
              : typeof e;
          },
          globalEval: function (e) {
            e &&
              ve.trim(e) &&
              (
                n.execScript ||
                function (e) {
                  n.eval.call(n, e);
                }
              )(e);
          },
          camelCase: function (e) {
            return e.replace(ye, "ms-").replace(be, xe);
          },
          nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          },
          each: function (e, t) {
            var n,
              i = 0;
            if (a(e))
              for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
            return e;
          },
          trim: function (e) {
            return null == e ? "" : (e + "").replace(ge, "");
          },
          makeArray: function (e, t) {
            var n = t || [];
            return (
              null != e &&
                (a(Object(e))
                  ? ve.merge(n, "string" == typeof e ? [e] : e)
                  : ce.call(n, e)),
              n
            );
          },
          inArray: function (e, t, n) {
            var i;
            if (t) {
              if (de) return de.call(t, e, n);
              for (
                i = t.length, n = n ? (n < 0 ? Math.max(0, i + n) : n) : 0;
                n < i;
                n++
              )
                if (n in t && t[n] === e) return n;
            }
            return -1;
          },
          merge: function (e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; )
              e[r++] = t[i++];
            if (n !== n) for (; void 0 !== t[i]; ) e[r++] = t[i++];
            return (e.length = r), e;
          },
          grep: function (e, t, n) {
            for (var i = [], r = 0, o = e.length, a = !n; r < o; r++)
              !t(e[r], r) !== a && i.push(e[r]);
            return i;
          },
          map: function (e, t, n) {
            var i,
              r,
              o = 0,
              s = [];
            if (a(e))
              for (i = e.length; o < i; o++)
                null != (r = t(e[o], o, n)) && s.push(r);
            else for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
            return ue.apply([], s);
          },
          guid: 1,
          proxy: function (e, t) {

          },
          now: function () {
            return +new Date();
          },
          support: me,
        }),
        "function" == typeof Symbol &&
          (ve.fn[Symbol.iterator] = ae[Symbol.iterator]),
        ve.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (e, t) {
            fe["[object " + t + "]"] = t.toLowerCase();
          }
        );
      var we =
        /*!
         * Sizzle CSS Selector Engine v2.2.1
         * http://sizzlejs.com/
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2015-10-17
         */

        (function (e) {
          function t(e, t, n, i) {
            var r,
              o,
              a,
              s,
              u,
              d,
              f,
              p,
              h = t && t.ownerDocument,
              m = t ? t.nodeType : 9;
            if (
              ((n = n || []),
              "string" != typeof e || !e || (1 !== m && 9 !== m && 11 !== m))
            )
              return n;
            if (
              !i &&
              ((t ? t.ownerDocument || t : I) !== L && D(t), (t = t || L), P)
            ) {
              if (11 !== m && (d = me.exec(e)))
                if ((r = d[1])) {
                  if (9 === m) {
                    if (!(a = t.getElementById(r))) return n;
                    if (a.id === r) return n.push(a), n;
                  } else if (
                    h &&
                    (a = h.getElementById(r)) &&
                    O(t, a) &&
                    a.id === r
                  )
                    return n.push(a), n;
                } else {
                  if (d[2]) return J.apply(n, t.getElementsByTagName(e)), n;
                  if (
                    (r = d[3]) &&
                    b.getElementsByClassName &&
                    t.getElementsByClassName
                  )
                    return J.apply(n, t.getElementsByClassName(r)), n;
                }
              if (b.qsa && !B[e + " "] && (!j || !j.test(e))) {
                if (1 !== m) (h = t), (p = e);
                else if ("object" !== t.nodeName.toLowerCase()) {
                  for (
                    (s = t.getAttribute("id"))
                      ? (s = s.replace(ge, "\\$&"))
                      : t.setAttribute("id", (s = F)),
                      f = C(e),
                      o = f.length,
                      u = ce.test(s) ? "#" + s : "[id='" + s + "']";
                    o--;

                  )
                    f[o] = u + " " + c(f[o]);
                  (p = f.join(",")), (h = (ve.test(e) && l(t.parentNode)) || t);
                }
                if (p)
                  try {
                    return J.apply(n, h.querySelectorAll(p)), n;
                  } catch (e) {
                  } finally {
                    s === F && t.removeAttribute("id");
                  }
              }
            }
            return N(e.replace(oe, "$1"), t, n, i);
          }
          function n() {
            function e(n, i) {
              return (
                t.push(n + " ") > x.cacheLength && delete e[t.shift()],
                (e[n + " "] = i)
              );
            }
            var t = [];
            return e;
          }
          function i(e) {
            return (e[F] = !0), e;
          }
          function r(e) {
            var t = L.createElement("div");
            try {
              return !!e(t);
            } catch (e) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
          }
          function o(e, t) {
            for (var n = e.split("|"), i = n.length; i--; )
              x.attrHandle[n[i]] = t;
          }
          function a(e, t) {

          }
          function s(e) {

          }
          function l(e) {
            return e && void 0 !== e.getElementsByTagName && e;
          }
          function u() {}
          function c(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i;
          }
          function d(e, t, n) {
            var i = t.dir,
              r = n && "parentNode" === i,
              o = W++;
            return t.first
              ? function (t, n, o) {
                  for (; (t = t[i]); )
                    if (1 === t.nodeType || r) return e(t, n, o);
                }
              : function (t, n, a) {
                  var s,
                    l,
                    u,
                    c = [_, o];
                  if (a) {
                    for (; (t = t[i]); )
                      if ((1 === t.nodeType || r) && e(t, n, a)) return !0;
                  } else
                    for (; (t = t[i]); )
                      if (1 === t.nodeType || r) {
                        if (
                          ((u = t[F] || (t[F] = {})),
                          (l = u[t.uniqueID] || (u[t.uniqueID] = {})),
                          (s = l[i]) && s[0] === _ && s[1] === o)
                        )
                          return (c[2] = s[2]);
                        if (((l[i] = c), (c[2] = e(t, n, a)))) return !0;
                      }
                };
          }
          function f(e) {
            return e.length > 1
              ? function (t, n, i) {
                  for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
                  return !0;
                }
              : e[0];
          }
          function p(e, n, i) {

          }
          function h(e, t, n, i, r) {

          }
          function m(e, t, n, r, o, a) {

          }
          function v(e) {
            for (
              var t,
                n,
                i,
                r = e.length,
                o = x.relative[e[0].type],
                a = o || x.relative[" "],
                s = o ? 1 : 0,
                l = d(
                  function (e) {
                    return e === t;
                  },
                  a,
                  !0
                ),
                u = d(
                  function (e) {
                    return Q(t, e) > -1;
                  },
                  a,
                  !0
                ),
                p = [
                  function (e, n, i) {
                    var r =
                      (!o && (i || n !== k)) ||
                      ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                    return (t = null), r;
                  },
                ];
              s < r;
              s++
            )
              if ((n = x.relative[e[s].type])) p = [d(f(p), n)];
              else {
                if (
                  ((n = x.filter[e[s].type].apply(null, e[s].matches)), n[F])
                ) {

                }
                p.push(n);
              }
            return f(p);
          }
          function g(e, n) {
            var r = n.length > 0,
              o = e.length > 0,
              a = function (i, a, s, l, u) {
                var c,
                  d,
                  f,
                  p = 0,
                  m = "0",
                  v = i && [],
                  g = [],
                  y = k,
                  b = i || (o && x.find.TAG("*", u)),
                  w = (_ += null == y ? 1 : Math.random() || 0.1),
                  T = b.length;
                for (
                  u && (k = a === L || a || u);
                  m !== T && null != (c = b[m]);
                  m++
                ) {
                  if (o && c) {
                    for (
                      d = 0, a || c.ownerDocument === L || (D(c), (s = !P));
                      (f = e[d++]);

                    )
                      if (f(c, a || L, s)) {
                        l.push(c);
                        break;
                      }
                    u && (_ = w);
                  }
                  r && ((c = !f && c) && p--, i && v.push(c));
                }
                if (((p += m), r && m !== p)) {

                }
                return u && ((_ = w), (k = y)), v;
              };
            return r ? i(a) : a;
          }
          var y,
            b,
            x,
            w,
            T,
            C,
            S,
            N,
            k,
            E,
            A,
            D,
            L,
            M,
            P,
            j,
            q,
            H,
            O,
            F = "sizzle" + 1 * new Date(),
            I = e.document,
            _ = 0,
            W = 0,
            R = n(),
            z = n(),
            B = n(),
            V = function (e, t) {
              return e === t && (A = !0), 0;
            },
            $ = 1 << 31,
            X = {}.hasOwnProperty,
            U = [],
            G = U.pop,
            Y = U.push,
            J = U.push,
            K = U.slice,
            Q = function (e, t) {

            },
            Z =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ee = "[\\x20\\t\\r\\n\\f]",
            te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ne =
              "\\[" +
              ee +
              "*(" +
              te +
              ")(?:" +
              ee +
              "*([*^$|!~]?=)" +
              ee +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              te +
              "))|)" +
              ee +
              "*\\]",
            ie =
              ":(" +
              te +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              ne +
              ")*)|.*)\\)|)",
            re = new RegExp(ee + "+", "g"),
            oe = new RegExp(
              "^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$",
              "g"
            ),
            ae = new RegExp("^" + ee + "*," + ee + "*"),
            se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
            le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
            ue = new RegExp(ie),
            ce = new RegExp("^" + te + "$"),
            de = {
              ID: new RegExp("^#(" + te + ")"),
              CLASS: new RegExp("^\\.(" + te + ")"),
              TAG: new RegExp("^(" + te + "|[*])"),
              ATTR: new RegExp("^" + ne),
              PSEUDO: new RegExp("^" + ie),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  ee +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  ee +
                  "*(?:([+-]|)" +
                  ee +
                  "*(\\d+)|))" +
                  ee +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + Z + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                  ee +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  ee +
                  "*((?:-\\d)?\\d*)" +
                  ee +
                  "*\\)|)(?=[^-]|$)",
                "i"
              ),
            },
            fe = /^(?:input|select|textarea|button)$/i,
            pe = /^h\d$/i,
            he = /^[^{]+\{\s*\[native \w/,
            me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ve = /[+~]/,
            ge = /'|\\/g,
            ye = new RegExp(
              "\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)",
              "ig"
            ),
            be = function (e, t, n) {

            },
            xe = function () {
              D();
            };
          try {
            J.apply((U = K.call(I.childNodes)), I.childNodes),
              U[I.childNodes.length].nodeType;
          } catch (e) {

          }
          (b = t.support = {}),
            (T = t.isXML =
              function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName;
              }),
            (D = t.setDocument =
              function (e) {
                var t,
                  n,
                  i = e ? e.ownerDocument || e : I;
                return i !== L && 9 === i.nodeType && i.documentElement
                  ? ((L = i),
                    (M = L.documentElement),
                    (P = !T(L)),
                    (n = L.defaultView) &&
                      n.top !== n &&
                      (n.addEventListener
                        ? n.addEventListener("unload", xe, !1)
                        : n.attachEvent && n.attachEvent("onunload", xe)),
                    (b.attributes = r(function (e) {
                      return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (b.getElementsByTagName = r(function (e) {
                      return (
                        e.appendChild(L.createComment("")),
                        !e.getElementsByTagName("*").length
                      );
                    })),
                    (b.getElementsByClassName = he.test(
                      L.getElementsByClassName
                    )),
                    (b.getById = r(function (e) {
                      return (
                        (M.appendChild(e).id = F),
                        !L.getElementsByName || !L.getElementsByName(F).length
                      );
                    })),
                    b.getById
                      ? ((x.find.ID = function (e, t) {

                        }),
                        (x.filter.ID = function (e) {

                        }))
                      : (delete x.find.ID,
                        (x.filter.ID = function (e) {

                        })),
                    (x.find.TAG = b.getElementsByTagName
                      ? function (e, t) {

                        }
                      : function (e, t) {

                        }),
                    (x.find.CLASS =
                      b.getElementsByClassName &&
                      function (e, t) {
                        if (void 0 !== t.getElementsByClassName && P)
                          return t.getElementsByClassName(e);
                      }),
                    (q = []),
                    (j = []),
                    (b.qsa = he.test(L.querySelectorAll)) &&
                      (r(function (e) {
                        (M.appendChild(e).innerHTML =
                          "<a id='" +
                          F +
                          "'></a><select id='" +
                          F +
                          "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                          e.querySelectorAll("[msallowcapture^='']").length &&
                            j.push("[*^$]=" + ee + "*(?:''|\"\")"),
                          e.querySelectorAll("[selected]").length ||
                            j.push("\\[" + ee + "*(?:value|" + Z + ")"),
                          e.querySelectorAll("[id~=" + F + "-]").length ||
                            j.push("~="),
                          e.querySelectorAll(":checked").length ||
                            j.push(":checked"),
                          e.querySelectorAll("a#" + F + "+*").length ||
                            j.push(".#.+[+~]");
                      }),
                      r(function (e) {
                        var t = L.createElement("input");
                        t.setAttribute("type", "hidden"),
                          e.appendChild(t).setAttribute("name", "D"),
                          e.querySelectorAll("[name=d]").length &&
                            j.push("name" + ee + "*[*^$|!~]?="),
                          e.querySelectorAll(":enabled").length ||
                            j.push(":enabled", ":disabled"),
                          e.querySelectorAll("*,:x"),
                          j.push(",.*:");
                      })),
                    (b.matchesSelector = he.test(
                      (H =
                        M.matches ||
                        M.webkitMatchesSelector ||
                        M.mozMatchesSelector ||
                        M.oMatchesSelector ||
                        M.msMatchesSelector)
                    )) &&
                      r(function (e) {
                        (b.disconnectedMatch = H.call(e, "div")),
                          H.call(e, "[s!='']:x"),
                          q.push("!=", ie);
                      }),
                    (j = j.length && new RegExp(j.join("|"))),
                    (q = q.length && new RegExp(q.join("|"))),
                    (t = he.test(M.compareDocumentPosition)),
                    (O =
                      t || he.test(M.contains)
                        ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                              i = t && t.parentNode;
                            return (
                              e === i ||
                              !(
                                !i ||
                                1 !== i.nodeType ||
                                !(n.contains
                                  ? n.contains(i)
                                  : e.compareDocumentPosition &&
                                    16 & e.compareDocumentPosition(i))
                              )
                            );
                          }
                        : function (e, t) {
                            if (t)
                              for (; (t = t.parentNode); )
                                if (t === e) return !0;
                            return !1;
                          }),
                    (V = t
                      ? function (e, t) {

                        }
                      : function (e, t) {
                          if (e === t) return (A = !0), 0;
                          var n,
                            i = 0,
                            r = e.parentNode,
                            o = t.parentNode,
                            s = [e],
                            l = [t];
                          if (!r || !o)
                            return e === L
                              ? -1
                              : t === L
                              ? 1
                              : r
                              ? -1
                              : o
                              ? 1
                              : E
                              ? Q(E, e) - Q(E, t)
                              : 0;
                          if (r === o) return a(e, t);
                          for (n = e; (n = n.parentNode); ) s.unshift(n);
                          for (n = t; (n = n.parentNode); ) l.unshift(n);
                          for (; s[i] === l[i]; ) i++;
                          return i
                            ? a(s[i], l[i])
                            : s[i] === I
                            ? -1
                            : l[i] === I
                            ? 1
                            : 0;
                        }),
                    L)
                  : L;
              }),
            (t.matches = function (e, n) {
              return t(e, null, null, n);
            }),
            (t.matchesSelector = function (e, n) {
            }),
            (t.contains = function (e, t) {
              return (e.ownerDocument || e) !== L && D(e), O(e, t);
            }),
            (t.attr = function (e, t) {
              (e.ownerDocument || e) !== L && D(e);
              var n = x.attrHandle[t.toLowerCase()],
                i =
                  n && X.call(x.attrHandle, t.toLowerCase())
                    ? n(e, t, !P)
                    : void 0;
              return void 0 !== i
                ? i
                : b.attributes || !P
                ? e.getAttribute(t)
                : (i = e.getAttributeNode(t)) && i.specified
                ? i.value
                : null;
            }),
            (t.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (t.uniqueSort = function (e) {
            }),
            (w = t.getText =
              function (e) {

              }),
            (x = t.selectors =
              {
                cacheLength: 50,
                createPseudo: i,
                match: de,
                attrHandle: {},
                find: {},
                relative: {
                  ">": {
                    dir: "parentNode",
                    first: !0,
                  },
                  " ": {
                    dir: "parentNode",
                  },
                  "+": {
                    dir: "previousSibling",
                    first: !0,
                  },
                  "~": {
                    dir: "previousSibling",
                  },
                },
                preFilter: {
                  ATTR: function (e) {
                    return (
                      (e[1] = e[1].replace(ye, be)),
                      (e[3] = (e[3] || e[4] || e[5] || "").replace(ye, be)),
                      "~=" === e[2] && (e[3] = " " + e[3] + " "),
                      e.slice(0, 4)
                    );
                  },
                  CHILD: function (e) {

                  },
                  PSEUDO: function (e) {

                  },
                },
                filter: {
                  TAG: function (e) {

                  },
                  CLASS: function (e) {
                    var t = R[e + " "];
                    return (
                      t ||
                      ((t = new RegExp(
                        "(^|" + ee + ")" + e + "(" + ee + "|$)"
                      )) &&
                        R(e, function (e) {
                          return t.test(
                            ("string" == typeof e.className && e.className) ||
                              (void 0 !== e.getAttribute &&
                                e.getAttribute("class")) ||
                              ""
                          );
                        }))
                    );
                  },
                  ATTR: function (e, n, i) {
                    return function (r) {
                      var o = t.attr(r, e);
                      return null == o
                        ? "!=" === n
                        : !n ||
                            ((o += ""),
                            "=" === n
                              ? o === i
                              : "!=" === n
                              ? o !== i
                              : "^=" === n
                              ? i && 0 === o.indexOf(i)
                              : "*=" === n
                              ? i && o.indexOf(i) > -1
                              : "$=" === n
                              ? i && o.slice(-i.length) === i
                              : "~=" === n
                              ? (" " + o.replace(re, " ") + " ").indexOf(i) > -1
                              : "|=" === n &&
                                (o === i ||
                                  o.slice(0, i.length + 1) === i + "-"));
                    };
                  },
                  CHILD: function (e, t, n, i, r) {

                  },
                  PSEUDO: function (e, n) {

                  },
                },
                pseudos: {
                  not: i(function (e) {

                  }),
                  has: i(function (e) {
                    return function (n) {
                      return t(e, n).length > 0;
                    };
                  }),
                  contains: i(function (e) {

                  }),
                  lang: i(function (e) {

                  }),
                  target: function (t) {
                  },
                  root: function (e) {
                    return e === M;
                  },
                  focus: function (e) {

                  },
                  enabled: function (e) {
                  },
                  disabled: function (e) {
                  },
                  checked: function (e) {

                  },
                  selected: function (e) {

                  },
                  empty: function (e) {
                  },
                  parent: function (e) {
                    return !x.pseudos.empty(e);
                  },
                  header: function (e) {
                    return pe.test(e.nodeName);
                  },
                  input: function (e) {
                    return fe.test(e.nodeName);
                  },
                  button: function (e) {
                  },
                  text: function (e) {
                  },
                  first: s(function () {
                    return [0];
                  }),
                  last: s(function (e, t) {
                    return [t - 1];
                  }),
                  eq: s(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                  }),
                  even: s(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  odd: s(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  lt: s(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0; ) e.push(i);
                    return e;
                  }),
                  gt: s(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                    return e;
                  }),
                },
              }),
            (x.pseudos.nth = x.pseudos.eq);
          for (y in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0,
          })
            x.pseudos[y] = (function (e) {
              return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
              };
            })(y);
          for (y in {
            submit: !0,
            reset: !0,
          })
            x.pseudos[y] = (function (e) {
              return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
              };
            })(y);
          return (
            (u.prototype = x.filters = x.pseudos),
            (x.setFilters = new u()),
            (C = t.tokenize =
              function (e, n) {
                var i,
                  r,
                  o,
                  a,
                  s,
                  l,
                  u,
                  c = z[e + " "];
                if (c) return n ? 0 : c.slice(0);
                for (s = e, l = [], u = x.preFilter; s; ) {
                  (i && !(r = ae.exec(s))) ||
                    (r && (s = s.slice(r[0].length) || s), l.push((o = []))),
                    (i = !1),
                    (r = se.exec(s)) &&
                      ((i = r.shift()),
                      o.push({
                        value: i,
                        type: r[0].replace(oe, " "),
                      }),
                      (s = s.slice(i.length)));
                  for (a in x.filter)
                    !(r = de[a].exec(s)) ||
                      (u[a] && !(r = u[a](r))) ||
                      ((i = r.shift()),
                      o.push({
                        value: i,
                        type: a,
                        matches: r,
                      }),
                      (s = s.slice(i.length)));
                  if (!i) break;
                }
                return n ? s.length : s ? t.error(e) : z(e, l).slice(0);
              }),
            (S = t.compile =
              function (e, t) {
                var n,
                  i = [],
                  r = [],
                  o = B[e + " "];
                if (!o) {
                  for (t || (t = C(e)), n = t.length; n--; )
                    (o = v(t[n])), o[F] ? i.push(o) : r.push(o);
                  (o = B(e, g(r, i))), (o.selector = e);
                }
                return o;
              }),
            (N = t.select =
              function (e, t, n, i) {
                var r,
                  o,
                  a,
                  s,
                  u,
                  d = "function" == typeof e && e,
                  f = !i && C((e = d.selector || e));
                if (((n = n || []), 1 === f.length)) {

                }
                return (
                  (d || S(e, f))(
                    i,
                    t,
                    !P,
                    n,
                    !t || (ve.test(e) && l(t.parentNode)) || t
                  ),
                  n
                );
              }),
            (b.sortStable = F.split("").sort(V).join("") === F),
            (b.detectDuplicates = !!A),
            D(),
            (b.sortDetached = r(function (e) {
              return 1 & e.compareDocumentPosition(L.createElement("div"));
            })),
            r(function (e) {
              return (
                (e.innerHTML = "<a href='#'></a>"),
                "#" === e.firstChild.getAttribute("href")
              );
            }) ||
              o("type|href|height|width", function (e, t, n) {
                if (!n)
                  return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
              }),
            (b.attributes &&
              r(function (e) {
                return (
                  (e.innerHTML = "<input/>"),
                  e.firstChild.setAttribute("value", ""),
                  "" === e.firstChild.getAttribute("value")
                );
              })) ||
              o("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                  return e.defaultValue;
              }),
            r(function (e) {
              return null == e.getAttribute("disabled");
            }) ||
              o(Z, function (e, t, n) {
              }),
            t
          );
        })(n);
      (ve.find = we),
        (ve.expr = we.selectors),
        (ve.expr[":"] = ve.expr.pseudos),
        (ve.uniqueSort = ve.unique = we.uniqueSort),
        (ve.text = we.getText),
        (ve.isXMLDoc = we.isXML),
        (ve.contains = we.contains);
      var Te = function (e, t, n) {
        },
        Ce = function (e, t) {
          for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
          return n;
        },
        Se = ve.expr.match.needsContext,
        Ne = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        ke = /^.[^:#\[\.,]*$/;
      (ve.filter = function (e, t, n) {
      }),
        ve.fn.extend({
          find: function (e) {
            var t,
              n = [],
              i = this,
              r = i.length;
            if ("string" != typeof e)
              return this.pushStack(
                ve(e).filter(function () {
                  for (t = 0; t < r; t++)
                    if (ve.contains(i[t], this)) return !0;
                })
              );
            for (t = 0; t < r; t++) ve.find(e, i[t], n);
            return (
              (n = this.pushStack(r > 1 ? ve.unique(n) : n)),
              (n.selector = this.selector ? this.selector + " " + e : e),
              n
            );
          },
          filter: function (e) {
            return this.pushStack(s(this, e || [], !1));
          },
          not: function (e) {
            return this.pushStack(s(this, e || [], !0));
          },
          is: function (e) {
            return !!s(
              this,
              "string" == typeof e && Se.test(e) ? ve(e) : e || [],
              !1
            ).length;
          },
        });
      var Ee,
        Ae = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
      ((ve.fn.init = function (e, t, n) {
        var i, r;
        if (!e) return this;
        if (((n = n || Ee), "string" == typeof e)) {
          if (
            !(i =
              "<" === e.charAt(0) &&
              ">" === e.charAt(e.length - 1) &&
              e.length >= 3
                ? [null, e, null]
                : Ae.exec(e)) ||
            (!i[1] && t)
          )
            return !t || t.jquery
              ? (t || n).find(e)
              : this.constructor(t).find(e);
          if (i[1]) {
          }
          if ((r = se.getElementById(i[2])) && r.parentNode) {
            if (r.id !== i[2]) return Ee.find(e);
            (this.length = 1), (this[0] = r);
          }
          return (this.context = se), (this.selector = e), this;
        }
        return e.nodeType
          ? ((this.context = this[0] = e), (this.length = 1), this)
          : ve.isFunction(e)
          ? void 0 !== n.ready
            ? n.ready(e)
            : e(ve)
          : (void 0 !== e.selector &&
              ((this.selector = e.selector), (this.context = e.context)),
            ve.makeArray(e, this));
      }).prototype = ve.fn),
        (Ee = ve(se));
      var De = /^(?:parents|prev(?:Until|All))/,
        Le = {
          children: !0,
          contents: !0,
          next: !0,
          prev: !0,
        };
      ve.fn.extend({
        has: function (e) {
        },
        closest: function (e, t) {
        },
        index: function (e) {
        },
        add: function (e, t) {
          return this.pushStack(ve.uniqueSort(ve.merge(this.get(), ve(e, t))));
        },
        addBack: function (e) {
        },
      }),
        ve.each(
          {
            parent: function (e) {
            },
            parents: function (e) {
              return Te(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
              return Te(e, "parentNode", n);
            },
            next: function (e) {
              return l(e, "nextSibling");
            },
            prev: function (e) {
              return l(e, "previousSibling");
            },
            nextAll: function (e) {
              return Te(e, "nextSibling");
            },
            prevAll: function (e) {
              return Te(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
              return Te(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
              return Te(e, "previousSibling", n);
            },
            siblings: function (e) {
              return Ce((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
              return Ce(e.firstChild);
            },
            contents: function (e) {
              return ve.nodeName(e, "iframe")
                ? e.contentDocument || e.contentWindow.document
                : ve.merge([], e.childNodes);
            },
          },
          function (e, t) {
          }
        );
      var Me = /\S+/g;
      (ve.Callbacks = function (e) {
        e = "string" == typeof e ? u(e) : ve.extend({}, e);
        var t,
          n,
          i,
          r,
          o = [],
          a = [],
          s = -1,
          l = function () {
            for (r = e.once, i = t = !0; a.length; s = -1)
              for (n = a.shift(); ++s < o.length; )
                !1 === o[s].apply(n[0], n[1]) &&
                  e.stopOnFalse &&
                  ((s = o.length), (n = !1));
            e.memory || (n = !1), (t = !1), r && (o = n ? [] : "");
          },
          c = {
            add: function () {
              return (
                o &&
                  (n && !t && ((s = o.length - 1), a.push(n)),
                  (function t(n) {
                    ve.each(n, function (n, i) {
                      ve.isFunction(i)
                        ? (e.unique && c.has(i)) || o.push(i)
                        : i && i.length && "string" !== ve.type(i) && t(i);
                    });
                  })(arguments),
                  n && !t && l()),
                this
              );
            },
            remove: function () {
            },
            has: function (e) {
              return e ? ve.inArray(e, o) > -1 : o.length > 0;
            },
            empty: function () {
              return o && (o = []), this;
            },
            disable: function () {
              return (r = a = []), (o = n = ""), this;
            },
            disabled: function () {
              return !o;
            },
            lock: function () {
              return (r = !0), n || c.disable(), this;
            },
            locked: function () {
              return !!r;
            },
            fireWith: function (e, n) {
              return (
                r ||
                  ((n = n || []),
                  (n = [e, n.slice ? n.slice() : n]),
                  a.push(n),
                  t || l()),
                this
              );
            },
            fire: function () {
              return c.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!i;
            },
          };
        return c;
      }),
        ve.extend({
          Deferred: function (e) {
            var t = [
                ["resolve", "done", ve.Callbacks("once memory"), "resolved"],
                ["reject", "fail", ve.Callbacks("once memory"), "rejected"],
                ["notify", "progress", ve.Callbacks("memory")],
              ],
              n = "pending",
              i = {
                state: function () {
                  return n;
                },
                always: function () {
                  return r.done(arguments).fail(arguments), this;
                },
                then: function () {
                },
                promise: function (e) {
                  return null != e ? ve.extend(e, i) : i;
                },
              },
              r = {};
            return (
              (i.pipe = i.then),
              ve.each(t, function (e, o) {
                var a = o[2],
                  s = o[3];
                (i[o[1]] = a.add),
                  s &&
                    a.add(
                      function () {
                        n = s;
                      },
                      t[1 ^ e][2].disable,
                      t[2][2].lock
                    ),
                  (r[o[0]] = function () {
                    return (
                      r[o[0] + "With"](this === r ? i : this, arguments), this
                    );
                  }),
                  (r[o[0] + "With"] = a.fireWith);
              }),
              i.promise(r),
              e && e.call(r, r),
              r
            );
          },
          when: function (e) {
          },
        });
      var Pe;
      (ve.fn.ready = function (e) {
        return ve.ready.promise().done(e), this;
      }),
        ve.extend({
          isReady: !1,
          readyWait: 1,
          holdReady: function (e) {
            e ? ve.readyWait++ : ve.ready(!0);
          },
          ready: function (e) {
            (!0 === e ? --ve.readyWait : ve.isReady) ||
              ((ve.isReady = !0),
              (!0 !== e && --ve.readyWait > 0) ||
                (Pe.resolveWith(se, [ve]),
                ve.fn.triggerHandler &&
                  (ve(se).triggerHandler("ready"), ve(se).off("ready"))));
          },
        }),
        (ve.ready.promise = function (e) {
          if (!Pe)
            if (
              ((Pe = ve.Deferred()),
              "complete" === se.readyState ||
                ("loading" !== se.readyState && !se.documentElement.doScroll))
            )
              n.setTimeout(ve.ready);
            else if (se.addEventListener)
              se.addEventListener("DOMContentLoaded", d),
                n.addEventListener("load", d);
            else {

            }
          return Pe.promise(e);
        }),
        ve.ready.promise();
      var je;
      for (je in ve(me)) break;
      (me.ownFirst = "0" === je),
        (me.inlineBlockNeedsLayout = !1),
        ve(function () {
          var e, t, n, i;
          (n = se.getElementsByTagName("body")[0]) &&
            n.style &&
            ((t = se.createElement("div")),
            (i = se.createElement("div")),
            (i.style.cssText =
              "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
            n.appendChild(i).appendChild(t),
            void 0 !== t.style.zoom &&
              ((t.style.cssText =
                "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"),
              (me.inlineBlockNeedsLayout = e = 3 === t.offsetWidth),
              e && (n.style.zoom = 1)),
            n.removeChild(i));
        }),
        (function () {
          var e = se.createElement("div");
          me.deleteExpando = !0;
          try {
            delete e.test;
          } catch (e) {
            me.deleteExpando = !1;
          }
          e = null;
        })();
      var qe = function (e) {
          var t = ve.noData[(e.nodeName + " ").toLowerCase()],
            n = +e.nodeType || 1;
          return (
            (1 === n || 9 === n) &&
            (!t || (!0 !== t && e.getAttribute("classid") === t))
          );
        },
        He = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Oe = /([A-Z])/g;
      ve.extend({
        cache: {},
        noData: {
          "applet ": !0,
          "embed ": !0,
          "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
        },
        hasData: function (e) {
          return (
            !!(e = e.nodeType ? ve.cache[e[ve.expando]] : e[ve.expando]) &&
            !p(e)
          );
        },
        data: function (e, t, n) {
          return h(e, t, n);
        },
        removeData: function (e, t) {
          return m(e, t);
        },
        _data: function (e, t, n) {
          return h(e, t, n, !0);
        },
        _removeData: function (e, t) {
          return m(e, t, !0);
        },
      }),
        ve.fn.extend({
          data: function (e, t) {
          },
          removeData: function (e) {
            return this.each(function () {
              ve.removeData(this, e);
            });
          },
        }),
        ve.extend({
          queue: function (e, t, n) {
            var i;
            if (e)
              return (
                (t = (t || "fx") + "queue"),
                (i = ve._data(e, t)),
                n &&
                  (!i || ve.isArray(n)
                    ? (i = ve._data(e, t, ve.makeArray(n)))
                    : i.push(n)),
                i || []
              );
          },
          dequeue: function (e, t) {
            t = t || "fx";
            var n = ve.queue(e, t),
              i = n.length,
              r = n.shift(),
              o = ve._queueHooks(e, t),
              a = function () {
                ve.dequeue(e, t);
              };
            "inprogress" === r && ((r = n.shift()), i--),
              r &&
                ("fx" === t && n.unshift("inprogress"),
                delete o.stop,
                r.call(e, a, o)),
              !i && o && o.empty.fire();
          },
          _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return (
              ve._data(e, n) ||
              ve._data(e, n, {
                empty: ve.Callbacks("once memory").add(function () {
                  ve._removeData(e, t + "queue"), ve._removeData(e, n);
                }),
              })
            );
          },
        }),
        ve.fn.extend({
          queue: function (e, t) {
            var n = 2;
            return (
              "string" != typeof e && ((t = e), (e = "fx"), n--),
              arguments.length < n
                ? ve.queue(this[0], e)
                : void 0 === t
                ? this
                : this.each(function () {
                    var n = ve.queue(this, e, t);
                    ve._queueHooks(this, e),
                      "fx" === e &&
                        "inprogress" !== n[0] &&
                        ve.dequeue(this, e);
                  })
            );
          },
          dequeue: function (e) {
            return this.each(function () {
              ve.dequeue(this, e);
            });
          },
          clearQueue: function (e) {
            return this.queue(e || "fx", []);
          },
          promise: function (e, t) {
          },
        }),
        (function () {
          var e;
          me.shrinkWrapBlocks = function () {

          };
        })();
      var Fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ie = new RegExp("^(?:([+-])=|)(" + Fe + ")([a-z%]*)$", "i"),
        _e = ["Top", "Right", "Bottom", "Left"],
        We = function (e, t) {
          return (
            (e = t || e),
            "none" === ve.css(e, "display") || !ve.contains(e.ownerDocument, e)
          );
        },
        Re = function (e, t, n, i, r, o, a) {
          var s = 0,
            l = e.length,
            u = null == n;
          if ("object" === ve.type(n)) {
            r = !0;
            for (s in n) Re(e, t, s, n[s], !0, o, a);
          } else if (
            void 0 !== i &&
            ((r = !0),
            ve.isFunction(i) || (a = !0),
            u &&
              (a
                ? (t.call(e, i), (t = null))
                : ((u = t),
                  (t = function (e, t, n) {
                    return u.call(ve(e), n);
                  }))),
            t)
          )
            for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
          return r ? e : u ? t.call(e) : l ? t(e[0], n) : o;
        },
        ze = /^(?:checkbox|radio)$/i,
        Be = /<([\w:-]+)/,
        Ve = /^$|\/(?:java|ecma)script/i,
        $e = /^\s+/,
        Xe =
          "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
      !(function () {
        var e = se.createElement("div"),
          t = se.createDocumentFragment(),
          n = se.createElement("input");
        (e.innerHTML =
          "  <link/><table></table><a href='a'>a</a><input type='checkbox'/>"),
          (me.leadingWhitespace = 3 === e.firstChild.nodeType),
          (me.tbody = !e.getElementsByTagName("tbody").length),
          (me.htmlSerialize = !!e.getElementsByTagName("link").length),
          (me.html5Clone =
            "<:nav></:nav>" !==
            se.createElement("nav").cloneNode(!0).outerHTML),
          (n.type = "checkbox"),
          (n.checked = !0),
          t.appendChild(n),
          (me.appendChecked = n.checked),
          (e.innerHTML = "<textarea>x</textarea>"),
          (me.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue),
          t.appendChild(e),
          (n = se.createElement("input")),
          n.setAttribute("type", "radio"),
          n.setAttribute("checked", "checked"),
          n.setAttribute("name", "t"),
          e.appendChild(n),
          (me.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (me.noCloneEvent = !!e.addEventListener),
          (e[ve.expando] = 1),
          (me.attributes = !e.getAttribute(ve.expando));
      })();
      var Ue = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: me.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
      };
      (Ue.optgroup = Ue.option),
        (Ue.tbody = Ue.tfoot = Ue.colgroup = Ue.caption = Ue.thead),
        (Ue.th = Ue.td);
      var Ge = /<|&#?\w+;/,
        Ye = /<tbody/i;
      !(function () {
        var e,
          t,
          i = se.createElement("div");
        for (e in {
          submit: !0,
          change: !0,
          focusin: !0,
        })
          (t = "on" + e),
            (me[e] = t in n) ||
              (i.setAttribute(t, "t"),
              (me[e] = !1 === i.attributes[t].expando));
        i = null;
      })();
      var Je = /^(?:input|select|textarea)$/i,
        Ke = /^key/,
        Qe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ze = /^(?:focusinfocus|focusoutblur)$/,
        et = /^([^.]*)(?:\.(.+)|)/;
      (ve.event = {
        global: {},
        add: function (e, t, n, i, r) {
          var o,
            a,
            s,
            l,
            u,
            c,
            d,
            f,
            p,
            h,
            m,
            v = ve._data(e);
          if (v) {
            for (
              n.handler && ((l = n), (n = l.handler), (r = l.selector)),
                n.guid || (n.guid = ve.guid++),
                (a = v.events) || (a = v.events = {}),
                (c = v.handle) ||
                  ((c = v.handle =
                    function (e) {
                      return void 0 === ve ||
                        (e && ve.event.triggered === e.type)
                        ? void 0
                        : ve.event.dispatch.apply(c.elem, arguments);
                    }),
                  (c.elem = e)),
                t = (t || "").match(Me) || [""],
                s = t.length;
              s--;

            )
              (o = et.exec(t[s]) || []),
                (p = m = o[1]),
                (h = (o[2] || "").split(".").sort()),
                p &&
                  ((u = ve.event.special[p] || {}),
                  (p = (r ? u.delegateType : u.bindType) || p),
                  (u = ve.event.special[p] || {}),
                  (d = ve.extend(
                    {
                      type: p,
                      origType: m,
                      data: i,
                      handler: n,
                      guid: n.guid,
                      selector: r,
                      needsContext: r && ve.expr.match.needsContext.test(r),
                      namespace: h.join("."),
                    },
                    l
                  )),
                  (f = a[p]) ||
                    ((f = a[p] = []),
                    (f.delegateCount = 0),
                    (u.setup && !1 !== u.setup.call(e, i, h, c)) ||
                      (e.addEventListener
                        ? e.addEventListener(p, c, !1)
                        : e.attachEvent && e.attachEvent("on" + p, c))),
                  u.add &&
                    (u.add.call(e, d),
                    d.handler.guid || (d.handler.guid = n.guid)),
                  r ? f.splice(f.delegateCount++, 0, d) : f.push(d),
                  (ve.event.global[p] = !0));
            e = null;
          }
        },
        remove: function (e, t, n, i, r) {
        },
        trigger: function (e, t, i, r) {
        },
        dispatch: function (e) {
          e = ve.event.fix(e);
          var t,
            n,
            i,
            r,
            o,
            a = [],
            s = le.call(arguments),
            l = (ve._data(this, "events") || {})[e.type] || [],
            u = ve.event.special[e.type] || {};
          if (
            ((s[0] = e),
            (e.delegateTarget = this),
            !u.preDispatch || !1 !== u.preDispatch.call(this, e))
          ) {
            for (
              a = ve.event.handlers.call(this, e, l), t = 0;
              (r = a[t++]) && !e.isPropagationStopped();

            )
              for (
                e.currentTarget = r.elem, n = 0;
                (o = r.handlers[n++]) && !e.isImmediatePropagationStopped();

              )
                (e.rnamespace && !e.rnamespace.test(o.namespace)) ||
                  ((e.handleObj = o),
                  (e.data = o.data),
                  void 0 !==
                    (i = (
                      (ve.event.special[o.origType] || {}).handle || o.handler
                    ).apply(r.elem, s)) &&
                    !1 === (e.result = i) &&
                    (e.preventDefault(), e.stopPropagation()));
            return u.postDispatch && u.postDispatch.call(this, e), e.result;
          }
        },
        handlers: function (e, t) {
          var n,
            i,
            r,
            o,
            a = [],
            s = t.delegateCount,
            l = e.target;
          if (
            s &&
            l.nodeType &&
            ("click" !== e.type || isNaN(e.button) || e.button < 1)
          )
            for (; l != this; l = l.parentNode || this)
              if (
                1 === l.nodeType &&
                (!0 !== l.disabled || "click" !== e.type)
              ) {
                for (i = [], n = 0; n < s; n++)
                  (o = t[n]),
                    (r = o.selector + " "),
                    void 0 === i[r] &&
                      (i[r] = o.needsContext
                        ? ve(r, this).index(l) > -1
                        : ve.find(r, this, null, [l]).length),
                    i[r] && i.push(o);
                i.length &&
                  a.push({
                    elem: l,
                    handlers: i,
                  });
              }
          return (
            s < t.length &&
              a.push({
                elem: this,
                handlers: t.slice(s),
              }),
            a
          );
        },
        fix: function (e) {
          if (e[ve.expando]) return e;
          var t,
            n,
            i,
            r = e.type,
            o = e,
            a = this.fixHooks[r];
          for (
            a ||
              (this.fixHooks[r] = a =
                Qe.test(r) ? this.mouseHooks : Ke.test(r) ? this.keyHooks : {}),
              i = a.props ? this.props.concat(a.props) : this.props,
              e = new ve.Event(o),
              t = i.length;
            t--;

          )
            (n = i[t]), (e[n] = o[n]);
          return (
            e.target || (e.target = o.srcElement || se),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            (e.metaKey = !!e.metaKey),
            a.filter ? a.filter(e, o) : e
          );
        },
        props:
          "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
            " "
          ),
        fixHooks: {},
        keyHooks: {
          props: "char charCode key keyCode".split(" "),
          filter: function (e, t) {
          },
        },
        mouseHooks: {
          props:
            "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
              " "
            ),
          filter: function (e, t) {
            var n,
              i,
              r,
              o = t.button,
              a = t.fromElement;
            return (
              null == e.pageX &&
                null != t.clientX &&
                ((i = e.target.ownerDocument || se),
                (r = i.documentElement),
                (n = i.body),
                (e.pageX =
                  t.clientX +
                  ((r && r.scrollLeft) || (n && n.scrollLeft) || 0) -
                  ((r && r.clientLeft) || (n && n.clientLeft) || 0)),
                (e.pageY =
                  t.clientY +
                  ((r && r.scrollTop) || (n && n.scrollTop) || 0) -
                  ((r && r.clientTop) || (n && n.clientTop) || 0))),
              !e.relatedTarget &&
                a &&
                (e.relatedTarget = a === e.target ? t.toElement : a),
              e.which ||
                void 0 === o ||
                (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
              e
            );
          },
        },
        special: {
          load: {
            noBubble: !0,
          },
          focus: {
            trigger: function () {
              if (this !== S() && this.focus)
                try {
                  return this.focus(), !1;
                } catch (e) {}
            },
            delegateType: "focusin",
          },
          blur: {
            trigger: function () {
              if (this === S() && this.blur) return this.blur(), !1;
            },
            delegateType: "focusout",
          },
          click: {
            trigger: function () {
              if (
                ve.nodeName(this, "input") &&
                "checkbox" === this.type &&
                this.click
              )
                return this.click(), !1;
            },
            _default: function (e) {
              return ve.nodeName(e.target, "a");
            },
          },
          beforeunload: {
            postDispatch: function (e) {
              void 0 !== e.result &&
                e.originalEvent &&
                (e.originalEvent.returnValue = e.result);
            },
          },
        },
        simulate: function (e, t, n) {
          var i = ve.extend(new ve.Event(), n, {
            type: e,
            isSimulated: !0,
          });
          ve.event.trigger(i, null, t),
            i.isDefaultPrevented() && n.preventDefault();
        },
      }),
        (ve.removeEvent = se.removeEventListener
          ? function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }
          : function (e, t, n) {
              var i = "on" + t;
              e.detachEvent &&
                (void 0 === e[i] && (e[i] = null), e.detachEvent(i, n));
            }),
        (ve.Event = function (e, t) {
          if (!(this instanceof ve.Event)) return new ve.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? T
                  : C))
            : (this.type = e),
            t && ve.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || ve.now()),
            (this[ve.expando] = !0);
        }),
        (ve.Event.prototype = {
          constructor: ve.Event,
          isDefaultPrevented: C,
          isPropagationStopped: C,
          isImmediatePropagationStopped: C,
          preventDefault: function () {
            var e = this.originalEvent;
            (this.isDefaultPrevented = T),
              e &&
                (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            (this.isPropagationStopped = T),
              e &&
                !this.isSimulated &&
                (e.stopPropagation && e.stopPropagation(),
                (e.cancelBubble = !0));
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = T),
              e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        ve.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (e, t) {
            ve.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (e) {
                var n,
                  i = this,
                  r = e.relatedTarget,
                  o = e.handleObj;
                return (
                  (r && (r === i || ve.contains(i, r))) ||
                    ((e.type = o.origType),
                    (n = o.handler.apply(this, arguments)),
                    (e.type = t)),
                  n
                );
              },
            };
          }
        ),
        me.submit,
        me.change,
        me.focusin ||
          ve.each(
            {
              focus: "focusin",
              blur: "focusout",
            },
            function (e, t) {
              var n = function (e) {
                ve.event.simulate(t, e.target, ve.event.fix(e));
              };
              ve.event.special[t] = {
                setup: function () {
                  var i = this.ownerDocument || this,
                    r = ve._data(i, t);
                  r || i.addEventListener(e, n, !0),
                    ve._data(i, t, (r || 0) + 1);
                },
                teardown: function () {
                  var i = this.ownerDocument || this,
                    r = ve._data(i, t) - 1;
                  r
                    ? ve._data(i, t, r)
                    : (i.removeEventListener(e, n, !0), ve._removeData(i, t));
                },
              };
            }
          ),
        ve.fn.extend({
          on: function (e, t, n, i) {
            return N(this, e, t, n, i);
          },
          one: function (e, t, n, i) {
            return N(this, e, t, n, i, 1);
          },
          off: function (e, t, n) {
          },
          trigger: function (e, t) {
            return this.each(function () {
              ve.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return ve.event.trigger(e, t, n, !0);
          },
        });
      var tt = / jQuery\d+="(?:null|\d+)"/g,
        nt = new RegExp("<(?:" + Xe + ")[\\s/>]", "i"),
        it =
          /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        rt = /<script|<style|<link/i,
        ot = /checked\s*(?:[^=]|=\s*.checked.)/i,
        at = /^true\/(.*)/,
        st = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        lt = g(se),
        ut = lt.appendChild(se.createElement("div"));
      ve.extend({
        htmlPrefilter: function (e) {
          return e.replace(it, "<$1></$2>");
        },
        clone: function (e, t, n) {
        },
        cleanData: function (e, t) {
        },
      }),
        ve.fn.extend({
          domManip: M,
          detach: function (e) {
            return P(this, e, !0);
          },
          remove: function (e) {
            return P(this, e);
          },
          text: function (e) {
            return Re(
              this,
              function (e) {
                return void 0 === e
                  ? ve.text(this)
                  : this.empty().append(
                      ((this[0] && this[0].ownerDocument) || se).createTextNode(
                        e
                      )
                    );
              },
              null,
              e,
              arguments.length
            );
          },
          append: function () {
            return M(this, arguments, function (e) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                k(this, e).appendChild(e);
              }
            });
          },
          prepend: function () {
            return M(this, arguments, function (e) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var t = k(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function () {
            return M(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function () {
            return M(this, arguments, function (e) {
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
              for (1 === e.nodeType && ve.cleanData(y(e, !1)); e.firstChild; )
                e.removeChild(e.firstChild);
              e.options && ve.nodeName(e, "select") && (e.options.length = 0);
            }
            return this;
          },
          clone: function (e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function () {
                return ve.clone(this, e, t);
              })
            );
          },
          html: function (e) {
            return Re(
              this,
              function (e) {
                var t = this[0] || {},
                  n = 0,
                  i = this.length;
                if (void 0 === e)
                  return 1 === t.nodeType
                    ? t.innerHTML.replace(tt, "")
                    : void 0;
                if (
                  "string" == typeof e &&
                  !rt.test(e) &&
                  (me.htmlSerialize || !nt.test(e)) &&
                  (me.leadingWhitespace || !$e.test(e)) &&
                  !Ue[(Be.exec(e) || ["", ""])[1].toLowerCase()]
                ) {
                  e = ve.htmlPrefilter(e);
                  try {
                    for (; n < i; n++)
                      (t = this[n] || {}),
                        1 === t.nodeType &&
                          (ve.cleanData(y(t, !1)), (t.innerHTML = e));
                    t = 0;
                  } catch (e) {}
                }
                t && this.empty().append(e);
              },
              null,
              e,
              arguments.length
            );
          },
          replaceWith: function () {
            var e = [];
            return M(
              this,
              arguments,
              function (t) {
                var n = this.parentNode;
                ve.inArray(this, e) < 0 &&
                  (ve.cleanData(y(this)), n && n.replaceChild(t, this));
              },
              e
            );
          },
        }),
        ve.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (e, t) {
            ve.fn[e] = function (e) {
              for (
                var n, i = 0, r = [], o = ve(e), a = o.length - 1;
                i <= a;
                i++
              )
                (n = i === a ? this : this.clone(!0)),
                  ve(o[i])[t](n),
                  ce.apply(r, n.get());
              return this.pushStack(r);
            };
          }
        );
      var ct,
        dt = {
          HTML: "block",
          BODY: "block",
        },
        ft = /^margin/,
        pt = new RegExp("^(" + Fe + ")(?!px)[a-z%]+$", "i"),
        ht = function (e, t, n, i) {
          var r,
            o,
            a = {};
          for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
          r = n.apply(e, i || []);
          for (o in t) e.style[o] = a[o];
          return r;
        },
        mt = se.documentElement;
      !(function () {
        function e() {
          var e,
            c,
            d = se.documentElement;
          d.appendChild(l),
            (u.style.cssText =
              "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
            (t = r = s = !1),
            (i = a = !0),
            n.getComputedStyle &&
              ((c = n.getComputedStyle(u)),
              (t = "1%" !== (c || {}).top),
              (s = "2px" === (c || {}).marginLeft),
              (r =
                "4px" ===
                (
                  c || {
                    width: "4px",
                  }
                ).width),
              (u.style.marginRight = "50%"),
              (i =
                "4px" ===
                (
                  c || {
                    marginRight: "4px",
                  }
                ).marginRight),
              (e = u.appendChild(se.createElement("div"))),
              (e.style.cssText = u.style.cssText =
                "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
              (e.style.marginRight = e.style.width = "0"),
              (u.style.width = "1px"),
              (a = !parseFloat((n.getComputedStyle(e) || {}).marginRight)),
              u.removeChild(e)),
            (u.style.display = "none"),
            (o = 0 === u.getClientRects().length),
            o &&
              ((u.style.display = ""),
              (u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
              (u.childNodes[0].style.borderCollapse = "separate"),
              (e = u.getElementsByTagName("td")),
              (e[0].style.cssText = "margin:0;border:0;padding:0;display:none"),
              (o = 0 === e[0].offsetHeight) &&
                ((e[0].style.display = ""),
                (e[1].style.display = "none"),
                (o = 0 === e[0].offsetHeight))),
            d.removeChild(l);
        }
        var t,
          i,
          r,
          o,
          a,
          s,
          l = se.createElement("div"),
          u = se.createElement("div");
        u.style &&
          ((u.style.cssText = "float:left;opacity:.5"),
          (me.opacity = "0.5" === u.style.opacity),
          (me.cssFloat = !!u.style.cssFloat),
          (u.style.backgroundClip = "content-box"),
          (u.cloneNode(!0).style.backgroundClip = ""),
          (me.clearCloneStyle = "content-box" === u.style.backgroundClip),
          (l = se.createElement("div")),
          (l.style.cssText =
            "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
          (u.innerHTML = ""),
          l.appendChild(u),
          (me.boxSizing =
            "" === u.style.boxSizing ||
            "" === u.style.MozBoxSizing ||
            "" === u.style.WebkitBoxSizing),
          ve.extend(me, {
            reliableHiddenOffsets: function () {
              return null == t && e(), o;
            },
            boxSizingReliable: function () {
              return null == t && e(), r;
            },
            pixelMarginRight: function () {
              return null == t && e(), i;
            },
            pixelPosition: function () {
              return null == t && e(), t;
            },
            reliableMarginRight: function () {
              return null == t && e(), a;
            },
            reliableMarginLeft: function () {
              return null == t && e(), s;
            },
          }));
      })();
      var vt,
        gt,
        yt = /^(top|right|bottom|left)$/;
      n.getComputedStyle
        ? ((vt = function (e) {
            var t = e.ownerDocument.defaultView;
            return (t && t.opener) || (t = n), t.getComputedStyle(e);
          }),
          (gt = function (e, t, n) {
            var i,
              r,
              o,
              a,
              s = e.style;
            return (
              (n = n || vt(e)),
              (a = n ? n.getPropertyValue(t) || n[t] : void 0),
              ("" !== a && void 0 !== a) ||
                ve.contains(e.ownerDocument, e) ||
                (a = ve.style(e, t)),
              n &&
                !me.pixelMarginRight() &&
                pt.test(a) &&
                ft.test(t) &&
                ((i = s.width),
                (r = s.minWidth),
                (o = s.maxWidth),
                (s.minWidth = s.maxWidth = s.width = a),
                (a = n.width),
                (s.width = i),
                (s.minWidth = r),
                (s.maxWidth = o)),
              void 0 === a ? a : a + ""
            );
          }))
        : mt.currentStyle &&
          ((vt = function (e) {
            return e.currentStyle;
          }),
          (gt = function (e, t, n) {
            var i,
              r,
              o,
              a,
              s = e.style;
            return (
              (n = n || vt(e)),
              (a = n ? n[t] : void 0),
              null == a && s && s[t] && (a = s[t]),
              pt.test(a) &&
                !yt.test(t) &&
                ((i = s.left),
                (r = e.runtimeStyle),
                (o = r && r.left),
                o && (r.left = e.currentStyle.left),
                (s.left = "fontSize" === t ? "1em" : a),
                (a = s.pixelLeft + "px"),
                (s.left = i),
                o && (r.left = o)),
              void 0 === a ? a : a + "" || "auto"
            );
          }));
      var bt = /alpha\([^)]*\)/i,
        xt = /opacity\s*=\s*([^)]*)/i,
        wt = /^(none|table(?!-c[ea]).+)/,
        Tt = new RegExp("^(" + Fe + ")(.*)$", "i"),
        Ct = {
          position: "absolute",
          visibility: "hidden",
          display: "block",
        },
        St = {
          letterSpacing: "0",
          fontWeight: "400",
        },
        Nt = ["Webkit", "O", "Moz", "ms"],
        kt = se.createElement("div").style;
      ve.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = gt(e, "opacity");
                return "" === n ? "1" : n;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: {
          float: me.cssFloat ? "cssFloat" : "styleFloat",
        },
        style: function (e, t, n, i) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var r,
              o,
              a,
              s = ve.camelCase(t),
              l = e.style;
            if (
              ((t = ve.cssProps[s] || (ve.cssProps[s] = O(s) || s)),
              (a = ve.cssHooks[t] || ve.cssHooks[s]),
              void 0 === n)
            )
              return a && "get" in a && void 0 !== (r = a.get(e, !1, i))
                ? r
                : l[t];
            if (
              ((o = typeof n),
              "string" === o &&
                (r = Ie.exec(n)) &&
                r[1] &&
                ((n = v(e, t, r)), (o = "number")),
              null != n &&
                n === n &&
                ("number" === o &&
                  (n += (r && r[3]) || (ve.cssNumber[s] ? "" : "px")),
                me.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (l[t] = "inherit"),
                !(a && "set" in a && void 0 === (n = a.set(e, n, i)))))
            )
              try {
                l[t] = n;
              } catch (e) {}
          }
        },
        css: function (e, t, n, i) {
          var r,
            o,
            a,
            s = ve.camelCase(t);
          return (
            (t = ve.cssProps[s] || (ve.cssProps[s] = O(s) || s)),
            (a = ve.cssHooks[t] || ve.cssHooks[s]),
            a && "get" in a && (o = a.get(e, !0, n)),
            void 0 === o && (o = gt(e, t, i)),
            "normal" === o && t in St && (o = St[t]),
            "" === n || n
              ? ((r = parseFloat(o)), !0 === n || isFinite(r) ? r || 0 : o)
              : o
          );
        },
      }),
        ve.each(["height", "width"], function (e, t) {
          ve.cssHooks[t] = {
            get: function (e, n, i) {
              if (n)
                return wt.test(ve.css(e, "display")) && 0 === e.offsetWidth
                  ? ht(e, Ct, function () {
                      return W(e, t, i);
                    })
                  : W(e, t, i);
            },
            set: function (e, n, i) {
              var r = i && vt(e);
              return I(
                e,
                n,
                i
                  ? _(
                      e,
                      t,
                      i,
                      me.boxSizing &&
                        "border-box" === ve.css(e, "boxSizing", !1, r),
                      r
                    )
                  : 0
              );
            },
          };
        }),
        me.opacity ||
          (ve.cssHooks.opacity = {
            get: function (e, t) {
              return xt.test(
                (t && e.currentStyle
                  ? e.currentStyle.filter
                  : e.style.filter) || ""
              )
                ? 0.01 * parseFloat(RegExp.$1) + ""
                : t
                ? "1"
                : "";
            },
            set: function (e, t) {
              var n = e.style,
                i = e.currentStyle,
                r = ve.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = (i && i.filter) || n.filter || "";
              (n.zoom = 1),
                ((t >= 1 || "" === t) &&
                  "" === ve.trim(o.replace(bt, "")) &&
                  n.removeAttribute &&
                  (n.removeAttribute("filter"),
                  "" === t || (i && !i.filter))) ||
                  (n.filter = bt.test(o) ? o.replace(bt, r) : o + " " + r);
            },
          }),
        (ve.cssHooks.marginRight = H(me.reliableMarginRight, function (e, t) {
          if (t)
            return ht(
              e,
              {
                display: "inline-block",
              },
              gt,
              [e, "marginRight"]
            );
        })),
        (ve.cssHooks.marginLeft = H(me.reliableMarginLeft, function (e, t) {
          if (t)
            return (
              (parseFloat(gt(e, "marginLeft")) ||
                (ve.contains(e.ownerDocument, e)
                  ? e.getBoundingClientRect().left -
                    ht(
                      e,
                      {
                        marginLeft: 0,
                      },
                      function () {
                        return e.getBoundingClientRect().left;
                      }
                    )
                  : 0)) + "px"
            );
        })),
        ve.each(
          {
            margin: "",
            padding: "",
            border: "Width",
          },
          function (e, t) {
            (ve.cssHooks[e + t] = {
              expand: function (n) {
                for (
                  var i = 0,
                    r = {},
                    o = "string" == typeof n ? n.split(" ") : [n];
                  i < 4;
                  i++
                )
                  r[e + _e[i] + t] = o[i] || o[i - 2] || o[0];
                return r;
              },
            }),
              ft.test(e) || (ve.cssHooks[e + t].set = I);
          }
        ),
        ve.fn.extend({
          css: function (e, t) {
            return Re(
              this,
              function (e, t, n) {
                var i,
                  r,
                  o = {},
                  a = 0;
                if (ve.isArray(t)) {
                  for (i = vt(e), r = t.length; a < r; a++)
                    o[t[a]] = ve.css(e, t[a], !1, i);
                  return o;
                }
                return void 0 !== n ? ve.style(e, t, n) : ve.css(e, t);
              },
              e,
              t,
              arguments.length > 1
            );
          },
          show: function () {
            return F(this, !0);
          },
          hide: function () {
            return F(this);
          },
          toggle: function (e) {
            return "boolean" == typeof e
              ? e
                ? this.show()
                : this.hide()
              : this.each(function () {
                  We(this) ? ve(this).show() : ve(this).hide();
                });
          },
        }),
        (ve.Tween = R),
        (R.prototype = {
          constructor: R,
          init: function (e, t, n, i, r, o) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = r || ve.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = i),
              (this.unit = o || (ve.cssNumber[n] ? "" : "px"));
          },
          cur: function () {
            var e = R.propHooks[this.prop];
            return e && e.get ? e.get(this) : R.propHooks._default.get(this);
          },
          run: function (e) {
            var t,
              n = R.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = t =
                    ve.easing[this.easing](
                      e,
                      this.options.duration * e,
                      0,
                      1,
                      this.options.duration
                    ))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : R.propHooks._default.set(this),
              this
            );
          },
        }),
        (R.prototype.init.prototype = R.prototype),
        (R.propHooks = {
          _default: {
            get: function (e) {
              var t;
              return 1 !== e.elem.nodeType ||
                (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                ? e.elem[e.prop]
                : ((t = ve.css(e.elem, e.prop, "")), t && "auto" !== t ? t : 0);
            },
            set: function (e) {
              ve.fx.step[e.prop]
                ? ve.fx.step[e.prop](e)
                : 1 !== e.elem.nodeType ||
                  (null == e.elem.style[ve.cssProps[e.prop]] &&
                    !ve.cssHooks[e.prop])
                ? (e.elem[e.prop] = e.now)
                : ve.style(e.elem, e.prop, e.now + e.unit);
            },
          },
        }),
        (R.propHooks.scrollTop = R.propHooks.scrollLeft =
          {
            set: function (e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
          }),
        (ve.easing = {
          linear: function (e) {
            return e;
          },
          swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (ve.fx = R.prototype.init),
        (ve.fx.step = {});
      var Et,
        At,
        Dt = /^(?:toggle|show|hide)$/,
        Lt = /queueHooks$/;
      (ve.Animation = ve.extend(U, {
        tweeners: {
          "*": [
            function (e, t) {
              var n = this.createTween(e, t);
              return v(n.elem, e, Ie.exec(t), n), n;
            },
          ],
        },
        tweener: function (e, t) {
          ve.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.match(Me));
          for (var n, i = 0, r = e.length; i < r; i++)
            (n = e[i]),
              (U.tweeners[n] = U.tweeners[n] || []),
              U.tweeners[n].unshift(t);
        },
        prefilters: [$],
        prefilter: function (e, t) {
          t ? U.prefilters.unshift(e) : U.prefilters.push(e);
        },
      })),
        (ve.speed = function (e, t, n) {
          var i =
            e && "object" == typeof e
              ? ve.extend({}, e)
              : {
                  complete: n || (!n && t) || (ve.isFunction(e) && e),
                  duration: e,
                  easing: (n && t) || (t && !ve.isFunction(t) && t),
                };
          return (
            (i.duration = ve.fx.off
              ? 0
              : "number" == typeof i.duration
              ? i.duration
              : i.duration in ve.fx.speeds
              ? ve.fx.speeds[i.duration]
              : ve.fx.speeds._default),
            (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
            (i.old = i.complete),
            (i.complete = function () {
              ve.isFunction(i.old) && i.old.call(this),
                i.queue && ve.dequeue(this, i.queue);
            }),
            i
          );
        }),
        ve.fn.extend({
          fadeTo: function (e, t, n, i) {
            return this.filter(We).css("opacity", 0).show().end().animate(
              {
                opacity: t,
              },
              e,
              n,
              i
            );
          },
          animate: function (e, t, n, i) {
            var r = ve.isEmptyObject(e),
              o = ve.speed(t, n, i),
              a = function () {
                var t = U(this, ve.extend({}, e), o);
                (r || ve._data(this, "finish")) && t.stop(!0);
              };
            return (
              (a.finish = a),
              r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            );
          },
          stop: function (e, t, n) {
            var i = function (e) {
              var t = e.stop;
              delete e.stop, t(n);
            };
            return (
              "string" != typeof e && ((n = t), (t = e), (e = void 0)),
              t && !1 !== e && this.queue(e || "fx", []),
              this.each(function () {
                var t = !0,
                  r = null != e && e + "queueHooks",
                  o = ve.timers,
                  a = ve._data(this);
                if (r) a[r] && a[r].stop && i(a[r]);
                else for (r in a) a[r] && a[r].stop && Lt.test(r) && i(a[r]);
                for (r = o.length; r--; )
                  o[r].elem !== this ||
                    (null != e && o[r].queue !== e) ||
                    (o[r].anim.stop(n), (t = !1), o.splice(r, 1));
                (!t && n) || ve.dequeue(this, e);
              })
            );
          },
          finish: function (e) {
            return (
              !1 !== e && (e = e || "fx"),
              this.each(function () {
                var t,
                  n = ve._data(this),
                  i = n[e + "queue"],
                  r = n[e + "queueHooks"],
                  o = ve.timers,
                  a = i ? i.length : 0;
                for (
                  n.finish = !0,
                    ve.queue(this, e, []),
                    r && r.stop && r.stop.call(this, !0),
                    t = o.length;
                  t--;

                )
                  o[t].elem === this &&
                    o[t].queue === e &&
                    (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < a; t++)
                  i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish;
              })
            );
          },
        }),
        ve.each(["toggle", "show", "hide"], function (e, t) {
          var n = ve.fn[t];
          ve.fn[t] = function (e, i, r) {
            return null == e || "boolean" == typeof e
              ? n.apply(this, arguments)
              : this.animate(B(t, !0), e, i, r);
          };
        }),
        ve.each(
          {
            slideDown: B("show"),
            slideUp: B("hide"),
            slideToggle: B("toggle"),
            fadeIn: {
              opacity: "show",
            },
            fadeOut: {
              opacity: "hide",
            },
            fadeToggle: {
              opacity: "toggle",
            },
          },
          function (e, t) {
            ve.fn[e] = function (e, n, i) {
              return this.animate(t, e, n, i);
            };
          }
        ),
        (ve.timers = []),
        (ve.fx.tick = function () {
          var e,
            t = ve.timers,
            n = 0;
          for (Et = ve.now(); n < t.length; n++)
            (e = t[n])() || t[n] !== e || t.splice(n--, 1);
          t.length || ve.fx.stop(), (Et = void 0);
        }),
        (ve.fx.timer = function (e) {
          ve.timers.push(e), e() ? ve.fx.start() : ve.timers.pop();
        }),
        (ve.fx.interval = 13),
        (ve.fx.start = function () {
          At || (At = n.setInterval(ve.fx.tick, ve.fx.interval));
        }),
        (ve.fx.stop = function () {
          n.clearInterval(At), (At = null);
        }),
        (ve.fx.speeds = {
          slow: 600,
          fast: 200,
          _default: 400,
        }),
        (ve.fn.delay = function (e, t) {
          return (
            (e = ve.fx ? ve.fx.speeds[e] || e : e),
            (t = t || "fx"),
            this.queue(t, function (t, i) {
              var r = n.setTimeout(t, e);
              i.stop = function () {
                n.clearTimeout(r);
              };
            })
          );
        }),
        (function () {
          var e,
            t = se.createElement("input"),
            n = se.createElement("div"),
            i = se.createElement("select"),
            r = i.appendChild(se.createElement("option"));
          (n = se.createElement("div")),
            n.setAttribute("className", "t"),
            (n.innerHTML =
              "  <link/><table></table><a href='a'>a</a><input type='checkbox'/>"),
            (e = n.getElementsByTagName("a")[0]),
            t.setAttribute("type", "checkbox"),
            n.appendChild(t),
            (e = n.getElementsByTagName("a")[0]),
            (e.style.cssText = "top:1px"),
            (me.getSetAttribute = "t" !== n.className),
            (me.style = /top/.test(e.getAttribute("style"))),
            (me.hrefNormalized = "/a" === e.getAttribute("href")),
            (me.checkOn = !!t.value),
            (me.optSelected = r.selected),
            (me.enctype = !!se.createElement("form").enctype),
            (i.disabled = !0),
            (me.optDisabled = !r.disabled),
            (t = se.createElement("input")),
            t.setAttribute("value", ""),
            (me.input = "" === t.getAttribute("value")),
            (t.value = "t"),
            t.setAttribute("type", "radio"),
            (me.radioValue = "t" === t.value);
        })();
      var Mt = /\r/g,
        Pt = /[\x20\t\r\n\f]+/g;
      ve.fn.extend({
        val: function (e) {
          var t,
            n,
            i,
            r = this[0];
          {
            if (arguments.length)
              return (
                (i = ve.isFunction(e)),
                this.each(function (n) {
                  var r;
                  1 === this.nodeType &&
                    ((r = i ? e.call(this, n, ve(this).val()) : e),
                    null == r
                      ? (r = "")
                      : "number" == typeof r
                      ? (r += "")
                      : ve.isArray(r) &&
                        (r = ve.map(r, function (e) {
                          return null == e ? "" : e + "";
                        })),
                    ((t =
                      ve.valHooks[this.type] ||
                      ve.valHooks[this.nodeName.toLowerCase()]) &&
                      "set" in t &&
                      void 0 !== t.set(this, r, "value")) ||
                      (this.value = r));
                })
              );
            if (r)
              return (t =
                ve.valHooks[r.type] || ve.valHooks[r.nodeName.toLowerCase()]) &&
                "get" in t &&
                void 0 !== (n = t.get(r, "value"))
                ? n
                : ((n = r.value),
                  "string" == typeof n
                    ? n.replace(Mt, "")
                    : null == n
                    ? ""
                    : n);
          }
        },
      }),
        ve.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = ve.find.attr(e, "value");
                return null != t ? t : ve.trim(ve.text(e)).replace(Pt, " ");
              },
            },
            select: {
              get: function (e) {
                for (
                  var t,
                    n,
                    i = e.options,
                    r = e.selectedIndex,
                    o = "select-one" === e.type || r < 0,
                    a = o ? null : [],
                    s = o ? r + 1 : i.length,
                    l = r < 0 ? s : o ? r : 0;
                  l < s;
                  l++
                )
                  if (
                    ((n = i[l]),
                    (n.selected || l === r) &&
                      (me.optDisabled
                        ? !n.disabled
                        : null === n.getAttribute("disabled")) &&
                      (!n.parentNode.disabled ||
                        !ve.nodeName(n.parentNode, "optgroup")))
                  ) {
                    if (((t = ve(n).val()), o)) return t;
                    a.push(t);
                  }
                return a;
              },
              set: function (e, t) {
                for (
                  var n, i, r = e.options, o = ve.makeArray(t), a = r.length;
                  a--;

                )
                  if (
                    ((i = r[a]), ve.inArray(ve.valHooks.option.get(i), o) > -1)
                  )
                    try {
                      i.selected = n = !0;
                    } catch (e) {
                      i.scrollHeight;
                    }
                  else i.selected = !1;
                return n || (e.selectedIndex = -1), r;
              },
            },
          },
        }),
        ve.each(["radio", "checkbox"], function () {
          (ve.valHooks[this] = {
            set: function (e, t) {
              if (ve.isArray(t))
                return (e.checked = ve.inArray(ve(e).val(), t) > -1);
            },
          }),
            me.checkOn ||
              (ve.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value;
              });
        });
      var jt,
        qt,
        Ht = ve.expr.attrHandle,
        Ot = /^(?:checked|selected)$/i,
        Ft = me.getSetAttribute,
        It = me.input;
      ve.fn.extend({
        attr: function (e, t) {
          return Re(this, ve.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
          return this.each(function () {
            ve.removeAttr(this, e);
          });
        },
      }),
        ve.extend({
          attr: function (e, t, n) {
            var i,
              r,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return void 0 === e.getAttribute
                ? ve.prop(e, t, n)
                : ((1 === o && ve.isXMLDoc(e)) ||
                    ((t = t.toLowerCase()),
                    (r =
                      ve.attrHooks[t] ||
                      (ve.expr.match.bool.test(t) ? qt : jt))),
                  void 0 !== n
                    ? null === n
                      ? void ve.removeAttr(e, t)
                      : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                      ? i
                      : (e.setAttribute(t, n + ""), n)
                    : r && "get" in r && null !== (i = r.get(e, t))
                    ? i
                    : ((i = ve.find.attr(e, t)), null == i ? void 0 : i));
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (
                  !me.radioValue &&
                  "radio" === t &&
                  ve.nodeName(e, "input")
                ) {
                  var n = e.value;
                  return e.setAttribute("type", t), n && (e.value = n), t;
                }
              },
            },
          },
          removeAttr: function (e, t) {
            var n,
              i,
              r = 0,
              o = t && t.match(Me);
            if (o && 1 === e.nodeType)
              for (; (n = o[r++]); )
                (i = ve.propFix[n] || n),
                  ve.expr.match.bool.test(n)
                    ? (It && Ft) || !Ot.test(n)
                      ? (e[i] = !1)
                      : (e[ve.camelCase("default-" + n)] = e[i] = !1)
                    : ve.attr(e, n, ""),
                  e.removeAttribute(Ft ? n : i);
          },
        }),
        (qt = {
          set: function (e, t, n) {
            return (
              !1 === t
                ? ve.removeAttr(e, n)
                : (It && Ft) || !Ot.test(n)
                ? e.setAttribute((!Ft && ve.propFix[n]) || n, n)
                : (e[ve.camelCase("default-" + n)] = e[n] = !0),
              n
            );
          },
        }),
        ve.each(ve.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = Ht[t] || ve.find.attr;
          (It && Ft) || !Ot.test(t)
            ? (Ht[t] = function (e, t, i) {
                var r, o;
                return (
                  i ||
                    ((o = Ht[t]),
                    (Ht[t] = r),
                    (r = null != n(e, t, i) ? t.toLowerCase() : null),
                    (Ht[t] = o)),
                  r
                );
              })
            : (Ht[t] = function (e, t, n) {
                if (!n)
                  return e[ve.camelCase("default-" + t)]
                    ? t.toLowerCase()
                    : null;
              });
        }),
        (It && Ft) ||
          (ve.attrHooks.value = {
            set: function (e, t, n) {
              if (!ve.nodeName(e, "input")) return jt && jt.set(e, t, n);
              e.defaultValue = t;
            },
          }),
        Ft ||
          ((jt = {
            set: function (e, t, n) {
              var i = e.getAttributeNode(n);
              if (
                (i ||
                  e.setAttributeNode((i = e.ownerDocument.createAttribute(n))),
                (i.value = t += ""),
                "value" === n || t === e.getAttribute(n))
              )
                return t;
            },
          }),
          (Ht.id =
            Ht.name =
            Ht.coords =
              function (e, t, n) {
                var i;
                if (!n)
                  return (i = e.getAttributeNode(t)) && "" !== i.value
                    ? i.value
                    : null;
              }),
          (ve.valHooks.button = {
            get: function (e, t) {
              var n = e.getAttributeNode(t);
              if (n && n.specified) return n.value;
            },
            set: jt.set,
          }),
          (ve.attrHooks.contenteditable = {
            set: function (e, t, n) {
              jt.set(e, "" !== t && t, n);
            },
          }),
          ve.each(["width", "height"], function (e, t) {
            ve.attrHooks[t] = {
              set: function (e, n) {
                if ("" === n) return e.setAttribute(t, "auto"), n;
              },
            };
          })),
        me.style ||
          (ve.attrHooks.style = {
            get: function (e) {
              return e.style.cssText || void 0;
            },
            set: function (e, t) {
              return (e.style.cssText = t + "");
            },
          });
      var _t = /^(?:input|select|textarea|button|object)$/i,
        Wt = /^(?:a|area)$/i;
      ve.fn.extend({
        prop: function (e, t) {
          return Re(this, ve.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
          return (
            (e = ve.propFix[e] || e),
            this.each(function () {
              try {
                (this[e] = void 0), delete this[e];
              } catch (e) {}
            })
          );
        },
      }),
        ve.extend({
          prop: function (e, t, n) {
            var i,
              r,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return (
                (1 === o && ve.isXMLDoc(e)) ||
                  ((t = ve.propFix[t] || t), (r = ve.propHooks[t])),
                void 0 !== n
                  ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                    ? i
                    : (e[t] = n)
                  : r && "get" in r && null !== (i = r.get(e, t))
                  ? i
                  : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = ve.find.attr(e, "tabindex");
                return t
                  ? parseInt(t, 10)
                  : _t.test(e.nodeName) || (Wt.test(e.nodeName) && e.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: {
            for: "htmlFor",
            class: "className",
          },
        }),
        me.hrefNormalized ||
          ve.each(["href", "src"], function (e, t) {
            ve.propHooks[t] = {
              get: function (e) {
                return e.getAttribute(t, 4);
              },
            };
          }),
        me.optSelected ||
          (ve.propHooks.selected = {
            get: function (e) {
              var t = e.parentNode;
              return (
                t &&
                  (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
                null
              );
            },
            set: function (e) {
              var t = e.parentNode;
              t &&
                (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
          }),
        ve.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            ve.propFix[this.toLowerCase()] = this;
          }
        ),
        me.enctype || (ve.propFix.enctype = "encoding");
      var Rt = /[\t\r\n\f]/g;
      ve.fn.extend({
        addClass: function (e) {
          var t,
            n,
            i,
            r,
            o,
            a,
            s,
            l = 0;
          if (ve.isFunction(e))
            return this.each(function (t) {
              ve(this).addClass(e.call(this, t, G(this)));
            });
          if ("string" == typeof e && e)
            for (t = e.match(Me) || []; (n = this[l++]); )
              if (
                ((r = G(n)),
                (i = 1 === n.nodeType && (" " + r + " ").replace(Rt, " ")))
              ) {
                for (a = 0; (o = t[a++]); )
                  i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                (s = ve.trim(i)), r !== s && ve.attr(n, "class", s);
              }
          return this;
        },
        removeClass: function (e) {
          var t,
            n,
            i,
            r,
            o,
            a,
            s,
            l = 0;
          if (ve.isFunction(e))
            return this.each(function (t) {
              ve(this).removeClass(e.call(this, t, G(this)));
            });
          if (!arguments.length) return this.attr("class", "");
          if ("string" == typeof e && e)
            for (t = e.match(Me) || []; (n = this[l++]); )
              if (
                ((r = G(n)),
                (i = 1 === n.nodeType && (" " + r + " ").replace(Rt, " ")))
              ) {
                for (a = 0; (o = t[a++]); )
                  for (; i.indexOf(" " + o + " ") > -1; )
                    i = i.replace(" " + o + " ", " ");
                (s = ve.trim(i)), r !== s && ve.attr(n, "class", s);
              }
          return this;
        },
        toggleClass: function (e, t) {
          var n = typeof e;
          return "boolean" == typeof t && "string" === n
            ? t
              ? this.addClass(e)
              : this.removeClass(e)
            : ve.isFunction(e)
            ? this.each(function (n) {
                ve(this).toggleClass(e.call(this, n, G(this), t), t);
              })
            : this.each(function () {
                var t, i, r, o;
                if ("string" === n)
                  for (
                    i = 0, r = ve(this), o = e.match(Me) || [];
                    (t = o[i++]);

                  )
                    r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else
                  (void 0 !== e && "boolean" !== n) ||
                    ((t = G(this)),
                    t && ve._data(this, "__className__", t),
                    ve.attr(
                      this,
                      "class",
                      t || !1 === e ? "" : ve._data(this, "__className__") || ""
                    ));
              });
        },
        hasClass: function (e) {
          var t,
            n,
            i = 0;
          for (t = " " + e + " "; (n = this[i++]); )
            if (
              1 === n.nodeType &&
              (" " + G(n) + " ").replace(Rt, " ").indexOf(t) > -1
            )
              return !0;
          return !1;
        },
      }),
        ve.each(
          "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
            " "
          ),
          function (e, t) {
            ve.fn[t] = function (e, n) {
              return arguments.length > 0
                ? this.on(t, null, e, n)
                : this.trigger(t);
            };
          }
        ),
        (ve.fn.andSelf = ve.fn.addBack),
        (i = []),
        void 0 !==
          (r = function () {
            return ve;
          }.apply(t, i)) && (e.exports = r);
      var vn = n.jQuery,
        gn = n.$;
      return (
        (ve.noConflict = function (e) {
          return (
            n.$ === ve && (n.$ = gn),
            e && n.jQuery === ve && (n.jQuery = vn),
            ve
          );
        }),
        o || (n.jQuery = n.$ = ve),
        ve
      );
    });
  },
  function (e, t, n) { },
  function (e, t) {},
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    (function (e) {
      n(34),
        e(function () {
          e("#footer").on("click", ".btn-qrcode", function (t) {
            t.preventDefault(), t.stopPropagation();
            var n = (e(this), e("#header .popup-qrcode"));
            n.hasClass("active")
              ? n.removeClass("active")
              : n.addClass("active"),
              e(document).on("click.qrcode", function (t) {
                t.preventDefault(),
                  t.stopPropagation(),
                  n.removeClass("active"),
                  e(document).off("click.qrcode");
              });
          });
        });
    }.call(t, n(1)));
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      n(35),
        e(function () {
          function t(e) {
            e[0] &&
              ((a = e.width()),
              (l = e.scrollLeft()),
              (s = e[0].scrollWidth),
              (u = s - a),
              i());
          }
          function n(e, t) {
            if (!d) {
              d = !0;
              var n = Math.floor(c * a + 0.5);
              (l =
                "prev" === t ? (l - n > 0 ? l - n : 0) : l + n < u ? l + n : u),
                e.animate(
                  {
                    scrollLeft: l + "px",
                  },
                  500,
                  function () {
                    d = !1;
                  }
                );
            }
          }
          function i() {
            l == u && r.find(".sub-menu .sub-menu-next").hide(),
              0 == l && r.find(".sub-menu .sub-menu-prev").hide(),
              l > 0 && r.find(".sub-menu .sub-menu-prev").show(),
              l < u && r.find(".sub-menu .sub-menu-next").show();
          }
          var r = e("#header"),
            o = e("#mb-menu"),
            a = 0,
            s = 0,
            l = 0,
            u = 0,
            c = 0.6,
            d = !1;
          r.find(".sub-menu-tabs .sub-menu-item").eq(0).addClass("active"),
            r.find(".sub-menu-main .sub-menu-item").eq(0).addClass("active"),
            r.on("click", '[data-toggle="search"]', function (e) {
              e.preventDefault(),
                e.stopPropagation(),
                r.hasClass("unfold")
                  ? r.removeClass("unfold")
                  : r.addClass("unfold");
            }),
            r.on("mouseenter", ".pc-menu .menu-item", function (n) {
              n.preventDefault(), n.stopPropagation();
              var i = e(n.currentTarget).data("menu"),
                o = i ? r.find('[data-role="' + i + '"]') : null;
              return o
                ? o.hasClass("active")
                  ? void r.find(".sub-menu").removeClass("active")
                  : (o.addClass("active").siblings().removeClass("active"),
                    void t(o.find(".sub-menu-main .sub-menu-item.active")))
                : void r.find(".sub-menu").removeClass("active");
            }),
            r.on("mouseleave", ".sub-menu", function (e) {
              r.find(".sub-menu").removeClass("active");
            }),
            r.on("mouseleave", function (e) {
              r.find(".sub-menu").removeClass("active");
            }),
            r.on("mouseenter", ".sub-menu-tabs .sub-menu-item", function (n) {
              n.preventDefault(), n.stopPropagation();
              var i = e(n.currentTarget),
                r = i.index(),
                o = i.closest(".sub-menu");
              o
                .find(".sub-menu-tabs .sub-menu-item")
                .removeClass("active")
                .eq(r)
                .addClass("active"),
                o
                  .find(".sub-menu-main .sub-menu-item")
                  .removeClass("active")
                  .eq(r)
                  .addClass("active"),
                t(o.find(".sub-menu-main .sub-menu-item.active"));
            }),
            r.find(".sub-menu-item").scroll(function (t) {
              (l = e(t.currentTarget).scrollLeft()), i();
            }),
            r.on("click", ".sub-menu .sub-menu-prev", function (t) {
              n(e(t.currentTarget).siblings(".sub-menu-item.active"), "prev");
            }),
            r.on("click", ".sub-menu .sub-menu-next", function (t) {
              n(e(t.currentTarget).siblings(".sub-menu-item.active"), "next");
            }),
            r.on("click", '[data-toggle="menu"]', function (e) {
              e.preventDefault(),
                e.stopPropagation(),
                o.hasClass("unfold")
                  ? o.removeClass("unfold")
                  : o.addClass("unfold");
            }),
            r.on("click", ".btn-qrcode", function (t) {
              t.preventDefault(), t.stopPropagation();
              var n = (e(this), r.find(".popup-qrcode"));
              n.hasClass("active")
                ? n.removeClass("active")
                : n.addClass("active"),
                e(document).on("click.qrcode", function (t) {
                  t.preventDefault(),
                    t.stopPropagation(),
                    n.removeClass("active"),
                    e(document).off("click.qrcode");
                });
            }),
            r.on("click", ".mb-menu .menu-icon", function (t) {
              t.preventDefault(), t.stopPropagation();
              var n = e(t.currentTarget).closest(".menu-item");
              n.hasClass("unfold")
                ? n.removeClass("unfold").find(".unfold").removeClass("unfold")
                : n.addClass("unfold");
            }),
            e(window).scroll(function () {
            });
        });
    }.call(t, n(1)));
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      n(36),
        n(18),
        n(17),
        e(function () {
          function t() {
          }
          var n = e("#gotop");
          n.on("click", function () {
            e("html, body").animate({
              scrollTop: 0,
            });
          }),
            t();
        });
    }.call(t, n(1)));
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t, n) {
  },
  function (e, t) {
  },
  function (e, t, n) {
  },
  function (e, t, n) {
  },
  function (e, t, n) {
  },
]);
