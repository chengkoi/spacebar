import {
  d as g,
  D as U,
  i as u,
  Q as L,
  r as $,
  o as B,
  c as D,
  b as r,
  u as s,
  a as I,
  w as l,
  a0 as N,
  e as i,
  j as P,
  a3 as R,
  aQ as A,
  a1 as F,
  H as V,
  a2 as q,
  R as E,
  aw as H,
} from "./index-fcbc4c7a.js";
import { u as _ } from "./useHandleData-35a647c9.js";
import { I as M, u as Q } from "./index-f8c017d5.js";
import { _ as S } from "./index.vue_vue_type_script_setup_true_name_ProTable_lang-d6af1658.js";
import { T as j } from "./index-d58aab98.js";
import { _ as G } from "./UserDrawer.vue_vue_type_script_setup_true_name_UserDrawer_lang-6e68165f.js";
import {
  g as W,
  a as z,
  b as J,
  c as K,
  d as O,
  r as X,
  e as b,
  B as Y,
  h as Z,
  i as ee,
} from "./user-56e95910.js";
import "./plugin-vue_export-helper-c27b6911.js";
import "./notData-2dc2117c.js";
import "./Imgs-ff247588.js";
import "./upload-56f753a6.js";
const ae = { class: "main-box" },
  te = { class: "table-box" },
  re = g({ name: "useTreeFilter" }),
  be = g({
    ...re,
    setup(le) {
      const w = U(),
        y = () => {
          w.push("/proTable/useTreeFilter/detail/123456?params=detail-page");
        },
        n = u(),
        c = L({ departmentId: "1" }),
        v = (e) => {
          E.success("请注意查看请求参数变化 🤔"),
            (n.value.pageable.pageNum = 1),
            (c.departmentId = e);
        },
        h = [
          { type: "index", label: "#", width: 80 },
          {
            prop: "username",
            label: "用户姓名",
            width: 120,
            search: { el: "input" },
          },
          {
            prop: "gender",
            label: "性别",
            width: 120,
            sortable: !0,
            enum: J,
            search: { el: "select" },
            fieldNames: { label: "genderLabel", value: "genderValue" },
          },
          { prop: "idCard", label: "身份证号" },
          { prop: "email", label: "邮箱" },
          { prop: "address", label: "居住地址" },
          {
            prop: "status",
            label: "用户状态",
            width: 120,
            sortable: !0,
            tag: !0,
            enum: K,
            search: { el: "select" },
            fieldNames: { label: "userLabel", value: "userStatus" },
          },
          { prop: "createTime", label: "创建时间", width: 180 },
          { prop: "operation", label: "操作", width: 330, fixed: "right" },
        ],
        k = async (e) => {
          var a;
          await _(O, { id: [e.id] }, `删除【${e.username}】用户`),
            (a = n.value) == null || a.getTableList();
        },
        C = async (e) => {
          var a;
          await _(X, { id: e.id }, `重置【${e.username}】用户密码`),
            (a = n.value) == null || a.getTableList();
        },
        T = async () => {
          H.confirm("确认导出用户数据?", "温馨提示", { type: "warning" }).then(
            () => {
              var e;
              return Q(
                b,
                "用户列表",
                (e = n.value) == null ? void 0 : e.searchParam
              );
            }
          );
        },
        m = u(null),
        x = () => {
          var a, t;
          const e = {
            title: "用户",
            tempApi: b,
            importApi: Y,
            getTableList: (a = n.value) == null ? void 0 : a.getTableList,
          };
          (t = m.value) == null || t.acceptParams(e);
        },
        f = u(null),
        d = (e, a = {}) => {
          var o, p;
          const t = {
            title: e,
            isView: e === "查看",
            row: { ...a },
            api: e === "新增" ? Z : e === "编辑" ? ee : void 0,
            getTableList: (o = n.value) == null ? void 0 : o.getTableList,
          };
          (p = f.value) == null || p.acceptParams(t);
        };
      return (e, a) => {
        const t = $("el-button");
        return (
          B(),
          D("div", ae, [
            r(
              j,
              {
                label: "name",
                title: "部门列表(单选)",
                "request-api": s(W),
                "default-value": c.departmentId,
                onChange: v,
              },
              null,
              8,
              ["request-api", "default-value"]
            ),
            I("div", te, [
              r(
                S,
                {
                  ref_key: "proTable",
                  ref: n,
                  title: "用户列表",
                  columns: h,
                  "request-api": s(z),
                  "init-param": c,
                  "search-col": { xs: 1, sm: 1, md: 2, lg: 3, xl: 3 },
                },
                {
                  tableHeader: l(() => [
                    r(
                      t,
                      {
                        type: "primary",
                        icon: s(N),
                        onClick: a[0] || (a[0] = (o) => d("新增")),
                      },
                      { default: l(() => [i(" 新增用户 ")]), _: 1 },
                      8,
                      ["icon"]
                    ),
                    r(
                      t,
                      { type: "primary", icon: s(P), plain: "", onClick: x },
                      { default: l(() => [i(" 批量添加用户 ")]), _: 1 },
                      8,
                      ["icon"]
                    ),
                    r(
                      t,
                      { type: "primary", icon: s(R), plain: "", onClick: T },
                      { default: l(() => [i(" 导出用户数据 ")]), _: 1 },
                      8,
                      ["icon"]
                    ),
                    r(
                      t,
                      { type: "primary", plain: "", onClick: y },
                      { default: l(() => [i(" To 平级详情页面 ")]), _: 1 }
                    ),
                  ]),
                  operation: l((o) => [
                    r(
                      t,
                      {
                        type: "primary",
                        link: "",
                        icon: s(A),
                        onClick: (p) => d("查看", o.row),
                      },
                      { default: l(() => [i(" 查看 ")]), _: 2 },
                      1032,
                      ["icon", "onClick"]
                    ),
                    r(
                      t,
                      {
                        type: "primary",
                        link: "",
                        icon: s(F),
                        onClick: (p) => d("编辑", o.row),
                      },
                      { default: l(() => [i(" 编辑 ")]), _: 2 },
                      1032,
                      ["icon", "onClick"]
                    ),
                    r(
                      t,
                      {
                        type: "primary",
                        link: "",
                        icon: s(V),
                        onClick: (p) => C(o.row),
                      },
                      { default: l(() => [i(" 重置密码 ")]), _: 2 },
                      1032,
                      ["icon", "onClick"]
                    ),
                    r(
                      t,
                      {
                        type: "primary",
                        link: "",
                        icon: s(q),
                        onClick: (p) => k(o.row),
                      },
                      { default: l(() => [i(" 删除 ")]), _: 2 },
                      1032,
                      ["icon", "onClick"]
                    ),
                  ]),
                  _: 1,
                },
                8,
                ["request-api", "init-param"]
              ),
              r(G, { ref_key: "drawerRef", ref: f }, null, 512),
              r(M, { ref_key: "dialogRef", ref: m }, null, 512),
            ]),
          ])
        );
      };
    },
  });
export { be as default };
