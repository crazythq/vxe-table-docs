(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e5581"],{"93a2":function(e,t,n){"use strict";n.r(t);var o=n("7a23"),r=Object(o["createElementVNode"])("p",{class:"tip"},[Object(o["createTextVNode"])(" 具体兼容请查看 "),Object(o["createElementVNode"])("a",{class:"link",href:"https://github.com/x-extends/vxe-table-plugin-export-xlsx",target:"_blank"},"vxe-table-plugin-export-xlsx"),Object(o["createTextVNode"])(" 插件的 API"),Object(o["createElementVNode"])("br"),Object(o["createElementVNode"])("span",{class:"red"},"（注：该示例仅供参考，建议使用后端导出）")],-1),a={class:"demo-code"};function l(e,t,n,l,c,m){var u=Object(o["resolveComponent"])("vxe-button"),s=Object(o["resolveComponent"])("vxe-toolbar"),d=Object(o["resolveComponent"])("vxe-column"),i=Object(o["resolveComponent"])("vxe-colgroup"),x=Object(o["resolveComponent"])("vxe-table"),b=Object(o["resolveComponent"])("pre-code");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",null,[r,Object(o["createVNode"])(s,{ref:"xToolbar",custom:"",import:"",export:""},{buttons:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(u,{onClick:t[0]||(t[0]=function(t){return e.demo1.tableData=[]})},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])("清空数据")]})),_:1}),Object(o["createVNode"])(u,{onClick:e.exportDataEvent},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])("导出数据")]})),_:1},8,["onClick"]),Object(o["createVNode"])(u,{onClick:t[1]||(t[1]=function(t){return e.demo1.align="left"})},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])("居左")]})),_:1}),Object(o["createVNode"])(u,{onClick:t[2]||(t[2]=function(t){return e.demo1.align="center"})},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])("居中")]})),_:1}),Object(o["createVNode"])(u,{onClick:t[3]||(t[3]=function(t){return e.demo1.align="right"})},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])("居右")]})),_:1})]})),_:1},512),Object(o["createVNode"])(x,{border:"","show-footer":"",ref:"xTable",height:"500",align:e.demo1.align,loading:e.demo1.loading,"import-config":e.demo1.tableImport,"export-config":e.demo1.tableExport,"footer-method":e.footerMethod,"merge-cells":e.demo1.mergeCells,"merge-footer-items":e.demo1.mergeFooterItems,data:e.demo1.tableData},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(d,{type:"checkbox",width:"60"}),Object(o["createVNode"])(d,{type:"seq",width:"60"}),Object(o["createVNode"])(i,{title:"Group1"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(d,{field:"name",title:"名称"}),Object(o["createVNode"])(d,{field:"date1",title:"日期"}),Object(o["createVNode"])(i,{title:"Group2"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(d,{field:"sex",title:"格式化",formatter:e.formatterSex},null,8,["formatter"]),Object(o["createVNode"])(d,{field:"num",title:"数值-默认"})]})),_:1})]})),_:1}),Object(o["createVNode"])(i,{title:"Group1"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(d,{field:"num1",title:"数值-数值","cell-type":"number"}),Object(o["createVNode"])(d,{field:"num2",title:"数值-字符串","cell-type":"string"})]})),_:1})]})),_:1},8,["align","loading","import-config","export-config","footer-method","merge-cells","merge-footer-items","data"]),Object(o["createElementVNode"])("p",a,Object(o["toDisplayString"])(e.$t("app.body.button.showCode")),1),Object(o["createElementVNode"])("pre",null,[Object(o["createTextVNode"])("      "),Object(o["createVNode"])(b,{class:"xml"},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.demoCodes[0]),1)]})),_:1}),Object(o["createTextVNode"])("\n      "),Object(o["createVNode"])(b,{class:"typescript"},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.demoCodes[1]),1)]})),_:1}),Object(o["createTextVNode"])("\n    ")])])}n("d3b7"),n("159b"),n("a9e3"),n("14d9");var c=Object(o["defineComponent"])({setup:function(){var e=Object(o["reactive"])({loading:!1,align:null,tableData:[],tableImport:{types:["xlsx"]},tableExport:{type:"xlsx",types:["xlsx","csv","html","xml","txt"]},mergeCells:[],mergeFooterItems:[]}),t=Object(o["ref"])({}),n=Object(o["ref"])({}),r=function(e){var t=e.cellValue;return t?"1"===t?"男":"女":""},a=function(){var e=t.value;e.exportData({filename:"导出",sheetName:"Sheet1",type:"xlsx"})},l=function(e,t){var n=0;return e.forEach((function(e){n+=Number(e[t])})),n/e.length},c=function(e,t){var n=0;return e.forEach((function(e){n+=Number(e[t])})),n},m=function(e){var t=e.columns,n=e.data,o=[],r=[];return t.forEach((function(e,t){if(0===t)o.push("平均"),r.push("和值");else{var a="-",m="-";switch(e.property){case"rate":case"num":case"num1":case"num2":a="".concat(l(n,e.property)),m="".concat(c(n,e.property));break}o.push(a),r.push(m)}})),[o,r]};return Object(o["nextTick"])((function(){var e=t.value,o=n.value;e.connect(o)})),e.loading=!0,setTimeout((function(){e.tableData=[{name:"name1",role:"role1",rate:1,date1:"2021-06-02 10:05:20",sex:"0",num:"22",num1:"22",num2:"22",cardNo:"998"},{name:"name2",role:"role2",rate:1,date1:"2021-01-28 16:05:28",sex:"1",num:32,num1:32,num2:32,cardNo:1e4},{name:"name3",role:"role3",rate:6,date1:"2021-05-04 11:05:48",sex:"1",num:99999999999999,num1:99999999999999,num2:99999999999999,cardNo:"62221234219637458563"},{name:"name4",role:"role4",rate:3,date1:"2021-07-02 08:05:23",sex:"0",num:"999.99",num1:"999.99",num2:"999.99",cardNo:"62227412123789459631"},{name:"name5",role:"role5",rate:1,date1:"2021-02-15 05:05:20",sex:"1",num:-1,num1:-1,num2:-1,cardNo:"62221234214752459631"},{name:"name6",role:"role6",rate:4,date1:"2021-12-02 01:05:33",sex:"1",num:"10000",num1:"10000",num2:"10000",cardNo:"62221267214853659622"},{name:"name7",role:"role7",rate:1,date1:"2021-09-22 23:22:41",sex:"1",num:10000000000000.002,num1:10000000000000.002,num2:10000000000000.002,cardNo:"62221237123480359633"},{name:"name8",role:"role8",rate:5,date1:"2021-11-02 22:08:27",sex:"2",num:9998,num1:9998,num2:9998,cardNo:"62221234018523736237"},{name:"name9",role:"role9",rate:8,date1:"2021-01-02 14:05:52",sex:"1",num:7e4,num1:7e4,num2:7e4,cardNo:"62221230283686397412"}],e.mergeCells=[{row:1,col:1,rowspan:2,colspan:2},{row:4,col:3,rowspan:1,colspan:3}],e.mergeFooterItems=[{row:0,col:1,rowspan:2,colspan:2},{row:1,col:5,rowspan:1,colspan:3}],e.loading=!1}),100),{demo1:e,xTable:t,xToolbar:n,formatterSex:r,exportDataEvent:a,footerMethod:m,demoCodes:['\n        <vxe-toolbar ref="xToolbar" custom import export>\n          <template #buttons>\n            <vxe-button @click="demo1.tableData = []">清空数据</vxe-button>\n            <vxe-button @click="exportDataEvent">导出数据</vxe-button>\n            <vxe-button @click="demo1.align = \'left\'">居左</vxe-button>\n            <vxe-button @click="demo1.align = \'center\'">居中</vxe-button>\n            <vxe-button @click="demo1.align = \'right\'">居右</vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          border\n          show-footer\n          ref="xTable"\n          height="500"\n          :align="demo1.align"\n          :loading="demo1.loading"\n          :import-config="demo1.tableImport"\n          :export-config="demo1.tableExport"\n          :footer-method="footerMethod"\n          :merge-cells="demo1.mergeCells"\n          :merge-footer-items="demo1.mergeFooterItems"\n          :data="demo1.tableData">\n          <vxe-column type="checkbox" width="60"></vxe-column>\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-colgroup title="Group1">\n            <vxe-column field="name" title="名称"></vxe-column>\n            <vxe-column field="date1" title="日期"></vxe-column>\n            <vxe-colgroup title="Group2">\n              <vxe-column field="sex" title="格式化" :formatter="formatterSex"></vxe-column>\n              <vxe-column field="num" title="数值-默认"></vxe-column>\n            </vxe-colgroup>\n          </vxe-colgroup>\n          <vxe-colgroup title="Group1">\n            <vxe-column field="num1" title="数值-数值" cell-type="number"></vxe-column>\n            <vxe-column field="num2" title="数值-字符串" cell-type="string"></vxe-column>\n          </vxe-colgroup>\n        </vxe-table>\n        ',"\n        import { defineComponent, reactive, ref, nextTick } from 'vue'\n        import { VxeTableInstance, VxeTablePropTypes, VxeColumnPropTypes, VxeToolbarInstance } from 'vxe-table'\n\n        export default defineComponent({\n          setup () {\n            const demo1 = reactive({\n              loading: false,\n              align: null as VxeTablePropTypes.Align,\n              tableData: [] as any[],\n              tableImport: {\n                // 自定义类型\n                types: ['xlsx']\n              } as VxeTablePropTypes.ImportConfig,\n              tableExport: {\n                // 默认选中类型\n                type: 'xlsx',\n                // 自定义类型\n                types: ['xlsx', 'csv', 'html', 'xml', 'txt']\n              } as VxeTablePropTypes.ExpandConfig,\n              mergeCells: [] as VxeTablePropTypes.MergeCells,\n              mergeFooterItems: [] as VxeTablePropTypes.MergeFooterItems\n            })\n\n            const xTable = ref({} as VxeTableInstance)\n            const xToolbar = ref({} as VxeToolbarInstance)\n\n            const formatterSex: VxeColumnPropTypes.Formatter = ({ cellValue }) => {\n              return cellValue ? (cellValue === '1' ? '男' : '女') : ''\n            }\n\n            const exportDataEvent = () => {\n              const $table = xTable.value\n              $table.exportData({\n                filename: '导出',\n                sheetName: 'Sheet1',\n                type: 'xlsx'\n              })\n            }\n\n            const meanNum = (list: any[], field: string) => {\n              let count = 0\n              list.forEach(item => {\n                count += Number(item[field])\n              })\n              return count / list.length\n            }\n\n            const sumNum = (list: any[], field: string) => {\n              let count = 0\n              list.forEach(item => {\n                count += Number(item[field])\n              })\n              return count\n            }\n\n            const footerMethod: VxeTablePropTypes.FooterMethod = ({ columns, data }) => {\n              const means: string[] = []\n              const sums: string[] = []\n              columns.forEach((column, columnIndex) => {\n                if (columnIndex === 0) {\n                  means.push('平均')\n                  sums.push('和值')\n                } else {\n                  let meanCell = '-'\n                  let sumCell = '-'\n                  switch (column.property) {\n                    case 'rate':\n                    case 'num':\n                    case 'num1':\n                    case 'num2':\n                      meanCell = `${meanNum(data, column.property)}`\n                      sumCell = `${sumNum(data, column.property)}`\n                      break\n                  }\n                  means.push(meanCell)\n                  sums.push(sumCell)\n                }\n              })\n\n            nextTick(() => {\n              const $table = xTable.value\n              const $toolbar = xToolbar.value\n              $table.connect($toolbar)\n            })\n\n            demo1.loading = true\n            setTimeout(() => {\n              demo1.tableData = [\n                { name: 'name1', role: 'role1', rate: 1, date1: '2021-06-02 10:05:20', sex: '0', num: '22', num1: '22', num2: '22', cardNo: '998' },\n                { name: 'name2', role: 'role2', rate: 1, date1: '2021-01-28 16:05:28', sex: '1', num: 32, num1: 32, num2: 32, cardNo: 10000 },\n                { name: 'name3', role: 'role3', rate: 6, date1: '2021-05-04 11:05:48', sex: '1', num: 99999999999999, num1: 99999999999999, num2: 99999999999999, cardNo: '62221234219637458563' },\n                { name: 'name4', role: 'role4', rate: 3, date1: '2021-07-02 08:05:23', sex: '0', num: '999.99', num1: '999.99', num2: '999.99', cardNo: '62227412123789459631' },\n                { name: 'name5', role: 'role5', rate: 1, date1: '2021-02-15 05:05:20', sex: '1', num: -1, num1: -1, num2: -1, cardNo: '62221234214752459631' },\n                { name: 'name6', role: 'role6', rate: 4, date1: '2021-12-02 01:05:33', sex: '1', num: '10000', num1: '10000', num2: '10000', cardNo: '62221267214853659622' },\n                { name: 'name7', role: 'role7', rate: 1, date1: '2021-09-22 23:22:41', sex: '1', num: 10000000000000.001, num1: 10000000000000.001, num2: 10000000000000.001, cardNo: '62221237123480359633' },\n                { name: 'name8', role: 'role8', rate: 5, date1: '2021-11-02 22:08:27', sex: '2', num: 9998, num1: 9998, num2: 9998, cardNo: '62221234018523736237' },\n                { name: 'name9', role: 'role9', rate: 8, date1: '2021-01-02 14:05:52', sex: '1', num: 70000, num1: 70000, num2: 70000, cardNo: '62221230283686397412' }\n              ]\n              demo1.mergeCells = [\n                { row: 1, col: 1, rowspan: 2, colspan: 2 },\n                { row: 4, col: 3, rowspan: 1, colspan: 3 }\n              ]\n              demo1.mergeFooterItems = [\n                { row: 0, col: 1, rowspan: 2, colspan: 2 },\n                { row: 1, col: 5, rowspan: 1, colspan: 3 }\n              ]\n              demo1.loading = false\n            }, 100)\n\n            return {\n              demo1,\n              xTable,\n              xToolbar,\n              formatterSex,\n              exportDataEvent,\n              footerMethod\n            }\n          }\n        })\n        "]}}}),m=n("6b0d"),u=n.n(m);const s=u()(c,[["render",l]]);t["default"]=s}}]);