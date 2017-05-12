/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
(function(){if(!window.jQuery){throw new Error("SAPUI5 requires jQuery as a prerequisite (>= version 1.7)");}if(jQuery.sap){return;}if(sap.ui.Device.browser.edge){window.Promise=undefined;}if(!window.Promise){ES6Promise.polyfill();}var _=window;var a=[];function b(l,m){a.push({level:l,message:m});}var c;var f=/^[0-9]+(?:\.([0-9]+)(?:\.([0-9]+))?)?(.*)$/;function V(M,i,d,s){if(M instanceof V){return M;}if(!(this instanceof V)){return new V(M,i,d,s);}var m;if(typeof M==="string"){m=f.exec(M);}else if(jQuery.isArray(M)){m=M;}else{m=arguments;}m=m||[];function n(v){v=parseInt(v,10);return isNaN(v)?0:v;}M=n(m[0]);i=n(m[1]);d=n(m[2]);s=String(m[3]||"");this.toString=function(){return M+"."+i+"."+d+s;};this.getMajor=function(){return M;};this.getMinor=function(){return i;};this.getPatch=function(){return d;};this.getSuffix=function(){return s;};this.compareTo=function(){var o=V.apply(window,arguments);return M-o.getMajor()||i-o.getMinor()||d-o.getPatch()||((s<o.getSuffix())?-1:(s===o.getSuffix())?0:1);};}V.prototype.inRange=function(m,M){return this.compareTo(m)>=0&&this.compareTo(M)<0;};var j=V(jQuery.fn.jquery);if(!j.inRange("1.7.0","2.0.0")){b("error","SAPUI5 requires a jQuery version of 1.7 or higher, but lower than 2.0; current version is "+jQuery.fn.jquery);}if(!jQuery.browser){jQuery.browser=(function(d){var r=/(webkit)[ \/]([\w.]+)/,i=/(opera)(?:.*version)?[ \/]([\w.]+)/,l=/(msie) ([\w.]+)/,m=/(mozilla)(?:.*? rv:([\w.]+))?/,d=d.toLowerCase(),n=r.exec(d)||i.exec(d)||l.exec(d)||d.indexOf("compatible")<0&&m.exec(d)||[],o={};if(n[1]){o[n[1]]=true;o.version=n[2]||"0";if(o.webkit){o.safari=true;}}return o;}(window.navigator.userAgent));}if(!!sap.ui.Device.browser.internet_explorer){jQuery.support=jQuery.support||{};jQuery.support.cors=true;var J=V(jQuery.fn.jquery);if(window.ActiveXObject!==undefined&&J.getMajor()==1&&J.getMinor()>=11){var C=function(){try{return new window.XMLHttpRequest();}catch(e){}};var g=function(){try{return new window.ActiveXObject("Microsoft.XMLHTTP");}catch(e){}};jQuery.ajaxSettings=jQuery.ajaxSettings||{};jQuery.ajaxSettings.xhr=function(){return!this.isLocal?C():g();};}}var h=(function(){var T,U,r,d=/^(.*\/)?download\/configurator[\/\?]/,i=/^(.*\/)?(sap-ui-(core|custom|boot|merged)(-.*)?)\.js([?#]|$)/,l=/^(.*\/)?resources\//;jQuery("script[src]").each(function(){var s=this.getAttribute("src"),m;if((m=s.match(d))!==null){T=this;U=s;r=(m[1]||"")+"resources/";return false;}else if((m=s.match(i))!==null){T=this;U=s;r=m[1]||"";return false;}else if(this.id=='sap-ui-bootstrap'&&(m=s.match(l))){T=this;U=s;r=m[0];return false;}});return{tag:T,url:U,resourceRoot:r};})();(function(){if(/sap-bootstrap-debug=(true|x|X)/.test(location.search)){window["sap-ui-bRestart"]=false;window["sap-ui-sRestartUrl"]="http://localhost:8080/sapui5/resources/sap-ui-core.js";var r=function(){var s=h.tag,d="<script src=\""+window["sap-ui-sRestartUrl"]+"\"";jQuery.each(s.attributes,function(i,A){if(A.nodeName.indexOf("data-sap-ui-")==0){d+=" "+A.nodeName+"=\""+A.nodeValue+"\"";}});d+="></script>";s.parentNode.removeChild(s);jQuery("#sap-ui-bootstrap-cachebusted").remove();window["sap-ui-config"]&&window["sap-ui-config"].resourceRoots&&(window["sap-ui-config"].resourceRoots[""]=undefined);document.write(d);var R=new Error("Aborting UI5 bootstrap and restarting from: "+window["sap-ui-sRestartUrl"]);R.name="Restart";delete window["sap-ui-bRestart"];delete window["sap-ui-sRestartUrl"];throw R;};debugger;if(window["sap-ui-bRestart"]){r();}}})();(function(){var d=/sap-ui-debug=(true|x|X)/.test(location.search),i=window["sap-ui-optimized"];try{d=d||(window.localStorage.getItem("sap-ui-debug")=="X");}catch(e){}window["sap-ui-debug"]=d;if(/-dbg\.js([?#]|$)/.test(h.url)){window["sap-ui-loaddbg"]=true;window["sap-ui-debug"]=true;}if(i&&d){var D=h.url.replace(/\/(?:sap-ui-cachebuster\/)?([^\/]+)\.js/,"/$1-dbg.js");window["sap-ui-optimized"]=false;window["sap-ui-loaddbg"]=true;document.write("<script type=\"text/javascript\" src=\""+D+"\"></script>");var r=new Error("Aborting UI5 bootstrap and restarting from: "+D);r.name="Restart";throw r;}})();var k=_["sap-ui-config"]=(function(){function n(o){jQuery.each(o,function(i,v){var m=i.toLowerCase();if(!o.hasOwnProperty(m)){o[m]=v;delete o[i];}});return o;}var s=h.tag,d=_["sap-ui-config"],l="sap-ui-config.json";if(typeof d==="string"){b("warning","Loading external bootstrap configuration from \""+d+"\". This is a design time feature and not for productive usage!");if(d!==l){b("warning","The external bootstrap configuration file should be named \""+l+"\"!");}jQuery.ajax({url:d,dataType:'json',async:false,success:function(D,T,i){d=D;},error:function(i,T,o){b("error","Loading externalized bootstrap configuration from \""+d+"\" failed! Reason: "+o+"!");d=undefined;}});}d=n(d||{});d.resourceroots=d.resourceroots||{};d.themeroots=d.themeroots||{};d.resourceroots['']=d.resourceroots['']||h.resourceRoot;d['xx-loadallmode']=/(^|\/)(sap-?ui5|[^\/]+-all).js([?#]|$)/.test(h.url);if(s){var r=s.getAttribute("data-sap-ui-config");if(r){try{jQuery.extend(d,n((new Function("return {"+r+"};"))()));}catch(e){b("error","failed to parse data-sap-ui-config attribute: "+(e.message||e));}}jQuery.each(s.attributes,function(i,o){var m=o.name.match(/^data-sap-ui-(.*)$/);if(m){m=m[1].toLowerCase();if(m==='resourceroots'){jQuery.extend(d[m],jQuery.parseJSON(o.value));}else if(m==='theme-roots'){jQuery.extend(d.themeroots,jQuery.parseJSON(o.value));}else if(m!=='config'){d[m]=o.value;}}});}return d;}());if(k.noconflict===true||k.noconflict==="true"||k.noconflict==="x"){jQuery.noConflict();}jQuery.sap={};jQuery.sap.Version=V;jQuery.sap.debug=function(d){if(!window.localStorage){return null;}function r(U){alert("Usage of debug sources is "+(U?"on":"off")+" now.\nFor the change to take effect, you need to reload the page.");}if(d===true){window.localStorage.setItem("sap-ui-debug","X");r(true);}else if(d===false){window.localStorage.removeItem("sap-ui-debug");r(false);}return window.localStorage.getItem("sap-ui-debug")=="X";};jQuery.sap.statistics=function(d){if(!window.localStorage){return null;}function r(U){alert("Usage of Gateway statistics "+(U?"on":"off")+" now.\nFor the change to take effect, you need to reload the page.");}if(d===true){window.localStorage.setItem("sap-ui-statistics","X");r(true);}else if(d===false){window.localStorage.removeItem("sap-ui-statistics");r(false);}return window.localStorage.getItem("sap-ui-statistics")=="X";};(function(){var d=0,l=1,W=2,n=3,D=4,T=5,s=(window.top==window)?"":"["+window.location.pathname.split('/').slice(-1)[0]+"] ",L=[],M={'':l},o=null;function r(i,w){return("000"+String(i)).slice(-w);}function z(i){return(!i||isNaN(M[i]))?M['']:M[i];}function A(){if(!o){o={listeners:[],onLogEntry:function(m){for(var i=0;i<o.listeners.length;i++){if(o.listeners[i].onLogEntry){o.listeners[i].onLogEntry(m);}}},attach:function(i,m){if(m){o.listeners.push(m);if(m.onAttachToLog){m.onAttachToLog(i);}}},detach:function(m,v){for(var i=0;i<o.listeners.length;i++){if(o.listeners[i]===v){if(v.onDetachFromLog){v.onDetachFromLog(m);}o.listeners.splice(i,1);return;}}}};}return o;}function B(i,m,v,w){if(i<=z(w)){var N=new Date(),H={time:r(N.getHours(),2)+":"+r(N.getMinutes(),2)+":"+r(N.getSeconds(),2),date:r(N.getFullYear(),4)+"-"+r(N.getMonth()+1,2)+"-"+r(N.getDate(),2),timestamp:N.getTime(),level:i,message:String(m||""),details:String(v||""),component:String(w||"")};L.push(H);if(o){o.onLogEntry(H);}if(window.console){var K=H.date+" "+H.time+" "+s+H.message+" - "+H.details+" "+H.component;switch(i){case d:case l:console.error(K);break;case W:console.warn(K);break;case n:console.info?console.info(K):console.log(K);break;case D:console.debug?console.debug(K):console.log(K);break;case T:console.trace?console.trace(K):console.log(K);break;}}return H;}}function G(i){this.fatal=function(m,v,w){B(d,m,v,w||i);return this;};this.error=function error(m,v,w){B(l,m,v,w||i);return this;};this.warning=function warning(m,v,w){B(W,m,v,w||i);return this;};this.info=function info(m,v,w){B(n,m,v,w||i);return this;};this.debug=function debug(m,v,w){B(D,m,v,w||i);return this;};this.trace=function trace(m,v,w){B(T,m,v,w||i);return this;};this.setLevel=function setLevel(m,w){w=w||i||'';M[w]=m;var H=[];jQuery.each(jQuery.sap.log.LogLevel,function(K,v){H[v]=K;});B(n,"Changing log level "+(w?"for '"+w+"' ":"")+"to "+H[m],"","jQuery.sap.log");return this;};this.getLevel=function getLevel(m){return z(m||i);};this.isLoggable=function(m,v){return(m==null?D:m)<=z(v||i);};}jQuery.sap.log=jQuery.extend(new G(),{Level:{NONE:d-1,FATAL:d,ERROR:l,WARNING:W,INFO:n,DEBUG:D,TRACE:T,ALL:(T+1)},getLogger:function(i,m){if(!isNaN(m)&&M[i]==null){M[i]=m;}return new G(i);},getLogEntries:function(){return L.slice();},addLogListener:function(o){A().attach(this,o);return this;},removeLogListener:function(o){A().detach(this,o);return this;}});jQuery.sap.log.LogLevel=jQuery.sap.log.Level;jQuery.sap.log.getLog=jQuery.sap.log.getLogEntries;jQuery.sap.assert=function(R,m){if(!R){if(window.console&&console.assert){console.assert(R,s+m);}else{jQuery.sap.log.debug("[Assertions] "+m);}}};k.loglevel=(function(){var m=/(?:\?|&)sap-ui-log(?:L|-l)evel=([^&]*)/.exec(window.location.search);return m&&m[1];}())||k.loglevel;if(k.loglevel){jQuery.sap.log.setLevel(jQuery.sap.log.Level[k.loglevel.toUpperCase()]||parseInt(k.loglevel,10));}jQuery.sap.log.info("SAP Logger started.");jQuery.each(a,function(i,e){jQuery.sap.log[e.level](e.message);});a=null;}());jQuery.sap.factory=function factory(o){function d(){}d.prototype=o;return d;};jQuery.sap.newObject=function newObject(o){return new(jQuery.sap.factory(o))();};jQuery.sap.getter=function getter(v){return function(){return v;};};jQuery.sap.getObject=function getObject(n,N,o){var O=o||_,d=(n||"").split("."),l=d.length,m=isNaN(N)?0:l-N,i;for(i=0;O&&i<l;i++){if(!O[d[i]]&&i<m){O[d[i]]={};}O=O[d[i]];}return O;};jQuery.sap.setObject=function(n,v,o){var O=o||_,N=(n||"").split("."),l=N.length,i;if(l>0){for(i=0;O&&i<l-1;i++){if(!O[N[i]]){O[N[i]]={};}O=O[N[i]];}O[N[l-1]]=v;}};function S(n,d,T){var i=[],o=0,l=0,s;this.startTask=function(r){var v=i.length;i[v]={name:r,finished:false};o++;return v;};this.finishTask=function(r,v){if(!i[r]||i[r].finished){throw new Error("trying to finish non existing or already finished task");}i[r].finished=true;o--;if(v===false){l++;}if(o===0){jQuery.sap.log.info("Sync point '"+n+"' finished (tasks:"+i.length+", open:"+o+", failures:"+l+")");if(s){clearTimeout(s);s=null;}m();}};function m(){d&&d(o,l);d=null;}if(!isNaN(T)){s=setTimeout(function(){jQuery.sap.log.info("Sync point '"+n+"' timed out (tasks:"+i.length+", open:"+o+", failures:"+l+")");m();},T);}jQuery.sap.log.info("Sync point '"+n+"' created"+(T?"(timeout after "+T+" ms)":""));}jQuery.sap.syncPoint=function(n,d,T){return new S(n,d,T);};var p=(function(){var o=jQuery.sap.log.getLogger("sap.ui.ModuleSystem",(/sap-ui-xx-debug(M|-m)odule(L|-l)oading=(true|x|X)/.test(location.search)||k["xx-debugModuleLoading"])?jQuery.sap.log.Level.DEBUG:jQuery.sap.log.Level.INFO),U={'':{'url':'resources/'}},r=0,v=-1,L=1,w=2,z=3,R=4,A=5,M={"sap/ui/thirdparty/URI.js":{state:R,url:c,content:URI},"sap/ui/Device.js":{state:R,url:c,content:sap.ui.Device},"jquery.sap.global.js":{state:R,url:c,content:jQuery}},B={},D={'sap/ui/thirdparty/blanket.js':true,'sap/ui/thirdparty/crossroads.js':true,'sap/ui/thirdparty/d3.js':true,'sap/ui/thirdparty/datajs.js':true,'sap/ui/thirdparty/handlebars.js':true,'sap/ui/thirdparty/hasher.js':true,'sap/ui/thirdparty/IPv6.js':true,'sap/ui/thirdparty/jquery/jquery-1.11.1.js':true,'sap/ui/thirdparty/jquery/jquery-1.10.2.js':true,'sap/ui/thirdparty/jquery/jquery-1.10.1.js':true,'sap/ui/thirdparty/jquery/jquery.1.7.1.js':true,'sap/ui/thirdparty/jquery/jquery.1.8.1.js':true,'sap/ui/thirdparty/jquery-mobile-custom.js':true,'sap/ui/thirdparty/jszip.js':true,'sap/ui/thirdparty/less.js':true,'sap/ui/thirdparty/punycode.js':true,'sap/ui/thirdparty/require.js':true,'sap/ui/thirdparty/SecondLevelDomains.js':true,'sap/ui/thirdparty/signals.js':true,'sap/ui/thirdparty/URI.js':true,'sap/ui/thirdparty/URITemplate.js':true,'sap/ui/demokit/js/esprima.js':true},G=[],H="",K=512*1024,N=document.location.href.replace(/\?.*|#.*/g,""),O="fragment",Q="view",T={js:[Q,O,"controller","designtime"],xml:[Q,O],json:[Q,O],html:[Q,O]},W=new RegExp("(\\.(?:"+T.js.join("|")+"))?\\.js$"),X,Y;(function(){var s="",d="";jQuery.each(T,function(i,l){s=(s?s+"|":"")+i;d=(d?d+"|":"")+"(?:(?:"+l.join("\\.|")+"\\.)?"+i+")";});s="\\.("+s+")$";d="\\.(?:"+d+"|[^./]+)$";o.debug("constructed regexp for file types :"+s);o.debug("constructed regexp for file sub-types :"+d);X=new RegExp(s);Y=new RegExp(d);}());function Z(s){if(/^sap\.ui\.thirdparty\.jquery\.jquery-/.test(s)){return"sap/ui/thirdparty/jquery/jquery-"+s.slice("sap.ui.thirdparty.jquery.jquery-".length);}else if(/^jquery\.sap\./.test(s)){return s;}return s.replace(/\./g,"/");}function $(s){if(!/\.js$/.test(s)){return;}s=s.slice(0,-3);if(/^sap\/ui\/thirdparty\/jquery\/jquery-/.test(s)){return"sap.ui.thirdparty.jquery.jquery-"+s.slice("sap/ui/thirdparty/jquery/jquery-".length);}else if(/^jquery\.sap\./.test(s)){return s;}return s.replace(/\//g,".");}function a1(s,d){var i=s.split(/\//),l,i1,j1,m;if(arguments.length===1&&i.length>0){m=Y.exec(i[i.length-1]);if(m){d=m[0];i[i.length-1]=i[i.length-1].slice(0,m.index);}else{d="";}}for(l=i.length;l>=0;l--){i1=i.slice(0,l).join('/');if(U[i1]){j1=U[i1].url;if(l<i.length){j1+=i.slice(l).join('/');}if(j1.slice(-1)==='/'){j1=j1.slice(0,-1);}return j1+(d||'');}}}function b1(s){var d,i,l;for(d in U){if(U.hasOwnProperty(d)){i=U[d].url.slice(0,-1);if(s.indexOf(i)===0){l=d+s.slice(i.length);if(l.charAt(0)==='/'){l=l.slice(1);}if(M[l]&&M[l].data){return l;}}}}}function c1(m){var d;d=M[m]||(M[m]={state:r});if(d.state>r){return d;}if(o.isLoggable()){o.debug(H+"declare module '"+m+"'");}d.state=R;if(G.length===0){G.push(m);d.url=d.url||c;}return d;}function d1(s){var m=W.exec(s),d,l,i1,j1,i;if(!m){o.error("can only require Javascript module, not "+s);return;}d=s.slice(0,m.index);l=m[0];i1=M[s]||(M[s]={state:r});if(o.isLoggable()){o.debug(H+"require '"+s+"' of type '"+l+"'");}if(i1.state!==r){if(i1.state===v){i1.state=w;e1(s);}if(i1.state===R){if(o.isLoggable()){o.debug(H+"module '"+s+"' has already been loaded (skipped).");}return this;}else if(i1.state===A){throw new Error("found in negative cache: '"+s+"' from "+i1.url+": "+i1.error);}else{return this;}}i1.state=L;j1=window["sap-ui-loaddbg"]?["-dbg",""]:[""];for(i=0;i<j1.length&&i1.state!==w;i++){i1.url=a1(d,j1[i]+l);if(o.isLoggable()){o.debug(H+"loading "+(j1[i]?j1[i]+" version of ":"")+"'"+s+"' from '"+i1.url+"'");}jQuery.ajax({url:i1.url,dataType:'text',async:false,success:function(k1,l1,m1){i1.state=w;i1.data=k1;},error:function(k1,l1,m1){i1.state=A;i1.error=k1?k1.status+" - "+k1.statusText:l1;}});}if(i1.state===w){e1(s);}if(i1.state!==R){throw new Error("failed to load '"+s+"' from "+i1.url+": "+i1.error);}}function e1(m){var d=M[m],s,i,l;if(d&&d.state===w&&typeof d.data!=="undefined"){l=D[m]&&typeof window.define==="function"&&window.define.amd;try{if(l){delete window.define.amd;}if(o.isLoggable()){o.debug(H+"executing '"+m+"'");s=H;H=H+": ";}d.state=z;G.push(m);if(typeof d.data==="function"){d.data.call(window);}else{i=d.data;if(i&&!i.match(/\/\/[#@] source(Mapping)?URL=.*$/)){i+="\n//# sourceURL="+URI(d.url).absoluteTo(N);}if(typeof jQuery.sap.require._hook==="function"){i=jQuery.sap.require._hook(i,m);}if(_.execScript&&(!d.data||d.data.length<K)){try{d.data&&_.execScript(i);}catch(e){G.pop();jQuery.sap.globalEval(d.data);throw e;}}else{_.eval(i);}}G.pop();d.state=R;d.data=undefined;d.content=d.content||jQuery.sap.getObject($(m));if(o.isLoggable()){H=s;o.debug(H+"finished executing '"+m+"'");}}catch(i1){d.state=A;d.error=((i1.toString&&i1.toString())||i1.message)+(i1.line?"(line "+i1.line+")":"");d.data=undefined;if(window["sap-ui-debug"]&&(/sap-ui-xx-show(L|-l)oad(E|-e)rrors=(true|x|X)/.test(location.search)||k["xx-showloaderrors"])){o.error("error while evaluating "+m+", embedding again via script tag to enforce a stack trace (see below)");jQuery.sap.includeScript(d.url);return;}}finally{if(l){window.define.amd=l;}}}}function f1(d,l){var m=[],i,s;for(i=0;i<d.length;i++){s=d[i];o.debug(H+"require '"+s+"'");d1(s+".js");m[i]=M[s+".js"].content||jQuery.sap.getObject($(s+".js"));o.debug(H+"require '"+s+"': done.");}l(m);}jQuery.sap.getModulePath=function(m,s){return a1(Z(m),s);};jQuery.sap.getResourcePath=a1;jQuery.sap.registerModulePath=function registerModulePath(m,d){m=m.replace(/\./g,"/");d=d||'.';jQuery.sap.registerResourcePath(m,d);};jQuery.sap.registerResourcePath=function registerResourcePath(s,d){s=String(s||"");if(U[s]&&U[s]["final"]==true){o.warning("registerResourcePath with prefix "+s+" already set as final to '"+U[s].url+"'. This call is ignored.");return;}if(typeof d==='string'||d instanceof String){d={'url':d};}if(!d||d.url==null){delete U[s];o.info("registerResourcePath ('"+s+"') (registration removed)");}else{d.url=String(d.url);var i=d.url.indexOf("?");if(i!==-1){d.url=d.url.substr(0,i);}var l=d.url.indexOf("#");if(l!==-1){d.url=d.url.substr(0,l);}if(d.url.slice(-1)!='/'){d.url+='/';}U[s]=d;o.info("registerResourcePath ('"+s+"', '"+d.url+"')"+((d['final'])?" (final)":""));}};jQuery.sap.isDeclared=function isDeclared(m,i){m=Z(m)+".js";return M[m]&&(i||M[m].state!==v);};jQuery.sap.getAllDeclaredModules=function(){var m=[];jQuery.each(M,function(s,d){if(d&&d.state!==v){var i=$(s);if(i){m.push(i);}}});return m;};if(k.resourceroots){jQuery.each(k.resourceroots,jQuery.sap.registerModulePath);}o.info("URL prefixes set to:");for(var n in U){o.info("  "+(n?"'"+n+"'":"(default)")+" : "+U[n].url+((U[n]['final'])?" (final)":""));}jQuery.sap.declare=function(m,d){var s=m;if(typeof(m)==="object"){s=m.modName;m=Z(m.modName)+(m.type?"."+m.type:"")+".js";}else{m=Z(m)+".js";}c1(m);if(d!==false){jQuery.sap.getObject(s,1);}return this;};jQuery.sap.require=function(m,d){if(arguments.length>1){for(var i=0;i<arguments.length;i++){jQuery.sap.require(arguments[i]);}return this;}if(typeof(m)==="object"){m=Z(m.modName)+(m.type?"."+m.type:"")+".js";}else{m=Z(m)+".js";}d1(m);return this;};jQuery.sap._requirePath=function(m){d1(m+".js");};window.sap=window.sap||{};sap.ui=sap.ui||{};var g1=/(?:^|\/)\.+/;var h1=/(?:^|\/)\.{2,}/;sap.ui.define=function(m,d,l,s){var i1,i;if(typeof m==='string'){i1=m+'.js';}else{s=l;l=d;d=m;i1=G[G.length-1];}m=$(i1);if(!jQuery.isArray(d)){s=l;l=d;d=[];}else{var j1=i1.slice(0,1+i1.lastIndexOf('/'));for(i=0;i<d.length;i++){if(h1.test(d[i])){o.error("In UI5 1.28, relative module names using '../' are not supported by sap.ui.define. "+"Code that uses them might fail with release 1.30 or later even if that code seems to work now. "+"In 1.28, the browser might resolve the '../', but that resolution differs significantly from the "+"AMD compliant resolution implemented in 1.30 and later. "+"It is therefore strongly discouraged in version 1.28 to use '../' in the module dependencies for a sap.ui.define call.");}if(/^\.\//.test(d[i])){d[i]=j1+d[i].slice(2);}}}if(o.isLoggable()){o.debug("define("+i1+", "+"['"+d.join("','")+"']"+")");}var k1=c1(i1);f1(d,function(l1){if(o.isLoggable()){o.debug("define("+i1+"): calling factory "+typeof l);}if(s){jQuery.sap.getObject(m,1);}if(typeof l==='function'){k1.content=l.apply(window,l1);}else{k1.content=l;}if(s){if(k1.content==null){o.error("module '"+i1+"' returned no content, but should be exported");}else{if(o.isLoggable()){o.debug("exporting content of '"+i1+"': as global object");}jQuery.sap.setObject(m,k1.content);}}});};sap.ui.require=function(d,l){if(typeof d==='string'){var m=d+'.js',s=M[m];return s?(s.content||jQuery.sap.getObject($(m))):undefined;}for(var i=0;i<d.length;i++){if(g1.test(d[i])){o.error("sap.ui.require does not support relative names using './' or '..'/'");}}f1(d,function(i1){if(typeof l==='function'){setTimeout(function(){l.apply(window,i1);},0);}});};jQuery.sap.preloadModules=function(s,d,i){var l,m;if(B[s]){return;}B[s]=true;l=jQuery.sap.getModulePath(s,".json");o.debug("preload file "+s);m=i&&i.startTask("load "+s);jQuery.ajax({dataType:"json",async:d,url:l,success:function(i1){if(i1){i1.url=l;}jQuery.sap.registerPreloadedModules(i1,d,i);i&&i.finishTask(m);},error:function(i1,j1,k1){o.error("failed to preload '"+s+"': "+(k1||j1));i&&i.finishTask(m,false);}});};jQuery.sap.registerPreloadedModules=function(d,i,s){var l=V(d.version||"1.0").compareTo("2.0")<0;if(o.isLoggable()){o.debug(H+"adding preloaded modules from '"+d.url+"'");}if(d.name){B[d.name]=true;}jQuery.each(d.modules,function(m,i1){m=l?Z(m)+".js":m;if(!M[m]){M[m]={state:v,url:d.url+"/"+m,data:i1,group:d.name};}if(m.match(/\/library\.js$/)){B[$(m)+"-preload"]=true;}});if(d.dependencies){jQuery.each(d.dependencies,function(m,i1){jQuery.sap.preloadModules(i1,i,s);});}};jQuery.sap.unloadResources=function(s,d,l,m){var i1=[];if(d==null){d=true;}if(d){jQuery.each(M,function(i,j1){if(j1&&j1.group===s){i1.push(i);}});delete B[s];}else{if(M[s]){i1.push(s);}}jQuery.each(i1,function(i,j1){var k1=M[j1];if(k1&&m&&j1.match(/\.js$/)){jQuery.sap.setObject($(j1),undefined);}if(k1&&(l||k1.state===v)){delete M[j1];}});};jQuery.sap.getResourceName=function(m,s){return Z(m)+(s||".js");};jQuery.sap.loadResource=function(s,m){var i,l,i1,j1,k1;if(typeof s==="string"){m=m||{};}else{m=s||{};s=m.name;if(!s&&m.url){s=b1(m.url);}}m=jQuery.extend({failOnError:true,async:false},m);i=m.dataType;if(i==null&&s){i=(i=X.exec(s))&&i[1];}k1=m.async?new jQuery.Deferred():null;function l1(d,e){if(d==null&&m.failOnError){e=e||new Error("no data returned for "+s);if(m.async){k1.reject(e);jQuery.sap.log.error(e);return d;}throw e;}if(m.async){k1.resolve(d);}return d;}function m1(d){var n1=jQuery.ajaxSettings.converters["text "+i];if(typeof n1==="function"){d=n1(d);}return l1(d);}if(s&&M[s]){l=M[s].data;M[s].state=w;}if(l!=null){if(m.async){setTimeout(function(){m1(l);},0);}else{l=m1(l);}}else{jQuery.ajax({url:i1=m.url||a1(s),async:m.async,dataType:i,headers:m.headers,success:function(d,n1,o1){l=l1(d);},error:function(d,n1,o1){j1=new Error("resource "+s+" could not be loaded from "+i1+". Check for 'file not found' or parse errors. Reason: "+o1);j1.status=n1;j1.error=o1;j1.statusCode=d.status;l=l1(null,j1);}});}return m.async?window.Promise.resolve(k1):l;};jQuery.sap._loadJSResourceAsync=function(s,i){return new Promise(function(d,l){var m=M[s]||(M[s]={state:r});var i1=m.url=a1(s);m.state=L;var j1=window.document.createElement('SCRIPT');j1.src=i1;j1.setAttribute("data-sap-ui-module",s);j1.addEventListener('load',function(e){jQuery.sap.log.info("Javascript resource loaded: "+s);m.state=R;d();});j1.addEventListener('error',function(e){jQuery.sap.log.error("failed to load Javascript resource: "+s);m.state=A;if(i){d();}else{l();}});q(j1);});};return function(){var m={};jQuery.each(U,function(s,d){m[s]=d.url;});return{modules:M,prefixes:m};};}());function q(o){var d=window.document.getElementsByTagName("head")[0];if(d){d.appendChild(o);}}jQuery.sap.includeScript=function includeScript(U,i,l,d){var s=window.document.createElement("script");s.src=U;s.type="text/javascript";if(i){s.id=i;}if(!!sap.ui.Device.browser.internet_explorer&&sap.ui.Device.browser.version<9){if(l){s.onreadystatechange=function(){if(s.readyState==="loaded"||s.readyState==="complete"){l();s.onreadystatechange=null;}};}}else{if(l){jQuery(s).load(l);}if(d){jQuery(s).error(d);}}var o;if((i&&(o=jQuery.sap.domById(i))&&o.tagName==="SCRIPT")){jQuery(o).remove();}q(s);};var I;var t=jQuery.sap._mIEStyleSheets={};jQuery.sap.includeStyleSheet=function includeStyleSheet(U,s,l,d){var m=function(U,s,l,d){var L=document.createElement("link");L.type="text/css";L.rel="stylesheet";L.href=U;if(s){L.id=s;}var i=function(){jQuery(L).attr("sap-ui-ready","false");if(d){d();}};var r=function(){jQuery(L).attr("sap-ui-ready","true");if(l){l();}};if(!!sap.ui.Device.browser.internet_explorer){var v=r;r=function(w){var R;try{R=w.target&&w.target.sheet&&w.target.sheet.rules;}catch(z){}if(R&&R.length>0){v();}else{i();}};}jQuery(L).load(r);jQuery(L).error(i);return L;};var n=function(U,s,l,d){if(sap.ui.Device.browser.internet_explorer&&sap.ui.Device.browser.version<=9&&document.styleSheets.length>=28){var r=URI.parse(document.URL).path;var A=new URI(U).absoluteTo(r).toString();if(s){var v=t[s];if(v&&v.href===A){return;}}jQuery.sap.log.warning("Stylesheet "+(s?s+" ":"")+"not added as LINK because of IE limits",U,"jQuery.sap.includeStyleSheet");if(!I){I=document.createStyleSheet();}var w=false;for(var i=0;i<I.imports.length;i++){var z=I.imports[i];if(z.imports.length<30){z.addImport(A);w=true;break;}}if(!w){I.addImport(A);}if(s){t[s]={href:A};}var B=document.getElementById('sap-ui-core-customcss');if(!jQuery.isEmptyObject(B)){q(B);}}else{var L=m(U,s,l,d);if(jQuery('#sap-ui-core-customcss').length>0){jQuery('#sap-ui-core-customcss').first().before(jQuery(L));}else{q(L);}}};var o=jQuery.sap.domById(s);if(o&&o.tagName==="LINK"&&o.rel==="stylesheet"){if(l||d||o.href!==URI(String(U),URI().search("")).toString()){jQuery(o).replaceWith(m(U,s,l,d));}}else{n(U,s,l,d);}};if(!(k.productive===true||k.productive==="true"||k.productive==="x")){jQuery(function(){jQuery(document.body).keydown(function(e){if(e.keyCode==80&&e.shiftKey&&e.altKey&&e.ctrlKey){try{jQuery.sap.require("sap.ui.debug.TechnicalInfo");}catch(d){return;}sap.ui.debug.TechnicalInfo.open(function(){var i=p();return{modules:i.modules,prefixes:i.prefixes,config:k};});}});});jQuery(function(){jQuery(document.body).keydown(function(e){if(e.keyCode==83&&e.shiftKey&&e.altKey&&e.ctrlKey){try{jQuery.sap.require("sap.ui.core.support.Support");var s=sap.ui.core.support.Support.getStub();if(s.getType()!=sap.ui.core.support.Support.StubType.APPLICATION){return;}s.openSupportTool();}catch(d){}}});});}if(/sap-ui-xx-e2e-trace=(true|x|X)/.test(location.search)){jQuery.sap.require("sap.ui.core.support.trace.E2eTraceLib"+"");}if(!jQuery.support){jQuery.support={};}jQuery.extend(jQuery.support,{touch:sap.ui.Device.support.touch});var P=["Webkit","ms","Moz"];var u=document.documentElement.style;var x=function(d,l){if(jQuery.support[d]===undefined){if(u[l]!==undefined){jQuery.support[d]=true;if(l==="boxFlex"||l==="flexOrder"||l==="flexGrow"){if(!sap.ui.Device.browser.chrome||sap.ui.Device.browser.version>28){jQuery.support.flexBoxPrefixed=false;}}return;}else{l=l.charAt(0).toUpperCase()+l.slice(1);for(var i in P){if(u[P[i]+l]!==undefined){jQuery.support[d]=true;return;}}}jQuery.support[d]=false;}};x("cssTransforms","transform");x("cssTransforms3d","perspective");x("cssTransitions","transition");x("cssAnimations","animationName");if(jQuery.support.cssGradients===undefined){var E=document.createElement('div'),u=E.style;try{u.backgroundImage="linear-gradient(left top, red, white)";u.backgroundImage="-moz-linear-gradient(left top, red, white)";u.backgroundImage="-webkit-linear-gradient(left top, red, white)";u.backgroundImage="-ms-linear-gradient(left top, red, white)";u.backgroundImage="-webkit-gradient(linear, left top, right bottom, from(red), to(white))";}catch(e){}jQuery.support.cssGradients=(u.backgroundImage&&u.backgroundImage.indexOf("gradient")>-1);E=null;}jQuery.support.flexBoxPrefixed=true;x("flexBoxLayout","boxFlex");if(u.msFlexOrder!==undefined){jQuery.support.ie10FlexBoxLayout=true;}x("newFlexBoxLayout","flexGrow");if(jQuery.support.flexBoxLayout||jQuery.support.newFlexBoxLayout||jQuery.support.ie10FlexBoxLayout){jQuery.support.hasFlexBoxSupport=true;}else{jQuery.support.hasFlexBoxSupport=false;}function y(){function M(i,s,l,m){this.id=i;this.info=s;this.start=l;this.end=m;this.pause=0;this.resume=0;this.duration=0;this.time=0;}var A=false;var d=jQuery.ajax;this.getActive=function(){return A;};this.setActive=function(o){if(A==o){return A;}A=o;if(A){jQuery.ajax=function(i,l){jQuery.sap.measure.start(i.url,"Request for "+i.url);var X=d.apply(this,arguments);jQuery.sap.measure.end(i.url);return X;};}else if(d){jQuery.ajax=d;}return A;};this.setActive(/sap-ui-measure=(true|x|X)/.test(location.search));this.mMeasurements={};this.start=function(i,s){if(!A){return;}var T=new Date().getTime();var m=new M(i,s,T,0);if(m){this.mMeasurements[i]=m;return({id:m.id,info:m.info,start:m.start});}else{return false;}};this.pause=function(i){if(!A){return;}var T=new Date().getTime();var m=this.mMeasurements[i];if(m&&m.end>0){return false;}if(m&&m.pause==0){m.pause=T;if(m.pause>=m.resume&&m.resume>0){m.duration=m.duration+m.pause-m.resume;m.resume=0;}else if(m.pause>=m.start){m.duration=m.pause-m.start;}}if(m){return({id:m.id,info:m.info,start:m.start,pause:m.pause});}else{return false;}};this.resume=function(i){if(!A){return;}var T=new Date().getTime();var m=this.mMeasurements[i];if(m&&m.pause>0){m.pause=0;m.resume=T;}if(m){return({id:m.id,info:m.info,start:m.start,resume:m.resume});}else{return false;}};this.end=function(i){if(!A){return;}var T=new Date().getTime();var m=this.mMeasurements[i];if(m&&!m.end){m.end=T;if(m.end>=m.resume&&m.resume>0){m.duration=m.duration+m.end-m.resume;m.resume=0;}else if(m.pause>0){m.pause=0;}else if(m.end>=m.start){m.duration=m.end-m.start;}if(m.end>=m.start){m.time=m.end-m.start;}}if(m){return({id:m.id,info:m.info,start:m.start,end:m.end,time:m.time,duration:m.duration});}else{return false;}};this.getMeasurement=function(i){if(!A){return;}var m=this.mMeasurements[i];if(m){return({id:m.id,info:m.info,start:m.start,end:m.end,time:m.time,duration:m.duration});}else{return false;}};this.clear=function(){if(!A){return;}this.mMeasurements={};};this.remove=function(i){if(!A){return;}delete this.mMeasurements[i];};this.getAllMeasurements=function(){if(!A){return;}var m=[];jQuery.each(this.mMeasurements,function(i,o){m.push({id:o.id,info:o.info,start:o.start,end:o.end,duration:o.duration,time:o.time});});return m;};this.add=function(i,s,l,m,T,D){if(!A){return;}var o=new M(i,s,l,m);o.time=T;o.duration=D;if(o){this.mMeasurements[i]=o;return({id:o.id,info:o.info,start:o.start,end:o.end,time:o.time,duration:o.duration});}else{return false;}};}jQuery.sap.measure=new y();var F=function(s){this.mSettings=s||{};this.sMode=this.mSettings.mode||F.Mode.ALLOW;this.fnCallback=this.mSettings.callback;this.iTimeout=this.mSettings.timeout||10000;this.bBlockEvents=this.mSettings.blockEvents!==false;this.bShowBlockLayer=this.mSettings.showBlockLayer!==false;this.bAllowSameOrigin=this.mSettings.allowSameOrigin!==false;this.sParentOrigin='';this.bUnlocked=false;this.bRunnable=false;this.bParentUnlocked=false;this.bParentResponded=false;this.sStatus="pending";this.aFPChilds=[];var d=this;this.iTimer=setTimeout(function(){d._callback(false);},this.iTimeout);var H=function(){d._handlePostMessage.apply(d,arguments);};F.__window.addEventListener('message',H);if(F.__parent===F.__self||F.__parent==null||this.sMode===F.Mode.ALLOW){this._applyState(true,true);}else{this._lock();if(this.sMode===F.Mode.DENY){this._callback(false);return;}if(this.bAllowSameOrigin){try{var o=F.__parent;var O=false;var T=true;do{var i=o.document.domain;if(o==F.__top){if(i!=undefined){O=true;}break;}o=o.parent;}while(T);if(O){this._applyState(true,true);}}catch(e){this._sendRequireMessage();}}else{this._sendRequireMessage();}}};F.Mode={TRUSTED:'trusted',ALLOW:'allow',DENY:'deny'};F.__window=window;F.__parent=parent;F.__self=self;F.__top=top;F._events=["mousedown","mouseup","click","dblclick","mouseover","mouseout","touchstart","touchend","touchmove","touchcancel","keydown","keypress","keyup"];F.prototype.match=function(s,d){if(!(/\*/i.test(d))){return s==d;}else{d=d.replace(/\//gi,"\\/");d=d.replace(/\./gi,"\\.");d=d.replace(/\*/gi,".*");d=d.replace(/:\.\*$/gi,":\\d*");if(d.substr(d.length-1,1)!=='$'){d=d+'$';}if(d.substr(0,1)!=='^'){d='^'+d;}var r=new RegExp(d,'i');return r.test(s);}};F._lockHandler=function(o){o.stopPropagation();o.preventDefault();};F.prototype._createBlockLayer=function(){if(document.readyState=="complete"){var l=document.createElement("div");l.style.position="absolute";l.style.top="0px";l.style.bottom="0px";l.style.left="0px";l.style.right="0px";l.style.opacity="0";l.style.backgroundColor="white";l.style.zIndex=2147483647;document.body.appendChild(l);this._lockDiv=l;}};F.prototype._setCursor=function(){if(this._lockDiv){this._lockDiv.style.cursor=this.sStatus=="denied"?"not-allowed":"wait";}};F.prototype._lock=function(){var d=this;if(this.bBlockEvents){for(var i=0;i<F._events.length;i++){document.addEventListener(F._events[i],F._lockHandler,true);}}if(this.bShowBlockLayer){this._blockLayer=function(){d._createBlockLayer();d._setCursor();};if(document.readyState=="complete"){this._blockLayer();}else{document.addEventListener("readystatechange",this._blockLayer);}}};F.prototype._unlock=function(){if(this.bBlockEvents){for(var i=0;i<F._events.length;i++){document.removeEventListener(F._events[i],F._lockHandler,true);}}if(this.bShowBlockLayer){document.removeEventListener("readystatechange",this._blockLayer);if(this._lockDiv){document.body.removeChild(this._lockDiv);delete this._lockDiv;}}};F.prototype._callback=function(s){this.sStatus=s?"allowed":"denied";this._setCursor();clearTimeout(this.iTimer);if(typeof this.fnCallback==='function'){this.fnCallback.call(null,s);}};F.prototype._applyState=function(i,d){if(this.bUnlocked){return;}if(i){this.bRunnable=true;}if(d){this.bParentUnlocked=true;}if(!this.bRunnable||!this.bParentUnlocked){return;}this._unlock();this._callback(true);this._notifyChildFrames();this.bUnlocked=true;};F.prototype._applyTrusted=function(T){if(T){this._applyState(true,false);}else{this._callback(false);}};F.prototype._check=function(d){if(this.bRunnable){return;}var T=false;if(this.bAllowSameOrigin&&this.sParentOrigin&&F.__window.document.URL.indexOf(this.sParentOrigin)==0){T=true;}else if(this.mSettings.whitelist&&this.mSettings.whitelist.length!=0){var H=this.sParentOrigin.split('//')[1];H=H.split(':')[0];for(var i=0;i<this.mSettings.whitelist.length;i++){var m=H.indexOf(this.mSettings.whitelist[i]);if(m!=-1&&H.substring(m)==this.mSettings.whitelist[i]){T=true;break;}}}if(T){this._applyTrusted(T);}else if(this.mSettings.whitelistService){var l=this;var n=new XMLHttpRequest();var o=this.mSettings.whitelistService+'?parentOrigin='+encodeURIComponent(this.sParentOrigin);n.onreadystatechange=function(){if(n.readyState==4){l._handleXmlHttpResponse(n,d);}};n.open('GET',o,true);n.setRequestHeader('Accept','application/json');n.send();}else{this._callback(false);}};F.prototype._handleXmlHttpResponse=function(d,i){if(d.status===200){var T=false;var r=d.responseText;var R=JSON.parse(r);if(R.active==false){this._applyState(true,true);}else if(i){return;}else{if(this.match(this.sParentOrigin,R.origin)){T=R.framing;}this._applyTrusted(T);}}else{jQuery.sap.log.warning("The configured whitelist service is not available: "+d.status);this._callback(false);}};F.prototype._notifyChildFrames=function(){for(var i=0;i<this.aFPChilds.length;i++){this.aFPChilds[i].postMessage('SAPFrameProtection*parent-unlocked','*');}};F.prototype._sendRequireMessage=function(){F.__parent.postMessage('SAPFrameProtection*require-origin','*');if(this.mSettings.whitelistService){setTimeout(function(){if(!this.bParentResponded){this._check(true);}}.bind(this),10);}};F.prototype._handlePostMessage=function(o){var s=o.source,d=o.data;if(s===F.__self||s==null||typeof d!=="string"||d.indexOf("SAPFrameProtection*")===-1){return;}if(s===F.__parent){this.bParentResponded=true;if(!this.sParentOrigin){this.sParentOrigin=o.origin;this._check();}if(d=="SAPFrameProtection*parent-unlocked"){this._applyState(false,true);}}else if(s.parent===F.__self&&d=="SAPFrameProtection*require-origin"&&this.bUnlocked){s.postMessage("SAPFrameProtection*parent-unlocked","*");}else{s.postMessage("SAPFrameProtection*parent-origin","*");this.aFPChilds.push(s);}};jQuery.sap.FrameOptions=F;}());
jQuery.sap.globalEval=function(){eval(arguments[0]);};