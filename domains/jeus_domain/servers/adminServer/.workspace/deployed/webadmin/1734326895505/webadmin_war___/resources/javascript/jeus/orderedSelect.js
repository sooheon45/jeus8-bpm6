var bind=function(e,t){return function(){return e.apply(t,arguments)}};require(["jquery"],function(e){var t,n;return n=function(e){return e.preventDefault(),e.stopPropagation()},t=function(){function t(t){this._active=bind(this._active,this),this._down=bind(this._down,this),this._up=bind(this._up,this),this._removeall=bind(this._removeall,this),this._remove=bind(this._remove,this),this._addall=bind(this._addall,this),this._add=bind(this._add,this),this.main=e(t),this.name=this.main.data("name"),this.unselected=this.main.find(".unselected"),this.selected=this.main.find(".selected"),this._init()}return t.prototype._init=function(){return this.main.find("button[name=addall]").on("click",this._addall),this.main.find("button[name=add]").on("click",this._add),this.main.find("button[name=removeall]").on("click",this._removeall),this.main.find("button[name=remove]").on("click",this._remove),this.main.find("button[name=up]").on("click",this._up),this.main.find("button[name=down]").on("click",this._down),this.main.on("click","li",this._active)},t.prototype._add=function(t){return n(t),this.unselected.find(".active").each(function(t){return function(n,r){var i;return i=e(r).text(),t.selected.append("<li class='active'>"+i+"<input type='hidden' name='"+t.name+"' value='"+i+"'/></li>")}}(this)),this.unselected.find(".active").remove()},t.prototype._addall=function(t){return n(t),this.unselected.find("li").each(function(t){return function(n,r){var i;return i=e(r).text(),t.selected.append("<li class='active'>"+i+"<input type='hidden' name='"+t.name+"' value='"+i+"'/></li>")}}(this)),this.unselected.find("li").remove()},t.prototype._remove=function(t){return n(t),this.selected.find(".active").each(function(t){return function(n,r){var i;return i=e(r).text(),t.unselected.append("<li class='active'>"+i+"</li>")}}(this)),this.selected.find(".active").remove()},t.prototype._removeall=function(t){return n(t),this.selected.find("li").each(function(t){return function(n,r){var i;return i=e(r).text(),t.unselected.append("<li class='active'>"+i+"</li>")}}(this)),this.selected.find("li").remove()},t.prototype._up=function(t){return n(t),this.selected.find(".active").each(function(t){return function(t,n){var r;return r=e(n),r.prev().before(r)}}(this))},t.prototype._down=function(t){return n(t),this.selected.find(".active").each(function(t){return function(t,n){var r;return r=e(n),r.next().after(r)}}(this))},t.prototype._active=function(t){var r;return n(t),r=e(t.currentTarget),this.main.find("ul li").each(function(){return e(this).removeClass("active")}),r.addClass("active")},t}(),e(".orderedSelect").each(function(){return new t(e(this))})});