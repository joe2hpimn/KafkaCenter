(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{771:function(e,t,r){"use strict";r.r(t);var a=r(741),n=r(753),o=r(694),s=r(696),i=r(198),l=r(101),c=r(68),u=r(15),p=r(286),m=r(151),f=r(197),y=r(119),d=r(285),h=r(150),S=r(1),w=r.n(S),g=r(120),v=r.n(g),b=r(743),E=r.n(b),_=r(749),P=r(750),k=r(668),q=r(751),x=r.n(q),C=r(752),A,O;function j(e){"@babel/helpers - typeof";return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function R(e){return z(e)||V(e)||N(e)||M()}function M(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function N(e,t){if(e){if("string"==typeof e)return T(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?T(e,t):void 0}}function V(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function z(e){if(Array.isArray(e))return T(e)}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function J(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function I(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function L(e,t,r){return t&&I(e.prototype,t),r&&I(e,r),e}function W(e){return function(){var t=G(e),r;if(H()){var a=G(this).constructor;r=Reflect.construct(t,arguments,a)}else r=t.apply(this,arguments);return D(this,r)}}function D(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?$(e):t}function $(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function Q(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}function U(e,t){return(U=Object.setPrototypeOf||function e(t,r){return t.__proto__=r,t})(e,t)}var B=h.a.Row,F=h.a.Col,K=Object(k.a)(A=O=function(e){Q(r,e);var t=W(r);function r(){var e;J(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={id:"".concat(e.props.match.params.clusterName,"|").concat(e.props.match.params.ksqlServerId),consoleValue:"",runStatus:!0,stopStatus:!0,queryPropertiesStatus:!1,queryProperties:new Map,queryPropertiesShow:[],queryPropertiesShowMap:new Map,results:[],schema:[],jsonView:null,mounted:!0},e.ws=new WebSocket(window.location.host.indexOf("4444")>0?"ws://127.0.0.1:8080/ksql_console":"ws://".concat(window.location.host,"/ksql_console")),e.customAceEditorCompleter={getCompletions:function e(t,r,a,n,o){var s;o(null,[].concat(R(["create","create stream","create stream as select","create table","create table as select","drop stream","drop table","as","select","left","full","inner","join","window","windowstart","where","rowkey","group","by","having","and","emit","changes","type","stream","with","drop","table","show","types","insert","into","values","describe","extended","function","explain","if","exists","delete","topic","print","from","beginning","interval","limit","rowtime","set","cast","kafka_topic","case","when","then","else","end","like","between","list","functions","topics","streams","tables","queries","properties","spool","terminate","struct","abs","arraycontains","as_array","as_map","ceil","concat","unix_date","unix_timestamp","datetostring","elt","entries","extractjsonfield","exp","field","floor","generate_series","generate_series","geo_distance","ifnull","initcap","lcase","len","ln","mask","mask_keep_left","mask_keep_right","mask_left","mask_right","random","replace","round","sign","sqrt","slice","split","stringtodate","stringtotimestamp","substring","timestamptostring","trim","ucase","url_decode_param","url_encode_param","url_extract_fragment","url_extract_host","url_extract_parameter","url_extract_path","url_extract_port","url_extract_protocol","url_extract_query","collect_list","collect_set","count","histogram","average","max","min","sum","topk","topkdistinct","windowstart","windowend","explode","value_format","partition","partitions","replicas","value_delimiter","key","timestamp","timestamp_format","wrap_single_value","window_type","window_size","kafka_ceter is best."].map(function(e){return{caption:e,value:e,meta:"static"}})),R(r.$mode.$highlightRules.$keywordList.map(function(e){return{caption:e,value:e,meta:"keyword"}}))))}},e.onChange=function(t){e.setState({consoleValue:t})},e.onRun=function(){var t=e.state.consoleValue;if(null==t||0===t.trim().length)y.a.error("can not be empty!");else{e.setState({results:[],jsonView:null});var r="ksql",a;t.toLowerCase().startsWith("select")&&(r="query");var n,o={};e.state.queryProperties.forEach(function(e){null!=e.n&&e.n.trim().length>0&&null!=e.v&&e.v.trim().length>0&&(o[e.n]=e.v)}),t.endsWith(";")||(t+=";");var s={id:e.state.id,message:JSON.stringify({ksql:t,streamsProperties:o}),operate:"run",type:r};e.ws.send(JSON.stringify(s)),e.setState({runStatus:!0,stopStatus:!1})}},e.onStop=function(){var t={id:e.state.id,message:"",operate:"stop"};e.ws.send(JSON.stringify(t)),e.setState({runStatus:!1,stopStatus:!0})},e.onAddQueryProperties=function(){if(0===e.state.queryPropertiesShow.length){var t=w.a.createElement("div",{key:0},w.a.createElement(B,null,"\xa0"),w.a.createElement(B,null,w.a.createElement(F,null," ",w.a.createElement(m.a,{defaultValue:"auto.offset.reset",onChange:e.onPropertiesChange,name:"0n"}),"\xa0=\xa0",w.a.createElement(m.a,{defaultValue:"latest",onChange:e.onPropertiesChange,name:"0v"}),"\xa0\xa0 ",w.a.createElement(l.a,{primary:"true",text:!0,onClick:function t(){return e.onRemoveProperties(0)}},w.a.createElement(u.a,{type:"ashbin"})," ")))),r=new Map;r.set(0,t);var a=e.state.queryProperties;a.set("0",{n:"auto.offset.reset",v:"latest"}),e.setState({queryPropertiesStatus:!e.state.queryPropertiesStatus,queryPropertiesShow:[t],queryPropertiesShowMap:r,queryProperties:a})}else e.setState({queryPropertiesStatus:!e.state.queryPropertiesStatus})},e.onRemoveProperties=function(t){t=t?Number(t.index):0;var r=e.state.queryPropertiesShowMap,a=e.state.queryProperties;a.delete("".concat(t)),r.delete(t);var n=[];r.forEach(function(e){n.push(e)}),0===r.size&&e.setState({queryPropertiesStatus:!e.state.queryPropertiesStatus}),e.setState({queryPropertiesShow:n,queryPropertiesShowMap:r,queryProperties:a})},e.onPropertiesChange=function(t,r){var a=r.currentTarget.name,n=a.substring(0,1),o=a.substring(1,2),s=e.state.queryProperties,i=s.get(n)?s.get(n):{};i[o]=t,s.set(n,i),e.setState({queryProperties:s})},e.onAddAnotherProperties=function(){var t=e.state.queryPropertiesShow.length,r=w.a.createElement("div",{key:t},w.a.createElement(B,null,"\xa0"),w.a.createElement(B,null,w.a.createElement(F,null," ",w.a.createElement(m.a,{onChange:e.onPropertiesChange,name:"".concat(t,"n")}),"\xa0=\xa0",w.a.createElement(m.a,{onChange:e.onPropertiesChange,name:"".concat(t,"v")}),"\xa0\xa0 ",w.a.createElement(l.a,{primary:"true",text:!0,onClick:function r(){return e.onRemoveProperties({index:t})}},w.a.createElement(u.a,{type:"ashbin"})," ")))),a=e.state.queryPropertiesShowMap;a.set(t,r),e.setState({queryPropertiesShow:[].concat(R(e.state.queryPropertiesShow),[r]),queryPropertiesShowMap:a})},e}return L(r,[{key:"componentDidMount",value:function e(){var t=this;this.ws.onopen=function(){t.setState({runStatus:!1,stopStatus:!0})},this.ws.onclose=function(){t.state.mounted&&t.setState({runStatus:!0,stopStatus:!0})},this.ws.onmessage=function(e){if(t.state.mounted)try{var r=t.state.consoleValue.toLowerCase(),a=JSON.parse(e.data);if(r.startsWith("select")||a.errorMessage)if(0===t.state.schema.length){for(var n,o=a.header.schema.split(","),s=[],i=0;i<o.length;i+=1){var l=o[i].substring(o[i].indexOf("`")+1,o[i].lastIndexOf("`"));s=[].concat(R(s),[l])}t.setState({schema:s})}else try{for(var c=a.row.columns,u=t.state.schema,p={},m=0;m<u.length;m+=1)p[u[m]]=c[m];var f=[p].concat(R(t.state.results));t.setState({results:f})}catch(r){var y=w.a.createElement(x.a,{id:"json-pretty",data:e.data,keyStyle:"color:#008080;font-size:1.5em",valueStyle:"color:#0f1e78;font-size:1.5em"});t.setState({jsonView:y}),console.warn(r)}else{var d=w.a.createElement(x.a,{id:"json-pretty",data:e.data,keyStyle:"color:#008080;font-size:1.5em",valueStyle:"color:#0f1e78;font-size:1.5em"});t.setState({jsonView:d,runStatus:!1,stopStatus:!0})}}catch(r){var h=w.a.createElement(x.a,{id:"json-pretty",data:e.data,keyStyle:"color:#008080;font-size:1.5em",valueStyle:"color:#0f1e78;font-size:1.5em"});t.setState({jsonView:h,runStatus:!1,stopStatus:!0}),console.error(r)}}}},{key:"componentWillUnmount",value:function e(){var t={id:this.state.id,message:"",operate:"stop"};this.setState({mounted:!1}),this.ws.send(JSON.stringify(t))}},{key:"render",value:function e(){var t=this.state,r=t.results,a=t.jsonView,o=w.a.createElement("div",{style:X.messageStyle},w.a.createElement("h1",null,"No new messages"),"The message browser shows messages that have arrived since this page was opened.");return w.a.createElement(v.a,null,w.a.createElement(s.a,{className:"free-card custom",free:!0},w.a.createElement("div",{className:"free-card-main"},w.a.createElement(s.a.Content,null,w.a.createElement(B,null,w.a.createElement(F,{span:"24"},w.a.createElement(E.a,{placeholder:"Example: SELECT field1, field2, field3 FROM mystream WHERE field1 = \u2018somevalue\u2019 EMIT CHANGES;",mode:"sql",height:"100px",value:this.state.consoleValue,width:"100%",theme:"xcode",name:"blah2",onChange:this.onChange,fontSize:14,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,setOptions:{enableBasicAutocompletion:[this.customAceEditorCompleter],enableLiveAutocompletion:!0,showLineNumbers:!1,tabSize:2}})))),w.a.createElement(s.a.Actions,null,w.a.createElement(n.a,{dashed:!0}),w.a.createElement(B,null,w.a.createElement(F,{span:"12"},w.a.createElement(B,null,w.a.createElement("a",{href:"javascript:void(0)",onClick:this.onAddQueryProperties,style:{display:"block",textAlign:"left",textDecoration:"underline"}},"Add query properties")),w.a.createElement("div",{style:{display:this.state.queryPropertiesStatus?"":"none"}},this.state.queryPropertiesShow.map(function(e){return e}),w.a.createElement(B,null,"\xa0"),w.a.createElement(B,null,w.a.createElement("a",{href:"javascript:void(0)",onClick:this.onAddAnotherProperties,style:{display:"block",textAlign:"left",textDecoration:"underline"}},"Add another field")))),w.a.createElement(F,{span:"12"},w.a.createElement("span",{style:{display:this.state.runStatus?"":"none"}},"Running...\xa0\xa0"),w.a.createElement("span",null,w.a.createElement(l.a,{type:"primary",disabled:this.state.runStatus,onClick:this.onRun},"\xa0\xa0 Run\xa0\xa0")," \xa0\xa0",w.a.createElement(l.a,{type:"secondary",disabled:this.state.stopStatus,onClick:this.onStop},"\xa0\xa0Stop\xa0\xa0"))))))),w.a.createElement(s.a,{style:X.resultStyle,className:"free-card custom",free:!0},w.a.createElement("div",{className:"free-card-main"},w.a.createElement(s.a.Content,null,a||r.length>0?null:o,r.map(function(e){return w.a.createElement("p",{key:e.ROWTIME},JSON.stringify(e))}),a))))}}]),r}(S.Component))||A,X={resultStyle:{marginTop:"50px",minHeight:"200px"},messageStyle:{textAlign:"center"}},Y=t.default=K}}]);