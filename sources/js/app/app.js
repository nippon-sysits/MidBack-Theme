"use strict";!function(a,b){function c(){var a={},b=this;b.on=function(b,c,d){a[b]||(a[b]=[]),a[b].push({f:c,c:d})},b.off=function(b,c){for(var d=a[b]||[],e=d.length=c?d.length:0;e-- >0;)c===d[e].f&&d.splice(e,1)},b.trigger=function(){var b,c=Array.apply([],arguments),d=a[c.shift()]||[],e=d.length;for(b=0;b<e;b++)d[b].f.apply(d[b].c,c)},b.bind=b.on,b.unbind=b.off,b.emit=b.trigger}var d="undefined"==typeof applicationCache?void 0:applicationCache;"function"==typeof define&&define.amd?define([],function(){return a.cache=b(d,c),a.cache}):"object"==typeof exports?module.exports=b(d,c):a.cache=b(d,c),a.cache.start()}(this,function(a,b){function c(){try{x=!localStorage.getItem(z),localStorage.setItem(z,"1")}catch(a){}return o.isSupported()?a.status!==a.UNCACHED?(d(),r=!1,q=!0,void A.forEach(function(a){a()})):void 0:void(o.update=y)}function d(){e("updateready",g),e("error",i),e("obsolete",j),e("noupdate",h),e("cached",h),e("progress",h),e("downloading",h),addEventListener("online",o.update,!1),addEventListener("offline",o.update,!1)}function e(b,c){a.addEventListener(b,c,!1)}function f(a,b){u||o.trigger(a,b)}function g(){return a.status!==a.UPDATEREADY?(B=!0,void k()):(u||(u=!0,o.trigger("updateready")),void a.swapCache())}function h(a){var b="";x&&(b="init:","cached"===a.type&&(x=!1)),B?(f("updateready"),B=!1):f(b+a.type,a),w&&(w=!1,o.start(),f("online"))}function i(b){f("error",b),w||(w=!0,a.status!==a.UNCACHED&&(o.start(),f("offline")))}function j(){f("obsolete"),w&&(w=!1,f("online")),o.stop()}function k(){l&&l.remove(),q=!1,r=!1,o.update()}var l,m="/cache.html",n=6e4,o=new b,p={loaderPath:m,checkInterval:n,offlineCheckInterval:n},q=!1,r=!1;o.isSupported=function(){return!!a},o.update=function(){if(f("update"),!q)return A.push(o.update),r||(c(),r=!0),!0;if(!o.isSupported())return!1;try{return a.update(),!0}catch(a){return o.update=y,!1}};var s;o.start=function(a){return a&&o.set(a),q?(clearInterval(s),t=w?o.get("offlineCheckInterval"):o.get("checkInterval"),s=setInterval(o.update,t),v=!0,void f("start")):(A.push(o.start),r||(c(),r=!0),!0)},o.stop=function(){v&&(clearInterval(s),v=!1,f("stop"))},o.isCheckingForUpdates=function(){return v},o.hasUpdate=function(){return u},o.set=function(a,b){var c,d;if("object"!=typeof a)p[a]=b;else{d=a;for(c in d)d.hasOwnProperty(c)&&(p[c]=d[c])}},o.get=function(a){var b,c={};if(a)return p[a];for(b in p)p.hasOwnProperty(b)&&(c[b]=p[b]);return c};var t=n,u=!1,v=!1,w=!1,x=!1,y=function(){},z="APPCACHE",A=[],B=!1;return o}),window.Exception=null,window.CallbackException=function(a,b){try{a.getItems=JSON.parse(a.getItems)}catch(b){a=a||{}}this.exError=0!=a.exError,this.exTitle=a.exTitle||(void 0!=b?a:"Exception"),this.exMessage=a.exMessage||b||"",this.getItems=a.getItems||{},this.toString=function(){return this.exTitle+" >>> "+this.exMessage},this.throw=function(){window.Exception?(window.Exception.options.request=b||{},window.Exception.options.response=this.getItems,window.Exception.exError=this.exError,window.Exception.exTitle=this.exTitle,window.Exception.exMessage=this.exMessage):console.error(this.exTitle,this.exMessage)}},window.ElapsedTime=function(a,b){b=b||!1;var c=0,d=0,e=0,f=a||"Performance";this.Start=function(){if("undefined"!=typeof performance&&"undefined"!=typeof console&&!b){var a=(new Date).getHours()+":"+(new Date).getMinutes()+":"+(new Date).getSeconds();c=performance.now(),d=c,console.log(f+"() Performance >>> Starting on "+a)}},this.Checkpoint=function(a){if("undefined"!=typeof performance&&"undefined"!=typeof console&&!b){var c=performance.now();console.log((void 0==a?f+"() elapsed time is":a)+"\n\r",c-d,"ms"),d=c}},this.Stop=function(a){if("undefined"!=typeof performance&&"undefined"!=typeof console&&!b){var g=(new Date).getHours()+":"+(new Date).getMinutes()+":"+(new Date).getSeconds(),h=performance.now();e=h,console.log((void 0==a?f+"() elapsedtime is":a)+"\n\r",h-d,"ms ("+((e-c)/1e3).toFixed(2)+" s)"),console.log(f+"() Performan ce >>> Stoped on "+g),d=performance.now()}},this.toString=function(){return f+"() elapsedtime is "+((e-c)/1e3).toFixed(2)+" s"}},window.Items={"Month-TH":["","มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"]},window.getVue||(window.getVue={}),window.getVue.FileUpload=VueUploadComponent,window.TitlePage=function(a){document.title=(a?a+" • ":"Travox ")+"Midback Office™"};var cache_page=!1;cache.on("downloading",function(a){preloader.on(),cache_page=!0}),cache.on("progress",function(a){}),cache.on("cached",function(a){cache_page&&(preloader.off(),cache_page=!1),cache.stop()}),cache.on("updateready",function(){cache_page&&(preloader.off(),cache_page=!1),cache.stop()}),cache.on("noupdate",function(){console.log("Cache Installed."),cache.stop()}),cache.on("update",function(){console.log("handleUpdate")}),cache.on("error",function(){console.log("handleError")}),cache.on("obsolete",function(){console.log("handleObsolete")}),cache.on("init:downloading",function(){console.log("handleInitDownloading")}),cache.on("init:cached",function(){console.log("handleInitCached")}),Vue.config.devtools="localhost"===location.hostname,$(function(){window.onbeforeunload=function(a){var a=a||window.event;if(__.unload)return a&&(a.returnValue="Are you sure you want to leave this page?"),"Are you sure you want to leave this page?"};var a=setInterval(function(){"Notification"in window?"granted"===Notification.permission?clearInterval(a):"denied"!==Notification.permission&&Notification.requestPermission(function(b){"permission"in Notification||(Notification.permission=b),"granted"!==b?new Notification("Travox Midback Office™",{iconUrl:"/mos_V2/operation/dist/icon/mbos-Icon-72.png",message:"Welcome to Web Booking Engine by Nippon SySits."}):clearInterval(a)}):clearInterval(a)},100);localforage.config({driver:localforage.WEBSQL,name:"Travox-MBOS",version:1,size:4980736,storeName:"keyvaluepairs",description:"Travox MidBack Office data warehouse."}),localforage.getItem("VERSION",function(a,b){}),window.preloader=new $.materialPreloader({position:"top",height:"4px",col_1:"#159756",col_2:"#da4733",col_3:"#3b78e7",col_4:"#fdba2c",fadeIn:250,fadeOut:250});var b=new Url;window.location.query=b.query,$(window).capslockstate()}),function(a,b,c,d,e,f,g){a.GoogleAnalyticsObject=e,a[e]=a[e]||function(){(a[e].q=a[e].q||[]).push(arguments)},a[e].l=1*new Date,f=b.createElement(c),g=b.getElementsByTagName(c)[0],f.async=1,f.src=d,g.parentNode.insertBefore(f,g)}(window,document,"script","https://www.google-analytics.com/analytics.js","ga"),ga("create","UA-86934404-2","auto"),ga("send","pageview"),Number.prototype.toMoney=function(){var a=this,b=2,c=".",d=",",e=a<0?"-":"",f=parseInt(a=Math.abs(+a||0).toFixed(b))+"",g=(g=f.length)>3?g%3:0;return e+(g?f.substr(0,g)+d:"")+f.substr(g).replace(/(\d{3})(?=\d)/g,"$1"+d)+(b?c+Math.abs(a-f).toFixed(b).slice(2):"")},Number.prototype.toRate=function(){var a=this,b=6,c=".",d=",",e=a<0?"-":"",f=parseInt(a=Math.abs(+a||0).toFixed(b))+"",g=(g=f.length)>3?g%3:0;return e+(g?f.substr(0,g)+d:"")+f.substr(g).replace(/(\d{3})(?=\d)/g,"$1"+d)+(b?c+Math.abs(a-f).toFixed(b).slice(2):"")},String.prototype.toNumber=function(a){var b=this,c=Math.pow(10,a||2),d=void 0!=b?Math.round(parseFloat(b.replace(/[^0-9.-]/g,""))*c)/c:0;return isNaN(d)?0:d},String.prototype.toBoolean=function(){var a={n:!1,N:!1,no:!1,NO:!1,FALSE:!1,y:!0,Y:!0,false:!1,yes:!0,YES:!0,TRUE:!0,true:!0};return!!a.hasOwnProperty(this)&&a[this]},window.redirect=function(a){__.unload=!1;var b=location.href.substring(0,location.href.indexOf("/operation/")+"/operation/".length);location.href=b+a.replace(/^\//g,"")},window.request=function(a){var b=location.href.substring(0,location.href.indexOf("/operation/")+"/operation/".length);return a.url&&(a.url=b+a.url.replace(/^\//g,""),a.url=/\/$/g.test(a.url)?a.url+"Default.aspx":a.url),_.defaults(a,{url:/\/$/g.test(location.href)?location.href+"Default.aspx":"",api:!1,exception:!1,data:{},callback:function(){}}),a.api?void __.inst.post(a.url,{data:a.data}).then(function(b){var c=new CallbackException(b.data);a.callback(c.getItems,c)}).catch(function(b){var c=new CallbackException("catch",b.message||b);a.callback(c.getItems,c)}):(__.req.tasks.push(function(b,c){__.inst.post(a.url,{data:a.data}).then(function(c){b({options:a,result:c.data})}).catch(function(b){c({options:a,result:b.message||b})})}),__.unload=!0,window.preloader.on(),__.req.stopped&&(__.req.stopped=!1,__.req.run().then(function(){__.req.stopped=!0,__.unload=!1,window.preloader.off()})),__.req.tasks.length)},window.State={Caplock:function(){return $(window).capslockstate("state")}},window.Storage=function(a,b){if(a=a.toUpperCase(),void 0!=window.localStorage){var c=null,d=function(){return window.localStorage&&MBOS.CLIENT()?"<<-"+MBOS.CLIENT():""}();if("undefined"==typeof b){c=window.localStorage.getItem(a+d);try{c=JSON.parse(c)}catch(a){c||(c={})}}else window.localStorage.setItem(a+d,"object"==typeof b?JSON.stringify(b):b);return c||{}}},window.MBOS={Name:function(){return(/Name=(.*?)(;|$)/g.exec(document.cookie)||[])[1]},Code:function(){return(/CLIENT_STATE=\w{2}(.*?)(;|$)/g.exec(document.cookie)||[])[1]},CLIENT:function(){return(/CLIENT_STATE=(.*?(\w{3}))(;|$)/g.exec(document.cookie)||[])[1]},Expired:function(){var a=(/CUSTOMER_CODE=(.*?)(;|$)/g.exec(document.cookie)||[])[1],b=(/a74cf3c525a85182a1517c9758f4a245=(.*?)(;|$)/g.exec(document.cookie)||[])[1];return void 0==a&&void 0==b},getItem:function(a,b){return __.local.getItem((this.CLIENT()?this.CLIENT()+"->":"")+a,b)},setItem:function(a,b,c){return __.local.setItem((this.CLIENT()?this.CLIENT()+"->":"")+a,b,c)}},window.__={local:localforage.createInstance({name:"localhost"==location.hostname?"develop":"production"}),unload:!1,req:{stopped:!0,tasks:[],run:function(){return new Promise(function(a,b){var c=__.req.tasks.shift();return"function"==typeof c?new Promise(c).then(function(b){if(!b.result)throw"response is not JSON type CallbackException";var c=new CallbackException(b.result);b.options.callback(c.getItems||{},c),a({finish:!1})}).catch(function(c){if("string"==typeof c){var d=new CallbackException("Exception",c);a({finish:!1,error:!0,msg:c,cb:d})}else if(c.options)if(c.options.exception){var d=new CallbackException("Exception",c.result);b(d)}else{var d=new CallbackException(c.result);(c.options.callback||function(){})(d.getItems,d),a({finish:!1,error:!1,msg:c.result||c,cb:d})}else{var d=new CallbackException("Exception",c.toString());b(d)}}):void a({finish:!0})}).then(function(a){if(a.error)throw a.cb;if(!a.finish)return __.req.run()}).catch(function(a){a.throw()})}},inst:axios.create({timeout:"localhost"==location.hostname?0:3e4,headers:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(a){return $.param(a.data)}],responseType:"json"})},window.getVue.Select={template:['<div class="dropdown v-select" :class="dropdownClasses">','<div ref="toggle" @mousedown.prevent="toggleDropdown" class="dropdown-toggle clearfix" :class="{ disabled: disabled }" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">','<span class="form-control" v-if="!searchable && isValueEmpty">',"{{ placeholder }}","</span>",'<span :class="searchable ? \'selected-tag\' : \'selected-item\'" v-for="option in valueAsArray" track-by="1">',"{{ getOptionLabel(option) }}",'<button :disabled="disabled" v-if="multiple" @click="select(option)" type="button" class="close">','<span aria-hidden="true">&times;</span>',"</button>","</span>","<input",'ref="search"','v-model="search"','v-show="searchable"','@keydown.delete="maybeDeleteValue"','@keyup.esc="onEscape"','@keydown.up.prevent="typeAheadUp"','@keydown.down.prevent="typeAheadDown"','@keyup.enter.prevent="typeAheadSelect"','@blur="open = false"','@focus="open = true"','type="search"','class="form-control"',':placeholder="searchPlaceholder"',":style=\"{ width: isValueEmpty ? '100%' : 'auto' }\"",">",'<i ref="openIndicator" role="presentation" class="open-indicator"></i>',"</div>",'<ul ref="dropdownMenu" v-show="!disabled" :transition="transition" class="dropdown-menu" :style="{ \'max-height\': maxHeight }">','<li v-for="option in filteredOptions" track-by="1" :class="{ active: isOptionSelected(option) }" @mouseover="typeAheadPointer = 1">','<a @mousedown.prevent="select(option)">',"{{ getOptionLabel(option) }}","</a>","</li>",'<li transition="fade" v-if="!filteredOptions.length" class="divider"></li>','<li transition="fade" v-if="!filteredOptions.length" class="text-center">','<slot name="no-options">Sorry, no matching options.</slot>',"</li>","</ul>","</div>"].join(" "),mixins:[{watch:{typeAheadPointer:function(){this.maybeAdjustScroll()}},methods:{maybeAdjustScroll:function(){var a=this.pixelsToPointerTop(),b=this.pixelsToPointerBottom();return a<=this.viewport().top?this.scrollTo(a):b>=this.viewport().bottom?this.scrollTo(this.viewport().top+this.pointerHeight()):void 0},pixelsToPointerTop:function(){for(var a=0,b=0;b<this.typeAheadPointer;b++)a+=this.$refs.dropdownMenu.children[b].offsetHeight;return a},pixelsToPointerBottom:function(){return this.pixelsToPointerTop()+this.pointerHeight()},pointerHeight:function(){var a=this.$refs.dropdownMenu.children[this.typeAheadPointer];return a?a.offsetHeight:0},viewport:function(){return{top:this.$refs.dropdownMenu.scrollTop,bottom:this.$refs.dropdownMenu.offsetHeight+this.$refs.dropdownMenu.scrollTop}},scrollTo:function(a){return this.$refs.dropdownMenu.scrollTop=a}}},{data:function(){return{typeAheadPointer:-1}},watch:{filteredOptions:function(){this.typeAheadPointer=0}},methods:{typeAheadUp:function(){this.typeAheadPointer>0&&(this.typeAheadPointer--,this.maybeAdjustScroll&&this.maybeAdjustScroll())},typeAheadDown:function(){this.typeAheadPointer<this.filteredOptions.length-1&&(this.typeAheadPointer++,this.maybeAdjustScroll&&this.maybeAdjustScroll())},typeAheadSelect:function(){this.filteredOptions[this.typeAheadPointer]?this.select(this.filteredOptions[this.typeAheadPointer]):this.taggable&&this.search.length&&this.select(this.search),this.clearSearchOnSelect&&(this.search="")}}}],props:{value:{default:null},options:{type:Array,default:function(){return[]}},maxHeight:{type:String,default:"400px"},searchable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:""},transition:{type:String,default:"expand"},clearSearchOnSelect:{type:Boolean,default:!0},label:{type:String,default:"label"},key:{type:String,default:"value"},getOptionLabel:{type:Function,default:function(a){return"object"==typeof a&&this.label&&void 0!=a[this.label]?a[this.label]:a}},getOptionKey:{type:Function,default:function(a){return"object"==typeof a&&this.key&&void 0!=a[this.key]?a[this.key]:a}},onChange:{type:Function,default:function(a){return console.log("default",a),a}},taggable:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},pushTags:{type:Boolean,default:!1},createOption:{type:Function,default:function(a){return"object"==typeof this.options[0]&&this.label?[this.label]:a}},resetOnOptionsChange:{type:Boolean,default:!1}},data:function(){return{search:"",open:!1}},watch:{value:function(a,b){console.log(a,this.onChange),this.multiple?this.onChange?this.onChange(a):null:this.onChange&&a!==b?this.onChange(a):null},options:function(){!this.taggable&&this.resetOnOptionsChange&&this.$set("value",this.multiple?[]:null)},multiple:function(a){this.$set("value",a?[]:null)}},methods:{select:function(a){this.isOptionSelected(a)&&this.searchable?this.deselect(a):(this.taggable&&!this.optionExists(a)&&(a=this.createOption(a),this.pushTags&&this.options.push(a)),this.multiple?this.value?this.value.push(this.getOptionKey(a)):this.$set("value",[this.getOptionKey(a)]):this.value=this.getOptionKey(a)),this.onAfterSelect(a)},deselect:function(a){if(this.multiple){var b=-1;this.value.map(function(c){return(c===a||"object"==typeof c&&c[this.label]===a[this.label])&&(b=c),c}),this.value.$remove(b)}else this.value=null},onAfterSelect:function(a){this.multiple||(this.open=!this.open,this.$refs.search.blur()),this.clearSearchOnSelect&&(this.search="")},toggleDropdown:function(a){console.log(a.target),console.log(document.activeElement),this.disabled?this.$refs.search.blur():this.$refs.search.focus()},isOptionSelected:function(a){if(this.multiple&&this.value){var b=!1;return this.value.map(function(c){return"object"==typeof c&&c[this.label]===a[this.label]?b=!0:c===a&&(b=!0),c}),b}return this.value===this.getOptionKey(a)},onEscape:function(){this.search.length?this.search="":this.$refs.search.blur()},maybeDeleteValue:function(){if(!this.$refs.search.value.length&&this.value)return this.multiple?this.value.pop():this.$set("value",null)},optionExists:function(a){var b=!1;return this.options.map(function(c){return"object"==typeof c&&c[this.label]===a?b=!0:c===a&&(b=!0),c}),b}},computed:{dropdownClasses:function(){return{open:this.open,searchable:this.searchable,loading:this.loading,disabled:this.disabled}},searchPlaceholder:function(){if(this.isValueEmpty&&this.placeholder)return this.placeholder},filteredOptions:function(){(function(a,b){return a})(this.options,this.search);return this.taggable&&this.search.length&&!this.optionExists(this.search)&&this.options.unshift(this.search),this.options},isValueEmpty:function(){return void 0==this.value},valueAsArray:function(){if(this.multiple)return this.value;if(void 0!=this.value){var a=this.options.length>0?this.getOptionLabel(this.options[0]):"";return this.options.map(function(b){return this.getOptionKey(b)===this.value&&(a=this.getOptionLabel(b)),b}.bind(this)),[a]}return[]}}};