(function(e){function t(t){for(var o,a,c=t[0],s=t[1],l=t[2],u=0,f=[];u<c.length;u++)a=c[u],i[a]&&f.push(i[a][0]),i[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);d&&d(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,a=1;a<n.length;a++){var s=n[a];0!==i[s]&&(o=!1)}o&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},i={index:0},r=[];function a(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0b9432":"8982b0ac","chunk-2d0cc058":"9b6e2420","chunk-2d0e8f62":"51fb6767","chunk-2d210f9d":"93d0825b","chunk-2d222975":"024c2b59","chunk-2d22cc22":"aa00d599"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,o){n=i[e]=[t,o]});t.push(n[2]=o);var r,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=a(e),r=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=i[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+o+": "+r+")");a.type=o,a.request=r,n[1](a)}i[e]=void 0}};var l=setTimeout(function(){r({type:"timeout",target:s})},12e4);s.onerror=s.onload=r,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=l;r.push([1,"chunk-vendors","chunk-common"]),n()})({1:function(e,t,n){e.exports=n("44eb")},"449e":function(e,t,n){"use strict";var o=n("78fd"),i=n.n(o);i.a},"44eb":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),i=(n("1cae"),n("4e29")),r=n("35ae"),a=n("0f20"),c=n("4eb5"),s=n.n(c),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("AppLayout",[n("Tenon")],1)},u=[],d=n("d386"),f=n("e3eb"),p={name:"App",components:{AppLayout:d["a"],Tenon:f["default"]}},h=p,m=n("2877"),v=Object(m["a"])(h,l,u,!1,null,null,null),b=v.exports;o["default"].use(s.a),o["default"].use(a["a"]),o["default"].config.productionTip=!1,o["default"].prototype.$uuid=i["a"],Object(r["a"])(o["default"],"projects").then(function(){new o["default"]({el:"#app",render:function(e){return e(b)}})})},"78fd":function(e,t,n){},"7a5a":function(e,t,n){},"7d5f":function(e,t,n){"use strict";var o=n("83d4"),i=n.n(o);i.a},"83d4":function(e,t,n){},"9d64":function(e,t,n){e.exports=n.p+"img/logo.6811d4b7.png"},"9df5":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Dialog",{staticClass:"project-add",attrs:{title:"新建项目",width:"500px","append-to-body":!0,visible:e.currentVisiable},on:{"update:visible":function(t){e.currentVisiable=t}}},[e._v("\n    项目名称：\n    "),n("InputText",{model:{value:e.project.name,callback:function(t){e.$set(e.project,"name",t)},expression:"project.name"}}),e._v("\n    项目分辨率：\n    "),n("div",{staticClass:"f f-ai-c"},[n("InputText",{model:{value:e.project.resolution.width,callback:function(t){e.$set(e.project.resolution,"width",t)},expression:"project.resolution.width"}}),e._v(" X\n        "),n("InputText",{model:{value:e.project.resolution.height,callback:function(t){e.$set(e.project.resolution,"height",t)},expression:"project.resolution.height"}})],1),e.edit?e._e():n("ul",{staticClass:"project-template f"},e._l(e.template,function(t,o){return n("li",{key:o,class:{active:o===e.templateId},on:{click:function(t){e.templateId=o}}},[e._v(e._s(o))])}),0),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("Button",{on:{click:function(t){e.currentVisiable=!1}}},[e._v("取消")]),n("Button",{attrs:{type:"primary"},on:{click:e.confirm}},[e._v("确定")])],1)],1)},i=[],r=n("cebc"),a={props:{visiable:Boolean,edit:Boolean,project:Object},data:function(){return{templateId:"2",template:{1:{name:"NestedLayoutContainer",properties:{name:"NestedLayoutContainer",css:{minHeight:"100%"},style:""},children:[],layout:"nestedLayout"},2:{id:"6e04a6dc-47ee-4e2e-952e-1586ecf5fa51",name:"NestedLayoutContainer",properties:{name:"NestedLayoutContainer",css:{minHeight:"100%",padding:""},style:""},children:[{id:"2e32f1df-d33c-4a64-af9a-a0dd9b0ed31b",name:"NestedLayoutContainer",properties:{name:"Start Project",css:{padding:"8px 15px",minHeight:"",height:"50px",lineHeight:"",display:"flex",alignItems:"center"},style:"",title:"Tenon"},children:[{id:"87d4b52c-3efb-46d9-8fd7-b85389d077b1",name:"Text",properties:{name:"Text",css:{fontSize:"2rem",width:"",display:"inline"},style:"",label:"h1",text:"Start Project"},layout:"nestedLayout"}],layout:"nestedLayout"},{id:"f92f1c00-cfb4-4bc3-9783-ea752fc97e9c",name:"NestedLayoutContainer",properties:{name:"所见即所得",css:{padding:"10rem",minHeight:"150px",background:"url(http://www.ypppt.com/uploads/allimg/181014/1-1Q014121J1-50.jpg) no-repeat center center",backgroundSize:"cover"},style:"",title:"Tenon"},children:[{id:"c25264e3-634a-4cbf-8ae0-98aa6881d285",name:"NestedLayoutContainer",properties:{name:"NestedLayoutContainer",css:{padding:"5rem",minHeight:"150px",textAlign:"center",color:"#FFFFFF"},style:"",title:"Tenon"},children:[{id:"8a31f19c-2649-4333-bfbd-ba4947191a34",name:"Text",properties:{name:"Text",css:{fontSize:"3rem",fontWeight:"300",textAlign:"center",color:"#FFFFFF"},style:"",label:"h2",text:"全可视化操作，所见即所得"},layout:"nestedLayout"},{id:"124bd95d-f61d-4ae0-b5dd-ee4fdec58fd4",name:"Text",properties:{name:"Text",css:{fontSize:"5rem",color:"#FFFFFF",textAlign:"center",fontWeight:"300"},style:"",label:"h1",text:"what you see is what you get"},layout:"nestedLayout"},{id:"6c27b5f2-4075-431f-ba9f-69da9bd17621",name:"Text",properties:{name:"Text",css:{fontSize:"3rem",fontWeight:"300"},style:"",label:"h2",text:"内容可配置，页面结构可配置，逻辑可配置"},layout:"nestedLayout"}],layout:"nestedLayout"}],layout:"nestedLayout"}],layout:"nestedLayout"}}}},computed:{currentVisiable:{get:function(){return this.visiable},set:function(e){this.$emit("update:visiable",e)}}},methods:{confirm:function(){var e=this.project;if(!this.edit){var t=this.$uuid();e=Object(r["a"])({id:t},this.project,{components:Object(r["a"])({id:t},this.formatComponents(this.template[this.templateId]))})}this.$emit("confirm",e)},formatComponents:function(e){var t=this,n=function e(n){return n.map(function(n){return n.children&&(n.children=e(n.children)),console.log(n),Object(r["a"])({},n,{id:t.$uuid()})})},o=n(e.children);return Object(r["a"])({},e,{children:o})}}},c=a,s=(n("a8ae"),n("2877")),l=Object(s["a"])(c,o,i,!1,null,null,null);t["default"]=l.exports},a8ae:function(e,t,n){"use strict";var o=n("7a5a"),i=n.n(o);i.a},e241:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"main-layout f f-fd-c"},[e._t("default")],2)},i=[],r={name:"MainLayout"},a=r,c=(n("7d5f"),n("2877")),s=Object(c["a"])(a,o,i,!1,null,null,null);t["a"]=s.exports},e3eb:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("MainLayout",{staticClass:"tenon"},[o("header",{staticClass:"tenon-header f-fs-0 f f-jc-sb"},[o("h1",[o("img",{attrs:{src:n("9d64"),alt:"logo"}}),e._v("\n            Tenon\n        ")]),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/wuyaoxing/tenon",target:"blank",title:"github"}},[o("i",{staticClass:"icon-github"})])])])]),o("div",{staticClass:"tenon-projects f-f-1 f f-fw-w f-ac-fs"},[e._l(e.projects,function(t){return o("div",{key:t.id,staticClass:"tenon-project-card f f-fd-c f-jc-sb"},[o("div",{staticClass:"tenon-project-title f f-ai-b f-jc-sb"},[o("h2",{staticClass:"ellipsis-line-clamp-3"},[e._v("\n                    "+e._s(t.name)+"\n                ")]),o("Dropdown",{attrs:{trigger:"click",size:"medium"},on:{command:function(n){return e.moreEvent(n,t.id)}}},[o("i",{staticClass:"el-icon-more",attrs:{title:"More"}}),o("DropdownMenu",{staticClass:"tenon-project-more",attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.moreList,function(t){return o("DropdownItem",{key:t.value,attrs:{command:t.value}},[o("i",{class:"icon-"+t.value,attrs:{title:t.text}}),e._v("\n                            "+e._s(e.$i18n("projects.action."+t.value))+"\n                        ")])}),1)],1)],1),o("div",{staticClass:"tenon-project-action f f-jc-sb"},[o("a",{attrs:{href:e.getProjectLink(t.id).editor}},[e._v("Designer")]),o("a",{attrs:{href:e.getProjectLink(t.id).viewer}},[e._v("Viewer")])])])}),o("div",{staticClass:"tenon-project-add",on:{click:e.addEvent}},[o("i",{staticClass:"el-icon-plus"})])],2),o("ProjectForm",{attrs:{visiable:e.visiable,edit:e.edit,project:e.project},on:{"update:visiable":function(t){e.visiable=t},confirm:e.confirm}})],1)},i=[],r=(n("7f7f"),n("a481"),n("7514"),n("20d6"),n("e241")),a=n("9df5"),c={name:"tenon",components:{MainLayout:r["a"],ProjectForm:a["default"]},data:function(){return{visiable:!1,edit:!1,project:{name:"",resolution:{width:1024,height:1080}},projects:[],moreList:[{text:"Share",value:"share"},{text:"Edit",value:"edit"},{text:"Duplicate",value:"duplicate"},{text:"Remove",value:"delete"}]}},methods:{confirm:function(e){this.edit?this.updateProject(e):this.addProject(e)},addProject:function(e){this.projects.push(e),this.saveProjects(),this.visiable=!1,this.reset()},updateProject:function(e){var t=this.projects.findIndex(function(t){return t.id===e.id});this.projects.splice(t,1,e),this.saveProjects(),this.visiable=!1,this.edit=!1,this.reset()},reset:function(){this.project={name:"",resolution:{width:1024,height:1080}}},addEvent:function(){this.reset(),this.visiable=!0},editProject:function(e){var t=this.projects.find(function(t){return t.id===e});this.project=JSON.parse(JSON.stringify(t)),this.edit=!0,this.visiable=!0},removeProject:function(e){var t=this.projects.findIndex(function(t){return t.id===e});this.projects.splice(t,1),this.saveProjects()},shareProject:function(e){var t=this,n=this.getProjectLink(e).viewer,o="".concat(window.location.origin).concat(window.location.pathname).concat(n).replace(/(\/)\1+/g,"/");this.$copyText(o).then(function(e){console.log(e),t.$Message.success("clipboard")},function(e){t.$Message.success("unclipboard"),console.log(e)})},duplicateProject:function(e){var t=this.projects.find(function(t){return t.id===e}),n=JSON.parse(JSON.stringify(t));n.id=this.$uuid(),n.name="Duplicate ".concat(n.name),this.projects.push(n),this.saveProjects()},moreEvent:function(e,t){switch(e){case"share":this.shareProject(t);break;case"edit":this.editProject(t);break;case"duplicate":this.duplicateProject(t);break;case"delete":this.removeProject(t);break;default:break}},saveProjects:function(){localStorage.setItem("Tenon-projects",JSON.stringify(this.projects)),console.log("Tenon save projects: ",localStorage.getItem("Tenon-projects"))},fetchProjects:function(){var e=localStorage.getItem("Tenon-projects");this.projects=e?JSON.parse(e):[]},getProjectLink:function(e){return{editor:"/tenon/designer#/projects/".concat(e),viewer:"/tenon/viewer#/projects/".concat(e)}}},created:function(){this.fetchProjects()}},s=c,l=(n("449e"),n("2877")),u=Object(l["a"])(s,o,i,!1,null,null,null);t["default"]=u.exports}});