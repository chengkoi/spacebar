import { i as n } from "./index-0275a767.js";
import { u as c } from "./useEcharts-4eb125c3.js";
import { d as o, i as l, o as d, c as f } from "./index-fcbc4c7a.js";
import { _ as p } from "./plugin-vue_export-helper-c27b6911.js";
const u = o({ name: "cure" }),
  x = o({
    ...u,
    setup(h, { expose: a }) {
      const r = l();
      return (
        a({
          initChart: (t) => {
            const i = n(r.value),
              s = {
                tooltip: {
                  trigger: "axis",
                  backgroundColor: "transparent",
                  axisPointer: { type: "none" },
                  padding: 0,
                  formatter: (
                    e
                  ) => `<div style="width:100%; height: 70px !important; display:flex;flex-direction: column;justify-content: space-between;padding:10px;box-sizing: border-box;
      color:#fff; background: #6B9DFE;border-radius: 4px;font-size:14px; ">
        <div style="display: flex; align-items: center;"> <div style="width:5px;height:5px;background:#ffffff;border-radius: 50%;margin-right:5px"></div>平台 :  ${e[0].name}</div>
        <div style="display: flex;align-items: center;"><div style="width:5px;height:5px;background:#ffffff;border-radius: 50%;margin-right:5px"></div>数据量 :  ${e[0].value}</div>
      </div>`,
                },
                toolbox: { show: !0, orient: "horizontal" },
                grid: { left: "0", right: "0" },
                dataZoom: [
                  {
                    show: !1,
                    height: 10,
                    xAxisIndex: [0],
                    bottom: 0,
                    startValue: 0,
                    endValue: 9,
                    handleStyle: { color: "#6b9dfe" },
                    textStyle: { color: "transparent" },
                  },
                  { type: "inside", show: !0, height: 0, zoomLock: !0 },
                ],
                xAxis: [
                  {
                    type: "category",
                    data: t.map((e) => ({ value: e.spotName })),
                    axisTick: { show: !1 },
                    axisLabel: {
                      margin: 20,
                      interval: 0,
                      color: "#a1a1a1",
                      fontSize: 14,
                      formatter: function (e) {
                        return e.length > 8 ? e.slice(0, 8) + "..." : e;
                      },
                    },
                    axisLine: { lineStyle: { color: "#c0c0c0" } },
                  },
                ],
                yAxis: [
                  {
                    min: 0,
                    axisLine: { show: !1 },
                    axisTick: { show: !1 },
                    splitLine: { show: !0, lineStyle: { color: "#c0c0c0" } },
                    axisLabel: {
                      color: "#a1a1a1",
                      fontSize: 16,
                      fontWeight: 400,
                      formatter: function (e) {
                        return e === 0 ? e : e >= 1e4 ? e / 1e4 + "w" : e;
                      },
                    },
                  },
                ],
                series: [
                  {
                    name: "Direct",
                    type: "bar",
                    data: t.map((e) => ({ value: e.value })),
                    barWidth: "45px",
                    itemStyle: {
                      color: "#C5D8FF",
                      borderRadius: [12, 12, 0, 0],
                    },
                    emphasis: { itemStyle: { color: "#6B9DFE" } },
                  },
                ],
              };
            c(i, s);
          },
        }),
        (t, i) => (
          d(),
          f(
            "div",
            { ref_key: "echartsRef", ref: r, class: "echarts" },
            null,
            512
          )
        )
      );
    },
  });
const w = p(x, [["__scopeId", "data-v-6c5c5283"]]);
export { w as default };
