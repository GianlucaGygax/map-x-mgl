webpackJsonp([27],{95:function(e,a){e.exports=function(e){var a="",t=mx.helpers;if(a+="<div> ",t.greaterThan(t.path(e,"data.style.rules.length"),0)){a+=" ";var i="point"==t.path(e,"data.geometry.type");a+=" ";var l="line"==t.path(e,"data.geometry.type");a+=" ";t.path(e,"data.geometry.type");a+=" ";var r="u0022string"!==t.path(e,"data.attribute.type");a+=" <ul> ";var d=e.data.style.rules;if(d)for(var o,n=-1,v=d.length-1;n<v;){o=d[n+=1],a+=" ";var c=t.checkLanguage({obj:o,path:"label_",concat:!0});a+=" ";var s=t.firstOf([o["label_"+c],o.value]);a+=" ",o&&(a+=' <li> <div class="mx-legend-item-container"> <input type="checkbox" data-view_action_key="btn_legend_filter" data-view_action_target="'+e.id+'" data-view_action_value="'+o.value+'" data-view_action_variable="'+e.data.attribute.name+'" name="'+e.id+"_"+o.value+'" id="'+e.id+"_"+o.value+'"/> <div class="mx-legend-item-arrow"> ',a+=r?" ≥ ":" = ",a+=' </div> <label for="'+e.id+"_"+o.value+'"> <div class="mx-legend-item-color-container" style="opacity:'+o.opacity+';"> <div class="mx-legend-item-color" style="',l&&(a+="height:"+2*o.size+"px;"),i&&(a+="width:"+2*Math.log(0+10*o.size)+"px;height:"+2*Math.log(0+10*o.size)+"px;border-radius:100%;"),a+="background-color:"+o.color+";",o.sprite&&(a+="background-image:"+o.sprite+";"),a+='"></div> </div> <div class="mx-legend-item-label" title="'+s+'">'+s+"</div> </label> </div> </li> "),a+=" "}a+=" </ul> "}return a+="</div>"}}});