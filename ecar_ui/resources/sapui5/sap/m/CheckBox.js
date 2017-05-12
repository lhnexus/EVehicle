/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./Label','./library','sap/ui/core/Control','sap/ui/core/EnabledPropagator'],function(q,L,l,C,E){"use strict";var a=C.extend("sap.m.CheckBox",{metadata:{library:"sap.m",properties:{selected:{type:"boolean",group:"Data",defaultValue:false},enabled:{type:"boolean",group:"Behavior",defaultValue:true},name:{type:"string",group:"Misc",defaultValue:null},text:{type:"string",group:"Appearance",defaultValue:null},textDirection:{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:sap.ui.core.TextDirection.Inherit},textAlign:{type:"sap.ui.core.TextAlign",group:"Appearance",defaultValue:sap.ui.core.TextAlign.Begin},width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:''},activeHandling:{type:"boolean",group:"Misc",defaultValue:true},editable:{type:"boolean",group:"Behavior",defaultValue:true}},associations:{ariaDescribedBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaDescribedBy"},ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaLabelledBy"}},events:{select:{parameters:{selected:{type:"boolean"}}}}}});E.call(a.prototype);a.prototype.init=function(){this.addActiveState(this);q.sap.require("sap.ui.core.IconPool");sap.ui.core.IconPool.insertFontFaceStyle();};a.prototype.onAfterRendering=function(){if(!this.getText()&&!this.$().attr("aria-labelledby")){this.$().attr("aria-label"," ");}};a.prototype.ontouchstart=function(e){e.originalEvent._sapui_handledByControl=true;};a.prototype.setSelected=function(s){s=!!s;if(s==this.getSelected()){return this;}this.$("CbBg").toggleClass("sapMCbMarkChecked",s);this.$().attr("aria-checked",s);var c=this.getDomRef("CB");if(c){s?c.setAttribute('checked','checked'):c.removeAttribute('checked');}this.setProperty("selected",s,true);return this;};a.prototype.ontap=function(e){if(this.getEnabled()&&this.getEditable()){var s=!this.getSelected();this.setSelected(s);this.fireSelect({selected:s});}};a.prototype.addActiveState=function(c){if(sap.ui.Device.os.blackberry||(sap.ui.Device.os.android&&(sap.ui.Device.os.versionStr.match(/[23]\./)))){c.addDelegate({ontouchstart:function(e){q(c.getDomRef()).addClass("sapMActive");},ontouchend:function(e){q(c.getDomRef()).removeClass("sapMActive");}});}};a.prototype._setLabelProperty=function(p,P,s){var h=!!this._oLabel,u=q.sap.charToUpperCase(p,0);this.setProperty(p,P,h&&s);if(!h){this._oLabel=new L(this.getId()+"-label",{labelFor:this.getId()}).addStyleClass("sapMCbLabel").setParent(this,null,true);}this._oLabel["set"+u](this["get"+u]());return this;};a.prototype.setText=function(t){this._setLabelProperty("text",t,true);};a.prototype.setWidth=function(w){this._setLabelProperty("width",w,true);};a.prototype.setTextDirection=function(d){this._setLabelProperty("textDirection",d);};a.prototype.setTextAlign=function(A){this._setLabelProperty("textAlign",A);};a.prototype.exit=function(){delete this._iTabIndex;if(this._oLabel){this._oLabel.destroy();}};a.prototype.onsapspace=function(e){this.ontap(e);if(e){e.preventDefault();e.stopPropagation();}};a.prototype.onsapenter=function(e){this.ontap(e);};a.prototype.setTabIndex=function(t){this._iTabIndex=t;this.$("CbBg").attr("tabindex",t);return this;};a.prototype.getTabIndex=function(){if(this.hasOwnProperty("_iTabIndex")){return this._iTabIndex;}return this.getEnabled()?0:-1;};return a;},true);
