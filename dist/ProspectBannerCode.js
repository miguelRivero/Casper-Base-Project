!function(n){var e={};function t(c){if(e[c])return e[c].exports;var i=e[c]={i:c,l:!1,exports:{}};return n[c].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,c){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:c})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(c,i,function(e){return n[e]}.bind(null,i));return c},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="/dist",t(t.s=4)}({4:function(n,e,t){n.exports=t(5)},5:function(n,e){new casperEventHub.Experience("Prospects Homepage Banner").visitorIs({status:"anonymous"}).executeOnMismatch((function(n){})).executeOnMatch((function(n){var e=new MutationObserver((function(n){document.contains(document.querySelector(".PromotionBanner"))&&(document.querySelectorAll(".PromotionBanner").forEach((function(n){n.classList.contains("ProspectsBanner")||n.classList.add("VisuallyHidden")})),e.disconnect())}));e.observe(document,{attributes:!1,childList:!0,characterData:!1,subtree:!0});var t=config.defaults.addressCountry,c=function(){window.config;var n=window.config.padl.namespace;window[n].dataLayer;return window[n].dataLayer.page.page.pageInfo.language}(),i=("number"==typeof window.innerWidth?window.innerWidth:document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)?document.documentElement.clientWidth:document.body&&(document.body.clientWidth||document.body.clientHeight)&&document.body.clientWidth,window.ProspectsHomeBannerCopy[t]),a=document.getElementById("main"),s=document.createElement("div"),o="/shared_res/mos/free_html/b2b/prospects_journey/Sticky_Banner/img/";s.classList.add("prospects-homepage-banner"),a.prepend(s),s.innerHTML='\n      <div class="stickybanner__container" style="bottom: 0px">\n        <div class="stickybanner__ribbon">\n          <div class="stickybanner__plus overflow">\n            <i class="gg-math-plus"></i>\n          </div>\n          <div class="stickybanner__ribbon_content">\n            <div class="stickybanner__ribbon_content_left" style="">\n              \x3c!-- <img src="'.concat(o,'left-image_L.png" /> --\x3e\n              <picture class="stickybanner__ribbon_capsules">\n                <source\n                  srcset="').concat(o,"left-image_XL.png 2x, ").concat(o,'left-image_L.png"\n                  media="(min-width: 769px)"/>\n                <img\n                  srcset="').concat(o,'left-image_L.png 2x"\n                  src="').concat(o,'left-image_S.png"\n                  alt="Nespresso Coffee Capsules"/>\n              </picture>\n            </div>\n            <div class="stickybanner__ribbon_content_text">\n              <div class="stickybanner__title">').concat(i.heading[c],'</div>\n              <div class="stickybanner__ribbon_tagline" style="">\n                ').concat(i.subheading[c],'\n                <i class="gg-chevron-right"></i>\n              </div>\n            </div>\n            <div class="stickybanner__ribbon_content_right" style="">\n              \x3c!-- <img src="').concat(o,'right-image_L.png" /> --\x3e\n              <picture class="stickybanner__ribbon_capsules">\n                <source\n                  srcset="').concat(o,"right-image_XL.png 2x, ").concat(o,'right-image_L.png"\n                  media="(min-width: 769px)"/>\n                <img\n                  srcset="').concat(o,'right-image_L.png 2x"\n                  src="').concat(o,'right-image_S.png"\n                  alt="Nespresso Coffee Capsules"/>\n              </picture>\n            </div>\n          </div>\n        </div>\n        <div class="stickybanner__content" id="expandable" style="display: none">\n          <div class="stickybanner__ribbon_description">\n            ').concat(i.text[c],'\n          </div>\n          <div class="stickybanner__content_rules">\n            <div class="stickybanner__content_wrapper">\n              \x3c!-- <img src="').concat(o,'zenius_machine_L.png" /> --\x3e\n              <picture class="stickybanner__ribbon_capsules">\n                <source\n                  srcset="').concat(o,"zenius_machine_XL.png 2x, ").concat(o,'zenius_machine_L.png"\n                  media="(min-width: 769px)"/>\n                <img\n                  srcset="').concat(o,'zenius_machine_L.png 2x"\n                  src="').concat(o,'zenius_machine_S.png"\n                  alt="Nespresso Coffee Capsules"/>\n              </picture>\n              <div class="stickybanner__content_title">\n                <p class="stickybanner__content_question">\n                  ').concat(i.question1[c],'\n                </p>\n                <p class="stickybanner__content_answer">\n                  ').concat(i.answer1[c],'\n                </p>\n                <a href="/pro/au/en/order/machines/pro">\n                  <div class="stickybanner__content_button">\n                    ').concat(i.cta1[c],'\n                  </div>\n                </a>\n              </div>\n            </div>\n            <div class="stickybanner__content_wrapper">\n              \x3c!-- <img src="').concat(o,'aguila_L.png" /> --\x3e\n              <picture class="stickybanner__ribbon_capsules">\n                <source\n                  srcset="').concat(o,"aguila_XL.png 2x, ").concat(o,'aguila_L.png"\n                  media="(min-width: 769px)"/>\n                <img\n                  srcset="').concat(o,'aguila_L.png 2x"\n                  src="').concat(o,'aguila_S.png"\n                  alt="Nespresso Coffee Capsules"/>\n              </picture>\n              <div class="stickybanner__content_title">\n                <p class="stickybanner__content_question">\n                  ').concat(i.question2[c],'\n                </p>\n                <p class="stickybanner__content_answer">\n                  ').concat(i.answer2[c],'\n                </p>\n                <a href="/pro/au/en/professional-contactus">\n                  <div class="stickybanner__content_button_contact">\n                    ').concat(i.cta2[c],'\n                    <i class="gg-math-plus"></i>\n                  </div>\n                </a>\n                <a href="/pro/au/en/order/machines/pro">\n                  <div class="stickybanner__ribbon_tagline_see_all">\n                    ').concat(i.cta3[c],'\n                    <i class="gg-chevron-right"></i>\n                  </div>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>  \n      ');var r=document.querySelector(".stickybanner__ribbon");r.onclick=function(){$(r).parent().toggleClass("opened").hasClass("opened")?($(".stickybanner__ribbon_content_left").fadeOut(),$(".stickybanner__ribbon_content_right").fadeOut(),$(".stickybanner__ribbon_tagline").fadeOut("fast"),setTimeout((function(){$(".stickybanner__plus").removeClass("overflow"),$(r).parent().addClass("scrollable")}),50)):($(".stickybanner__ribbon_content_left").delay(400).fadeIn(),$(".stickybanner__ribbon_content_right").delay(400).fadeIn(),$(".stickybanner__ribbon_tagline").delay(200).fadeIn(),setTimeout((function(){$(".stickybanner__plus").addClass("overflow"),$(r).parent().removeClass("scrollable")}),50)),$(r).siblings().slideToggle("slow")},n.unsubscribe()})).evaluate()}});
//# sourceMappingURL=ProspectBannerCode.js.map