import { i as t } from "./index-0275a767.js";
import { u as s } from "./useEcharts-4eb125c3.js";
import { d as a, i as n, T as l, o as u, c } from "./index-fcbc4c7a.js";
import { _ as i } from "./plugin-vue_export-helper-c27b6911.js";
const m = a({ name: "pieChart" }),
  d = a({
    ...m,
    setup(_) {
      const e = n();
      return (
        l(() => {
          let o = t(e.value);
          s(o, {
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)",
            },
            legend: {
              left: "center",
              top: "bottom",
              data: [
                "rose 1",
                "rose 2",
                "rose 3",
                "rose 4",
                "rose 5",
                "rose 6",
                "rose 7",
                "rose 8",
              ],
              textStyle: { color: "#a1a1a1" },
            },
            toolbox: {
              show: !0,
              feature: {
                mark: { show: !0 },
                dataView: { show: !0, readOnly: !1 },
                restore: { show: !0 },
                saveAsImage: { show: !0 },
              },
            },
            series: [
              {
                name: "Radius Mode",
                type: "pie",
                radius: [60, 280],
                center: ["50%", "50%"],
                roseType: "radius",
                itemStyle: { borderRadius: 5 },
                label: { show: !0 },
                emphasis: { label: { show: !0 } },
                data: [
                  { value: 40, name: "rose 1" },
                  { value: 33, name: "rose 2" },
                  { value: 28, name: "rose 3" },
                  { value: 22, name: "rose 4" },
                  { value: 20, name: "rose 5" },
                  { value: 15, name: "rose 6" },
                  { value: 12, name: "rose 7" },
                  { value: 10, name: "rose 8" },
                ],
              },
            ],
          });
        }),
        (o, r) => (
          u(),
          c(
            "div",
            { ref_key: "echartsRef", ref: e, class: "card content-box" },
            null,
            512
          )
        )
      );
    },
  });
const b = i(d, [["__scopeId", "data-v-bc065cd5"]]);
export { b as default };
