import {
  d as s,
  D as c,
  r as n,
  o as p,
  c as r,
  a as t,
  b as d,
  w as l,
  u as i,
  p as u,
  g as m,
  e as f,
} from "./index-fcbc4c7a.js";
import { _ as h } from "./plugin-vue_export-helper-c27b6911.js";
const v = "/spacebar/assets/png/403-6dc0b7a9.png",
  o = (e) => (u("data-v-16099f38"), (e = e()), m(), e),
  b = { class: "not-container" },
  g = o(() => t("img", { src: v, class: "not-img", alt: "403" }, null, -1)),
  x = { class: "not-detail" },
  k = o(() => t("h2", null, "403", -1)),
  C = o(() => t("h4", null, "抱歉，您无权访问该页面~🙅‍♂️🙅‍♀️", -1)),
  y = s({ name: "403" }),
  I = s({
    ...y,
    setup(e) {
      const a = c();
      return (w, B) => {
        const _ = n("el-button");
        return (
          p(),
          r("div", b, [
            g,
            t("div", x, [
              k,
              C,
              d(
                _,
                { type: "primary", onClick: i(a).back },
                { default: l(() => [f(" 返回上一页 ")]), _: 1 },
                8,
                ["onClick"]
              ),
            ]),
          ])
        );
      };
    },
  });
const V = h(I, [["__scopeId", "data-v-16099f38"]]);
export { V as default };
