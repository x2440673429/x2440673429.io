(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6047d2cd"],{3351:function(e,t,i){"use strict";var a=i("f422"),n=i.n(a);n.a},"7f7f":function(e,t,i){var a=i("86cc").f,n=Function.prototype,o=/^\s*function ([^ (]*)/,l="name";l in n||i("9e1e")&&a(n,l,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},c9c0:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"topsearchbox"},[i("p",[e._v("渠道名称")]),i("el-input",{staticClass:"searchimput",attrs:{placeholder:"请输入渠道名称","suffix-icon":"el-icon-search",size:"mini",clearable:""},model:{value:e.CorporateName,callback:function(t){e.CorporateName=t},expression:"CorporateName"}}),i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.searchCorporateName}},[e._v("查询")]),i("el-button",{attrs:{type:"info",size:"mini"},on:{click:function(t){e.CorporateName=""}}},[e._v("清除")])],1),i("el-button",{staticClass:"addbd",attrs:{type:"primary",plain:"",size:"mini"},on:{click:function(t){return e.looinfo("add")}}},[e._v("新建渠道")]),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableloading,expression:"tableloading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[i("el-table-column",{attrs:{label:"序号",type:"index",w:""}}),i("el-table-column",{attrs:{prop:"channel_id",label:"渠道ID"}}),i("el-table-column",{attrs:{prop:"name",label:"渠道名称"}}),i("el-table-column",{attrs:{prop:"area.full_name",label:"所属地区"}}),i("el-table-column",{attrs:{prop:"parent.org_name",label:"所属机构"}}),i("el-table-column",{attrs:{prop:"admin.user.username",label:"管理员账号"}}),i("el-table-column",{attrs:{prop:"admin.user.nickname",label:"管理员名称"}}),i("el-table-column",{attrs:{prop:"admin.mobile",label:"管理员手机"}}),i("el-table-column",{attrs:{prop:"start_date",label:"生效日期"}}),i("el-table-column",{attrs:{prop:"end_date",label:"失效日期"}}),i("el-table-column",{attrs:{label:"合同状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.expire?"过期":"有效"))])]}}])}),i("el-table-column",{attrs:{width:"100",label:"操作"}},[[i("el-button",{attrs:{type:"primary",plain:"",size:"mini"},on:{click:function(t){return e.looinfo("info")}}},[e._v("详情")]),i("el-button",{attrs:{type:"success",plain:"",size:"mini"},on:{click:function(t){return e.looinfo("edit")}}},[e._v("编辑")])]],2)],1),i("el-pagination",{staticClass:"page",attrs:{layout:"prev, pager, next",total:15}}),i("el-dialog",{attrs:{title:e.dialogtitle,"append-to-body":"",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("el-collapse",{model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[i("el-collapse-item",{attrs:{title:"基本信息",name:"1"}},[i("el-form",{attrs:{"label-width":"80px"}},[i("el-form-item",{attrs:{label:"公司名称"}},[i("el-input",{attrs:{size:"mini",placeholder:"请输入公司名称"},model:{value:e.componeyinfo.name,callback:function(t){e.$set(e.componeyinfo,"name",t)},expression:"componeyinfo.name"}})],1),i("el-form-item",{attrs:{label:"公司地址"}},[i("el-select",{attrs:{placeholder:"请选择省",size:"mini"},on:{change:e.diqu},model:{value:e.componeyinfo.shentitle,callback:function(t){e.$set(e.componeyinfo,"shentitle",t)},expression:"componeyinfo.shentitle"}},e._l(e.componeyinfo.shen,function(e){return i("el-option",{key:e.adcode,attrs:{label:e.name,value:e.adcode}})}),1),i("el-select",{attrs:{placeholder:"请选择市",size:"mini"},on:{change:e.quji},model:{value:e.componeyinfo.shititle,callback:function(t){e.$set(e.componeyinfo,"shititle",t)},expression:"componeyinfo.shititle"}},e._l(e.componeyinfo.shi,function(e){return i("el-option",{key:e.adcode,attrs:{label:e.name,value:e.adcode}})}),1),i("el-select",{attrs:{placeholder:"请选择地区",size:"mini"},model:{value:e.componeyinfo.qutitle,callback:function(t){e.$set(e.componeyinfo,"qutitle",t)},expression:"componeyinfo.qutitle"}},e._l(e.componeyinfo.qu,function(e){return i("el-option",{key:e.adcode,attrs:{label:e.name,value:e.adcode}})}),1)],1),i("el-form-item",{attrs:{label:"所属机构"}},[i("el-input",{attrs:{size:"mini",placeholder:"恒驰金服",disabled:!0}})],1),i("el-form-item",{attrs:{label:"起止日期"}},[i("div",{staticClass:"block"},[i("el-date-picker",{staticClass:"data",attrs:{size:"mini",type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}})],1)])],1)],1),i("el-collapse-item",{attrs:{title:"公司账号",name:"2"}},[i("el-form",{attrs:{"label-width":"80px"}},[i("el-form-item",{attrs:{label:"账号1"}}),i("el-form-item",{attrs:{label:"对公账号"}},[i("el-input",{staticClass:"inputsize",attrs:{size:"mini",placeholder:"请输入公司对公账户"},model:{value:e.componeyinfo.name,callback:function(t){e.$set(e.componeyinfo,"name",t)},expression:"componeyinfo.name"}})],1),i("el-form-item",{attrs:{label:"开户银行"}},[i("el-select",{staticClass:"inputsize",attrs:{placeholder:"请选择开户银行",size:"mini"},model:{value:e.componeyinfo.shititle,callback:function(t){e.$set(e.componeyinfo,"shititle",t)},expression:"componeyinfo.shititle"}},e._l(e.bankslist,function(e,t){return i("el-option",{key:t,attrs:{label:e.name,value:t}})}),1),i("el-button",{staticClass:"delt",attrs:{type:"danger",size:"mini"}},[e._v("删除")])],1),i("el-form-item",{attrs:{label:"开户名称"}},[i("el-input",{staticClass:"inputsize",attrs:{size:"mini",placeholder:"请输入公司对公账户开户名称"},model:{value:e.componeyinfo.name,callback:function(t){e.$set(e.componeyinfo,"name",t)},expression:"componeyinfo.name"}})],1)],1),i("el-button",{staticClass:"newjia",attrs:{type:"primary",size:"mini"}},[e._v("新增账户")]),i("p",[e._v("最大支持录入五个账户")])],1),i("el-collapse-item",{attrs:{title:"照片管理",name:"3"}},[i("el-form",{attrs:{"label-width":"80px"}},[i("el-form-item",{attrs:{label:"合同照片"}},[i("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/","list-type":"picture-card","on-preview":e.handlePictureCardPreview,"on-remove":e.handleRemove}},[i("i",{staticClass:"el-icon-plus"})]),i("a",[e._v("以上传照片 0 张")])],1)],1),i("el-form",{attrs:{"label-width":"80px"}},[i("el-form-item",{attrs:{label:"营业执照"}},[i("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/","list-type":"picture-card","on-preview":e.handlePictureCardPreview,"on-remove":e.handleRemove}},[i("i",{staticClass:"el-icon-plus"})]),i("a",[e._v("以上传照片 0 张")])],1)],1)],1)],1),i("div",{staticStyle:{"text-align":"right"}},[i("el-button",{staticClass:"not",attrs:{type:"primary",size:"mini"},on:{click:e.Establish}},[e._v("创建")]),i("el-button",{staticClass:"not",attrs:{size:"mini"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取消")])],1)],1)],1)},n=[],o=(i("7f7f"),{data:function(){return{CorporateName:"",tableData:[],dialogtitle:"",dialogFormVisible:!1,activeNames:["1","2","3"],tableloading:!1,componeyinfo:{name:"",shentitle:"",shen:[],shititle:"",shi:[],qutitle:"",qu:[]},time:"",dialogImageUrl:"",dialogVisible:!1,bankslist:[]}},created:function(){this.getchannelmanagement(),this.getarea(),this.getbankslist()},methods:{getchannelmanagement:function(){var e=this;this.tableloading=!0;var t="limit=15&offset=0";this.api.getchannelmanagement(t,function(t){console.log(999,t),e.tableData=t.results,e.tableloading=!1})},getarea:function(){var e=this,t="keywords=中国&subdistrict=3&key=459d5c37e80fb05d1b7474a25e4e664a";this.api.mapfun(t,function(t){console.log(1111,t),e.componeyinfo.shen=t.districts[0].districts})},getbankslist:function(){var e=this;this.api.getbankslist("",function(t){console.log(999,t),e.bankslist=t.results})},searchCorporateName:function(){var e={companyName:this.CorporateName};this.getchannelmanagement(e)},looinfo:function(e){this.dialogtitle="add"==e?"创建渠道":"info"==e?"渠道详情":"编辑渠道",this.dialogFormVisible=!0},Establish:function(){""==this.componeyinfo.name?this.$alert("公司名称不能为空","",{confirmButtonText:"确定"}):""==this.componeyinfo.shentitle?this.$alert("请选择公司地址","",{confirmButtonText:"确定"}):""==this.componeyinfo.shititle?this.$alert("请将公司地址选择完整","",{confirmButtonText:"确定"}):this.CreatingBaodai()},handleRemove:function(e,t){console.log(e,t)},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},Newlybuild:function(){this.componylist.length>=5||this.componylist.push({account:"",shititle:"",bankname:""})},delt:function(){var e=this;this.$confirm("确定要删除账户码？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.componylist.splice(e.componylist,1)})},diqu:function(){var e=this;this.componeyinfo.shen.map(function(t,i){var a=e.componeyinfo.shentitle;t.adcode==a&&(e.componeyinfo.shi=t.districts)})},quji:function(){var e=this;this.componeyinfo.shi.map(function(t,i){var a=e.componeyinfo.shititle;t.adcode==a&&(e.componeyinfo.qu=t.districts)})}}}),l=o,s=(i("3351"),i("2877")),c=Object(s["a"])(l,a,n,!1,null,"5f91f1dc",null);t["default"]=c.exports},f422:function(e,t,i){}}]);