webpackJsonp([18],{88:function(t,i,e){"use strict";!function(){JSONEditor.defaults.resolvers.unshift(function(t){if("object"===t.type&&"position"===t.format)return"position"}),JSONEditor.defaults.editors.position=JSONEditor.defaults.editors.object.extend({layoutEditors:function(){var t,i,e=this;if(this.row_container){var o,n,r,d,s,a,h;if(this.options.addButtonPos&&(n=function(){r=e.options.idMap,r||console.log("no id map provided in position editor as an option"),d=mx.helpers.getMapPos({id:r}),e.setValue({z:d.z,lat:d.lat,lng:d.lng,pitch:d.p,bearing:d.b})},s=document.createElement("div"),s.className="btn-group btn-group-wide",h=document.createElement("label"),h.innerHTML=this.options.textButton,h.className+=" control-label",a=this.getButton(""),a.className+="fa fa-refresh",a.onclick=n,s.appendChild(h),s.appendChild(a)),"grid"===this.format){var p=[];for(this.property_order.forEach(function(t,i){var o=e.editors[t];if(!o.property_removed){for(var n=!1,r=o.options.hidden?0:o.options.grid_columns||o.getNumColumns(),d=o.options.hidden?0:o.container.offsetHeight,s=0;s<p.length;s++)p[s].width+r<=12&&(!d||.5*p[s].minh<d&&2*p[s].maxh>d)&&(n=s);!1===n&&(p.push({width:0,minh:999999,maxh:0,editors:[]}),n=p.length-1),p[n].editors.push({key:t,width:r,height:d}),p[n].width+=r,p[n].minh=Math.min(p[n].minh,d),p[n].maxh=Math.max(p[n].maxh,d)}}),t=0;t<p.length;t++)if(p[t].width<12){var l=!1,c=0;for(i=0;i<p[t].editors.length;i++)!1===l?l=i:p[t].editors[i].width>p[t].editors[l].width&&(l=i),p[t].editors[i].width*=12/p[t].width,p[t].editors[i].width=Math.floor(p[t].editors[i].width),c+=p[t].editors[i].width;c<12&&(p[t].editors[l].width+=12-c),p[t].width=12}if(this.layout===JSON.stringify(p))return!1;for(this.layout=JSON.stringify(p),o=document.createElement("div"),t=0;t<p.length;t++){var m=this.theme.getGridRow();for(this.options.addButtonPos&&o.appendChild(s),o.appendChild(m),i=0;i<p[t].editors.length;i++){var u=p[t].editors[i].key,f=this.editors[u];f.options.hidden?f.container.style.display="none":f.container.className+=" col-md-2",m.appendChild(f.container)}}}else o=document.createElement("div"),jQuery.each(this.property_order,function(t,i){var n=e.editors[i];if(!n.property_removed){var r=e.theme.getGridRow();o.appendChild(r),n.options.hidden?n.container.style.display="none":e.theme.setGridColumnSize(n.container,12),r.appendChild(n.container)}});this.row_container.innerHTML="",this.row_container.appendChild(o)}}})}()}});