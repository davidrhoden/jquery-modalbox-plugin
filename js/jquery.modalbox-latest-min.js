/*
* jQuery modalBox plugin <trunk> <http://code.google.com/p/jquery-modalbox-plugin/> 
* @requires jQuery v1.3.2 or later 
* is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
(function(c){var d={minimalTopSpacingOfModalbox:50,draggable:true,killModalboxWithCloseButtonOnly:false,setWidthOfModalLayer:null,customClassName:null,getStaticContentFrom:null,positionLeft:null,positionTop:null,effectType_show_fadingLayer:["fade","fast"],effectType_hide_fadingLayer:["fade","fast"],effectType_show_modalBox:["show"],effectType_hide_modalBox:["hide"],selectorModalboxContainer:"#modalBox",selectorModalboxBodyContainer:"#modalBoxBody",selectorModalboxBodyContentContainer:".modalBoxBodyContent",selectorFadingLayer:"#modalBoxFaderLayer",selectorAjaxLoader:"#modalBoxAjaxLoader",selectorModalboxCloseContainer:"#modalBoxCloseButton",selectorModalboxContentContainer:".modalboxContent",selectorHiddenAjaxInputField:"ajaxhref",selectorPreCacheContainer:"#modalboxPreCacheContainer",selectorImageGallery:".modalgallery",setModalboxLayoutContainer_Begin:'<div class="modalboxStyleContainer_surface_left"><div class="modalboxStyleContainer_surface_right"><div class="modalboxStyleContainerContent"><div class="modalBoxBodyContent">',setModalboxLayoutContainer_End:'</div></div></div></div><div class="modalboxStyleContainer_corner_topLeft"><!-- - --></div><div class="modalboxStyleContainer_corner_topRight"><!-- - --></div><div class="modalboxStyleContainer_corner_bottomLeft"><!-- - --></div><div class="modalboxStyleContainer_corner_bottomRight"><!-- - --></div><div class="modalboxStyleContainer_surface_top"><div class="modalboxStyleContainer_surface_body"><!-- - --></div></div><div class="modalboxStyleContainer_surface_bottom"><div class="modalboxStyleContainer_surface_body"><!-- - --></div></div>',localizedStrings:{messageCloseWindow:"Close Window",messageAjaxLoader:"Please wait",errorMessageIfNoDataAvailable:"<strong>No content available!</strong>",errorMessageXMLHttpRequest:'Error: XML-Http-Request Status "500"',errorMessageTextStatusError:"Error: AJAX Request failed",errorMessageImageLoadingFailed:"Error: Image loading failed"},setTypeOfFadingLayer:"black",setStylesOfFadingLayer:{white:"background-color:#fff; filter:alpha(opacity=60); -moz-opacity:0.6; opacity:0.6;",black:"background-color:#000; filter:alpha(opacity=40); -moz-opacity:0.4; opacity:0.4;",transparent:"background-color:transparent;",custom:null},directCall:{source:null,data:null,element:null,image:null},ajax_type:"POST",ajax_contentType:"application/x-www-form-urlencoded; charset=utf-8",callFunctionBeforeShow:function(){return true;},callFunctionAfterShow:function(){},callFunctionBeforeHide:function(){},callFunctionAfterHide:function(){},debug:false,debugOuputMessagePrefix:"[jQuery modalBox plugin] "};try{d=jQuery.extend({},d,modalboxGlobalDefaults);}catch(b){}var a={init:function(h){var h=jQuery.extend({},d,h);if(h.directCall){if(h.directCall["source"]){f({type:"ajax",source:h.directCall["source"]});}else{if(h.directCall["data"]){f({type:"static",data:h.directCall["data"]});}else{if(h.directCall["element"]){f({type:"static",data:jQuery(h.directCall["element"]).html()});}else{if(h.directCall["image"]){f({type:"image",image:h.directCall["image"]});}}}}}var i=false;jQuery(window).resize(function(){i=true;});if(!i){jQuery(this).die("click").live("click",function(k){g({event:k,element:jQuery(this)});});}function g(m){var m=jQuery.extend({event:null,element:null,doNotOpenModalBoxContent:false,isFormSubmit:false},m||{});if(m.event&&m.element){var k=m.element;var p="";var o="";var l="";var q="";var r=(typeof(k.attr("href"))!="undefined"?k.attr("href"):"");var n=(typeof(k.attr("rel"))!="undefined"?k.attr("rel"):"");if(k.is("input")){p=k.parents("form").attr("action");o=k.parents("form").serialize();l="ajax";m.isFormSubmit=true;m.event.preventDefault();}else{if(k.find("input[name$='"+h.selectorHiddenAjaxInputField+"']").length!=0){p=k.find("input[name$='"+h.selectorHiddenAjaxInputField+"']").val();o="";l="ajax";m.event.preventDefault();}else{if(n.indexOf("ajax:")!=-1){p=n.split("ajax:");p=p[1];o="";l="ajax";m.event.preventDefault();}else{if(a.isImageSource({src:r})){l="image";q=r;m.event.preventDefault();}else{if(a.isImageSource({src:n})){l="image";q=n;m.event.preventDefault();}else{if(k.find(h.selectorModalboxContentContainer).length!=0){p="";o=k.find(h.selectorModalboxContentContainer).html();l="static";m.event.preventDefault();}else{if(h.getStaticContentFrom){p="";o=jQuery(h.getStaticContentFrom).html();l="static";m.event.preventDefault();}else{m.doNotOpenModalBoxContent=true;}}}}}}}if(!m.doNotOpenModalBoxContent){f({type:l,element:k,source:p,data:o,image:q});}if(m.isFormSubmit){return false;}}}function e(l){var l=jQuery.extend({ar_XMLHttpRequest:null,ar_textStatus:null,ar_errorThrown:null,targetContainer:null,ar_enableDebugging:false},l||{});var m=l.ar_XMLHttpRequest;var p=l.ar_textStatus;var n=l.ar_errorThrown;if(m&&p!="error"){if(m.status==403){var o=m.getResponseHeader("Location");if(typeof o!=="undefined"){location.href=o;}}else{if(m.status==500&&l.targetContainer){k({errorMessage:h.localizedStrings["errorMessageXMLHttpRequest"],targetContainer:l.targetContainer});}}if(l.ar_enableDebugging){console.log("XMLHttpRequest.status: "+m.status);}}else{if(p=="error"){if(l.targetContainer){k({errorMessage:h.localizedStrings["errorMessageTextStatusError"],targetContainer:l.targetContainer});}if(l.ar_enableDebugging){console.log("textStatus: "+p);}}else{}}function k(q){var q=jQuery.extend({errorMessage:null,targetContainer:null},q||{});if(q.errorMessage&&q.targetContainer){var r='<div class="simleModalboxErrorBox"><div class="simleModalboxErrorBoxContent">'+q.errorMessage+"</div></div>";jQuery(q.targetContainer).removeAttr("style").html(r);if(jQuery(q.targetContainer).parents(h.selectorModalboxContainer).length>0){jQuery(h.selectorAjaxLoader).remove();a.center({positionLeft:h.positionLeft,positionTop:h.positionTop,minimalTopSpacingOfModalbox:h.minimalTopSpacingOfModalbox,effectType_show_modalBox:h.effectType_show_modalBox});}}}}function f(m){var m=jQuery.extend({type:null,element:null,source:null,data:null,image:null,prepareCustomWidthOfModalBox:"",setModalboxClassName:""},m||{});function n(){a.close({callFunctionBeforeHide:h.callFunctionBeforeHide,callFunctionAfterHide:h.callFunctionAfterHide});}if(!h.killModalboxWithCloseButtonOnly){jQuery(h.selectorFadingLayer).die("click").live("click",function(){n();});}jQuery(h.selectorModalboxContainer+" .closeModalBox").die("click").live("click",function(){n();});jQuery(h.selectorPreCacheContainer).remove();if(m.type&&h.callFunctionBeforeShow()){if(m.source){m.source=a.addAjaxUrlParameter({currentURL:m.source});}if(m.element){if(jQuery(m.element).hasClass("large")){m.setModalboxClassName+="large";}else{if(jQuery(m.element).hasClass("medium")){m.setModalboxClassName+="medium";}else{if(jQuery(m.element).hasClass("small")){m.setModalboxClassName+="small";}}}if(jQuery(m.element).hasClass("emphasis")){m.setModalboxClassName+=" emphasis";}}if(m.image){m.setModalboxClassName+="modalBoxSingleImage modalBoxBodyContentImageContainer";}if(h.customClassName){m.setModalboxClassName+=" "+h.customClassName;}if(h.draggable){m.setModalboxClassName+=" modalboxIsDraggable";}if(h.setWidthOfModalLayer){m.prepareCustomWidthOfModalBox+="width:"+parseInt(h.setWidthOfModalLayer)+"px; ";}if(jQuery(h.selectorModalboxContainer).length==0){jQuery("body").append(a.modalboxBuilder({customStyles:'class="'+m.setModalboxClassName+'" style="'+m.prepareCustomWidthOfModalBox+'"'}));}else{a.clean();}var k=jQuery(h.selectorModalboxContainer+" "+h.selectorModalboxBodyContentContainer);var l=function(){switch(m.type){case"static":jQuery(h.selectorAjaxLoader).hide();k.html(m.data);a.center({positionLeft:h.positionLeft,positionTop:h.positionTop,minimalTopSpacingOfModalbox:h.minimalTopSpacingOfModalbox,effectType_show_modalBox:h.effectType_show_modalBox,callFunctionAfterShow:h.callFunctionAfterShow});break;case"ajax":jQuery.ajax({type:h.ajax_type,url:m.source,data:m.data,contentType:h.ajax_contentType,success:function(o,p){jQuery(h.selectorAjaxLoader).fadeOut("fast",function(){k.html(o);a.center({positionLeft:h.positionLeft,positionTop:h.positionTop,minimalTopSpacingOfModalbox:h.minimalTopSpacingOfModalbox,effectType_show_modalBox:h.effectType_show_modalBox,callFunctionAfterShow:h.callFunctionAfterShow});});},error:function(o,q,p){e({ar_XMLHttpRequest:o,ar_textStatus:q,ar_errorThrown:p,targetContainer:h.selectorModalboxContainer+" "+h.selectorModalboxBodyContentContainer});}});break;case"image":jQuery('<img class="modalBoxImagePreload" src="'+m.image+'" />').load(function(p,o,r){if(o=="error"){a.debugOutput({msg:"Error / "+r.status+" : "+r.statusText});}else{var q=jQuery(this);jQuery(h.selectorAjaxLoader).fadeOut("fast",function(){k.html(q);a.center({positionLeft:h.positionLeft,positionTop:h.positionTop,minimalTopSpacingOfModalbox:h.minimalTopSpacingOfModalbox,effectType_show_modalBox:h.effectType_show_modalBox,callFunctionAfterShow:function(){h.callFunctionAfterShow();k.find("img.modalBoxImagePreload").removeClass("modalBoxImagePreload").addClass("modalBoxImageLoadingSuccessful");}});});}}).error(function(){a.debugOutput({msg:"Error / "+h.localizedStrings["errorMessageImageLoadingFailed"]});});break;}if(h.draggable){a.dragBox();}};j({callFunctionAfterShow:l});}}function j(k){var k=jQuery.extend({isResized:false,setStyleOfFadingLayer:"",callFunctionAfterShow:null},k||{});if(jQuery(h.selectorFadingLayer).length==0){if(h.setTypeOfFadingLayer=="white"){k.setStyleOfFadingLayer=h.setStylesOfFadingLayer["white"];}else{if(h.setTypeOfFadingLayer=="black"){k.setStyleOfFadingLayer=h.setStylesOfFadingLayer["black"];}else{if(h.setTypeOfFadingLayer=="custom"&&h.setStylesOfFadingLayer["custom"]){k.setStyleOfFadingLayer=h.setStylesOfFadingLayer["custom"];}else{k.setStyleOfFadingLayer=h.setStylesOfFadingLayer["transparent"];}}}var m=a.cleanupSelectorName({replaceValue:h.selectorFadingLayer});jQuery("body").append('<div id="'+m+'" style="'+k.setStyleOfFadingLayer+'"></div>');var l=jQuery(h.selectorFadingLayer);if(h.setTypeOfFadingLayer=="disable"){h.effectType_show_fadingLayer[0]="";}switch(h.effectType_show_fadingLayer[0]){case"fade":l.fadeIn(h.effectType_show_fadingLayer[1],function(){a.center({positionLeft:h.positionLeft,positionTop:h.positionTop,minimalTopSpacingOfModalbox:h.minimalTopSpacingOfModalbox,effectType_show_modalBox:h.effectType_show_modalBox,isResized:k.isResized,callFunctionAfterShow:k.callFunctionAfterShow});});break;default:l.show();a.center({positionLeft:h.positionLeft,positionTop:h.positionTop,minimalTopSpacingOfModalbox:h.minimalTopSpacingOfModalbox,effectType_show_modalBox:h.effectType_show_modalBox,isResized:k.isResized,callFunctionAfterShow:k.callFunctionAfterShow});break;}jQuery(window).resize(function(){if(l.is(":visible")){a.center({positionLeft:h.positionLeft,positionTop:h.positionTop,minimalTopSpacingOfModalbox:h.minimalTopSpacingOfModalbox,effectType_show_modalBox:h.effectType_show_modalBox,isResized:true});}});}else{a.center({positionLeft:h.positionLeft,positionTop:h.positionTop,minimalTopSpacingOfModalbox:h.minimalTopSpacingOfModalbox,effectType_show_modalBox:h.effectType_show_modalBox,isResized:k.isResized,callFunctionAfterShow:k.callFunctionAfterShow});}}},close:function(e){var e=jQuery.extend({},d,e);if(e.selectorFadingLayer&&e.selectorModalboxContainer){e.callFunctionBeforeHide();var g=jQuery(e.selectorFadingLayer+", "+e.selectorModalboxContainer);if(e.setTypeOfFadingLayer=="disable"){e.effectType_hide_fadingLayer[0]="";}switch(e.effectType_hide_fadingLayer[0]){case"fade":switch(e.effectType_hide_modalBox[0]){case"fade":jQuery(e.selectorModalboxContainer).fadeOut(e.effectType_hide_modalBox[1],function(){jQuery(e.selectorFadingLayer).fadeOut(e.effectType_hide_fadingLayer[1],function(){f(g);});});break;default:jQuery(e.selectorModalboxContainer).hide();jQuery(e.selectorFadingLayer).fadeOut(e.effectType_hide_fadingLayer[1],function(){f(g);});break;}break;default:switch(e.effectType_hide_modalBox[0]){case"fade":jQuery(e.selectorModalboxContainer).fadeOut(e.effectType_hide_modalBox[1],function(){f(g);});break;default:f(g);break;}break;}}function f(h){h.remove();e.callFunctionAfterHide();}},center:function(g){var g=jQuery.extend({isResized:false,callFunctionAfterShow:null},g||{});g=jQuery.extend({},d,g);var e=jQuery(g.selectorModalboxContainer);if(jQuery(g.selectorPreCacheContainer).length==0&&e.length>0){var f=false;var k="absolute";var j=e.width();var h=e.height();var i=0;var m=parseInt(jQuery(window).width()-j)/2;if(jQuery("body a.modalBoxTopLink").length==0){jQuery("body").prepend('<a class="modalBoxTopLink"></a>');}if(m<=0){m=0;}if(g.positionLeft){m=g.positionLeft+"px";}else{m=m+"px";}if(g.positionTop){i=parseInt(jQuery(window).height()-h);if(i>parseInt(g.positionTop)){k="fixed";}i=g.positionTop+"px";}else{i=parseInt(jQuery(window).height()-h-70)/2;if(i<=0){i=g.minimalTopSpacingOfModalbox+"px";f=true;}else{i=i+"px";k="fixed";}}function l(){if(f&&!e.hasClass("modalboxScrollingSuccessfully")){e.addClass("modalboxScrollingSuccessfully");a.scrollTo();}if(!g.isResized){if(g.callFunctionAfterShow){g.callFunctionAfterShow();}}}switch(g.effectType_show_modalBox[0]){case"fade":if(e.hasClass("modalboxFadingSuccessfully")){e.css({position:k,left:m,top:i,display:"block",visibility:"visible"});l();}else{e.css({position:k,left:m,top:i,visibility:"visible"}).fadeIn(g.effectType_show_modalBox[1],function(){jQuery(this).addClass("modalboxFadingSuccessfully");l();});}break;default:e.css({position:k,left:m,top:i,display:"block",visibility:"visible"});l();break;}}},clean:function(e){var e=jQuery.extend({},d,e);if(e.selectorModalboxBodyContentContainer){var f=a.cleanupSelectorName({replaceValue:e.selectorAjaxLoader});jQuery(e.selectorModalboxBodyContentContainer).html('<div id="'+f+'">'+e.localizedStrings["messageAjaxLoader"]+"</div>");}},scrollTo:function(f){var f=jQuery.extend({targetElement:"a.modalBoxTopLink",typeOfAnimation:"swing",animationSpeed:800,callAfterSuccess:function(){}},f||{});if(f.targetElement){if(jQuery.browser.webkit){var e=jQuery("body");}else{var e=jQuery("html");}e.animate({scrollTop:jQuery(f.targetElement).offset().top},f.animationSpeed,f.typeOfAnimation,function(){f.callAfterSuccess();});}},isImageSource:function(e){var e=jQuery.extend({src:null,returnValue:false},e||{});var f=e.src.toLowerCase();if(f.indexOf(".gif")!=-1||f.indexOf(".jpg")!=-1||f.indexOf(".png")!=-1){e.returnValue=true;}return e.returnValue;},cleanupSelectorName:function(e){var e=jQuery.extend({replaceValue:""},e||{});var f=e.replaceValue;f=f.replace(/[#]/g,"");f=f.replace(/[.]/g,"");return f;},dragBox:function(f){var f=jQuery.extend({dragObject:null,dragObjectPosX:0,dragObjectPosY:0,documentPosX:0,documentPosY:0},f||{});f=jQuery.extend({},d,f);function e(g){f.dragObject=g;f.dragObjectPosX=(f.documentPosX-f.dragObject.offsetLeft);f.dragObjectPosY=(f.documentPosY-f.dragObject.offsetTop);}jQuery(document).mousemove(function(g){f.documentPosX=g.pageX;f.documentPosY=g.pageY;if(f.dragObject){jQuery(f.dragObject).css({left:(f.documentPosX-f.dragObjectPosX)+"px",top:(f.documentPosY-f.dragObjectPosY)+"px"});}});jQuery(f.selectorModalboxContainer+" .modalboxStyleContainer_surface_top, "+f.selectorModalboxContainer+" .modalboxStyleContainer_surface_bottom").unbind("mousedown").bind("mousedown",function(g){if(g.type=="mousedown"){jQuery(f.selectorModalboxContainer).unbind("mousemove mouseup").bind("mousemove mouseup",function(h){var i=jQuery(this);if(i.is(":visible")){if(h.type=="mousemove"){e(this);}else{if(h.type=="mouseup"){f.dragObject=null;i.unbind("mousemove");}}}});}});},addAjaxUrlParameter:function(e){var e=jQuery.extend({currentURL:"",addParameterName:"ajaxContent",addParameterValue:"true"},e||{});var g=e.currentURL;if(g.indexOf(e.addParameterName)!=-1){g=g;}else{if(g.indexOf("?")!=-1){var f="&";}else{var f="?";}g=g+f+e.addParameterName+"="+e.addParameterValue;}return g;},precache:function(e){var e=jQuery.extend({},d,e);if(e.selectorPreCacheContainer){if(jQuery(e.selectorPreCacheContainer).length==0){var h=a.cleanupSelectorName({replaceValue:e.selectorPreCacheContainer});var g=a.modalboxBuilder();var f="";f+='<div id="'+h+'" style="position:absolute; left:-9999px; top:-9999px;">';f+=g;f+="</div>";jQuery("body").append(f);jQuery(e.selectorModalboxContainer).show();}}},modalboxBuilder:function(h){var h=jQuery.extend({customStyles:""},h||{});h=jQuery.extend({},d,h);var g=a.cleanupSelectorName({replaceValue:h.selectorModalboxContainer});var f=a.cleanupSelectorName({replaceValue:h.selectorModalboxBodyContainer});var k=a.cleanupSelectorName({replaceValue:h.selectorModalboxBodyContentContainer});var e=a.cleanupSelectorName({replaceValue:h.selectorModalboxCloseContainer});var j=a.cleanupSelectorName({replaceValue:h.selectorAjaxLoader});var i="";i+='<div id="'+g+'"'+h.customStyles+">";i+='<div id="'+f+'">';i+=h.setModalboxLayoutContainer_Begin;i+='<div class="'+k+'">';i+='<div id="'+j+'">'+h.localizedStrings["messageAjaxLoader"]+"</div>";i+="</div>";i+=h.setModalboxLayoutContainer_End;i+='<div id="'+e+'"><a href="javascript:void(0);" class="closeModalBox"><span class="closeModalBox">'+h.localizedStrings["messageCloseWindow"]+"</span></a></div>";i+="</div>";i+="</div>";return i;},debugOutput:function(e){var e=jQuery.extend({msg:null},e||{});e=jQuery.extend({},d,e);if(e.debug&&e.msg&&(("console" in window)&&("firebug" in console))){if(typeof(e.msg)=="object"){console.info(e.msg);}else{if(e.msg.trim()!=""){console.debug(e.debugOuputMessagePrefix+e.msg);}else{console.debug(e.msg);}}}}};jQuery.fn.modalBox=function(e){if(a[e]){return a[e].apply(this,Array.prototype.slice.call(arguments,1));}else{if(typeof e==="object"||!e){return a.init.apply(this,arguments);}else{jQuery.error("Method "+e+" does not exist on jQuery.modalBox");}}};jQuery(document).ready(function(){jQuery.fn.modalBox("precache");jQuery(".openmodalbox").modalBox();});})(jQuery);