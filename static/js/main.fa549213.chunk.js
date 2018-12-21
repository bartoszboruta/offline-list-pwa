(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(25)},18:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),i=n.n(r),l=(n(18),n(20),n(3)),c=n(4),d=n(6),s=n(5),u=n(7),m=n(10),h=n(12),f=o.a.createContext({active:0,done:0,filteredTodos:[],nameFilter:"",onAddTodo:function(){},onChangeNameFilter:function(){},onRemoveTodo:function(){},onToggle:function(){},onUpdateTodo:function(){},showAddField:"",showNameFilter:"",todos:[]}),v=function(){var e=Object(a.useContext)(f).onAddTodo,t=Object(a.useState)(""),n=Object(h.a)(t,2),r=n[0],i=n[1];return o.a.createElement("div",{className:"add"},o.a.createElement("div",{className:"group"},o.a.createElement("input",{onChange:function(e){var t=e.target.value;return i(t)},placeholder:"New task",title:"title",value:r}),o.a.createElement("span",{className:"highlight"}),o.a.createElement("span",{className:"bar"})),o.a.createElement("button",{className:"btn",disabled:!r,onClick:function(){i(""),e(r)}},"Add"))},g=function(){var e=Object(a.useContext)(f),t=e.onChangeNameFilter,n=e.nameFilter;return o.a.createElement("div",{className:"nameFilter"},o.a.createElement("div",{className:"group"},o.a.createElement("input",{onChange:t,placeholder:"Search",value:n}),o.a.createElement("span",{className:"highlight"}),o.a.createElement("span",{className:"bar"})))},p=n(1),w=n.n(p),b=function(){var e=Object(a.useContext)(f),t=e.showNameFilter,n=e.showAddField,r=e.onToggle,i=w()("fa fa-search icon",{active:t}),l=w()("fa fa-plus icon",{active:n});return o.a.createElement("div",{className:"header"},o.a.createElement("i",{className:i,onClick:function(){return r("showNameFilter")}}),o.a.createElement("i",null,"Tasks"),o.a.createElement("i",{className:l,onClick:function(){return r("showAddField")}}))},N=function(e){var t=e.todo,n=Object(a.useContext)(f),r=n.onRemoveTodo,i=n.onUpdateTodo,l=t.done,c=t.title,d=t.updatedAt,s=w()("todo__title",{checked:l}),u=w()("fa fa-check-circle",{checked:l});return o.a.createElement("div",{className:"todo"},o.a.createElement("div",{className:"todo__date"},new Date(d).toLocaleDateString()),o.a.createElement("div",{className:"todo__container"},o.a.createElement("i",{className:"todo__remove fa fa-minus-circle",onClick:r(t)}),o.a.createElement("div",{className:s},c),o.a.createElement("div",{className:"todo__input"},o.a.createElement("label",{className:"label"},o.a.createElement("input",{checked:l,className:"label__checkbox",onChange:i(t),type:"checkbox"}),o.a.createElement("i",{className:u})))))},E=function(){var e=Object(a.useContext)(f).filteredTodos;return o.a.createElement("div",{className:"list"},e.map(function(e){return o.a.createElement(N,{key:e.id,todo:e})}))},T=new(n(11).a)("TodoList");T.version(1).stores({todos:"++id"});var F=T,_=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={active:0,done:0,filteredTodos:[],nameFilter:localStorage.getItem("nameFilter")||"",showAddField:"true"===localStorage.getItem("showAddField"),showNameFilter:"true"===localStorage.getItem("showNameFilter"),todos:[]},n.componentDidMount=function(){n._getTodos()},n._getTodos=function(){F.table("todos").toArray().then(function(e){n.setState({todos:e.sort(function(e,t){return t.id-e.id})},function(){n._updateCounter(),n._applyFilters()})})},n._handleAddTodo=function(e){var t={createdAt:new Date,done:!1,updatedAt:new Date,title:e};F.table("todos").add(t).then(n._getTodos)},n._handleUpdateTodo=function(e){var t=e.done,a=e.id;return function(){F.table("todos").update(a,{done:!t,updatedAt:new Date}).then(n._getTodos)}},n._handleRemoveTodo=function(e){var t=e.id;return function(){F.table("todos").delete(t).then(n._getTodos)}},n._applyFilters=function(){var e=n.state,t=e.nameFilter,a=e.todos.filter(function(e){return e.title.toLowerCase().includes(t.toLowerCase())});n.setState({filteredTodos:a})},n._handleNameFilterChange=function(e){var t=e.target.value;n.setState({nameFilter:t},function(){localStorage.setItem("nameFilter",t),n._applyFilters()})},n._handleToggle=function(e){if(e){var t=n.state[e];n.setState(Object(m.a)({},e,!t),function(){localStorage.setItem(e,!t),"showNameFilter"===e&&t&&n._handleNameFilterChange({target:{value:""}})})}},n._updateCounter=function(){var e=n.state.filteredTodos,t=e.filter(function(e){return!e.done}).length,a=e.filter(function(e){return e.done}).length;n.setState({active:t,done:a})},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.nameFilter,n=e.todos,a=e.filteredTodos,r=e.showNameFilter,i=e.showAddField;return o.a.createElement(f.Provider,{value:{filteredTodos:a,nameFilter:t,onAddTodo:this._handleAddTodo,onChangeNameFilter:this._handleNameFilterChange,onRemoveTodo:this._handleRemoveTodo,onToggle:this._handleToggle,onUpdateTodo:this._handleUpdateTodo,showAddField:i,showNameFilter:r,todos:n}},o.a.createElement(b,null),o.a.createElement("div",{className:"container"},o.a.createElement("div",null,r&&o.a.createElement(g,null),i&&o.a.createElement(v,null)),o.a.createElement(E,null)))}}]),t}(a.Component),C=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(_,null))}}]),t}(a.Component),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(o.a.createElement(C,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/offline-list-pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/offline-list-pwa","/service-worker.js");k?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):A(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):A(t,e)})}}()}},[[13,2,1]]]);
//# sourceMappingURL=main.fa549213.chunk.js.map