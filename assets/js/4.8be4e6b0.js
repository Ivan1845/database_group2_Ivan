(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{588:function(t){t.exports=JSON.parse('{"user":"Dave","questions":[{"text":"What is the full form of HTTP?","responses":[{"text":"Hyper text transfer package"},{"text":"Hyper text transfer protocol","correct":true},{"text":"Hyphenation text test program"},{"text":"None of the above"}]},{"text":"HTML document start and end with which tag pairs?","responses":[{"text":"HTML","correct":true},{"text":"WEB"},{"text":"HEAD"},{"text":"BODY"}]},{"text":"Which tag is used to create body text in HTML?","responses":[{"text":"HEAD"},{"text":"BODY","correct":true},{"text":"TITLE"},{"text":"TEXT"}]},{"text":"Outlook Express is _________","responses":[{"text":"E-Mail Client","correct":true},{"text":"Browser"},{"text":"Search Engine"},{"text":"None of the above"}]},{"text":"What is a search engine?","responses":[{"text":"A hardware component "},{"text":"A machinery engine that search data"},{"text":"A web site that searches anything","correct":true},{"text":"A program that searches engines"}]},{"text":"What does the .com domain represents?","responses":[{"text":"Network"},{"text":"Education"},{"text":"Commercial","correct":true},{"text":"None of the above"}]},{"text":"In Satellite based communication, VSAT stands for? ","responses":[{"text":" Very Small Aperture Terminal","correct":true},{"text":"Varying Size Aperture Terminal "},{"text":"Very Small Analog Terminal"},{"text":"None of the above"}]},{"text":"What is the full form of TCP/IP? ","responses":[{"text":"Telephone call protocol / international protocol"},{"text":"Transmission control protocol / internet protocol","correct":true},{"text":"Transport control protocol / internet protocol "},{"text":"None of the above"}]},{"text":"What is the full form of HTML?","responses":[{"text":"Hyper text marking language"},{"text":"Hyphenation text markup language "},{"text":"Hyper text markup language","correct":true},{"text":"Hyphenation test marking language"}]},{"text":"\\"Yahoo\\", \\"Infoseek\\" and \\"Lycos\\" are _________?","responses":[{"text":"Browsers "},{"text":"Search Engines","correct":true},{"text":"News Group"},{"text":"None of the above"}]}]}')},589:function(t){t.exports=JSON.parse('{"user":"Dave","questions":[{"text":"Who is the Batman","responses":[{"text":"Laughing Bat"},{"text":"Bruce Wayne","correct":true},{"text":"Dick Grayson"},{"text":"None of the above"}]},{"text":"\\"Yahoo\\", \\"Infoseek\\" and \\"Lycos\\" are _________?","responses":[{"text":"Browsers "},{"text":"Search Engines","correct":true},{"text":"News Group"},{"text":"None of the above"}]}]}')},590:function(t,e,s){},635:function(t,e,s){var n=s(2),o=s(636),i=s(132);n({target:"Array",proto:!0},{fill:o}),i("fill")},636:function(t,e,s){"use strict";var n=s(16),o=s(137),i=s(26);t.exports=function(t){for(var e=n(this),s=i(e.length),r=arguments.length,a=o(r>1?arguments[1]:void 0,s),u=r>2?arguments[2]:void 0,c=void 0===u?s:o(u,s);c>a;)e[a++]=t;return e}},637:function(t,e,s){"use strict";s(590)},645:function(t,e,s){"use strict";s.r(e);s(389),s(635);var n=s(588),o=s(589),i={name:"Quiz",props:{quizNum:Number},data:function(){var t;switch(this.quizNum){case 1:t=n;break;case 2:t=o;break;default:t=n}return{quiz:t,questionIndex:0,userResponses:Array(t.questions.length).fill(null),isActive:!1}},filters:{charIndex:function(t){return String.fromCharCode(97+t)}},methods:{restart:function(){this.questionIndex=0,this.userResponses=Array(this.quiz.questions.length).fill(null)},selectOption:function(t){this.$set(this.userResponses,this.questionIndex,t)},next:function(){this.questionIndex<this.quiz.questions.length&&this.questionIndex++},prev:function(){this.quiz.questions.length>0&&this.questionIndex--},score:function(){for(var t=0,e=0;e<this.userResponses.length;e++)void 0!==this.quiz.questions[e].responses[this.userResponses[e]]&&this.quiz.questions[e].responses[this.userResponses[e]].correct&&(t+=1);return t}}},r=(s(637),s(34)),a=Object(r.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"container"},[s("transition",{attrs:{duration:{enter:500,leave:300},"enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut",mode:"out-in"}},[t.questionIndex<t.quiz.questions.length?s("div",{key:t.questionIndex,staticClass:"questionContainer"},[s("header",[s("div",{staticClass:"shell"},[s("div",{staticClass:"bar",style:{width:t.questionIndex/t.quiz.questions.length*100+"%"}},[s("span",[t._v(t._s(t.questionIndex/t.quiz.questions.length*100)+"%")])])])]),t._v(" "),s("h2",{staticClass:"titleContainer title"},[t._v(t._s(t.quiz.questions[t.questionIndex]&&t.quiz.questions[t.questionIndex].text))]),t._v(" "),t.quiz.questions[t.questionIndex]?s("div",{staticClass:"optionContainer"},t._l(t.quiz.questions[t.questionIndex].responses,(function(e,n){return s("div",{key:n,staticClass:"option",class:{"is-selected":t.userResponses[t.questionIndex]==n},on:{click:function(e){return t.selectOption(n)}}},[t._v("\n            "+t._s(t._f("charIndex")(n))+". "+t._s(e.text||"Mpthasdng")+"\n          ")])})),0):t._e(),t._v(" "),s("footer",{staticClass:"questionFooter"},[s("nav",{staticClass:"pagination",attrs:{role:"navigation","aria-label":"pagination"}},[s("a",{staticClass:"button",attrs:{disabled:t.questionIndex<1},on:{click:function(e){return t.prev()}}},[t._v("\n                    Back\n                  ")]),t._v(" "),s("a",{staticClass:"button",class:null==t.userResponses[t.questionIndex]?"":"is-active",attrs:{disabled:t.questionIndex>=t.quiz.questions.length},on:{click:function(e){return t.next()}}},[t._v("\n              "+t._s(null==t.userResponses[t.questionIndex]?"Skip":"Next")+"\n            ")])])])]):t._e(),t._v(" "),t.questionIndex>=t.quiz.questions.length?s("div",{key:t.questionIndex,staticClass:"quizCompleted has-text-centered"},[s("span",{staticClass:"icon"},[s("i",{staticClass:"fa",class:t.score()>3?"fa-check-circle-o is-active":"fa-times-circle"})]),t._v(" "),s("h2",{staticClass:"title"},[t._v("\n      You did "+t._s(t.score()/t.quiz.questions.length>.7?"an amazing":t.score()/t.quiz.questions.length<.4?"a poor":"a good")+" job!\n    ")]),t._v(" "),s("p",{staticClass:"subtitle"},[t._v("\n      Total score: "+t._s(t.score())+" / "+t._s(t.quiz.questions.length)+"\n    ")]),t._v(" "),s("br"),t._v(" "),s("a",{staticClass:"button",on:{click:function(e){return t.restart()}}},[t._v("restart "),s("i",{staticClass:"fa fa-refresh"})])]):t._e()])],1)}),[],!1,null,"2871fdf4",null);e.default=a.exports}}]);