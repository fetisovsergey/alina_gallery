!function(t,e,i,n){"use strict";var o=i("html"),r=i(t),s=i(e),a=i.fancybox=function(){a.open.apply(this,arguments)},l=navigator.userAgent.match(/msie/i),c=null,u=e.createTouch!==n,d=function(t){return t&&t.hasOwnProperty&&t instanceof i},p=function(t){return t&&"string"===i.type(t)},h=function(t){return p(t)&&t.indexOf("%")>0},f=function(t){return t&&!(t.style.overflow&&"hidden"===t.style.overflow)&&(t.clientWidth&&t.scrollWidth>t.clientWidth||t.clientHeight&&t.scrollHeight>t.clientHeight)},g=function(t,e){var i=parseInt(t,10)||0;return e&&h(t)&&(i=a.getViewport()[e]/100*i),Math.ceil(i)},m=function(t,e){return g(t,e)+"px"};i.extend(a,{version:"2.1.5",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!u,fitToView:!0,aspectRatio:!1,topRatio:.5,leftRatio:.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3e3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(l?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:i.noop,beforeLoad:i.noop,afterLoad:i.noop,beforeShow:i.noop,afterShow:i.noop,beforeChange:i.noop,beforeClose:i.noop,afterClose:i.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(t,e){if(t&&(i.isPlainObject(e)||(e={}),!1!==a.close(!0)))return i.isArray(t)||(t=d(t)?i(t).get():[t]),i.each(t,function(o,r){var s,l,c,u,h,f,g,m={};"object"===i.type(r)&&(r.nodeType&&(r=i(r)),d(r)?(m={href:r.data("fancybox-href")||r.attr("href"),title:r.data("fancybox-title")||r.attr("title"),isDom:!0,element:r},i.metadata&&i.extend(!0,m,r.metadata())):m=r),s=e.href||m.href||(p(r)?r:null),l=e.title!==n?e.title:m.title||"",c=e.content||m.content,u=c?"html":e.type||m.type,!u&&m.isDom&&(u=r.data("fancybox-type"),u||(h=r.prop("class").match(/fancybox\.(\w+)/),u=h?h[1]:null)),p(s)&&(u||(a.isImage(s)?u="image":a.isSWF(s)?u="swf":"#"===s.charAt(0)?u="inline":p(r)&&(u="html",c=r)),"ajax"===u&&(f=s.split(/\s+/,2),s=f.shift(),g=f.shift())),c||("inline"===u?s?c=i(p(s)?s.replace(/.*(?=#[^\s]+$)/,""):s):m.isDom&&(c=r):"html"===u?c=s:u||s||!m.isDom||(u="inline",c=r)),i.extend(m,{href:s,type:u,content:c,title:l,selector:g}),t[o]=m}),a.opts=i.extend(!0,{},a.defaults,e),e.keys!==n&&(a.opts.keys=!!e.keys&&i.extend({},a.defaults.keys,e.keys)),a.group=t,a._start(a.opts.index)},cancel:function(){var t=a.coming;t&&!1!==a.trigger("onCancel")&&(a.hideLoading(),a.ajaxLoad&&a.ajaxLoad.abort(),a.ajaxLoad=null,a.imgPreload&&(a.imgPreload.onload=a.imgPreload.onerror=null),t.wrap&&t.wrap.stop(!0,!0).trigger("onReset").remove(),a.coming=null,a.current||a._afterZoomOut(t))},close:function(t){a.cancel(),!1!==a.trigger("beforeClose")&&(a.unbindEvents(),a.isActive&&(a.isOpen&&t!==!0?(a.isOpen=a.isOpened=!1,a.isClosing=!0,i(".fancybox-item, .fancybox-nav").remove(),a.wrap.stop(!0,!0).removeClass("fancybox-opened"),a.transitions[a.current.closeMethod]()):(i(".fancybox-wrap").stop(!0).trigger("onReset").remove(),a._afterZoomOut())))},play:function(t){var e=function(){clearTimeout(a.player.timer)},i=function(){e(),a.current&&a.player.isActive&&(a.player.timer=setTimeout(a.next,a.current.playSpeed))},n=function(){e(),s.unbind(".player"),a.player.isActive=!1,a.trigger("onPlayEnd")},o=function(){a.current&&(a.current.loop||a.current.index<a.group.length-1)&&(a.player.isActive=!0,s.bind({"onCancel.player beforeClose.player":n,"onUpdate.player":i,"beforeLoad.player":e}),i(),a.trigger("onPlayStart"))};t===!0||!a.player.isActive&&t!==!1?o():n()},next:function(t){var e=a.current;e&&(p(t)||(t=e.direction.next),a.jumpto(e.index+1,t,"next"))},prev:function(t){var e=a.current;e&&(p(t)||(t=e.direction.prev),a.jumpto(e.index-1,t,"prev"))},jumpto:function(t,e,i){var o=a.current;o&&(t=g(t),a.direction=e||o.direction[t>=o.index?"next":"prev"],a.router=i||"jumpto",o.loop&&(t<0&&(t=o.group.length+t%o.group.length),t%=o.group.length),o.group[t]!==n&&(a.cancel(),a._start(t)))},reposition:function(t,e){var n,o=a.current,r=o?o.wrap:null;r&&(n=a._getPosition(e),t&&"scroll"===t.type?(delete n.position,r.stop(!0,!0).animate(n,200)):(r.css(n),o.pos=i.extend({},o.dim,n)))},update:function(t){var e=t&&t.type,i=!e||"orientationchange"===e;i&&(clearTimeout(c),c=null),a.isOpen&&!c&&(c=setTimeout(function(){var n=a.current;n&&!a.isClosing&&(a.wrap.removeClass("fancybox-tmp"),(i||"load"===e||"resize"===e&&n.autoResize)&&a._setDimension(),"scroll"===e&&n.canShrink||a.reposition(t),a.trigger("onUpdate"),c=null)},i&&!u?0:300))},toggle:function(t){a.isOpen&&(a.current.fitToView="boolean"===i.type(t)?t:!a.current.fitToView,u&&(a.wrap.removeAttr("style").addClass("fancybox-tmp"),a.trigger("onUpdate")),a.update())},hideLoading:function(){s.unbind(".loading"),i("#fancybox-loading").remove()},showLoading:function(){var t,e;a.hideLoading(),t=i('<div id="fancybox-loading"><div></div></div>').click(a.cancel).appendTo("body"),s.bind("keydown.loading",function(t){27===(t.which||t.keyCode)&&(t.preventDefault(),a.cancel())}),a.defaults.fixed||(e=a.getViewport(),t.css({position:"absolute",top:.5*e.h+e.y,left:.5*e.w+e.x}))},getViewport:function(){var e=a.current&&a.current.locked||!1,i={x:r.scrollLeft(),y:r.scrollTop()};return e?(i.w=e[0].clientWidth,i.h=e[0].clientHeight):(i.w=u&&t.innerWidth?t.innerWidth:r.width(),i.h=u&&t.innerHeight?t.innerHeight:r.height()),i},unbindEvents:function(){a.wrap&&d(a.wrap)&&a.wrap.unbind(".fb"),s.unbind(".fb"),r.unbind(".fb")},bindEvents:function(){var t,e=a.current;e&&(r.bind("orientationchange.fb"+(u?"":" resize.fb")+(e.autoCenter&&!e.locked?" scroll.fb":""),a.update),t=e.keys,t&&s.bind("keydown.fb",function(o){var r=o.which||o.keyCode,s=o.target||o.srcElement;return(27!==r||!a.coming)&&void(o.ctrlKey||o.altKey||o.shiftKey||o.metaKey||s&&(s.type||i(s).is("[contenteditable]"))||i.each(t,function(t,s){return e.group.length>1&&s[r]!==n?(a[t](s[r]),o.preventDefault(),!1):i.inArray(r,s)>-1?(a[t](),o.preventDefault(),!1):void 0}))}),i.fn.mousewheel&&e.mouseWheel&&a.wrap.bind("mousewheel.fb",function(t,n,o,r){for(var s=t.target||null,l=i(s),c=!1;l.length&&!(c||l.is(".fancybox-skin")||l.is(".fancybox-wrap"));)c=f(l[0]),l=i(l).parent();0===n||c||a.group.length>1&&!e.canShrink&&(r>0||o>0?a.prev(r>0?"down":"left"):(r<0||o<0)&&a.next(r<0?"up":"right"),t.preventDefault())}))},trigger:function(t,e){var n,o=e||a.coming||a.current;if(o){if(i.isFunction(o[t])&&(n=o[t].apply(o,Array.prototype.slice.call(arguments,1))),n===!1)return!1;o.helpers&&i.each(o.helpers,function(e,n){n&&a.helpers[e]&&i.isFunction(a.helpers[e][t])&&a.helpers[e][t](i.extend(!0,{},a.helpers[e].defaults,n),o)}),s.trigger(t)}},isImage:function(t){return p(t)&&t.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(t){return p(t)&&t.match(/\.(swf)((\?|#).*)?$/i)},_start:function(t){var e,n,o,r,s,l={};if(t=g(t),e=a.group[t]||null,!e)return!1;if(l=i.extend(!0,{},a.opts,e),r=l.margin,s=l.padding,"number"===i.type(r)&&(l.margin=[r,r,r,r]),"number"===i.type(s)&&(l.padding=[s,s,s,s]),l.modal&&i.extend(!0,l,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}}),l.autoSize&&(l.autoWidth=l.autoHeight=!0),"auto"===l.width&&(l.autoWidth=!0),"auto"===l.height&&(l.autoHeight=!0),l.group=a.group,l.index=t,a.coming=l,!1===a.trigger("beforeLoad"))return void(a.coming=null);if(o=l.type,n=l.href,!o)return a.coming=null,!(!a.current||!a.router||"jumpto"===a.router)&&(a.current.index=t,a[a.router](a.direction));if(a.isActive=!0,"image"!==o&&"swf"!==o||(l.autoHeight=l.autoWidth=!1,l.scrolling="visible"),"image"===o&&(l.aspectRatio=!0),"iframe"===o&&u&&(l.scrolling="scroll"),l.wrap=i(l.tpl.wrap).addClass("fancybox-"+(u?"mobile":"desktop")+" fancybox-type-"+o+" fancybox-tmp "+l.wrapCSS).appendTo(l.parent||"body"),i.extend(l,{skin:i(".fancybox-skin",l.wrap),outer:i(".fancybox-outer",l.wrap),inner:i(".fancybox-inner",l.wrap)}),i.each(["Top","Right","Bottom","Left"],function(t,e){l.skin.css("padding"+e,m(l.padding[t]))}),a.trigger("onReady"),"inline"===o||"html"===o){if(!l.content||!l.content.length)return a._error("content")}else if(!n)return a._error("href");"image"===o?a._loadImage():"ajax"===o?a._loadAjax():"iframe"===o?a._loadIframe():a._afterLoad()},_error:function(t){i.extend(a.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:t,content:a.coming.tpl.error}),a._afterLoad()},_loadImage:function(){var t=a.imgPreload=new Image;t.onload=function(){this.onload=this.onerror=null,a.coming.width=this.width/a.opts.pixelRatio,a.coming.height=this.height/a.opts.pixelRatio,a._afterLoad()},t.onerror=function(){this.onload=this.onerror=null,a._error("image")},t.src=a.coming.href,t.complete!==!0&&a.showLoading()},_loadAjax:function(){var t=a.coming;a.showLoading(),a.ajaxLoad=i.ajax(i.extend({},t.ajax,{url:t.href,error:function(t,e){a.coming&&"abort"!==e?a._error("ajax",t):a.hideLoading()},success:function(e,i){"success"===i&&(t.content=e,a._afterLoad())}}))},_loadIframe:function(){var t=a.coming,e=i(t.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",u?"auto":t.iframe.scrolling).attr("src",t.href);i(t.wrap).bind("onReset",function(){try{i(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(t){}}),t.iframe.preload&&(a.showLoading(),e.one("load",function(){i(this).data("ready",1),u||i(this).bind("load.fb",a.update),i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(),a._afterLoad()})),t.content=e.appendTo(t.inner),t.iframe.preload||a._afterLoad()},_preloadImages:function(){var t,e,i=a.group,n=a.current,o=i.length,r=n.preload?Math.min(n.preload,o-1):0;for(e=1;e<=r;e+=1)t=i[(n.index+e)%o],"image"===t.type&&t.href&&((new Image).src=t.href)},_afterLoad:function(){var t,e,n,o,r,s,l=a.coming,c=a.current,u="fancybox-placeholder";if(a.hideLoading(),l&&a.isActive!==!1){if(!1===a.trigger("afterLoad",l,c))return l.wrap.stop(!0).trigger("onReset").remove(),void(a.coming=null);switch(c&&(a.trigger("beforeChange",c),c.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()),a.unbindEvents(),t=l,e=l.content,n=l.type,o=l.scrolling,i.extend(a,{wrap:t.wrap,skin:t.skin,outer:t.outer,inner:t.inner,current:t,previous:c}),r=t.href,n){case"inline":case"ajax":case"html":t.selector?e=i("<div>").html(e).find(t.selector):d(e)&&(e.data(u)||e.data(u,i('<div class="'+u+'"></div>').insertAfter(e).hide()),e=e.show().detach(),t.wrap.bind("onReset",function(){i(this).find(e).length&&e.hide().replaceAll(e.data(u)).data(u,!1)}));break;case"image":e=t.tpl.image.replace("{href}",r);break;case"swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+r+'"></param>',s="",i.each(t.swf,function(t,i){e+='<param name="'+t+'" value="'+i+'"></param>',s+=" "+t+'="'+i+'"'}),e+='<embed src="'+r+'" type="application/x-shockwave-flash" width="100%" height="100%"'+s+"></embed></object>"}d(e)&&e.parent().is(t.inner)||t.inner.append(e),a.trigger("beforeShow"),t.inner.css("overflow","yes"===o?"scroll":"no"===o?"hidden":o),a._setDimension(),a.reposition(),a.isOpen=!1,a.coming=null,a.bindEvents(),a.isOpened?c.prevMethod&&a.transitions[c.prevMethod]():i(".fancybox-wrap").not(t.wrap).stop(!0).trigger("onReset").remove(),a.transitions[a.isOpened?t.nextMethod:t.openMethod](),a._preloadImages()}},_setDimension:function(){var t,e,n,o,r,s,l,c,u,d,p,f,v,y,b,x=a.getViewport(),w=0,S=!1,C=!1,E=a.wrap,T=a.skin,k=a.inner,I=a.current,L=I.width,P=I.height,M=I.minWidth,A=I.minHeight,z=I.maxWidth,_=I.maxHeight,j=I.scrolling,D=I.scrollOutside?I.scrollbarWidth:0,O=I.margin,$=g(O[1]+O[3]),R=g(O[0]+O[2]);if(E.add(T).add(k).width("auto").height("auto").removeClass("fancybox-tmp"),t=g(T.outerWidth(!0)-T.width()),e=g(T.outerHeight(!0)-T.height()),n=$+t,o=R+e,r=h(L)?(x.w-n)*g(L)/100:L,s=h(P)?(x.h-o)*g(P)/100:P,"iframe"===I.type){if(y=I.content,I.autoHeight&&1===y.data("ready"))try{y[0].contentWindow.document.location&&(k.width(r).height(9999),b=y.contents().find("body"),D&&b.css("overflow-x","hidden"),s=b.outerHeight(!0))}catch(t){}}else(I.autoWidth||I.autoHeight)&&(k.addClass("fancybox-tmp"),I.autoWidth||k.width(r),I.autoHeight||k.height(s),I.autoWidth&&(r=k.width()),I.autoHeight&&(s=k.height()),k.removeClass("fancybox-tmp"));if(L=g(r),P=g(s),u=r/s,M=g(h(M)?g(M,"w")-n:M),z=g(h(z)?g(z,"w")-n:z),A=g(h(A)?g(A,"h")-o:A),_=g(h(_)?g(_,"h")-o:_),l=z,c=_,I.fitToView&&(z=Math.min(x.w-n,z),_=Math.min(x.h-o,_)),f=x.w-$,v=x.h-R,I.aspectRatio?(L>z&&(L=z,P=g(L/u)),P>_&&(P=_,L=g(P*u)),L<M&&(L=M,P=g(L/u)),P<A&&(P=A,L=g(P*u))):(L=Math.max(M,Math.min(L,z)),I.autoHeight&&"iframe"!==I.type&&(k.width(L),P=k.height()),P=Math.max(A,Math.min(P,_))),I.fitToView)if(k.width(L).height(P),E.width(L+t),d=E.width(),p=E.height(),I.aspectRatio)for(;(d>f||p>v)&&L>M&&P>A&&!(w++>19);)P=Math.max(A,Math.min(_,P-10)),L=g(P*u),L<M&&(L=M,P=g(L/u)),L>z&&(L=z,P=g(L/u)),k.width(L).height(P),E.width(L+t),d=E.width(),p=E.height();else L=Math.max(M,Math.min(L,L-(d-f))),P=Math.max(A,Math.min(P,P-(p-v)));D&&"auto"===j&&P<s&&L+t+D<f&&(L+=D),k.width(L).height(P),E.width(L+t),d=E.width(),p=E.height(),S=(d>f||p>v)&&L>M&&P>A,C=I.aspectRatio?L<l&&P<c&&L<r&&P<s:(L<l||P<c)&&(L<r||P<s),i.extend(I,{dim:{width:m(d),height:m(p)},origWidth:r,origHeight:s,canShrink:S,canExpand:C,wPadding:t,hPadding:e,wrapSpace:p-T.outerHeight(!0),skinSpace:T.height()-P}),!y&&I.autoHeight&&P>A&&P<_&&!C&&k.height("auto")},_getPosition:function(t){var e=a.current,i=a.getViewport(),n=e.margin,o=a.wrap.width()+n[1]+n[3],r=a.wrap.height()+n[0]+n[2],s={position:"absolute",top:n[0],left:n[3]};return e.autoCenter&&e.fixed&&!t&&r<=i.h&&o<=i.w?s.position="fixed":e.locked||(s.top+=i.y,s.left+=i.x),s.top=m(Math.max(s.top,s.top+(i.h-r)*e.topRatio)),s.left=m(Math.max(s.left,s.left+(i.w-o)*e.leftRatio)),s},_afterZoomIn:function(){var t=a.current;t&&(a.isOpen=a.isOpened=!0,a.wrap.css("overflow","visible").addClass("fancybox-opened"),a.update(),(t.closeClick||t.nextClick&&a.group.length>1)&&a.inner.css("cursor","pointer").bind("click.fb",function(e){i(e.target).is("a")||i(e.target).parent().is("a")||(e.preventDefault(),a[t.closeClick?"close":"next"]())}),t.closeBtn&&i(t.tpl.closeBtn).appendTo(a.skin).bind("click.fb",function(t){t.preventDefault(),a.close()}),t.arrows&&a.group.length>1&&((t.loop||t.index>0)&&i(t.tpl.prev).appendTo(a.outer).bind("click.fb",a.prev),(t.loop||t.index<a.group.length-1)&&i(t.tpl.next).appendTo(a.outer).bind("click.fb",a.next)),a.trigger("afterShow"),t.loop||t.index!==t.group.length-1?a.opts.autoPlay&&!a.player.isActive&&(a.opts.autoPlay=!1,a.play()):a.play(!1))},_afterZoomOut:function(t){t=t||a.current,i(".fancybox-wrap").trigger("onReset").remove(),i.extend(a,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null}),a.trigger("afterClose",t)}}),a.transitions={getOrigPosition:function(){var t=a.current,e=t.element,i=t.orig,n={},o=50,r=50,s=t.hPadding,l=t.wPadding,c=a.getViewport();return!i&&t.isDom&&e.is(":visible")&&(i=e.find("img:first"),i.length||(i=e)),d(i)?(n=i.offset(),i.is("img")&&(o=i.outerWidth(),r=i.outerHeight())):(n.top=c.y+(c.h-r)*t.topRatio,n.left=c.x+(c.w-o)*t.leftRatio),("fixed"===a.wrap.css("position")||t.locked)&&(n.top-=c.y,n.left-=c.x),n={top:m(n.top-s*t.topRatio),left:m(n.left-l*t.leftRatio),width:m(o+l),height:m(r+s)}},step:function(t,e){var i,n,o,r=e.prop,s=a.current,l=s.wrapSpace,c=s.skinSpace;"width"!==r&&"height"!==r||(i=e.end===e.start?1:(t-e.start)/(e.end-e.start),a.isClosing&&(i=1-i),n="width"===r?s.wPadding:s.hPadding,o=t-n,a.skin[r](g("width"===r?o:o-l*i)),a.inner[r](g("width"===r?o:o-l*i-c*i)))},zoomIn:function(){var t=a.current,e=t.pos,n=t.openEffect,o="elastic"===n,r=i.extend({opacity:1},e);delete r.position,o?(e=this.getOrigPosition(),t.openOpacity&&(e.opacity=.1)):"fade"===n&&(e.opacity=.1),a.wrap.css(e).animate(r,{duration:"none"===n?0:t.openSpeed,easing:t.openEasing,step:o?this.step:null,complete:a._afterZoomIn})},zoomOut:function(){var t=a.current,e=t.closeEffect,i="elastic"===e,n={opacity:.1};i&&(n=this.getOrigPosition(),t.closeOpacity&&(n.opacity=.1)),a.wrap.animate(n,{duration:"none"===e?0:t.closeSpeed,easing:t.closeEasing,step:i?this.step:null,complete:a._afterZoomOut})},changeIn:function(){var t,e=a.current,i=e.nextEffect,n=e.pos,o={opacity:1},r=a.direction,s=200;n.opacity=.1,"elastic"===i&&(t="down"===r||"up"===r?"top":"left","down"===r||"right"===r?(n[t]=m(g(n[t])-s),o[t]="+="+s+"px"):(n[t]=m(g(n[t])+s),o[t]="-="+s+"px")),"none"===i?a._afterZoomIn():a.wrap.css(n).animate(o,{duration:e.nextSpeed,easing:e.nextEasing,complete:a._afterZoomIn})},changeOut:function(){var t=a.previous,e=t.prevEffect,n={opacity:.1},o=a.direction,r=200;"elastic"===e&&(n["down"===o||"up"===o?"top":"left"]=("up"===o||"left"===o?"-":"+")+"="+r+"px"),t.wrap.animate(n,{duration:"none"===e?0:t.prevSpeed,easing:t.prevEasing,complete:function(){i(this).trigger("onReset").remove()}})}},a.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!u,fixed:!0},overlay:null,fixed:!1,el:i("html"),create:function(t){t=i.extend({},this.defaults,t),this.overlay&&this.close(),this.overlay=i('<div class="fancybox-overlay"></div>').appendTo(a.coming?a.coming.parent:t.parent),this.fixed=!1,t.fixed&&a.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(t){var e=this;t=i.extend({},this.defaults,t),this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(t),this.fixed||(r.bind("resize.overlay",i.proxy(this.update,this)),this.update()),t.closeClick&&this.overlay.bind("click.overlay",function(t){if(i(t.target).hasClass("fancybox-overlay"))return a.isActive?a.close():e.close(),!1}),this.overlay.css(t.css).show()},close:function(){var t,e;r.unbind("resize.overlay"),this.el.hasClass("fancybox-lock")&&(i(".fancybox-margin").removeClass("fancybox-margin"),t=r.scrollTop(),e=r.scrollLeft(),this.el.removeClass("fancybox-lock"),r.scrollTop(t).scrollLeft(e)),i(".fancybox-overlay").remove().hide(),i.extend(this,{overlay:null,fixed:!1})},update:function(){var t,i="100%";this.overlay.width(i).height("100%"),l?(t=Math.max(e.documentElement.offsetWidth,e.body.offsetWidth),s.width()>t&&(i=s.width())):s.width()>r.width()&&(i=s.width()),this.overlay.width(i).height(s.height())},onReady:function(t,e){var n=this.overlay;i(".fancybox-overlay").stop(!0,!0),n||this.create(t),t.locked&&this.fixed&&e.fixed&&(n||(this.margin=s.height()>r.height()&&i("html").css("margin-right").replace("px","")),e.locked=this.overlay.append(e.wrap),e.fixed=!1),t.showEarly===!0&&this.beforeShow.apply(this,arguments)},beforeShow:function(t,e){var n,o;e.locked&&(this.margin!==!1&&(i("*").filter(function(){return"fixed"===i(this).css("position")&&!i(this).hasClass("fancybox-overlay")&&!i(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),n=r.scrollTop(),o=r.scrollLeft(),this.el.addClass("fancybox-lock"),r.scrollTop(n).scrollLeft(o)),this.open(t)},onUpdate:function(){this.fixed||this.update()},afterClose:function(t){this.overlay&&!a.coming&&this.overlay.fadeOut(t.speedOut,i.proxy(this.close,this))}},a.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(t){var e,n,o=a.current,r=o.title,s=t.type;if(i.isFunction(r)&&(r=r.call(o.element,o)),p(r)&&""!==i.trim(r)){switch(e=i('<div class="fancybox-title fancybox-title-'+s+'-wrap">'+r+"</div>"),s){case"inside":n=a.skin;break;case"outside":n=a.wrap;break;case"over":n=a.inner;break;default:n=a.skin,e.appendTo("body"),l&&e.width(e.width()),e.wrapInner('<span class="child"></span>'),a.current.margin[2]+=Math.abs(g(e.css("margin-bottom")))}e["top"===t.position?"prependTo":"appendTo"](n)}}},i.fn.fancybox=function(t){var e,n=i(this),o=this.selector||"",r=function(r){var s,l,c=i(this).blur(),u=e;r.ctrlKey||r.altKey||r.shiftKey||r.metaKey||c.is(".fancybox-wrap")||(s=t.groupAttr||"data-fancybox-group",l=c.attr(s),l||(s="rel",l=c.get(0)[s]),l&&""!==l&&"nofollow"!==l&&(c=o.length?i(o):n,c=c.filter("["+s+'="'+l+'"]'),u=c.index(this)),t.index=u,a.open(c,t)!==!1&&r.preventDefault())};return t=t||{},e=t.index||0,o&&t.live!==!1?s.undelegate(o,"click.fb-start").delegate(o+":not('.fancybox-item, .fancybox-nav')","click.fb-start",r):n.unbind("click.fb-start").bind("click.fb-start",r),this.filter("[data-fancybox-start=1]").trigger("click"),this},s.ready(function(){var e,r;i.scrollbarWidth===n&&(i.scrollbarWidth=function(){var t=i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),e=t.children(),n=e.innerWidth()-e.height(99).innerWidth();return t.remove(),n}),i.support.fixedPosition===n&&(i.support.fixedPosition=function(){var t=i('<div style="position:fixed;top:20px;"></div>').appendTo("body"),e=20===t[0].offsetTop||15===t[0].offsetTop;return t.remove(),e}()),i.extend(a.defaults,{scrollbarWidth:i.scrollbarWidth(),fixed:i.support.fixedPosition,parent:i("body")}),e=i(t).width(),o.addClass("fancybox-lock-test"),r=i(t).width(),o.removeClass("fancybox-lock-test"),i("<style type='text/css'>.fancybox-margin{margin-right:"+(r-e)+"px;}</style>").appendTo("head")})}(window,document,jQuery),function(t){var e=t.fancybox;e.helpers.buttons={defaults:{skipSingle:!1,position:"top",tpl:'<div id="fancybox-buttons"><ul><li><a class="btnPrev" title="Previous" href="javascript:;"></a></li><li><a class="btnPlay" title="Start slideshow" href="javascript:;"></a></li><li><a class="btnNext" title="Next" href="javascript:;"></a></li><li><a class="btnToggle" title="Toggle size" href="javascript:;"></a></li><li><a class="btnClose" title="Close" href="javascript:;"></a></li></ul></div>'},list:null,buttons:null,beforeLoad:function(t,e){return t.skipSingle&&e.group.length<2?(e.helpers.buttons=!1,void(e.closeBtn=!0)):void(e.margin["bottom"===t.position?2:0]+=30)},onPlayStart:function(){this.buttons&&this.buttons.play.attr("title","Pause slideshow").addClass("btnPlayOn")},onPlayEnd:function(){this.buttons&&this.buttons.play.attr("title","Start slideshow").removeClass("btnPlayOn")},afterShow:function(i,n){var o=this.buttons;o||(this.list=t(i.tpl).addClass(i.position).appendTo("body"),o={prev:this.list.find(".btnPrev").click(e.prev),next:this.list.find(".btnNext").click(e.next),play:this.list.find(".btnPlay").click(e.play),toggle:this.list.find(".btnToggle").click(e.toggle),close:this.list.find(".btnClose").click(e.close)}),n.index>0||n.loop?o.prev.removeClass("btnDisabled"):o.prev.addClass("btnDisabled"),n.loop||n.index<n.group.length-1?(o.next.removeClass("btnDisabled"),o.play.removeClass("btnDisabled")):(o.next.addClass("btnDisabled"),o.play.addClass("btnDisabled")),this.buttons=o,this.onUpdate(i,n)},onUpdate:function(t,e){var i;this.buttons&&(i=this.buttons.toggle.removeClass("btnDisabled btnToggleOn"),e.canShrink?i.addClass("btnToggleOn"):e.canExpand||i.addClass("btnDisabled"))},beforeClose:function(){this.list&&this.list.remove(),this.list=null,this.buttons=null}}}(jQuery),function(t){var e=t.fancybox;e.helpers.thumbs={defaults:{width:50,height:50,position:"bottom",source:function(e){var i;return e.element&&(i=t(e.element).find("img").attr("src")),!i&&"image"===e.type&&e.href&&(i=e.href),i}},wrap:null,list:null,width:0,init:function(e,i){var n,o=this,r=e.width,s=e.height,a=e.source;n="";for(var l=0;l<i.group.length;l++)n+='<li><a style="width:'+r+"px;height:"+s+'px;" href="javascript:jQuery.fancybox.jumpto('+l+');"></a></li>';this.wrap=t('<div id="fancybox-thumbs"></div>').addClass(e.position).appendTo("body"),this.list=t("<ul>"+n+"</ul>").appendTo(this.wrap),t.each(i.group,function(e){var n=a(i.group[e]);n&&t("<img />").load(function(){var i,n,a,l=this.width,c=this.height;o.list&&l&&c&&(i=l/r,n=c/s,a=o.list.children().eq(e).find("a"),i>=1&&n>=1&&(i>n?(l=Math.floor(l/n),c=s):(l=r,c=Math.floor(c/i))),t(this).css({width:l,height:c,top:Math.floor(s/2-c/2),left:Math.floor(r/2-l/2)}),a.width(r).height(s),t(this).hide().appendTo(a).fadeIn(300))}).attr("src",n)}),this.width=this.list.children().eq(0).outerWidth(!0),this.list.width(this.width*(i.group.length+1)).css("left",Math.floor(.5*t(window).width()-(i.index*this.width+.5*this.width)))},beforeLoad:function(t,e){return e.group.length<2?void(e.helpers.thumbs=!1):void(e.margin["top"===t.position?0:2]+=t.height+15)},afterShow:function(t,e){this.list?this.onUpdate(t,e):this.init(t,e),this.list.children().removeClass("active").eq(e.index).addClass("active")},onUpdate:function(e,i){this.list&&this.list.stop(!0).animate({left:Math.floor(.5*t(window).width()-(i.index*this.width+.5*this.width))},150)},beforeClose:function(){this.wrap&&this.wrap.remove(),this.wrap=null,this.list=null,this.width=0}}}(jQuery),function(t){"use strict";var e=t.fancybox,i=function(e,i,n){return n=n||"","object"===t.type(n)&&(n=t.param(n,!0)),t.each(i,function(t,i){e=e.replace("$"+t,i||"")}),n.length&&(e+=(e.indexOf("?")>0?"&":"?")+n),e};e.helpers.media={defaults:{youtube:{matcher:/(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"opaque",enablejsapi:1},type:"iframe",url:"//www.youtube.com/embed/$3"},vimeo:{matcher:/(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},type:"iframe",url:"//player.vimeo.com/video/$1"},metacafe:{matcher:/metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,params:{autoPlay:"yes"},type:"swf",url:function(e,i,n){return n.swf.flashVars="playerVars="+t.param(i,!0),"//www.metacafe.com/fplayer/"+e[1]+"/.swf"}},dailymotion:{matcher:/dailymotion.com\/video\/(.*)\/?(.*)/,params:{additionalInfos:0,autoStart:1},type:"swf",url:"//www.dailymotion.com/swf/video/$1"},twitvid:{matcher:/twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,params:{autoplay:0},type:"iframe",url:"//www.twitvid.com/embed.php?guid=$1"},twitpic:{matcher:/twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,type:"image",url:"//twitpic.com/show/full/$1/"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},google_maps:{matcher:/maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[1]+"/"+t[3]+t[4]+"&output="+(t[4].indexOf("layer=c")>0?"svembed":"embed")}}},beforeLoad:function(e,n){var o,r,s,a,l=n.href||"",c=!1;for(o in e)if(e.hasOwnProperty(o)&&(r=e[o],s=l.match(r.matcher))){c=r.type,a=t.extend(!0,{},r.params,n[o]||(t.isPlainObject(e[o])?e[o].params:null)),l="function"===t.type(r.url)?r.url.call(this,s,a,n):i(r.url,s,a);break}c&&(n.href=l,n.type=c,n.autoHeight=!1)}}}(jQuery);