import {
  d as s,
  r as _,
  $ as n,
  o as t,
  c as r,
  a4 as d,
  h as p,
  w as i,
  e as l,
  p as h,
  g as u,
  a as m,
  R as v,
} from "./index-fcbc4c7a.js";
import { _ as x } from "./plugin-vue_export-helper-c27b6911.js";
const f = (e) => (h("data-v-d8609005"), (e = e()), u(), e),
  k = { class: "card content-box" },
  w = f(() => m("span", { class: "text" }, "节流指令 🍇🍇🍇🍓🍓🍓", -1)),
  y = s({ name: "throttleDirect" }),
  B = s({
    ...y,
    setup(e) {
      const o = () => {
        v.success("我是节流按钮触发的事件 🍍🍓🍌");
      };
      return (C, I) => {
        const c = _("el-button"),
          a = n("throttle");
        return (
          t(),
          r("div", k, [
            w,
            d(
              (t(),
              p(
                c,
                { type: "primary" },
                { default: i(() => [l(" 节流按钮 (每隔1S秒后执行) ")]), _: 1 }
              )),
              [[a, o]]
            ),
          ])
        );
      };
    },
  });
const g = x(B, [["__scopeId", "data-v-d8609005"]]);
export { g as default };
