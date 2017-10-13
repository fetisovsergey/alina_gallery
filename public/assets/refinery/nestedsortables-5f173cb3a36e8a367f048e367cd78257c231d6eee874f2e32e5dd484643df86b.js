!function(t){t.widget("mjs.nestedSortable",t.extend({},t.ui.sortable.prototype,{options:{tabSize:20,disableNesting:"mjs-nestedSortable-no-nesting",errorClass:"mjs-nestedSortable-error",doNotClear:!1,listType:"ol",maxLevels:0,protectRoot:!1,rootID:null,rtl:!1,isAllowed:function(){return!0}},_create:function(){if(this.element.data("sortable",this.element.data("nestedSortable")),!this.element.is(this.options.listType))throw new Error("nestedSortable: Please check the listType option is set to your actual list type");return t.ui.sortable.prototype._create.apply(this,arguments)},destroy:function(){return this.element.removeData("nestedSortable").unbind(".nestedSortable"),t.ui.sortable.prototype.destroy.apply(this,arguments)},_mouseDrag:function(e){this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs);var i=this.options;if(this.options.scroll){var n=!1;this.scrollParent[0]!=document&&"HTML"!=this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<i.scrollSensitivity?this.scrollParent[0].scrollTop=n=this.scrollParent[0].scrollTop+i.scrollSpeed:e.pageY-this.overflowOffset.top<i.scrollSensitivity&&(this.scrollParent[0].scrollTop=n=this.scrollParent[0].scrollTop-i.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<i.scrollSensitivity?this.scrollParent[0].scrollLeft=n=this.scrollParent[0].scrollLeft+i.scrollSpeed:e.pageX-this.overflowOffset.left<i.scrollSensitivity&&(this.scrollParent[0].scrollLeft=n=this.scrollParent[0].scrollLeft-i.scrollSpeed)):(e.pageY-t(document).scrollTop()<i.scrollSensitivity?n=t(document).scrollTop(t(document).scrollTop()-i.scrollSpeed):t(window).height()-(e.pageY-t(document).scrollTop())<i.scrollSensitivity&&(n=t(document).scrollTop(t(document).scrollTop()+i.scrollSpeed)),e.pageX-t(document).scrollLeft()<i.scrollSensitivity?n=t(document).scrollLeft(t(document).scrollLeft()-i.scrollSpeed):t(window).width()-(e.pageX-t(document).scrollLeft())<i.scrollSensitivity&&(n=t(document).scrollLeft(t(document).scrollLeft()+i.scrollSpeed))),n!==!1&&t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)}this.positionAbs=this._convertPositionTo("absolute");var o=this.placeholder.offset().top;this.options.axis&&"y"==this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"==this.options.axis||(this.helper[0].style.top=this.position.top+"px");for(var s=this.items.length-1;s>=0;s--){var r=this.items[s],a=r.item[0],l=this._intersectsWithPointer(r);if(l&&!(a==this.currentItem[0]||this.placeholder[1==l?"next":"prev"]()[0]==a||t.contains(this.placeholder[0],a)||"semi-dynamic"==this.options.type&&t.contains(this.element[0],a))){if(t(a).mouseenter(),this.direction=1==l?"down":"up","pointer"!=this.options.tolerance&&!this._intersectsWithSides(r))break;t(a).mouseleave(),this._rearrange(e,r),this._clearEmpty(a),this._trigger("change",e,this._uiHash());break}}var c=this.placeholder[0].parentNode.parentNode&&t(this.placeholder[0].parentNode.parentNode).closest(".ui-sortable").length?t(this.placeholder[0].parentNode.parentNode):null,d=this._getLevel(this.placeholder),h=this._getChildLevels(this.helper),u=this.placeholder[0].previousSibling?t(this.placeholder[0].previousSibling):null;if(null!=u)for(;"li"!=u[0].nodeName.toLowerCase()||u[0]==this.currentItem[0]||u[0]==this.helper[0];){if(!u[0].previousSibling){u=null;break}u=t(u[0].previousSibling)}var p=this.placeholder[0].nextSibling?t(this.placeholder[0].nextSibling):null;if(null!=p)for(;"li"!=p[0].nodeName.toLowerCase()||p[0]==this.currentItem[0]||p[0]==this.helper[0];){if(!p[0].nextSibling){p=null;break}p=t(p[0].nextSibling)}var f=document.createElement(i.listType);return this.beyondMaxLevels=0,null!=c&&null==p&&(i.rtl&&this.positionAbs.left+this.helper.outerWidth()>c.offset().left+c.outerWidth()||!i.rtl&&this.positionAbs.left<c.offset().left)?(c.after(this.placeholder[0]),this._clearEmpty(c[0]),this._trigger("change",e,this._uiHash())):null!=u&&(i.rtl&&this.positionAbs.left+this.helper.outerWidth()<u.offset().left+u.outerWidth()-i.tabSize||!i.rtl&&this.positionAbs.left>u.offset().left+i.tabSize)?(this._isAllowed(u,d,d+h+1),u.children(i.listType).length||u[0].appendChild(f),o&&o<=u.offset().top?u.children(i.listType).prepend(this.placeholder):u.children(i.listType)[0].appendChild(this.placeholder[0]),this._trigger("change",e,this._uiHash())):this._isAllowed(c,d,d+h),this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger("sort",e,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(e){this.beyondMaxLevels&&(this.placeholder.removeClass(this.options.errorClass),this.domPosition.prev?t(this.domPosition.prev).after(this.placeholder):t(this.domPosition.parent).prepend(this.placeholder),this._trigger("revert",e,this._uiHash()));for(var i=this.items.length-1;i>=0;i--){var n=this.items[i].item[0];this._clearEmpty(n)}t.ui.sortable.prototype._mouseStop.apply(this,arguments)},serialize:function(e){var i=t.extend({},this.options,e),n=this._getItemsAsjQuery(i&&i.connected),o=[];return t(n).each(function(){var e=(t(i.item||this).attr(i.attribute||"id")||"").match(i.expression||/(.+)[-=_](.+)/),n=(t(i.item||this).parent(i.listType).parent(i.items).attr(i.attribute||"id")||"").match(i.expression||/(.+)[-=_](.+)/);e&&o.push((i.key||e[1])+"["+(i.key&&i.expression?e[1]:e[2])+"]="+(n?i.key&&i.expression?n[1]:n[2]:i.rootID))}),!o.length&&i.key&&o.push(i.key+"="),o.join("&")},toHierarchy:function(e){function i(e){var o=(t(e).attr(n.attribute||"id")||"").match(n.expression||/(.+)[-=_](.+)/);if(o){var s={id:o[2]};return t(e).children(n.listType).children(n.items).length>0&&(s.children=[],t(e).children(n.listType).children(n.items).each(function(){var t=i(this);s.children.push(t)})),s}}var n=t.extend({},this.options,e),o=(n.startDepthCount||0,[]);return t(this.element).children(n.items).each(function(){var t=i(this);o.push(t)}),o},toArray:function(e){function i(e,r,a){var l,c,d=a+1;if(t(e).children(n.listType).children(n.items).length>0&&(r++,t(e).children(n.listType).children(n.items).each(function(){d=i(t(this),r,d)}),r--),l=t(e).attr(n.attribute||"id").match(n.expression||/(.+)[-=_](.+)/),r===o+1)c=n.rootID;else{var h=t(e).parent(n.listType).parent(n.items).attr(n.attribute||"id").match(n.expression||/(.+)[-=_](.+)/);c=h[2]}return l&&s.push({item_id:l[2],parent_id:c,depth:r,left:a,right:d}),a=d+1}var n=t.extend({},this.options,e),o=n.startDepthCount||0,s=[],r=2;return s.push({item_id:n.rootID,parent_id:"none",depth:o,left:"1",right:2*(t(n.items,this.element).length+1)}),t(this.element).children(n.items).each(function(){r=i(this,o+1,r)}),s=s.sort(function(t,e){return t.left-e.left})},_clearEmpty:function(e){var i=t(e).children(this.options.listType);!i.length||i.children().length||this.options.doNotClear||i.remove()},_getLevel:function(t){var e=1;if(this.options.listType)for(var i=t.closest(this.options.listType);i&&i.length>0&&!i.is(".ui-sortable");)e++,i=i.parent().closest(this.options.listType);return e},_getChildLevels:function(e,i){var n=this,o=this.options,s=0;return i=i||0,t(e).children(o.listType).children(o.items).each(function(t,e){s=Math.max(n._getChildLevels(e,i+1),s)}),i?s+1:s},_isAllowed:function(e,i,n){var o=this.options,s=!!t(this.domPosition.parent).hasClass("ui-sortable"),r=this.placeholder.closest(".ui-sortable").nestedSortable("option","maxLevels");!o.isAllowed(this.currentItem,e)||e&&e.hasClass(o.disableNesting)||o.protectRoot&&(null==e&&!s||s&&i>1)?(this.placeholder.addClass(o.errorClass),r<n&&0!=r?this.beyondMaxLevels=n-r:this.beyondMaxLevels=1):r<n&&0!=r?(this.placeholder.addClass(o.errorClass),this.beyondMaxLevels=n-r):(this.placeholder.removeClass(o.errorClass),this.beyondMaxLevels=0)}})),t.mjs.nestedSortable.prototype.options=t.extend({},t.ui.sortable.prototype.options,t.mjs.nestedSortable.prototype.options)}(jQuery);