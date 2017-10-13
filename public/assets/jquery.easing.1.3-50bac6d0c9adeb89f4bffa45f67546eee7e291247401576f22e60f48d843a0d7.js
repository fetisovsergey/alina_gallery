jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(t,e,i,n,o){return jQuery.easing[jQuery.easing.def](t,e,i,n,o)},easeInQuad:function(t,e,i,n,o){return n*(e/=o)*e+i},easeOutQuad:function(t,e,i,n,o){return-n*(e/=o)*(e-2)+i},easeInOutQuad:function(t,e,i,n,o){return(e/=o/2)<1?n/2*e*e+i:-n/2*(--e*(e-2)-1)+i},easeInCubic:function(t,e,i,n,o){return n*(e/=o)*e*e+i},easeOutCubic:function(t,e,i,n,o){return n*((e=e/o-1)*e*e+1)+i},easeInOutCubic:function(t,e,i,n,o){return(e/=o/2)<1?n/2*e*e*e+i:n/2*((e-=2)*e*e+2)+i},easeInQuart:function(t,e,i,n,o){return n*(e/=o)*e*e*e+i},easeOutQuart:function(t,e,i,n,o){return-n*((e=e/o-1)*e*e*e-1)+i},easeInOutQuart:function(t,e,i,n,o){return(e/=o/2)<1?n/2*e*e*e*e+i:-n/2*((e-=2)*e*e*e-2)+i},easeInQuint:function(t,e,i,n,o){return n*(e/=o)*e*e*e*e+i},easeOutQuint:function(t,e,i,n,o){return n*((e=e/o-1)*e*e*e*e+1)+i},easeInOutQuint:function(t,e,i,n,o){return(e/=o/2)<1?n/2*e*e*e*e*e+i:n/2*((e-=2)*e*e*e*e+2)+i},easeInSine:function(t,e,i,n,o){return-n*Math.cos(e/o*(Math.PI/2))+n+i},easeOutSine:function(t,e,i,n,o){return n*Math.sin(e/o*(Math.PI/2))+i},easeInOutSine:function(t,e,i,n,o){return-n/2*(Math.cos(Math.PI*e/o)-1)+i},easeInExpo:function(t,e,i,n,o){return 0==e?i:n*Math.pow(2,10*(e/o-1))+i},easeOutExpo:function(t,e,i,n,o){return e==o?i+n:n*(-Math.pow(2,-10*e/o)+1)+i},easeInOutExpo:function(t,e,i,n,o){return 0==e?i:e==o?i+n:(e/=o/2)<1?n/2*Math.pow(2,10*(e-1))+i:n/2*(-Math.pow(2,-10*--e)+2)+i},easeInCirc:function(t,e,i,n,o){return-n*(Math.sqrt(1-(e/=o)*e)-1)+i},easeOutCirc:function(t,e,i,n,o){return n*Math.sqrt(1-(e=e/o-1)*e)+i},easeInOutCirc:function(t,e,i,n,o){return(e/=o/2)<1?-n/2*(Math.sqrt(1-e*e)-1)+i:n/2*(Math.sqrt(1-(e-=2)*e)+1)+i},easeInElastic:function(t,e,i,n,o){var r=1.70158,s=0,a=n;if(0==e)return i;if(1==(e/=o))return i+n;if(s||(s=.3*o),a<Math.abs(n)){a=n;var r=s/4}else var r=s/(2*Math.PI)*Math.asin(n/a);return-(a*Math.pow(2,10*(e-=1))*Math.sin((e*o-r)*(2*Math.PI)/s))+i},easeOutElastic:function(t,e,i,n,o){var r=1.70158,s=0,a=n;if(0==e)return i;if(1==(e/=o))return i+n;if(s||(s=.3*o),a<Math.abs(n)){a=n;var r=s/4}else var r=s/(2*Math.PI)*Math.asin(n/a);return a*Math.pow(2,-10*e)*Math.sin((e*o-r)*(2*Math.PI)/s)+n+i},easeInOutElastic:function(t,e,i,n,o){var r=1.70158,s=0,a=n;if(0==e)return i;if(2==(e/=o/2))return i+n;if(s||(s=o*(.3*1.5)),a<Math.abs(n)){a=n;var r=s/4}else var r=s/(2*Math.PI)*Math.asin(n/a);return e<1?-.5*(a*Math.pow(2,10*(e-=1))*Math.sin((e*o-r)*(2*Math.PI)/s))+i:a*Math.pow(2,-10*(e-=1))*Math.sin((e*o-r)*(2*Math.PI)/s)*.5+n+i},easeInBack:function(t,e,i,n,o,r){return void 0==r&&(r=1.70158),n*(e/=o)*e*((r+1)*e-r)+i},easeOutBack:function(t,e,i,n,o,r){return void 0==r&&(r=1.70158),n*((e=e/o-1)*e*((r+1)*e+r)+1)+i},easeInOutBack:function(t,e,i,n,o,r){return void 0==r&&(r=1.70158),(e/=o/2)<1?n/2*(e*e*(((r*=1.525)+1)*e-r))+i:n/2*((e-=2)*e*(((r*=1.525)+1)*e+r)+2)+i},easeInBounce:function(t,e,i,n,o){return n-jQuery.easing.easeOutBounce(t,o-e,0,n,o)+i},easeOutBounce:function(t,e,i,n,o){return(e/=o)<1/2.75?n*(7.5625*e*e)+i:e<2/2.75?n*(7.5625*(e-=1.5/2.75)*e+.75)+i:e<2.5/2.75?n*(7.5625*(e-=2.25/2.75)*e+.9375)+i:n*(7.5625*(e-=2.625/2.75)*e+.984375)+i},easeInOutBounce:function(t,e,i,n,o){return e<o/2?.5*jQuery.easing.easeInBounce(t,2*e,0,n,o)+i:.5*jQuery.easing.easeOutBounce(t,2*e-o,0,n,o)+.5*n+i}});