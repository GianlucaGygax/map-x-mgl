webpackJsonp([19],{87:function(t,e,i){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(){JSONEditor.defaults.resolvers.unshift(function(t){if("string"===t.type&&"medium"===t.format)return"medium"}),JSONEditor.defaults.editors.medium=JSONEditor.defaults.editors.string.extend({setValue:function(t,e,i){if((!this.template||i)&&(null===t||void 0===t?t="":"object"===(void 0===t?"undefined":n(t))?t=JSON.stringify(t):"string"!=typeof t&&(t=""+t),t!==this.serialized)){var o=this.sanitize(t);if(this.input.value!==o){this.input.value=o,this.medium_editor&&this.medium_editor.setContent(o);var u=i||this.getValue()!==t;this.refreshValue(),e?this.is_dirty=!1:"change"===this.jsoneditor.options.show_errors&&(this.is_dirty=!0),this.adjust_height&&this.adjust_height(this.input),this.onChange(u)}}},afterInputReady:function(){var t=this;t.options.hidden||Promise.all([i.e(24).then(i.bind(null,170)),i.e(27).then(i.bind(null,475)),i.e(26).then(i.bind(null,477)),i.e(25).then(i.bind(null,479)),i.e(23).then(i.bind(null,481))]).then(function(e){var i=e[0];t.medium_container=document.createElement("div"),t.medium_container.innerHTML=t.input.value,t.input.parentNode.insertBefore(t.medium_container,t.input),t.input.style.display="none",t.medium_editor=new i(t.medium_container,{buttonLabels:"fontawesome",toolbar:{buttons:["h1","h2","h3","bold","italic","quote","anchor","unorderedlist"]}}),t.medium_editor.setContent(t.getValue()),t.medium_editor.subscribe("editableInput",function(e,i){t.input.value=i.innerHTML,t.refreshValue(),t.is_dirty=!0,t.onChange(!0)})}),t.theme.afterInputReady(t.input)},destroy:function(){this.medium_editor&&this.medium_editor.destroy()}})}()}});