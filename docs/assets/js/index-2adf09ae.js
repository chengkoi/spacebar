import {
  d as s,
  i as c,
  r as _,
  o as d,
  c as p,
  b as l,
  p as r,
  g as u,
  a as m,
} from "./index-fcbc4c7a.js";
import { _ as i } from "./plugin-vue_export-helper-c27b6911.js";
const v = (e) => (r("data-v-cbb1d248"), (e = e()), u(), e),
  b = { class: "card content-box" },
  f = v(() => m("span", { class: "text" }, "我是menu2-3 🍓🍇🍈🍉", -1)),
  x = s({ name: "menu23" }),
  V = s({
    ...x,
    setup(e) {
      const o = c("");
      return (h, t) => {
        const a = _("el-input");
        return (
          d(),
          p("div", b, [
            f,
            l(
              a,
              {
                modelValue: o.value,
                "onUpdate:modelValue": t[0] || (t[0] = (n) => (o.value = n)),
                placeholder: "测试缓存",
              },
              null,
              8,
              ["modelValue"]
            ),
          ])
        );
      };
    },
  });
const S = i(V, [["__scopeId", "data-v-cbb1d248"]]);
export { S as default };
