/*
* jQuery modalBox plugin <trunk> <http://code.google.com/p/jquery-modalbox-plugin/> 
* @requires jQuery v1.3.2 or later 
* is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
(function(c){var d={minimalTopSpacing:50,draggable:true,disablingClickToClose:false,disablingTheOverlayClickToClose:false,setWidthOfModalLayer:null,customClassName:null,getStaticContentFrom:null,positionLeft:null,positionTop:null,effectType_show_fadingLayer:["fade","fast"],effectType_hide_fadingLayer:["fade","fast"],effectType_show_modalBox:["show"],effectType_hide_modalBox:["hide"],selectorModalbox:"#modalBox",selectorModalBoxBody:"#modalBoxBody",selectorModalBoxBodyContent:".modalBoxBodyContent",selectorModalBoxFaderLayer:"#modalBoxFaderLayer",selectorModalBoxAjaxLoader:"#modalBoxAjaxLoader",selectorModalBoxCloseButton:"#modalBoxCloseButton",selectorModalboxContent:".modalboxContent",selectorModalboxPreCacheContainer:"#modalboxPreCacheContainer",selectorModalBoxImageLink:".modalBoxImageLink",selectorModalBoxImageNoLink:".modalBoxImageNoLink",selectorCloseModalBox:".closeModalBox",selectorAjaxhref:"ajaxhref",setModalboxLayoutContainer_Begin:'<div class="modalboxStyleContainer_surface_left"><div class="modalboxStyleContainer_surface_right"><div class="modalboxStyleContainerContent"><div class="modalBoxBodyContent">',setModalboxLayoutContainer_End:'</div></div></div></div><div class="modalboxStyleContainer_corner_topLeft"><!-- - --></div><div class="modalboxStyleContainer_corner_topRight"><!-- - --></div><div class="modalboxStyleContainer_corner_bottomLeft"><!-- - --></div><div class="modalboxStyleContainer_corner_bottomRight"><!-- - --></div><div class="modalboxStyleContainer_surface_top"><div class="modalboxStyleContainer_surface_body"><!-- - --></div></div><div class="modalboxStyleContainer_surface_bottom"><div class="modalboxStyleContainer_surface_body"><!-- - --></div></div>',localizedStrings:{messageCloseWindow:"Close Window",messageAjaxLoader:"Please wait",errorMessageIfNoDataAvailable:"<strong>No content available!</strong>",errorMessageXMLHttpRequest:'Error: XML-Http-Request Status "500"',errorMessageTextStatusError:"Error: AJAX Request failed",errorMessageImageLoadingFailed:"Error: Image loading failed"},setTypeOfFadingLayer:"black",setStylesOfFadingLayer:{white:"background-color:#fff; filter:alpha(opacity=60); -moz-opacity:0.6; opacity:0.6;",black:"background-color:#000; filter:alpha(opacity=40); -moz-opacity:0.4; opacity:0.4;",transparent:"background-color:transparent;",custom:null},directCall:{source:null,data:null,element:null,image:null},ajax_type:"POST",ajax_contentType:"application/x-www-form-urlencoded; charset=utf-8",callFunctionBeforeShow:function(){return true;},callFunctionAfterShow:function(){},callFunctionBeforeHide:function(){},callFunctionAfterHide:function(){},debug:false,debugOuputMessagePrefix:"[jQuery modalBox plugin] "};try{d=jQuery.extend({},d,modalboxGlobalDefaults);}catch(b){}var a={init:function(h){var h=jQuery.extend({},d,h);if(h.directCall){if(h.directCall["source"]){f({type:"ajax",source:h.directCall["source"]});}else{if(h.directCall["data"]){f({type:"static",data:h.directCall["data"]});}else{if(h.directCall["element"]){f({type:"static",data:jQuery(h.directCall["element"]).html()});}else{if(h.directCall["image"]){f({type:"image",image:h.directCall["image"],imageLink:h.directCall["imageLink"]});}}}}}var i=false;jQuery(window).resize(function(){i=true;});if(!i){jQuery(this).die("click").live("click",function(k){g({event:k,element:jQuery(this)});});}function g(o){var o=jQuery.extend({event:null,element:null,doNotOpenModalBoxContent:false,isFormSubmit:false},o||{});if(o.event&&o.element){var s=o.element;var k="";var q="";var r="";var n="";var p="";var l=(typeof(s.attr("href"))!="undefined"?s.attr("href"):"");var m=(typeof(s.attr("rel"))!="undefined"?s.attr("rel"):"");if(s.is("input")){k=s.parents("form").attr("action");q=s.parents("form").serialize();r="ajax";o.isFormSubmit=true;o.event.preventDefault();}else{if(s.find("input[name$='"+h.selectorAjaxhref+"']").length!=0){k=s.find("input[name$='"+h.selectorAjaxhref+"']").val();q="";r="ajax";o.event.preventDefault();}else{if(m.indexOf("ajax:")!=-1){k=m.split("ajax:");k=k[1];q="";r="ajax";o.event.preventDefault();}else{if(a.isImageSource({src:l})){r="image";n=l;checkImageLink=a.extractImageLink({src:l});p=(checkImageLink!=""?checkImageLink:"");o.event.preventDefault();}else{if(a.isImageSource({src:m})){r="image";n=m;checkImageLink=a.extractImageLink({src:m});p=(checkImageLink!=""?checkImageLink:"");o.event.preventDefault();}else{if(s.find(h.selectorModalboxContent).length!=0){k="";q=s.find(h.selectorModalboxContent).html();r="static";o.event.preventDefault();}else{if(h.getStaticContentFrom){k="";q=jQuery(h.getStaticContentFrom).html();r="static";o.event.preventDefault();}else{o.doNotOpenModalBoxContent=true;}}}}}}}if(!o.doNotOpenModalBoxContent){f({type:r,element:s,source:k,data:q,image:n,imageLink:p});}if(o.isFormSubmit){return false;}}}function e(l){var l=jQuery.extend({ar_XMLHttpRequest:null,ar_textStatus:null,ar_errorThrown:null,targetContainer:null,ar_enableDebugging:false},l||{});var m=l.ar_XMLHttpRequest;var p=l.ar_textStatus;var n=l.ar_errorThrown;if(m&&p!="error"){if(m.status==403){var o=m.getResponseHeader("Location");if(typeof o!=="undefined"){location.href=o;}}else{if(m.status==500&&l.targetContainer){k({errorMessage:h.localizedStrings["errorMessageXMLHttpRequest"],targetContainer:l.targetContainer});}}if(l.ar_enableDebugging){console.log("XMLHttpRequest.status: "+m.status);}}else{if(p=="error"){if(l.targetContainer){k({errorMessage:h.localizedStrings["errorMessageTextStatusError"],targetContainer:l.targetContainer});}if(l.ar_enableDebugging){console.log("textStatus: "+p);}}else{}}function k(q){var q=jQuery.extend({errorMessage:null,targetContainer:null},q||{});if(q.errorMessage&&q.targetContainer){var r='<div class="simleModalboxErrorBox"><div class="simleModalboxErrorBoxContent">'+q.errorMessage+"</div></div>";jQuery(q.targetContainer).removeAttr("style").html(r);if(jQuery(q.targetContainer).parents(h.selectorModalbox).length>0){jQuery(h.selectorModalBoxAjaxLoader).remove();a.center({positionLeft:h.positionLeft,positionTop:h.positionTop,minimalTopSpacing:h.minimalTopSpacing,effectType_show_modalBox:h.effectType_show_modalBox});}}}}function f(n){var n=jQuery.extend({type:null,element:null,source:null,data:null,image:null,imageLink:null,prepareCustomWidthOfModalBox:"",setModalboxClassName:""},n||{});var l=a.cleanupSelectorName({replaceValue:h.selectorModalBoxImageLink});var s=a.cleanupSelectorName({replaceValue:h.selectorModalBoxImageNoLink});function k(){a.close({callFunctionBeforeHide:h.callFunctionBeforeHide,callFunctionAfterHide:h.callFunctionAfterHide});}function m(){jQuery(!h.disablingClickToClose?(h.selectorModalbox+" "+h.selectorModalBoxBodyContent+" "+h.selectorCloseModalBox+", "+h.selectorModalbox+" "+h.selectorModalBoxCloseButton+" "+h.selectorCloseModalBox+", "+h.selectorModalbox+" "+h.selectorModalBoxImageNoLink):(h.selectorModalbox+" "+h.selectorModalBoxBodyContent+" "+h.selectorCloseModalBox)).unbind("click").bind("click",function(){k();});}function q(){if(!h.disablingClickToClose&&!h.disablingTheOverlayClickToClose){jQuery(h.selectorModalBoxFaderLayer).unbind("click").bind("click",function(){k();});}}function r(){a.center({positionLeft:h.positionLeft,positionTop:h.positionTop,minimalTopSpacing:h.minimalTopSpacing,effectType_show_modalBox:h.effectType_show_modalBox,callFunctionAfterShow:h.callFunctionAfterShow});}jQuery(h.selectorModalboxPreCacheContainer).remove();if(n.type&&h.callFunctionBeforeShow()){if(n.source){n.source=a.addAjaxUrlParameter({currentURL:n.source});}if(n.element){if(jQuery(n.element).hasClass("large")){n.setModalboxClassName+="large";}else{if(jQuery(n.element).hasClass("medium")){n.setModalboxClassName+="medium";}else{if(jQuery(n.element).hasClass("small")){n.setModalboxClassName+="small";}}}if(jQuery(n.element).hasClass("emphasis")){n.setModalboxClassName+=" emphasis";}}if(n.image){n.setModalboxClassName+="modalBoxSingleImage modalBoxBodyContentImageContainer";}if(h.customClassName){n.setModalboxClassName+=" "+h.customClassName;}if(h.draggable){n.setModalboxClassName+=" modalboxIsDraggable";}if(h.disablingClickToClose){n.setModalboxClassName+=" disablingClickToClose";}if(h.setWidthOfModalLayer){n.prepareCustomWidthOfModalBox+="width:"+parseInt(h.setWidthOfModalLayer)+"px; ";}if(jQuery(h.selectorModalbox).length==0){jQuery("body").append(a.modalboxBuilder({customStyles:'class="'+n.setModalboxClassName+'" style="'+n.prepareCustomWidthOfModalBox+'"'}));}else{a.clean();}var p=jQuery(h.selectorModalbox+" "+h.selectorModalBoxBodyContent);var o=function(){switch(n.type){case"static":jQuery(h.selectorModalBoxAjaxLoader).hide();p.html(n.data);r();m();break;case"ajax":jQuery.ajax({type:h.ajax_type,url:n.source,data:n.data,contentType:h.ajax_contentType,success:function(t,u){jQuery(h.selectorModalBoxAjaxLoader).fadeOut("fast",function(){p.html(t);r();m();});},error:function(t,v,u){e({ar_XMLHttpRequest:t,ar_textStatus:v,ar_errorThrown:u,targetContainer:h.selectorModalbox+" "+h.selectorModalBoxBodyContent});}});break;case"image":jQuery('<img class="modalBoxImagePreload" src="'+n.image+'" />').load(function(u,t,w){if(t=="error"){a.debugOutput({msg:"Error / "+w.status+" : "+w.statusText});}else{var v=jQuery(this);if(n.imageLink){v.attr({alt:n.imageLink}).wrap('<a class="'+l+'" href="'+n.imageLink+'" title="'+n.imageLink+'"></a>');jQuery(h.selectorModalbox+" a"+h.selectorModalBoxImageLink).die("click").live("click",function(x){x.preventDefault();a.clean();r();setTimeout(function(){location.href=n.imageLink;},400);});}else{v.attr({alt:h.localizedStrings["messageCloseWindow"],title:h.localizedStrings["messageCloseWindow"]});}jQuery(h.selectorModalBoxAjaxLoader).fadeOut("fast",function(){p.html(v);p.find("img.modalBoxImagePreload").removeClass("modalBoxImagePreload").addClass(n.imageLink?"modalBoxImageLoadingSuccessful":"modalBoxImageLoadingSuccessful "+s);r();m();});}}).error(function(){a.debugOutput({msg:"Error / "+h.localizedStrings["errorMessageImageLoadingFailed"]});});break;}if(h.draggable){a.dragBox();}q();};j({callFunctionAfterShow:o});}}function j(k){var k=jQuery.extend({isResized:false,setStyleOfFadingLayer:"",callFunctionAfterShow:null},k||{});if(jQuery(h.selectorModalBoxFaderLayer).length==0){if(h.setTypeOfFadingLayer=="white"){k.setStyleOfFadingLayer=h.setStylesOfFadingLayer["white"];}else{if(h.setTypeOfFadingLayer=="black"){k.setStyleOfFadingLayer=h.setStylesOfFadingLayer["black"];}else{if(h.setTypeOfFadingLayer=="custom"&&h.setStylesOfFadingLayer["custom"]){k.setStyleOfFadingLayer=h.setStylesOfFadingLayer["custom"];}else{k.setStyleOfFadingLayer=h.setStylesOfFadingLayer["transparent"];}}}var m=a.cleanupSelectorName({replaceValue:h.selectorModalBoxFaderLayer});jQuery("body").append('<div id="'+m+'" style="'+k.setStyleOfFadingLayer+'"></div>');var l=jQuery(h.selectorModalBoxFaderLayer);if(h.setTypeOfFadingLayer=="disable"){h.effectType_show_fadingLayer[0]="";}switch(h.effectType_show_fadingLayer[0]){case"fade":l.fadeIn(h.effectType_show_fadingLayer[1],function(){a.center({positionLeft:h.positionLeft,positionTop:h.positionTop,minimalTopSpacing:h.minimalTopSpacing,effectType_show_modalBox:h.effectType_show_modalBox,isResized:k.isResized,callFunctionAfterShow:k.callFunctionAfterShow});});break;default:l.show();a.center({positionLeft:h.positionLeft,positionTop:h.positionTop,minimalTopSpacing:h.minimalTopSpacing,effectType_show_modalBox:h.effectType_show_modalBox,isResized:k.isResized,callFunctionAfterShow:k.callFunctionAfterShow});break;}jQuery(window).resize(function(){if(l.is(":visible")){a.center({positionLeft:h.positionLeft,positionTop:h.positionTop,minimalTopSpacing:h.minimalTopSpacing,effectType_show_modalBox:h.effectType_show_modalBox,isResized:true});}});}else{a.center({positionLeft:h.positionLeft,positionTop:h.positionTop,minimalTopSpacing:h.minimalTopSpacing,effectType_show_modalBox:h.effectType_show_modalBox,isResized:k.isResized,callFunctionAfterShow:k.callFunctionAfterShow});}}},close:function(e){var e=jQuery.extend({},d,e);if(e.selectorModalBoxFaderLayer&&e.selectorModalbox){e.callFunctionBeforeHide();var g=jQuery(e.selectorModalBoxFaderLayer+", "+e.selectorModalbox);if(e.setTypeOfFadingLayer=="disable"){e.effectType_hide_fadingLayer[0]="";}switch(e.effectType_hide_fadingLayer[0]){case"fade":switch(e.effectType_hide_modalBox[0]){case"fade":jQuery(e.selectorModalbox).fadeOut(e.effectType_hide_modalBox[1],function(){jQuery(e.selectorModalBoxFaderLayer).fadeOut(e.effectType_hide_fadingLayer[1],function(){f(g);});});break;default:jQuery(e.selectorModalbox).hide();jQuery(e.selectorModalBoxFaderLayer).fadeOut(e.effectType_hide_fadingLayer[1],function(){f(g);});break;}break;default:switch(e.effectType_hide_modalBox[0]){case"fade":jQuery(e.selectorModalbox).fadeOut(e.effectType_hide_modalBox[1],function(){f(g);});break;default:f(g);break;}break;}}function f(h){h.remove();e.callFunctionAfterHide();}},center:function(g){var g=jQuery.extend({isResized:false,callFunctionAfterShow:null},g||{});g=jQuery.extend({},d,g);var e=jQuery(g.selectorModalbox);if(jQuery(g.selectorModalboxPreCacheContainer).length==0&&e.length>0){var f=false;var k="absolute";var j=e.width();var h=e.height();var i=0;var m=parseInt(jQuery(window).width()-j)/2;if(jQuery("body a.modalBoxTopLink").length==0){jQuery("body").prepend('<a class="modalBoxTopLink"></a>');}if(m<=0){m=0;}if(g.positionLeft){m=g.positionLeft+"px";}else{m=m+"px";}if(g.positionTop){i=parseInt(jQuery(window).height()-h);if(i>parseInt(g.positionTop)){k="fixed";}i=g.positionTop+"px";}else{i=parseInt(jQuery(window).height()-h-70)/2;if(i<=0){i=g.minimalTopSpacing+"px";f=true;}else{i=i+"px";k="fixed";}}function l(){if(f&&!e.hasClass("modalboxScrollingSuccessfully")){e.addClass("modalboxScrollingSuccessfully");a.scrollTo();}if(!g.isResized){if(g.callFunctionAfterShow){g.callFunctionAfterShow();}}}switch(g.effectType_show_modalBox[0]){case"fade":if(e.hasClass("modalboxFadingSuccessfully")){e.css({position:k,left:m,top:i,display:"block",visibility:"visible"});l();}else{e.css({position:k,left:m,top:i,visibility:"visible"}).fadeIn(g.effectType_show_modalBox[1],function(){jQuery(this).addClass("modalboxFadingSuccessfully");l();});}break;default:e.css({position:k,left:m,top:i,display:"block",visibility:"visible"});l();break;}}},clean:function(e){var e=jQuery.extend({},d,e);if(e.selectorModalBoxBodyContent){var f=a.cleanupSelectorName({replaceValue:e.selectorModalBoxAjaxLoader});jQuery(e.selectorModalBoxBodyContent).html('<div id="'+f+'">'+e.localizedStrings["messageAjaxLoader"]+"</div>");}},scrollTo:function(f){var f=jQuery.extend({targetElement:"a.modalBoxTopLink",typeOfAnimation:"swing",animationSpeed:800,callAfterSuccess:function(){}},f||{});if(f.targetElement){if(jQuery.browser.webkit){var e=jQuery("body");}else{var e=jQuery("html");}e.animate({scrollTop:jQuery(f.targetElement).offset().top},f.animationSpeed,f.typeOfAnimation,function(){f.callAfterSuccess();});}},isImageSource:function(e){var e=jQuery.extend({src:null,returnValue:false},e||{});var f=e.src.toLowerCase();if(f.indexOf(".gif")!=-1||f.indexOf(".jpg")!=-1||f.indexOf(".png")!=-1){e.returnValue=true;}return e.returnValue;},extractImageLink:function(e){var e=jQuery.extend({src:null,splitValuePrefix:"link[",splitValueSuffix:"]",returnValue:""},e||{});var f=e.src.toLowerCase();if(f.indexOf(e.splitValuePrefix)!=-1&&f.indexOf(e.splitValueSuffix)!=-1){f=f.split(e.splitValuePrefix);f=f[1].split(e.splitValueSuffix);e.returnValue=f[0];}return e.returnValue;},cleanupSelectorName:function(e){var e=jQuery.extend({replaceValue:""},e||{});var f=e.replaceValue;f=f.replace(/[#]/g,"");f=f.replace(/[.]/g,"");return f;},dragBox:function(f){var f=jQuery.extend({dragObject:null,dragObjectPosX:0,dragObjectPosY:0,documentPosX:0,documentPosY:0},f||{});f=jQuery.extend({},d,f);function e(g){f.dragObject=g;f.dragObjectPosX=(f.documentPosX-f.dragObject.offsetLeft);f.dragObjectPosY=(f.documentPosY-f.dragObject.offsetTop);}jQuery(document).mousemove(function(g){f.documentPosX=g.pageX;f.documentPosY=g.pageY;if(f.dragObject){jQuery(f.dragObject).css({left:(f.documentPosX-f.dragObjectPosX)+"px",top:(f.documentPosY-f.dragObjectPosY)+"px"});}});jQuery(f.selectorModalbox+" .modalboxStyleContainer_surface_top, "+f.selectorModalbox+" .modalboxStyleContainer_surface_bottom").unbind("mousedown").bind("mousedown",function(g){if(g.type=="mousedown"){jQuery(f.selectorModalbox).unbind("mousemove mouseup").bind("mousemove mouseup",function(h){var i=jQuery(this);if(i.is(":visible")){if(h.type=="mousemove"){e(this);}else{if(h.type=="mouseup"){f.dragObject=null;i.unbind("mousemove");}}}});}});},addAjaxUrlParameter:function(e){var e=jQuery.extend({currentURL:"",addParameterName:"ajaxContent",addParameterValue:"true"},e||{});var g=e.currentURL;if(g.indexOf(e.addParameterName)!=-1){g=g;}else{if(g.indexOf("?")!=-1){var f="&";}else{var f="?";}g=g+f+e.addParameterName+"="+e.addParameterValue;}return g;},precache:function(e){var e=jQuery.extend({},d,e);if(e.selectorModalboxPreCacheContainer){if(jQuery(e.selectorModalboxPreCacheContainer).length==0){var h=a.cleanupSelectorName({replaceValue:e.selectorModalboxPreCacheContainer});var g=a.modalboxBuilder();var f="";f+='<div id="'+h+'" style="position:absolute; left:-9999px; top:-9999px;">';f+=g;f+="</div>";jQuery("body").append(f);jQuery(e.selectorModalbox).show();}}},modalboxBuilder:function(i){var i=jQuery.extend({customStyles:""},i||{});i=jQuery.extend({},d,i);var h=a.cleanupSelectorName({replaceValue:i.selectorModalbox});var f=a.cleanupSelectorName({replaceValue:i.selectorModalBoxBody});var l=a.cleanupSelectorName({replaceValue:i.selectorModalBoxBodyContent});var e=a.cleanupSelectorName({replaceValue:i.selectorModalBoxCloseButton});var k=a.cleanupSelectorName({replaceValue:i.selectorModalBoxAjaxLoader});var g=a.cleanupSelectorName({replaceValue:i.selectorCloseModalBox});var j="";j+='<div id="'+h+'"'+i.customStyles+">";j+='<div id="'+f+'">';j+=i.setModalboxLayoutContainer_Begin;j+='<div class="'+l+'">';j+='<div id="'+k+'">'+i.localizedStrings["messageAjaxLoader"]+"</div>";j+="</div>";j+=i.setModalboxLayoutContainer_End;j+='<div id="'+e+'"><a href="javascript:void(0);" class="'+g+'"><span class="'+g+'">'+i.localizedStrings["messageCloseWindow"]+"</span></a></div>";j+="</div>";j+="</div>";return j;},debugOutput:function(e){var e=jQuery.extend({msg:null},e||{});e=jQuery.extend({},d,e);if(e.debug&&e.msg&&(("console" in window)&&("firebug" in console))){if(typeof(e.msg)=="object"){console.info(e.msg);}else{if(e.msg.trim()!=""){console.debug(e.debugOuputMessagePrefix+e.msg);}else{console.debug(e.msg);}}}}};jQuery.fn.modalBox=function(e){if(a[e]){return a[e].apply(this,Array.prototype.slice.call(arguments,1));}else{if(typeof e==="object"||!e){return a.init.apply(this,arguments);}else{jQuery.error("Method "+e+" does not exist on jQuery.modalBox");}}};jQuery(document).ready(function(){jQuery.fn.modalBox("precache");jQuery(".openmodalbox").modalBox();});})(jQuery);