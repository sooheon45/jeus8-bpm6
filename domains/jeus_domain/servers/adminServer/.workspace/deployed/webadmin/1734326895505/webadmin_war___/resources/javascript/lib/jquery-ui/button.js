/*!
 * jQuery UI Button 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

(function(e){typeof define=="function"&&define.amd?define(["jquery","./controlgroup","./checkboxradio","./keycode","./widget"],e):e(jQuery)})(function(e){return e.widget("ui.button",{version:"1.12.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var e,t=this._super()||{};return this.isInput=this.element.is("input"),e=this.element[0].disabled,e!=null&&(t.disabled=e),this.originalLabel=this.isInput?this.element.val():this.element.html(),this.originalLabel&&(t.label=this.originalLabel),t},_create:function(){!this.option.showLabel&!this.options.icon&&(this.options.showLabel=!0),this.options.disabled==null&&(this.options.disabled=this.element[0].disabled||!1),this.hasTitle=!!this.element.attr("title"),this.options.label&&this.options.label!==this.originalLabel&&(this.isInput?this.element.val(this.options.label):this.element.html(this.options.label)),this._addClass("ui-button","ui-widget"),this._setOption("disabled",this.options.disabled),this._enhance(),this.element.is("a")&&this._on({keyup:function(t){t.keyCode===e.ui.keyCode.SPACE&&(t.preventDefault(),this.element[0].click?this.element[0].click():this.element.trigger("click"))}})},_enhance:function(){this.element.is("button")||this.element.attr("role","button"),this.options.icon&&(this._updateIcon("icon",this.options.icon),this._updateTooltip())},_updateTooltip:function(){this.title=this.element.attr("title"),!this.options.showLabel&&!this.title&&this.element.attr("title",this.options.label)},_updateIcon:function(t,n){var r=t!=="iconPosition",i=r?this.options.iconPosition:n,s=i==="top"||i==="bottom";this.icon?r&&this._removeClass(this.icon,null,this.options.icon):(this.icon=e("<span>"),this._addClass(this.icon,"ui-button-icon","ui-icon"),this.options.showLabel||this._addClass("ui-button-icon-only")),r&&this._addClass(this.icon,null,n),this._attachIcon(i),s?(this._addClass(this.icon,null,"ui-widget-icon-block"),this.iconSpace&&this.iconSpace.remove()):(this.iconSpace||(this.iconSpace=e("<span> </span>"),this._addClass(this.iconSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-widget-icon-block"),this._attachIconSpace(i))},_destroy:function(){this.element.removeAttr("role"),this.icon&&this.icon.remove(),this.iconSpace&&this.iconSpace.remove(),this.hasTitle||this.element.removeAttr("title")},_attachIconSpace:function(e){this.icon[/^(?:end|bottom)/.test(e)?"before":"after"](this.iconSpace)},_attachIcon:function(e){this.element[/^(?:end|bottom)/.test(e)?"append":"prepend"](this.icon)},_setOptions:function(e){var t=e.showLabel===undefined?this.options.showLabel:e.showLabel,n=e.icon===undefined?this.options.icon:e.icon;!t&&!n&&(e.showLabel=!0),this._super(e)},_setOption:function(e,t){e==="icon"&&(t?this._updateIcon(e,t):this.icon&&(this.icon.remove(),this.iconSpace&&this.iconSpace.remove())),e==="iconPosition"&&this._updateIcon(e,t),e==="showLabel"&&(this._toggleClass("ui-button-icon-only",null,!t),this._updateTooltip()),e==="label"&&(this.isInput?this.element.val(t):(this.element.html(t),this.icon&&(this._attachIcon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosition)))),this._super(e,t),e==="disabled"&&(this._toggleClass(null,"ui-state-disabled",t),this.element[0].disabled=t,t&&this.element.blur())},refresh:function(){var e=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");e!==this.options.disabled&&this._setOptions({disabled:e}),this._updateTooltip()}}),e.uiBackCompat!==!1&&(e.widget("ui.button",e.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){this.options.showLabel&&!this.options.text&&(this.options.showLabel=this.options.text),!this.options.showLabel&&this.options.text&&(this.options.text=this.options.showLabel),!this.options.icon&&(this.options.icons.primary||this.options.icons.secondary)?this.options.icons.primary?this.options.icon=this.options.icons.primary:(this.options.icon=this.options.icons.secondary,this.options.iconPosition="end"):this.options.icon&&(this.options.icons.primary=this.options.icon),this._super()},_setOption:function(e,t){if(e==="text"){this._super("showLabel",t);return}e==="showLabel"&&(this.options.text=t),e==="icon"&&(this.options.icons.primary=t),e==="icons"&&(t.primary?(this._super("icon",t.primary),this._super("iconPosition","beginning")):t.secondary&&(this._super("icon",t.secondary),this._super("iconPosition","end"))),this._superApply(arguments)}}),e.fn.button=function(t){return function(){return!this.length||this.length&&this[0].tagName!=="INPUT"||this.length&&this[0].tagName==="INPUT"&&this.attr("type")!=="checkbox"&&this.attr("type")!=="radio"?t.apply(this,arguments):(e.ui.checkboxradio||e.error("Checkboxradio widget missing"),arguments.length===0?this.checkboxradio({icon:!1}):this.checkboxradio.apply(this,arguments))}}(e.fn.button),e.fn.buttonset=function(){return e.ui.controlgroup||e.error("Controlgroup widget missing"),arguments[0]==="option"&&arguments[1]==="items"&&arguments[2]?this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]):arguments[0]==="option"&&arguments[1]==="items"?this.controlgroup.apply(this,[arguments[0],"items.button"]):(typeof arguments[0]=="object"&&arguments[0].items&&(arguments[0].items={button:arguments[0].items}),this.controlgroup.apply(this,arguments))}),e.ui.button});