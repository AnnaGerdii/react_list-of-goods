(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(3),r=n.n(c),l=n(1),s=n(4),i=n(5),u=n(7),d=n(6),h=n(8),m=(n(14),function(e){var t=e.handleClick,n=e.children;return o.a.createElement("button",{className:"button",type:"button",onClick:t},n)}),g=function(e){var t=e.handleClick;return o.a.createElement("select",{className:"button",onChange:t},Object(l.a)(Array(10).keys()).map(function(e){return o.a.createElement("option",{key:e},e+1)}))},f=function(e){var t=e.goodList;return o.a.createElement("ul",{className:"good-list"},t.map(function(e){return o.a.createElement("li",{className:"good-list__item",key:e},e)}))},k=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],p=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={goods:[],shouldStart:!1},n.handleStart=function(){n.setState({goods:[].concat(k),shouldStart:!0})},n.onClickReset=function(){n.setState({goods:[].concat(k)})},n.onClickReverse=function(){n.setState(function(e){return{goods:Object(l.a)(e.goods).reverse()}})},n.onClickSortAbc=function(){n.setState(function(e){return{goods:Object(l.a)(e.goods).sort(function(e,t){return e.localeCompare(t)})}})},n.onClickSortByLen=function(){n.setState(function(e){return{goods:Object(l.a)(e.goods).sort(function(e,t){return e.length-t.length})}})},n.onSelectLength=function(e){n.setState({goods:k.filter(function(t){return t.length>=e.target.value})})},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.goods,n=e.shouldStart;return o.a.createElement("div",{className:"App"},n?o.a.createElement("section",null,o.a.createElement("div",{className:"buttons-wrapper"},o.a.createElement(m,{handleClick:this.onClickReverse},"Reverse"),o.a.createElement(m,{handleClick:this.onClickSortAbc},"Sort alphabetically"),o.a.createElement(m,{handleClick:this.onClickReset},"Reset"),o.a.createElement(m,{handleClick:this.onClickSortByLen},"Sort by length"),o.a.createElement(g,{handleClick:this.onSelectLength})),o.a.createElement(f,{goodList:t})):o.a.createElement(m,{handleClick:this.handleStart},"Start!"))}}]),t}(o.a.Component);r.a.render(o.a.createElement(p,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.024a7bf8.chunk.js.map