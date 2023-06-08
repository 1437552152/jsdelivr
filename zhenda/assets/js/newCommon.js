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
        var t = !!e && "length" in e && e.length,
          n = ve.type(e);
        return (
          "function" !== n &&
          !ve.isWindow(e) &&
          ("array" === n ||
            0 === t ||
            ("number" == typeof t && t > 0 && t - 1 in e))
        );
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
      function D(e, t) {
        if (1 === t.nodeType && ve.hasData(e)) {
          var n,
            i,
            r,
            o = ve._data(e),
            a = ve._data(t, o),
            s = o.events;
          if (s) {
            delete a.handle, (a.events = {});
            for (n in s)
              for (i = 0, r = s[n].length; i < r; i++)
                ve.event.add(t, n, s[n][i]);
          }
          a.data && (a.data = ve.extend({}, a.data));
        }
      }
      function L(e, t) {
        var n, i, r;
        if (1 === t.nodeType) {
          if (
            ((n = t.nodeName.toLowerCase()), !me.noCloneEvent && t[ve.expando])
          ) {
            r = ve._data(t);
            for (i in r.events) ve.removeEvent(t, i, r.handle);
            t.removeAttribute(ve.expando);
          }
          "script" === n && t.text !== e.text
            ? ((E(t).text = e.text), A(t))
            : "object" === n
            ? (t.parentNode && (t.outerHTML = e.outerHTML),
              me.html5Clone &&
                e.innerHTML &&
                !ve.trim(t.innerHTML) &&
                (t.innerHTML = e.innerHTML))
            : "input" === n && ze.test(e.type)
            ? ((t.defaultChecked = t.checked = e.checked),
              t.value !== e.value && (t.value = e.value))
            : "option" === n
            ? (t.defaultSelected = t.selected = e.defaultSelected)
            : ("input" !== n && "textarea" !== n) ||
              (t.defaultValue = e.defaultValue);
        }
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
              var n = 0,
                i = t ? u.tweens.length : 0;
              if (r) return this;
              for (r = !0; n < i; n++) u.tweens[n].run(1);
              return (
                t
                  ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t]))
                  : s.rejectWith(e, [u, t]),
                this
              );
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
        function r(s) {
          var l;
          return (
            (o[s] = !0),
            ve.each(e[s] || [], function (e, s) {
              var u = s(t, n, i);
              return "string" != typeof u || a || o[u]
                ? a
                  ? !(l = u)
                  : void 0
                : (t.dataTypes.unshift(u), r(u), !1);
            }),
            l
          );
        }
        var o = {},
          a = e === en;
        return r(t.dataTypes[0]) || (!o["*"] && r("*"));
      }
      function K(e, t) {
        var n,
          i,
          r = ve.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
        return n && ve.extend(!0, e, n), e;
      }
      function Q(e, t, n) {
        for (var i, r, o, a, s = e.contents, l = e.dataTypes; "*" === l[0]; )
          l.shift(),
            void 0 === r &&
              (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
          for (a in s)
            if (s[a] && s[a].test(r)) {
              l.unshift(a);
              break;
            }
        if (l[0] in n) o = l[0];
        else {
          for (a in n) {
            if (!l[0] || e.converters[a + " " + l[0]]) {
              o = a;
              break;
            }
            i || (i = a);
          }
          o = o || i;
        }
        if (o) return o !== l[0] && l.unshift(o), n[o];
      }
      function Z(e, t, n, i) {
        var r,
          o,
          a,
          s,
          l,
          u = {},
          c = e.dataTypes.slice();
        if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o; )
          if (
            (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            (l = o),
            (o = c.shift()))
          )
            if ("*" === o) o = l;
            else if ("*" !== l && l !== o) {
              if (!(a = u[l + " " + o] || u["* " + o]))
                for (r in u)
                  if (
                    ((s = r.split(" ")),
                    s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]]))
                  ) {
                    !0 === a
                      ? (a = u[r])
                      : !0 !== u[r] && ((o = s[0]), c.unshift(s[1]));
                    break;
                  }
              if (!0 !== a)
                if (a && e.throws) t = a(t);
                else
                  try {
                    t = a(t);
                  } catch (e) {
                    return {
                      state: "parsererror",
                      error: a ? e : "No conversion from " + l + " to " + o,
                    };
                  }
            }
        return {
          state: "success",
          data: t,
        };
      }
      function ee(e) {
        return (e.style && e.style.display) || ve.css(e, "display");
      }
      function te(e) {
        if (!ve.contains(e.ownerDocument || se, e)) return !0;
        for (; e && 1 === e.nodeType; ) {
          if ("none" === ee(e) || "hidden" === e.type) return !0;
          e = e.parentNode;
        }
        return !1;
      }
      function ne(e, t, n, i) {
        var r;
        if (ve.isArray(t))
          ve.each(t, function (t, r) {
            n || an.test(e)
              ? i(e, r)
              : ne(
                  e + "[" + ("object" == typeof r && null != r ? t : "") + "]",
                  r,
                  n,
                  i
                );
          });
        else if (n || "object" !== ve.type(t)) i(e, t);
        else for (r in t) ne(e + "[" + r + "]", t[r], n, i);
      }
      function ie() {
        try {
          return new n.XMLHttpRequest();
        } catch (e) {}
      }
      function re() {
        try {
          return new n.ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {}
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
            var n, i, r;
            if (
              ("string" == typeof t && ((r = e[t]), (t = e), (e = r)),
              ve.isFunction(e))
            )
              return (
                (n = le.call(arguments, 2)),
                (i = function () {
                  return e.apply(t || this, n.concat(le.call(arguments)));
                }),
                (i.guid = e.guid = e.guid || ve.guid++),
                i
              );
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
            var n = t && e,
              i =
                n &&
                1 === e.nodeType &&
                1 === t.nodeType &&
                (~t.sourceIndex || $) - (~e.sourceIndex || $);
            if (i) return i;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function s(e) {
            return i(function (t) {
              return (
                (t = +t),
                i(function (n, i) {
                  for (var r, o = e([], n.length, t), a = o.length; a--; )
                    n[(r = o[a])] && (n[r] = !(i[r] = n[r]));
                })
              );
            });
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
            for (var r = 0, o = n.length; r < o; r++) t(e, n[r], i);
            return i;
          }
          function h(e, t, n, i, r) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++)
              (o = e[s]) && ((n && !n(o, i, r)) || (a.push(o), u && t.push(s)));
            return a;
          }
          function m(e, t, n, r, o, a) {
            return (
              r && !r[F] && (r = m(r)),
              o && !o[F] && (o = m(o, a)),
              i(function (i, a, s, l) {
                var u,
                  c,
                  d,
                  f = [],
                  m = [],
                  v = a.length,
                  g = i || p(t || "*", s.nodeType ? [s] : s, []),
                  y = !e || (!i && t) ? g : h(g, f, e, s, l),
                  b = n ? (o || (i ? e : v || r) ? [] : a) : y;
                if ((n && n(y, b, s, l), r))
                  for (u = h(b, m), r(u, [], s, l), c = u.length; c--; )
                    (d = u[c]) && (b[m[c]] = !(y[m[c]] = d));
                if (i) {
                  if (o || e) {
                    if (o) {
                      for (u = [], c = b.length; c--; )
                        (d = b[c]) && u.push((y[c] = d));
                      o(null, (b = []), u, l);
                    }
                    for (c = b.length; c--; )
                      (d = b[c]) &&
                        (u = o ? Q(i, d) : f[c]) > -1 &&
                        (i[u] = !(a[u] = d));
                  }
                } else (b = h(b === a ? b.splice(v, b.length) : b)), o ? o(null, a, b, l) : J.apply(a, b);
              })
            );
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
                  for (i = ++s; i < r && !x.relative[e[i].type]; i++);
                  return m(
                    s > 1 && f(p),
                    s > 1 &&
                      c(
                        e.slice(0, s - 1).concat({
                          value: " " === e[s - 2].type ? "*" : "",
                        })
                      ).replace(oe, "$1"),
                    n,
                    s < i && v(e.slice(s, i)),
                    i < r && v((e = e.slice(i))),
                    i < r && c(e)
                  );
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
                  for (d = 0; (f = n[d++]); ) f(v, g, a, s);
                  if (i) {
                    if (p > 0) for (; m--; ) v[m] || g[m] || (g[m] = G.call(l));
                    g = h(g);
                  }
                  J.apply(l, g),
                    u &&
                      !i &&
                      g.length > 0 &&
                      p + n.length > 1 &&
                      t.uniqueSort(l);
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
              for (var n = 0, i = e.length; n < i; n++)
                if (e[n] === t) return n;
              return -1;
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
              var i = "0x" + t - 65536;
              return i !== i || n
                ? t
                : i < 0
                ? String.fromCharCode(i + 65536)
                : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
            },
            xe = function () {
              D();
            };
          try {
            J.apply((U = K.call(I.childNodes)), I.childNodes),
              U[I.childNodes.length].nodeType;
          } catch (e) {
            J = {
              apply: U.length
                ? function (e, t) {
                    Y.apply(e, K.call(t));
                  }
                : function (e, t) {
                    for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                    e.length = n - 1;
                  },
            };
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
                          if (void 0 !== t.getElementById && P) {
                            var n = t.getElementById(e);
                            return n ? [n] : [];
                          }
                        }),
                        (x.filter.ID = function (e) {
                          var t = e.replace(ye, be);
                          return function (e) {
                            return e.getAttribute("id") === t;
                          };
                        }))
                      : (delete x.find.ID,
                        (x.filter.ID = function (e) {
                          var t = e.replace(ye, be);
                          return function (e) {
                            var n =
                              void 0 !== e.getAttributeNode &&
                              e.getAttributeNode("id");
                            return n && n.value === t;
                          };
                        })),
                    (x.find.TAG = b.getElementsByTagName
                      ? function (e, t) {
                          return void 0 !== t.getElementsByTagName
                            ? t.getElementsByTagName(e)
                            : b.qsa
                            ? t.querySelectorAll(e)
                            : void 0;
                        }
                      : function (e, t) {
                          var n,
                            i = [],
                            r = 0,
                            o = t.getElementsByTagName(e);
                          if ("*" === e) {
                            for (; (n = o[r++]); )
                              1 === n.nodeType && i.push(n);
                            return i;
                          }
                          return o;
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
                          if (e === t) return (A = !0), 0;
                          var n =
                            !e.compareDocumentPosition -
                            !t.compareDocumentPosition;
                          return (
                            n ||
                            ((n =
                              (e.ownerDocument || e) === (t.ownerDocument || t)
                                ? e.compareDocumentPosition(t)
                                : 1),
                            1 & n ||
                            (!b.sortDetached &&
                              t.compareDocumentPosition(e) === n)
                              ? e === L || (e.ownerDocument === I && O(I, e))
                                ? -1
                                : t === L || (t.ownerDocument === I && O(I, t))
                                ? 1
                                : E
                                ? Q(E, e) - Q(E, t)
                                : 0
                              : 4 & n
                              ? -1
                              : 1)
                          );
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
              if (
                ((e.ownerDocument || e) !== L && D(e),
                (n = n.replace(le, "='$1']")),
                b.matchesSelector &&
                  P &&
                  !B[n + " "] &&
                  (!q || !q.test(n)) &&
                  (!j || !j.test(n)))
              )
                try {
                  var i = H.call(e, n);
                  if (
                    i ||
                    b.disconnectedMatch ||
                    (e.document && 11 !== e.document.nodeType)
                  )
                    return i;
                } catch (e) {}
              return t(n, L, null, [e]).length > 0;
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
              var t,
                n = [],
                i = 0,
                r = 0;
              if (
                ((A = !b.detectDuplicates),
                (E = !b.sortStable && e.slice(0)),
                e.sort(V),
                A)
              ) {
                for (; (t = e[r++]); ) t === e[r] && (i = n.push(r));
                for (; i--; ) e.splice(n[i], 1);
              }
              return (E = null), e;
            }),
            (w = t.getText =
              function (e) {
                var t,
                  n = "",
                  i = 0,
                  r = e.nodeType;
                if (r) {
                  if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += w(e);
                  } else if (3 === r || 4 === r) return e.nodeValue;
                } else for (; (t = e[i++]); ) n += w(t);
                return n;
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
                    return (
                      (e[1] = e[1].toLowerCase()),
                      "nth" === e[1].slice(0, 3)
                        ? (e[3] || t.error(e[0]),
                          (e[4] = +(e[4]
                            ? e[5] + (e[6] || 1)
                            : 2 * ("even" === e[3] || "odd" === e[3]))),
                          (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                        : e[3] && t.error(e[0]),
                      e
                    );
                  },
                  PSEUDO: function (e) {
                    var t,
                      n = !e[6] && e[2];
                    return de.CHILD.test(e[0])
                      ? null
                      : (e[3]
                          ? (e[2] = e[4] || e[5] || "")
                          : n &&
                            ue.test(n) &&
                            (t = C(n, !0)) &&
                            (t = n.indexOf(")", n.length - t) - n.length) &&
                            ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                        e.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (e) {
                    var t = e.replace(ye, be).toLowerCase();
                    return "*" === e
                      ? function () {
                          return !0;
                        }
                      : function (e) {
                          return e.nodeName && e.nodeName.toLowerCase() === t;
                        };
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
                    var o = "nth" !== e.slice(0, 3),
                      a = "last" !== e.slice(-4),
                      s = "of-type" === t;
                    return 1 === i && 0 === r
                      ? function (e) {
                          return !!e.parentNode;
                        }
                      : function (t, n, l) {
                          var u,
                            c,
                            d,
                            f,
                            p,
                            h,
                            m = o !== a ? "nextSibling" : "previousSibling",
                            v = t.parentNode,
                            g = s && t.nodeName.toLowerCase(),
                            y = !l && !s,
                            b = !1;
                          if (v) {
                            if (o) {
                              for (; m; ) {
                                for (f = t; (f = f[m]); )
                                  if (
                                    s
                                      ? f.nodeName.toLowerCase() === g
                                      : 1 === f.nodeType
                                  )
                                    return !1;
                                h = m = "only" === e && !h && "nextSibling";
                              }
                              return !0;
                            }
                            if (
                              ((h = [a ? v.firstChild : v.lastChild]), a && y)
                            ) {
                              for (
                                f = v,
                                  d = f[F] || (f[F] = {}),
                                  c = d[f.uniqueID] || (d[f.uniqueID] = {}),
                                  u = c[e] || [],
                                  p = u[0] === _ && u[1],
                                  b = p && u[2],
                                  f = p && v.childNodes[p];
                                (f =
                                  (++p && f && f[m]) || (b = p = 0) || h.pop());

                              )
                                if (1 === f.nodeType && ++b && f === t) {
                                  c[e] = [_, p, b];
                                  break;
                                }
                            } else if (
                              (y &&
                                ((f = t),
                                (d = f[F] || (f[F] = {})),
                                (c = d[f.uniqueID] || (d[f.uniqueID] = {})),
                                (u = c[e] || []),
                                (p = u[0] === _ && u[1]),
                                (b = p)),
                              !1 === b)
                            )
                              for (
                                ;
                                (f =
                                  (++p && f && f[m]) ||
                                  (b = p = 0) ||
                                  h.pop()) &&
                                ((s
                                  ? f.nodeName.toLowerCase() !== g
                                  : 1 !== f.nodeType) ||
                                  !++b ||
                                  (y &&
                                    ((d = f[F] || (f[F] = {})),
                                    (c = d[f.uniqueID] || (d[f.uniqueID] = {})),
                                    (c[e] = [_, b])),
                                  f !== t));

                              );
                            return (b -= r) === i || (b % i == 0 && b / i >= 0);
                          }
                        };
                  },
                  PSEUDO: function (e, n) {
                    var r,
                      o =
                        x.pseudos[e] ||
                        x.setFilters[e.toLowerCase()] ||
                        t.error("unsupported pseudo: " + e);
                    return o[F]
                      ? o(n)
                      : o.length > 1
                      ? ((r = [e, e, "", n]),
                        x.setFilters.hasOwnProperty(e.toLowerCase())
                          ? i(function (e, t) {
                              for (var i, r = o(e, n), a = r.length; a--; )
                                (i = Q(e, r[a])), (e[i] = !(t[i] = r[a]));
                            })
                          : function (e) {
                              return o(e, 0, r);
                            })
                      : o;
                  },
                },
                pseudos: {
                  not: i(function (e) {
                    var t = [],
                      n = [],
                      r = S(e.replace(oe, "$1"));
                    return r[F]
                      ? i(function (e, t, n, i) {
                          for (
                            var o, a = r(e, null, i, []), s = e.length;
                            s--;

                          )
                            (o = a[s]) && (e[s] = !(t[s] = o));
                        })
                      : function (e, i, o) {
                          return (
                            (t[0] = e),
                            r(t, null, o, n),
                            (t[0] = null),
                            !n.pop()
                          );
                        };
                  }),
                  has: i(function (e) {
                    return function (n) {
                      return t(e, n).length > 0;
                    };
                  }),
                  contains: i(function (e) {
                    return (
                      (e = e.replace(ye, be)),
                      function (t) {
                        return (
                          (t.textContent || t.innerText || w(t)).indexOf(e) > -1
                        );
                      }
                    );
                  }),
                  lang: i(function (e) {
                    return (
                      ce.test(e || "") || t.error("unsupported lang: " + e),
                      (e = e.replace(ye, be).toLowerCase()),
                      function (t) {
                        var n;
                        do {
                          if (
                            (n = P
                              ? t.lang
                              : t.getAttribute("xml:lang") ||
                                t.getAttribute("lang"))
                          )
                            return (
                              (n = n.toLowerCase()) === e ||
                              0 === n.indexOf(e + "-")
                            );
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                  },
                  root: function (e) {
                    return e === M;
                  },
                  focus: function (e) {
                    return (
                      e === L.activeElement &&
                      (!L.hasFocus || L.hasFocus()) &&
                      !!(e.type || e.href || ~e.tabIndex)
                    );
                  },
                  enabled: function (e) {
                    return !1 === e.disabled;
                  },
                  disabled: function (e) {
                    return !0 === e.disabled;
                  },
                  checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && !!e.checked) ||
                      ("option" === t && !!e.selected)
                    );
                  },
                  selected: function (e) {
                    return (
                      e.parentNode && e.parentNode.selectedIndex,
                      !0 === e.selected
                    );
                  },
                  empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                    return !0;
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
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && "button" === e.type) || "button" === t
                    );
                  },
                  text: function (e) {
                    var t;
                    return (
                      "input" === e.nodeName.toLowerCase() &&
                      "text" === e.type &&
                      (null == (t = e.getAttribute("type")) ||
                        "text" === t.toLowerCase())
                    );
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
                  if (
                    ((o = f[0] = f[0].slice(0)),
                    o.length > 2 &&
                      "ID" === (a = o[0]).type &&
                      b.getById &&
                      9 === t.nodeType &&
                      P &&
                      x.relative[o[1].type])
                  ) {
                    if (
                      !(t = (x.find.ID(a.matches[0].replace(ye, be), t) ||
                        [])[0])
                    )
                      return n;
                    d && (t = t.parentNode),
                      (e = e.slice(o.shift().value.length));
                  }
                  for (
                    r = de.needsContext.test(e) ? 0 : o.length;
                    r-- && ((a = o[r]), !x.relative[(s = a.type)]);

                  )
                    if (
                      (u = x.find[s]) &&
                      (i = u(
                        a.matches[0].replace(ye, be),
                        (ve.test(o[0].type) && l(t.parentNode)) || t
                      ))
                    ) {
                      if ((o.splice(r, 1), !(e = i.length && c(o))))
                        return J.apply(n, i), n;
                      break;
                    }
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
                var i;
                if (!n)
                  return !0 === e[t]
                    ? t.toLowerCase()
                    : (i = e.getAttributeNode(t)) && i.specified
                    ? i.value
                    : null;
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
          for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
              if (r && ve(e).is(n)) break;
              i.push(e);
            }
          return i;
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
        var i = t[0];
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length && 1 === i.nodeType
            ? ve.find.matchesSelector(i, e)
              ? [i]
              : []
            : ve.find.matches(
                e,
                ve.grep(t, function (e) {
                  return 1 === e.nodeType;
                })
              )
        );
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
            if (
              ((t = t instanceof ve ? t[0] : t),
              ve.merge(
                this,
                ve.parseHTML(
                  i[1],
                  t && t.nodeType ? t.ownerDocument || t : se,
                  !0
                )
              ),
              Ne.test(i[1]) && ve.isPlainObject(t))
            )
              for (i in t)
                ve.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this;
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
          var t,
            n = ve(e, this),
            i = n.length;
          return this.filter(function () {
            for (t = 0; t < i; t++) if (ve.contains(this, n[t])) return !0;
          });
        },
        closest: function (e, t) {
          for (
            var n,
              i = 0,
              r = this.length,
              o = [],
              a =
                Se.test(e) || "string" != typeof e
                  ? ve(e, t || this.context)
                  : 0;
            i < r;
            i++
          )
            for (n = this[i]; n && n !== t; n = n.parentNode)
              if (
                n.nodeType < 11 &&
                (a
                  ? a.index(n) > -1
                  : 1 === n.nodeType && ve.find.matchesSelector(n, e))
              ) {
                o.push(n);
                break;
              }
          return this.pushStack(o.length > 1 ? ve.uniqueSort(o) : o);
        },
        index: function (e) {
          return e
            ? "string" == typeof e
              ? ve.inArray(this[0], ve(e))
              : ve.inArray(e.jquery ? e[0] : e, this)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (e, t) {
          return this.pushStack(ve.uniqueSort(ve.merge(this.get(), ve(e, t))));
        },
        addBack: function (e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e)
          );
        },
      }),
        ve.each(
          {
            parent: function (e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
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
            ve.fn[e] = function (n, i) {
              var r = ve.map(this, t, n);
              return (
                "Until" !== e.slice(-5) && (i = n),
                i && "string" == typeof i && (r = ve.filter(i, r)),
                this.length > 1 &&
                  (Le[e] || (r = ve.uniqueSort(r)),
                  De.test(e) && (r = r.reverse())),
                this.pushStack(r)
              );
            };
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
              return (
                ve.each(arguments, function (e, t) {
                  for (var n; (n = ve.inArray(t, o, n)) > -1; )
                    o.splice(n, 1), n <= s && s--;
                }),
                this
              );
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
                  var e = arguments;
                  return ve
                    .Deferred(function (n) {
                      ve.each(t, function (t, o) {
                        var a = ve.isFunction(e[t]) && e[t];
                        r[o[1]](function () {
                          var e = a && a.apply(this, arguments);
                          e && ve.isFunction(e.promise)
                            ? e
                                .promise()
                                .progress(n.notify)
                                .done(n.resolve)
                                .fail(n.reject)
                            : n[o[0] + "With"](
                                this === i ? n.promise() : this,
                                a ? [e] : arguments
                              );
                        });
                      }),
                        (e = null);
                    })
                    .promise();
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
            var t,
              n,
              i,
              r = 0,
              o = le.call(arguments),
              a = o.length,
              s = 1 !== a || (e && ve.isFunction(e.promise)) ? a : 0,
              l = 1 === s ? e : ve.Deferred(),
              u = function (e, n, i) {
                return function (r) {
                  (n[e] = this),
                    (i[e] = arguments.length > 1 ? le.call(arguments) : r),
                    i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i);
                };
              };
            if (a > 1)
              for (
                t = new Array(a), n = new Array(a), i = new Array(a);
                r < a;
                r++
              )
                o[r] && ve.isFunction(o[r].promise)
                  ? o[r]
                      .promise()
                      .progress(u(r, n, t))
                      .done(u(r, i, o))
                      .fail(l.reject)
                  : --s;
            return s || l.resolveWith(i, o), l.promise();
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
              se.attachEvent("onreadystatechange", d),
                n.attachEvent("onload", d);
              var t = !1;
              try {
                t = null == n.frameElement && se.documentElement;
              } catch (e) {}
              t &&
                t.doScroll &&
                (function e() {
                  if (!ve.isReady) {
                    try {
                      t.doScroll("left");
                    } catch (t) {
                      return n.setTimeout(e, 50);
                    }
                    c(), ve.ready();
                  }
                })();
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
            var n,
              i,
              r,
              o = this[0],
              a = o && o.attributes;
            if (void 0 === e) {
              if (
                this.length &&
                ((r = ve.data(o)),
                1 === o.nodeType && !ve._data(o, "parsedAttrs"))
              ) {
                for (n = a.length; n--; )
                  a[n] &&
                    ((i = a[n].name),
                    0 === i.indexOf("data-") &&
                      ((i = ve.camelCase(i.slice(5))), f(o, i, r[i])));
                ve._data(o, "parsedAttrs", !0);
              }
              return r;
            }
            return "object" == typeof e
              ? this.each(function () {
                  ve.data(this, e);
                })
              : arguments.length > 1
              ? this.each(function () {
                  ve.data(this, e, t);
                })
              : o
              ? f(o, e, ve.data(o, e))
              : void 0;
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
            var n,
              i = 1,
              r = ve.Deferred(),
              o = this,
              a = this.length,
              s = function () {
                --i || r.resolveWith(o, [o]);
              };
            for (
              "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
              a--;

            )
              (n = ve._data(o[a], e + "queueHooks")) &&
                n.empty &&
                (i++, n.empty.add(s));
            return s(), r.promise(t);
          },
        }),
        (function () {
          var e;
          me.shrinkWrapBlocks = function () {
            if (null != e) return e;
            e = !1;
            var t, n, i;
            return (n = se.getElementsByTagName("body")[0]) && n.style
              ? ((t = se.createElement("div")),
                (i = se.createElement("div")),
                (i.style.cssText =
                  "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                n.appendChild(i).appendChild(t),
                void 0 !== t.style.zoom &&
                  ((t.style.cssText =
                    "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                  (t.appendChild(se.createElement("div")).style.width = "5px"),
                  (e = 3 !== t.offsetWidth)),
                n.removeChild(i),
                e)
              : void 0;
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
            v = ve.hasData(e) && ve._data(e);
          if (v && (c = v.events)) {
            for (t = (t || "").match(Me) || [""], u = t.length; u--; )
              if (
                ((s = et.exec(t[u]) || []),
                (p = m = s[1]),
                (h = (s[2] || "").split(".").sort()),
                p)
              ) {
                for (
                  d = ve.event.special[p] || {},
                    p = (i ? d.delegateType : d.bindType) || p,
                    f = c[p] || [],
                    s =
                      s[2] &&
                      new RegExp(
                        "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      ),
                    l = o = f.length;
                  o--;

                )
                  (a = f[o]),
                    (!r && m !== a.origType) ||
                      (n && n.guid !== a.guid) ||
                      (s && !s.test(a.namespace)) ||
                      (i && i !== a.selector && ("**" !== i || !a.selector)) ||
                      (f.splice(o, 1),
                      a.selector && f.delegateCount--,
                      d.remove && d.remove.call(e, a));
                l &&
                  !f.length &&
                  ((d.teardown && !1 !== d.teardown.call(e, h, v.handle)) ||
                    ve.removeEvent(e, p, v.handle),
                  delete c[p]);
              } else for (p in c) ve.event.remove(e, p + t[u], n, i, !0);
            ve.isEmptyObject(c) &&
              (delete v.handle, ve._removeData(e, "events"));
          }
        },
        trigger: function (e, t, i, r) {
          var o,
            a,
            s,
            l,
            u,
            c,
            d,
            f = [i || se],
            p = he.call(e, "type") ? e.type : e,
            h = he.call(e, "namespace") ? e.namespace.split(".") : [];
          if (
            ((s = c = i = i || se),
            3 !== i.nodeType &&
              8 !== i.nodeType &&
              !Ze.test(p + ve.event.triggered) &&
              (p.indexOf(".") > -1 &&
                ((h = p.split(".")), (p = h.shift()), h.sort()),
              (a = p.indexOf(":") < 0 && "on" + p),
              (e = e[ve.expando]
                ? e
                : new ve.Event(p, "object" == typeof e && e)),
              (e.isTrigger = r ? 2 : 3),
              (e.namespace = h.join(".")),
              (e.rnamespace = e.namespace
                ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (e.result = void 0),
              e.target || (e.target = i),
              (t = null == t ? [e] : ve.makeArray(t, [e])),
              (u = ve.event.special[p] || {}),
              r || !u.trigger || !1 !== u.trigger.apply(i, t)))
          ) {
            if (!r && !u.noBubble && !ve.isWindow(i)) {
              for (
                l = u.delegateType || p, Ze.test(l + p) || (s = s.parentNode);
                s;
                s = s.parentNode
              )
                f.push(s), (c = s);
              c === (i.ownerDocument || se) &&
                f.push(c.defaultView || c.parentWindow || n);
            }
            for (d = 0; (s = f[d++]) && !e.isPropagationStopped(); )
              (e.type = d > 1 ? l : u.bindType || p),
                (o =
                  (ve._data(s, "events") || {})[e.type] &&
                  ve._data(s, "handle")),
                o && o.apply(s, t),
                (o = a && s[a]) &&
                  o.apply &&
                  qe(s) &&
                  ((e.result = o.apply(s, t)),
                  !1 === e.result && e.preventDefault());
            if (
              ((e.type = p),
              !r &&
                !e.isDefaultPrevented() &&
                (!u._default || !1 === u._default.apply(f.pop(), t)) &&
                qe(i) &&
                a &&
                i[p] &&
                !ve.isWindow(i))
            ) {
              (c = i[a]), c && (i[a] = null), (ve.event.triggered = p);
              try {
                i[p]();
              } catch (e) {}
              (ve.event.triggered = void 0), c && (i[a] = c);
            }
            return e.result;
          }
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
            return (
              null == e.which &&
                (e.which = null != t.charCode ? t.charCode : t.keyCode),
              e
            );
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
        me.submit ||
          (ve.event.special.submit = {
            setup: function () {
              if (ve.nodeName(this, "form")) return !1;
              ve.event.add(
                this,
                "click._submit keypress._submit",
                function (e) {
                  var t = e.target,
                    n =
                      ve.nodeName(t, "input") || ve.nodeName(t, "button")
                        ? ve.prop(t, "form")
                        : void 0;
                  n &&
                    !ve._data(n, "submit") &&
                    (ve.event.add(n, "submit._submit", function (e) {
                      e._submitBubble = !0;
                    }),
                    ve._data(n, "submit", !0));
                }
              );
            },
            postDispatch: function (e) {
              e._submitBubble &&
                (delete e._submitBubble,
                this.parentNode &&
                  !e.isTrigger &&
                  ve.event.simulate("submit", this.parentNode, e));
            },
            teardown: function () {
              if (ve.nodeName(this, "form")) return !1;
              ve.event.remove(this, "._submit");
            },
          }),
        me.change ||
          (ve.event.special.change = {
            setup: function () {
              if (Je.test(this.nodeName))
                return (
                  ("checkbox" !== this.type && "radio" !== this.type) ||
                    (ve.event.add(this, "propertychange._change", function (e) {
                      "checked" === e.originalEvent.propertyName &&
                        (this._justChanged = !0);
                    }),
                    ve.event.add(this, "click._change", function (e) {
                      this._justChanged &&
                        !e.isTrigger &&
                        (this._justChanged = !1),
                        ve.event.simulate("change", this, e);
                    })),
                  !1
                );
              ve.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Je.test(t.nodeName) &&
                  !ve._data(t, "change") &&
                  (ve.event.add(t, "change._change", function (e) {
                    !this.parentNode ||
                      e.isSimulated ||
                      e.isTrigger ||
                      ve.event.simulate("change", this.parentNode, e);
                  }),
                  ve._data(t, "change", !0));
              });
            },
            handle: function (e) {
              var t = e.target;
              if (
                this !== t ||
                e.isSimulated ||
                e.isTrigger ||
                ("radio" !== t.type && "checkbox" !== t.type)
              )
                return e.handleObj.handler.apply(this, arguments);
            },
            teardown: function () {
              return ve.event.remove(this, "._change"), !Je.test(this.nodeName);
            },
          }),
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
            var i, r;
            if (e && e.preventDefault && e.handleObj)
              return (
                (i = e.handleObj),
                ve(e.delegateTarget).off(
                  i.namespace ? i.origType + "." + i.namespace : i.origType,
                  i.selector,
                  i.handler
                ),
                this
              );
            if ("object" == typeof e) {
              for (r in e) this.off(r, t, e[r]);
              return this;
            }
            return (
              (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = C),
              this.each(function () {
                ve.event.remove(this, e, n, t);
              })
            );
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
          var i,
            r,
            o,
            a,
            s,
            l = ve.contains(e.ownerDocument, e);
          if (
            (me.html5Clone || ve.isXMLDoc(e) || !nt.test("<" + e.nodeName + ">")
              ? (o = e.cloneNode(!0))
              : ((ut.innerHTML = e.outerHTML),
                ut.removeChild((o = ut.firstChild))),
            !(
              (me.noCloneEvent && me.noCloneChecked) ||
              (1 !== e.nodeType && 11 !== e.nodeType) ||
              ve.isXMLDoc(e)
            ))
          )
            for (i = y(o), s = y(e), a = 0; null != (r = s[a]); ++a)
              i[a] && L(r, i[a]);
          if (t)
            if (n)
              for (s = s || y(e), i = i || y(o), a = 0; null != (r = s[a]); a++)
                D(r, i[a]);
            else D(e, o);
          return (
            (i = y(o, "script")),
            i.length > 0 && b(i, !l && y(e, "script")),
            (i = s = r = null),
            o
          );
        },
        cleanData: function (e, t) {
          for (
            var n,
              i,
              r,
              o,
              a = 0,
              s = ve.expando,
              l = ve.cache,
              u = me.attributes,
              c = ve.event.special;
            null != (n = e[a]);
            a++
          )
            if ((t || qe(n)) && ((r = n[s]), (o = r && l[r]))) {
              if (o.events)
                for (i in o.events)
                  c[i] ? ve.event.remove(n, i) : ve.removeEvent(n, i, o.handle);
              l[r] &&
                (delete l[r],
                u || void 0 === n.removeAttribute
                  ? (n[s] = void 0)
                  : n.removeAttribute(s),
                ae.push(r));
            }
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
        ve.fn.extend({
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          },
        });
      var zt = n.location,
        Bt = ve.now(),
        Vt = /\?/,
        $t =
          /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
      (ve.parseJSON = function (e) {
        if (n.JSON && n.JSON.parse) return n.JSON.parse(e + "");
        var t,
          i = null,
          r = ve.trim(e + "");
        return r &&
          !ve.trim(
            r.replace($t, function (e, n, r, o) {
              return (
                t && n && (i = 0),
                0 === i ? e : ((t = r || n), (i += !o - !r), "")
              );
            })
          )
          ? Function("return " + r)()
          : ve.error("Invalid JSON: " + e);
      }),
        (ve.parseXML = function (e) {
          var t, i;
          if (!e || "string" != typeof e) return null;
          try {
            n.DOMParser
              ? ((i = new n.DOMParser()),
                (t = i.parseFromString(e, "text/xml")))
              : ((t = new n.ActiveXObject("Microsoft.XMLDOM")),
                (t.async = "false"),
                t.loadXML(e));
          } catch (e) {
            t = void 0;
          }
          return (
            (t &&
              t.documentElement &&
              !t.getElementsByTagName("parsererror").length) ||
              ve.error("Invalid XML: " + e),
            t
          );
        });
      var Xt = /#.*$/,
        Ut = /([?&])_=[^&]*/,
        Gt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Yt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Jt = /^(?:GET|HEAD)$/,
        Kt = /^\/\//,
        Qt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Zt = {},
        en = {},
        tn = "*/".concat("*"),
        nn = zt.href,
        rn = Qt.exec(nn.toLowerCase()) || [];
      ve.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: nn,
          type: "GET",
          isLocal: Yt.test(rn[1]),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": tn,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript",
          },
          contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/,
          },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON",
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": ve.parseJSON,
            "text xml": ve.parseXML,
          },
          flatOptions: {
            url: !0,
            context: !0,
          },
        },
        ajaxSetup: function (e, t) {
          return t ? K(K(e, ve.ajaxSettings), t) : K(ve.ajaxSettings, e);
        },
        ajaxPrefilter: Y(Zt),
        ajaxTransport: Y(en),
        ajax: function (e, t) {
          function i(e, t, i, r) {
            var o,
              d,
              y,
              b,
              w,
              C = t;
            2 !== x &&
              ((x = 2),
              l && n.clearTimeout(l),
              (c = void 0),
              (s = r || ""),
              (T.readyState = e > 0 ? 4 : 0),
              (o = (e >= 200 && e < 300) || 304 === e),
              i && (b = Q(f, T, i)),
              (b = Z(f, b, T, o)),
              o
                ? (f.ifModified &&
                    ((w = T.getResponseHeader("Last-Modified")),
                    w && (ve.lastModified[a] = w),
                    (w = T.getResponseHeader("etag")) && (ve.etag[a] = w)),
                  204 === e || "HEAD" === f.type
                    ? (C = "nocontent")
                    : 304 === e
                    ? (C = "notmodified")
                    : ((C = b.state), (d = b.data), (y = b.error), (o = !y)))
                : ((y = C), (!e && C) || ((C = "error"), e < 0 && (e = 0))),
              (T.status = e),
              (T.statusText = (t || C) + ""),
              o ? m.resolveWith(p, [d, C, T]) : m.rejectWith(p, [T, C, y]),
              T.statusCode(g),
              (g = void 0),
              u &&
                h.trigger(o ? "ajaxSuccess" : "ajaxError", [T, f, o ? d : y]),
              v.fireWith(p, [T, C]),
              u &&
                (h.trigger("ajaxComplete", [T, f]),
                --ve.active || ve.event.trigger("ajaxStop")));
          }
          "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
          var r,
            o,
            a,
            s,
            l,
            u,
            c,
            d,
            f = ve.ajaxSetup({}, t),
            p = f.context || f,
            h = f.context && (p.nodeType || p.jquery) ? ve(p) : ve.event,
            m = ve.Deferred(),
            v = ve.Callbacks("once memory"),
            g = f.statusCode || {},
            y = {},
            b = {},
            x = 0,
            w = "canceled",
            T = {
              readyState: 0,
              getResponseHeader: function (e) {
                var t;
                if (2 === x) {
                  if (!d)
                    for (d = {}; (t = Gt.exec(s)); )
                      d[t[1].toLowerCase()] = t[2];
                  t = d[e.toLowerCase()];
                }
                return null == t ? null : t;
              },
              getAllResponseHeaders: function () {
                return 2 === x ? s : null;
              },
              setRequestHeader: function (e, t) {
                var n = e.toLowerCase();
                return x || ((e = b[n] = b[n] || e), (y[e] = t)), this;
              },
              overrideMimeType: function (e) {
                return x || (f.mimeType = e), this;
              },
              statusCode: function (e) {
                var t;
                if (e)
                  if (x < 2) for (t in e) g[t] = [g[t], e[t]];
                  else T.always(e[T.status]);
                return this;
              },
              abort: function (e) {
                var t = e || w;
                return c && c.abort(t), i(0, t), this;
              },
            };
          if (
            ((m.promise(T).complete = v.add),
            (T.success = T.done),
            (T.error = T.fail),
            (f.url = ((e || f.url || nn) + "")
              .replace(Xt, "")
              .replace(Kt, rn[1] + "//")),
            (f.type = t.method || t.type || f.method || f.type),
            (f.dataTypes = ve
              .trim(f.dataType || "*")
              .toLowerCase()
              .match(Me) || [""]),
            null == f.crossDomain &&
              ((r = Qt.exec(f.url.toLowerCase())),
              (f.crossDomain = !(
                !r ||
                (r[1] === rn[1] &&
                  r[2] === rn[2] &&
                  (r[3] || ("http:" === r[1] ? "80" : "443")) ===
                    (rn[3] || ("http:" === rn[1] ? "80" : "443")))
              ))),
            f.data &&
              f.processData &&
              "string" != typeof f.data &&
              (f.data = ve.param(f.data, f.traditional)),
            J(Zt, f, t, T),
            2 === x)
          )
            return T;
          (u = ve.event && f.global),
            u && 0 == ve.active++ && ve.event.trigger("ajaxStart"),
            (f.type = f.type.toUpperCase()),
            (f.hasContent = !Jt.test(f.type)),
            (a = f.url),
            f.hasContent ||
              (f.data &&
                ((a = f.url += (Vt.test(a) ? "&" : "?") + f.data),
                delete f.data),
              !1 === f.cache &&
                (f.url = Ut.test(a)
                  ? a.replace(Ut, "$1_=" + Bt++)
                  : a + (Vt.test(a) ? "&" : "?") + "_=" + Bt++)),
            f.ifModified &&
              (ve.lastModified[a] &&
                T.setRequestHeader("If-Modified-Since", ve.lastModified[a]),
              ve.etag[a] && T.setRequestHeader("If-None-Match", ve.etag[a])),
            ((f.data && f.hasContent && !1 !== f.contentType) ||
              t.contentType) &&
              T.setRequestHeader("Content-Type", f.contentType),
            T.setRequestHeader(
              "Accept",
              f.dataTypes[0] && f.accepts[f.dataTypes[0]]
                ? f.accepts[f.dataTypes[0]] +
                    ("*" !== f.dataTypes[0] ? ", " + tn + "; q=0.01" : "")
                : f.accepts["*"]
            );
          for (o in f.headers) T.setRequestHeader(o, f.headers[o]);
          if (f.beforeSend && (!1 === f.beforeSend.call(p, T, f) || 2 === x))
            return T.abort();
          w = "abort";
          for (o in {
            success: 1,
            error: 1,
            complete: 1,
          })
            T[o](f[o]);
          if ((c = J(en, f, t, T))) {
            if (
              ((T.readyState = 1), u && h.trigger("ajaxSend", [T, f]), 2 === x)
            )
              return T;
            f.async &&
              f.timeout > 0 &&
              (l = n.setTimeout(function () {
                T.abort("timeout");
              }, f.timeout));
            try {
              (x = 1), c.send(y, i);
            } catch (e) {
              if (!(x < 2)) throw e;
              i(-1, e);
            }
          } else i(-1, "No Transport");
          return T;
        },
        getJSON: function (e, t, n) {
          return ve.get(e, t, n, "json");
        },
        getScript: function (e, t) {
          return ve.get(e, void 0, t, "script");
        },
      }),
        ve.each(["get", "post"], function (e, t) {
          ve[t] = function (e, n, i, r) {
            return (
              ve.isFunction(n) && ((r = r || i), (i = n), (n = void 0)),
              ve.ajax(
                ve.extend(
                  {
                    url: e,
                    type: t,
                    dataType: r,
                    data: n,
                    success: i,
                  },
                  ve.isPlainObject(e) && e
                )
              )
            );
          };
        }),
        (ve._evalUrl = function (e) {
          return ve.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0,
          });
        }),
        ve.fn.extend({
          wrapAll: function (e) {
            if (ve.isFunction(e))
              return this.each(function (t) {
                ve(this).wrapAll(e.call(this, t));
              });
            if (this[0]) {
              var t = ve(e, this[0].ownerDocument).eq(0).clone(!0);
              this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    for (
                      var e = this;
                      e.firstChild && 1 === e.firstChild.nodeType;

                    )
                      e = e.firstChild;
                    return e;
                  })
                  .append(this);
            }
            return this;
          },
          wrapInner: function (e) {
            return ve.isFunction(e)
              ? this.each(function (t) {
                  ve(this).wrapInner(e.call(this, t));
                })
              : this.each(function () {
                  var t = ve(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap: function (e) {
            var t = ve.isFunction(e);
            return this.each(function (n) {
              ve(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function () {
            return this.parent()
              .each(function () {
                ve.nodeName(this, "body") ||
                  ve(this).replaceWith(this.childNodes);
              })
              .end();
          },
        }),
        (ve.expr.filters.hidden = function (e) {
          return me.reliableHiddenOffsets()
            ? e.offsetWidth <= 0 &&
                e.offsetHeight <= 0 &&
                !e.getClientRects().length
            : te(e);
        }),
        (ve.expr.filters.visible = function (e) {
          return !ve.expr.filters.hidden(e);
        });
      var on = /%20/g,
        an = /\[\]$/,
        sn = /\r?\n/g,
        ln = /^(?:submit|button|image|reset|file)$/i,
        un = /^(?:input|select|textarea|keygen)/i;
      (ve.param = function (e, t) {
        var n,
          i = [],
          r = function (e, t) {
            (t = ve.isFunction(t) ? t() : null == t ? "" : t),
              (i[i.length] =
                encodeURIComponent(e) + "=" + encodeURIComponent(t));
          };
        if (
          (void 0 === t && (t = ve.ajaxSettings && ve.ajaxSettings.traditional),
          ve.isArray(e) || (e.jquery && !ve.isPlainObject(e)))
        )
          ve.each(e, function () {
            r(this.name, this.value);
          });
        else for (n in e) ne(n, e[n], t, r);
        return i.join("&").replace(on, "+");
      }),
        ve.fn.extend({
          serialize: function () {
            return ve.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var e = ve.prop(this, "elements");
              return e ? ve.makeArray(e) : this;
            })
              .filter(function () {
                var e = this.type;
                return (
                  this.name &&
                  !ve(this).is(":disabled") &&
                  un.test(this.nodeName) &&
                  !ln.test(e) &&
                  (this.checked || !ze.test(e))
                );
              })
              .map(function (e, t) {
                var n = ve(this).val();
                return null == n
                  ? null
                  : ve.isArray(n)
                  ? ve.map(n, function (e) {
                      return {
                        name: t.name,
                        value: e.replace(sn, "\r\n"),
                      };
                    })
                  : {
                      name: t.name,
                      value: n.replace(sn, "\r\n"),
                    };
              })
              .get();
          },
        }),
        (ve.ajaxSettings.xhr =
          void 0 !== n.ActiveXObject
            ? function () {
                return this.isLocal
                  ? re()
                  : se.documentMode > 8
                  ? ie()
                  : (/^(get|post|head|put|delete|options)$/i.test(this.type) &&
                      ie()) ||
                    re();
              }
            : ie);
      var cn = 0,
        dn = {},
        fn = ve.ajaxSettings.xhr();
      n.attachEvent &&
        n.attachEvent("onunload", function () {
          for (var e in dn) dn[e](void 0, !0);
        }),
        (me.cors = !!fn && "withCredentials" in fn),
        (fn = me.ajax = !!fn),
        fn &&
          ve.ajaxTransport(function (e) {
            if (!e.crossDomain || me.cors) {
              var t;
              return {
                send: function (i, r) {
                  var o,
                    a = e.xhr(),
                    s = ++cn;
                  if (
                    (a.open(e.type, e.url, e.async, e.username, e.password),
                    e.xhrFields)
                  )
                    for (o in e.xhrFields) a[o] = e.xhrFields[o];
                  e.mimeType &&
                    a.overrideMimeType &&
                    a.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                      i["X-Requested-With"] ||
                      (i["X-Requested-With"] = "XMLHttpRequest");
                  for (o in i)
                    void 0 !== i[o] && a.setRequestHeader(o, i[o] + "");
                  a.send((e.hasContent && e.data) || null),
                    (t = function (n, i) {
                      var o, l, u;
                      if (t && (i || 4 === a.readyState))
                        if (
                          (delete dn[s],
                          (t = void 0),
                          (a.onreadystatechange = ve.noop),
                          i)
                        )
                          4 !== a.readyState && a.abort();
                        else {
                          (u = {}),
                            (o = a.status),
                            "string" == typeof a.responseText &&
                              (u.text = a.responseText);
                          try {
                            l = a.statusText;
                          } catch (e) {
                            l = "";
                          }
                          o || !e.isLocal || e.crossDomain
                            ? 1223 === o && (o = 204)
                            : (o = u.text ? 200 : 404);
                        }
                      u && r(o, l, u, a.getAllResponseHeaders());
                    }),
                    e.async
                      ? 4 === a.readyState
                        ? n.setTimeout(t)
                        : (a.onreadystatechange = dn[s] = t)
                      : t();
                },
                abort: function () {
                  t && t(void 0, !0);
                },
              };
            }
          }),
        ve.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: {
            script: /\b(?:java|ecma)script\b/,
          },
          converters: {
            "text script": function (e) {
              return ve.globalEval(e), e;
            },
          },
        }),
        ve.ajaxPrefilter("script", function (e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && ((e.type = "GET"), (e.global = !1));
        }),
        ve.ajaxTransport("script", function (e) {
          if (e.crossDomain) {
            var t,
              n = se.head || ve("head")[0] || se.documentElement;
            return {
              send: function (i, r) {
                (t = se.createElement("script")),
                  (t.async = !0),
                  e.scriptCharset && (t.charset = e.scriptCharset),
                  (t.src = e.url),
                  (t.onload = t.onreadystatechange =
                    function (e, n) {
                      (n ||
                        !t.readyState ||
                        /loaded|complete/.test(t.readyState)) &&
                        ((t.onload = t.onreadystatechange = null),
                        t.parentNode && t.parentNode.removeChild(t),
                        (t = null),
                        n || r(200, "success"));
                    }),
                  n.insertBefore(t, n.firstChild);
              },
              abort: function () {
                t && t.onload(void 0, !0);
              },
            };
          }
        });
      var pn = [],
        hn = /(=)\?(?=&|$)|\?\?/;
      ve.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var e = pn.pop() || ve.expando + "_" + Bt++;
          return (this[e] = !0), e;
        },
      }),
        ve.ajaxPrefilter("json jsonp", function (e, t, i) {
          var r,
            o,
            a,
            s =
              !1 !== e.jsonp &&
              (hn.test(e.url)
                ? "url"
                : "string" == typeof e.data &&
                  0 ===
                    (e.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  hn.test(e.data) &&
                  "data");
          if (s || "jsonp" === e.dataTypes[0])
            return (
              (r = e.jsonpCallback =
                ve.isFunction(e.jsonpCallback)
                  ? e.jsonpCallback()
                  : e.jsonpCallback),
              s
                ? (e[s] = e[s].replace(hn, "$1" + r))
                : !1 !== e.jsonp &&
                  (e.url += (Vt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
              (e.converters["script json"] = function () {
                return a || ve.error(r + " was not called"), a[0];
              }),
              (e.dataTypes[0] = "json"),
              (o = n[r]),
              (n[r] = function () {
                a = arguments;
              }),
              i.always(function () {
                void 0 === o ? ve(n).removeProp(r) : (n[r] = o),
                  e[r] && ((e.jsonpCallback = t.jsonpCallback), pn.push(r)),
                  a && ve.isFunction(o) && o(a[0]),
                  (a = o = void 0);
              }),
              "script"
            );
        }),
        (ve.parseHTML = function (e, t, n) {
          if (!e || "string" != typeof e) return null;
          "boolean" == typeof t && ((n = t), (t = !1)), (t = t || se);
          var i = Ne.exec(e),
            r = !n && [];
          return i
            ? [t.createElement(i[1])]
            : ((i = w([e], t, r)),
              r && r.length && ve(r).remove(),
              ve.merge([], i.childNodes));
        });
      var mn = ve.fn.load;
      (ve.fn.load = function (e, t, n) {
        if ("string" != typeof e && mn) return mn.apply(this, arguments);
        var i,
          r,
          o,
          a = this,
          s = e.indexOf(" ");
        return (
          s > -1 && ((i = ve.trim(e.slice(s, e.length))), (e = e.slice(0, s))),
          ve.isFunction(t)
            ? ((n = t), (t = void 0))
            : t && "object" == typeof t && (r = "POST"),
          a.length > 0 &&
            ve
              .ajax({
                url: e,
                type: r || "GET",
                dataType: "html",
                data: t,
              })
              .done(function (e) {
                (o = arguments),
                  a.html(i ? ve("<div>").append(ve.parseHTML(e)).find(i) : e);
              })
              .always(
                n &&
                  function (e, t) {
                    a.each(function () {
                      n.apply(this, o || [e.responseText, t, e]);
                    });
                  }
              ),
          this
        );
      }),
        ve.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (e, t) {
            ve.fn[t] = function (e) {
              return this.on(t, e);
            };
          }
        ),
        (ve.expr.filters.animated = function (e) {
          return ve.grep(ve.timers, function (t) {
            return e === t.elem;
          }).length;
        }),
        (ve.offset = {
          setOffset: function (e, t, n) {
            var i,
              r,
              o,
              a,
              s,
              l,
              u,
              c = ve.css(e, "position"),
              d = ve(e),
              f = {};
            "static" === c && (e.style.position = "relative"),
              (s = d.offset()),
              (o = ve.css(e, "top")),
              (l = ve.css(e, "left")),
              (u =
                ("absolute" === c || "fixed" === c) &&
                ve.inArray("auto", [o, l]) > -1),
              u
                ? ((i = d.position()), (a = i.top), (r = i.left))
                : ((a = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
              ve.isFunction(t) && (t = t.call(e, n, ve.extend({}, s))),
              null != t.top && (f.top = t.top - s.top + a),
              null != t.left && (f.left = t.left - s.left + r),
              "using" in t ? t.using.call(e, f) : d.css(f);
          },
        }),
        ve.fn.extend({
          offset: function (e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function (t) {
                    ve.offset.setOffset(this, e, t);
                  });
            var t,
              n,
              i = {
                top: 0,
                left: 0,
              },
              r = this[0],
              o = r && r.ownerDocument;
            if (o)
              return (
                (t = o.documentElement),
                ve.contains(t, r)
                  ? (void 0 !== r.getBoundingClientRect &&
                      (i = r.getBoundingClientRect()),
                    (n = oe(o)),
                    {
                      top:
                        i.top +
                        (n.pageYOffset || t.scrollTop) -
                        (t.clientTop || 0),
                      left:
                        i.left +
                        (n.pageXOffset || t.scrollLeft) -
                        (t.clientLeft || 0),
                    })
                  : i
              );
          },
          position: function () {
            if (this[0]) {
              var e,
                t,
                n = {
                  top: 0,
                  left: 0,
                },
                i = this[0];
              return (
                "fixed" === ve.css(i, "position")
                  ? (t = i.getBoundingClientRect())
                  : ((e = this.offsetParent()),
                    (t = this.offset()),
                    ve.nodeName(e[0], "html") || (n = e.offset()),
                    (n.top += ve.css(e[0], "borderTopWidth", !0)),
                    (n.left += ve.css(e[0], "borderLeftWidth", !0))),
                {
                  top: t.top - n.top - ve.css(i, "marginTop", !0),
                  left: t.left - n.left - ve.css(i, "marginLeft", !0),
                }
              );
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var e = this.offsetParent;
                e &&
                !ve.nodeName(e, "html") &&
                "static" === ve.css(e, "position");

              )
                e = e.offsetParent;
              return e || mt;
            });
          },
        }),
        ve.each(
          {
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset",
          },
          function (e, t) {
            var n = /Y/.test(t);
            ve.fn[e] = function (i) {
              return Re(
                this,
                function (e, i, r) {
                  var o = oe(e);
                  if (void 0 === r)
                    return o
                      ? t in o
                        ? o[t]
                        : o.document.documentElement[i]
                      : e[i];
                  o
                    ? o.scrollTo(
                        n ? ve(o).scrollLeft() : r,
                        n ? r : ve(o).scrollTop()
                      )
                    : (e[i] = r);
                },
                e,
                i,
                arguments.length,
                null
              );
            };
          }
        ),
        ve.each(["top", "left"], function (e, t) {
          ve.cssHooks[t] = H(me.pixelPosition, function (e, n) {
            if (n)
              return (
                (n = gt(e, t)), pt.test(n) ? ve(e).position()[t] + "px" : n
              );
          });
        }),
        ve.each(
          {
            Height: "height",
            Width: "width",
          },
          function (e, t) {
            ve.each(
              {
                padding: "inner" + e,
                content: t,
                "": "outer" + e,
              },
              function (n, i) {
                ve.fn[i] = function (i, r) {
                  var o = arguments.length && (n || "boolean" != typeof i),
                    a = n || (!0 === i || !0 === r ? "margin" : "border");
                  return Re(
                    this,
                    function (t, n, i) {
                      var r;
                      return ve.isWindow(t)
                        ? t.document.documentElement["client" + e]
                        : 9 === t.nodeType
                        ? ((r = t.documentElement),
                          Math.max(
                            t.body["scroll" + e],
                            r["scroll" + e],
                            t.body["offset" + e],
                            r["offset" + e],
                            r["client" + e]
                          ))
                        : void 0 === i
                        ? ve.css(t, n, a)
                        : ve.style(t, n, i, a);
                    },
                    t,
                    o ? i : void 0,
                    o,
                    null
                  );
                };
              }
            );
          }
        ),
        ve.fn.extend({
          bind: function (e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function (e, t) {
            return this.off(e, null, t);
          },
          delegate: function (e, t, n, i) {
            return this.on(t, e, n, i);
          },
          undelegate: function (e, t, n) {
            return 1 === arguments.length
              ? this.off(e, "**")
              : this.off(t, e || "**", n);
          },
        }),
        (ve.fn.size = function () {
          return this.length;
        }),
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
  function (e, t, n) {
    var i, r;
    !(function (o, a) {
      (i = a),
        void 0 !== (r = "function" == typeof i ? i.call(t, n, t, e) : i) &&
          (e.exports = r);
    })(0, function (e, t, n) {
      return function (e, t, n, i, r, o) {
        for (
          var a = 0, s = ["webkit", "moz", "ms", "o"], l = 0;
          l < s.length && !window.requestAnimationFrame;
          ++l
        )
          (window.requestAnimationFrame =
            window[s[l] + "RequestAnimationFrame"]),
            (window.cancelAnimationFrame =
              window[s[l] + "CancelAnimationFrame"] ||
              window[s[l] + "CancelRequestAnimationFrame"]);
        window.requestAnimationFrame ||
          (window.requestAnimationFrame = function (e, t) {
            var n = new Date().getTime(),
              i = Math.max(0, 16 - (n - a)),
              r = window.setTimeout(function () {
                e(n + i);
              }, i);
            return (a = n + i), r;
          }),
          window.cancelAnimationFrame ||
            (window.cancelAnimationFrame = function (e) {
              clearTimeout(e);
            });
        var u = this;
        u.options = {
          useEasing: !0,
          useGrouping: !0,
          separator: ",",
          decimal: ".",
          easingFn: null,
          formattingFn: null,
        };
        for (var c in o) o.hasOwnProperty(c) && (u.options[c] = o[c]);
        "" === u.options.separator && (u.options.useGrouping = !1),
          u.options.prefix || (u.options.prefix = ""),
          u.options.suffix || (u.options.suffix = ""),
          (u.d = "string" == typeof e ? document.getElementById(e) : e),
          (u.startVal = Number(t)),
          (u.endVal = Number(n)),
          (u.countDown = u.startVal > u.endVal),
          (u.frameVal = u.startVal),
          (u.decimals = Math.max(0, i || 0)),
          (u.dec = Math.pow(10, u.decimals)),
          (u.duration = 1e3 * Number(r) || 2e3),
          (u.formatNumber = function (e) {
            (e = e.toFixed(u.decimals)), (e += "");
            var t, n, i, r;
            if (
              ((t = e.split(".")),
              (n = t[0]),
              (i = t.length > 1 ? u.options.decimal + t[1] : ""),
              (r = /(\d+)(\d{3})/),
              u.options.useGrouping)
            )
              for (; r.test(n); )
                n = n.replace(r, "$1" + u.options.separator + "$2");
            return u.options.prefix + n + i + u.options.suffix;
          }),
          (u.easeOutExpo = function (e, t, n, i) {
            return (n * (1 - Math.pow(2, (-10 * e) / i)) * 1024) / 1023 + t;
          }),
          (u.easingFn = u.options.easingFn
            ? u.options.easingFn
            : u.easeOutExpo),
          (u.formattingFn = u.options.formattingFn
            ? u.options.formattingFn
            : u.formatNumber),
          (u.version = function () {
            return "1.7.1";
          }),
          (u.printValue = function (e) {
            var t = u.formattingFn(e);
            "INPUT" === u.d.tagName
              ? (this.d.value = t)
              : "text" === u.d.tagName || "tspan" === u.d.tagName
              ? (this.d.textContent = t)
              : (this.d.innerHTML = t);
          }),
          (u.count = function (e) {
            u.startTime || (u.startTime = e), (u.timestamp = e);
            var t = e - u.startTime;
            (u.remaining = u.duration - t),
              u.options.useEasing
                ? u.countDown
                  ? (u.frameVal =
                      u.startVal -
                      u.easingFn(t, 0, u.startVal - u.endVal, u.duration))
                  : (u.frameVal = u.easingFn(
                      t,
                      u.startVal,
                      u.endVal - u.startVal,
                      u.duration
                    ))
                : u.countDown
                ? (u.frameVal =
                    u.startVal - (u.startVal - u.endVal) * (t / u.duration))
                : (u.frameVal =
                    u.startVal + (u.endVal - u.startVal) * (t / u.duration)),
              u.countDown
                ? (u.frameVal = u.frameVal < u.endVal ? u.endVal : u.frameVal)
                : (u.frameVal = u.frameVal > u.endVal ? u.endVal : u.frameVal),
              (u.frameVal = Math.round(u.frameVal * u.dec) / u.dec),
              u.printValue(u.frameVal),
              t < u.duration
                ? (u.rAF = requestAnimationFrame(u.count))
                : u.callback && u.callback();
          }),
          (u.start = function (e) {
            return (
              (u.callback = e), (u.rAF = requestAnimationFrame(u.count)), !1
            );
          }),
          (u.pauseResume = function () {
            u.paused
              ? ((u.paused = !1),
                delete u.startTime,
                (u.duration = u.remaining),
                (u.startVal = u.frameVal),
                requestAnimationFrame(u.count))
              : ((u.paused = !0), cancelAnimationFrame(u.rAF));
          }),
          (u.reset = function () {
            (u.paused = !1),
              delete u.startTime,
              (u.startVal = t),
              cancelAnimationFrame(u.rAF),
              u.printValue(u.startVal);
          }),
          (u.update = function (e) {
            cancelAnimationFrame(u.rAF),
              (u.paused = !1),
              delete u.startTime,
              (u.startVal = u.frameVal),
              (u.endVal = Number(e)),
              (u.countDown = u.startVal > u.endVal),
              (u.rAF = requestAnimationFrame(u.count));
          }),
          u.printValue(u.startVal);
      };
    });
  },
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || Function("return this")() || (0, eval)("this");
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
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
              e(window).scrollTop() > 300
                ? r.addClass("alive")
                : r.removeClass("alive");
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
            var t = e(document).scrollTop(),
              i = e(window).height();
            t > 0 ? n.fadeIn() : n.fadeOut(),
              window.XMLHttpRequest || n.css("top", t + i - 166);
          }
          var n = e("#gotop");
          n.on("click", function () {
            e("html, body").animate({
              scrollTop: 0,
            });
          }),
            t(),
            e(window).bind("scroll", t);
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
    (function (e, t) {
      !(function (e) {
        var n = !0;
        (e.flexslider = function (i, r) {
          var o = e(i);
          void 0 === r.rtl && "rtl" == e("html").attr("dir") && (r.rtl = !0),
            (o.vars = e.extend({}, e.flexslider.defaults, r));
          var a,
            s = o.vars.namespace,
            l =
              window.navigator &&
              window.navigator.msPointerEnabled &&
              window.MSGesture,
            u =
              ("ontouchstart" in window ||
                l ||
                (window.DocumentTouch && document instanceof DocumentTouch)) &&
              o.vars.touch,
            c = "click touchend MSPointerUp keyup",
            d = "",
            f = "vertical" === o.vars.direction,
            p = o.vars.reverse,
            h = o.vars.itemWidth > 0,
            m = "fade" === o.vars.animation,
            v = "" !== o.vars.asNavFor,
            g = {};
          e.data(i, "flexslider", o),
            (g = {
              init: function () {
                (o.animating = !1),
                  (o.currentSlide = parseInt(
                    o.vars.startAt ? o.vars.startAt : 0,
                    10
                  )),
                  isNaN(o.currentSlide) && (o.currentSlide = 0),
                  (o.animatingTo = o.currentSlide),
                  (o.atEnd = 0 === o.currentSlide || o.currentSlide === o.last),
                  (o.containerSelector = o.vars.selector.substr(
                    0,
                    o.vars.selector.search(" ")
                  )),
                  (o.slides = e(o.vars.selector, o)),
                  (o.container = e(o.containerSelector, o)),
                  (o.count = o.slides.length),
                  (o.syncExists = e(o.vars.sync).length > 0),
                  "slide" === o.vars.animation && (o.vars.animation = "swing"),
                  (o.prop = f
                    ? "top"
                    : o.vars.rtl
                    ? "marginRight"
                    : "marginLeft"),
                  (o.args = {}),
                  (o.manualPause = !1),
                  (o.stopped = !1),
                  (o.started = !1),
                  (o.startTimeout = null),
                  (o.transitions =
                    !o.vars.video &&
                    !m &&
                    o.vars.useCSS &&
                    (function () {
                      var e = document.createElement("div"),
                        t = [
                          "perspectiveProperty",
                          "WebkitPerspective",
                          "MozPerspective",
                          "OPerspective",
                          "msPerspective",
                        ];
                      for (var n in t)
                        if (void 0 !== e.style[t[n]])
                          return (
                            (o.pfx = t[n]
                              .replace("Perspective", "")
                              .toLowerCase()),
                            (o.prop = "-" + o.pfx + "-transform"),
                            !0
                          );
                      return !1;
                    })()),
                  (o.isFirefox =
                    navigator.userAgent.toLowerCase().indexOf("firefox") > -1),
                  (o.ensureAnimationEnd = ""),
                  "" !== o.vars.controlsContainer &&
                    (o.controlsContainer =
                      e(o.vars.controlsContainer).length > 0 &&
                      e(o.vars.controlsContainer)),
                  "" !== o.vars.manualControls &&
                    (o.manualControls =
                      e(o.vars.manualControls).length > 0 &&
                      e(o.vars.manualControls)),
                  "" !== o.vars.customDirectionNav &&
                    (o.customDirectionNav =
                      2 === e(o.vars.customDirectionNav).length &&
                      e(o.vars.customDirectionNav)),
                  o.vars.randomize &&
                    (o.slides.sort(function () {
                      return Math.round(Math.random()) - 0.5;
                    }),
                    o.container.empty().append(o.slides)),
                  o.doMath(),
                  o.setup("init"),
                  o.vars.controlNav && g.controlNav.setup(),
                  o.vars.directionNav && g.directionNav.setup(),
                  o.vars.keyboard &&
                    (1 === e(o.containerSelector).length ||
                      o.vars.multipleKeyboard) &&
                    e(document).bind("keyup", function (e) {
                      var t = e.keyCode;
                      if (!o.animating && (39 === t || 37 === t)) {
                        var n = o.vars.rtl
                          ? 37 === t
                            ? o.getTarget("next")
                            : 39 === t && o.getTarget("prev")
                          : 39 === t
                          ? o.getTarget("next")
                          : 37 === t && o.getTarget("prev");
                        o.flexAnimate(n, o.vars.pauseOnAction);
                      }
                    }),
                  o.vars.mousewheel &&
                    o.bind("mousewheel", function (e, t, n, i) {
                      e.preventDefault();
                      var r = t < 0 ? o.getTarget("next") : o.getTarget("prev");
                      o.flexAnimate(r, o.vars.pauseOnAction);
                    }),
                  o.vars.pausePlay && g.pausePlay.setup(),
                  o.vars.slideshow &&
                    o.vars.pauseInvisible &&
                    g.pauseInvisible.init(),
                  o.vars.slideshow &&
                    (o.vars.pauseOnHover &&
                      o.hover(
                        function () {
                          o.manualPlay || o.manualPause || o.pause();
                        },
                        function () {
                          o.manualPause ||
                            o.manualPlay ||
                            o.stopped ||
                            o.play();
                        }
                      ),
                    (o.vars.pauseInvisible && g.pauseInvisible.isHidden()) ||
                      (o.vars.initDelay > 0
                        ? (o.startTimeout = setTimeout(
                            o.play,
                            o.vars.initDelay
                          ))
                        : o.play())),
                  v && g.asNav.setup(),
                  u && o.vars.touch && g.touch(),
                  (!m || (m && o.vars.smoothHeight)) &&
                    e(window).bind("resize orientationchange focus", g.resize),
                  o.find("img").attr("draggable", "false"),
                  setTimeout(function () {
                    o.vars.start(o);
                  }, 200);
              },
              asNav: {
                setup: function () {
                  (o.asNav = !0),
                    (o.animatingTo = Math.floor(o.currentSlide / o.move)),
                    (o.currentItem = o.currentSlide),
                    o.slides
                      .removeClass(s + "active-slide")
                      .eq(o.currentItem)
                      .addClass(s + "active-slide"),
                    l
                      ? ((i._slider = o),
                        o.slides.each(function () {
                          var t = this;
                          (t._gesture = new MSGesture()),
                            (t._gesture.target = t),
                            t.addEventListener(
                              "MSPointerDown",
                              function (e) {
                                e.preventDefault(),
                                  e.currentTarget._gesture &&
                                    e.currentTarget._gesture.addPointer(
                                      e.pointerId
                                    );
                              },
                              !1
                            ),
                            t.addEventListener("MSGestureTap", function (t) {
                              t.preventDefault();
                              var n = e(this),
                                i = n.index();
                              e(o.vars.asNavFor).data("flexslider").animating ||
                                n.hasClass("active") ||
                                ((o.direction =
                                  o.currentItem < i ? "next" : "prev"),
                                o.flexAnimate(
                                  i,
                                  o.vars.pauseOnAction,
                                  !1,
                                  !0,
                                  !0
                                ));
                            });
                        }))
                      : o.slides.on(c, function (t) {
                          t.preventDefault();
                          var n,
                            i = e(this),
                            r = i.index();
                          (n = o.vars.rtl
                            ? -1 * (i.offset().right - e(o).scrollLeft())
                            : i.offset().left - e(o).scrollLeft()),
                            n <= 0 && i.hasClass(s + "active-slide")
                              ? o.flexAnimate(o.getTarget("prev"), !0)
                              : e(o.vars.asNavFor).data("flexslider")
                                  .animating ||
                                i.hasClass(s + "active-slide") ||
                                ((o.direction =
                                  o.currentItem < r ? "next" : "prev"),
                                o.flexAnimate(
                                  r,
                                  o.vars.pauseOnAction,
                                  !1,
                                  !0,
                                  !0
                                ));
                        });
                },
              },
              controlNav: {
                setup: function () {
                  o.manualControls
                    ? g.controlNav.setupManual()
                    : g.controlNav.setupPaging();
                },
                setupPaging: function () {
                  var t,
                    n,
                    i =
                      "thumbnails" === o.vars.controlNav
                        ? "control-thumbs"
                        : "control-paging",
                    r = 1;
                  if (
                    ((o.controlNavScaffold = e(
                      '<ol class="' + s + "control-nav " + s + i + '"></ol>'
                    )),
                    o.pagingCount > 1)
                  )
                    for (var a = 0; a < o.pagingCount; a++) {
                      (n = o.slides.eq(a)),
                        void 0 === n.attr("data-thumb-alt") &&
                          n.attr("data-thumb-alt", "");
                      var l =
                        "" !== n.attr("data-thumb-alt")
                          ? (l = ' alt="' + n.attr("data-thumb-alt") + '"')
                          : "";
                      if (
                        ((t =
                          "thumbnails" === o.vars.controlNav
                            ? '<img src="' +
                              n.attr("data-thumb") +
                              '"' +
                              l +
                              "/>"
                            : '<a href="#">' + r + "</a>"),
                        "thumbnails" === o.vars.controlNav &&
                          !0 === o.vars.thumbCaptions)
                      ) {
                        var u = n.attr("data-thumbcaption");
                        "" !== u &&
                          void 0 !== u &&
                          (t +=
                            '<span class="' + s + 'caption">' + u + "</span>");
                      }
                      o.controlNavScaffold.append("<li>" + t + "</li>"), r++;
                    }
                  o.controlsContainer
                    ? e(o.controlsContainer).append(o.controlNavScaffold)
                    : o.append(o.controlNavScaffold),
                    g.controlNav.set(),
                    g.controlNav.active(),
                    o.controlNavScaffold.delegate("a, img", c, function (t) {
                      if ((t.preventDefault(), "" === d || d === t.type)) {
                        var n = e(this),
                          i = o.controlNav.index(n);
                        n.hasClass(s + "active") ||
                          ((o.direction = i > o.currentSlide ? "next" : "prev"),
                          o.flexAnimate(i, o.vars.pauseOnAction));
                      }
                      "" === d && (d = t.type), g.setToClearWatchedEvent();
                    });
                },
                setupManual: function () {
                  (o.controlNav = o.manualControls),
                    g.controlNav.active(),
                    o.controlNav.bind(c, function (t) {
                      if ((t.preventDefault(), "" === d || d === t.type)) {
                        var n = e(this),
                          i = o.controlNav.index(n);
                        n.hasClass(s + "active") ||
                          (i > o.currentSlide
                            ? (o.direction = "next")
                            : (o.direction = "prev"),
                          o.flexAnimate(i, o.vars.pauseOnAction));
                      }
                      "" === d && (d = t.type), g.setToClearWatchedEvent();
                    });
                },
                set: function () {
                  var t = "thumbnails" === o.vars.controlNav ? "img" : "a";
                  o.controlNav = e(
                    "." + s + "control-nav li " + t,
                    o.controlsContainer ? o.controlsContainer : o
                  );
                },
                active: function () {
                  o.controlNav
                    .removeClass(s + "active")
                    .eq(o.animatingTo)
                    .addClass(s + "active");
                },
                update: function (t, n) {
                  o.pagingCount > 1 && "add" === t
                    ? o.controlNavScaffold.append(
                        e('<li><a href="#">' + o.count + "</a></li>")
                      )
                    : 1 === o.pagingCount
                    ? o.controlNavScaffold.find("li").remove()
                    : o.controlNav.eq(n).closest("li").remove(),
                    g.controlNav.set(),
                    o.pagingCount > 1 && o.pagingCount !== o.controlNav.length
                      ? o.update(n, t)
                      : g.controlNav.active();
                },
              },
              directionNav: {
                setup: function () {
                  var t = e(
                    '<ul class="' +
                      s +
                      'direction-nav"><li class="' +
                      s +
                      'nav-prev"><a class="' +
                      s +
                      'prev" href="#">' +
                      o.vars.prevText +
                      '</a></li><li class="' +
                      s +
                      'nav-next"><a class="' +
                      s +
                      'next" href="#">' +
                      o.vars.nextText +
                      "</a></li></ul>"
                  );
                  o.customDirectionNav
                    ? (o.directionNav = o.customDirectionNav)
                    : o.controlsContainer
                    ? (e(o.controlsContainer).append(t),
                      (o.directionNav = e(
                        "." + s + "direction-nav li a",
                        o.controlsContainer
                      )))
                    : (o.append(t),
                      (o.directionNav = e("." + s + "direction-nav li a", o))),
                    g.directionNav.update(),
                    o.directionNav.bind(c, function (t) {
                      t.preventDefault();
                      var n;
                      ("" !== d && d !== t.type) ||
                        ((n = e(this).hasClass(s + "next")
                          ? o.getTarget("next")
                          : o.getTarget("prev")),
                        o.flexAnimate(n, o.vars.pauseOnAction)),
                        "" === d && (d = t.type),
                        g.setToClearWatchedEvent();
                    });
                },
                update: function () {
                  var e = s + "disabled";
                  1 === o.pagingCount
                    ? o.directionNav.addClass(e).attr("tabindex", "-1")
                    : o.vars.animationLoop
                    ? o.directionNav.removeClass(e).removeAttr("tabindex")
                    : 0 === o.animatingTo
                    ? o.directionNav
                        .removeClass(e)
                        .filter("." + s + "prev")
                        .addClass(e)
                        .attr("tabindex", "-1")
                    : o.animatingTo === o.last
                    ? o.directionNav
                        .removeClass(e)
                        .filter("." + s + "next")
                        .addClass(e)
                        .attr("tabindex", "-1")
                    : o.directionNav.removeClass(e).removeAttr("tabindex");
                },
              },
              pausePlay: {
                setup: function () {
                  var t = e(
                    '<div class="' + s + 'pauseplay"><a href="#"></a></div>'
                  );
                  o.controlsContainer
                    ? (o.controlsContainer.append(t),
                      (o.pausePlay = e(
                        "." + s + "pauseplay a",
                        o.controlsContainer
                      )))
                    : (o.append(t),
                      (o.pausePlay = e("." + s + "pauseplay a", o))),
                    g.pausePlay.update(
                      o.vars.slideshow ? s + "pause" : s + "play"
                    ),
                    o.pausePlay.bind(c, function (t) {
                      t.preventDefault(),
                        ("" !== d && d !== t.type) ||
                          (e(this).hasClass(s + "pause")
                            ? ((o.manualPause = !0),
                              (o.manualPlay = !1),
                              o.pause())
                            : ((o.manualPause = !1),
                              (o.manualPlay = !0),
                              o.play())),
                        "" === d && (d = t.type),
                        g.setToClearWatchedEvent();
                    });
                },
                update: function (e) {
                  "play" === e
                    ? o.pausePlay
                        .removeClass(s + "pause")
                        .addClass(s + "play")
                        .html(o.vars.playText)
                    : o.pausePlay
                        .removeClass(s + "play")
                        .addClass(s + "pause")
                        .html(o.vars.pauseText);
                },
              },
              touch: function () {
                function e(e) {
                  e.stopPropagation(),
                    o.animating
                      ? e.preventDefault()
                      : (o.pause(),
                        i._gesture.addPointer(e.pointerId),
                        (C = 0),
                        (c = f ? o.h : o.w),
                        (v = Number(new Date())),
                        (u =
                          h && p && o.animatingTo === o.last
                            ? 0
                            : h && p
                            ? o.limit -
                              (o.itemW + o.vars.itemMargin) *
                                o.move *
                                o.animatingTo
                            : h && o.currentSlide === o.last
                            ? o.limit
                            : h
                            ? (o.itemW + o.vars.itemMargin) *
                              o.move *
                              o.currentSlide
                            : p
                            ? (o.last - o.currentSlide + o.cloneOffset) * c
                            : (o.currentSlide + o.cloneOffset) * c));
                }
                function n(e) {
                  e.stopPropagation();
                  var n = e.target._slider;
                  if (n) {
                    var r = -e.translationX,
                      o = -e.translationY;
                    if (
                      ((C += f ? o : r),
                      (d = (n.vars.rtl ? -1 : 1) * C),
                      (x = f
                        ? Math.abs(C) < Math.abs(-r)
                        : Math.abs(C) < Math.abs(-o)),
                      e.detail === e.MSGESTURE_FLAG_INERTIA)
                    )
                      return void t(function () {
                        i._gesture.stop();
                      });
                    (!x || Number(new Date()) - v > 500) &&
                      (e.preventDefault(),
                      !m &&
                        n.transitions &&
                        (n.vars.animationLoop ||
                          (d =
                            C /
                            ((0 === n.currentSlide && C < 0) ||
                            (n.currentSlide === n.last && C > 0)
                              ? Math.abs(C) / c + 2
                              : 1)),
                        n.setProps(u + d, "setTouch")));
                  }
                }
                function r(e) {
                  e.stopPropagation();
                  var t = e.target._slider;
                  if (t) {
                    if (t.animatingTo === t.currentSlide && !x && null !== d) {
                      var n = p ? -d : d,
                        i = n > 0 ? t.getTarget("next") : t.getTarget("prev");
                      t.canAdvance(i) &&
                      ((Number(new Date()) - v < 550 && Math.abs(n) > 50) ||
                        Math.abs(n) > c / 2)
                        ? t.flexAnimate(i, t.vars.pauseOnAction)
                        : m ||
                          t.flexAnimate(
                            t.currentSlide,
                            t.vars.pauseOnAction,
                            !0
                          );
                    }
                    (a = null), (s = null), (d = null), (u = null), (C = 0);
                  }
                }
                var a,
                  s,
                  u,
                  c,
                  d,
                  v,
                  g,
                  y,
                  b,
                  x = !1,
                  w = 0,
                  T = 0,
                  C = 0;
                l
                  ? ((i.style.msTouchAction = "none"),
                    (i._gesture = new MSGesture()),
                    (i._gesture.target = i),
                    i.addEventListener("MSPointerDown", e, !1),
                    (i._slider = o),
                    i.addEventListener("MSGestureChange", n, !1),
                    i.addEventListener("MSGestureEnd", r, !1))
                  : ((g = function (e) {
                      o.animating
                        ? e.preventDefault()
                        : (window.navigator.msPointerEnabled ||
                            1 === e.touches.length) &&
                          (o.pause(),
                          (c = f ? o.h : o.w),
                          (v = Number(new Date())),
                          (w = e.touches[0].pageX),
                          (T = e.touches[0].pageY),
                          (u =
                            h && p && o.animatingTo === o.last
                              ? 0
                              : h && p
                              ? o.limit -
                                (o.itemW + o.vars.itemMargin) *
                                  o.move *
                                  o.animatingTo
                              : h && o.currentSlide === o.last
                              ? o.limit
                              : h
                              ? (o.itemW + o.vars.itemMargin) *
                                o.move *
                                o.currentSlide
                              : p
                              ? (o.last - o.currentSlide + o.cloneOffset) * c
                              : (o.currentSlide + o.cloneOffset) * c),
                          (a = f ? T : w),
                          (s = f ? w : T),
                          i.addEventListener("touchmove", y, !1),
                          i.addEventListener("touchend", b, !1));
                    }),
                    (y = function (e) {
                      (w = e.touches[0].pageX),
                        (T = e.touches[0].pageY),
                        (d = f ? a - T : (o.vars.rtl ? -1 : 1) * (a - w)),
                        (x = f
                          ? Math.abs(d) < Math.abs(w - s)
                          : Math.abs(d) < Math.abs(T - s));
                      (!x || Number(new Date()) - v > 500) &&
                        (e.preventDefault(),
                        !m &&
                          o.transitions &&
                          (o.vars.animationLoop ||
                            (d /=
                              (0 === o.currentSlide && d < 0) ||
                              (o.currentSlide === o.last && d > 0)
                                ? Math.abs(d) / c + 2
                                : 1),
                          o.setProps(u + d, "setTouch")));
                    }),
                    (b = function (e) {
                      if (
                        (i.removeEventListener("touchmove", y, !1),
                        o.animatingTo === o.currentSlide && !x && null !== d)
                      ) {
                        var t = p ? -d : d,
                          n = t > 0 ? o.getTarget("next") : o.getTarget("prev");
                        o.canAdvance(n) &&
                        ((Number(new Date()) - v < 550 && Math.abs(t) > 50) ||
                          Math.abs(t) > c / 2)
                          ? o.flexAnimate(n, o.vars.pauseOnAction)
                          : m ||
                            o.flexAnimate(
                              o.currentSlide,
                              o.vars.pauseOnAction,
                              !0
                            );
                      }
                      i.removeEventListener("touchend", b, !1),
                        (a = null),
                        (s = null),
                        (d = null),
                        (u = null);
                    }),
                    i.addEventListener("touchstart", g, !1));
              },
              resize: function () {
                !o.animating &&
                  o.is(":visible") &&
                  (h || o.doMath(),
                  m
                    ? g.smoothHeight()
                    : h
                    ? (o.slides.width(o.computedW),
                      o.update(o.pagingCount),
                      o.setProps())
                    : f
                    ? (o.viewport.height(o.h), o.setProps(o.h, "setTotal"))
                    : (o.vars.smoothHeight && g.smoothHeight(),
                      o.newSlides.width(o.computedW),
                      o.setProps(o.computedW, "setTotal")));
              },
              smoothHeight: function (e) {
                if (!f || m) {
                  var t = m ? o : o.viewport;
                  e
                    ? t.animate(
                        {
                          height: o.slides.eq(o.animatingTo).innerHeight(),
                        },
                        e
                      )
                    : t.innerHeight(o.slides.eq(o.animatingTo).innerHeight());
                }
              },
              sync: function (t) {
                var n = e(o.vars.sync).data("flexslider"),
                  i = o.animatingTo;
                switch (t) {
                  case "animate":
                    n.flexAnimate(i, o.vars.pauseOnAction, !1, !0);
                    break;
                  case "play":
                    n.playing || n.asNav || n.play();
                    break;
                  case "pause":
                    n.pause();
                }
              },
              uniqueID: function (t) {
                return (
                  t
                    .filter("[id]")
                    .add(t.find("[id]"))
                    .each(function () {
                      var t = e(this);
                      t.attr("id", t.attr("id") + "_clone");
                    }),
                  t
                );
              },
              pauseInvisible: {
                visProp: null,
                init: function () {
                  var e = g.pauseInvisible.getHiddenProp();
                  if (e) {
                    var t = e.replace(/[H|h]idden/, "") + "visibilitychange";
                    document.addEventListener(t, function () {
                      g.pauseInvisible.isHidden()
                        ? o.startTimeout
                          ? clearTimeout(o.startTimeout)
                          : o.pause()
                        : o.started
                        ? o.play()
                        : o.vars.initDelay > 0
                        ? setTimeout(o.play, o.vars.initDelay)
                        : o.play();
                    });
                  }
                },
                isHidden: function () {
                  var e = g.pauseInvisible.getHiddenProp();
                  return !!e && document[e];
                },
                getHiddenProp: function () {
                  var e = ["webkit", "moz", "ms", "o"];
                  if ("hidden" in document) return "hidden";
                  for (var t = 0; t < e.length; t++)
                    if (e[t] + "Hidden" in document) return e[t] + "Hidden";
                  return null;
                },
              },
              setToClearWatchedEvent: function () {
                clearTimeout(a),
                  (a = setTimeout(function () {
                    d = "";
                  }, 3e3));
              },
            }),
            (o.flexAnimate = function (t, n, i, r, a) {
              if (
                (o.vars.animationLoop ||
                  t === o.currentSlide ||
                  (o.direction = t > o.currentSlide ? "next" : "prev"),
                v &&
                  1 === o.pagingCount &&
                  (o.direction = o.currentItem < t ? "next" : "prev"),
                !o.animating && (o.canAdvance(t, a) || i) && o.is(":visible"))
              ) {
                if (v && r) {
                  var l = e(o.vars.asNavFor).data("flexslider");
                  if (
                    ((o.atEnd = 0 === t || t === o.count - 1),
                    l.flexAnimate(t, !0, !1, !0, a),
                    (o.direction = o.currentItem < t ? "next" : "prev"),
                    (l.direction = o.direction),
                    Math.ceil((t + 1) / o.visible) - 1 === o.currentSlide ||
                      0 === t)
                  )
                    return (
                      (o.currentItem = t),
                      o.slides
                        .removeClass(s + "active-slide")
                        .eq(t)
                        .addClass(s + "active-slide"),
                      !1
                    );
                  (o.currentItem = t),
                    o.slides
                      .removeClass(s + "active-slide")
                      .eq(t)
                      .addClass(s + "active-slide"),
                    (t = Math.floor(t / o.visible));
                }
                if (
                  ((o.animating = !0),
                  (o.animatingTo = t),
                  n && o.pause(),
                  o.vars.before(o),
                  o.syncExists && !a && g.sync("animate"),
                  o.vars.controlNav && g.controlNav.active(),
                  h ||
                    o.slides
                      .removeClass(s + "active-slide")
                      .eq(t)
                      .addClass(s + "active-slide"),
                  (o.atEnd = 0 === t || t === o.last),
                  o.vars.directionNav && g.directionNav.update(),
                  t === o.last &&
                    (o.vars.end(o), o.vars.animationLoop || o.pause()),
                  m)
                )
                  u
                    ? (o.slides.eq(o.currentSlide).css({
                        opacity: 0,
                        zIndex: 1,
                      }),
                      o.slides.eq(t).css({
                        opacity: 1,
                        zIndex: 2,
                      }),
                      o.wrapup(b))
                    : (o.slides
                        .eq(o.currentSlide)
                        .css({
                          zIndex: 1,
                        })
                        .animate(
                          {
                            opacity: 0,
                          },
                          o.vars.animationSpeed,
                          o.vars.easing
                        ),
                      o.slides
                        .eq(t)
                        .css({
                          zIndex: 2,
                        })
                        .animate(
                          {
                            opacity: 1,
                          },
                          o.vars.animationSpeed,
                          o.vars.easing,
                          o.wrapup
                        ));
                else {
                  var c,
                    d,
                    y,
                    b = f ? o.slides.filter(":first").height() : o.computedW;
                  h
                    ? ((c = o.vars.itemMargin),
                      (y = (o.itemW + c) * o.move * o.animatingTo),
                      (d = y > o.limit && 1 !== o.visible ? o.limit : y))
                    : (d =
                        0 === o.currentSlide &&
                        t === o.count - 1 &&
                        o.vars.animationLoop &&
                        "next" !== o.direction
                          ? p
                            ? (o.count + o.cloneOffset) * b
                            : 0
                          : o.currentSlide === o.last &&
                            0 === t &&
                            o.vars.animationLoop &&
                            "prev" !== o.direction
                          ? p
                            ? 0
                            : (o.count + 1) * b
                          : p
                          ? (o.count - 1 - t + o.cloneOffset) * b
                          : (t + o.cloneOffset) * b),
                    o.setProps(d, "", o.vars.animationSpeed),
                    o.transitions
                      ? ((o.vars.animationLoop && o.atEnd) ||
                          ((o.animating = !1),
                          (o.currentSlide = o.animatingTo)),
                        o.container.unbind("webkitTransitionEnd transitionend"),
                        o.container.bind(
                          "webkitTransitionEnd transitionend",
                          function () {
                            clearTimeout(o.ensureAnimationEnd), o.wrapup(b);
                          }
                        ),
                        clearTimeout(o.ensureAnimationEnd),
                        (o.ensureAnimationEnd = setTimeout(function () {
                          o.wrapup(b);
                        }, o.vars.animationSpeed + 100)))
                      : o.container.animate(
                          o.args,
                          o.vars.animationSpeed,
                          o.vars.easing,
                          function () {
                            o.wrapup(b);
                          }
                        );
                }
                o.vars.smoothHeight && g.smoothHeight(o.vars.animationSpeed);
              }
            }),
            (o.wrapup = function (e) {
              m ||
                h ||
                (0 === o.currentSlide &&
                o.animatingTo === o.last &&
                o.vars.animationLoop
                  ? o.setProps(e, "jumpEnd")
                  : o.currentSlide === o.last &&
                    0 === o.animatingTo &&
                    o.vars.animationLoop &&
                    o.setProps(e, "jumpStart")),
                (o.animating = !1),
                (o.currentSlide = o.animatingTo),
                o.vars.after(o);
            }),
            (o.animateSlides = function () {
              !o.animating && n && o.flexAnimate(o.getTarget("next"));
            }),
            (o.pause = function () {
              clearInterval(o.animatedSlides),
                (o.animatedSlides = null),
                (o.playing = !1),
                o.vars.pausePlay && g.pausePlay.update("play"),
                o.syncExists && g.sync("pause");
            }),
            (o.play = function () {
              o.playing && clearInterval(o.animatedSlides),
                (o.animatedSlides =
                  o.animatedSlides ||
                  setInterval(o.animateSlides, o.vars.slideshowSpeed)),
                (o.started = o.playing = !0),
                o.vars.pausePlay && g.pausePlay.update("pause"),
                o.syncExists && g.sync("play");
            }),
            (o.stop = function () {
              o.pause(), (o.stopped = !0);
            }),
            (o.canAdvance = function (e, t) {
              var n = v ? o.pagingCount - 1 : o.last;
              return (
                !!t ||
                !(
                  !v ||
                  o.currentItem !== o.count - 1 ||
                  0 !== e ||
                  "prev" !== o.direction
                ) ||
                ((!v ||
                  0 !== o.currentItem ||
                  e !== o.pagingCount - 1 ||
                  "next" === o.direction) &&
                  !(e === o.currentSlide && !v) &&
                  (!!o.vars.animationLoop ||
                    ((!o.atEnd ||
                      0 !== o.currentSlide ||
                      e !== n ||
                      "next" === o.direction) &&
                      (!o.atEnd ||
                        o.currentSlide !== n ||
                        0 !== e ||
                        "next" !== o.direction))))
              );
            }),
            (o.getTarget = function (e) {
              return (
                (o.direction = e),
                "next" === e
                  ? o.currentSlide === o.last
                    ? 0
                    : o.currentSlide + 1
                  : 0 === o.currentSlide
                  ? o.last
                  : o.currentSlide - 1
              );
            }),
            (o.setProps = function (e, t, n) {
              var i = (function () {
                var n =
                  e || (o.itemW + o.vars.itemMargin) * o.move * o.animatingTo;
                return (
                  (function () {
                    if (h)
                      return "setTouch" === t
                        ? e
                        : p && o.animatingTo === o.last
                        ? 0
                        : p
                        ? o.limit -
                          (o.itemW + o.vars.itemMargin) * o.move * o.animatingTo
                        : o.animatingTo === o.last
                        ? o.limit
                        : n;
                    switch (t) {
                      case "setTotal":
                        return p
                          ? (o.count - 1 - o.currentSlide + o.cloneOffset) * e
                          : (o.currentSlide + o.cloneOffset) * e;
                      case "setTouch":
                        return e;
                      case "jumpEnd":
                        return p ? e : o.count * e;
                      case "jumpStart":
                        return p ? o.count * e : e;
                      default:
                        return e;
                    }
                  })() *
                    (o.vars.rtl ? 1 : -1) +
                  "px"
                );
              })();
              o.transitions &&
                ((i = o.isFirefox
                  ? f
                    ? "translate3d(0," + i + ",0)"
                    : "translate3d(" + parseInt(i) + "px,0,0)"
                  : f
                  ? "translate3d(0," + i + ",0)"
                  : "translate3d(" +
                    (o.vars.rtl ? -1 : 1) * parseInt(i) +
                    "px,0,0)"),
                (n = void 0 !== n ? n / 1e3 + "s" : "0s"),
                o.container.css("-" + o.pfx + "-transition-duration", n),
                o.container.css("transition-duration", n)),
                (o.args[o.prop] = i),
                (o.transitions || void 0 === n) && o.container.css(o.args),
                o.container.css("transform", i);
            }),
            (o.setup = function (t) {
              if (m)
                o.vars.rtl
                  ? o.slides.css({
                      width: "100%",
                      float: "right",
                      marginLeft: "-100%",
                      position: "relative",
                    })
                  : o.slides.css({
                      width: "100%",
                      float: "left",
                      marginRight: "-100%",
                      position: "relative",
                    }),
                  "init" === t &&
                    (u
                      ? o.slides
                          .css({
                            opacity: 0,
                            display: "block",
                            webkitTransition:
                              "opacity " +
                              o.vars.animationSpeed / 1e3 +
                              "s ease",
                            zIndex: 1,
                          })
                          .eq(o.currentSlide)
                          .css({
                            opacity: 1,
                            zIndex: 2,
                          })
                      : 0 == o.vars.fadeFirstSlide
                      ? o.slides
                          .css({
                            opacity: 0,
                            display: "block",
                            zIndex: 1,
                          })
                          .eq(o.currentSlide)
                          .css({
                            zIndex: 2,
                          })
                          .css({
                            opacity: 1,
                          })
                      : o.slides
                          .css({
                            opacity: 0,
                            display: "block",
                            zIndex: 1,
                          })
                          .eq(o.currentSlide)
                          .css({
                            zIndex: 2,
                          })
                          .animate(
                            {
                              opacity: 1,
                            },
                            o.vars.animationSpeed,
                            o.vars.easing
                          )),
                  o.vars.smoothHeight && g.smoothHeight();
              else {
                var n, i;
                "init" === t &&
                  ((o.viewport = e('<div class="' + s + 'viewport"></div>')
                    .css({
                      overflow: "hidden",
                      position: "relative",
                    })
                    .appendTo(o)
                    .append(o.container)),
                  (o.cloneCount = 0),
                  (o.cloneOffset = 0),
                  p &&
                    ((i = e.makeArray(o.slides).reverse()),
                    (o.slides = e(i)),
                    o.container.empty().append(o.slides))),
                  o.vars.animationLoop &&
                    !h &&
                    ((o.cloneCount = 2),
                    (o.cloneOffset = 1),
                    "init" !== t && o.container.find(".clone").remove(),
                    o.container
                      .append(
                        g
                          .uniqueID(o.slides.first().clone().addClass("clone"))
                          .attr("aria-hidden", "true")
                      )
                      .prepend(
                        g
                          .uniqueID(o.slides.last().clone().addClass("clone"))
                          .attr("aria-hidden", "true")
                      )),
                  (o.newSlides = e(o.vars.selector, o)),
                  (n = p
                    ? o.count - 1 - o.currentSlide + o.cloneOffset
                    : o.currentSlide + o.cloneOffset),
                  f && !h
                    ? (o.container
                        .height(200 * (o.count + o.cloneCount) + "%")
                        .css("position", "absolute")
                        .width("100%"),
                      setTimeout(
                        function () {
                          o.newSlides.css({
                            display: "block",
                          }),
                            o.doMath(),
                            o.viewport.height(o.h),
                            o.setProps(n * o.h, "init");
                        },
                        "init" === t ? 100 : 0
                      ))
                    : (o.container.width(200 * (o.count + o.cloneCount) + "%"),
                      o.setProps(n * o.computedW, "init"),
                      setTimeout(
                        function () {
                          o.doMath(),
                            o.vars.rtl && o.isFirefox
                              ? o.newSlides.css({
                                  width: o.computedW,
                                  marginRight: o.computedM,
                                  float: "right",
                                  display: "block",
                                })
                              : o.newSlides.css({
                                  width: o.computedW,
                                  marginRight: o.computedM,
                                  float: "left",
                                  display: "block",
                                }),
                            o.vars.smoothHeight && g.smoothHeight();
                        },
                        "init" === t ? 100 : 0
                      ));
              }
              h ||
                o.slides
                  .removeClass(s + "active-slide")
                  .eq(o.currentSlide)
                  .addClass(s + "active-slide"),
                o.vars.init(o);
            }),
            (o.doMath = function () {
              var e = o.slides.first(),
                t = o.vars.itemMargin,
                n = o.vars.minItems,
                i = o.vars.maxItems;
              (o.w = void 0 === o.viewport ? o.width() : o.viewport.width()),
                o.isFirefox && (o.w = o.width()),
                (o.h = e.height()),
                (o.boxPadding = e.outerWidth() - e.width()),
                h
                  ? ((o.itemT = o.vars.itemWidth + t),
                    (o.itemM = t),
                    (o.minW = n ? n * o.itemT : o.w),
                    (o.maxW = i ? i * o.itemT - t : o.w),
                    (o.itemW =
                      o.minW > o.w
                        ? (o.w - t * (n - 1)) / n
                        : o.maxW < o.w
                        ? (o.w - t * (i - 1)) / i
                        : o.vars.itemWidth > o.w
                        ? o.w
                        : o.vars.itemWidth),
                    (o.visible = Math.floor(o.w / o.itemW)),
                    (o.move =
                      o.vars.move > 0 && o.vars.move < o.visible
                        ? o.vars.move
                        : o.visible),
                    (o.pagingCount = Math.ceil(
                      (o.count - o.visible) / o.move + 1
                    )),
                    (o.last = o.pagingCount - 1),
                    (o.limit =
                      1 === o.pagingCount
                        ? 0
                        : o.vars.itemWidth > o.w
                        ? o.itemW * (o.count - 1) + t * (o.count - 1)
                        : (o.itemW + t) * o.count - o.w - t))
                  : ((o.itemW = o.w),
                    (o.itemM = t),
                    (o.pagingCount = o.count),
                    (o.last = o.count - 1)),
                (o.computedW = o.itemW - o.boxPadding),
                (o.computedM = o.itemM);
            }),
            (o.update = function (e, t) {
              o.doMath(),
                h ||
                  (e < o.currentSlide
                    ? (o.currentSlide += 1)
                    : e <= o.currentSlide && 0 !== e && (o.currentSlide -= 1),
                  (o.animatingTo = o.currentSlide)),
                o.vars.controlNav &&
                  !o.manualControls &&
                  (("add" === t && !h) || o.pagingCount > o.controlNav.length
                    ? g.controlNav.update("add")
                    : (("remove" === t && !h) ||
                        o.pagingCount < o.controlNav.length) &&
                      (h &&
                        o.currentSlide > o.last &&
                        ((o.currentSlide -= 1), (o.animatingTo -= 1)),
                      g.controlNav.update("remove", o.last))),
                o.vars.directionNav && g.directionNav.update();
            }),
            (o.addSlide = function (t, n) {
              var i = e(t);
              (o.count += 1),
                (o.last = o.count - 1),
                f && p
                  ? void 0 !== n
                    ? o.slides.eq(o.count - n).after(i)
                    : o.container.prepend(i)
                  : void 0 !== n
                  ? o.slides.eq(n).before(i)
                  : o.container.append(i),
                o.update(n, "add"),
                (o.slides = e(o.vars.selector + ":not(.clone)", o)),
                o.setup(),
                o.vars.added(o);
            }),
            (o.removeSlide = function (t) {
              var n = isNaN(t) ? o.slides.index(e(t)) : t;
              (o.count -= 1),
                (o.last = o.count - 1),
                isNaN(t)
                  ? e(t, o.slides).remove()
                  : f && p
                  ? o.slides.eq(o.last).remove()
                  : o.slides.eq(t).remove(),
                o.doMath(),
                o.update(n, "remove"),
                (o.slides = e(o.vars.selector + ":not(.clone)", o)),
                o.setup(),
                o.vars.removed(o);
            }),
            g.init();
        }),
          e(window)
            .blur(function (e) {
              n = !1;
            })
            .focus(function (e) {
              n = !0;
            }),
          (e.flexslider.defaults = {
            namespace: "flex-",
            selector: ".slides > li",
            animation: "fade",
            easing: "swing",
            direction: "horizontal",
            reverse: !1,
            animationLoop: !0,
            smoothHeight: !1,
            startAt: 0,
            slideshow: !0,
            slideshowSpeed: 7e3,
            animationSpeed: 600,
            initDelay: 0,
            randomize: !1,
            fadeFirstSlide: !0,
            thumbCaptions: !1,
            pauseOnAction: !0,
            pauseOnHover: !1,
            pauseInvisible: !0,
            useCSS: !0,
            touch: !0,
            video: !1,
            controlNav: !0,
            directionNav: !0,
            prevText: "Previous",
            nextText: "Next",
            keyboard: !0,
            multipleKeyboard: !1,
            mousewheel: !1,
            pausePlay: !1,
            pauseText: "Pause",
            playText: "Play",
            controlsContainer: "",
            manualControls: "",
            customDirectionNav: "",
            sync: "",
            asNavFor: "",
            itemWidth: 0,
            itemMargin: 0,
            minItems: 1,
            maxItems: 0,
            move: 0,
            allowOneSlide: !0,
            isFirefox: !1,
            start: function () {},
            before: function () {},
            after: function () {},
            end: function () {},
            added: function () {},
            removed: function () {},
            init: function () {},
            rtl: !1,
          }),
          (e.fn.flexslider = function (t) {
            if ((void 0 === t && (t = {}), "object" == typeof t))
              return this.each(function () {
                var n = e(this),
                  i = t.selector ? t.selector : ".slides > li",
                  r = n.find(i);
                (1 === r.length && !1 === t.allowOneSlide) || 0 === r.length
                  ? (r.fadeIn(400), t.start && t.start(n))
                  : void 0 === n.data("flexslider") &&
                    new e.flexslider(this, t);
              });
            var n = e(this).data("flexslider");
            switch (t) {
              case "play":
                n.play();
                break;
              case "pause":
                n.pause();
                break;
              case "stop":
                n.stop();
                break;
              case "next":
                n.flexAnimate(n.getTarget("next"), !0);
                break;
              case "prev":
              case "previous":
                n.flexAnimate(n.getTarget("prev"), !0);
                break;
              default:
                "number" == typeof t && n.flexAnimate(t, !0);
            }
          });
      })(e);
    }.call(t, n(1), n(40).setImmediate));
  },
  function (e, t) {
    function n() {
      throw new Error("setTimeout has not been defined");
    }
    function i() {
      throw new Error("clearTimeout has not been defined");
    }
    function r(e) {
      if (c === setTimeout) return setTimeout(e, 0);
      if ((c === n || !c) && setTimeout)
        return (c = setTimeout), setTimeout(e, 0);
      try {
        return c(e, 0);
      } catch (t) {
        try {
          return c.call(null, e, 0);
        } catch (t) {
          return c.call(this, e, 0);
        }
      }
    }
    function o(e) {
      if (d === clearTimeout) return clearTimeout(e);
      if ((d === i || !d) && clearTimeout)
        return (d = clearTimeout), clearTimeout(e);
      try {
        return d(e);
      } catch (t) {
        try {
          return d.call(null, e);
        } catch (t) {
          return d.call(this, e);
        }
      }
    }
    function a() {
      m &&
        p &&
        ((m = !1), p.length ? (h = p.concat(h)) : (v = -1), h.length && s());
    }
    function s() {
      if (!m) {
        var e = r(a);
        m = !0;
        for (var t = h.length; t; ) {
          for (p = h, h = []; ++v < t; ) p && p[v].run();
          (v = -1), (t = h.length);
        }
        (p = null), (m = !1), o(e);
      }
    }
    function l(e, t) {
      (this.fun = e), (this.array = t);
    }
    function u() {}
    var c,
      d,
      f = (e.exports = {});
    !(function () {
      try {
        c = "function" == typeof setTimeout ? setTimeout : n;
      } catch (e) {
        c = n;
      }
      try {
        d = "function" == typeof clearTimeout ? clearTimeout : i;
      } catch (e) {
        d = i;
      }
    })();
    var p,
      h = [],
      m = !1,
      v = -1;
    (f.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      h.push(new l(e, t)), 1 !== h.length || m || r(s);
    }),
      (l.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (f.title = "browser"),
      (f.browser = !0),
      (f.env = {}),
      (f.argv = []),
      (f.version = ""),
      (f.versions = {}),
      (f.on = u),
      (f.addListener = u),
      (f.once = u),
      (f.off = u),
      (f.removeListener = u),
      (f.removeAllListeners = u),
      (f.emit = u),
      (f.prependListener = u),
      (f.prependOnceListener = u),
      (f.listeners = function (e) {
        return [];
      }),
      (f.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (f.cwd = function () {
        return "/";
      }),
      (f.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (f.umask = function () {
        return 0;
      });
  },
  function (e, t, n) {
    (function (e, t) {
      !(function (e, n) {
        "use strict";

        function i(e) {
          "function" != typeof e && (e = new Function("" + e));
          for (
            var t = new Array(arguments.length - 1), n = 0;
            n < t.length;
            n++
          )
            t[n] = arguments[n + 1];
          var i = {
            callback: e,
            args: t,
          };
          return (u[l] = i), s(l), l++;
        }
        function r(e) {
          delete u[e];
        }
        function o(e) {
          var t = e.callback,
            i = e.args;
          switch (i.length) {
            case 0:
              t();
              break;
            case 1:
              t(i[0]);
              break;
            case 2:
              t(i[0], i[1]);
              break;
            case 3:
              t(i[0], i[1], i[2]);
              break;
            default:
              t.apply(n, i);
          }
        }
        function a(e) {
          if (c) setTimeout(a, 0, e);
          else {
            var t = u[e];
            if (t) {
              c = !0;
              try {
                o(t);
              } finally {
                r(e), (c = !1);
              }
            }
          }
        }
        if (!e.setImmediate) {
          var s,
            l = 1,
            u = {},
            c = !1,
            d = e.document,
            f = Object.getPrototypeOf && Object.getPrototypeOf(e);
          (f = f && f.setTimeout ? f : e),
            "[object process]" === {}.toString.call(e.process)
              ? (function () {
                  s = function (e) {
                    t.nextTick(function () {
                      a(e);
                    });
                  };
                })()
              : (function () {
                  if (e.postMessage && !e.importScripts) {
                    var t = !0,
                      n = e.onmessage;
                    return (
                      (e.onmessage = function () {
                        t = !1;
                      }),
                      e.postMessage("", "*"),
                      (e.onmessage = n),
                      t
                    );
                  }
                })()
              ? (function () {
                  var t = "setImmediate$" + Math.random() + "$",
                    n = function (n) {
                      n.source === e &&
                        "string" == typeof n.data &&
                        0 === n.data.indexOf(t) &&
                        a(+n.data.slice(t.length));
                    };
                  e.addEventListener
                    ? e.addEventListener("message", n, !1)
                    : e.attachEvent("onmessage", n),
                    (s = function (n) {
                      e.postMessage(t + n, "*");
                    });
                })()
              : e.MessageChannel
              ? (function () {
                  var e = new MessageChannel();
                  (e.port1.onmessage = function (e) {
                    a(e.data);
                  }),
                    (s = function (t) {
                      e.port2.postMessage(t);
                    });
                })()
              : d && "onreadystatechange" in d.createElement("script")
              ? (function () {
                  var e = d.documentElement;
                  s = function (t) {
                    var n = d.createElement("script");
                    (n.onreadystatechange = function () {
                      a(t),
                        (n.onreadystatechange = null),
                        e.removeChild(n),
                        (n = null);
                    }),
                      e.appendChild(n);
                  };
                })()
              : (function () {
                  s = function (e) {
                    setTimeout(a, 0, e);
                  };
                })(),
            (f.setImmediate = i),
            (f.clearImmediate = r);
        }
      })("undefined" == typeof self ? (void 0 === e ? this : e) : self);
    }.call(t, n(3), n(38)));
  },
  function (e, t, n) {
    (function (e) {
      function i(e, t) {
        (this._id = e), (this._clearFn = t);
      }
      var r =
          (void 0 !== e && e) || ("undefined" != typeof self && self) || window,
        o = Function.prototype.apply;
      (t.setTimeout = function () {
        return new i(o.call(setTimeout, r, arguments), clearTimeout);
      }),
        (t.setInterval = function () {
          return new i(o.call(setInterval, r, arguments), clearInterval);
        }),
        (t.clearTimeout = t.clearInterval =
          function (e) {
            e && e.close();
          }),
        (i.prototype.unref = i.prototype.ref = function () {}),
        (i.prototype.close = function () {
          this._clearFn.call(r, this._id);
        }),
        (t.enroll = function (e, t) {
          clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
        }),
        (t.unenroll = function (e) {
          clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
        }),
        (t._unrefActive = t.active =
          function (e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 &&
              (e._idleTimeoutId = setTimeout(function () {
                e._onTimeout && e._onTimeout();
              }, t));
          }),
        n(39),
        (t.setImmediate =
          ("undefined" != typeof self && self.setImmediate) ||
          (void 0 !== e && e.setImmediate) ||
          (this && this.setImmediate)),
        (t.clearImmediate =
          ("undefined" != typeof self && self.clearImmediate) ||
          (void 0 !== e && e.clearImmediate) ||
          (this && this.clearImmediate));
    }.call(t, n(3)));
  },
  function (e, t, n) {
    var i, r, o;
    !(function (n, a) {
      (r = [e, t]),
        (i = a),
        void 0 !== (o = "function" == typeof i ? i.apply(t, r) : i) &&
          (e.exports = o);
    })(0, function (e, t) {
      "use strict";

      function n(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function i(e, t) {
        return t.indexOf(e) >= 0;
      }
      function r(e, t) {
        for (var n in t)
          if (null == e[n]) {
            var i = t[n];
            e[n] = i;
          }
        return e;
      }
      function o(e) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          e
        );
      }
      function a(e) {
        var t =
            !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1],
          n =
            !(arguments.length <= 2 || void 0 === arguments[2]) && arguments[2],
          i =
            arguments.length <= 3 || void 0 === arguments[3]
              ? null
              : arguments[3],
          r = void 0;
        return (
          null != document.createEvent
            ? ((r = document.createEvent("CustomEvent")),
              r.initCustomEvent(e, t, n, i))
            : null != document.createEventObject
            ? ((r = document.createEventObject()), (r.eventType = e))
            : (r.eventName = e),
          r
        );
      }
      function s(e, t) {
        null != e.dispatchEvent
          ? e.dispatchEvent(t)
          : t in (null != e)
          ? e[t]()
          : "on" + t in (null != e) && e["on" + t]();
      }
      function l(e, t, n) {
        null != e.addEventListener
          ? e.addEventListener(t, n, !1)
          : null != e.attachEvent
          ? e.attachEvent("on" + t, n)
          : (e[t] = n);
      }
      function u(e, t, n) {
        null != e.removeEventListener
          ? e.removeEventListener(t, n, !1)
          : null != e.detachEvent
          ? e.detachEvent("on" + t, n)
          : delete e[t];
      }
      function c() {
        return "innerHeight" in window
          ? window.innerHeight
          : document.documentElement.clientHeight;
      }
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var d,
        f,
        p = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var i = t[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i);
            }
          }
          return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t;
          };
        })(),
        h =
          window.WeakMap ||
          window.MozWeakMap ||
          (function () {
            function e() {
              n(this, e), (this.keys = []), (this.values = []);
            }
            return (
              p(e, [
                {
                  key: "get",
                  value: function (e) {
                    for (var t = 0; t < this.keys.length; t++) {
                      if (this.keys[t] === e) return this.values[t];
                    }
                  },
                },
                {
                  key: "set",
                  value: function (e, t) {
                    for (var n = 0; n < this.keys.length; n++) {
                      if (this.keys[n] === e) return (this.values[n] = t), this;
                    }
                    return this.keys.push(e), this.values.push(t), this;
                  },
                },
              ]),
              e
            );
          })(),
        m =
          window.MutationObserver ||
          window.WebkitMutationObserver ||
          window.MozMutationObserver ||
          ((f = d =
            (function () {
              function e() {
                n(this, e), "undefined" != typeof console && console;
              }
              return (
                p(e, [
                  {
                    key: "observe",
                    value: function () {},
                  },
                ]),
                e
              );
            })()),
          (d.notSupported = !0),
          f),
        v =
          window.getComputedStyle ||
          function (e) {
            var t = /(\-([a-z]){1})/g;
            return {
              getPropertyValue: function (n) {
                "float" === n && (n = "styleFloat"),
                  t.test(n) &&
                    n.replace(t, function (e, t) {
                      return t.toUpperCase();
                    });
                var i = e.currentStyle;
                return (null != i ? i[n] : void 0) || null;
              },
            };
          },
        g = (function () {
          function e() {
            var t =
              arguments.length <= 0 || void 0 === arguments[0]
                ? {}
                : arguments[0];
            n(this, e),
              (this.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 100,
                mobile: true,
                live: true,
                callback: null,
                scrollContainer: null,
              }),
              (this.animate = (function () {
                return "requestAnimationFrame" in window
                  ? function (e) {
                      return window.requestAnimationFrame(e);
                    }
                  : function (e) {
                      return e();
                    };
              })()),
              (this.vendors = ["moz", "webkit"]),
              (this.start = this.start.bind(this)),
              (this.resetAnimation = this.resetAnimation.bind(this)),
              (this.scrollHandler = this.scrollHandler.bind(this)),
              (this.scrollCallback = this.scrollCallback.bind(this)),
              (this.scrolled = !0),
              (this.config = r(t, this.defaults)),
              null != t.scrollContainer &&
                (this.config.scrollContainer = document.querySelector(
                  t.scrollContainer
                )),
              (this.animationNameCache = new h()),
              (this.wowEvent = a(this.config.boxClass));
          }
          return (
            p(e, [
              {
                key: "init",
                value: function () {
                  (this.element = window.document.documentElement),
                    i(document.readyState, ["interactive", "complete"])
                      ? this.start()
                      : l(document, "DOMContentLoaded", this.start),
                    (this.finished = []);
                },
              },
              {
                key: "start",
                value: function () {
                  var e = this;
                  if (
                    ((this.stopped = !1),
                    (this.boxes = [].slice.call(
                      this.element.querySelectorAll("." + this.config.boxClass)
                    )),
                    (this.all = this.boxes.slice(0)),
                    this.boxes.length)
                  )
                    if (this.disabled()) this.resetStyle();
                    else
                      for (var t = 0; t < this.boxes.length; t++) {
                        var n = this.boxes[t];
                        this.applyStyle(n, !0);
                      }
                  if (
                    (this.disabled() ||
                      (l(
                        this.config.scrollContainer || window,
                        "scroll",
                        this.scrollHandler
                      ),
                      l(window, "resize", this.scrollHandler),
                      (this.interval = setInterval(this.scrollCallback, 50))),
                    this.config.live)
                  ) {
                    new m(function (t) {
                      for (var n = 0; n < t.length; n++)
                        for (
                          var i = t[n], r = 0;
                          r < i.addedNodes.length;
                          r++
                        ) {
                          var o = i.addedNodes[r];
                          e.doSync(o);
                        }
                    }).observe(document.body, {
                      childList: !0,
                      subtree: !0,
                    });
                  }
                },
              },
              {
                key: "stop",
                value: function () {
                  (this.stopped = !0),
                    u(
                      this.config.scrollContainer || window,
                      "scroll",
                      this.scrollHandler
                    ),
                    u(window, "resize", this.scrollHandler),
                    null != this.interval && clearInterval(this.interval);
                },
              },
              {
                key: "sync",
                value: function () {
                  m.notSupported && this.doSync(this.element);
                },
              },
              {
                key: "doSync",
                value: function (e) {
                  if (
                    ((void 0 !== e && null !== e) || (e = this.element),
                    1 === e.nodeType)
                  ) {
                    e = e.parentNode || e;
                    for (
                      var t = e.querySelectorAll("." + this.config.boxClass),
                        n = 0;
                      n < t.length;
                      n++
                    ) {
                      var r = t[n];
                      i(r, this.all) ||
                        (this.boxes.push(r),
                        this.all.push(r),
                        this.stopped || this.disabled()
                          ? this.resetStyle()
                          : this.applyStyle(r, !0),
                        (this.scrolled = !0));
                    }
                  }
                },
              },
              {
                key: "show",
                value: function (e) {
                  return (
                    this.applyStyle(e),
                    (e.className =
                      e.className + " " + this.config.animateClass),
                    null != this.config.callback && this.config.callback(e),
                    s(e, this.wowEvent),
                    l(e, "animationend", this.resetAnimation),
                    l(e, "oanimationend", this.resetAnimation),
                    l(e, "webkitAnimationEnd", this.resetAnimation),
                    l(e, "MSAnimationEnd", this.resetAnimation),
                    e
                  );
                },
              },
              {
                key: "applyStyle",
                value: function (e, t) {
                  var n = this,
                    i = e.getAttribute("data-wow-duration"),
                    r = e.getAttribute("data-wow-delay"),
                    o = e.getAttribute("data-wow-iteration");
                  return this.animate(function () {
                    return n.customStyle(e, t, i, r, o);
                  });
                },
              },
              {
                key: "resetStyle",
                value: function () {
                  for (var e = 0; e < this.boxes.length; e++) {
                    this.boxes[e].style.visibility = "visible";
                  }
                },
              },
              {
                key: "resetAnimation",
                value: function (e) {
                  if (e.type.toLowerCase().indexOf("animationend") >= 0) {
                    var t = e.target || e.srcElement;
                    t.className = t.className
                      .replace(this.config.animateClass, "")
                      .trim();
                  }
                },
              },
              {
                key: "customStyle",
                value: function (e, t, n, i, r) {
                  return (
                    t && this.cacheAnimationName(e),
                    (e.style.visibility = t ? "hidden" : "visible"),
                    n &&
                      this.vendorSet(e.style, {
                        animationDuration: n,
                      }),
                    i &&
                      this.vendorSet(e.style, {
                        animationDelay: i,
                      }),
                    r &&
                      this.vendorSet(e.style, {
                        animationIterationCount: r,
                      }),
                    this.vendorSet(e.style, {
                      animationName: t ? "none" : this.cachedAnimationName(e),
                    }),
                    e
                  );
                },
              },
              {
                key: "vendorSet",
                value: function (e, t) {
                  for (var n in t)
                    if (t.hasOwnProperty(n)) {
                      var i = t[n];
                      e["" + n] = i;
                      for (var r = 0; r < this.vendors.length; r++) {
                        var o = this.vendors[r];
                        e["" + o + n.charAt(0).toUpperCase() + n.substr(1)] = i;
                      }
                    }
                },
              },
              {
                key: "vendorCSS",
                value: function (e, t) {
                  for (
                    var n = v(e), i = n.getPropertyCSSValue(t), r = 0;
                    r < this.vendors.length;
                    r++
                  ) {
                    var o = this.vendors[r];
                    i = i || n.getPropertyCSSValue("-" + o + "-" + t);
                  }
                  return i;
                },
              },
              {
                key: "animationName",
                value: function (e) {
                  var t = void 0;
                  try {
                    t = this.vendorCSS(e, "animation-name").cssText;
                  } catch (n) {
                    t = v(e).getPropertyValue("animation-name");
                  }
                  return "none" === t ? "" : t;
                },
              },
              {
                key: "cacheAnimationName",
                value: function (e) {
                  return this.animationNameCache.set(e, this.animationName(e));
                },
              },
              {
                key: "cachedAnimationName",
                value: function (e) {
                  return this.animationNameCache.get(e);
                },
              },
              {
                key: "scrollHandler",
                value: function () {
                  this.scrolled = !0;
                },
              },
              {
                key: "scrollCallback",
                value: function () {
                  if (this.scrolled) {
                    this.scrolled = !1;
                    for (var e = [], t = 0; t < this.boxes.length; t++) {
                      var n = this.boxes[t];
                      if (n) {
                        if (this.isVisible(n)) {
                          this.show(n);
                          continue;
                        }
                        e.push(n);
                      }
                    }
                    (this.boxes = e),
                      this.boxes.length || this.config.live || this.stop();
                  }
                },
              },
              {
                key: "offsetTop",
                value: function (e) {
                  for (; void 0 === e.offsetTop; ) e = e.parentNode;
                  for (var t = e.offsetTop; e.offsetParent; )
                    (e = e.offsetParent), (t += e.offsetTop);
                  return t;
                },
              },
              {
                key: "isVisible",
                value: function (e) {
                  var t =
                      e.getAttribute("data-wow-offset") || this.config.offset,
                    n =
                      (this.config.scrollContainer &&
                        this.config.scrollContainer.scrollTop) ||
                      window.pageYOffset,
                    i = n + Math.min(this.element.clientHeight, c()) - t,
                    r = this.offsetTop(e),
                    o = r + e.clientHeight;
                  return r <= i && o >= n;
                },
              },
              {
                key: "disabled",
                value: function () {
                  return !this.config.mobile && o(navigator.userAgent);
                },
              },
            ]),
            e
          );
        })();
      (t.default = g), (e.exports = t.default);
    });
  },
]);

window.onload = function () {
  let btn = document.getElementById("more-kai");
  if (btn != null) {
    btn.addEventListener("click", function () {
      document.querySelector("#home-txtdiv").classList.add("active");
    });
  }
  let btn_colse = document.getElementById("more-guan");
  if (btn_colse != null) {
    btn.addEventListener("click", function () {
      document.querySelector("#home-txtdiv").classList.remove("active");
    });
  }
};
