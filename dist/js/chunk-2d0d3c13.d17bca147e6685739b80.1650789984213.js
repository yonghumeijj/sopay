(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d3c13"],{"5db0":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("Card",{attrs:{shadow:""}},[t("Form",{ref:"myForm",attrs:{model:e.formItem,"label-position":"left","label-width":220}},[t("Divider",{attrs:{orientation:"left"}},[e._v("挂机通道设置")]),t("FormItem",{attrs:{label:"挂机回调信息方式",prop:"copy_total"}},[t("CheckboxGroup",{model:{value:e.formItem.userData.channelname,callback:function(a){e.$set(e.formItem.userData,"channelname",a)},expression:"formItem.userData.channelname"}},[t("Checkbox",{attrs:{label:"sms",border:""}},[e._v("短信")]),t("Checkbox",{attrs:{label:"alipay",border:""}},[e._v("支付宝")]),t("Checkbox",{attrs:{label:"wechat",border:""}},[e._v("微信")]),t("Checkbox",{attrs:{label:"qq",border:""}},[e._v("qq")]),t("Checkbox",{attrs:{label:"bankCard",border:""}},[e._v("银行卡")])],1)],1),t("FormItem",{attrs:{label:"挂机软件密码",prop:"hangpassword"}},[t("Tooltip",{attrs:{placement:"right","max-width":"270"}},[t("Input",{attrs:{placeholder:"安卓挂机软件密码"},model:{value:e.formItem.userData.hangpassword,callback:function(a){e.$set(e.formItem.userData,"hangpassword",a)},expression:"formItem.userData.hangpassword"}}),t("div",{attrs:{slot:"content"},slot:"content"},[t("p",[e._v("不设置或者为空,则采用账户的密码")])])],1)],1),t("FormItem",[t("Button",{attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v("提交")])],1)],1)],1)],1)},o=[],s=t("c24f"),n=t("7736"),m={name:"",data(){return{userInfo:{},formItem:{userData:{color:"",channelname:[]}}}},created(){let e=this,a=JSON.parse(sessionStorage.getItem("userData"));e.userInfo=a,e.formItem.email=e.userInfo.email,e.formItem.mobile=e.userInfo.mobile,e.formItem.num3=e.userInfo.num3,e.formItem.userData.num1=e.userInfo.userData.num1,e.formItem.userData.num2=e.userInfo.userData.num2,e.formItem.userData.color=e.userInfo.userData.color,e.formItem.userData.video=e.userInfo.userData.video,e.formItem.userData.copy_total=e.userInfo.userData.copy_total,e.formItem.userData.tip=e.userInfo.userData.tip,e.formItem.userData.style=e.userInfo.userData.style,e.formItem.userData.fangfeng=e.userInfo.userData.fangfeng,e.formItem.userData.toalipay=e.userInfo.userData.toalipay,e.formItem.userData.channelname=e.userInfo.userData.channelname,e.formItem.userData.hangpassword=e.userInfo.userData.hangpassword},methods:{...Object(n["b"])(["getUserInfo"]),handlegetUserInfo(){let e=this;this.getUserInfo().then(a=>{e.userInfo=a,e.formItem.email=e.userInfo.email,e.formItem.mobile=e.userInfo.mobile,e.formItem.userData.num1=e.userInfo.userData.num1,e.formItem.userData.num2=e.userInfo.userData.num2,e.formItem.num3=e.userInfo.num3,e.formItem.userData.color=e.userInfo.userData.color,e.formItem.userData.video=e.userInfo.userData.video,e.formItem.userData.copy_total=e.userInfo.userData.copy_total,e.formItem.userData.tip=e.userInfo.userData.tip,e.formItem.userData.style=e.userInfo.userData.style,e.formItem.userData.fangfeng=e.userInfo.userData.fangfeng,e.formItem.userData.toalipay=e.userInfo.userData.toalipay,e.formItem.userData.channelname=e.userInfo.userData.channelname,e.formItem.userData.hangpassword=e.userInfo.userData.hangpassword})},colorchange(e){console.log(e),this.formItem.userData.color=e},inputChange(){},handleSubmit(){let e=this;this.$refs["myForm"].validate(a=>{Object(s["r"])(e.formItem).then(a=>{e.$Message.success(a.data.msg),e.handlegetUserInfo()}).catch(()=>{})})}}},u=m,f=t("cba8"),l=Object(f["a"])(u,r,o,!1,null,null,null);a["default"]=l.exports}}]);