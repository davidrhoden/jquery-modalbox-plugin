/*
* jQuery modalBox plugin v1.0.4 <http://code.google.com/p/jquery-modalbox-plugin/> 
* @requires jQuery v1.2.6 or later 
* is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
(function(e){var d=jQuery.fn.jquery;var b=(navigator.appName=="Microsoft Internet Explorer"&&parseInt(navigator.appVersion)==4&&navigator.appVersion.indexOf("MSIE 5.5")!=-1);var a=(navigator.appName=="Microsoft Internet Explorer"&&parseInt(navigator.appVersion)==4&&navigator.appVersion.indexOf("MSIE 6.0")!=-1);var c=false;if(jQuery.browser.msie&&(b||a)){c=true;}jQuery.fn.modalBox=function(n){n=jQuery.extend({setModalboxContainer:"#modalBox",setModalboxBodyContainer:"#modalBoxBody",setModalboxBodyContentContainer:".modalBoxBodyContent",setFaderLayer:"#modalBoxFaderLayer",setAjaxLoader:"#modalBoxAjaxLoader",setModalboxCloseButtonContainer:"#modalBoxCloseButton",getStaticContentFromInnerContainer:".modalboxContent",getStaticContentFrom:null,setNameOfHiddenAjaxInputField:"ajaxhref",killModalboxWithCloseButtonOnly:false,setTypeOfFaderLayer:"black",setStylesOfFaderLayer:{white:"background-color:#fff; filter:alpha(opacity=60); -moz-opacity:0.6; opacity:0.6;",black:"background-color:#000; filter:alpha(opacity=40); -moz-opacity:0.4; opacity:0.4;",transparent:"background-color:transparent;",custom:null,},setModalboxLayoutContainer_Begin:'<div class="modalboxStyleContainerTopLeft"><div class="modalboxStyleContainerTopRight"><div class="modalboxStyleContainerContent">',setModalboxLayoutContainer_End:'</div></div></div><div class="modalboxStyleContainerBottomLeft"><div class="modalboxStyleContainerBottomRight"></div></div>',setModalboxLayoutContainer_Begin_ObsoleteBrowsers:'<div class="modalboxStyleContainerTopRight"><div class="modalboxStyleContainerContent">',setModalboxLayoutContainer_End_ObsoleteBrowsers:'</div></div><div class="modalboxStyleContainerBottomRight"></div><div class="modalboxStyleContainerTopLeft"></div><div class="modalboxStyleContainerBottomLeft"></div>',localizedStrings:{messageCloseWindow:"Close Window",messageAjaxLoader:"Please wait",errorMessageIfNoDataAvailable:"<strong>No content available!</strong>",errorMessageXMLHttpRequest:'Error: XML-Http-Request Status "500"',errorMessageTextStatusError:"Error: AJAX Request failed"},minimalTopSpacingOfModalbox:50,usejqueryuidragable:false,directCall:{source:null,data:null}},n||{});if(typeof(modalboxLocalizedStrings)!=="undefined"){if(modalboxLocalizedStrings!==""){n.localizedStrings={messageCloseWindow:modalboxLocalizedStrings["messageCloseWindow"],messageAjaxLoader:modalboxLocalizedStrings["messageAjaxLoader"],errorMessageIfNoDataAvailable:modalboxLocalizedStrings["errorMessageIfNoDataAvailable"],errorMessageXMLHttpRequest:modalboxLocalizedStrings["errorMessageXMLHttpRequest"],errorMessageTextStatusError:modalboxLocalizedStrings["errorMessageTextStatusError"]};}}if(n.directCall){if(n.directCall["source"]){p({type:"ajax",source:n.directCall["source"],data:""});}else{if(n.directCall["data"]){p({type:"static",source:"",data:jQuery(n.directCall["data"]).html()});}}}var k=false;jQuery(window).resize(function(){l();k=true;});if(!k){if(d=="1.2.6"){jQuery(this).unbind("click").bind("click",function(r){f({event:r,element:jQuery(this)});});}else{jQuery(this).die("click").live("click",function(r){f({event:r,element:jQuery(this)});});}}function f(t){t=jQuery.extend({event:null,element:null},t||{});if(t.event&&t.element){var s=t.event;var x=t.element;var u=false;var z=false;if(x.is("input")){var r=x.parents("form").attr("action");var v=x.parents("form").serialize();var w="ajax";z=true;s.preventDefault();}else{if(jQuery("input[name$='"+n.setNameOfHiddenAjaxInputField+"']",x).size()!=0){var r=jQuery("input[name$='"+n.setNameOfHiddenAjaxInputField+"']",x).val();var v="";var w="ajax";s.preventDefault();}else{if(jQuery(n.getStaticContentFromInnerContainer,x).size()!=0){if(jQuery(n.getStaticContentFromInnerContainer+" img",x).size()!=0){var y=jQuery(n.getStaticContentFromInnerContainer+" img",x);}var r="";var v=jQuery(n.getStaticContentFromInnerContainer,x).html();var w="static";s.preventDefault();}else{if(n.getStaticContentFrom){var r="";var v=jQuery(n.getStaticContentFrom).html();var w="static";s.preventDefault();}else{u=true;}}}}if(!u){p({type:w,element:x,source:r,data:v,loadImagePreparer:{currentImageObj:y,finalizeModalBox:false}});}if(z){return false;}}}function g(r){r=jQuery.extend({targetElement:null,typeOfAnimation:"swing",animationSpeed:800},r||{});if(r.targetElement){jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop:jQuery(r.targetElement).offset().top},r.animationSpeed,r.typeOfAnimation);}}function h(s){s=jQuery.extend({ar_XMLHttpRequest:null,ar_textStatus:null,ar_errorThrown:null,targetContainer:null,ar_enableDebugging:false},s||{});var t=s.ar_XMLHttpRequest;var w=s.ar_textStatus;var u=s.ar_errorThrown;if(t&&w!="error"){if(t.status==403){var v=t.getResponseHeader("Location");if(typeof v!=="undefined"){location.href=v;}}else{if(t.status==500&&s.targetContainer){r({errorMessage:n.localizedStrings["errorMessageXMLHttpRequest"],targetContainer:s.targetContainer});}}if(s.ar_enableDebugging){console.log("XMLHttpRequest.status: "+t.status);}}else{if(w=="error"){if(s.targetContainer){r({errorMessage:n.localizedStrings["errorMessageTextStatusError"],targetContainer:s.targetContainer});}if(s.ar_enableDebugging){console.log("textStatus: "+w);}}else{}}function r(x){x=jQuery.extend({errorMessage:null,targetContainer:null},x||{});if(x.errorMessage&&x.targetContainer){var y="";y+='<div class="simleModalboxErrorBox"><div class="simleModalboxErrorBoxContent">';y+=x.errorMessage;y+="</div></div>";jQuery(x.targetContainer).removeAttr("style").html(y);if(jQuery(x.targetContainer).parents(n.setModalboxContainer).size()>0){jQuery(n.setAjaxLoader).remove();l();}}}}function j(r){r=jQuery.extend({currentURL:"",addParameterName:"ajaxContent",addParameterValue:"true"},r||{});var t=r.currentURL;if(t.indexOf(r.addParameterName)!=-1){t=t;}else{if(t.indexOf("?")!=-1){var s="&";}else{var s="?";}t=t+s+r.addParameterName+"="+r.addParameterValue;}return t;}function m(r){r=jQuery.extend({replaceValue:""},r||{});var s=r.replaceValue;s=s.replace(/[#]/g,"");s=s.replace(/[.]/g,"");return s;}function o(s){s=jQuery.extend({type:s.type,element:s.element,source:s.source,data:s.data,loadImagePreparer:{currentImageObj:s.loadImagePreparer["currentImageObj"],finalizeModalBox:s.loadImagePreparer["finalizeModalBox"]},nameOfImagePreloaderContainer:"imagePreparerLoader"},s||{});if(s.loadImagePreparer["currentImageObj"]){jQuery(n.getStaticContentFromInnerContainer).css({visibility:"hidden",display:"block"});var r=jQuery(s.loadImagePreparer["currentImageObj"]).width();var t=jQuery(s.loadImagePreparer["currentImageObj"]).height();jQuery(n.getStaticContentFromInnerContainer).removeAttr("style");p({type:s.type,element:s.element,source:s.source,data:s.data,loadImagePreparer:{currentImageObj:s.loadImagePreparer["currentImageObj"],widthOfImage:r,heightOfImage:t,finalizeModalBox:true,nameOfImagePreloaderContainer:s.nameOfImagePreloaderContainer}});}}function i(){var r="";r+='<script type="text/javascript">';r+='jQuery(document).ready(function(){ jQuery(".closeModalBox", "'+n.setModalboxContainer+"\").click(function(){ jQuery(this).modalBox.close({layerContainer:'"+n.setFaderLayer+"', setModalboxContainer:'"+n.setModalboxContainer+"' }); }); });";r+="<\/script>";jQuery(n.setModalboxContainer).append(r);}function p(t){t=jQuery.extend({type:null,element:null,source:null,data:null,loadImagePreparer:{currentImageObj:null,widthOfImage:null,heightOfImage:null,finalizeModalBox:false,nameOfImagePreloaderContainer:null},eMessageNoData:n.localizedStrings["errorMessageIfNoDataAvailable"],onSuccess:function(){i();return false;}},t||{});if(!t.data&&t.eMessageNoData){t.data=t.eMessageNoData;}if(t.loadImagePreparer["currentImageObj"]&&!t.loadImagePreparer["finalizeModalBox"]){o({type:t.type,element:t.element,source:t.source,data:t.data,loadImagePreparer:t.loadImagePreparer});}else{if(t.type){if(t.source){t.source=j({currentURL:t.source});}var s="";if(t.element){if(jQuery(t.element).hasClass("large")){var y="large";}else{if(jQuery(t.element).hasClass("medium")){var y="medium";}else{if(jQuery(t.element).hasClass("small")){var y="small";}else{if(t.loadImagePreparer["nameOfImagePreloaderContainer"]){var y="auto";var s="width:"+Math.abs(t.loadImagePreparer["widthOfImage"]+40)+"px; ";s+="height:"+Math.abs(t.loadImagePreparer["heightOfImage"]+40)+"px; ";}else{var y="";}}}}if(jQuery(t.element).hasClass("emphasis")){y+=" emphasis";}}if(jQuery(n.setModalboxContainer).size()==0){q();var x=m({replaceValue:n.setModalboxContainer});var r=m({replaceValue:n.setModalboxBodyContainer});var u=m({replaceValue:n.setModalboxBodyContentContainer});var v=m({replaceValue:n.setModalboxCloseButtonContainer});var z=m({replaceValue:n.setAjaxLoader});var w="";w+='<div id="'+x+'" class="'+y+'" style="'+s+'">';w+='<div id="'+r+'">';if(c){w+=n.setModalboxLayoutContainer_Begin_ObsoleteBrowsers;}else{w+=n.setModalboxLayoutContainer_Begin;}w+='<div class="'+u+'">';w+='<div id="'+z+'">'+n.localizedStrings["messageAjaxLoader"]+"</div>";w+="</div>";if(c){w+=n.setModalboxLayoutContainer_End_ObsoleteBrowsers;}else{w+=n.setModalboxLayoutContainer_End;}w+='<div id="'+v+'"><a href="javascript:void(0);" class="closeModalBox"><span class="closeModalBox">'+n.localizedStrings["messageCloseWindow"]+"</span></a></div>";w+="</div>";w+="</div>";jQuery("body").append(w);}else{var z=m({replaceValue:n.setAjaxLoader});jQuery.fn.modalBox.clean({setModalboxContentContainer:n.setModalboxBodyContentContainer,setAjaxLoader:z,localizedStrings:n.localizedStrings["messageAjaxLoader"]});}switch(t.type){case"static":jQuery(n.setAjaxLoader).hide();jQuery(n.setModalboxBodyContentContainer,n.setModalboxContainer).html(t.data);if(c){l();}t.onSuccess();break;case"ajax":jQuery.ajax({type:"POST",url:t.source,data:t.data,success:function(A,B){jQuery(n.setAjaxLoader).hide();jQuery(n.setModalboxBodyContentContainer,n.setModalboxContainer).append(A);l();t.onSuccess();},error:function(A,C,B){h({ar_XMLHttpRequest:A,ar_textStatus:C,ar_errorThrown:B,targetContainer:n.setModalboxContainer+" "+n.setModalboxBodyContentContainer});}});break;}if(!c){l();}}}}function l(){if(jQuery(n.setModalboxContainer).size()!=0){if(jQuery("body a.modalBoxTopLink").size()==0){jQuery("body").prepend('<a class="modalBoxTopLink"></a>');}var t=parseInt(jQuery(window).width()-jQuery(n.setModalboxContainer).width())/2;if(t<=0){t=0;}var u=parseInt(jQuery(window).height()-jQuery(n.setModalboxContainer).height()-70)/2;if(jQuery.browser.msie){var s=document.documentElement.scrollTop;}else{var s=window.pageYOffset;}s=s+u;if(jQuery.browser.msie&&parseInt(jQuery.browser.version)<7){jQuery(n.setModalboxContainer).css({position:"absolute",left:t+"px",display:"block"});g({targetElement:"a.modalBoxTopLink"});}else{if(u<=0){jQuery(n.setModalboxContainer).css({position:"absolute",left:t+"px",top:n.minimalTopSpacingOfModalbox+"px",display:"block"});g({targetElement:"a.modalBoxTopLink"});}else{jQuery(n.setModalboxContainer).css({position:"fixed",left:t+"px",top:u+"px",display:"block"});}}if(n.usejqueryuidragable){jQuery(n.setModalboxContainer).draggable("destroy").draggable({opacity:false,iframeFix:true,refreshPositions:true});}q();}if(c){var r=jQuery("div.modalboxStyleContainerTopRight",n.setModalboxContainer).height();jQuery("div.modalboxStyleContainerTopLeft",n.setModalboxContainer).height(r);}}function q(){if(n.setTypeOfFaderLayer=="white"){var r=n.setStylesOfFaderLayer["white"];}else{if(n.setTypeOfFaderLayer=="black"){var r=n.setStylesOfFaderLayer["black"];}else{if(n.setTypeOfFaderLayer=="custom"&&n.setStylesOfFaderLayer["custom"]){var r=n.setStylesOfFaderLayer["custom"];}else{var r=n.setStylesOfFaderLayer["transparent"];}}}var t=jQuery(n.setFaderLayer);if(t.size()==0){var s=m({replaceValue:n.setFaderLayer});jQuery("body").append('<div id="'+s+'" style="'+r+'"></div><!--[if lte IE 6.5]><iframe class="modalBoxIe6layerfix"></iframe><![endif]-->');jQuery("iframe.modalBoxIe6layerfix").css({width:Math.abs(jQuery(n.setFaderLayer).width()-1)+"px",height:Math.abs(jQuery(n.setFaderLayer).height()-1)+"px"});if(!n.killModalboxWithCloseButtonOnly){jQuery(n.setFaderLayer).click(function(){jQuery(this).modalBox.close({layerContainer:n.setFaderLayer,setModalboxContainer:n.setModalboxContainer});});}jQuery(window).resize(function(){if(jQuery(n.setFaderLayer).is(":visible")){q();}});}else{if(t.size()!=0&&!t.is(":visible")){t.show();}}}};jQuery.fn.modalBox.close=function(f){f=jQuery.extend({layerContainer:null,setModalboxContainer:null},f||{});if(f.layerContainer&&f.setModalboxContainer){jQuery(f.layerContainer).remove();jQuery(f.setModalboxContainer).remove();jQuery("iframe.modalBoxIe6layerfix").remove();}};jQuery.fn.modalBox.clean=function(f){f=jQuery.extend({setModalboxContentContainer:null,setAjaxLoader:null,localizedStrings:null},f||{});if(f.setModalboxContentContainer){jQuery(f.setModalboxContentContainer).html('<div id="'+f.setAjaxLoader+'">'+f.localizedStrings+"</div>");}};jQuery(document).ready(function(){jQuery(".openmodalbox").modalBox();});})(jQuery);