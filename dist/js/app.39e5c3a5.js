(function(e){function t(t){for(var r,i,a=t[0],o=t[1],u=t[2],f=0,d=[];f<a.length;f++)i=a[f],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);l&&l(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==s[o]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},s={app:0},c=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],o=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=o;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"138f":function(e,t,n){e.exports=n.p+"img/Spotify.a162f1ee.png"},"3fae":function(e,t,n){"use strict";n("a51a")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Header",{attrs:{genres:e.genres},on:{"change-option":e.setSelectedGenre}}),n("Main",{attrs:{"selected-genre":e.selectedGenre},on:{"fetch-genres":e.setGenres}})],1)},c=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"d-flex align-items-center justify-content-between px-5"},[e._m(0),n("div",[n("Select",{attrs:{placeholder:"Seleziona un genere",options:e.genres}})],1)])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("img",{staticClass:"grow",attrs:{role:"button",id:"spotify-logo",src:n("138f"),alt:"Spotify Logo"}})])}],o=(n("4de4"),n("d3b7"),n("caad"),n("2532"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selected=t.target.multiple?n:n[0]},e.changeOption]}},[n("option",{attrs:{value:""}},[e._v(e._s(e.placeholder))]),e._l(e.options,(function(t,r){return n("option",{key:r||t.id},[e._v(" "+e._s(t)+" ")])}))],2)}),u=[],l={name:"Select",props:["placeholder","options"],data:function(){return{selected:""}},methods:{changeOption:function(){this.$emit("change-option",this.selected)}}},f=l,d=n("2877"),p=Object(d["a"])(f,o,u,!1,null,null,null),h=p.exports,m={name:"Header",components:{Select:h},data:function(){return{selectTerm:""}},props:["genres"],methods:{filteredGenres:function(){var e=this;return this.response.filter((function(t){t.genre.includes(e.selectTerm)}))}}},v=m,g=(n("c6d6"),Object(d["a"])(v,i,a,!1,null,"7bd385fe",null)),b=g.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("section",{attrs:{id:"songs"}},[n("div",{staticClass:"d-flex justify-content-center flex-wrap container"},e._l(e.musicCards,(function(e,t){return n("div",{key:t,staticClass:"music-box m-3 grow"},[n("MusicCard",{attrs:{poster:e.poster,title:e.title,author:e.author,genre:e.genre,year:e.year}})],1)})),0)])])},y=[],x=(n("159b"),n("bc3a")),w=n.n(x),O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex flex-column align-items-center",attrs:{id:"music-card"}},[n("img",{staticClass:"img-fluid mb-3",attrs:{src:e.poster,alt:"title"}}),n("div",{staticClass:"h4 text-white text-center text-uppercase"},[n("strong",[e._v(e._s(e.title))])]),n("div",{staticClass:"mt-2 text-muted fw-600"},[e._v(e._s(e.author))]),n("div",{staticClass:"text-muted fw-600"},[e._v(e._s(e.year))])])},j=[],C={name:"MusicCard",props:["poster","title","author","genre","year"]},S=C,M=(n("e199"),Object(d["a"])(S,O,j,!1,null,"7a615246",null)),G=M.exports,$={name:"Main",components:{MusicCard:G},data:function(){return{musicCards:[]}},props:["selectedGenre"],methods:{fetchMusic:function(){var e=this;w.a.get("https://flynn.boolean.careers/exercises/api/array/music").then((function(t){e.musicCards=t.data.response,e.setGenre()}))},setGenre:function(){var e=[];this.musicCards.forEach((function(t){var n=t.genre;e.includes(n)||e.push(n)})),this.$emit("fetch-genres",e)}},created:function(){this.fetchMusic()}},E=$,P=(n("3fae"),Object(d["a"])(E,_,y,!1,null,"0f8b5adc",null)),k=P.exports,T={name:"App",components:{Header:b,Main:k},data:function(){return{genres:[],selectedGenre:""}},methods:{setGenres:function(e){this.genres=e},setSelectedGenre:function(e){this.selectedGenre=e}}},H=T,A=(n("5c0b"),Object(d["a"])(H,s,c,!1,null,null,null)),J=A.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(J)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){},a51a:function(e,t,n){},c6d6:function(e,t,n){"use strict";n("d78a")},d2f0:function(e,t,n){},d78a:function(e,t,n){},e199:function(e,t,n){"use strict";n("d2f0")}});
//# sourceMappingURL=app.39e5c3a5.js.map