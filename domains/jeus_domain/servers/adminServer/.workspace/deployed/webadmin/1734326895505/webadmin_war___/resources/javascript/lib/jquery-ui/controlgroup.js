/*!
 * jQuery UI Controlgroup 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

(function(e){typeof define=="function"&&define.amd?define(["jquery","./widget"],e):e(jQuery)})(function(e){var t=/ui-corner-([a-z]){2,6}/g;return e.widget("ui.controlgroup",{version:"1.12.1",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:!0,items:{button:"input[type=button], input[type=submit], input[type=reset], button, a",controlgroupLabel:".ui-controlgroup-label",checkboxradio:"input[type='checkbox'], input[type='radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:function(){this._enhance()},_enhance:function(){this.element.attr("role","toolbar"),this.refresh()},_destroy:function(){this._callChildMethod("destroy"),this.childWidgets.removeData("ui-controlgroup-data"),this.element.removeAttr("role"),this.options.items.controlgroupLabel&&this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()},_initWidgets:function(){var t=this,n=[];e.each(this.options.items,function(r,i){var s,o={};if(!i)return;if(r==="controlgroupLabel"){s=t.element.find(i),s.each(function(){var t=e(this);if(t.children(".ui-controlgroup-label-contents").length)return;t.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")}),t._addClass(s,null,"ui-widget ui-widget-content ui-state-default"),n=n.concat(s.get());return}if(!e.fn[r])return;t["_"+r+"Options"]?o=t["_"+r+"Options"]("middle"):o={classes:{}},t.element.find(i).each(function(){var i=e(this),s=i[r]("instance"),u=e.widget.extend({},o);if(r==="button"&&i.parent(".ui-spinner").length)return;s||(s=i[r]()[r]("instance")),s&&(u.classes=t._resolveClassesValues(u.classes,s)),i[r](u);var a=i[r]("widget");e.data(a[0],"ui-controlgroup-data",s?s:i[r]("instance")),n.push(a[0])})}),this.childWidgets=e(e.unique(n)),this._addClass(this.childWidgets,"ui-controlgroup-item")},_callChildMethod:function(t){this.childWidgets.each(function(){var n=e(this),r=n.data("ui-controlgroup-data");r&&r[t]&&r[t]()})},_updateCornerClass:function(e,t){var n="ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",r=this._buildSimpleOptions(t,"label").classes.label;this._removeClass(e,null,n),this._addClass(e,null,r)},_buildSimpleOptions:function(e,t){var n=this.options.direction==="vertical",r={classes:{}};return r.classes[t]={middle:"",first:"ui-corner-"+(n?"top":"left"),last:"ui-corner-"+(n?"bottom":"right"),only:"ui-corner-all"}[e],r},_spinnerOptions:function(e){var t=this._buildSimpleOptions(e,"ui-spinner");return t.classes["ui-spinner-up"]="",t.classes["ui-spinner-down"]="",t},_buttonOptions:function(e){return this._buildSimpleOptions(e,"ui-button")},_checkboxradioOptions:function(e){return this._buildSimpleOptions(e,"ui-checkboxradio-label")},_selectmenuOptions:function(e){var t=this.options.direction==="vertical";return{width:t?"auto":!1,classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(t?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(t?"top":"left")},last:{"ui-selectmenu-button-open":t?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(t?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[e]}},_resolveClassesValues:function(n,r){var i={};return e.each(n,function(s){var o=r.options.classes[s]||"";o=e.trim(o.replace(t,"")),i[s]=(o+" "+n[s]).replace(/\s+/g," ")}),i},_setOption:function(e,t){e==="direction"&&this._removeClass("ui-controlgroup-"+this.options.direction),this._super(e,t);if(e==="disabled"){this._callChildMethod(t?"disable":"enable");return}this.refresh()},refresh:function(){var t,n=this;this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction),this.options.direction==="horizontal"&&this._addClass(null,"ui-helper-clearfix"),this._initWidgets(),t=this.childWidgets,this.options.onlyVisible&&(t=t.filter(":visible")),t.length&&(e.each(["first","last"],function(e,r){var i=t[r]().data("ui-controlgroup-data");if(i&&n["_"+i.widgetName+"Options"]){var s=n["_"+i.widgetName+"Options"](t.length===1?"only":r);s.classes=n._resolveClassesValues(s.classes,i),i.element[i.widgetName](s)}else n._updateCornerClass(t[r](),r)}),this._callChildMethod("refresh"))}})});