/*!
 * jQuery UI Disable Selection 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

(function(e){typeof define=="function"&&define.amd?define(["jquery","./version"],e):e(jQuery)})(function(e){return e.fn.extend({disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.off(".ui-disableSelection")}})});