import {
  d as h,
  i as x,
  U as b,
  r as v,
  o as u,
  c,
  F as _,
  f,
  a as r,
  t as y,
  Y as k,
  b as w,
  w as i,
  q as B,
  ac as F,
  h as p,
  A as S,
} from "./index-fcbc4c7a.js";
import { _ as A } from "./plugin-vue_export-helper-c27b6911.js";
const D = { class: "select-filter" },
  I = { class: "select-filter-item-title" },
  N = { key: 0, class: "select-filter-notData" },
  E = { class: "select-filter-list" },
  $ = ["onClick"],
  q = h({ name: "selectFilter" }),
  z = h({
    ...q,
    props: {
      data: { default: () => [] },
      defaultValues: { default: () => ({}) },
    },
    emits: ["change"],
    setup(C, { emit: g }) {
      const n = C,
        l = x({});
      b(
        () => n.defaultValues,
        () => {
          n.data.forEach((e) => {
            e.multiple
              ? (l.value[e.key] = n.defaultValues[e.key] ?? [""])
              : (l.value[e.key] = n.defaultValues[e.key] ?? "");
          });
        },
        { deep: !0, immediate: !0 }
      );
      const V = (e, a) => {
        if (!e.multiple)
          l.value[e.key] !== a.value && (l.value[e.key] = a.value);
        else if (
          (e.options[0].value === a.value && (l.value[e.key] = [a.value]),
          l.value[e.key].includes(a.value))
        ) {
          let o = l.value[e.key].findIndex((d) => d === a.value);
          l.value[e.key].splice(o, 1),
            l.value[e.key].length == 0 &&
              (l.value[e.key] = [e.options[0].value]);
        } else
          l.value[e.key].push(a.value),
            l.value[e.key].includes(e.options[0].value) &&
              l.value[e.key].splice(0, 1);
        g("change", l.value);
      };
      return (e, a) => {
        const o = v("el-icon"),
          d = v("el-scrollbar");
        return (
          u(),
          c("div", D, [
            (u(!0),
            c(
              _,
              null,
              f(
                e.data,
                (s) => (
                  u(),
                  c("div", { key: s.key, class: "select-filter-item" }, [
                    r("div", I, [r("span", null, y(s.title) + " ：", 1)]),
                    s.options.length
                      ? k("", !0)
                      : (u(), c("span", N, "暂无数据 ~")),
                    w(
                      d,
                      null,
                      {
                        default: i(() => [
                          r("ul", E, [
                            (u(!0),
                            c(
                              _,
                              null,
                              f(
                                s.options,
                                (t) => (
                                  u(),
                                  c(
                                    "li",
                                    {
                                      key: t.value,
                                      class: B({
                                        active:
                                          t.value === l.value[s.key] ||
                                          (Array.isArray(l.value[s.key]) &&
                                            l.value[s.key].includes(t.value)),
                                      }),
                                      onClick: (L) => V(s, t),
                                    },
                                    [
                                      F(
                                        e.$slots,
                                        "default",
                                        { row: t },
                                        () => [
                                          t.icon
                                            ? (u(),
                                              p(
                                                o,
                                                { key: 0 },
                                                {
                                                  default: i(() => [
                                                    (u(), p(S(t.icon))),
                                                  ]),
                                                  _: 2,
                                                },
                                                1024
                                              ))
                                            : k("", !0),
                                          r("span", null, y(t.label), 1),
                                        ],
                                        !0
                                      ),
                                    ],
                                    10,
                                    $
                                  )
                                )
                              ),
                              128
                            )),
                          ]),
                        ]),
                        _: 2,
                      },
                      1024
                    ),
                  ])
                )
              ),
              128
            )),
          ])
        );
      };
    },
  });
const j = A(z, [["__scopeId", "data-v-d42283da"]]);
export { j as S };
