import {
  d as s,
  D as c,
  r as n,
  o as d,
  c as p,
  a as t,
  b as r,
  w as l,
  u as i,
  p as u,
  g as m,
  e as h,
} from "./index-fcbc4c7a.js";
import { _ as f } from "./plugin-vue_export-helper-c27b6911.js";
const v = "/spacebar/assets/png/404-dc770d81.png",
  o = (e) => (u("data-v-856d770e"), (e = e()), m(), e),
  g = { class: "not-container" },
  x = o(() => t("img", { src: v, class: "not-img", alt: "404" }, null, -1)),
  b = { class: "not-detail" },
  k = o(() => t("h2", null, "404", -1)),
  C = o(() => t("h4", null, "抱歉，您访问的页面不存在~🤷‍♂️🤷‍♀️", -1)),
  y = s({ name: "404" }),
  I = s({
    ...y,
    setup(e) {
      const _ = c();
      return (w, B) => {
        const a = n("el-button");
        return (
          d(),
          p("div", g, [
            x,
            t("div", b, [
              k,
              C,
              r(
                a,
                { type: "primary", onClick: i(_).back },
                { default: l(() => [h(" 返回上一页 ")]), _: 1 },
                8,
                ["onClick"]
              ),
            ]),
          ])
        );
      };
    },
  });
const V = f(I, [["__scopeId", "data-v-856d770e"]]);
export { V as default };
