/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global'],function(q){"use strict";var s=!!(window.JSON&&JSON.parse&&JSON.stringify);var S="state.key_";var f=function(a,b){var t="unknown",P=b||S;P+="-";var T=P+"___sapui5TEST___",o;if(!a||typeof(a)==="string"){t=a||"session";try{o=window[t+"Storage"];}catch(e){o=null;}try{if(o){o.setItem(T,"1");o.removeItem(T);}}catch(e){o=null;}}else if(typeof(a)==="object"){t=a.getType?a.getType():"unknown";o=a;}var c=!!o;this.isSupported=function(){if(!c){return false;}if(typeof(o.isSupported)=="function"){return o.isSupported();}return true;};this.put=function(i,d){if(this.isSupported()&&i){try{o.setItem(P+i,s?JSON.stringify(d):d);return true;}catch(e){return false;}}else{return false;}};this.get=function(i){if(this.isSupported()&&i){try{var I=o.getItem(P+i);return s?JSON.parse(I):I;}catch(e){return null;}}else{return null;}};this.remove=function(i){if(this.isSupported()&&i){try{o.removeItem(P+i);return true;}catch(e){return false;}}else{return false;}};this.removeAll=function(I){if(this.isSupported()&&o.length&&(document.addEventListener?/function/:/function|object/).test(typeof(o.key))){try{var l=o.length;var k=[];var d,i;var p=P+(I||"");for(i=0;i<l;i++){d=o.key(i);if(d&&d.indexOf(p)==0){k.push(d);}}for(i=0;i<k.length;i++){o.removeItem(k[i]);}return true;}catch(e){return false;}}else{return false;}};this.clear=function(){if(this.isSupported()){try{o.clear();return true;}catch(e){return false;}}else{return false;}};this.getType=function(){return t;};};var m={};q.sap.storage=function(o,i){if(!o){o=q.sap.storage.Type.session;}if(typeof(o)==="string"&&q.sap.storage.Type[o]){var k=o;if(i&&i!=S){k=o+"_"+i;}return m[k]||(m[k]=new f(o,i));}return new f(o,i);};q.sap.storage.Type={local:"local",session:"session",global:"global"};f.apply(q.sap.storage);m[q.sap.storage.Type.session]=q.sap.storage;return q;},false);
