(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d230819"],{ed26:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Card",{attrs:{shadow:""}},[a("Tabs",{attrs:{value:"checkstand"}},[a("TabPane",{attrs:{label:"收银台样式",name:"checkstand"}},[a("Form",{ref:"myForm",attrs:{model:t.formItem,"label-position":"left","label-width":220}},[a("FormItem",{attrs:{label:"是否显示提示复制金额弹框",prop:"copy_total"}},[a("i-switch",{attrs:{size:"large","true-value":1,"false-value":0},model:{value:t.formItem.userData.copy_total,callback:function(e){t.$set(t.formItem.userData,"copy_total",e)},expression:"formItem.userData.copy_total"}},[a("span",{attrs:{slot:"open"},slot:"open"},[t._v("开启")]),a("span",{attrs:{slot:"close"},slot:"close"},[t._v("关闭")])])],1),a("FormItem",{attrs:{label:"是否进行语音提示",prop:"video"}},[a("i-switch",{attrs:{size:"large","true-value":1,"false-value":0},model:{value:t.formItem.userData.video,callback:function(e){t.$set(t.formItem.userData,"video",e)},expression:"formItem.userData.video"}},[a("span",{attrs:{slot:"open"},slot:"open"},[t._v("开启")]),a("span",{attrs:{slot:"close"},slot:"close"},[t._v("关闭")])])],1),a("FormItem",{attrs:{label:"金额过滤保留一位小数",prop:"video"}},[a("Tooltip",{attrs:{placement:"right","max-width":"270"}},[a("i-switch",{attrs:{size:"large","true-value":0,"false-value":1},model:{value:t.formItem.num3,callback:function(e){t.$set(t.formItem,"num3",e)},expression:"formItem.num3"}},[a("span",{attrs:{slot:"open"},slot:"open"},[t._v("开启")]),a("span",{attrs:{slot:"close"},slot:"close"},[t._v("关闭")])]),a("div",{attrs:{slot:"content"},slot:"content"},[a("p",[t._v("【建议开启】开启有助于减少漏单,比如下单金额为7.89,会自动过滤为7.80")])])],1)],1),a("FormItem",{attrs:{label:"是否开启防封",prop:"fangfeng"}},[a("Tooltip",{attrs:{placement:"right","max-width":"270"}},[a("i-switch",{attrs:{size:"large","true-value":1,"false-value":0},model:{value:t.formItem.userData.fangfeng,callback:function(e){t.$set(t.formItem.userData,"fangfeng",e)},expression:"formItem.userData.fangfeng"}},[a("span",{attrs:{slot:"open"},slot:"open"},[t._v("开启")]),a("span",{attrs:{slot:"close"},slot:"close"},[t._v("关闭")])]),a("div",{attrs:{slot:"content"},slot:"content"},[a("p",[t._v("【建议开启】开启后会增加一定的费率跟费用,具体收费请咨询客服")])])],1)],1),a("FormItem",{attrs:{label:"微信内是否跳转支付宝",prop:"toalipay"}},[a("Tooltip",{attrs:{placement:"right","max-width":"270"}},[a("i-switch",{attrs:{size:"large","true-value":1,"false-value":0},model:{value:t.formItem.userData.toalipay,callback:function(e){t.$set(t.formItem.userData,"toalipay",e)},expression:"formItem.userData.toalipay"}},[a("span",{attrs:{slot:"open"},slot:"open"},[t._v("开启")]),a("span",{attrs:{slot:"close"},slot:"close"},[t._v("关闭")])]),a("div",{attrs:{slot:"content"},slot:"content"},[a("img",{attrs:{width:"200",src:"https://apiupload.oss-cn-beijing.aliyuncs.com/other/20220112/1405beb877931fd5b19f48d75b78e043.jpg"}})])],1)],1),a("FormItem",{attrs:{label:"页面样式",prop:"style"}},[a("RadioGroup",{model:{value:t.formItem.userData.style,callback:function(e){t.$set(t.formItem.userData,"style",e)},expression:"formItem.userData.style"}},[a("Poptip",{attrs:{trigger:"hover",content:"content"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("img",{attrs:{width:"200",src:"https://apiupload.oss-cn-beijing.aliyuncs.com/assets/q1.png"}})]),a("Radio",{attrs:{label:"",border:""}},[a("span",[t._v("本地样式")])])],1),a("Poptip",{attrs:{trigger:"hover",content:"content"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("img",{attrs:{width:"200",src:"https://apiupload.oss-cn-beijing.aliyuncs.com/assets/q2.png"}})]),a("Radio",{attrs:{label:"style1",border:""}},[a("span",[t._v("云端样式(绿色)")])])],1)],1)],1),a("FormItem",{attrs:{label:"收款码颜色",prop:"color"}},[a("ColorPicker",{on:{"on-change":t.colorchange},model:{value:t.formItem.userData.color,callback:function(e){t.$set(t.formItem.userData,"color",e)},expression:"formItem.userData.color"}})],1),a("FormItem",{attrs:{label:"收款页面底部文字提醒"}},[a("Tooltip",{attrs:{placement:"right","max-width":"500"}},[a("Input",{staticStyle:{width:"400px"},attrs:{type:"textarea",autosize:{minRows:4,maxRows:6},placeholder:""},model:{value:t.formItem.userData.tip,callback:function(e){t.$set(t.formItem.userData,"tip",e)},expression:"formItem.userData.tip"}}),a("div",{attrs:{slot:"content"},slot:"content"},[a("img",{attrs:{width:"200",src:"https://apiupload.oss-cn-beijing.aliyuncs.com/other/20220112/6a4f9e22f3f9854dfffb2f75496624e8.jpg"}})])],1)],1),a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("提交")])],1)],1)],1),a("TabPane",{attrs:{label:"邮件通知设置",name:"emai_notice"}},[a("Form",{ref:"myForm",attrs:{model:t.formItem,"label-position":"left"}},[a("FormItem",{attrs:{label:"邮件通知设置",prop:"emai_notice"}},[a("CheckboxGroup",{model:{value:t.formItem.userData.emai_notice,callback:function(e){t.$set(t.formItem.userData,"emai_notice",e)},expression:"formItem.userData.emai_notice"}},[a("Checkbox",{attrs:{label:"qr_exception",border:""}},[t._v("码异常通知")]),a("Checkbox",{attrs:{label:"channel_out",border:""}},[t._v("通道下线通知")]),a("Checkbox",{attrs:{label:"withdraw",border:""}},[t._v("提现成功通知")]),a("Checkbox",{attrs:{label:"refund",border:""}},[t._v("订单退款通知")]),a("Checkbox",{attrs:{label:"order_part",border:""}},[t._v("订单部分完成通知")]),a("Checkbox",{attrs:{label:"login",border:""}},[t._v("登录账号通知")])],1)],1),a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("提交")])],1)],1)],1)],1)],1)],1)},r=[],s=a("c24f"),n=a("7736"),l={name:"",data(){return{userInfo:{},formItem:{userData:{color:"",channelname:[]}}}},created(){let t=this,e=JSON.parse(sessionStorage.getItem("userData"));t.userInfo=e,t.formItem.email=t.userInfo.email,t.formItem.mobile=t.userInfo.mobile,t.formItem.num3=t.userInfo.num3,t.formItem.userData.num1=t.userInfo.userData.num1,t.formItem.userData.num2=t.userInfo.userData.num2,t.formItem.userData.color=t.userInfo.userData.color,t.formItem.userData.video=t.userInfo.userData.video,t.formItem.userData.copy_total=t.userInfo.userData.copy_total,t.formItem.userData.tip=t.userInfo.userData.tip,t.formItem.userData.style=t.userInfo.userData.style,t.formItem.userData.fangfeng=t.userInfo.userData.fangfeng,t.formItem.userData.toalipay=t.userInfo.userData.toalipay,t.formItem.userData.channelname=t.userInfo.userData.channelname,t.formItem.userData.hangpassword=t.userInfo.userData.hangpassword,t.formItem.userData.emai_notice=t.userInfo.userData.emai_notice},methods:{...Object(n["b"])(["getUserInfo"]),handlegetUserInfo(){let t=this;this.getUserInfo().then(e=>{t.userInfo=e,t.formItem.email=t.userInfo.email,t.formItem.mobile=t.userInfo.mobile,t.formItem.userData.num1=t.userInfo.userData.num1,t.formItem.userData.num2=t.userInfo.userData.num2,t.formItem.num3=t.userInfo.num3,t.formItem.userData.color=t.userInfo.userData.color,t.formItem.userData.video=t.userInfo.userData.video,t.formItem.userData.copy_total=t.userInfo.userData.copy_total,t.formItem.userData.tip=t.userInfo.userData.tip,t.formItem.userData.style=t.userInfo.userData.style,t.formItem.userData.fangfeng=t.userInfo.userData.fangfeng,t.formItem.userData.toalipay=t.userInfo.userData.toalipay,t.formItem.userData.channelname=t.userInfo.userData.channelname,t.formItem.userData.hangpassword=t.userInfo.userData.hangpassword,t.formItem.userData.emai_notice=t.userInfo.userData.emai_notice})},colorchange(t){console.log(t),this.formItem.userData.color=t},inputChange(){},handleSubmit(){console.log("@");let t=this;this.$refs["myForm"].validate(e=>{Object(s["r"])(t.formItem).then(e=>{t.$Message.success(e.data.msg),t.handlegetUserInfo()}).catch(()=>{})})}}},m=l,u=a("cba8"),i=Object(u["a"])(m,o,r,!1,null,null,null);e["default"]=i.exports}}]);