---
---
/*
 * jQuery JavaScript Library v1.3.2
 * http://jquery.com/
 *
 * Copyright (c) 2009 John Resig
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 *
 * Date: 2009-02-19 17:34:21 -0500 (Thu, 19 Feb 2009)
 * Revision: 6246
 */
(function(){var W=this,AB,F=W.jQuery,S=W.$,T=W.jQuery=W.$=function(B,A){return new T.fn.init(B,A)
},M=/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,AC=/^.[^:#\[\.,]*$/;
T.fn=T.prototype={init:function(a,B){a=a||document;
if(a.nodeType){this[0]=a;
this.length=1;
this.context=a;
return this
}if(typeof a==="string"){var C=M.exec(a);
if(C&&(C[1]||!B)){if(C[1]){a=T.clean([C[1]],B)
}else{var A=document.getElementById(C[3]);
if(A&&A.id!=C[3]){return T().find(a)
}var D=T(A||[]);
D.context=document;
D.selector=a;
return D
}}else{return T(B).find(a)
}}else{if(T.isFunction(a)){return T(document).ready(a)
}}if(a.selector&&a.context){this.selector=a.selector;
this.context=a.context
}return this.setArray(T.isArray(a)?a:T.makeArray(a))
},selector:"",jquery:"1.3.2",size:function(){return this.length
},get:function(A){return A===AB?Array.prototype.slice.call(this):this[A]
},pushStack:function(C,A,D){var B=T(C);
B.prevObject=this;
B.context=this.context;
if(A==="find"){B.selector=this.selector+(this.selector?" ":"")+D
}else{if(A){B.selector=this.selector+"."+A+"("+D+")"
}}return B
},setArray:function(A){this.length=0;
Array.prototype.push.apply(this,A);
return this
},each:function(A,B){return T.each(this,A,B)
},index:function(A){return T.inArray(A&&A.jquery?A[0]:A,this)
},attr:function(C,A,B){var D=C;
if(typeof C==="string"){if(A===AB){return this[0]&&T[B||"attr"](this[0],C)
}else{D={};
D[C]=A
}}return this.each(function(a){for(C in D){T.attr(B?this.style:this,C,T.prop(this,D[C],B,a,C))
}})
},css:function(B,A){if((B=="width"||B=="height")&&parseFloat(A)<0){A=AB
}return this.attr(B,A,"curCSS")
},text:function(A){if(typeof A!=="object"&&A!=null){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(A))
}var B="";
T.each(A||this,function(){T.each(this.childNodes,function(){if(this.nodeType!=8){B+=this.nodeType!=1?this.nodeValue:T.fn.text([this])
}})
});
return B
},wrapAll:function(B){if(this[0]){var A=T(B,this[0].ownerDocument).clone();
if(this[0].parentNode){A.insertBefore(this[0])
}A.map(function(){var C=this;
while(C.firstChild){C=C.firstChild
}return C
}).append(this)
}return this
},wrapInner:function(A){return this.each(function(){T(this).contents().wrapAll(A)
})
},wrap:function(A){return this.each(function(){T(this).wrapAll(A)
})
},append:function(){return this.domManip(arguments,true,function(A){if(this.nodeType==1){this.appendChild(A)
}})
},prepend:function(){return this.domManip(arguments,true,function(A){if(this.nodeType==1){this.insertBefore(A,this.firstChild)
}})
},before:function(){return this.domManip(arguments,false,function(A){this.parentNode.insertBefore(A,this)
})
},after:function(){return this.domManip(arguments,false,function(A){this.parentNode.insertBefore(A,this.nextSibling)
})
},end:function(){return this.prevObject||T([])
},push:[].push,sort:[].sort,splice:[].splice,find:function(B){if(this.length===1){var A=this.pushStack([],"find",B);
A.length=0;
T.find(B,this[0],A);
return A
}else{return this.pushStack(T.unique(T.map(this,function(C){return T.find(B,C)
})),"find",B)
}},clone:function(B){var D=this.map(function(){if(!T.support.noCloneEvent&&!T.isXMLDoc(this)){var b=this.outerHTML;
if(!b){var a=this.ownerDocument.createElement("div");
a.appendChild(this.cloneNode(true));
b=a.innerHTML
}return T.clean([b.replace(/ jQuery\d+="(?:\d+|null)"/g,"").replace(/^\s*/,"")])[0]
}else{return this.cloneNode(true)
}});
if(B===true){var A=this.find("*").andSelf(),C=0;
D.find("*").andSelf().each(function(){if(this.nodeName!==A[C].nodeName){return 
}var c=T.data(A[C],"events");
for(var a in c){for(var b in c[a]){T.event.add(this,a,c[a][b],c[a][b].data)
}}C++
})
}return D
},filter:function(A){return this.pushStack(T.isFunction(A)&&T.grep(this,function(B,C){return A.call(B,C)
})||T.multiFilter(A,T.grep(this,function(B){return B.nodeType===1
})),"filter",A)
},closest:function(C){var A=T.expr.match.POS.test(C)?T(C):null,B=0;
return this.map(function(){var D=this;
while(D&&D.ownerDocument){if(A?A.index(D)>-1:T(D).is(C)){T.data(D,"closest",B);
return D
}D=D.parentNode;
B++
}})
},not:function(B){if(typeof B==="string"){if(AC.test(B)){return this.pushStack(T.multiFilter(B,this,true),"not",B)
}else{B=T.multiFilter(B,this)
}}var A=B.length&&B[B.length-1]!==AB&&!B.nodeType;
return this.filter(function(){return A?T.inArray(this,B)<0:this!=B
})
},add:function(A){return this.pushStack(T.unique(T.merge(this.get(),typeof A==="string"?T(A):T.makeArray(A))))
},is:function(A){return !!A&&T.multiFilter(A,this).length>0
},hasClass:function(A){return !!A&&this.is("."+A)
},val:function(C){if(C===AB){var e=this[0];
if(e){if(T.nodeName(e,"option")){return(e.attributes.value||{}).specified?e.value:e.text
}if(T.nodeName(e,"select")){var a=e.selectedIndex,B=[],A=e.options,b=e.type=="select-one";
if(a<0){return null
}for(var d=b?a:0,D=b?a+1:A.length;
d<D;
d++){var c=A[d];
if(c.selected){C=T(c).val();
if(b){return C
}B.push(C)
}}return B
}return(e.value||"").replace(/\r/g,"")
}return AB
}if(typeof C==="number"){C+=""
}return this.each(function(){if(this.nodeType!=1){return 
}if(T.isArray(C)&&/radio|checkbox/.test(this.type)){this.checked=(T.inArray(this.value,C)>=0||T.inArray(this.name,C)>=0)
}else{if(T.nodeName(this,"select")){var f=T.makeArray(C);
T("option",this).each(function(){this.selected=(T.inArray(this.value,f)>=0||T.inArray(this.text,f)>=0)
});
if(!f.length){this.selectedIndex=-1
}}else{this.value=C
}}})
},html:function(A){return A===AB?(this[0]?this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g,""):null):this.empty().append(A)
},replaceWith:function(A){return this.after(A).remove()
},eq:function(A){return this.slice(A,+A+1)
},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments),"slice",Array.prototype.slice.call(arguments).join(","))
},map:function(A){return this.pushStack(T.map(this,function(B,C){return A.call(B,C,B)
}))
},andSelf:function(){return this.add(this.prevObject)
},domManip:function(D,A,B){if(this[0]){var a=(this[0].ownerDocument||this[0]).createDocumentFragment(),d=T.clean(D,(this[0].ownerDocument||this[0]),a),b=a.firstChild;
if(b){for(var c=0,e=this.length;
c<e;
c++){B.call(C(this[c],b),this.length>1||c>0?a.cloneNode(true):a)
}}if(d){T.each(d,E)
}}return this;
function C(g,f){return A&&T.nodeName(g,"table")&&T.nodeName(f,"tr")?(g.getElementsByTagName("tbody")[0]||g.appendChild(g.ownerDocument.createElement("tbody"))):g
}}};
T.fn.init.prototype=T.fn;
function E(B,A){if(A.src){T.ajax({url:A.src,async:false,dataType:"script"})
}else{T.globalEval(A.text||A.textContent||A.innerHTML||"")
}if(A.parentNode){A.parentNode.removeChild(A)
}}function AD(){return +new Date
}T.extend=T.fn.extend=function(){var C=arguments[0]||{},a=1,D=arguments.length,d=false,b;
if(typeof C==="boolean"){d=C;
C=arguments[1]||{};
a=2
}if(typeof C!=="object"&&!T.isFunction(C)){C={}
}if(D==a){C=this;
--a
}for(;
a<D;
a++){if((b=arguments[a])!=null){for(var c in b){var B=C[c],A=b[c];
if(C===A){continue
}if(d&&A&&typeof A==="object"&&!A.nodeType){C[c]=T.extend(d,B||(A.length!=null?[]:{}),A)
}else{if(A!==AB){C[c]=A
}}}}}return C
};
var AG=/z-?index|font-?weight|opacity|zoom|line-?height/i,Q=document.defaultView||{},L=Object.prototype.toString;
T.extend({noConflict:function(A){W.$=S;
if(A){W.jQuery=F
}return T
},isFunction:function(A){return L.call(A)==="[object Function]"
},isArray:function(A){return L.call(A)==="[object Array]"
},isXMLDoc:function(A){return A.nodeType===9&&A.documentElement.nodeName!=="HTML"||!!A.ownerDocument&&T.isXMLDoc(A.ownerDocument)
},globalEval:function(A){if(A&&/\S/.test(A)){var B=document.getElementsByTagName("head")[0]||document.documentElement,C=document.createElement("script");
C.type="text/javascript";
if(T.support.scriptEval){C.appendChild(document.createTextNode(A))
}else{C.text=A
}B.insertBefore(C,B.firstChild);
B.removeChild(C)
}},nodeName:function(A,B){return A.nodeName&&A.nodeName.toUpperCase()==B.toUpperCase()
},each:function(a,A,b){var c,D=0,C=a.length;
if(b){if(C===AB){for(c in a){if(A.apply(a[c],b)===false){break
}}}else{for(;
D<C;
){if(A.apply(a[D++],b)===false){break
}}}}else{if(C===AB){for(c in a){if(A.call(a[c],c,a[c])===false){break
}}}else{for(var B=a[0];
D<C&&A.call(B,D,B)!==false;
B=a[++D]){}}}return a
},prop:function(B,A,C,D,a){if(T.isFunction(A)){A=A.call(B,D)
}return typeof A==="number"&&C=="curCSS"&&!AG.test(a)?A+"px":A
},className:{add:function(B,A){T.each((A||"").split(/\s+/),function(D,C){if(B.nodeType==1&&!T.className.has(B.className,C)){B.className+=(B.className?" ":"")+C
}})
},remove:function(B,A){if(B.nodeType==1){B.className=A!==AB?T.grep(B.className.split(/\s+/),function(C){return !T.className.has(A,C)
}).join(" "):""
}},has:function(A,B){return A&&T.inArray(B,(A.className||A).toString().split(/\s+/))>-1
}},swap:function(B,C,A){var a={};
for(var D in C){a[D]=B.style[D];
B.style[D]=C[D]
}A.call(B);
for(var D in C){B.style[D]=a[D]
}},css:function(a,c,C,d){if(c=="width"||c=="height"){var A,b={position:"absolute",visibility:"hidden",display:"block"},B=c=="width"?["Left","Right"]:["Top","Bottom"];
function D(){A=c=="width"?a.offsetWidth:a.offsetHeight;
if(d==="border"){return 
}T.each(B,function(){if(!d){A-=parseFloat(T.curCSS(a,"padding"+this,true))||0
}if(d==="margin"){A+=parseFloat(T.curCSS(a,"margin"+this,true))||0
}else{A-=parseFloat(T.curCSS(a,"border"+this+"Width",true))||0
}})
}if(a.offsetWidth!==0){D()
}else{T.swap(a,b,D)
}return Math.max(0,Math.round(A))
}return T.curCSS(a,c,C)
},curCSS:function(a,d,c){var B,e=a.style;
if(d=="opacity"&&!T.support.opacity){B=T.attr(e,"opacity");
return B==""?"1":B
}if(d.match(/float/i)){d=H
}if(!c&&e&&e[d]){B=e[d]
}else{if(Q.getComputedStyle){if(d.match(/float/i)){d="float"
}d=d.replace(/([A-Z])/g,"-$1").toLowerCase();
var A=Q.getComputedStyle(a,null);
if(A){B=A.getPropertyValue(d)
}if(d=="opacity"&&B==""){B="1"
}}else{if(a.currentStyle){var D=d.replace(/\-(\w)/g,function(g,f){return f.toUpperCase()
});
B=a.currentStyle[d]||a.currentStyle[D];
if(!/^\d+(px)?$/i.test(B)&&/^\d/.test(B)){var b=e.left,C=a.runtimeStyle.left;
a.runtimeStyle.left=a.currentStyle.left;
e.left=B||0;
B=e.pixelLeft+"px";
e.left=b;
a.runtimeStyle.left=C
}}}}return B
},clean:function(c,B,D){B=B||document;
if(typeof B.createElement==="undefined"){B=B.ownerDocument||B[0]&&B[0].ownerDocument||document
}if(!D&&c.length===1&&typeof c[0]==="string"){var a=/^<(\w+)\s*\/?>$/.exec(c[0]);
if(a){return[B.createElement(a[1])]
}}var b=[],d=[],A=B.createElement("div");
T.each(c,function(h,e){if(typeof e==="number"){e+=""
}if(!e){return 
}if(typeof e==="string"){e=e.replace(/(<(\w+)[^>]*?)\/>/g,function(m,l,n){return n.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?m:l+"></"+n+">"
});
var i=e.replace(/^\s+/,"").substring(0,10).toLowerCase();
var g=!i.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!i.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||i.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!i.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!i.indexOf("<td")||!i.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!i.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||!T.support.htmlSerialize&&[1,"div<div>","</div>"]||[0,"",""];
A.innerHTML=g[1]+e+g[2];
while(g[0]--){A=A.lastChild
}if(!T.support.tbody){var f=/<tbody/i.test(e),j=!i.indexOf("<table")&&!f?A.firstChild&&A.firstChild.childNodes:g[1]=="<table>"&&!f?A.childNodes:[];
for(var k=j.length-1;
k>=0;
--k){if(T.nodeName(j[k],"tbody")&&!j[k].childNodes.length){j[k].parentNode.removeChild(j[k])
}}}if(!T.support.leadingWhitespace&&/^\s/.test(e)){A.insertBefore(B.createTextNode(e.match(/^\s*/)[0]),A.firstChild)
}e=T.makeArray(A.childNodes)
}if(e.nodeType){b.push(e)
}else{b=T.merge(b,e)
}});
if(D){for(var C=0;
b[C];
C++){if(T.nodeName(b[C],"script")&&(!b[C].type||b[C].type.toLowerCase()==="text/javascript")){d.push(b[C].parentNode?b[C].parentNode.removeChild(b[C]):b[C])
}else{if(b[C].nodeType===1){b.splice.apply(b,[C+1,0].concat(T.makeArray(b[C].getElementsByTagName("script"))))
}D.appendChild(b[C])
}}return d
}return b
},attr:function(C,b,B){if(!C||C.nodeType==3||C.nodeType==8){return AB
}var a=!T.isXMLDoc(C),A=B!==AB;
b=a&&T.props[b]||b;
if(C.tagName){var c=/href|src|style/.test(b);
if(b=="selected"&&C.parentNode){C.parentNode.selectedIndex
}if(b in C&&a&&!c){if(A){if(b=="type"&&T.nodeName(C,"input")&&C.parentNode){throw"type property can't be changed"
}C[b]=B
}if(T.nodeName(C,"form")&&C.getAttributeNode(b)){return C.getAttributeNode(b).nodeValue
}if(b=="tabIndex"){var D=C.getAttributeNode("tabIndex");
return D&&D.specified?D.value:C.nodeName.match(/(button|input|object|select|textarea)/i)?0:C.nodeName.match(/^(a|area)$/i)&&C.href?0:AB
}return C[b]
}if(!T.support.style&&a&&b=="style"){return T.attr(C.style,"cssText",B)
}if(A){C.setAttribute(b,""+B)
}var d=!T.support.hrefNormalized&&a&&c?C.getAttribute(b,2):C.getAttribute(b);
return d===null?AB:d
}if(!T.support.opacity&&b=="opacity"){if(A){C.zoom=1;
C.filter=(C.filter||"").replace(/alpha\([^)]*\)/,"")+(parseInt(B)+""=="NaN"?"":"alpha(opacity="+B*100+")")
}return C.filter&&C.filter.indexOf("opacity=")>=0?(parseFloat(C.filter.match(/opacity=([^)]*)/)[1])/100)+"":""
}b=b.replace(/-([a-z])/ig,function(f,e){return e.toUpperCase()
});
if(A){C[b]=B
}return C[b]
},trim:function(A){return(A||"").replace(/^\s+|\s+$/g,"")
},makeArray:function(A){var C=[];
if(A!=null){var B=A.length;
if(B==null||typeof A==="string"||T.isFunction(A)||A.setInterval){C[0]=A
}else{while(B){C[--B]=A[B]
}}}return C
},inArray:function(B,A){for(var D=0,C=A.length;
D<C;
D++){if(A[D]===B){return D
}}return -1
},merge:function(B,a){var D=0,C,A=B.length;
if(!T.support.getAll){while((C=a[D++])!=null){if(C.nodeType!=8){B[A++]=C
}}}else{while((C=a[D++])!=null){B[A++]=C
}}return B
},unique:function(A){var b=[],c={};
try{for(var a=0,D=A.length;
a<D;
a++){var B=T.data(A[a]);
if(!c[B]){c[B]=true;
b.push(A[a])
}}}catch(C){b=A
}return b
},grep:function(a,A,b){var D=[];
for(var C=0,B=a.length;
C<B;
C++){if(!b!=!A(a[C],C)){D.push(a[C])
}}return D
},map:function(b,A){var a=[];
for(var D=0,C=b.length;
D<C;
D++){var B=A(b[D],D);
if(B!=null){a[a.length]=B
}}return a.concat.apply([],a)
}});
var O=navigator.userAgent.toLowerCase();
T.browser={version:(O.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],safari:/webkit/.test(O),opera:/opera/.test(O),msie:/msie/.test(O)&&!/opera/.test(O),mozilla:/mozilla/.test(O)&&!/(compatible|webkit)/.test(O)};
T.each({parent:function(A){return A.parentNode
},parents:function(A){return T.dir(A,"parentNode")
},next:function(A){return T.nth(A,2,"nextSibling")
},prev:function(A){return T.nth(A,2,"previousSibling")
},nextAll:function(A){return T.dir(A,"nextSibling")
},prevAll:function(A){return T.dir(A,"previousSibling")
},siblings:function(A){return T.sibling(A.parentNode.firstChild,A)
},children:function(A){return T.sibling(A.firstChild)
},contents:function(A){return T.nodeName(A,"iframe")?A.contentDocument||A.contentWindow.document:T.makeArray(A.childNodes)
}},function(B,A){T.fn[B]=function(D){var C=T.map(this,A);
if(D&&typeof D=="string"){C=T.multiFilter(D,C)
}return this.pushStack(T.unique(C),B,D)
}
});
T.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(B,A){T.fn[B]=function(d){var a=[],C=T(d);
for(var D=0,c=C.length;
D<c;
D++){var b=(D>0?this.clone(true):this).get();
T.fn[A].apply(T(C[D]),b);
a=a.concat(b)
}return this.pushStack(a,B,d)
}
});
T.each({removeAttr:function(A){T.attr(this,A,"");
if(this.nodeType==1){this.removeAttribute(A)
}},addClass:function(A){T.className.add(this,A)
},removeClass:function(A){T.className.remove(this,A)
},toggleClass:function(A,B){if(typeof B!=="boolean"){B=!T.className.has(this,A)
}T.className[B?"add":"remove"](this,A)
},remove:function(A){if(!A||T.filter(A,[this]).length){T("*",this).add([this]).each(function(){T.event.remove(this);
T.removeData(this)
});
if(this.parentNode){this.parentNode.removeChild(this)
}}},empty:function(){T(this).children().remove();
while(this.firstChild){this.removeChild(this.firstChild)
}}},function(B,A){T.fn[B]=function(){return this.each(A,arguments)
}
});
function Y(B,A){return B[0]&&parseInt(T.curCSS(B[0],A,true),10)||0
}var AA="jQuery"+AD(),I=0,R={};
T.extend({cache:{},data:function(C,D,B){C=C==W?R:C;
var A=C[AA];
if(!A){A=C[AA]=++I
}if(D&&!T.cache[A]){T.cache[A]={}
}if(B!==AB){T.cache[A][D]=B
}return D?T.cache[A][D]:A
},removeData:function(C,D){C=C==W?R:C;
var A=C[AA];
if(D){if(T.cache[A]){delete T.cache[A][D];
D="";
for(D in T.cache[A]){break
}if(!D){T.removeData(C)
}}}else{try{delete C[AA]
}catch(B){if(C.removeAttribute){C.removeAttribute(AA)
}}delete T.cache[A]
}},queue:function(C,D,A){if(C){D=(D||"fx")+"queue";
var B=T.data(C,D);
if(!B||T.isArray(A)){B=T.data(C,D,T.makeArray(A))
}else{if(A){B.push(A)
}}}return B
},dequeue:function(A,B){var D=T.queue(A,B),C=D.shift();
if(!B||B==="fx"){C=D[0]
}if(C!==AB){C.call(A)
}}});
T.fn.extend({data:function(D,B){var A=D.split(".");
A[1]=A[1]?"."+A[1]:"";
if(B===AB){var C=this.triggerHandler("getData"+A[1]+"!",[A[0]]);
if(C===AB&&this.length){C=T.data(this[0],D)
}return C===AB&&A[1]?this.data(A[0]):C
}else{return this.trigger("setData"+A[1]+"!",[A[0],B]).each(function(){T.data(this,D,B)
})
}},removeData:function(A){return this.each(function(){T.removeData(this,A)
})
},queue:function(B,A){if(typeof B!=="string"){A=B;
B="fx"
}if(A===AB){return T.queue(this[0],B)
}return this.each(function(){var C=T.queue(this,B,A);
if(B=="fx"&&C.length==1){C[0].call(this)
}})
},dequeue:function(A){return this.each(function(){T.dequeue(this,A)
})
}});
(function(){var B=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,d=0,h=Object.prototype.toString;
var j=function(n,r,AI,z){AI=AI||[];
r=r||document;
if(r.nodeType!==1&&r.nodeType!==9){return[]
}if(!n||typeof n!=="string"){return AI
}var m=[],p,w,t,s,y,q,o=true;
B.lastIndex=0;
while((p=B.exec(n))!==null){m.push(p[1]);
if(p[2]){q=RegExp.rightContext;
break
}}if(m.length>1&&c.exec(n)){if(m.length===2&&g.relative[m[0]]){w=f(m[0]+m[1],r)
}else{w=g.relative[m[0]]?[r]:j(m.shift(),r);
while(m.length){n=m.shift();
if(g.relative[n]){n+=m.shift()
}w=f(n,w)
}}}else{var x=z?{expr:m.pop(),set:k(z)}:j.find(m.pop(),m.length===1&&r.parentNode?r.parentNode:r,C(r));
w=j.filter(x.expr,x.set);
if(m.length>0){t=k(w)
}else{o=false
}while(m.length){var u=m.pop(),v=u;
if(!g.relative[u]){u=""
}else{v=m.pop()
}if(v==null){v=r
}g.relative[u](t,v,C(r))
}}if(!t){t=w
}if(!t){throw"Syntax error, unrecognized expression: "+(u||n)
}if(h.call(t)==="[object Array]"){if(!o){AI.push.apply(AI,t)
}else{if(r.nodeType===1){for(var l=0;
t[l]!=null;
l++){if(t[l]&&(t[l]===true||t[l].nodeType===1&&e(r,t[l]))){AI.push(w[l])
}}}else{for(var l=0;
t[l]!=null;
l++){if(t[l]&&t[l].nodeType===1){AI.push(w[l])
}}}}}else{k(t,AI)
}if(q){j(q,r,AI,z);
if(i){hasDuplicate=false;
AI.sort(i);
if(hasDuplicate){for(var l=1;
l<AI.length;
l++){if(AI[l]===AI[l-1]){AI.splice(l--,1)
}}}}}return AI
};
j.matches=function(m,l){return j(m,null,null,l)
};
j.find=function(l,s,t){var m,o;
if(!l){return[]
}for(var p=0,q=g.order.length;
p<q;
p++){var n=g.order[p],o;
if((o=g.match[n].exec(l))){var r=RegExp.leftContext;
if(r.substr(r.length-1)!=="\\"){o[1]=(o[1]||"").replace(/\\/g,"");
m=g.find[n](o,s,t);
if(m!=null){l=l.replace(g.match[n],"");
break
}}}}if(!m){m=s.getElementsByTagName("*")
}return{set:m,expr:l}
};
j.filter=function(y,z,v,p){var q=y,t=[],l=z,n,s,m=z&&z[0]&&C(z[0]);
while(y&&z.length){for(var AI in g.filter){if((n=g.match[AI].exec(y))!=null){var r=g.filter[AI],u,w;
s=false;
if(l==t){t=[]
}if(g.preFilter[AI]){n=g.preFilter[AI](n,l,v,t,p,m);
if(!n){s=u=true
}else{if(n===true){continue
}}}if(n){for(var o=0;
(w=l[o])!=null;
o++){if(w){u=r(w,n,o,l);
var x=p^!!u;
if(v&&u!=null){if(x){s=true
}else{l[o]=false
}}else{if(x){t.push(w);
s=true
}}}}}if(u!==AB){if(!v){l=t
}y=y.replace(g.match[AI],"");
if(!s){return[]
}break
}}}if(y==q){if(s==null){throw"Syntax error, unrecognized expression: "+y
}else{break
}}q=y
}return l
};
var g=j.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(l){return l.getAttribute("href")
}},relative:{"+":function(l,s,m){var o=typeof s==="string",t=o&&!/\W/.test(s),n=o&&!t;
if(t&&!m){s=s.toUpperCase()
}for(var p=0,q=l.length,r;
p<q;
p++){if((r=l[p])){while((r=r.previousSibling)&&r.nodeType!==1){}l[p]=n||r&&r.nodeName===s?r||false:r===s
}}if(n){j.filter(s,l,true)
}},">":function(q,n,p){var s=typeof n==="string";
if(s&&!/\W/.test(n)){n=p?n:n.toUpperCase();
for(var m=0,o=q.length;
m<o;
m++){var r=q[m];
if(r){var l=r.parentNode;
q[m]=l.nodeName===n?l:false
}}}else{for(var m=0,o=q.length;
m<o;
m++){var r=q[m];
if(r){q[m]=s?r.parentNode:r.parentNode===n
}}if(s){j.filter(n,q,true)
}}},"":function(l,n,p){var m=d++,o=A;
if(!n.match(/\W/)){var q=n=p?n:n.toUpperCase();
o=D
}o("parentNode",n,m,l,q,p)
},"~":function(l,n,p){var m=d++,o=A;
if(typeof n==="string"&&!n.match(/\W/)){var q=n=p?n:n.toUpperCase();
o=D
}o("previousSibling",n,m,l,q,p)
}},find:{ID:function(n,m,l){if(typeof m.getElementById!=="undefined"&&!l){var o=m.getElementById(n[1]);
return o?[o]:[]
}},NAME:function(m,q,p){if(typeof q.getElementsByName!=="undefined"){var n=[],r=q.getElementsByName(m[1]);
for(var l=0,o=r.length;
l<o;
l++){if(r[l].getAttribute("name")===m[1]){n.push(r[l])
}}return n.length===0?null:n
}},TAG:function(m,l){return l.getElementsByTagName(m[1])
}},preFilter:{CLASS:function(l,n,m,o,q,p){l=" "+l[1].replace(/\\/g,"")+" ";
if(p){return l
}for(var s=0,r;
(r=n[s])!=null;
s++){if(r){if(q^(r.className&&(" "+r.className+" ").indexOf(l)>=0)){if(!m){o.push(r)
}}else{if(m){n[s]=false
}}}}return false
},ID:function(l){return l[1].replace(/\\/g,"")
},TAG:function(m,n){for(var l=0;
n[l]===false;
l++){}return n[l]&&C(n[l])?m[1]:m[1].toUpperCase()
},CHILD:function(m){if(m[1]=="nth"){var l=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(m[2]=="even"&&"2n"||m[2]=="odd"&&"2n+1"||!/\D/.test(m[2])&&"0n+"+m[2]||m[2]);
m[2]=(l[1]+(l[2]||1))-0;
m[3]=l[3]-0
}m[0]=d++;
return m
},ATTR:function(r,n,m,o,q,p){var l=r[1].replace(/\\/g,"");
if(!p&&g.attrMap[l]){r[1]=g.attrMap[l]
}if(r[2]==="~="){r[4]=" "+r[4]+" "
}return r
},PSEUDO:function(q,n,m,o,p){if(q[1]==="not"){if(q[3].match(B).length>1||/^\w/.test(q[3])){q[3]=j(q[3],null,null,n)
}else{var l=j.filter(q[3],n,m,true^p);
if(!m){o.push.apply(o,l)
}return false
}}else{if(g.match.POS.test(q[0])||g.match.CHILD.test(q[0])){return true
}}return q
},POS:function(l){l.unshift(true);
return l
}},filters:{enabled:function(l){return l.disabled===false&&l.type!=="hidden"
},disabled:function(l){return l.disabled===true
},checked:function(l){return l.checked===true
},selected:function(l){l.parentNode.selectedIndex;
return l.selected===true
},parent:function(l){return !!l.firstChild
},empty:function(l){return !l.firstChild
},has:function(l,m,n){return !!j(n[3],l).length
},header:function(l){return/h\d/i.test(l.nodeName)
},text:function(l){return"text"===l.type
},radio:function(l){return"radio"===l.type
},checkbox:function(l){return"checkbox"===l.type
},file:function(l){return"file"===l.type
},password:function(l){return"password"===l.type
},submit:function(l){return"submit"===l.type
},image:function(l){return"image"===l.type
},reset:function(l){return"reset"===l.type
},button:function(l){return"button"===l.type||l.nodeName.toUpperCase()==="BUTTON"
},input:function(l){return/input|select|textarea|button/i.test(l.nodeName)
}},setFilters:{first:function(l,m){return m===0
},last:function(m,n,o,l){return n===l.length-1
},even:function(l,m){return m%2===0
},odd:function(l,m){return m%2===1
},lt:function(l,m,n){return m<n[3]-0
},gt:function(l,m,n){return m>n[3]-0
},nth:function(l,m,n){return n[3]-0==m
},eq:function(l,m,n){return n[3]-0==m
}},filter:{PSEUDO:function(q,m,l,p){var n=m[1],s=g.filters[n];
if(s){return s(q,l,m,p)
}else{if(n==="contains"){return(q.textContent||q.innerText||"").indexOf(m[3])>=0
}else{if(n==="not"){var r=m[3];
for(var l=0,o=r.length;
l<o;
l++){if(r[l]===q){return false
}}return true
}}}},CHILD:function(s,p){var m=p[1],r=s;
switch(m){case"only":case"first":while(r=r.previousSibling){if(r.nodeType===1){return false
}}if(m=="first"){return true
}r=s;
case"last":while(r=r.nextSibling){if(r.nodeType===1){return false
}}return true;
case"nth":var q=p[2],t=p[3];
if(q==1&&t==0){return true
}var n=p[0],u=s.parentNode;
if(u&&(u.sizcache!==n||!s.nodeIndex)){var o=0;
for(r=u.firstChild;
r;
r=r.nextSibling){if(r.nodeType===1){r.nodeIndex=++o
}}u.sizcache=n
}var l=s.nodeIndex-t;
if(q==0){return l==0
}else{return(l%q==0&&l/q>=0)
}}},ID:function(l,m){return l.nodeType===1&&l.getAttribute("id")===m
},TAG:function(l,m){return(m==="*"&&l.nodeType===1)||l.nodeName===m
},CLASS:function(l,m){return(" "+(l.className||l.getAttribute("class"))+" ").indexOf(m)>-1
},ATTR:function(q,l){var m=l[1],o=g.attrHandle[m]?g.attrHandle[m](q):q[m]!=null?q[m]:q.getAttribute(m),p=o+"",r=l[2],n=l[4];
return o==null?r==="!=":r==="="?p===n:r==="*="?p.indexOf(n)>=0:r==="~="?(" "+p+" ").indexOf(n)>=0:!n?p&&o!==false:r==="!="?p!=n:r==="^="?p.indexOf(n)===0:r==="$="?p.substr(p.length-n.length)===n:r==="|="?p===n||p.substr(0,n.length+1)===n+"-":false
},POS:function(q,n,m,p){var o=n[2],l=g.setFilters[o];
if(l){return l(q,m,n,p)
}}}};
var c=g.match.POS;
for(var a in g.match){g.match[a]=RegExp(g.match[a].source+/(?![^\[]*\])(?![^\(]*\))/.source)
}var k=function(l,m){l=Array.prototype.slice.call(l);
if(m){m.push.apply(m,l);
return m
}return l
};
try{Array.prototype.slice.call(document.documentElement.childNodes)
}catch(b){k=function(p,l){var n=l||[];
if(h.call(p)==="[object Array]"){Array.prototype.push.apply(n,p)
}else{if(typeof p.length==="number"){for(var m=0,o=p.length;
m<o;
m++){n.push(p[m])
}}else{for(var m=0;
p[m];
m++){n.push(p[m])
}}}return n
}
}var i;
if(document.documentElement.compareDocumentPosition){i=function(m,n){var l=m.compareDocumentPosition(n)&4?-1:m===n?0:1;
if(l===0){hasDuplicate=true
}return l
}
}else{if("sourceIndex" in document.documentElement){i=function(m,n){var l=m.sourceIndex-n.sourceIndex;
if(l===0){hasDuplicate=true
}return l
}
}else{if(document.createRange){i=function(l,n){var m=l.ownerDocument.createRange(),o=n.ownerDocument.createRange();
m.selectNode(l);
m.collapse(true);
o.selectNode(n);
o.collapse(true);
var p=m.compareBoundaryPoints(Range.START_TO_END,o);
if(p===0){hasDuplicate=true
}return p
}
}}}(function(){var m=document.createElement("form"),l="script"+(new Date).getTime();
m.innerHTML="<input name='"+l+"'/>";
var n=document.documentElement;
n.insertBefore(m,n.firstChild);
if(!!document.getElementById(l)){g.find.ID=function(r,q,p){if(typeof q.getElementById!=="undefined"&&!p){var o=q.getElementById(r[1]);
return o?o.id===r[1]||typeof o.getAttributeNode!=="undefined"&&o.getAttributeNode("id").nodeValue===r[1]?[o]:AB:[]
}};
g.filter.ID=function(p,o){var q=typeof p.getAttributeNode!=="undefined"&&p.getAttributeNode("id");
return p.nodeType===1&&q&&q.nodeValue===o
}
}n.removeChild(m)
})();
(function(){var l=document.createElement("div");
l.appendChild(document.createComment(""));
if(l.getElementsByTagName("*").length>0){g.find.TAG=function(o,p){var q=p.getElementsByTagName(o[1]);
if(o[1]==="*"){var m=[];
for(var n=0;
q[n];
n++){if(q[n].nodeType===1){m.push(q[n])
}}q=m
}return q
}
}l.innerHTML="<a href='#'></a>";
if(l.firstChild&&typeof l.firstChild.getAttribute!=="undefined"&&l.firstChild.getAttribute("href")!=="#"){g.attrHandle.href=function(m){return m.getAttribute("href",2)
}
}})();
if(document.querySelectorAll){(function(){var m=j,l=document.createElement("div");
l.innerHTML="<p class='TEST'></p>";
if(l.querySelectorAll&&l.querySelectorAll(".TEST").length===0){return 
}j=function(q,r,o,n){r=r||document;
if(!n&&r.nodeType===9&&!C(r)){try{return k(r.querySelectorAll(q),o)
}catch(p){}}return m(q,r,o,n)
};
j.find=m.find;
j.filter=m.filter;
j.selectors=m.selectors;
j.matches=m.matches
})()
}if(document.getElementsByClassName&&document.documentElement.getElementsByClassName){(function(){var l=document.createElement("div");
l.innerHTML="<div class='test e'></div><div class='test'></div>";
if(l.getElementsByClassName("e").length===0){return 
}l.lastChild.className="e";
if(l.getElementsByClassName("e").length===1){return 
}g.order.splice(1,0,"CLASS");
g.find.CLASS=function(o,n,m){if(typeof n.getElementsByClassName!=="undefined"&&!m){return n.getElementsByClassName(o[1])
}}
})()
}function D(r,m,n,t,l,u){var v=r=="previousSibling"&&!u;
for(var p=0,q=t.length;
p<q;
p++){var s=t[p];
if(s){if(v&&s.nodeType===1){s.sizcache=n;
s.sizset=p
}s=s[r];
var o=false;
while(s){if(s.sizcache===n){o=t[s.sizset];
break
}if(s.nodeType===1&&!u){s.sizcache=n;
s.sizset=p
}if(s.nodeName===m){o=s;
break
}s=s[r]
}t[p]=o
}}}function A(r,m,n,t,l,u){var v=r=="previousSibling"&&!u;
for(var p=0,q=t.length;
p<q;
p++){var s=t[p];
if(s){if(v&&s.nodeType===1){s.sizcache=n;
s.sizset=p
}s=s[r];
var o=false;
while(s){if(s.sizcache===n){o=t[s.sizset];
break
}if(s.nodeType===1){if(!u){s.sizcache=n;
s.sizset=p
}if(typeof m!=="string"){if(s===m){o=true;
break
}}else{if(j.filter(m,[s]).length>0){o=s;
break
}}}s=s[r]
}t[p]=o
}}}var e=document.compareDocumentPosition?function(l,m){return l.compareDocumentPosition(m)&16
}:function(l,m){return l!==m&&(l.contains?l.contains(m):true)
};
var C=function(l){return l.nodeType===9&&l.documentElement.nodeName!=="HTML"||!!l.ownerDocument&&C(l.ownerDocument)
};
var f=function(o,q){var l=[],s="",r,m=q.nodeType?[q]:q;
while((r=g.match.PSEUDO.exec(o))){s+=r[0];
o=o.replace(g.match.PSEUDO,"")
}o=g.relative[o]?o+"*":o;
for(var p=0,n=m.length;
p<n;
p++){j(o,m[p],l)
}return j.filter(s,l)
};
T.find=j;
T.filter=j.filter;
T.expr=j.selectors;
T.expr[":"]=T.expr.filters;
j.selectors.filters.hidden=function(l){return l.offsetWidth===0||l.offsetHeight===0
};
j.selectors.filters.visible=function(l){return l.offsetWidth>0||l.offsetHeight>0
};
j.selectors.filters.animated=function(l){return T.grep(T.timers,function(m){return l===m.elem
}).length
};
T.multiFilter=function(l,n,m){if(m){l=":not("+l+")"
}return j.matches(l,n)
};
T.dir=function(m,n){var o=[],l=m[n];
while(l&&l!=document){if(l.nodeType==1){o.push(l)
}l=l[n]
}return o
};
T.nth=function(p,o,m,l){o=o||1;
var n=0;
for(;
p;
p=p[m]){if(p.nodeType==1&&++n==o){break
}}return p
};
T.sibling=function(l,m){var n=[];
for(;
l;
l=l.nextSibling){if(l.nodeType==1&&l!=m){n.push(l)
}}return n
};
return ;
W.Sizzle=j
})();
T.event={add:function(C,b,D,A){if(C.nodeType==3||C.nodeType==8){return 
}if(C.setInterval&&C!=W){C=W
}if(!D.guid){D.guid=this.guid++
}if(A!==AB){var a=D;
D=this.proxy(a);
D.data=A
}var c=T.data(C,"events")||T.data(C,"events",{}),B=T.data(C,"handle")||T.data(C,"handle",function(){return typeof T!=="undefined"&&!T.event.triggered?T.event.handle.apply(arguments.callee.elem,arguments):AB
});
B.elem=C;
T.each(b.split(/\s+/),function(g,f){var e=f.split(".");
f=e.shift();
D.type=e.slice().sort().join(".");
var d=c[f];
if(T.event.specialAll[f]){T.event.specialAll[f].setup.call(C,A,e)
}if(!d){d=c[f]={};
if(!T.event.special[f]||T.event.special[f].setup.call(C,A,e)===false){if(C.addEventListener){C.addEventListener(f,B,false)
}else{if(C.attachEvent){C.attachEvent("on"+f,B)
}}}}d[D.guid]=D;
T.event.global[f]=true
});
C=null
},guid:1,global:{},remove:function(B,a,C){if(B.nodeType==3||B.nodeType==8){return 
}var b=T.data(B,"events"),c,d;
if(b){if(a===AB||(typeof a==="string"&&a.charAt(0)==".")){for(var D in b){this.remove(B,D+(a||""))
}}else{if(a.type){C=a.handler;
a=a.type
}T.each(a.split(/\s+/),function(i,g){var e=g.split(".");
g=e.shift();
var h=RegExp("(^|\\.)"+e.slice().sort().join(".*\\.")+"(\\.|$)");
if(b[g]){if(C){delete b[g][C.guid]
}else{for(var f in b[g]){if(h.test(b[g][f].type)){delete b[g][f]
}}}if(T.event.specialAll[g]){T.event.specialAll[g].teardown.call(B,e)
}for(c in b[g]){break
}if(!c){if(!T.event.special[g]||T.event.special[g].teardown.call(B,e)===false){if(B.removeEventListener){B.removeEventListener(g,T.data(B,"handle"),false)
}else{if(B.detachEvent){B.detachEvent("on"+g,T.data(B,"handle"))
}}}c=null;
delete b[g]
}}})
}for(c in b){break
}if(!c){var A=T.data(B,"handle");
if(A){A.elem=null
}T.removeData(B,"events");
T.removeData(B,"handle")
}}},trigger:function(D,B,a,d){var b=D.type||D;
if(!d){D=typeof D==="object"?D[AA]?D:T.extend(T.Event(b),D):T.Event(b);
if(b.indexOf("!")>=0){D.type=b=b.slice(0,-1);
D.exclusive=true
}if(!a){D.stopPropagation();
if(this.global[b]){T.each(T.cache,function(){if(this.events&&this.events[b]){T.event.trigger(D,B,this.handle.elem)
}})
}}if(!a||a.nodeType==3||a.nodeType==8){return AB
}D.result=AB;
D.target=a;
B=T.makeArray(B);
B.unshift(D)
}D.currentTarget=a;
var C=T.data(a,"handle");
if(C){C.apply(a,B)
}if((!a[b]||(T.nodeName(a,"a")&&b=="click"))&&a["on"+b]&&a["on"+b].apply(a,B)===false){D.result=false
}if(!d&&a[b]&&!D.isDefaultPrevented()&&!(T.nodeName(a,"a")&&b=="click")){this.triggered=true;
try{a[b]()
}catch(A){}}this.triggered=false;
if(!D.isPropagationStopped()){var c=a.parentNode||a.ownerDocument;
if(c){T.event.trigger(D,B,c,true)
}}},handle:function(B){var C,d;
B=arguments[0]=T.event.fix(B||W.event);
B.currentTarget=this;
var A=B.type.split(".");
B.type=A.shift();
C=!A.length&&!B.exclusive;
var D=RegExp("(^|\\.)"+A.slice().sort().join(".*\\.")+"(\\.|$)");
d=(T.data(this,"events")||{})[B.type];
for(var b in d){var a=d[b];
if(C||D.test(a.type)){B.handler=a;
B.data=a.data;
var c=a.apply(this,arguments);
if(c!==AB){B.result=c;
if(c===false){B.preventDefault();
B.stopPropagation()
}}if(B.isImmediatePropagationStopped()){break
}}}},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(C){if(C[AA]){return C
}var a=C;
C=T.Event(a);
for(var D=this.props.length,A;
D;
){A=this.props[--D];
C[A]=a[A]
}if(!C.target){C.target=C.srcElement||document
}if(C.target.nodeType==3){C.target=C.target.parentNode
}if(!C.relatedTarget&&C.fromElement){C.relatedTarget=C.fromElement==C.target?C.toElement:C.fromElement
}if(C.pageX==null&&C.clientX!=null){var B=document.documentElement,b=document.body;
C.pageX=C.clientX+(B&&B.scrollLeft||b&&b.scrollLeft||0)-(B.clientLeft||0);
C.pageY=C.clientY+(B&&B.scrollTop||b&&b.scrollTop||0)-(B.clientTop||0)
}if(!C.which&&((C.charCode||C.charCode===0)?C.charCode:C.keyCode)){C.which=C.charCode||C.keyCode
}if(!C.metaKey&&C.ctrlKey){C.metaKey=C.ctrlKey
}if(!C.which&&C.button){C.which=(C.button&1?1:(C.button&2?3:(C.button&4?2:0)))
}return C
},proxy:function(A,B){B=B||function(){return A.apply(this,arguments)
};
B.guid=A.guid=A.guid||B.guid||this.guid++;
return B
},special:{ready:{setup:P,teardown:function(){}}},specialAll:{live:{setup:function(B,A){T.event.add(this,A[0],AF)
},teardown:function(A){if(A.length){var C=0,B=RegExp("(^|\\.)"+A[0]+"(\\.|$)");
T.each((T.data(this,"events").live||{}),function(){if(B.test(this.type)){C++
}});
if(C<1){T.event.remove(this,A[0],AF)
}}}}}};
T.Event=function(A){if(!this.preventDefault){return new T.Event(A)
}if(A&&A.type){this.originalEvent=A;
this.type=A.type
}else{this.type=A
}this.timeStamp=AD();
this[AA]=true
};
function X(){return false
}function J(){return true
}T.Event.prototype={preventDefault:function(){this.isDefaultPrevented=J;
var A=this.originalEvent;
if(!A){return 
}if(A.preventDefault){A.preventDefault()
}A.returnValue=false
},stopPropagation:function(){this.isPropagationStopped=J;
var A=this.originalEvent;
if(!A){return 
}if(A.stopPropagation){A.stopPropagation()
}A.cancelBubble=true
},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=J;
this.stopPropagation()
},isDefaultPrevented:X,isPropagationStopped:X,isImmediatePropagationStopped:X};
var AH=function(B){var C=B.relatedTarget;
while(C&&C!=this){try{C=C.parentNode
}catch(A){C=this
}}if(C!=this){B.type=B.data;
T.event.handle.apply(this,arguments)
}};
T.each({mouseover:"mouseenter",mouseout:"mouseleave"},function(A,B){T.event.special[B]={setup:function(){T.event.add(this,A,AH,B)
},teardown:function(){T.event.remove(this,A,AH)
}}
});
T.fn.extend({bind:function(B,A,C){return B=="unload"?this.one(B,A,C):this.each(function(){T.event.add(this,B,C||A,C&&A)
})
},one:function(B,A,C){var D=T.event.proxy(C||A,function(a){T(this).unbind(a,D);
return(C||A).apply(this,arguments)
});
return this.each(function(){T.event.add(this,B,D,C&&A)
})
},unbind:function(A,B){return this.each(function(){T.event.remove(this,A,B)
})
},trigger:function(B,A){return this.each(function(){T.event.trigger(B,A,this)
})
},triggerHandler:function(C,A){if(this[0]){var B=T.Event(C);
B.preventDefault();
B.stopPropagation();
T.event.trigger(B,A,this[0]);
return B.result
}},toggle:function(A){var C=arguments,B=1;
while(B<C.length){T.event.proxy(A,C[B++])
}return this.click(T.event.proxy(A,function(D){this.lastToggle=(this.lastToggle||0)%B;
D.preventDefault();
return C[this.lastToggle++].apply(this,arguments)||false
}))
},hover:function(B,A){return this.mouseenter(B).mouseleave(A)
},ready:function(A){P();
if(T.isReady){A.call(document,T)
}else{T.readyList.push(A)
}return this
},live:function(A,B){var C=T.event.proxy(B);
C.guid+=this.selector+A;
T(document).bind(Z(A,this.selector),this.selector,C);
return this
},die:function(A,B){T(document).unbind(Z(A,this.selector),B?{guid:B.guid+this.selector+A}:null);
return this
}});
function AF(A){var D=RegExp("(^|\\.)"+A.type+"(\\.|$)"),B=true,C=[];
T.each(T.data(this,"events").live||[],function(c,b){if(D.test(b.type)){var a=T(A.target).closest(b.data)[0];
if(a){C.push({elem:a,fn:b})
}}});
C.sort(function(a,b){return T.data(a.elem,"closest")-T.data(b.elem,"closest")
});
T.each(C,function(){if(this.fn.call(this.elem,A,this.fn.data)===false){return(B=false)
}});
return B
}function Z(A,B){return["live",A,B.replace(/\./g,"`").replace(/ /g,"|")].join(".")
}T.extend({isReady:false,readyList:[],ready:function(){if(!T.isReady){T.isReady=true;
if(T.readyList){T.each(T.readyList,function(){this.call(document,T)
});
T.readyList=null
}T(document).triggerHandler("ready")
}}});
var G=false;
function P(){if(G){return 
}G=true;
if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);
T.ready()
},false)
}else{if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);
T.ready()
}});
if(document.documentElement.doScroll&&W==W.top){(function(){if(T.isReady){return 
}try{document.documentElement.doScroll("left")
}catch(A){setTimeout(arguments.callee,0);
return 
}T.ready()
})()
}}}T.event.add(W,"load",T.ready)
}T.each(("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error").split(","),function(A,B){T.fn[B]=function(C){return C?this.bind(B,C):this.trigger(B)
}
});
T(W).bind("unload",function(){for(var A in T.cache){if(A!=1&&T.cache[A].handle){T.event.remove(T.cache[A].handle.elem)
}}});
(function(){T.support={};
var b=document.documentElement,a=document.createElement("script"),A=document.createElement("div"),B="script"+(new Date).getTime();
A.style.display="none";
A.innerHTML='   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';
var D=A.getElementsByTagName("*"),c=A.getElementsByTagName("a")[0];
if(!D||!D.length||!c){return 
}T.support={leadingWhitespace:A.firstChild.nodeType==3,tbody:!A.getElementsByTagName("tbody").length,objectAll:!!A.getElementsByTagName("object")[0].getElementsByTagName("*").length,htmlSerialize:!!A.getElementsByTagName("link").length,style:/red/.test(c.getAttribute("style")),hrefNormalized:c.getAttribute("href")==="/a",opacity:c.style.opacity==="0.5",cssFloat:!!c.style.cssFloat,scriptEval:false,noCloneEvent:true,boxModel:null};
a.type="text/javascript";
try{a.appendChild(document.createTextNode("window."+B+"=1;"))
}catch(C){}b.insertBefore(a,b.firstChild);
if(W[B]){T.support.scriptEval=true;
delete W[B]
}b.removeChild(a);
if(A.attachEvent&&A.fireEvent){A.attachEvent("onclick",function(){T.support.noCloneEvent=false;
A.detachEvent("onclick",arguments.callee)
});
A.cloneNode(true).fireEvent("onclick")
}T(function(){var d=document.createElement("div");
d.style.width=d.style.paddingLeft="1px";
document.body.appendChild(d);
T.boxModel=T.support.boxModel=d.offsetWidth===2;
document.body.removeChild(d).style.display="none"
})
})();
var H=T.support.cssFloat?"cssFloat":"styleFloat";
T.props={"for":"htmlFor","class":"className","float":H,cssFloat:H,styleFloat:H,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",tabindex:"tabIndex"};
T.fn.extend({_load:T.fn.load,load:function(a,B,A){if(typeof a!=="string"){return this._load(a)
}var C=a.indexOf(" ");
if(C>=0){var c=a.slice(C,a.length);
a=a.slice(0,C)
}var D="GET";
if(B){if(T.isFunction(B)){A=B;
B=null
}else{if(typeof B==="object"){B=T.param(B);
D="POST"
}}}var b=this;
T.ajax({url:a,type:D,dataType:"html",data:B,complete:function(e,d){if(d=="success"||d=="notmodified"){b.html(c?T("<div/>").append(e.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(c):e.responseText)
}if(A){b.each(A,[e.responseText,d,e])
}}});
return this
},serialize:function(){return T.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){return this.elements?T.makeArray(this.elements):this
}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password|search/i.test(this.type))
}).map(function(C,B){var A=T(this).val();
return A==null?null:T.isArray(A)?T.map(A,function(D,a){return{name:B.name,value:D}
}):{name:B.name,value:A}
}).get()
}});
T.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(B,A){T.fn[A]=function(C){return this.bind(A,C)
}
});
var N=AD();
T.extend({get:function(D,B,A,C){if(T.isFunction(B)){A=B;
B=null
}return T.ajax({type:"GET",url:D,data:B,success:A,dataType:C})
},getScript:function(B,A){return T.get(B,null,A,"script")
},getJSON:function(C,B,A){return T.get(C,B,A,"json")
},post:function(D,B,A,C){if(T.isFunction(B)){A=B;
B={}
}return T.ajax({type:"POST",url:D,data:B,success:A,dataType:C})
},ajaxSetup:function(A){T.extend(T.ajaxSettings,A)
},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return W.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest()
},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(g){g=T.extend(true,g,T.extend(true,{},T.ajaxSettings,g));
var A,n=/=\?(&|$)/g,b,B,m=g.type.toUpperCase();
if(g.data&&g.processData&&typeof g.data!=="string"){g.data=T.param(g.data)
}if(g.dataType=="jsonp"){if(m=="GET"){if(!g.url.match(n)){g.url+=(g.url.match(/\?/)?"&":"?")+(g.jsonp||"callback")+"=?"
}}else{if(!g.data||!g.data.match(n)){g.data=(g.data?g.data+"&":"")+(g.jsonp||"callback")+"=?"
}}g.dataType="json"
}if(g.dataType=="json"&&(g.data&&g.data.match(n)||g.url.match(n))){A="jsonp"+N++;
if(g.data){g.data=(g.data+"").replace(n,"="+A+"$1")
}g.url=g.url.replace(n,"="+A+"$1");
g.dataType="script";
W[A]=function(q){B=q;
k();
h();
W[A]=AB;
try{delete W[A]
}catch(p){}if(l){l.removeChild(D)
}}
}if(g.dataType=="script"&&g.cache==null){g.cache=false
}if(g.cache===false&&m=="GET"){var o=AD();
var C=g.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+o+"$2");
g.url=C+((C==g.url)?(g.url.match(/\?/)?"&":"?")+"_="+o:"")
}if(g.data&&m=="GET"){g.url+=(g.url.match(/\?/)?"&":"?")+g.data;
g.data=null
}if(g.global&&!T.active++){T.event.trigger("ajaxStart")
}var c=/^(\w+:)?\/\/([^\/?#]+)/.exec(g.url);
if(g.dataType=="script"&&m=="GET"&&c&&(c[1]&&c[1]!=location.protocol||c[2]!=location.host)){var l=document.getElementsByTagName("head")[0];
var D=document.createElement("script");
D.src=g.url;
if(g.scriptCharset){D.charset=g.scriptCharset
}if(!A){var e=false;
D.onload=D.onreadystatechange=function(){if(!e&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){e=true;
k();
h();
D.onload=D.onreadystatechange=null;
l.removeChild(D)
}}
}l.appendChild(D);
return AB
}var i=false;
var j=g.xhr();
if(g.username){j.open(m,g.url,g.async,g.username,g.password)
}else{j.open(m,g.url,g.async)
}try{if(g.data){j.setRequestHeader("Content-Type",g.contentType)
}if(g.ifModified){j.setRequestHeader("If-Modified-Since",T.lastModified[g.url]||"Thu, 01 Jan 1970 00:00:00 GMT")
}j.setRequestHeader("X-Requested-With","XMLHttpRequest");
j.setRequestHeader("Accept",g.dataType&&g.accepts[g.dataType]?g.accepts[g.dataType]+", */*":g.accepts._default)
}catch(a){}if(g.beforeSend&&g.beforeSend(j,g)===false){if(g.global&&!--T.active){T.event.trigger("ajaxStop")
}j.abort();
return false
}if(g.global){T.event.trigger("ajaxSend",[j,g])
}var f=function(r){if(j.readyState==0){if(d){clearInterval(d);
d=null;
if(g.global&&!--T.active){T.event.trigger("ajaxStop")
}}}else{if(!i&&j&&(j.readyState==4||r=="timeout")){i=true;
if(d){clearInterval(d);
d=null
}b=r=="timeout"?"timeout":!T.httpSuccess(j)?"error":g.ifModified&&T.httpNotModified(j,g.url)?"notmodified":"success";
if(b=="success"){try{B=T.httpData(j,g.dataType,g)
}catch(p){b="parsererror"
}}if(b=="success"){var q;
try{q=j.getResponseHeader("Last-Modified")
}catch(p){}if(g.ifModified&&q){T.lastModified[g.url]=q
}if(!A){k()
}}else{T.handleError(g,j,b)
}h();
if(r){j.abort()
}if(g.async){j=null
}}}};
if(g.async){var d=setInterval(f,13);
if(g.timeout>0){setTimeout(function(){if(j&&!i){f("timeout")
}},g.timeout)
}}try{j.send(g.data)
}catch(a){T.handleError(g,j,null,a)
}if(!g.async){f()
}function k(){if(g.success){g.success(B,b)
}if(g.global){T.event.trigger("ajaxSuccess",[j,g])
}}function h(){if(g.complete){g.complete(j,b)
}if(g.global){T.event.trigger("ajaxComplete",[j,g])
}if(g.global&&!--T.active){T.event.trigger("ajaxStop")
}}return j
},handleError:function(C,A,D,B){if(C.error){C.error(A,D,B)
}if(C.global){T.event.trigger("ajaxError",[A,C,B])
}},active:0,httpSuccess:function(A){try{return !A.status&&location.protocol=="file:"||(A.status>=200&&A.status<300)||A.status==304||A.status==1223
}catch(B){}return false
},httpNotModified:function(B,D){try{var A=B.getResponseHeader("Last-Modified");
return B.status==304||A==T.lastModified[D]
}catch(C){}return false
},httpData:function(A,C,D){var a=A.getResponseHeader("content-type"),b=C=="xml"||!C&&a&&a.indexOf("xml")>=0,B=b?A.responseXML:A.responseText;
if(b&&B.documentElement.tagName=="parsererror"){throw"parsererror"
}if(D&&D.dataFilter){B=D.dataFilter(B,C)
}if(typeof B==="string"){if(C=="script"){T.globalEval(B)
}if(C=="json"){B=W["eval"]("("+B+")")
}}return B
},param:function(D){var B=[];
function A(b,a){B[B.length]=encodeURIComponent(b)+"="+encodeURIComponent(a)
}if(T.isArray(D)||D.jquery){T.each(D,function(){A(this.name,this.value)
})
}else{for(var C in D){if(T.isArray(D[C])){T.each(D[C],function(){A(C,this)
})
}else{A(C,T.isFunction(D[C])?D[C]():D[C])
}}}return B.join("&").replace(/%20/g,"+")
}});
var V={},U,AE=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];
function K(B,C){var A={};
T.each(AE.concat.apply([],AE.slice(0,C)),function(){A[this]=B
});
return A
}T.fn.extend({show:function(C,A){if(C){return this.animate(K("show",3),C,A)
}else{for(var a=0,c=this.length;
a<c;
a++){var d=T.data(this[a],"olddisplay");
this[a].style.display=d||"";
if(T.css(this[a],"display")==="none"){var b=this[a].tagName,B;
if(V[b]){B=V[b]
}else{var D=T("<"+b+" />").appendTo("body");
B=D.css("display");
if(B==="none"){B="block"
}D.remove();
V[b]=B
}T.data(this[a],"olddisplay",B)
}}for(var a=0,c=this.length;
a<c;
a++){this[a].style.display=T.data(this[a],"olddisplay")||""
}return this
}},hide:function(B,A){if(B){return this.animate(K("hide",3),B,A)
}else{for(var C=0,D=this.length;
C<D;
C++){var a=T.data(this[C],"olddisplay");
if(!a&&a!=="none"){T.data(this[C],"olddisplay",T.css(this[C],"display"))
}}for(var C=0,D=this.length;
C<D;
C++){this[C].style.display="none"
}return this
}},_toggle:T.fn.toggle,toggle:function(A,B){var C=typeof A==="boolean";
return T.isFunction(A)&&T.isFunction(B)?this._toggle.apply(this,arguments):A==null||C?this.each(function(){var D=C?A:T(this).is(":hidden");
T(this)[D?"show":"hide"]()
}):this.animate(K("toggle",3),A,B)
},fadeTo:function(C,A,B){return this.animate({opacity:A},C,B)
},animate:function(A,D,B,C){var a=T.speed(D,B,C);
return this[a.queue===false?"each":"queue"](function(){var c=T.extend({},a),e,b=this.nodeType==1&&T(this).is(":hidden"),d=this;
for(e in A){if(A[e]=="hide"&&b||A[e]=="show"&&!b){return c.complete.call(this)
}if((e=="height"||e=="width")&&this.style){c.display=T.css(this,"display");
c.overflow=this.style.overflow
}}if(c.overflow!=null){this.style.overflow="hidden"
}c.curAnim=T.extend({},A);
T.each(A,function(k,g){var h=new T.fx(d,c,k);
if(/toggle|show|hide/.test(g)){h[g=="toggle"?b?"show":"hide":g](A)
}else{var i=g.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),f=h.cur(true)||0;
if(i){var l=parseFloat(i[2]),j=i[3]||"px";
if(j!="px"){d.style[k]=(l||1)+j;
f=((l||1)/h.cur(true))*f;
d.style[k]=f+j
}if(i[1]){l=((i[1]=="-="?-1:1)*l)+f
}h.custom(f,l,j)
}else{h.custom(f,g,"")
}}});
return true
})
},stop:function(B,C){var A=T.timers;
if(B){this.queue([])
}this.each(function(){for(var D=A.length-1;
D>=0;
D--){if(A[D].elem==this){if(C){A[D](true)
}A.splice(D,1)
}}});
if(!C){this.dequeue()
}return this
}});
T.each({slideDown:K("show",1),slideUp:K("hide",1),slideToggle:K("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(B,A){T.fn[B]=function(D,C){return this.animate(A,D,C)
}
});
T.extend({speed:function(B,A,C){var D=typeof B==="object"?B:{complete:C||!C&&A||T.isFunction(B)&&B,duration:B,easing:C&&A||A&&!T.isFunction(A)&&A};
D.duration=T.fx.off?0:typeof D.duration==="number"?D.duration:T.fx.speeds[D.duration]||T.fx.speeds._default;
D.old=D.complete;
D.complete=function(){if(D.queue!==false){T(this).dequeue()
}if(T.isFunction(D.old)){D.old.call(this)
}};
return D
},easing:{linear:function(B,A,D,C){return D+C*B
},swing:function(B,A,D,C){return((-Math.cos(B*Math.PI)/2)+0.5)*C+D
}},timers:[],fx:function(B,C,A){this.options=C;
this.elem=B;
this.prop=A;
if(!C.orig){C.orig={}
}}});
T.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)
}(T.fx.step[this.prop]||T.fx.step._default)(this);
if((this.prop=="height"||this.prop=="width")&&this.elem.style){this.elem.style.display="block"
}},cur:function(A){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]
}var B=parseFloat(T.css(this.elem,this.prop,A));
return B&&B>-10000?B:parseFloat(T.curCSS(this.elem,this.prop))||0
},custom:function(A,B,C){this.startTime=AD();
this.start=A;
this.end=B;
this.unit=C||this.unit||"px";
this.now=this.start;
this.pos=this.state=0;
var a=this;
function D(b){return a.step(b)
}D.elem=this.elem;
if(D()&&T.timers.push(D)&&!U){U=setInterval(function(){var b=T.timers;
for(var c=0;
c<b.length;
c++){if(!b[c]()){b.splice(c--,1)
}}if(!b.length){clearInterval(U);
U=AB
}},13)
}},show:function(){this.options.orig[this.prop]=T.attr(this.elem.style,this.prop);
this.options.show=true;
this.custom(this.prop=="width"||this.prop=="height"?1:0,this.cur());
T(this.elem).show()
},hide:function(){this.options.orig[this.prop]=T.attr(this.elem.style,this.prop);
this.options.hide=true;
this.custom(this.cur(),0)
},step:function(C){var D=AD();
if(C||D>=this.options.duration+this.startTime){this.now=this.end;
this.pos=this.state=1;
this.update();
this.options.curAnim[this.prop]=true;
var b=true;
for(var a in this.options.curAnim){if(this.options.curAnim[a]!==true){b=false
}}if(b){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;
this.elem.style.display=this.options.display;
if(T.css(this.elem,"display")=="none"){this.elem.style.display="block"
}}if(this.options.hide){T(this.elem).hide()
}if(this.options.hide||this.options.show){for(var B in this.options.curAnim){T.attr(this.elem.style,B,this.options.orig[B])
}}this.options.complete.call(this.elem)
}return false
}else{var A=D-this.startTime;
this.state=A/this.options.duration;
this.pos=T.easing[this.options.easing||(T.easing.swing?"swing":"linear")](this.state,A,0,1,this.options.duration);
this.now=this.start+((this.end-this.start)*this.pos);
this.update()
}return true
}};
T.extend(T.fx,{speeds:{slow:600,fast:200,_default:400},step:{opacity:function(A){T.attr(A.elem.style,"opacity",A.now)
},_default:function(A){if(A.elem.style&&A.elem.style[A.prop]!=null){A.elem.style[A.prop]=A.now+A.unit
}else{A.elem[A.prop]=A.now
}}}});
if(document.documentElement.getBoundingClientRect){T.fn.offset=function(){if(!this[0]){return{top:0,left:0}
}if(this[0]===this[0].ownerDocument.body){return T.offset.bodyOffset(this[0])
}var b=this[0].getBoundingClientRect(),C=this[0].ownerDocument,c=C.body,d=C.documentElement,A=d.clientTop||c.clientTop||0,B=d.clientLeft||c.clientLeft||0,D=b.top+(self.pageYOffset||T.boxModel&&d.scrollTop||c.scrollTop)-A,a=b.left+(self.pageXOffset||T.boxModel&&d.scrollLeft||c.scrollLeft)-B;
return{top:D,left:a}
}
}else{T.fn.offset=function(){if(!this[0]){return{top:0,left:0}
}if(this[0]===this[0].ownerDocument.body){return T.offset.bodyOffset(this[0])
}T.offset.initialized||T.offset.initialize();
var b=this[0],e=b.offsetParent,f=b,A=b.ownerDocument,C,d=A.documentElement,a=A.body,D=A.defaultView,g=D.getComputedStyle(b,null),B=b.offsetTop,c=b.offsetLeft;
while((b=b.parentNode)&&b!==a&&b!==d){C=D.getComputedStyle(b,null);
B-=b.scrollTop,c-=b.scrollLeft;
if(b===e){B+=b.offsetTop,c+=b.offsetLeft;
if(T.offset.doesNotAddBorder&&!(T.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(b.tagName))){B+=parseInt(C.borderTopWidth,10)||0,c+=parseInt(C.borderLeftWidth,10)||0
}f=e,e=b.offsetParent
}if(T.offset.subtractsBorderForOverflowNotVisible&&C.overflow!=="visible"){B+=parseInt(C.borderTopWidth,10)||0,c+=parseInt(C.borderLeftWidth,10)||0
}g=C
}if(g.position==="relative"||g.position==="static"){B+=a.offsetTop,c+=a.offsetLeft
}if(g.position==="fixed"){B+=Math.max(d.scrollTop,a.scrollTop),c+=Math.max(d.scrollLeft,a.scrollLeft)
}return{top:B,left:c}
}
}T.offset={initialize:function(){if(this.initialized){return 
}var C=document.body,e=document.createElement("div"),c,d,A,b,B,f,a=C.style.marginTop,D='<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';
B={position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"};
for(f in B){e.style[f]=B[f]
}e.innerHTML=D;
C.insertBefore(e,C.firstChild);
c=e.firstChild,d=c.firstChild,b=c.nextSibling.firstChild.firstChild;
this.doesNotAddBorder=(d.offsetTop!==5);
this.doesAddBorderForTableAndCells=(b.offsetTop===5);
c.style.overflow="hidden",c.style.position="relative";
this.subtractsBorderForOverflowNotVisible=(d.offsetTop===-5);
C.style.marginTop="1px";
this.doesNotIncludeMarginInBodyOffset=(C.offsetTop===0);
C.style.marginTop=a;
C.removeChild(e);
this.initialized=true
},bodyOffset:function(C){T.offset.initialized||T.offset.initialize();
var A=C.offsetTop,B=C.offsetLeft;
if(T.offset.doesNotIncludeMarginInBodyOffset){A+=parseInt(T.curCSS(C,"marginTop",true),10)||0,B+=parseInt(T.curCSS(C,"marginLeft",true),10)||0
}return{top:A,left:B}
}};
T.fn.extend({position:function(){var B=0,C=0,a;
if(this[0]){var D=this.offsetParent(),A=this.offset(),b=/^body|html$/i.test(D[0].tagName)?{top:0,left:0}:D.offset();
A.top-=Y(this,"marginTop");
A.left-=Y(this,"marginLeft");
b.top+=Y(D,"borderTopWidth");
b.left+=Y(D,"borderLeftWidth");
a={top:A.top-b.top,left:A.left-b.left}
}return a
},offsetParent:function(){var A=this[0].offsetParent||document.body;
while(A&&(!/^body|html$/i.test(A.tagName)&&T.css(A,"position")=="static")){A=A.offsetParent
}return T(A)
}});
T.each(["Left","Top"],function(B,C){var A="scroll"+C;
T.fn[A]=function(D){if(!this[0]){return null
}return D!==AB?this.each(function(){this==W||this==document?W.scrollTo(!B?D:T(W).scrollLeft(),B?D:T(W).scrollTop()):this[A]=D
}):this[0]==W||this[0]==document?self[B?"pageYOffset":"pageXOffset"]||T.boxModel&&document.documentElement[A]||document.body[A]:this[0][A]
}
});
T.each(["Height","Width"],function(B,D){var b=B?"Left":"Top",C=B?"Right":"Bottom",a=D.toLowerCase();
T.fn["inner"+D]=function(){return this[0]?T.css(this[0],a,false,"padding"):null
};
T.fn["outer"+D]=function(c){return this[0]?T.css(this[0],a,false,c?"margin":"border"):null
};
var A=D.toLowerCase();
T.fn[A]=function(c){return this[0]==W?document.compatMode=="CSS1Compat"&&document.documentElement["client"+D]||document.body["client"+D]:this[0]==document?Math.max(document.documentElement["client"+D],document.body["scroll"+D],document.documentElement["scroll"+D],document.body["offset"+D],document.documentElement["offset"+D]):c===AB?(this.length?T.css(this[0],A):null):this.css(A,typeof c==="string"?c:c+"px")
}
})
})();
/*
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
jQuery.cookie=function(B,I,L){if(typeof I!="undefined"){L=L||{};
if(I===null){I="";
L=$.extend({},L);
L.expires=-1
}var E="";
if(L.expires&&(typeof L.expires=="number"||L.expires.toUTCString)){var F;
if(typeof L.expires=="number"){F=new Date();
F.setTime(F.getTime()+(L.expires*24*60*60*1000))
}else{F=L.expires
}E="; expires="+F.toUTCString()
}var K=L.path?"; path="+(L.path):"";
var G=L.domain?"; domain="+(L.domain):"";
var A=L.secure?"; secure":"";
document.cookie=[B,"=",encodeURIComponent(I),E,K,G,A].join("")
}else{var D=null;
if(document.cookie&&document.cookie!=""){var J=document.cookie.split(";");
for(var H=0;
H<J.length;
H++){var C=jQuery.trim(J[H]);
if(C.substring(0,B.length+1)==(B+"=")){D=decodeURIComponent(C.substring(B.length+1));
break
}}}return D
}};
var enquire={config:{imgs:"{{ '/assets/images/' | prepend: site.baseurl }}"},init:function(){$("body").addClass("w3c_javascript");
var E=enquire;
appliedMedia=false;
jQuery(document).ready(function(F){if(navigator.userAgent.indexOf("MSIE")!=-1){F("style").attr("media","screen")
}});
$("#w3c_nav div.w3c_sec_nav").append('<ul class="secondary_nav"><li class="label">Views: </li><li><a href="#" class="desktop" title="All Features Shown - Desktop Style">desktop</a></li><li><a href="#" class="mobile" title="Single Column View - Mobile Style">mobile</a></li><li><a href="#" class="print" title="Wide View - Hide Navigation Bars - Print Style">print</a></li></ul>');
$("#w3c_nav ul.secondary_nav a.mobile").click(function(){C("handheld");
return false
});
$("#w3c_nav ul.secondary_nav a.print").click(function(){C("print");
return false
});
$("#w3c_nav ul.secondary_nav a.desktop").click(function(){C(", screen");
return false
});
$("link[rel=stylesheet], style").each(function(){$(this).data("media",this.media)
});
function B(F){$("#w3c_nav ul.secondary_nav a").each(function(){this.href="#"
});
if(F=="handheld"){$("body").addClass("w3c_handheld");
$("body").removeClass("w3c_print");
$("body").removeClass("w3c_screen");
$("#w3c_nav ul.secondary_nav a.mobile").removeAttr("href")
}else{if(F=="print"){$("body").addClass("w3c_print");
$("body").removeClass("w3c_handheld");
$("body").removeClass("w3c_screen");
$("#w3c_nav ul.secondary_nav a.print").removeAttr("href")
}else{$("body").addClass("w3c_screen");
$("body").removeClass("w3c_handheld");
$("body").removeClass("w3c_print");
$("#w3c_nav ul.secondary_nav a.desktop").removeAttr("href")
}}E.tree.init("expand_section",F);
E.toggableInclude.init(F)
}function D(){if($("#w3c_mast h1 a img").css("display")=="none"){if(!appliedMedia||appliedMedia!="screen"){B("screen");
appliedMedia="screen"
}}else{if(!appliedMedia||appliedMedia!="handheld"){B("handheld");
appliedMedia="handheld"
}}}var A=null;
$(window).bind("resize",function(){if(A){clearTimeout(A)
}A=setTimeout(D,100)
});
D();
function C(F){B(F);
$("link[rel=stylesheet], style").each(function(){if($(this).data("media").indexOf(F)>=0||$(this).data("media").indexOf("all")>=0){this.media="all";
this.disabled=false
}else{this.media=$(this).data("media");
this.disabled=true
}});
recordedMedia=$.cookie("w3c_style");
if(recordedMedia!=F){$.cookie("w3c_style",F,{path:"/"})
}}recordedMedia=$.cookie("w3c_style");
if(recordedMedia){C(recordedMedia)
}},tree:{init:function(D,B){var C=enquire;
var A=C.tree;
$(".hierarchy  ."+D).each(function(){if((B!="print")&&(B!="handheld")){if($(this).hasClass("closed")&&$(this).parents("div.expand_block, li.expand_block")){$(this).parents("div.expand_block,  li.expand_block").addClass("closed")
}if(!$("img",$(this)).length){if($(this).parents("div.expand_block, li.expand_block").hasClass("closed")){$(this).prepend("<img src='{{ '/assets/images/ico-plus.gif' | prepend: site.baseurl }}' width='9' height='9' alt='Expand' width/>")
}else{$(this).prepend("<img src='{{ '/assets/images/ico-minus.gif' | prepend: site.baseurl }}' width='9' height='9' alt='Collapse'/>")
}$(this).wrapInner("<a href='#'></a>")
}if(!$(this).data("expand_configured")){$(this).click(function(E){E.preventDefault();
A.toggle($(this));
if($(this).parents("div.expand_block, li.expand_block").hasClass("closed")){$("img",$(this)).attr({src:"{{ '/assets/images/ico-plus.gif' | prepend: site.baseurl }}",alt:"Expand"})
}else{$("img",$(this)).attr({src:"{{ '/assets/images/ico-minus.gif' | prepend: site.baseurl }}",alt:"Collapse"})
}})
}$(this).data("expand_configured",true)
}else{$(this).text($(this).text())
}})
},toggle:function(A){$(A).parents("div.expand_block,  li.expand_block").toggleClass("closed")
}},toggableInclude:{init:function(A){if((A!="print")&&(A!="handheld")&&$("#w3c_toggle_include")){if(!$("#w3c_toggle_include_show").length){$("#w3c_toggle_include").after("<form class='tMargin lMargin w3c_toggle_form' action=''><div class='noprint'><fieldset><input type='radio' id='w3c_toggle_include_show' name='w3c_toggle_include_radio' /> <label for='w3c_toggle_include_show'>Show details</label> <input type='radio' id='w3c_toggle_include_hide' name='w3c_toggle_include_radio' checked='checked' /> <label for='w3c_toggle_include_hide'>Hide details</label></fieldset></div></form>")
}$("#w3c_toggle_include_hide").change(function(){$("p.expand_description, div.expand_description, ul.expand_description").parent().addClass("closed");
$(".expand_section img").attr({src:"{{ '/assets/images/ico-plus.gif' | prepend: site.baseurl }}",alt:"Expand"})
}).change();
$("#w3c_toggle_include_show").change(function(){$("p.expand_description, div.expand_description, ul.expand_description").parent().removeClass("closed");
$(".expand_section img").attr({src:"{{ '/assets/images/ico-minus.gif' | prepend: site.baseurl }}",alt:"Collapse"})
})
}else{$("#w3c_toggle_include").next("form:has(#w3c_toggle_include_show)").replaceWith("")
}}}};
enquire.init();
