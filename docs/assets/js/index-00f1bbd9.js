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
const v = (e) => (r("data-v-e4ce5ed8"), (e = e()), u(), e),
  f = { class: "card content-box" },
  x = v(() => m("span", { class: "text" }, "我是menu3 🍓🍇🍈🍉", -1)),
  V = s({ name: "menu3" }),
  h = s({
    ...V,
    setup(e) {
      const o = c("");
      return (I, t) => {
        const a = _("el-input");
        return (
          d(),
          p("div", f, [
            x,
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
const b = i(h, [["__scopeId", "data-v-e4ce5ed8"]]);
export { b as default };
