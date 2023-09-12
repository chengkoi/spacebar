import {
  d as i,
  i as m,
  r as d,
  o as t,
  c as u,
  b as c,
  h as a,
  w as l,
  F as y,
  f as x,
  ac as v,
  y as r,
  u as s,
  A as n,
  an as I,
} from "./index-fcbc4c7a.js";
import { _ as w } from "./plugin-vue_export-helper-c27b6911.js";
const g = { class: "card content-box" },
  N = i({ name: "proForm" }),
  V = i({
    ...N,
    setup(k) {
      let o = m({});
      const p = m({
        form: {
          inline: !1,
          labelPosition: "right",
          labelWidth: "80px",
          size: "default",
          disabled: !1,
          labelSuffix: " :",
        },
        columns: [
          {
            formItem: {
              label: "用户名",
              prop: "username",
              labelWidth: "80px",
              required: !0,
            },
            attrs: {
              typeName: "input",
              clearable: !0,
              placeholder: "请输入用户名",
              disabled: !0,
            },
          },
          {
            formItem: { label: "密码", prop: "password", class: "data" },
            attrs: {
              typeName: "input",
              clearable: !0,
              autofocus: !0,
              placeholder: "请输入密码",
              type: "password",
            },
          },
          {
            formItem: { label: "邮箱", prop: "email" },
            attrs: {
              typeName: "input",
              placeholder: "请输入邮箱",
              clearable: !0,
              style: "width:500px",
            },
          },
        ],
      });
      return (_, C) => {
        const f = d("el-alert"),
          b = d("el-form-item");
        return (
          t(),
          u("div", g, [
            c(f, {
              title:
                "通过 component :is 组件属性 && v-bind 属性透传，可以将 template 中的 html 代码全部改变为 columns 配置项，具体配置请看代码。",
              type: "warning",
              closable: !1,
            }),
            (t(),
            a(
              n("el-form"),
              r(p.value.form, { ref: "proFormRef", model: s(o) }),
              {
                default: l(() => [
                  (t(!0),
                  u(
                    y,
                    null,
                    x(
                      p.value.columns,
                      (e) => (
                        t(),
                        a(
                          n("el-form-item"),
                          I(r({ key: e.prop }, e.formItem)),
                          {
                            default: l(() => [
                              (t(),
                              a(
                                n(`el-${e.attrs.typeName}`),
                                r(e.attrs, {
                                  modelValue: s(o)[e.formItem.prop],
                                  "onUpdate:modelValue": (h) =>
                                    (s(o)[e.formItem.prop] = h),
                                }),
                                null,
                                16,
                                ["modelValue", "onUpdate:modelValue"]
                              )),
                            ]),
                            _: 2,
                          },
                          1040
                        )
                      )
                    ),
                    128
                  )),
                  c(b, null, {
                    default: l(() => [
                      v(_.$slots, "operation", {}, void 0, !0),
                    ]),
                    _: 3,
                  }),
                ]),
                _: 3,
              },
              16,
              ["model"]
            )),
          ])
        );
      };
    },
  });
const P = w(V, [["__scopeId", "data-v-69441d13"]]);
export { P as default };
