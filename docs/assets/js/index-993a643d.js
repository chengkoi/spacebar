import {
  i as a,
  d as M,
  D as Y,
  T as Z,
  X as G,
  o as q,
  c as T,
  a as e,
  u as A,
  P as X,
  t as z,
  b as l,
  a7 as Q,
  p as K,
  g as W,
} from "./index-fcbc4c7a.js";
import $ from "./chinaMapChart-7e78a0e2.js";
import j from "./AgeRatioChart-14b082f8.js";
import L from "./AnnualUseChart-7ebc0a4d.js";
import J from "./HotPlateChart-feeee16b.js";
import ee from "./MaleFemaleRatioChart-384e3b0f.js";
import ae from "./OverNext30Chart-23db13bc.js";
import te from "./PlatformSourceChart-5a2dde13.js";
import ne from "./RealTimeAccessChart-a96ce9ed.js";
import { _ as se } from "./plugin-vue_export-helper-c27b6911.js";
import "./index-0275a767.js";
import "./api-97f196df.js";
import "./liquidFillView-2acfc97b.js";
const d =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAAHCAYAAACx3+twAAAAAXNSR0IArs4c6QAAAZ9JREFUSEvNlb9LHFEQxz/fE4MXsJEUVhaCndcKqSxVUspZHeS0zIGChYIEXcXGxuLQgzSiohD8Ucr5BwRBWxvRzkJSCXqFsuqOuIrE7O5bDQfxtW/m+2bmzWdGVqWIUUFkSTrGKRny6uXgbxPboIFrZhHjgBwaBxh5feX0Txubp4VG1hB9ib6PF8v4fNMoV5EYZshhrAM5x/s+YoxJyhKWZBcmYDvkEOsoRTDDGD3xgrZGH0GYWIsjqHMyFFSg+qIohlhgAjENNDj8Dwno1wgnkaLMk+Uy/NhiSmGrGAV5nMfZPf+o7ZHlggqkCBrVMKneqKCt0IZYRXQ7gjKMOZqY0gD+i8JU6CbgJ9Dq8K8hhlViOc7GPIoozMPd8ZCXF+34SIv/d4QWaSVgqQ4IbQMdb0UolvknhLZRiuB7RmiOZq4ovxWhxCFov2imRrkOCG0iul6B0HcNcPePCA2pxFY9EEreCk/qtksXxkfnoAo40xeOYwPa4APXfEaODfTgeMuRBvkdGZY/+IRPZ8qghBv24zZQuDQ82oG2FA1fHnv3y0m/CFsHcS4AAAAASUVORK5CYII=",
  E = () => {
    const c = a(0),
      _ = a(0),
      r = a(""),
      m = a(0),
      u = a(0),
      t = a(0),
      h = a(0),
      f = a("");
    return (
      (() => {
        const n = new Date();
        (c.value = n.getFullYear()),
          (_.value = n.getMonth() + 1),
          (r.value = "日一二三四五六".charAt(n.getDay())),
          (m.value = n.getDate()),
          (u.value =
            (n.getHours() + "").padStart(2, "0") ||
            new Intl.NumberFormat(void 0, { minimumIntegerDigits: 2 }).format(
              n.getHours()
            )),
          (t.value =
            (n.getMinutes() + "").padStart(2, "0") ||
            new Intl.NumberFormat(void 0, { minimumIntegerDigits: 2 }).format(
              n.getMinutes()
            )),
          (h.value =
            (n.getSeconds() + "").padStart(2, "0") ||
            new Intl.NumberFormat(void 0, { minimumIntegerDigits: 2 }).format(
              n.getSeconds()
            )),
          (f.value = `${c.value}年${_.value}月${m.value} ${u.value}:${t.value}:${h.value}`);
      })(),
      {
        year: c,
        month: _,
        day: m,
        hour: u,
        minute: t,
        second: h,
        week: r,
        nowTime: f,
      }
    );
  },
  o = (c) => (K("data-v-96f246d1"), (c = c()), W(), c),
  re = { class: "dataScreen-container" },
  oe = { class: "dataScreen-header" },
  ce = { class: "header-lf" },
  le = o(() =>
    e(
      "div",
      { class: "header-ct" },
      [
        e("div", { class: "header-ct-title" }, [
          e("span", null, "智慧旅游可视化大数据展示平台"),
          e("div", { class: "header-ct-warning" }, "平台高峰预警信息（2条）"),
        ]),
      ],
      -1
    )
  ),
  ie = { class: "header-rg" },
  de = o(() => e("span", { class: "header-download" }, "统计报告", -1)),
  me = { class: "header-time" },
  ue = { class: "dataScreen-main" },
  he = { class: "dataScreen-lf" },
  ve = { class: "dataScreen-top" },
  _e = o(() =>
    e(
      "div",
      { class: "dataScreen-main-title" },
      [e("span", null, "实时游客统计"), e("img", { src: d, alt: "" })],
      -1
    )
  ),
  fe = { class: "dataScreen-main-chart" },
  pe = { class: "dataScreen-center" },
  ge = o(() =>
    e(
      "div",
      { class: "dataScreen-main-title" },
      [e("span", null, "男女比例"), e("img", { src: d, alt: "" })],
      -1
    )
  ),
  Se = { class: "dataScreen-main-chart" },
  Ae = { class: "dataScreen-bottom" },
  Re = o(() =>
    e(
      "div",
      { class: "dataScreen-main-title" },
      [e("span", null, "年龄比例"), e("img", { src: d, alt: "" })],
      -1
    )
  ),
  Ce = { class: "dataScreen-main-chart" },
  we = { class: "dataScreen-ct" },
  xe = { class: "dataScreen-map" },
  Ne = o(() =>
    e("div", { class: "dataScreen-map-title" }, "景区实时客流量", -1)
  ),
  Fe = { class: "dataScreen-cb" },
  De = o(() =>
    e(
      "div",
      { class: "dataScreen-main-title" },
      [e("span", null, "未来30天游客量趋势图"), e("img", { src: d, alt: "" })],
      -1
    )
  ),
  be = { class: "dataScreen-main-chart" },
  Ie = { class: "dataScreen-rg" },
  ke = { class: "dataScreen-top" },
  ye = o(() =>
    e(
      "div",
      { class: "dataScreen-main-title" },
      [e("span", null, "热门景区排行"), e("img", { src: d, alt: "" })],
      -1
    )
  ),
  Ee = { class: "dataScreen-main-chart" },
  Me = { class: "dataScreen-center" },
  Be = o(() =>
    e(
      "div",
      { class: "dataScreen-main-title" },
      [e("span", null, "年度游客量对比"), e("img", { src: d, alt: "" })],
      -1
    )
  ),
  Ve = { class: "dataScreen-main-chart" },
  He = { class: "dataScreen-bottom" },
  Oe = o(() =>
    e(
      "div",
      { class: "dataScreen-main-title" },
      [e("span", null, "预约渠道数据统计"), e("img", { src: d, alt: "" })],
      -1
    )
  ),
  Pe = { class: "dataScreen-main-chart" },
  Ue = M({ name: "dataScreen" }),
  Ye = M({
    ...Ue,
    setup(c) {
      const _ = Y(),
        r = a(null);
      Z(() => {
        r.value &&
          ((r.value.style.transform = `scale(${m()}) translate(-50%, -50%)`),
          (r.value.style.width = "1920px"),
          (r.value.style.height = "1080px")),
          P(),
          window.addEventListener("resize", u);
      });
      const m = (s = 1920, i = 1080) => {
          let v = window.innerWidth / s,
            p = window.innerHeight / i;
          return v < p ? v : p;
        },
        u = () => {
          r.value &&
            (r.value.style.transform = `scale(${m()}) translate(-50%, -50%)`),
            Object.values(t).forEach((s) => {
              s && s.resize();
            });
        },
        t = {
          chart1: null,
          chart2: null,
          chart3: null,
          chart4: null,
          chart5: null,
          chart6: null,
          chart7: null,
          mapChart: null,
        },
        h = a(),
        f = a(),
        S = a(),
        n = a(),
        R = a(),
        C = a(),
        w = a(),
        x = a();
      let B = [
          { value: 200, name: "10岁以下", percentage: "16%" },
          { value: 110, name: "10 - 18岁", percentage: "8%" },
          { value: 150, name: "18 - 30岁", percentage: "12%" },
          { value: 310, name: "30 - 40岁", percentage: "24%" },
          { value: 250, name: "40 - 60岁", percentage: "20%" },
          { value: 260, name: "60岁以上", percentage: "20%" },
        ],
        V = [
          { value: 79999, name: "峨眉山", percentage: "80%", maxValue: 1e5 },
          { value: 59999, name: "稻城亚丁", percentage: "60%", maxValue: 1e5 },
          { value: 49999, name: "九寨沟", percentage: "50%", maxValue: 1e5 },
          { value: 39999, name: "万里长城", percentage: "40%", maxValue: 1e5 },
          { value: 29999, name: "北京故宫", percentage: "30%", maxValue: 1e5 },
        ],
        H = [
          { value: 40, name: "智慧文旅平台", percentage: "40%" },
          { value: 10, name: "携程", percentage: "10%" },
          { value: 20, name: "飞猪", percentage: "20%" },
          { value: 30, name: "其他渠道", percentage: "30%" },
        ],
        N = [
          {
            label: new Date().getFullYear() - 2 + "年",
            value: [
              "184",
              "90",
              "120",
              "0",
              "30",
              "100",
              "80",
              "40",
              "20",
              "510",
              "350",
              "180",
            ],
          },
          {
            label: new Date().getFullYear() - 1 + "年",
            value: [
              "118",
              "509",
              "366",
              "162",
              "380",
              "123",
              "321",
              "158",
              "352",
              "474",
              "154",
              "22",
            ],
          },
          {
            label: new Date().getFullYear() + "年",
            value: [
              "548",
              "259",
              "113",
              "90",
              "69",
              "512",
              "23",
              "49",
              "28",
              "420",
              "313",
              "156",
            ],
          },
        ],
        O = [
          {
            fromName: "北京",
            toName: "上海",
            coords: [
              [116.4551, 40.2539],
              [121.4648, 31.2891],
            ],
          },
          {
            fromName: "上海",
            toName: "北京",
            coords: [
              [121.4648, 31.2891],
              [116.4551, 40.2539],
            ],
          },
          {
            fromName: "北京",
            toName: "广州",
            coords: [
              [116.4551, 40.2539],
              [113.5107, 23.2196],
            ],
          },
          {
            fromName: "广州",
            toName: "北京",
            coords: [
              [113.5107, 23.2196],
              [116.4551, 40.2539],
            ],
          },
          {
            fromName: "北京",
            toName: "成都",
            coords: [
              [116.4551, 40.2539],
              [103.9526, 30.7617],
            ],
          },
          {
            fromName: "成都",
            toName: "北京",
            coords: [
              [103.9526, 30.7617],
              [116.4551, 40.2539],
            ],
          },
          {
            fromName: "成都",
            toName: "新疆维吾尔自治区",
            coords: [
              [103.9526, 30.7617],
              [85.294711, 41.371801],
            ],
          },
          {
            fromName: " 新疆维吾尔自治区",
            toName: "成都",
            coords: [
              [85.294711, 41.371801],
              [103.9526, 30.7617],
            ],
          },
        ];
      const P = () => {
          var s, i, v, p, b, I, k, y;
          (t.chart1 = (s = h.value) == null ? void 0 : s.initChart(0.5)),
            (t.chart2 = (i = f.value) == null ? void 0 : i.initChart(B)),
            (t.chart3 =
              (v = S.value) == null
                ? void 0
                : v.initChart({
                    data: N,
                    unit: N.map((g) => g.label),
                    columns: [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10",
                      "11",
                      "12",
                    ],
                    colors: ["#FFA600", "#007AFE", "#FF4B7A"],
                  })),
            (t.chart4 =
              (p = n.value) == null
                ? void 0
                : p.initChart({
                    data: V,
                    colors: [
                      "#1089E7",
                      "#F57474",
                      "#56D0E3",
                      "#F8B448",
                      "#8B78F6",
                    ],
                  })),
            (t.chart5 =
              (b = R.value) == null
                ? void 0
                : b.initChart({ man: 0.6, woman: 0.4 })),
            (t.chart6 =
              (I = C.value) == null
                ? void 0
                : I.initChart({
                    unit: ["访问量"],
                    data: new Array(30)
                      .fill("")
                      .map((g) => ((g = Q(1, 2e4)), g)),
                  })),
            (t.chart7 =
              (k = w.value) == null
                ? void 0
                : k.initChart({
                    data: H,
                    colors: [
                      "#078dbc",
                      "#6ad40b",
                      "#6172fc",
                      "#1786ff",
                      "#ffbe2f",
                      "#4dc89d",
                      "#b797df",
                      "#ffd3aa",
                    ],
                  })),
            (t.mapChart = (y = x.value) == null ? void 0 : y.initChart(O));
        },
        { nowTime: U } = E();
      let F = null,
        D = a(U.value);
      return (
        (F = setInterval(() => {
          D.value = E().nowTime.value;
        }, 1e3)),
        G(() => {
          window.removeEventListener("resize", u),
            clearInterval(F),
            Object.values(t).forEach((s) => (s == null ? void 0 : s.dispose()));
        }),
        (s, i) => (
          q(),
          T("div", re, [
            e(
              "div",
              { ref_key: "dataScreenRef", ref: r, class: "dataScreen" },
              [
                e("div", oe, [
                  e("div", ce, [
                    e(
                      "span",
                      {
                        class: "header-screening",
                        onClick: i[0] || (i[0] = (v) => A(_).push(A(X))),
                      },
                      "首页"
                    ),
                  ]),
                  le,
                  e("div", ie, [de, e("span", me, "当前时间：" + z(A(D)), 1)]),
                ]),
                e("div", ue, [
                  e("div", he, [
                    e("div", ve, [
                      _e,
                      e("div", fe, [
                        l(
                          ne,
                          { ref_key: "RealTimeAccessRef", ref: h },
                          null,
                          512
                        ),
                      ]),
                    ]),
                    e("div", pe, [
                      ge,
                      e("div", Se, [
                        l(
                          ee,
                          { ref_key: "MaleFemaleRatioRef", ref: R },
                          null,
                          512
                        ),
                      ]),
                    ]),
                    e("div", Ae, [
                      Re,
                      e("div", Ce, [
                        l(j, { ref_key: "AgeRatioRef", ref: f }, null, 512),
                      ]),
                    ]),
                  ]),
                  e("div", we, [
                    e("div", xe, [
                      Ne,
                      l($, { ref_key: "MapChartRef", ref: x }, null, 512),
                    ]),
                    e("div", Fe, [
                      De,
                      e("div", be, [
                        l(ae, { ref_key: "OverNext30Ref", ref: C }, null, 512),
                      ]),
                    ]),
                  ]),
                  e("div", Ie, [
                    e("div", ke, [
                      ye,
                      e("div", Ee, [
                        l(J, { ref_key: "HotPlateRef", ref: n }, null, 512),
                      ]),
                    ]),
                    e("div", Me, [
                      Be,
                      e("div", Ve, [
                        l(L, { ref_key: "AnnualUseRef", ref: S }, null, 512),
                      ]),
                    ]),
                    e("div", He, [
                      Oe,
                      e("div", Pe, [
                        l(
                          te,
                          { ref_key: "PlatformSourceRef", ref: w },
                          null,
                          512
                        ),
                      ]),
                    ]),
                  ]),
                ]),
              ],
              512
            ),
          ])
        )
      );
    },
  });
const ea = se(Ye, [["__scopeId", "data-v-96f246d1"]]);
export { ea as default };
