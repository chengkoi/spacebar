import {
  d as P,
  as as Mn,
  E as ae,
  aR as Lt,
  i as ne,
  r as h,
  o as w,
  h as k,
  w as f,
  b as c,
  e as X,
  a as d,
  q as te,
  u as x,
  Y as De,
  s as fe,
  aS as On,
  p as we,
  g as Se,
  c as z,
  C as Re,
  D as Oe,
  G as Pn,
  t as L,
  O as dn,
  P as Vt,
  al as Be,
  x as Y,
  T as fn,
  U as mt,
  F as _e,
  f as ze,
  a4 as wt,
  A as he,
  aF as St,
  aC as Fn,
  X as Nn,
  aT as Ln,
  aU as Vn,
  aV as Rn,
  aW as Bn,
  aX as zn,
  v as Gn,
  z as Xn,
  R as pn,
  a5 as _n,
  aw as Yn,
  aY as Un,
  a6 as Wn,
  B as Xt,
} from "./index-fcbc4c7a.js";
import {
  a as Hn,
  _ as Et,
} from "./index.vue_vue_type_script_setup_true_name_SwitchDark_lang-5343a75a.js";
import { _ as K } from "./plugin-vue_export-helper-c27b6911.js";
import { u as mn, a as Yt } from "./tabs-0635dad8.js";
import { _ as hn } from "./notData-2dc2117c.js";
function jn(n) {
  return {
    all: (n = n || new Map()),
    on: function (e, t) {
      var o = n.get(e);
      o ? o.push(t) : n.set(e, [t]);
    },
    off: function (e, t) {
      var o = n.get(e);
      o && (t ? o.splice(o.indexOf(t) >>> 0, 1) : n.set(e, []));
    },
    emit: function (e, t) {
      var o = n.get(e);
      o &&
        o.slice().map(function (a) {
          a(t);
        }),
        (o = n.get("*")) &&
          o.slice().map(function (a) {
            a(e, t);
          });
    },
  };
}
const gn = jn(),
  H = (n) => (we("data-v-4549fccb"), (n = n()), Se(), n),
  qn = { class: "layout-box" },
  Kn = H(() => d("div", { class: "layout-dark" }, null, -1)),
  Qn = H(() =>
    d(
      "div",
      { class: "layout-container" },
      [
        d("div", { class: "layout-light" }),
        d("div", { class: "layout-content" }),
      ],
      -1
    )
  ),
  Zn = H(() => d("div", { class: "layout-dark" }, null, -1)),
  Jn = H(() =>
    d(
      "div",
      { class: "layout-container" },
      [
        d("div", { class: "layout-light" }),
        d("div", { class: "layout-content" }),
      ],
      -1
    )
  ),
  eo = H(() => d("div", { class: "layout-dark" }, null, -1)),
  to = H(() => d("div", { class: "layout-content" }, null, -1)),
  no = H(() => d("div", { class: "layout-dark" }, null, -1)),
  oo = H(() => d("div", { class: "layout-light" }, null, -1)),
  ao = H(() => d("div", { class: "layout-content" }, null, -1)),
  lo = { class: "theme-item" },
  io = { class: "theme-item mb50" },
  so = { class: "theme-item" },
  ro = H(() => d("span", null, "主题颜色", -1)),
  co = { class: "theme-item" },
  uo = H(() => d("span", null, "暗黑模式", -1)),
  fo = { class: "theme-item" },
  po = H(() => d("span", null, "灰色模式", -1)),
  _o = { class: "theme-item mb40" },
  mo = H(() => d("span", null, "色弱模式", -1)),
  ho = { class: "theme-item" },
  go = H(() => d("span", null, "菜单折叠", -1)),
  vo = { class: "theme-item" },
  bo = H(() => d("span", null, "菜单手风琴", -1)),
  yo = { class: "theme-item" },
  wo = H(() => d("span", null, "面包屑", -1)),
  So = { class: "theme-item" },
  Eo = H(() => d("span", null, "面包屑图标", -1)),
  Co = { class: "theme-item" },
  Do = H(() => d("span", null, "标签栏", -1)),
  xo = { class: "theme-item" },
  To = H(() => d("span", null, "标签栏图标", -1)),
  ko = { class: "theme-item" },
  $o = H(() => d("span", null, "页脚", -1)),
  Ao = P({
    __name: "index",
    setup(n) {
      const {
          changePrimary: e,
          changeGreyOrWeak: t,
          setAsideTheme: o,
          setHeaderTheme: a,
        } = Mn(),
        l = ae(),
        {
          layout: i,
          primary: s,
          isGrey: r,
          isWeak: u,
          asideInverted: _,
          headerInverted: p,
          isCollapse: v,
          accordion: b,
          breadcrumb: g,
          breadcrumbIcon: y,
          tabs: S,
          tabsIcon: A,
          footer: F,
        } = Lt(l),
        O = [
          On,
          "#daa96e",
          "#0c819f",
          "#409eff",
          "#27ae60",
          "#ff5c93",
          "#e74c3c",
          "#fd726d",
          "#f39c12",
          "#9b59b6",
        ],
        R = (Z) => {
          l.setGlobalState("layout", Z), o();
        },
        U = ne(!1);
      return (
        gn.on("openThemeDrawer", () => (U.value = !0)),
        (Z, E) => {
          const Ee = h("Notification"),
            N = h("el-icon"),
            Ce = h("el-divider"),
            le = h("CircleCheckFilled"),
            ue = h("el-tooltip"),
            de = h("QuestionFilled"),
            j = h("el-switch"),
            Pe = h("ColdDrink"),
            ge = h("el-color-picker"),
            Ge = h("Setting"),
            Fe = h("el-drawer");
          return (
            w(),
            k(
              Fe,
              {
                modelValue: U.value,
                "onUpdate:modelValue": E[18] || (E[18] = ($) => (U.value = $)),
                title: "布局设置",
                size: "290px",
              },
              {
                default: f(() => [
                  c(
                    Ce,
                    { class: "divider", "content-position": "center" },
                    {
                      default: f(() => [
                        c(N, null, { default: f(() => [c(Ee)]), _: 1 }),
                        X(" 布局样式 "),
                      ]),
                      _: 1,
                    }
                  ),
                  d("div", qn, [
                    c(
                      ue,
                      {
                        effect: "dark",
                        content: "纵向",
                        placement: "top",
                        "show-after": 200,
                      },
                      {
                        default: f(() => [
                          d(
                            "div",
                            {
                              class: te([
                                "layout-item layout-vertical",
                                { "is-active": x(i) == "vertical" },
                              ]),
                              onClick: E[0] || (E[0] = ($) => R("vertical")),
                            },
                            [
                              Kn,
                              Qn,
                              x(i) == "vertical"
                                ? (w(),
                                  k(
                                    N,
                                    { key: 0 },
                                    { default: f(() => [c(le)]), _: 1 }
                                  ))
                                : De("", !0),
                            ],
                            2
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                    c(
                      ue,
                      {
                        effect: "dark",
                        content: "经典",
                        placement: "top",
                        "show-after": 200,
                      },
                      {
                        default: f(() => [
                          d(
                            "div",
                            {
                              class: te([
                                "layout-item layout-classic",
                                { "is-active": x(i) == "classic" },
                              ]),
                              onClick: E[1] || (E[1] = ($) => R("classic")),
                            },
                            [
                              Zn,
                              Jn,
                              x(i) == "classic"
                                ? (w(),
                                  k(
                                    N,
                                    { key: 0 },
                                    { default: f(() => [c(le)]), _: 1 }
                                  ))
                                : De("", !0),
                            ],
                            2
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                    c(
                      ue,
                      {
                        effect: "dark",
                        content: "横向",
                        placement: "top",
                        "show-after": 200,
                      },
                      {
                        default: f(() => [
                          d(
                            "div",
                            {
                              class: te([
                                "layout-item layout-transverse",
                                { "is-active": x(i) == "transverse" },
                              ]),
                              onClick: E[2] || (E[2] = ($) => R("transverse")),
                            },
                            [
                              eo,
                              to,
                              x(i) == "transverse"
                                ? (w(),
                                  k(
                                    N,
                                    { key: 0 },
                                    { default: f(() => [c(le)]), _: 1 }
                                  ))
                                : De("", !0),
                            ],
                            2
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                    c(
                      ue,
                      {
                        effect: "dark",
                        content: "分栏",
                        placement: "top",
                        "show-after": 200,
                      },
                      {
                        default: f(() => [
                          d(
                            "div",
                            {
                              class: te([
                                "layout-item layout-columns",
                                { "is-active": x(i) == "columns" },
                              ]),
                              onClick: E[3] || (E[3] = ($) => R("columns")),
                            },
                            [
                              no,
                              oo,
                              ao,
                              x(i) == "columns"
                                ? (w(),
                                  k(
                                    N,
                                    { key: 0 },
                                    { default: f(() => [c(le)]), _: 1 }
                                  ))
                                : De("", !0),
                            ],
                            2
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  d("div", lo, [
                    d("span", null, [
                      X(" 侧边栏反转色 "),
                      c(
                        ue,
                        {
                          effect: "dark",
                          content: "侧边栏颜色变为深色模式",
                          placement: "top",
                        },
                        {
                          default: f(() => [
                            c(N, null, { default: f(() => [c(de)]), _: 1 }),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                    c(
                      j,
                      {
                        modelValue: x(_),
                        "onUpdate:modelValue":
                          E[4] ||
                          (E[4] = ($) => (fe(_) ? (_.value = $) : null)),
                        onChange: x(o),
                      },
                      null,
                      8,
                      ["modelValue", "onChange"]
                    ),
                  ]),
                  d("div", io, [
                    d("span", null, [
                      X(" 头部反转色 "),
                      c(
                        ue,
                        {
                          effect: "dark",
                          content: "头部颜色变为深色模式",
                          placement: "top",
                        },
                        {
                          default: f(() => [
                            c(N, null, { default: f(() => [c(de)]), _: 1 }),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                    c(
                      j,
                      {
                        modelValue: x(p),
                        "onUpdate:modelValue":
                          E[5] ||
                          (E[5] = ($) => (fe(p) ? (p.value = $) : null)),
                        onChange: x(a),
                      },
                      null,
                      8,
                      ["modelValue", "onChange"]
                    ),
                  ]),
                  c(
                    Ce,
                    { class: "divider", "content-position": "center" },
                    {
                      default: f(() => [
                        c(N, null, { default: f(() => [c(Pe)]), _: 1 }),
                        X(" 全局主题 "),
                      ]),
                      _: 1,
                    }
                  ),
                  d("div", so, [
                    ro,
                    c(
                      ge,
                      {
                        modelValue: x(s),
                        "onUpdate:modelValue":
                          E[6] ||
                          (E[6] = ($) => (fe(s) ? (s.value = $) : null)),
                        predefine: O,
                        onChange: x(e),
                      },
                      null,
                      8,
                      ["modelValue", "onChange"]
                    ),
                  ]),
                  d("div", co, [uo, c(Hn)]),
                  d("div", fo, [
                    po,
                    c(
                      j,
                      {
                        modelValue: x(r),
                        "onUpdate:modelValue":
                          E[7] ||
                          (E[7] = ($) => (fe(r) ? (r.value = $) : null)),
                        onChange: E[8] || (E[8] = ($) => x(t)("grey", !!$)),
                      },
                      null,
                      8,
                      ["modelValue"]
                    ),
                  ]),
                  d("div", _o, [
                    mo,
                    c(
                      j,
                      {
                        modelValue: x(u),
                        "onUpdate:modelValue":
                          E[9] ||
                          (E[9] = ($) => (fe(u) ? (u.value = $) : null)),
                        onChange: E[10] || (E[10] = ($) => x(t)("weak", !!$)),
                      },
                      null,
                      8,
                      ["modelValue"]
                    ),
                  ]),
                  c(
                    Ce,
                    { class: "divider", "content-position": "center" },
                    {
                      default: f(() => [
                        c(N, null, { default: f(() => [c(Ge)]), _: 1 }),
                        X(" 界面设置 "),
                      ]),
                      _: 1,
                    }
                  ),
                  d("div", ho, [
                    go,
                    c(
                      j,
                      {
                        modelValue: x(v),
                        "onUpdate:modelValue":
                          E[11] ||
                          (E[11] = ($) => (fe(v) ? (v.value = $) : null)),
                      },
                      null,
                      8,
                      ["modelValue"]
                    ),
                  ]),
                  d("div", vo, [
                    bo,
                    c(
                      j,
                      {
                        modelValue: x(b),
                        "onUpdate:modelValue":
                          E[12] ||
                          (E[12] = ($) => (fe(b) ? (b.value = $) : null)),
                      },
                      null,
                      8,
                      ["modelValue"]
                    ),
                  ]),
                  d("div", yo, [
                    wo,
                    c(
                      j,
                      {
                        modelValue: x(g),
                        "onUpdate:modelValue":
                          E[13] ||
                          (E[13] = ($) => (fe(g) ? (g.value = $) : null)),
                      },
                      null,
                      8,
                      ["modelValue"]
                    ),
                  ]),
                  d("div", So, [
                    Eo,
                    c(
                      j,
                      {
                        modelValue: x(y),
                        "onUpdate:modelValue":
                          E[14] ||
                          (E[14] = ($) => (fe(y) ? (y.value = $) : null)),
                      },
                      null,
                      8,
                      ["modelValue"]
                    ),
                  ]),
                  d("div", Co, [
                    Do,
                    c(
                      j,
                      {
                        modelValue: x(S),
                        "onUpdate:modelValue":
                          E[15] ||
                          (E[15] = ($) => (fe(S) ? (S.value = $) : null)),
                      },
                      null,
                      8,
                      ["modelValue"]
                    ),
                  ]),
                  d("div", xo, [
                    To,
                    c(
                      j,
                      {
                        modelValue: x(A),
                        "onUpdate:modelValue":
                          E[16] ||
                          (E[16] = ($) => (fe(A) ? (A.value = $) : null)),
                      },
                      null,
                      8,
                      ["modelValue"]
                    ),
                  ]),
                  d("div", ko, [
                    $o,
                    c(
                      j,
                      {
                        modelValue: x(F),
                        "onUpdate:modelValue":
                          E[17] ||
                          (E[17] = ($) => (fe(F) ? (F.value = $) : null)),
                      },
                      null,
                      8,
                      ["modelValue"]
                    ),
                  ]),
                ]),
                _: 1,
              },
              8,
              ["modelValue"]
            )
          );
        }
      );
    },
  });
const Io = K(Ao, [["__scopeId", "data-v-4549fccb"]]);
function Qt(n) {
  return typeof n == "function" ? n() : x(n);
}
const Zt = () => {};
function Mo(n, e) {
  function t(...o) {
    return new Promise((a, l) => {
      Promise.resolve(
        n(() => e.apply(this, o), { fn: e, thisArg: this, args: o })
      )
        .then(a)
        .catch(l);
    });
  }
  return t;
}
function Oo(n, e = {}) {
  let t,
    o,
    a = Zt;
  const l = (s) => {
    clearTimeout(s), a(), (a = Zt);
  };
  return (s) => {
    const r = Qt(n),
      u = Qt(e.maxWait);
    return (
      t && l(t),
      r <= 0 || (u !== void 0 && u <= 0)
        ? (o && (l(o), (o = null)), Promise.resolve(s()))
        : new Promise((_, p) => {
            (a = e.rejectOnCancel ? p : _),
              u &&
                !o &&
                (o = setTimeout(() => {
                  t && l(t), (o = null), _(s());
                }, u)),
              (t = setTimeout(() => {
                o && l(o), (o = null), _(s());
              }, r));
          })
    );
  };
}
function Po(n, e = 200, t = {}) {
  return Mo(Oo(e, t), n);
}
const Fo = (n) => (we("data-v-fbc0d1c1"), (n = n()), Se(), n),
  No = Fo(() => d("i", { class: te("iconfont icon-tuichu") }, null, -1)),
  Lo = [No],
  Vo = P({
    __name: "Maximize",
    setup(n) {
      const e = ae(),
        t = () => {
          e.setGlobalState("maximize", !1);
        };
      return (o, a) => (w(), z("div", { class: "maximize", onClick: t }, Lo));
    },
  });
const Ro = K(Vo, [["__scopeId", "data-v-fbc0d1c1"]]);
/**!
 * Sortable 1.15.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */ function Jt(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    e &&
      (o = o.filter(function (a) {
        return Object.getOwnPropertyDescriptor(n, a).enumerable;
      })),
      t.push.apply(t, o);
  }
  return t;
}
function ye(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Jt(Object(t), !0).forEach(function (o) {
          Bo(n, o, t[o]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
      : Jt(Object(t)).forEach(function (o) {
          Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(t, o));
        });
  }
  return n;
}
function ut(n) {
  "@babel/helpers - typeof";
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (ut = function (e) {
          return typeof e;
        })
      : (ut = function (e) {
          return e &&
            typeof Symbol == "function" &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        }),
    ut(n)
  );
}
function Bo(n, e, t) {
  return (
    e in n
      ? Object.defineProperty(n, e, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (n[e] = t),
    n
  );
}
function ke() {
  return (
    (ke =
      Object.assign ||
      function (n) {
        for (var e = 1; e < arguments.length; e++) {
          var t = arguments[e];
          for (var o in t)
            Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
        }
        return n;
      }),
    ke.apply(this, arguments)
  );
}
function zo(n, e) {
  if (n == null) return {};
  var t = {},
    o = Object.keys(n),
    a,
    l;
  for (l = 0; l < o.length; l++)
    (a = o[l]), !(e.indexOf(a) >= 0) && (t[a] = n[a]);
  return t;
}
function Go(n, e) {
  if (n == null) return {};
  var t = zo(n, e),
    o,
    a;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(n);
    for (a = 0; a < l.length; a++)
      (o = l[a]),
        !(e.indexOf(o) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(n, o) &&
          (t[o] = n[o]);
  }
  return t;
}
var Xo = "1.15.0";
function xe(n) {
  if (typeof window < "u" && window.navigator)
    return !!navigator.userAgent.match(n);
}
var $e = xe(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
  at = xe(/Edge/i),
  en = xe(/firefox/i),
  Je = xe(/safari/i) && !xe(/chrome/i) && !xe(/android/i),
  vn = xe(/iP(ad|od|hone)/i),
  bn = xe(/chrome/i) && xe(/android/i),
  yn = { capture: !1, passive: !1 };
function M(n, e, t) {
  n.addEventListener(e, t, !$e && yn);
}
function I(n, e, t) {
  n.removeEventListener(e, t, !$e && yn);
}
function ht(n, e) {
  if (e) {
    if ((e[0] === ">" && (e = e.substring(1)), n))
      try {
        if (n.matches) return n.matches(e);
        if (n.msMatchesSelector) return n.msMatchesSelector(e);
        if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
      } catch {
        return !1;
      }
    return !1;
  }
}
function Yo(n) {
  return n.host && n !== document && n.host.nodeType ? n.host : n.parentNode;
}
function ve(n, e, t, o) {
  if (n) {
    t = t || document;
    do {
      if (
        (e != null &&
          (e[0] === ">" ? n.parentNode === t && ht(n, e) : ht(n, e))) ||
        (o && n === t)
      )
        return n;
      if (n === t) break;
    } while ((n = Yo(n)));
  }
  return null;
}
var tn = /\s+/g;
function ie(n, e, t) {
  if (n && e)
    if (n.classList) n.classList[t ? "add" : "remove"](e);
    else {
      var o = (" " + n.className + " ")
        .replace(tn, " ")
        .replace(" " + e + " ", " ");
      n.className = (o + (t ? " " + e : "")).replace(tn, " ");
    }
}
function C(n, e, t) {
  var o = n && n.style;
  if (o) {
    if (t === void 0)
      return (
        document.defaultView && document.defaultView.getComputedStyle
          ? (t = document.defaultView.getComputedStyle(n, ""))
          : n.currentStyle && (t = n.currentStyle),
        e === void 0 ? t : t[e]
      );
    !(e in o) && e.indexOf("webkit") === -1 && (e = "-webkit-" + e),
      (o[e] = t + (typeof t == "string" ? "" : "px"));
  }
}
function He(n, e) {
  var t = "";
  if (typeof n == "string") t = n;
  else
    do {
      var o = C(n, "transform");
      o && o !== "none" && (t = o + " " + t);
    } while (!e && (n = n.parentNode));
  var a =
    window.DOMMatrix ||
    window.WebKitCSSMatrix ||
    window.CSSMatrix ||
    window.MSCSSMatrix;
  return a && new a(t);
}
function wn(n, e, t) {
  if (n) {
    var o = n.getElementsByTagName(e),
      a = 0,
      l = o.length;
    if (t) for (; a < l; a++) t(o[a], a);
    return o;
  }
  return [];
}
function be() {
  var n = document.scrollingElement;
  return n || document.documentElement;
}
function q(n, e, t, o, a) {
  if (!(!n.getBoundingClientRect && n !== window)) {
    var l, i, s, r, u, _, p;
    if (
      (n !== window && n.parentNode && n !== be()
        ? ((l = n.getBoundingClientRect()),
          (i = l.top),
          (s = l.left),
          (r = l.bottom),
          (u = l.right),
          (_ = l.height),
          (p = l.width))
        : ((i = 0),
          (s = 0),
          (r = window.innerHeight),
          (u = window.innerWidth),
          (_ = window.innerHeight),
          (p = window.innerWidth)),
      (e || t) && n !== window && ((a = a || n.parentNode), !$e))
    )
      do
        if (
          a &&
          a.getBoundingClientRect &&
          (C(a, "transform") !== "none" || (t && C(a, "position") !== "static"))
        ) {
          var v = a.getBoundingClientRect();
          (i -= v.top + parseInt(C(a, "border-top-width"))),
            (s -= v.left + parseInt(C(a, "border-left-width"))),
            (r = i + l.height),
            (u = s + l.width);
          break;
        }
      while ((a = a.parentNode));
    if (o && n !== window) {
      var b = He(a || n),
        g = b && b.a,
        y = b && b.d;
      b && ((i /= y), (s /= g), (p /= g), (_ /= y), (r = i + _), (u = s + p));
    }
    return { top: i, left: s, bottom: r, right: u, width: p, height: _ };
  }
}
function nn(n, e, t) {
  for (var o = Me(n, !0), a = q(n)[e]; o; ) {
    var l = q(o)[t],
      i = void 0;
    if ((t === "top" || t === "left" ? (i = a >= l) : (i = a <= l), !i))
      return o;
    if (o === be()) break;
    o = Me(o, !1);
  }
  return !1;
}
function je(n, e, t, o) {
  for (var a = 0, l = 0, i = n.children; l < i.length; ) {
    if (
      i[l].style.display !== "none" &&
      i[l] !== D.ghost &&
      (o || i[l] !== D.dragged) &&
      ve(i[l], t.draggable, n, !1)
    ) {
      if (a === e) return i[l];
      a++;
    }
    l++;
  }
  return null;
}
function Ut(n, e) {
  for (
    var t = n.lastElementChild;
    t && (t === D.ghost || C(t, "display") === "none" || (e && !ht(t, e)));

  )
    t = t.previousElementSibling;
  return t || null;
}
function pe(n, e) {
  var t = 0;
  if (!n || !n.parentNode) return -1;
  for (; (n = n.previousElementSibling); )
    n.nodeName.toUpperCase() !== "TEMPLATE" &&
      n !== D.clone &&
      (!e || ht(n, e)) &&
      t++;
  return t;
}
function on(n) {
  var e = 0,
    t = 0,
    o = be();
  if (n)
    do {
      var a = He(n),
        l = a.a,
        i = a.d;
      (e += n.scrollLeft * l), (t += n.scrollTop * i);
    } while (n !== o && (n = n.parentNode));
  return [e, t];
}
function Uo(n, e) {
  for (var t in n)
    if (n.hasOwnProperty(t)) {
      for (var o in e)
        if (e.hasOwnProperty(o) && e[o] === n[t][o]) return Number(t);
    }
  return -1;
}
function Me(n, e) {
  if (!n || !n.getBoundingClientRect) return be();
  var t = n,
    o = !1;
  do
    if (t.clientWidth < t.scrollWidth || t.clientHeight < t.scrollHeight) {
      var a = C(t);
      if (
        (t.clientWidth < t.scrollWidth &&
          (a.overflowX == "auto" || a.overflowX == "scroll")) ||
        (t.clientHeight < t.scrollHeight &&
          (a.overflowY == "auto" || a.overflowY == "scroll"))
      ) {
        if (!t.getBoundingClientRect || t === document.body) return be();
        if (o || e) return t;
        o = !0;
      }
    }
  while ((t = t.parentNode));
  return be();
}
function Wo(n, e) {
  if (n && e) for (var t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
  return n;
}
function kt(n, e) {
  return (
    Math.round(n.top) === Math.round(e.top) &&
    Math.round(n.left) === Math.round(e.left) &&
    Math.round(n.height) === Math.round(e.height) &&
    Math.round(n.width) === Math.round(e.width)
  );
}
var et;
function Sn(n, e) {
  return function () {
    if (!et) {
      var t = arguments,
        o = this;
      t.length === 1 ? n.call(o, t[0]) : n.apply(o, t),
        (et = setTimeout(function () {
          et = void 0;
        }, e));
    }
  };
}
function Ho() {
  clearTimeout(et), (et = void 0);
}
function En(n, e, t) {
  (n.scrollLeft += e), (n.scrollTop += t);
}
function Cn(n) {
  var e = window.Polymer,
    t = window.jQuery || window.Zepto;
  return e && e.dom
    ? e.dom(n).cloneNode(!0)
    : t
    ? t(n).clone(!0)[0]
    : n.cloneNode(!0);
}
var ce = "Sortable" + new Date().getTime();
function jo() {
  var n = [],
    e;
  return {
    captureAnimationState: function () {
      if (((n = []), !!this.options.animation)) {
        var o = [].slice.call(this.el.children);
        o.forEach(function (a) {
          if (!(C(a, "display") === "none" || a === D.ghost)) {
            n.push({ target: a, rect: q(a) });
            var l = ye({}, n[n.length - 1].rect);
            if (a.thisAnimationDuration) {
              var i = He(a, !0);
              i && ((l.top -= i.f), (l.left -= i.e));
            }
            a.fromRect = l;
          }
        });
      }
    },
    addAnimationState: function (o) {
      n.push(o);
    },
    removeAnimationState: function (o) {
      n.splice(Uo(n, { target: o }), 1);
    },
    animateAll: function (o) {
      var a = this;
      if (!this.options.animation) {
        clearTimeout(e), typeof o == "function" && o();
        return;
      }
      var l = !1,
        i = 0;
      n.forEach(function (s) {
        var r = 0,
          u = s.target,
          _ = u.fromRect,
          p = q(u),
          v = u.prevFromRect,
          b = u.prevToRect,
          g = s.rect,
          y = He(u, !0);
        y && ((p.top -= y.f), (p.left -= y.e)),
          (u.toRect = p),
          u.thisAnimationDuration &&
            kt(v, p) &&
            !kt(_, p) &&
            (g.top - p.top) / (g.left - p.left) ===
              (_.top - p.top) / (_.left - p.left) &&
            (r = Ko(g, v, b, a.options)),
          kt(p, _) ||
            ((u.prevFromRect = _),
            (u.prevToRect = p),
            r || (r = a.options.animation),
            a.animate(u, g, p, r)),
          r &&
            ((l = !0),
            (i = Math.max(i, r)),
            clearTimeout(u.animationResetTimer),
            (u.animationResetTimer = setTimeout(function () {
              (u.animationTime = 0),
                (u.prevFromRect = null),
                (u.fromRect = null),
                (u.prevToRect = null),
                (u.thisAnimationDuration = null);
            }, r)),
            (u.thisAnimationDuration = r));
      }),
        clearTimeout(e),
        l
          ? (e = setTimeout(function () {
              typeof o == "function" && o();
            }, i))
          : typeof o == "function" && o(),
        (n = []);
    },
    animate: function (o, a, l, i) {
      if (i) {
        C(o, "transition", ""), C(o, "transform", "");
        var s = He(this.el),
          r = s && s.a,
          u = s && s.d,
          _ = (a.left - l.left) / (r || 1),
          p = (a.top - l.top) / (u || 1);
        (o.animatingX = !!_),
          (o.animatingY = !!p),
          C(o, "transform", "translate3d(" + _ + "px," + p + "px,0)"),
          (this.forRepaintDummy = qo(o)),
          C(
            o,
            "transition",
            "transform " +
              i +
              "ms" +
              (this.options.easing ? " " + this.options.easing : "")
          ),
          C(o, "transform", "translate3d(0,0,0)"),
          typeof o.animated == "number" && clearTimeout(o.animated),
          (o.animated = setTimeout(function () {
            C(o, "transition", ""),
              C(o, "transform", ""),
              (o.animated = !1),
              (o.animatingX = !1),
              (o.animatingY = !1);
          }, i));
      }
    },
  };
}
function qo(n) {
  return n.offsetWidth;
}
function Ko(n, e, t, o) {
  return (
    (Math.sqrt(Math.pow(e.top - n.top, 2) + Math.pow(e.left - n.left, 2)) /
      Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2))) *
    o.animation
  );
}
var Xe = [],
  $t = { initializeByDefault: !0 },
  lt = {
    mount: function (e) {
      for (var t in $t) $t.hasOwnProperty(t) && !(t in e) && (e[t] = $t[t]);
      Xe.forEach(function (o) {
        if (o.pluginName === e.pluginName)
          throw "Sortable: Cannot mount plugin ".concat(
            e.pluginName,
            " more than once"
          );
      }),
        Xe.push(e);
    },
    pluginEvent: function (e, t, o) {
      var a = this;
      (this.eventCanceled = !1),
        (o.cancel = function () {
          a.eventCanceled = !0;
        });
      var l = e + "Global";
      Xe.forEach(function (i) {
        t[i.pluginName] &&
          (t[i.pluginName][l] && t[i.pluginName][l](ye({ sortable: t }, o)),
          t.options[i.pluginName] &&
            t[i.pluginName][e] &&
            t[i.pluginName][e](ye({ sortable: t }, o)));
      });
    },
    initializePlugins: function (e, t, o, a) {
      Xe.forEach(function (s) {
        var r = s.pluginName;
        if (!(!e.options[r] && !s.initializeByDefault)) {
          var u = new s(e, t, e.options);
          (u.sortable = e),
            (u.options = e.options),
            (e[r] = u),
            ke(o, u.defaults);
        }
      });
      for (var l in e.options)
        if (e.options.hasOwnProperty(l)) {
          var i = this.modifyOption(e, l, e.options[l]);
          typeof i < "u" && (e.options[l] = i);
        }
    },
    getEventProperties: function (e, t) {
      var o = {};
      return (
        Xe.forEach(function (a) {
          typeof a.eventProperties == "function" &&
            ke(o, a.eventProperties.call(t[a.pluginName], e));
        }),
        o
      );
    },
    modifyOption: function (e, t, o) {
      var a;
      return (
        Xe.forEach(function (l) {
          e[l.pluginName] &&
            l.optionListeners &&
            typeof l.optionListeners[t] == "function" &&
            (a = l.optionListeners[t].call(e[l.pluginName], o));
        }),
        a
      );
    },
  };
function Qo(n) {
  var e = n.sortable,
    t = n.rootEl,
    o = n.name,
    a = n.targetEl,
    l = n.cloneEl,
    i = n.toEl,
    s = n.fromEl,
    r = n.oldIndex,
    u = n.newIndex,
    _ = n.oldDraggableIndex,
    p = n.newDraggableIndex,
    v = n.originalEvent,
    b = n.putSortable,
    g = n.extraEventProperties;
  if (((e = e || (t && t[ce])), !!e)) {
    var y,
      S = e.options,
      A = "on" + o.charAt(0).toUpperCase() + o.substr(1);
    window.CustomEvent && !$e && !at
      ? (y = new CustomEvent(o, { bubbles: !0, cancelable: !0 }))
      : ((y = document.createEvent("Event")), y.initEvent(o, !0, !0)),
      (y.to = i || t),
      (y.from = s || t),
      (y.item = a || t),
      (y.clone = l),
      (y.oldIndex = r),
      (y.newIndex = u),
      (y.oldDraggableIndex = _),
      (y.newDraggableIndex = p),
      (y.originalEvent = v),
      (y.pullMode = b ? b.lastPutMode : void 0);
    var F = ye(ye({}, g), lt.getEventProperties(o, e));
    for (var O in F) y[O] = F[O];
    t && t.dispatchEvent(y), S[A] && S[A].call(e, y);
  }
}
var Zo = ["evt"],
  oe = function (e, t) {
    var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      a = o.evt,
      l = Go(o, Zo);
    lt.pluginEvent.bind(D)(
      e,
      t,
      ye(
        {
          dragEl: m,
          parentEl: G,
          ghostEl: T,
          rootEl: V,
          nextEl: Ve,
          lastDownEl: dt,
          cloneEl: B,
          cloneHidden: Ie,
          dragStarted: Ke,
          putSortable: Q,
          activeSortable: D.active,
          originalEvent: a,
          oldIndex: We,
          oldDraggableIndex: tt,
          newIndex: se,
          newDraggableIndex: Ae,
          hideGhostForTarget: kn,
          unhideGhostForTarget: $n,
          cloneNowHidden: function () {
            Ie = !0;
          },
          cloneNowShown: function () {
            Ie = !1;
          },
          dispatchSortableEvent: function (s) {
            ee({ sortable: t, name: s, originalEvent: a });
          },
        },
        l
      )
    );
  };
function ee(n) {
  Qo(
    ye(
      {
        putSortable: Q,
        cloneEl: B,
        targetEl: m,
        rootEl: V,
        oldIndex: We,
        oldDraggableIndex: tt,
        newIndex: se,
        newDraggableIndex: Ae,
      },
      n
    )
  );
}
var m,
  G,
  T,
  V,
  Ve,
  dt,
  B,
  Ie,
  We,
  se,
  tt,
  Ae,
  it,
  Q,
  Ue = !1,
  gt = !1,
  vt = [],
  Ne,
  me,
  At,
  It,
  an,
  ln,
  Ke,
  Ye,
  nt,
  ot = !1,
  st = !1,
  ft,
  J,
  Mt = [],
  Rt = !1,
  bt = [],
  Ct = typeof document < "u",
  rt = vn,
  sn = at || $e ? "cssFloat" : "float",
  Jo = Ct && !bn && !vn && "draggable" in document.createElement("div"),
  Dn = (function () {
    if (Ct) {
      if ($e) return !1;
      var n = document.createElement("x");
      return (
        (n.style.cssText = "pointer-events:auto"),
        n.style.pointerEvents === "auto"
      );
    }
  })(),
  xn = function (e, t) {
    var o = C(e),
      a =
        parseInt(o.width) -
        parseInt(o.paddingLeft) -
        parseInt(o.paddingRight) -
        parseInt(o.borderLeftWidth) -
        parseInt(o.borderRightWidth),
      l = je(e, 0, t),
      i = je(e, 1, t),
      s = l && C(l),
      r = i && C(i),
      u = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + q(l).width,
      _ = r && parseInt(r.marginLeft) + parseInt(r.marginRight) + q(i).width;
    if (o.display === "flex")
      return o.flexDirection === "column" ||
        o.flexDirection === "column-reverse"
        ? "vertical"
        : "horizontal";
    if (o.display === "grid")
      return o.gridTemplateColumns.split(" ").length <= 1
        ? "vertical"
        : "horizontal";
    if (l && s.float && s.float !== "none") {
      var p = s.float === "left" ? "left" : "right";
      return i && (r.clear === "both" || r.clear === p)
        ? "vertical"
        : "horizontal";
    }
    return l &&
      (s.display === "block" ||
        s.display === "flex" ||
        s.display === "table" ||
        s.display === "grid" ||
        (u >= a && o[sn] === "none") ||
        (i && o[sn] === "none" && u + _ > a))
      ? "vertical"
      : "horizontal";
  },
  ea = function (e, t, o) {
    var a = o ? e.left : e.top,
      l = o ? e.right : e.bottom,
      i = o ? e.width : e.height,
      s = o ? t.left : t.top,
      r = o ? t.right : t.bottom,
      u = o ? t.width : t.height;
    return a === s || l === r || a + i / 2 === s + u / 2;
  },
  ta = function (e, t) {
    var o;
    return (
      vt.some(function (a) {
        var l = a[ce].options.emptyInsertThreshold;
        if (!(!l || Ut(a))) {
          var i = q(a),
            s = e >= i.left - l && e <= i.right + l,
            r = t >= i.top - l && t <= i.bottom + l;
          if (s && r) return (o = a);
        }
      }),
      o
    );
  },
  Tn = function (e) {
    function t(l, i) {
      return function (s, r, u, _) {
        var p =
          s.options.group.name &&
          r.options.group.name &&
          s.options.group.name === r.options.group.name;
        if (l == null && (i || p)) return !0;
        if (l == null || l === !1) return !1;
        if (i && l === "clone") return l;
        if (typeof l == "function") return t(l(s, r, u, _), i)(s, r, u, _);
        var v = (i ? s : r).options.group.name;
        return (
          l === !0 ||
          (typeof l == "string" && l === v) ||
          (l.join && l.indexOf(v) > -1)
        );
      };
    }
    var o = {},
      a = e.group;
    (!a || ut(a) != "object") && (a = { name: a }),
      (o.name = a.name),
      (o.checkPull = t(a.pull, !0)),
      (o.checkPut = t(a.put)),
      (o.revertClone = a.revertClone),
      (e.group = o);
  },
  kn = function () {
    !Dn && T && C(T, "display", "none");
  },
  $n = function () {
    !Dn && T && C(T, "display", "");
  };
Ct &&
  !bn &&
  document.addEventListener(
    "click",
    function (n) {
      if (gt)
        return (
          n.preventDefault(),
          n.stopPropagation && n.stopPropagation(),
          n.stopImmediatePropagation && n.stopImmediatePropagation(),
          (gt = !1),
          !1
        );
    },
    !0
  );
var Le = function (e) {
    if (m) {
      e = e.touches ? e.touches[0] : e;
      var t = ta(e.clientX, e.clientY);
      if (t) {
        var o = {};
        for (var a in e) e.hasOwnProperty(a) && (o[a] = e[a]);
        (o.target = o.rootEl = t),
          (o.preventDefault = void 0),
          (o.stopPropagation = void 0),
          t[ce]._onDragOver(o);
      }
    }
  },
  na = function (e) {
    m && m.parentNode[ce]._isOutsideThisEl(e.target);
  };
function D(n, e) {
  if (!(n && n.nodeType && n.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat(
      {}.toString.call(n)
    );
  (this.el = n), (this.options = e = ke({}, e)), (n[ce] = this);
  var t = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(n.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    invertSwap: !1,
    invertedSwapThreshold: null,
    removeCloneOnHide: !0,
    direction: function () {
      return xn(n, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function (i, s) {
      i.setData("Text", s.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold:
      (Number.parseInt ? Number : window).parseInt(
        window.devicePixelRatio,
        10
      ) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: { x: 0, y: 0 },
    supportPointer: D.supportPointer !== !1 && "PointerEvent" in window && !Je,
    emptyInsertThreshold: 5,
  };
  lt.initializePlugins(this, n, t);
  for (var o in t) !(o in e) && (e[o] = t[o]);
  Tn(e);
  for (var a in this)
    a.charAt(0) === "_" &&
      typeof this[a] == "function" &&
      (this[a] = this[a].bind(this));
  (this.nativeDraggable = e.forceFallback ? !1 : Jo),
    this.nativeDraggable && (this.options.touchStartThreshold = 1),
    e.supportPointer
      ? M(n, "pointerdown", this._onTapStart)
      : (M(n, "mousedown", this._onTapStart),
        M(n, "touchstart", this._onTapStart)),
    this.nativeDraggable && (M(n, "dragover", this), M(n, "dragenter", this)),
    vt.push(this.el),
    e.store && e.store.get && this.sort(e.store.get(this) || []),
    ke(this, jo());
}
D.prototype = {
  constructor: D,
  _isOutsideThisEl: function (e) {
    !this.el.contains(e) && e !== this.el && (Ye = null);
  },
  _getDirection: function (e, t) {
    return typeof this.options.direction == "function"
      ? this.options.direction.call(this, e, t, m)
      : this.options.direction;
  },
  _onTapStart: function (e) {
    if (e.cancelable) {
      var t = this,
        o = this.el,
        a = this.options,
        l = a.preventOnFilter,
        i = e.type,
        s =
          (e.touches && e.touches[0]) ||
          (e.pointerType && e.pointerType === "touch" && e),
        r = (s || e).target,
        u =
          (e.target.shadowRoot &&
            ((e.path && e.path[0]) ||
              (e.composedPath && e.composedPath()[0]))) ||
          r,
        _ = a.filter;
      if (
        (ua(o),
        !m &&
          !(
            (/mousedown|pointerdown/.test(i) && e.button !== 0) ||
            a.disabled
          ) &&
          !u.isContentEditable &&
          !(
            !this.nativeDraggable &&
            Je &&
            r &&
            r.tagName.toUpperCase() === "SELECT"
          ) &&
          ((r = ve(r, a.draggable, o, !1)), !(r && r.animated) && dt !== r))
      ) {
        if (((We = pe(r)), (tt = pe(r, a.draggable)), typeof _ == "function")) {
          if (_.call(this, e, r, this)) {
            ee({
              sortable: t,
              rootEl: u,
              name: "filter",
              targetEl: r,
              toEl: o,
              fromEl: o,
            }),
              oe("filter", t, { evt: e }),
              l && e.cancelable && e.preventDefault();
            return;
          }
        } else if (
          _ &&
          ((_ = _.split(",").some(function (p) {
            if (((p = ve(u, p.trim(), o, !1)), p))
              return (
                ee({
                  sortable: t,
                  rootEl: p,
                  name: "filter",
                  targetEl: r,
                  fromEl: o,
                  toEl: o,
                }),
                oe("filter", t, { evt: e }),
                !0
              );
          })),
          _)
        ) {
          l && e.cancelable && e.preventDefault();
          return;
        }
        (a.handle && !ve(u, a.handle, o, !1)) ||
          this._prepareDragStart(e, s, r);
      }
    }
  },
  _prepareDragStart: function (e, t, o) {
    var a = this,
      l = a.el,
      i = a.options,
      s = l.ownerDocument,
      r;
    if (o && !m && o.parentNode === l) {
      var u = q(o);
      if (
        ((V = l),
        (m = o),
        (G = m.parentNode),
        (Ve = m.nextSibling),
        (dt = o),
        (it = i.group),
        (D.dragged = m),
        (Ne = {
          target: m,
          clientX: (t || e).clientX,
          clientY: (t || e).clientY,
        }),
        (an = Ne.clientX - u.left),
        (ln = Ne.clientY - u.top),
        (this._lastX = (t || e).clientX),
        (this._lastY = (t || e).clientY),
        (m.style["will-change"] = "all"),
        (r = function () {
          if ((oe("delayEnded", a, { evt: e }), D.eventCanceled)) {
            a._onDrop();
            return;
          }
          a._disableDelayedDragEvents(),
            !en && a.nativeDraggable && (m.draggable = !0),
            a._triggerDragStart(e, t),
            ee({ sortable: a, name: "choose", originalEvent: e }),
            ie(m, i.chosenClass, !0);
        }),
        i.ignore.split(",").forEach(function (_) {
          wn(m, _.trim(), Ot);
        }),
        M(s, "dragover", Le),
        M(s, "mousemove", Le),
        M(s, "touchmove", Le),
        M(s, "mouseup", a._onDrop),
        M(s, "touchend", a._onDrop),
        M(s, "touchcancel", a._onDrop),
        en &&
          this.nativeDraggable &&
          ((this.options.touchStartThreshold = 4), (m.draggable = !0)),
        oe("delayStart", this, { evt: e }),
        i.delay &&
          (!i.delayOnTouchOnly || t) &&
          (!this.nativeDraggable || !(at || $e)))
      ) {
        if (D.eventCanceled) {
          this._onDrop();
          return;
        }
        M(s, "mouseup", a._disableDelayedDrag),
          M(s, "touchend", a._disableDelayedDrag),
          M(s, "touchcancel", a._disableDelayedDrag),
          M(s, "mousemove", a._delayedDragTouchMoveHandler),
          M(s, "touchmove", a._delayedDragTouchMoveHandler),
          i.supportPointer &&
            M(s, "pointermove", a._delayedDragTouchMoveHandler),
          (a._dragStartTimer = setTimeout(r, i.delay));
      } else r();
    }
  },
  _delayedDragTouchMoveHandler: function (e) {
    var t = e.touches ? e.touches[0] : e;
    Math.max(
      Math.abs(t.clientX - this._lastX),
      Math.abs(t.clientY - this._lastY)
    ) >=
      Math.floor(
        this.options.touchStartThreshold /
          ((this.nativeDraggable && window.devicePixelRatio) || 1)
      ) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function () {
    m && Ot(m),
      clearTimeout(this._dragStartTimer),
      this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function () {
    var e = this.el.ownerDocument;
    I(e, "mouseup", this._disableDelayedDrag),
      I(e, "touchend", this._disableDelayedDrag),
      I(e, "touchcancel", this._disableDelayedDrag),
      I(e, "mousemove", this._delayedDragTouchMoveHandler),
      I(e, "touchmove", this._delayedDragTouchMoveHandler),
      I(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function (e, t) {
    (t = t || (e.pointerType == "touch" && e)),
      !this.nativeDraggable || t
        ? this.options.supportPointer
          ? M(document, "pointermove", this._onTouchMove)
          : t
          ? M(document, "touchmove", this._onTouchMove)
          : M(document, "mousemove", this._onTouchMove)
        : (M(m, "dragend", this), M(V, "dragstart", this._onDragStart));
    try {
      document.selection
        ? pt(function () {
            document.selection.empty();
          })
        : window.getSelection().removeAllRanges();
    } catch {}
  },
  _dragStarted: function (e, t) {
    if (((Ue = !1), V && m)) {
      oe("dragStarted", this, { evt: t }),
        this.nativeDraggable && M(document, "dragover", na);
      var o = this.options;
      !e && ie(m, o.dragClass, !1),
        ie(m, o.ghostClass, !0),
        (D.active = this),
        e && this._appendGhost(),
        ee({ sortable: this, name: "start", originalEvent: t });
    } else this._nulling();
  },
  _emulateDragOver: function () {
    if (me) {
      (this._lastX = me.clientX), (this._lastY = me.clientY), kn();
      for (
        var e = document.elementFromPoint(me.clientX, me.clientY), t = e;
        e &&
        e.shadowRoot &&
        ((e = e.shadowRoot.elementFromPoint(me.clientX, me.clientY)), e !== t);

      )
        t = e;
      if ((m.parentNode[ce]._isOutsideThisEl(e), t))
        do {
          if (t[ce]) {
            var o = void 0;
            if (
              ((o = t[ce]._onDragOver({
                clientX: me.clientX,
                clientY: me.clientY,
                target: e,
                rootEl: t,
              })),
              o && !this.options.dragoverBubble)
            )
              break;
          }
          e = t;
        } while ((t = t.parentNode));
      $n();
    }
  },
  _onTouchMove: function (e) {
    if (Ne) {
      var t = this.options,
        o = t.fallbackTolerance,
        a = t.fallbackOffset,
        l = e.touches ? e.touches[0] : e,
        i = T && He(T, !0),
        s = T && i && i.a,
        r = T && i && i.d,
        u = rt && J && on(J),
        _ =
          (l.clientX - Ne.clientX + a.x) / (s || 1) +
          (u ? u[0] - Mt[0] : 0) / (s || 1),
        p =
          (l.clientY - Ne.clientY + a.y) / (r || 1) +
          (u ? u[1] - Mt[1] : 0) / (r || 1);
      if (!D.active && !Ue) {
        if (
          o &&
          Math.max(
            Math.abs(l.clientX - this._lastX),
            Math.abs(l.clientY - this._lastY)
          ) < o
        )
          return;
        this._onDragStart(e, !0);
      }
      if (T) {
        i
          ? ((i.e += _ - (At || 0)), (i.f += p - (It || 0)))
          : (i = { a: 1, b: 0, c: 0, d: 1, e: _, f: p });
        var v = "matrix("
          .concat(i.a, ",")
          .concat(i.b, ",")
          .concat(i.c, ",")
          .concat(i.d, ",")
          .concat(i.e, ",")
          .concat(i.f, ")");
        C(T, "webkitTransform", v),
          C(T, "mozTransform", v),
          C(T, "msTransform", v),
          C(T, "transform", v),
          (At = _),
          (It = p),
          (me = l);
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function () {
    if (!T) {
      var e = this.options.fallbackOnBody ? document.body : V,
        t = q(m, !0, rt, !0, e),
        o = this.options;
      if (rt) {
        for (
          J = e;
          C(J, "position") === "static" &&
          C(J, "transform") === "none" &&
          J !== document;

        )
          J = J.parentNode;
        J !== document.body && J !== document.documentElement
          ? (J === document && (J = be()),
            (t.top += J.scrollTop),
            (t.left += J.scrollLeft))
          : (J = be()),
          (Mt = on(J));
      }
      (T = m.cloneNode(!0)),
        ie(T, o.ghostClass, !1),
        ie(T, o.fallbackClass, !0),
        ie(T, o.dragClass, !0),
        C(T, "transition", ""),
        C(T, "transform", ""),
        C(T, "box-sizing", "border-box"),
        C(T, "margin", 0),
        C(T, "top", t.top),
        C(T, "left", t.left),
        C(T, "width", t.width),
        C(T, "height", t.height),
        C(T, "opacity", "0.8"),
        C(T, "position", rt ? "absolute" : "fixed"),
        C(T, "zIndex", "100000"),
        C(T, "pointerEvents", "none"),
        (D.ghost = T),
        e.appendChild(T),
        C(
          T,
          "transform-origin",
          (an / parseInt(T.style.width)) * 100 +
            "% " +
            (ln / parseInt(T.style.height)) * 100 +
            "%"
        );
    }
  },
  _onDragStart: function (e, t) {
    var o = this,
      a = e.dataTransfer,
      l = o.options;
    if ((oe("dragStart", this, { evt: e }), D.eventCanceled)) {
      this._onDrop();
      return;
    }
    oe("setupClone", this),
      D.eventCanceled ||
        ((B = Cn(m)),
        B.removeAttribute("id"),
        (B.draggable = !1),
        (B.style["will-change"] = ""),
        this._hideClone(),
        ie(B, this.options.chosenClass, !1),
        (D.clone = B)),
      (o.cloneId = pt(function () {
        oe("clone", o),
          !D.eventCanceled &&
            (o.options.removeCloneOnHide || V.insertBefore(B, m),
            o._hideClone(),
            ee({ sortable: o, name: "clone" }));
      })),
      !t && ie(m, l.dragClass, !0),
      t
        ? ((gt = !0), (o._loopId = setInterval(o._emulateDragOver, 50)))
        : (I(document, "mouseup", o._onDrop),
          I(document, "touchend", o._onDrop),
          I(document, "touchcancel", o._onDrop),
          a &&
            ((a.effectAllowed = "move"), l.setData && l.setData.call(o, a, m)),
          M(document, "drop", o),
          C(m, "transform", "translateZ(0)")),
      (Ue = !0),
      (o._dragStartId = pt(o._dragStarted.bind(o, t, e))),
      M(document, "selectstart", o),
      (Ke = !0),
      Je && C(document.body, "user-select", "none");
  },
  _onDragOver: function (e) {
    var t = this.el,
      o = e.target,
      a,
      l,
      i,
      s = this.options,
      r = s.group,
      u = D.active,
      _ = it === r,
      p = s.sort,
      v = Q || u,
      b,
      g = this,
      y = !1;
    if (Rt) return;
    function S(Fe, $) {
      oe(
        Fe,
        g,
        ye(
          {
            evt: e,
            isOwner: _,
            axis: b ? "vertical" : "horizontal",
            revert: i,
            dragRect: a,
            targetRect: l,
            canSort: p,
            fromSortable: v,
            target: o,
            completed: F,
            onMove: function (Kt, In) {
              return ct(V, t, m, a, Kt, q(Kt), e, In);
            },
            changed: O,
          },
          $
        )
      );
    }
    function A() {
      S("dragOverAnimationCapture"),
        g.captureAnimationState(),
        g !== v && v.captureAnimationState();
    }
    function F(Fe) {
      return (
        S("dragOverCompleted", { insertion: Fe }),
        Fe &&
          (_ ? u._hideClone() : u._showClone(g),
          g !== v &&
            (ie(m, Q ? Q.options.ghostClass : u.options.ghostClass, !1),
            ie(m, s.ghostClass, !0)),
          Q !== g && g !== D.active
            ? (Q = g)
            : g === D.active && Q && (Q = null),
          v === g && (g._ignoreWhileAnimating = o),
          g.animateAll(function () {
            S("dragOverAnimationComplete"), (g._ignoreWhileAnimating = null);
          }),
          g !== v && (v.animateAll(), (v._ignoreWhileAnimating = null))),
        ((o === m && !m.animated) || (o === t && !o.animated)) && (Ye = null),
        !s.dragoverBubble &&
          !e.rootEl &&
          o !== document &&
          (m.parentNode[ce]._isOutsideThisEl(e.target), !Fe && Le(e)),
        !s.dragoverBubble && e.stopPropagation && e.stopPropagation(),
        (y = !0)
      );
    }
    function O() {
      (se = pe(m)),
        (Ae = pe(m, s.draggable)),
        ee({
          sortable: g,
          name: "change",
          toEl: t,
          newIndex: se,
          newDraggableIndex: Ae,
          originalEvent: e,
        });
    }
    if (
      (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(),
      (o = ve(o, s.draggable, t, !0)),
      S("dragOver"),
      D.eventCanceled)
    )
      return y;
    if (
      m.contains(e.target) ||
      (o.animated && o.animatingX && o.animatingY) ||
      g._ignoreWhileAnimating === o
    )
      return F(!1);
    if (
      ((gt = !1),
      u &&
        !s.disabled &&
        (_
          ? p || (i = G !== V)
          : Q === this ||
            ((this.lastPutMode = it.checkPull(this, u, m, e)) &&
              r.checkPut(this, u, m, e))))
    ) {
      if (
        ((b = this._getDirection(e, o) === "vertical"),
        (a = q(m)),
        S("dragOverValid"),
        D.eventCanceled)
      )
        return y;
      if (i)
        return (
          (G = V),
          A(),
          this._hideClone(),
          S("revert"),
          D.eventCanceled || (Ve ? V.insertBefore(m, Ve) : V.appendChild(m)),
          F(!0)
        );
      var R = Ut(t, s.draggable);
      if (!R || (ia(e, b, this) && !R.animated)) {
        if (R === m) return F(!1);
        if (
          (R && t === e.target && (o = R),
          o && (l = q(o)),
          ct(V, t, m, a, o, l, e, !!o) !== !1)
        )
          return (
            A(),
            R && R.nextSibling
              ? t.insertBefore(m, R.nextSibling)
              : t.appendChild(m),
            (G = t),
            O(),
            F(!0)
          );
      } else if (R && la(e, b, this)) {
        var U = je(t, 0, s, !0);
        if (U === m) return F(!1);
        if (((o = U), (l = q(o)), ct(V, t, m, a, o, l, e, !1) !== !1))
          return A(), t.insertBefore(m, U), (G = t), O(), F(!0);
      } else if (o.parentNode === t) {
        l = q(o);
        var Z = 0,
          E,
          Ee = m.parentNode !== t,
          N = !ea(
            (m.animated && m.toRect) || a,
            (o.animated && o.toRect) || l,
            b
          ),
          Ce = b ? "top" : "left",
          le = nn(o, "top", "top") || nn(m, "top", "top"),
          ue = le ? le.scrollTop : void 0;
        Ye !== o && ((E = l[Ce]), (ot = !1), (st = (!N && s.invertSwap) || Ee)),
          (Z = sa(
            e,
            o,
            l,
            b,
            N ? 1 : s.swapThreshold,
            s.invertedSwapThreshold == null
              ? s.swapThreshold
              : s.invertedSwapThreshold,
            st,
            Ye === o
          ));
        var de;
        if (Z !== 0) {
          var j = pe(m);
          do (j -= Z), (de = G.children[j]);
          while (de && (C(de, "display") === "none" || de === T));
        }
        if (Z === 0 || de === o) return F(!1);
        (Ye = o), (nt = Z);
        var Pe = o.nextElementSibling,
          ge = !1;
        ge = Z === 1;
        var Ge = ct(V, t, m, a, o, l, e, ge);
        if (Ge !== !1)
          return (
            (Ge === 1 || Ge === -1) && (ge = Ge === 1),
            (Rt = !0),
            setTimeout(aa, 30),
            A(),
            ge && !Pe
              ? t.appendChild(m)
              : o.parentNode.insertBefore(m, ge ? Pe : o),
            le && En(le, 0, ue - le.scrollTop),
            (G = m.parentNode),
            E !== void 0 && !st && (ft = Math.abs(E - q(o)[Ce])),
            O(),
            F(!0)
          );
      }
      if (t.contains(m)) return F(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function () {
    I(document, "mousemove", this._onTouchMove),
      I(document, "touchmove", this._onTouchMove),
      I(document, "pointermove", this._onTouchMove),
      I(document, "dragover", Le),
      I(document, "mousemove", Le),
      I(document, "touchmove", Le);
  },
  _offUpEvents: function () {
    var e = this.el.ownerDocument;
    I(e, "mouseup", this._onDrop),
      I(e, "touchend", this._onDrop),
      I(e, "pointerup", this._onDrop),
      I(e, "touchcancel", this._onDrop),
      I(document, "selectstart", this);
  },
  _onDrop: function (e) {
    var t = this.el,
      o = this.options;
    if (
      ((se = pe(m)),
      (Ae = pe(m, o.draggable)),
      oe("drop", this, { evt: e }),
      (G = m && m.parentNode),
      (se = pe(m)),
      (Ae = pe(m, o.draggable)),
      D.eventCanceled)
    ) {
      this._nulling();
      return;
    }
    (Ue = !1),
      (st = !1),
      (ot = !1),
      clearInterval(this._loopId),
      clearTimeout(this._dragStartTimer),
      Bt(this.cloneId),
      Bt(this._dragStartId),
      this.nativeDraggable &&
        (I(document, "drop", this), I(t, "dragstart", this._onDragStart)),
      this._offMoveEvents(),
      this._offUpEvents(),
      Je && C(document.body, "user-select", ""),
      C(m, "transform", ""),
      e &&
        (Ke &&
          (e.cancelable && e.preventDefault(),
          !o.dropBubble && e.stopPropagation()),
        T && T.parentNode && T.parentNode.removeChild(T),
        (V === G || (Q && Q.lastPutMode !== "clone")) &&
          B &&
          B.parentNode &&
          B.parentNode.removeChild(B),
        m &&
          (this.nativeDraggable && I(m, "dragend", this),
          Ot(m),
          (m.style["will-change"] = ""),
          Ke &&
            !Ue &&
            ie(m, Q ? Q.options.ghostClass : this.options.ghostClass, !1),
          ie(m, this.options.chosenClass, !1),
          ee({
            sortable: this,
            name: "unchoose",
            toEl: G,
            newIndex: null,
            newDraggableIndex: null,
            originalEvent: e,
          }),
          V !== G
            ? (se >= 0 &&
                (ee({
                  rootEl: G,
                  name: "add",
                  toEl: G,
                  fromEl: V,
                  originalEvent: e,
                }),
                ee({
                  sortable: this,
                  name: "remove",
                  toEl: G,
                  originalEvent: e,
                }),
                ee({
                  rootEl: G,
                  name: "sort",
                  toEl: G,
                  fromEl: V,
                  originalEvent: e,
                }),
                ee({
                  sortable: this,
                  name: "sort",
                  toEl: G,
                  originalEvent: e,
                })),
              Q && Q.save())
            : se !== We &&
              se >= 0 &&
              (ee({
                sortable: this,
                name: "update",
                toEl: G,
                originalEvent: e,
              }),
              ee({ sortable: this, name: "sort", toEl: G, originalEvent: e })),
          D.active &&
            ((se == null || se === -1) && ((se = We), (Ae = tt)),
            ee({ sortable: this, name: "end", toEl: G, originalEvent: e }),
            this.save()))),
      this._nulling();
  },
  _nulling: function () {
    oe("nulling", this),
      (V =
        m =
        G =
        T =
        Ve =
        B =
        dt =
        Ie =
        Ne =
        me =
        Ke =
        se =
        Ae =
        We =
        tt =
        Ye =
        nt =
        Q =
        it =
        D.dragged =
        D.ghost =
        D.clone =
        D.active =
          null),
      bt.forEach(function (e) {
        e.checked = !0;
      }),
      (bt.length = At = It = 0);
  },
  handleEvent: function (e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        m && (this._onDragOver(e), oa(e));
        break;
      case "selectstart":
        e.preventDefault();
        break;
    }
  },
  toArray: function () {
    for (
      var e = [],
        t,
        o = this.el.children,
        a = 0,
        l = o.length,
        i = this.options;
      a < l;
      a++
    )
      (t = o[a]),
        ve(t, i.draggable, this.el, !1) &&
          e.push(t.getAttribute(i.dataIdAttr) || ca(t));
    return e;
  },
  sort: function (e, t) {
    var o = {},
      a = this.el;
    this.toArray().forEach(function (l, i) {
      var s = a.children[i];
      ve(s, this.options.draggable, a, !1) && (o[l] = s);
    }, this),
      t && this.captureAnimationState(),
      e.forEach(function (l) {
        o[l] && (a.removeChild(o[l]), a.appendChild(o[l]));
      }),
      t && this.animateAll();
  },
  save: function () {
    var e = this.options.store;
    e && e.set && e.set(this);
  },
  closest: function (e, t) {
    return ve(e, t || this.options.draggable, this.el, !1);
  },
  option: function (e, t) {
    var o = this.options;
    if (t === void 0) return o[e];
    var a = lt.modifyOption(this, e, t);
    typeof a < "u" ? (o[e] = a) : (o[e] = t), e === "group" && Tn(o);
  },
  destroy: function () {
    oe("destroy", this);
    var e = this.el;
    (e[ce] = null),
      I(e, "mousedown", this._onTapStart),
      I(e, "touchstart", this._onTapStart),
      I(e, "pointerdown", this._onTapStart),
      this.nativeDraggable && (I(e, "dragover", this), I(e, "dragenter", this)),
      Array.prototype.forEach.call(
        e.querySelectorAll("[draggable]"),
        function (t) {
          t.removeAttribute("draggable");
        }
      ),
      this._onDrop(),
      this._disableDelayedDragEvents(),
      vt.splice(vt.indexOf(this.el), 1),
      (this.el = e = null);
  },
  _hideClone: function () {
    if (!Ie) {
      if ((oe("hideClone", this), D.eventCanceled)) return;
      C(B, "display", "none"),
        this.options.removeCloneOnHide &&
          B.parentNode &&
          B.parentNode.removeChild(B),
        (Ie = !0);
    }
  },
  _showClone: function (e) {
    if (e.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Ie) {
      if ((oe("showClone", this), D.eventCanceled)) return;
      m.parentNode == V && !this.options.group.revertClone
        ? V.insertBefore(B, m)
        : Ve
        ? V.insertBefore(B, Ve)
        : V.appendChild(B),
        this.options.group.revertClone && this.animate(m, B),
        C(B, "display", ""),
        (Ie = !1);
    }
  },
};
function oa(n) {
  n.dataTransfer && (n.dataTransfer.dropEffect = "move"),
    n.cancelable && n.preventDefault();
}
function ct(n, e, t, o, a, l, i, s) {
  var r,
    u = n[ce],
    _ = u.options.onMove,
    p;
  return (
    window.CustomEvent && !$e && !at
      ? (r = new CustomEvent("move", { bubbles: !0, cancelable: !0 }))
      : ((r = document.createEvent("Event")), r.initEvent("move", !0, !0)),
    (r.to = e),
    (r.from = n),
    (r.dragged = t),
    (r.draggedRect = o),
    (r.related = a || e),
    (r.relatedRect = l || q(e)),
    (r.willInsertAfter = s),
    (r.originalEvent = i),
    n.dispatchEvent(r),
    _ && (p = _.call(u, r, i)),
    p
  );
}
function Ot(n) {
  n.draggable = !1;
}
function aa() {
  Rt = !1;
}
function la(n, e, t) {
  var o = q(je(t.el, 0, t.options, !0)),
    a = 10;
  return e
    ? n.clientX < o.left - a || (n.clientY < o.top && n.clientX < o.right)
    : n.clientY < o.top - a || (n.clientY < o.bottom && n.clientX < o.left);
}
function ia(n, e, t) {
  var o = q(Ut(t.el, t.options.draggable)),
    a = 10;
  return e
    ? n.clientX > o.right + a ||
        (n.clientX <= o.right && n.clientY > o.bottom && n.clientX >= o.left)
    : (n.clientX > o.right && n.clientY > o.top) ||
        (n.clientX <= o.right && n.clientY > o.bottom + a);
}
function sa(n, e, t, o, a, l, i, s) {
  var r = o ? n.clientY : n.clientX,
    u = o ? t.height : t.width,
    _ = o ? t.top : t.left,
    p = o ? t.bottom : t.right,
    v = !1;
  if (!i) {
    if (s && ft < u * a) {
      if (
        (!ot &&
          (nt === 1 ? r > _ + (u * l) / 2 : r < p - (u * l) / 2) &&
          (ot = !0),
        ot)
      )
        v = !0;
      else if (nt === 1 ? r < _ + ft : r > p - ft) return -nt;
    } else if (r > _ + (u * (1 - a)) / 2 && r < p - (u * (1 - a)) / 2)
      return ra(e);
  }
  return (
    (v = v || i),
    v && (r < _ + (u * l) / 2 || r > p - (u * l) / 2)
      ? r > _ + u / 2
        ? 1
        : -1
      : 0
  );
}
function ra(n) {
  return pe(m) < pe(n) ? 1 : -1;
}
function ca(n) {
  for (
    var e = n.tagName + n.className + n.src + n.href + n.textContent,
      t = e.length,
      o = 0;
    t--;

  )
    o += e.charCodeAt(t);
  return o.toString(36);
}
function ua(n) {
  bt.length = 0;
  for (var e = n.getElementsByTagName("input"), t = e.length; t--; ) {
    var o = e[t];
    o.checked && bt.push(o);
  }
}
function pt(n) {
  return setTimeout(n, 0);
}
function Bt(n) {
  return clearTimeout(n);
}
Ct &&
  M(document, "touchmove", function (n) {
    (D.active || Ue) && n.cancelable && n.preventDefault();
  });
D.utils = {
  on: M,
  off: I,
  css: C,
  find: wn,
  is: function (e, t) {
    return !!ve(e, t, e, !1);
  },
  extend: Wo,
  throttle: Sn,
  closest: ve,
  toggleClass: ie,
  clone: Cn,
  index: pe,
  nextTick: pt,
  cancelNextTick: Bt,
  detectDirection: xn,
  getChild: je,
};
D.get = function (n) {
  return n[ce];
};
D.mount = function () {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  e[0].constructor === Array && (e = e[0]),
    e.forEach(function (o) {
      if (!o.prototype || !o.prototype.constructor)
        throw "Sortable: Mounted plugin must be a constructor function, not ".concat(
          {}.toString.call(o)
        );
      o.utils && (D.utils = ye(ye({}, D.utils), o.utils)), lt.mount(o);
    });
};
D.create = function (n, e) {
  return new D(n, e);
};
D.version = Xo;
var W = [],
  Qe,
  zt,
  Gt = !1,
  Pt,
  Ft,
  yt,
  Ze;
function da() {
  function n() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0,
    };
    for (var e in this)
      e.charAt(0) === "_" &&
        typeof this[e] == "function" &&
        (this[e] = this[e].bind(this));
  }
  return (
    (n.prototype = {
      dragStarted: function (t) {
        var o = t.originalEvent;
        this.sortable.nativeDraggable
          ? M(document, "dragover", this._handleAutoScroll)
          : this.options.supportPointer
          ? M(document, "pointermove", this._handleFallbackAutoScroll)
          : o.touches
          ? M(document, "touchmove", this._handleFallbackAutoScroll)
          : M(document, "mousemove", this._handleFallbackAutoScroll);
      },
      dragOverCompleted: function (t) {
        var o = t.originalEvent;
        !this.options.dragOverBubble && !o.rootEl && this._handleAutoScroll(o);
      },
      drop: function () {
        this.sortable.nativeDraggable
          ? I(document, "dragover", this._handleAutoScroll)
          : (I(document, "pointermove", this._handleFallbackAutoScroll),
            I(document, "touchmove", this._handleFallbackAutoScroll),
            I(document, "mousemove", this._handleFallbackAutoScroll)),
          rn(),
          _t(),
          Ho();
      },
      nulling: function () {
        (yt = zt = Qe = Gt = Ze = Pt = Ft = null), (W.length = 0);
      },
      _handleFallbackAutoScroll: function (t) {
        this._handleAutoScroll(t, !0);
      },
      _handleAutoScroll: function (t, o) {
        var a = this,
          l = (t.touches ? t.touches[0] : t).clientX,
          i = (t.touches ? t.touches[0] : t).clientY,
          s = document.elementFromPoint(l, i);
        if (
          ((yt = t),
          o || this.options.forceAutoScrollFallback || at || $e || Je)
        ) {
          Nt(t, this.options, s, o);
          var r = Me(s, !0);
          Gt &&
            (!Ze || l !== Pt || i !== Ft) &&
            (Ze && rn(),
            (Ze = setInterval(function () {
              var u = Me(document.elementFromPoint(l, i), !0);
              u !== r && ((r = u), _t()), Nt(t, a.options, u, o);
            }, 10)),
            (Pt = l),
            (Ft = i));
        } else {
          if (!this.options.bubbleScroll || Me(s, !0) === be()) {
            _t();
            return;
          }
          Nt(t, this.options, Me(s, !1), !1);
        }
      },
    }),
    ke(n, { pluginName: "scroll", initializeByDefault: !0 })
  );
}
function _t() {
  W.forEach(function (n) {
    clearInterval(n.pid);
  }),
    (W = []);
}
function rn() {
  clearInterval(Ze);
}
var Nt = Sn(function (n, e, t, o) {
    if (e.scroll) {
      var a = (n.touches ? n.touches[0] : n).clientX,
        l = (n.touches ? n.touches[0] : n).clientY,
        i = e.scrollSensitivity,
        s = e.scrollSpeed,
        r = be(),
        u = !1,
        _;
      zt !== t &&
        ((zt = t),
        _t(),
        (Qe = e.scroll),
        (_ = e.scrollFn),
        Qe === !0 && (Qe = Me(t, !0)));
      var p = 0,
        v = Qe;
      do {
        var b = v,
          g = q(b),
          y = g.top,
          S = g.bottom,
          A = g.left,
          F = g.right,
          O = g.width,
          R = g.height,
          U = void 0,
          Z = void 0,
          E = b.scrollWidth,
          Ee = b.scrollHeight,
          N = C(b),
          Ce = b.scrollLeft,
          le = b.scrollTop;
        b === r
          ? ((U =
              O < E &&
              (N.overflowX === "auto" ||
                N.overflowX === "scroll" ||
                N.overflowX === "visible")),
            (Z =
              R < Ee &&
              (N.overflowY === "auto" ||
                N.overflowY === "scroll" ||
                N.overflowY === "visible")))
          : ((U =
              O < E && (N.overflowX === "auto" || N.overflowX === "scroll")),
            (Z =
              R < Ee && (N.overflowY === "auto" || N.overflowY === "scroll")));
        var ue =
            U &&
            (Math.abs(F - a) <= i && Ce + O < E) -
              (Math.abs(A - a) <= i && !!Ce),
          de =
            Z &&
            (Math.abs(S - l) <= i && le + R < Ee) -
              (Math.abs(y - l) <= i && !!le);
        if (!W[p]) for (var j = 0; j <= p; j++) W[j] || (W[j] = {});
        (W[p].vx != ue || W[p].vy != de || W[p].el !== b) &&
          ((W[p].el = b),
          (W[p].vx = ue),
          (W[p].vy = de),
          clearInterval(W[p].pid),
          (ue != 0 || de != 0) &&
            ((u = !0),
            (W[p].pid = setInterval(
              function () {
                o && this.layer === 0 && D.active._onTouchMove(yt);
                var Pe = W[this.layer].vy ? W[this.layer].vy * s : 0,
                  ge = W[this.layer].vx ? W[this.layer].vx * s : 0;
                (typeof _ == "function" &&
                  _.call(
                    D.dragged.parentNode[ce],
                    ge,
                    Pe,
                    n,
                    yt,
                    W[this.layer].el
                  ) !== "continue") ||
                  En(W[this.layer].el, ge, Pe);
              }.bind({ layer: p }),
              24
            )))),
          p++;
      } while (e.bubbleScroll && v !== r && (v = Me(v, !1)));
      Gt = u;
    }
  }, 30),
  An = function (e) {
    var t = e.originalEvent,
      o = e.putSortable,
      a = e.dragEl,
      l = e.activeSortable,
      i = e.dispatchSortableEvent,
      s = e.hideGhostForTarget,
      r = e.unhideGhostForTarget;
    if (t) {
      var u = o || l;
      s();
      var _ =
          t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t,
        p = document.elementFromPoint(_.clientX, _.clientY);
      r(),
        u &&
          !u.el.contains(p) &&
          (i("spill"), this.onSpill({ dragEl: a, putSortable: o }));
    }
  };
function Wt() {}
Wt.prototype = {
  startIndex: null,
  dragStart: function (e) {
    var t = e.oldDraggableIndex;
    this.startIndex = t;
  },
  onSpill: function (e) {
    var t = e.dragEl,
      o = e.putSortable;
    this.sortable.captureAnimationState(), o && o.captureAnimationState();
    var a = je(this.sortable.el, this.startIndex, this.options);
    a ? this.sortable.el.insertBefore(t, a) : this.sortable.el.appendChild(t),
      this.sortable.animateAll(),
      o && o.animateAll();
  },
  drop: An,
};
ke(Wt, { pluginName: "revertOnSpill" });
function Ht() {}
Ht.prototype = {
  onSpill: function (e) {
    var t = e.dragEl,
      o = e.putSortable,
      a = o || this.sortable;
    a.captureAnimationState(),
      t.parentNode && t.parentNode.removeChild(t),
      a.animateAll();
  },
  drop: An,
};
ke(Ht, { pluginName: "removeOnSpill" });
D.mount(new da());
D.mount(Ht, Wt);
const fa = (n) => (we("data-v-f7105374"), (n = n()), Se(), n),
  pa = fa(() =>
    d(
      "div",
      { class: "more-button" },
      [d("i", { class: te("iconfont icon-xiala") })],
      -1
    )
  ),
  _a = P({
    __name: "MoreButton",
    setup(n) {
      const e = Re(),
        t = Oe(),
        o = mn(),
        a = ae(),
        l = Yt(),
        i = Pn("refresh"),
        s = () => {
          setTimeout(() => {
            l.removeKeepAliveName(e.name),
              i(!1),
              dn(() => {
                l.addKeepAliveName(e.name), i(!0);
              });
          }, 0);
        },
        r = () => {
          a.setGlobalState("maximize", !0);
        },
        u = () => {
          e.meta.isAffix ||
            (o.removeTabs(e.fullPath), l.removeKeepAliveName(e.name));
        },
        _ = () => {
          o.closeMultipleTab(e.fullPath);
        },
        p = () => {
          o.closeMultipleTab(), t.push(Vt);
        };
      return (v, b) => {
        const g = h("Refresh"),
          y = h("el-icon"),
          S = h("el-dropdown-item"),
          A = h("FullScreen"),
          F = h("Remove"),
          O = h("DArrowLeft"),
          R = h("DArrowRight"),
          U = h("CircleClose"),
          Z = h("FolderDelete"),
          E = h("el-dropdown-menu"),
          Ee = h("el-dropdown");
        return (
          w(),
          k(
            Ee,
            { trigger: "click", teleported: !1 },
            {
              dropdown: f(() => [
                c(E, null, {
                  default: f(() => [
                    c(
                      S,
                      { onClick: s },
                      {
                        default: f(() => [
                          c(y, null, { default: f(() => [c(g)]), _: 1 }),
                          X(L(v.$t("tabs.refresh")), 1),
                        ]),
                        _: 1,
                      }
                    ),
                    c(
                      S,
                      { onClick: r },
                      {
                        default: f(() => [
                          c(y, null, { default: f(() => [c(A)]), _: 1 }),
                          X(L(v.$t("tabs.maximize")), 1),
                        ]),
                        _: 1,
                      }
                    ),
                    c(
                      S,
                      { divided: "", onClick: u },
                      {
                        default: f(() => [
                          c(y, null, { default: f(() => [c(F)]), _: 1 }),
                          X(L(v.$t("tabs.closeCurrent")), 1),
                        ]),
                        _: 1,
                      }
                    ),
                    c(
                      S,
                      {
                        onClick:
                          b[0] ||
                          (b[0] = (N) =>
                            x(o).closeTabsOnSide(x(e).fullPath, "left")),
                      },
                      {
                        default: f(() => [
                          c(y, null, { default: f(() => [c(O)]), _: 1 }),
                          X(L(v.$t("tabs.closeLeft")), 1),
                        ]),
                        _: 1,
                      }
                    ),
                    c(
                      S,
                      {
                        onClick:
                          b[1] ||
                          (b[1] = (N) =>
                            x(o).closeTabsOnSide(x(e).fullPath, "right")),
                      },
                      {
                        default: f(() => [
                          c(y, null, { default: f(() => [c(R)]), _: 1 }),
                          X(L(v.$t("tabs.closeRight")), 1),
                        ]),
                        _: 1,
                      }
                    ),
                    c(
                      S,
                      { divided: "", onClick: _ },
                      {
                        default: f(() => [
                          c(y, null, { default: f(() => [c(U)]), _: 1 }),
                          X(L(v.$t("tabs.closeOther")), 1),
                        ]),
                        _: 1,
                      }
                    ),
                    c(
                      S,
                      { onClick: p },
                      {
                        default: f(() => [
                          c(y, null, { default: f(() => [c(Z)]), _: 1 }),
                          X(L(v.$t("tabs.closeAll")), 1),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  _: 1,
                }),
              ]),
              default: f(() => [pa]),
              _: 1,
            }
          )
        );
      };
    },
  });
const ma = K(_a, [["__scopeId", "data-v-f7105374"]]),
  ha = { class: "tabs-box" },
  ga = { class: "tabs-menu" },
  va = P({
    __name: "index",
    setup(n) {
      const e = Re(),
        t = Oe(),
        o = mn(),
        a = Be(),
        l = ae(),
        i = Yt(),
        s = ne(e.fullPath),
        r = Y(() => o.tabsMenuList),
        u = Y(() => l.tabsIcon);
      fn(() => {
        _(), p();
      }),
        mt(
          () => e.fullPath,
          () => {
            if (e.meta.isFull) return;
            s.value = e.fullPath;
            const g = {
              icon: e.meta.icon,
              title: e.meta.title,
              path: e.fullPath,
              name: e.name,
              close: !e.meta.isAffix,
            };
            o.addTabs(g), e.meta.isKeepAlive && i.addKeepAliveName(e.name);
          },
          { immediate: !0 }
        );
      const _ = () => {
          D.create(document.querySelector(".el-tabs__nav"), {
            draggable: ".el-tabs__item",
            animation: 300,
            onEnd({ newIndex: g, oldIndex: y }) {
              const S = [...o.tabsMenuList],
                A = S.splice(y, 1)[0];
              S.splice(g, 0, A), o.setTabs(S);
            },
          });
        },
        p = () => {
          a.flatMenuListGet.forEach((g) => {
            if (g.meta.isAffix && !g.meta.isHide && !g.meta.isFull) {
              const y = {
                icon: g.meta.icon,
                title: g.meta.title,
                path: g.path,
                name: g.name,
                close: !g.meta.isAffix,
              };
              o.addTabs(y);
            }
          });
        },
        v = (g) => {
          const y = g.props.name;
          t.push(y);
        },
        b = (g) => {
          const y = o.tabsMenuList.filter((S) => S.path == g)[0].name || "";
          i.removeKeepAliveName(y), o.removeTabs(g, g == e.fullPath);
        };
      return (g, y) => {
        const S = h("el-icon"),
          A = h("el-tab-pane"),
          F = h("el-tabs");
        return (
          w(),
          z("div", ha, [
            d("div", ga, [
              c(
                F,
                {
                  modelValue: s.value,
                  "onUpdate:modelValue": y[0] || (y[0] = (O) => (s.value = O)),
                  type: "card",
                  onTabClick: v,
                  onTabRemove: b,
                },
                {
                  default: f(() => [
                    (w(!0),
                    z(
                      _e,
                      null,
                      ze(
                        r.value,
                        (O) => (
                          w(),
                          k(
                            A,
                            {
                              key: O.path,
                              label: O.title,
                              name: O.path,
                              closable: O.close,
                            },
                            {
                              label: f(() => [
                                wt(
                                  c(
                                    S,
                                    { class: "tabs-icon" },
                                    {
                                      default: f(() => [(w(), k(he(O.icon)))]),
                                      _: 2,
                                    },
                                    1536
                                  ),
                                  [[St, O.icon && u.value]]
                                ),
                                X(" " + L(O.title), 1),
                              ]),
                              _: 2,
                            },
                            1032,
                            ["label", "name", "closable"]
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                  _: 1,
                },
                8,
                ["modelValue"]
              ),
              c(ma),
            ]),
          ])
        );
      };
    },
  });
const ba = K(va, [["__scopeId", "data-v-56506b79"]]);
const ya = {},
  wa = (n) => (we("data-v-0658b08f"), (n = n()), Se(), n),
  Sa = { class: "footer flx-center" },
  Ea = wa(() =>
    d(
      "a",
      { href: "https://github.com/chengkoi", target: "_blank" },
      " 2022 © Spacebar By Spacebar Technology. ",
      -1
    )
  ),
  Ca = [Ea];
function Da(n, e) {
  return w(), z("div", Sa, Ca);
}
const xa = K(ya, [
    ["render", Da],
    ["__scopeId", "data-v-0658b08f"],
  ]),
  Ta = P({
    __name: "index",
    setup(n) {
      const e = ae(),
        { maximize: t, isCollapse: o, layout: a, tabs: l, footer: i } = Lt(e),
        s = Yt(),
        { keepAliveName: r } = Lt(s),
        u = ne(!0);
      Fn("refresh", (b) => (u.value = b)),
        mt(
          () => t.value,
          () => {
            const b = document.getElementById("app");
            t.value
              ? b.classList.add("main-maximize")
              : b.classList.remove("main-maximize");
          },
          { immediate: !0 }
        ),
        mt(
          () => a.value,
          () => {
            document.body.setAttribute("class", a.value);
          },
          { immediate: !0 }
        );
      const p = ne(0),
        v = Po(() => {
          (p.value = document.body.clientWidth),
            !o.value && p.value < 1200 && e.setGlobalState("isCollapse", !0),
            o.value && p.value > 1200 && e.setGlobalState("isCollapse", !1);
        }, 100);
      return (
        window.addEventListener("resize", v, !1),
        Nn(() => {
          window.removeEventListener("resize", v);
        }),
        (b, g) => {
          const y = h("router-view"),
            S = h("el-main"),
            A = h("el-footer");
          return (
            w(),
            z(
              _e,
              null,
              [
                x(t) ? (w(), k(Ro, { key: 0 })) : De("", !0),
                x(l) ? (w(), k(ba, { key: 1 })) : De("", !0),
                c(S, null, {
                  default: f(() => [
                    c(y, null, {
                      default: f(({ Component: F, route: O }) => [
                        c(
                          Ln,
                          {
                            appear: "",
                            name: "fade-transform",
                            mode: "out-in",
                          },
                          {
                            default: f(() => [
                              (w(),
                              k(
                                Vn,
                                { include: x(r) },
                                [
                                  u.value
                                    ? (w(), k(he(F), { key: O.fullPath }))
                                    : De("", !0),
                                ],
                                1032,
                                ["include"]
                              )),
                            ]),
                            _: 2,
                          },
                          1024
                        ),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                x(i)
                  ? (w(), k(A, { key: 2 }, { default: f(() => [c(xa)]), _: 1 }))
                  : De("", !0),
              ],
              64
            )
          );
        }
      );
    },
  });
const Dt = K(Ta, [["__scopeId", "data-v-a30defa3"]]),
  ka = P({
    __name: "CollapseIcon",
    setup(n) {
      const e = ae(),
        t = () => e.setGlobalState("isCollapse", !e.isCollapse);
      return (o, a) => {
        const l = h("el-icon");
        return (
          w(),
          k(
            l,
            { class: "collapse-icon", onClick: t },
            {
              default: f(() => [
                (w(), k(he(x(e).isCollapse ? "expand" : "fold"))),
              ]),
              _: 1,
            }
          )
        );
      };
    },
  });
const $a = K(ka, [["__scopeId", "data-v-79434c0f"]]),
  Aa = ["onClick"],
  Ia = { class: "breadcrumb-title" },
  Ma = P({
    __name: "Breadcrumb",
    setup(n) {
      const e = Re(),
        t = Oe(),
        o = Be(),
        a = ae(),
        l = Y(() => {
          let s =
            o.breadcrumbListGet[e.matched[e.matched.length - 1].path] ?? [];
          return (
            s[0].path !== Vt &&
              (s = [
                { path: Vt, meta: { icon: "HomeFilled", title: "首页" } },
                ...s,
              ]),
            s
          );
        }),
        i = (s, r) => {
          r !== l.value.length - 1 && t.push(s.path);
        };
      return (s, r) => {
        const u = h("el-icon"),
          _ = h("el-breadcrumb-item"),
          p = h("el-breadcrumb");
        return (
          w(),
          z(
            "div",
            {
              class: te([
                "breadcrumb-box mask-image",
                !x(a).breadcrumbIcon && "no-icon",
              ]),
            },
            [
              c(
                p,
                { "separator-icon": x(Bn) },
                {
                  default: f(() => [
                    c(
                      Rn,
                      { name: "breadcrumb" },
                      {
                        default: f(() => [
                          (w(!0),
                          z(
                            _e,
                            null,
                            ze(
                              l.value,
                              (v, b) => (
                                w(),
                                k(
                                  _,
                                  { key: v.path },
                                  {
                                    default: f(() => [
                                      d(
                                        "div",
                                        {
                                          class: "el-breadcrumb__inner is-link",
                                          onClick: (g) => i(v, b),
                                        },
                                        [
                                          wt(
                                            c(
                                              u,
                                              { class: "breadcrumb-icon" },
                                              {
                                                default: f(() => [
                                                  (w(), k(he(v.meta.icon))),
                                                ]),
                                                _: 2,
                                              },
                                              1536
                                            ),
                                            [
                                              [
                                                St,
                                                v.meta.icon &&
                                                  x(a).breadcrumbIcon,
                                              ],
                                            ]
                                          ),
                                          d("span", Ia, L(v.meta.title), 1),
                                        ],
                                        8,
                                        Aa
                                      ),
                                    ]),
                                    _: 2,
                                  },
                                  1024
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  _: 1,
                },
                8,
                ["separator-icon"]
              ),
            ],
            2
          )
        );
      };
    },
  });
const Oa = K(Ma, [["__scopeId", "data-v-a9a16a47"]]),
  Pa = { class: "tool-bar-lf" },
  Fa = P({
    __name: "ToolBarLeft",
    setup(n) {
      const e = ae();
      return (t, o) => (
        w(),
        z("div", Pa, [
          c($a, { id: "collapseIcon" }),
          x(e).breadcrumb
            ? (w(), k(Oa, { key: 0, id: "breadcrumb" }))
            : De("", !0),
        ])
      );
    },
  });
const jt = K(Fa, [["__scopeId", "data-v-a3193cd6"]]),
  Na = P({
    __name: "AssemblySize",
    setup(n) {
      const e = ae(),
        t = Y(() => e.assemblySize),
        o = [
          { label: "默认", value: "default" },
          { label: "大型", value: "large" },
          { label: "小型", value: "small" },
        ],
        a = (l) => {
          t.value !== l && e.setGlobalState("assemblySize", l);
        };
      return (l, i) => {
        const s = h("el-dropdown-item"),
          r = h("el-dropdown-menu"),
          u = h("el-dropdown");
        return (
          w(),
          k(
            u,
            { trigger: "click", onCommand: a },
            {
              dropdown: f(() => [
                c(r, null, {
                  default: f(() => [
                    (w(),
                    z(
                      _e,
                      null,
                      ze(o, (_) =>
                        c(
                          s,
                          {
                            key: _.value,
                            command: _.value,
                            disabled: t.value === _.value,
                          },
                          { default: f(() => [X(L(_.label), 1)]), _: 2 },
                          1032,
                          ["command", "disabled"]
                        )
                      ),
                      64
                    )),
                  ]),
                  _: 1,
                }),
              ]),
              default: f(() => [
                d("i", {
                  class: te(["iconfont icon-contentright", "toolBar-icon"]),
                }),
              ]),
              _: 1,
            }
          )
        );
      };
    },
  }),
  La = P({
    __name: "Language",
    setup(n) {
      const e = zn(),
        t = ae(),
        o = Y(() => t.language),
        a = [
          { label: "简体中文", value: "zh" },
          { label: "English", value: "en" },
        ],
        l = (i) => {
          (e.locale.value = i), t.setGlobalState("language", i);
        };
      return (i, s) => {
        const r = h("el-dropdown-item"),
          u = h("el-dropdown-menu"),
          _ = h("el-dropdown");
        return (
          w(),
          k(
            _,
            { trigger: "click", onCommand: l },
            {
              dropdown: f(() => [
                c(u, null, {
                  default: f(() => [
                    (w(),
                    z(
                      _e,
                      null,
                      ze(a, (p) =>
                        c(
                          r,
                          {
                            key: p.value,
                            command: p.value,
                            disabled: o.value === p.value,
                          },
                          { default: f(() => [X(L(p.label), 1)]), _: 2 },
                          1032,
                          ["command", "disabled"]
                        )
                      ),
                      64
                    )),
                  ]),
                  _: 1,
                }),
              ]),
              default: f(() => [
                d("i", {
                  class: te(["iconfont icon-zhongyingwen", "toolBar-icon"]),
                }),
              ]),
              _: 1,
            }
          )
        );
      };
    },
  }),
  Va = { class: "menu-search-dialog" },
  Ra = P({
    __name: "SearchMenu",
    setup(n) {
      const e = Oe(),
        t = Be(),
        o = Y(() => t.flatMenuListGet.filter((v) => !v.meta.isHide)),
        a = (v, b) => {
          const g = v ? o.value.filter(_(v)) : o.value;
          b(g);
        },
        l = ne(!1),
        i = ne(),
        s = ne(""),
        r = () => {
          (l.value = !0),
            dn(() => {
              setTimeout(() => {
                i.value.focus();
              });
            });
        },
        u = () => {
          l.value = !1;
        },
        _ = (v) => (b) =>
          b.path.toLowerCase().indexOf(v.toLowerCase()) > -1 ||
          b.meta.title.toLowerCase().indexOf(v.toLowerCase()) > -1,
        p = (v) => {
          (s.value = ""),
            v.meta.isLink
              ? window.open(v.meta.isLink, "_blank")
              : e.push(v.path),
            u();
        };
      return (v, b) => {
        const g = h("el-icon"),
          y = h("el-autocomplete"),
          S = h("el-dialog");
        return (
          w(),
          z("div", Va, [
            d("i", {
              class: te(["iconfont icon-sousuo", "toolBar-icon"]),
              onClick: r,
            }),
            c(
              S,
              {
                modelValue: l.value,
                "onUpdate:modelValue": b[2] || (b[2] = (A) => (l.value = A)),
                "destroy-on-close": "",
                modal: !1,
                "show-close": !1,
                fullscreen: "",
                onClick: u,
              },
              {
                default: f(() => [
                  c(
                    y,
                    {
                      ref_key: "menuInputRef",
                      ref: i,
                      modelValue: s.value,
                      "onUpdate:modelValue":
                        b[0] || (b[0] = (A) => (s.value = A)),
                      "value-key": "path",
                      placeholder: "菜单搜索 ：支持菜单名称、路径",
                      "fetch-suggestions": a,
                      onSelect: p,
                      onClick: b[1] || (b[1] = Gn(() => {}, ["stop"])),
                    },
                    {
                      prefix: f(() => [
                        c(g, null, { default: f(() => [c(x(Xn))]), _: 1 }),
                      ]),
                      default: f(({ item: A }) => [
                        c(
                          g,
                          null,
                          {
                            default: f(() => [(w(), k(he(A.meta.icon)))]),
                            _: 2,
                          },
                          1024
                        ),
                        d("span", null, L(A.meta.title), 1),
                      ]),
                      _: 1,
                    },
                    8,
                    ["modelValue"]
                  ),
                ]),
                _: 1,
              },
              8,
              ["modelValue"]
            ),
          ])
        );
      };
    },
  });
const Ba = K(Ra, [["__scopeId", "data-v-147e632e"]]),
  za = { class: "theme-setting" },
  Ga = P({
    __name: "ThemeSetting",
    setup(n) {
      const e = () => {
        gn.emit("openThemeDrawer");
      };
      return (t, o) => (
        w(),
        z("div", za, [
          d("i", {
            class: te(["iconfont icon-zhuti", "toolBar-icon"]),
            onClick: e,
          }),
        ])
      );
    },
  }),
  Xa = "/spacebar/assets/png/msg01-c4ae5b70.png",
  Ya = "/spacebar/assets/png/msg02-4d53d4f2.png",
  Ua = "/spacebar/assets/png/msg03-425ca485.png",
  Wa = "/spacebar/assets/png/msg04-4f657402.png",
  Ha = "/spacebar/assets/png/msg05-dead89ae.png",
  qt = (n) => (we("data-v-40be0955"), (n = n()), Se(), n),
  ja = { class: "message" },
  qa = qt(() =>
    d(
      "div",
      { class: "message-list" },
      [
        d("div", { class: "message-item" }, [
          d("img", { src: Xa, alt: "", class: "message-icon" }),
          d("div", { class: "message-content" }, [
            d("span", { class: "message-title" }, "一键三连 Spacebar 🧡"),
            d("span", { class: "message-date" }, "一分钟前"),
          ]),
        ]),
        d("div", { class: "message-item" }, [
          d("img", { src: Ya, alt: "", class: "message-icon" }),
          d("div", { class: "message-content" }, [
            d("span", { class: "message-title" }, "一键三连 Spacebar 💙"),
            d("span", { class: "message-date" }, "一小时前"),
          ]),
        ]),
        d("div", { class: "message-item" }, [
          d("img", { src: Ua, alt: "", class: "message-icon" }),
          d("div", { class: "message-content" }, [
            d("span", { class: "message-title" }, "一键三连 Spacebar 💚"),
            d("span", { class: "message-date" }, "半天前"),
          ]),
        ]),
        d("div", { class: "message-item" }, [
          d("img", { src: Wa, alt: "", class: "message-icon" }),
          d("div", { class: "message-content" }, [
            d("span", { class: "message-title" }, "一键三连 Spacebar 💜"),
            d("span", { class: "message-date" }, "一星期前"),
          ]),
        ]),
        d("div", { class: "message-item" }, [
          d("img", { src: Ha, alt: "", class: "message-icon" }),
          d("div", { class: "message-content" }, [
            d("span", { class: "message-title" }, "一键三连 Spacebar 💛"),
            d("span", { class: "message-date" }, "一个月前"),
          ]),
        ]),
      ],
      -1
    )
  ),
  Ka = qt(() =>
    d(
      "div",
      { class: "message-empty" },
      [d("img", { src: hn, alt: "notData" }), d("div", null, "暂无消息")],
      -1
    )
  ),
  Qa = qt(() =>
    d(
      "div",
      { class: "message-empty" },
      [d("img", { src: hn, alt: "notData" }), d("div", null, "暂无代办")],
      -1
    )
  ),
  Za = P({
    __name: "Message",
    setup(n) {
      const e = ne("first");
      return (t, o) => {
        const a = h("el-badge"),
          l = h("el-tab-pane"),
          i = h("el-tabs"),
          s = h("el-popover");
        return (
          w(),
          z("div", ja, [
            c(
              s,
              { placement: "bottom", width: 310, trigger: "click" },
              {
                reference: f(() => [
                  c(
                    a,
                    { value: 5, class: "item" },
                    {
                      default: f(() => [
                        d("i", {
                          class: te(["iconfont icon-xiaoxi", "toolBar-icon"]),
                        }),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
                default: f(() => [
                  c(
                    i,
                    {
                      modelValue: e.value,
                      "onUpdate:modelValue":
                        o[0] || (o[0] = (r) => (e.value = r)),
                    },
                    {
                      default: f(() => [
                        c(
                          l,
                          { label: "通知(5)", name: "first" },
                          { default: f(() => [qa]), _: 1 }
                        ),
                        c(
                          l,
                          { label: "消息(0)", name: "second" },
                          { default: f(() => [Ka]), _: 1 }
                        ),
                        c(
                          l,
                          { label: "代办(0)", name: "third" },
                          { default: f(() => [Qa]), _: 1 }
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ["modelValue"]
                  ),
                ]),
                _: 1,
              }
            ),
          ])
        );
      };
    },
  });
const Ja = K(Za, [["__scopeId", "data-v-40be0955"]]),
  cn = [
    [
      "requestFullscreen",
      "exitFullscreen",
      "fullscreenElement",
      "fullscreenEnabled",
      "fullscreenchange",
      "fullscreenerror",
    ],
    [
      "webkitRequestFullscreen",
      "webkitExitFullscreen",
      "webkitFullscreenElement",
      "webkitFullscreenEnabled",
      "webkitfullscreenchange",
      "webkitfullscreenerror",
    ],
    [
      "webkitRequestFullScreen",
      "webkitCancelFullScreen",
      "webkitCurrentFullScreenElement",
      "webkitCancelFullScreen",
      "webkitfullscreenchange",
      "webkitfullscreenerror",
    ],
    [
      "mozRequestFullScreen",
      "mozCancelFullScreen",
      "mozFullScreenElement",
      "mozFullScreenEnabled",
      "mozfullscreenchange",
      "mozfullscreenerror",
    ],
    [
      "msRequestFullscreen",
      "msExitFullscreen",
      "msFullscreenElement",
      "msFullscreenEnabled",
      "MSFullscreenChange",
      "MSFullscreenError",
    ],
  ],
  Te = (() => {
    if (typeof document > "u") return !1;
    const n = cn[0],
      e = {};
    for (const t of cn)
      if ((t == null ? void 0 : t[1]) in document) {
        for (const [a, l] of t.entries()) e[n[a]] = l;
        return e;
      }
    return !1;
  })(),
  un = { change: Te.fullscreenchange, error: Te.fullscreenerror };
let re = {
  request(n = document.documentElement, e) {
    return new Promise((t, o) => {
      const a = () => {
        re.off("change", a), t();
      };
      re.on("change", a);
      const l = n[Te.requestFullscreen](e);
      l instanceof Promise && l.then(a).catch(o);
    });
  },
  exit() {
    return new Promise((n, e) => {
      if (!re.isFullscreen) {
        n();
        return;
      }
      const t = () => {
        re.off("change", t), n();
      };
      re.on("change", t);
      const o = document[Te.exitFullscreen]();
      o instanceof Promise && o.then(t).catch(e);
    });
  },
  toggle(n, e) {
    return re.isFullscreen ? re.exit() : re.request(n, e);
  },
  onchange(n) {
    re.on("change", n);
  },
  onerror(n) {
    re.on("error", n);
  },
  on(n, e) {
    const t = un[n];
    t && document.addEventListener(t, e, !1);
  },
  off(n, e) {
    const t = un[n];
    t && document.removeEventListener(t, e, !1);
  },
  raw: Te,
};
Object.defineProperties(re, {
  isFullscreen: { get: () => !!document[Te.fullscreenElement] },
  element: {
    enumerable: !0,
    get: () => document[Te.fullscreenElement] ?? void 0,
  },
  isEnabled: { enumerable: !0, get: () => !!document[Te.fullscreenEnabled] },
});
Te || (re = { isEnabled: !1 });
const qe = re,
  el = { class: "fullscreen" },
  tl = P({
    __name: "Fullscreen",
    setup(n) {
      const e = ne(qe.isFullscreen);
      fn(() => {
        qe.on("change", () => {
          qe.isFullscreen ? (e.value = !0) : (e.value = !1);
        });
      });
      const t = () => {
        qe.isEnabled || pn.warning("当前您的浏览器不支持全屏 ❌"), qe.toggle();
      };
      return (o, a) => (
        w(),
        z("div", el, [
          d(
            "i",
            {
              class: te([
                ["iconfont", e.value ? "icon-suoxiao" : "icon-fangda"],
                "toolBar-icon",
              ]),
              onClick: t,
            },
            null,
            2
          ),
        ])
      );
    },
  }),
  nl = "/spacebar/assets/gif/avatar-ea67286d.gif",
  ol = d("span", null, "This is userInfo", -1),
  al = { class: "dialog-footer" },
  ll = P({
    __name: "InfoDialog",
    setup(n, { expose: e }) {
      const t = ne(!1);
      return (
        e({
          openDialog: () => {
            t.value = !0;
          },
        }),
        (a, l) => {
          const i = h("el-button"),
            s = h("el-dialog");
          return (
            w(),
            k(
              s,
              {
                modelValue: t.value,
                "onUpdate:modelValue": l[2] || (l[2] = (r) => (t.value = r)),
                title: "个人信息",
                width: "500px",
                draggable: "",
              },
              {
                footer: f(() => [
                  d("span", al, [
                    c(
                      i,
                      { onClick: l[0] || (l[0] = (r) => (t.value = !1)) },
                      { default: f(() => [X("取消")]), _: 1 }
                    ),
                    c(
                      i,
                      {
                        type: "primary",
                        onClick: l[1] || (l[1] = (r) => (t.value = !1)),
                      },
                      { default: f(() => [X("确认")]), _: 1 }
                    ),
                  ]),
                ]),
                default: f(() => [ol]),
                _: 1,
              },
              8,
              ["modelValue"]
            )
          );
        }
      );
    },
  }),
  il = d("span", null, "This is Password", -1),
  sl = { class: "dialog-footer" },
  rl = P({
    __name: "PasswordDialog",
    setup(n, { expose: e }) {
      const t = ne(!1);
      return (
        e({
          openDialog: () => {
            t.value = !0;
          },
        }),
        (a, l) => {
          const i = h("el-button"),
            s = h("el-dialog");
          return (
            w(),
            k(
              s,
              {
                modelValue: t.value,
                "onUpdate:modelValue": l[2] || (l[2] = (r) => (t.value = r)),
                title: "修改密码",
                width: "500px",
                draggable: "",
              },
              {
                footer: f(() => [
                  d("span", sl, [
                    c(
                      i,
                      { onClick: l[0] || (l[0] = (r) => (t.value = !1)) },
                      { default: f(() => [X("取消")]), _: 1 }
                    ),
                    c(
                      i,
                      {
                        type: "primary",
                        onClick: l[1] || (l[1] = (r) => (t.value = !1)),
                      },
                      { default: f(() => [X("确认")]), _: 1 }
                    ),
                  ]),
                ]),
                default: f(() => [il]),
                _: 1,
              },
              8,
              ["modelValue"]
            )
          );
        }
      );
    },
  }),
  cl = (n) => (we("data-v-77eb58f7"), (n = n()), Se(), n),
  ul = cl(() =>
    d("div", { class: "avatar" }, [d("img", { src: nl, alt: "avatar" })], -1)
  ),
  dl = P({
    __name: "Avatar",
    setup(n) {
      const e = Oe(),
        t = _n(),
        o = () => {
          Yn.confirm("您是否确认退出登录?", "温馨提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
          }).then(async () => {
            await Un(),
              t.setToken(""),
              e.replace(Wn),
              pn.success("退出登录成功！");
          });
        },
        a = ne(null),
        l = ne(null),
        i = (s) => {
          var r, u;
          s == "infoRef" && ((r = a.value) == null || r.openDialog()),
            s == "passwordRef" && ((u = l.value) == null || u.openDialog());
        };
      return (s, r) => {
        const u = h("User"),
          _ = h("el-icon"),
          p = h("el-dropdown-item"),
          v = h("Edit"),
          b = h("SwitchButton"),
          g = h("el-dropdown-menu"),
          y = h("el-dropdown");
        return (
          w(),
          z(
            _e,
            null,
            [
              c(
                y,
                { trigger: "click" },
                {
                  dropdown: f(() => [
                    c(g, null, {
                      default: f(() => [
                        c(
                          p,
                          { onClick: r[0] || (r[0] = (S) => i("infoRef")) },
                          {
                            default: f(() => [
                              c(_, null, { default: f(() => [c(u)]), _: 1 }),
                              X(L(s.$t("header.personalData")), 1),
                            ]),
                            _: 1,
                          }
                        ),
                        c(
                          p,
                          { onClick: r[1] || (r[1] = (S) => i("passwordRef")) },
                          {
                            default: f(() => [
                              c(_, null, { default: f(() => [c(v)]), _: 1 }),
                              X(L(s.$t("header.changePassword")), 1),
                            ]),
                            _: 1,
                          }
                        ),
                        c(
                          p,
                          { divided: "", onClick: o },
                          {
                            default: f(() => [
                              c(_, null, { default: f(() => [c(b)]), _: 1 }),
                              X(L(s.$t("header.logout")), 1),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      _: 1,
                    }),
                  ]),
                  default: f(() => [ul]),
                  _: 1,
                }
              ),
              c(ll, { ref_key: "infoRef", ref: a }, null, 512),
              c(rl, { ref_key: "passwordRef", ref: l }, null, 512),
            ],
            64
          )
        );
      };
    },
  });
const fl = K(dl, [["__scopeId", "data-v-77eb58f7"]]),
  pl = { class: "tool-bar-ri" },
  _l = { class: "header-icon" },
  ml = { class: "username" },
  hl = P({
    __name: "ToolBarRight",
    setup(n) {
      const e = _n(),
        t = Y(() => e.userInfo.name);
      return (o, a) => (
        w(),
        z("div", pl, [
          d("div", _l, [
            c(Na, { id: "assemblySize" }),
            c(La, { id: "language" }),
            c(Ba, { id: "searchMenu" }),
            c(Ga, { id: "themeSetting" }),
            c(Ja, { id: "message" }),
            c(tl, { id: "fullscreen" }),
          ]),
          d("span", ml, L(t.value), 1),
          c(fl),
        ])
      );
    },
  });
const xt = K(hl, [["__scopeId", "data-v-dc77bd85"]]),
  gl = { class: "sle" },
  vl = { class: "sle" },
  Tt = P({
    __name: "SubMenu",
    props: { menuList: {} },
    setup(n) {
      const e = Oe(),
        t = (o) => {
          if (o.meta.isLink) return window.open(o.meta.isLink, "_blank");
          e.push(o.path);
        };
      return (o, a) => {
        const l = h("el-icon"),
          i = h("SubMenu", !0),
          s = h("el-sub-menu"),
          r = h("el-menu-item");
        return (
          w(!0),
          z(
            _e,
            null,
            ze(o.menuList, (u) => {
              var _;
              return (
                w(),
                z(
                  _e,
                  { key: u.path },
                  [
                    (_ = u.children) != null && _.length
                      ? (w(),
                        k(
                          s,
                          { key: 0, index: u.path },
                          {
                            title: f(() => [
                              c(
                                l,
                                null,
                                {
                                  default: f(() => [(w(), k(he(u.meta.icon)))]),
                                  _: 2,
                                },
                                1024
                              ),
                              d("span", gl, L(u.meta.title), 1),
                            ]),
                            default: f(() => [
                              c(i, { "menu-list": u.children }, null, 8, [
                                "menu-list",
                              ]),
                            ]),
                            _: 2,
                          },
                          1032,
                          ["index"]
                        ))
                      : (w(),
                        k(
                          r,
                          { key: 1, index: u.path, onClick: (p) => t(u) },
                          {
                            title: f(() => [d("span", vl, L(u.meta.title), 1)]),
                            default: f(() => [
                              c(
                                l,
                                null,
                                {
                                  default: f(() => [(w(), k(he(u.meta.icon)))]),
                                  _: 2,
                                },
                                1024
                              ),
                            ]),
                            _: 2,
                          },
                          1032,
                          ["index", "onClick"]
                        )),
                  ],
                  64
                )
              );
            }),
            128
          )
        );
      };
    },
  });
const bl = (n) => (we("data-v-617fc15b"), (n = n()), Se(), n),
  yl = { class: "logo flx-center" },
  wl = bl(() =>
    d("img", { class: "logo-img", src: Et, alt: "logo" }, null, -1)
  ),
  Sl = P({ name: "layoutVertical" }),
  El = P({
    ...Sl,
    setup(n) {
      const e = "Spacebar",
        t = Re(),
        o = Be(),
        a = ae(),
        l = Y(() => a.accordion),
        i = Y(() => a.isCollapse),
        s = Y(() => o.showMenuListGet),
        r = Y(() => (t.meta.activeMenu ? t.meta.activeMenu : t.path));
      return (u, _) => {
        const p = h("el-menu"),
          v = h("el-scrollbar"),
          b = h("el-aside"),
          g = h("el-header"),
          y = h("el-container");
        return (
          w(),
          k(
            y,
            { class: "layout" },
            {
              default: f(() => [
                c(b, null, {
                  default: f(() => [
                    d(
                      "div",
                      {
                        class: "aside-box",
                        style: Xt({ width: i.value ? "65px" : "210px" }),
                      },
                      [
                        d("div", yl, [
                          wl,
                          wt(d("span", { class: "logo-text" }, L(x(e)), 513), [
                            [St, !i.value],
                          ]),
                        ]),
                        c(v, null, {
                          default: f(() => [
                            c(
                              p,
                              {
                                router: !1,
                                "default-active": r.value,
                                collapse: i.value,
                                "unique-opened": l.value,
                                "collapse-transition": !1,
                              },
                              {
                                default: f(() => [
                                  c(Tt, { "menu-list": s.value }, null, 8, [
                                    "menu-list",
                                  ]),
                                ]),
                                _: 1,
                              },
                              8,
                              ["default-active", "collapse", "unique-opened"]
                            ),
                          ]),
                          _: 1,
                        }),
                      ],
                      4
                    ),
                  ]),
                  _: 1,
                }),
                c(y, null, {
                  default: f(() => [
                    c(g, null, { default: f(() => [c(jt), c(xt)]), _: 1 }),
                    c(Dt),
                  ]),
                  _: 1,
                }),
              ]),
              _: 1,
            }
          )
        );
      };
    },
  });
const Cl = K(El, [["__scopeId", "data-v-617fc15b"]]),
  Dl = (n) => (we("data-v-5ecd0ead"), (n = n()), Se(), n),
  xl = { class: "header-lf mask-image" },
  Tl = { class: "logo flx-center" },
  kl = Dl(() =>
    d("img", { class: "logo-img", src: Et, alt: "logo" }, null, -1)
  ),
  $l = { class: "logo-text" },
  Al = { class: "header-ri" },
  Il = P({ name: "layoutClassic" }),
  Ml = P({
    ...Il,
    setup(n) {
      const e = "Spacebar",
        t = Re(),
        o = Be(),
        a = ae(),
        l = Y(() => a.accordion),
        i = Y(() => a.isCollapse),
        s = Y(() => o.showMenuListGet),
        r = Y(() => (t.meta.activeMenu ? t.meta.activeMenu : t.path));
      return (u, _) => {
        const p = h("el-header"),
          v = h("el-menu"),
          b = h("el-scrollbar"),
          g = h("el-aside"),
          y = h("el-container");
        return (
          w(),
          k(
            y,
            { class: "layout" },
            {
              default: f(() => [
                c(p, null, {
                  default: f(() => [
                    d("div", xl, [
                      d("div", Tl, [kl, d("span", $l, L(x(e)), 1)]),
                      c(jt),
                    ]),
                    d("div", Al, [c(xt)]),
                  ]),
                  _: 1,
                }),
                c(
                  y,
                  { class: "classic-content" },
                  {
                    default: f(() => [
                      c(g, null, {
                        default: f(() => [
                          d(
                            "div",
                            {
                              class: "aside-box",
                              style: Xt({ width: i.value ? "65px" : "210px" }),
                            },
                            [
                              c(b, null, {
                                default: f(() => [
                                  c(
                                    v,
                                    {
                                      router: !1,
                                      "default-active": r.value,
                                      collapse: i.value,
                                      "unique-opened": l.value,
                                      "collapse-transition": !1,
                                    },
                                    {
                                      default: f(() => [
                                        c(
                                          Tt,
                                          { "menu-list": s.value },
                                          null,
                                          8,
                                          ["menu-list"]
                                        ),
                                      ]),
                                      _: 1,
                                    },
                                    8,
                                    [
                                      "default-active",
                                      "collapse",
                                      "unique-opened",
                                    ]
                                  ),
                                ]),
                                _: 1,
                              }),
                            ],
                            4
                          ),
                        ]),
                        _: 1,
                      }),
                      c(
                        y,
                        { class: "classic-main" },
                        { default: f(() => [c(Dt)]), _: 1 }
                      ),
                    ]),
                    _: 1,
                  }
                ),
              ]),
              _: 1,
            }
          )
        );
      };
    },
  });
const Ol = K(Ml, [["__scopeId", "data-v-5ecd0ead"]]),
  Pl = (n) => (we("data-v-e857d371"), (n = n()), Se(), n),
  Fl = { class: "logo flx-center" },
  Nl = Pl(() =>
    d("img", { class: "logo-img", src: Et, alt: "logo" }, null, -1)
  ),
  Ll = { class: "logo-text" },
  Vl = P({ name: "layoutTransverse" }),
  Rl = P({
    ...Vl,
    setup(n) {
      const e = "Spacebar",
        t = Re(),
        o = Oe(),
        a = Be(),
        l = Y(() => a.showMenuListGet),
        i = Y(() => (t.meta.activeMenu ? t.meta.activeMenu : t.path)),
        s = (r) => {
          if (r.meta.isLink) return window.open(r.meta.isLink, "_blank");
          o.push(r.path);
        };
      return (r, u) => {
        const _ = h("el-icon"),
          p = h("el-sub-menu"),
          v = h("el-menu-item"),
          b = h("el-menu"),
          g = h("el-header"),
          y = h("el-container");
        return (
          w(),
          k(
            y,
            { class: "layout" },
            {
              default: f(() => [
                c(g, null, {
                  default: f(() => [
                    d("div", Fl, [Nl, d("span", Ll, L(x(e)), 1)]),
                    c(
                      b,
                      {
                        mode: "horizontal",
                        router: !1,
                        "default-active": i.value,
                      },
                      {
                        default: f(() => [
                          (w(!0),
                          z(
                            _e,
                            null,
                            ze(l.value, (S) => {
                              var A;
                              return (
                                w(),
                                z(
                                  _e,
                                  { key: S.path },
                                  [
                                    (A = S.children) != null && A.length
                                      ? (w(),
                                        k(
                                          p,
                                          {
                                            key: S.path,
                                            index: S.path + "el-sub-menu",
                                          },
                                          {
                                            title: f(() => [
                                              c(
                                                _,
                                                null,
                                                {
                                                  default: f(() => [
                                                    (w(), k(he(S.meta.icon))),
                                                  ]),
                                                  _: 2,
                                                },
                                                1024
                                              ),
                                              d(
                                                "span",
                                                null,
                                                L(S.meta.title),
                                                1
                                              ),
                                            ]),
                                            default: f(() => [
                                              c(
                                                Tt,
                                                { "menu-list": S.children },
                                                null,
                                                8,
                                                ["menu-list"]
                                              ),
                                            ]),
                                            _: 2,
                                          },
                                          1032,
                                          ["index"]
                                        ))
                                      : (w(),
                                        k(
                                          v,
                                          {
                                            key: S.path + "el-menu-item",
                                            index: S.path,
                                            onClick: (F) => s(S),
                                          },
                                          {
                                            title: f(() => [
                                              d(
                                                "span",
                                                null,
                                                L(S.meta.title),
                                                1
                                              ),
                                            ]),
                                            default: f(() => [
                                              c(
                                                _,
                                                null,
                                                {
                                                  default: f(() => [
                                                    (w(), k(he(S.meta.icon))),
                                                  ]),
                                                  _: 2,
                                                },
                                                1024
                                              ),
                                            ]),
                                            _: 2,
                                          },
                                          1032,
                                          ["index", "onClick"]
                                        )),
                                  ],
                                  64
                                )
                              );
                            }),
                            128
                          )),
                        ]),
                        _: 1,
                      },
                      8,
                      ["default-active"]
                    ),
                    c(xt),
                  ]),
                  _: 1,
                }),
                c(Dt),
              ]),
              _: 1,
            }
          )
        );
      };
    },
  });
const Bl = K(Rl, [["__scopeId", "data-v-e857d371"]]),
  zl = (n) => (we("data-v-50a8bf22"), (n = n()), Se(), n),
  Gl = { class: "aside-split" },
  Xl = zl(() =>
    d(
      "div",
      { class: "logo flx-center" },
      [d("img", { class: "logo-img", src: Et, alt: "logo" })],
      -1
    )
  ),
  Yl = { class: "split-list" },
  Ul = ["onClick"],
  Wl = { class: "title" },
  Hl = { class: "logo flx-center" },
  jl = P({ name: "layoutColumns" }),
  ql = P({
    ...jl,
    setup(n) {
      const e = "Spacebar",
        t = Re(),
        o = Oe(),
        a = Be(),
        l = ae(),
        i = Y(() => l.accordion),
        s = Y(() => l.isCollapse),
        r = Y(() => a.showMenuListGet),
        u = Y(() => (t.meta.activeMenu ? t.meta.activeMenu : t.path)),
        _ = ne([]),
        p = ne("");
      mt(
        () => [r, t],
        () => {
          var g;
          if (!r.value.length) return;
          p.value = t.path;
          const b = r.value.filter(
            (y) => t.path === y.path || `/${t.path.split("/")[1]}` === y.path
          );
          if ((g = b[0].children) != null && g.length)
            return (_.value = b[0].children);
          _.value = [];
        },
        { deep: !0, immediate: !0 }
      );
      const v = (b) => {
        var g;
        if (((p.value = b.path), (g = b.children) != null && g.length))
          return (_.value = b.children);
        (_.value = []), o.push(b.path);
      };
      return (b, g) => {
        const y = h("el-icon"),
          S = h("el-scrollbar"),
          A = h("el-menu"),
          F = h("el-aside"),
          O = h("el-header"),
          R = h("el-container");
        return (
          w(),
          k(
            R,
            { class: "layout" },
            {
              default: f(() => [
                d("div", Gl, [
                  Xl,
                  c(S, null, {
                    default: f(() => [
                      d("div", Yl, [
                        (w(!0),
                        z(
                          _e,
                          null,
                          ze(
                            r.value,
                            (U) => (
                              w(),
                              z(
                                "div",
                                {
                                  key: U.path,
                                  class: te([
                                    "split-item",
                                    {
                                      "split-active":
                                        p.value === U.path ||
                                        `/${p.value.split("/")[1]}` === U.path,
                                    },
                                  ]),
                                  onClick: (Z) => v(U),
                                },
                                [
                                  c(
                                    y,
                                    null,
                                    {
                                      default: f(() => [
                                        (w(), k(he(U.meta.icon))),
                                      ]),
                                      _: 2,
                                    },
                                    1024
                                  ),
                                  d("span", Wl, L(U.meta.title), 1),
                                ],
                                10,
                                Ul
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                    ]),
                    _: 1,
                  }),
                ]),
                c(
                  F,
                  {
                    class: te({ "not-aside": !_.value.length }),
                    style: Xt({ width: s.value ? "65px" : "210px" }),
                  },
                  {
                    default: f(() => [
                      d("div", Hl, [
                        wt(
                          d(
                            "span",
                            { class: "logo-text" },
                            L(s.value ? "G" : x(e)),
                            513
                          ),
                          [[St, _.value.length]]
                        ),
                      ]),
                      c(S, null, {
                        default: f(() => [
                          c(
                            A,
                            {
                              router: !1,
                              "default-active": u.value,
                              collapse: s.value,
                              "unique-opened": i.value,
                              "collapse-transition": !1,
                            },
                            {
                              default: f(() => [
                                c(Tt, { "menu-list": _.value }, null, 8, [
                                  "menu-list",
                                ]),
                              ]),
                              _: 1,
                            },
                            8,
                            ["default-active", "collapse", "unique-opened"]
                          ),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  },
                  8,
                  ["class", "style"]
                ),
                c(R, null, {
                  default: f(() => [
                    c(O, null, { default: f(() => [c(jt), c(xt)]), _: 1 }),
                    c(Dt),
                  ]),
                  _: 1,
                }),
              ]),
              _: 1,
            }
          )
        );
      };
    },
  });
const Kl = K(ql, [["__scopeId", "data-v-50a8bf22"]]),
  Ql = P({ name: "layout" }),
  Zl = P({
    ...Ql,
    setup(n) {
      const e = { vertical: Cl, classic: Ol, transverse: Bl, columns: Kl },
        t = ae(),
        o = Y(() => t.layout);
      return (a, l) => (
        w(), z(_e, null, [(w(), k(he(e[o.value]))), c(Io)], 64)
      );
    },
  });
const li = K(Zl, [["__scopeId", "data-v-eac80c2b"]]);
export { li as default };
