import{c as e,u as t}from"./c.743a15a1.js";import{u as n,e3 as r}from"./main-150a7578.js";import{a,e as u,f as i}from"./c.f37dda53.js";import"./c.d128d0ff.js";import"./c.c3e3842d.js";import"./c.ce7c7300.js";import"./c.58ca2f44.js";import"./c.8e28b461.js";import"./c.4ce71a53.js";import"./c.cd17e526.js";import"./c.2222fc71.js";import"./c.a3496f8c.js";import"./c.bc4530d3.js";import"./c.be11274c.js";import"./c.8fa45673.js";import"./c.f02a8d43.js";import"./c.4ce2ce58.js";function o(e){return Intl.getCanonicalLocales(e)}function l(e){if("symbol"==typeof e)throw TypeError("Cannot convert a Symbol value to a string");return String(e)}function s(e){if(void 0===e)return NaN;if(null===e)return 0;if("boolean"==typeof e)return e?1:0;if("number"==typeof e)return e;if("symbol"==typeof e||"bigint"==typeof e)throw new TypeError("Cannot convert symbol/bigint to number");return Number(e)}function c(e){if(null==e)throw new TypeError("undefined/null cannot be converted to object");return Object(e)}function f(e,t){return Object.is?Object.is(e,t):e===t?0!==e||1/e==1/t:e!=e&&t!=t}function m(e){return new Array(e)}function p(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function d(e,t){return e-Math.floor(e/t)*t}function g(e){return Math.floor(e/864e5)}function D(e){return Date.UTC(e,0)/864e5}function y(e){return new Date(e).getUTCFullYear()}function v(e){return e%4!=0?365:e%100!=0?366:e%400!=0?365:366}function h(e){return g(e)-D(y(e))}function b(e){return 365===v(y(e))?0:1}function F(e){var t=h(e),n=b(e);if(t>=0&&t<31)return 0;if(t<59+n)return 1;if(t<90+n)return 2;if(t<120+n)return 3;if(t<151+n)return 4;if(t<181+n)return 5;if(t<212+n)return 6;if(t<243+n)return 7;if(t<273+n)return 8;if(t<304+n)return 9;if(t<334+n)return 10;if(t<365+n)return 11;throw new Error("Invalid time")}function E(e){return void 0===e?Object.create(null):c(e)}function C(e,t,n,r){if(void 0!==e){if(e=Number(e),isNaN(e)||e<t||e>n)throw new RangeError("".concat(e," is outside of range [").concat(t,", ").concat(n,"]"));return Math.floor(e)}return r}function S(e,t,n,r,a){return C(e[t],n,r,a)}function w(e,t,n,r,a){if("object"!=typeof e)throw new TypeError("Options must be an object");var u=e[t];if(void 0!==u){if("boolean"!==n&&"string"!==n)throw new TypeError("invalid type");if("boolean"===n&&(u=Boolean(u)),"string"===n&&(u=l(u)),void 0!==r&&!r.filter((function(e){return e==u})).length)throw new RangeError("".concat(u," is not within ").concat(r.join(", ")));return u}return a}var T=["angle-degree","area-acre","area-hectare","concentr-percent","digital-bit","digital-byte","digital-gigabit","digital-gigabyte","digital-kilobit","digital-kilobyte","digital-megabit","digital-megabyte","digital-petabyte","digital-terabit","digital-terabyte","duration-day","duration-hour","duration-millisecond","duration-minute","duration-month","duration-second","duration-week","duration-year","length-centimeter","length-foot","length-inch","length-kilometer","length-meter","length-mile-scandinavian","length-mile","length-millimeter","length-yard","mass-gram","mass-kilogram","mass-ounce","mass-pound","mass-stone","temperature-celsius","temperature-fahrenheit","volume-fluid-ounce","volume-gallon","volume-liter","volume-milliliter"];function A(e){return e.slice(e.indexOf("-")+1)}var M=T.map(A);function L(e){return M.indexOf(e)>-1}var I=/[^A-Z]/;function B(e){return 3===(e=e.replace(/([a-z])/g,(function(e,t){return t.toUpperCase()}))).length&&!I.test(e)}function N(e){if(L(e=e.replace(/([A-Z])/g,(function(e,t){return t.toLowerCase()}))))return!0;var t=e.split("-per-");if(2!==t.length)return!1;var n=t[0],r=t[1];return!(!L(n)||!L(r))}function O(e){return Math.floor(Math.log(e)*Math.LOG10E)}function k(e,t){if("function"==typeof e.repeat)return e.repeat(t);for(var n=new Array(t),r=0;r<n.length;r++)n[r]=e;return n.join("")}function j(e,t,n,r){e.get(t)||e.set(t,Object.create(null)),e.get(t)[n]=r}function P(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var a=e.get(t);if(!a)throw new TypeError("".concat(t," InternalSlot has not been initialized"));return n.reduce((function(e,t){return e[t]=a[t],e}),Object.create(null))}function R(e,t,n){if(void 0===n&&(n=Error),!e)throw new n(t)}function G(e,t,n){var r=(0,n.getInternalSlots)(e),a=r.notation,u=r.dataLocaleData,i=r.numberingSystem;switch(a){case"standard":return 0;case"scientific":return t;case"engineering":return 3*Math.floor(t/3);default:var o=r.compactDisplay,l=r.style,s=r.currencyDisplay,c=void 0;if("currency"===l&&"name"!==s){c=(u.numbers.currency[i]||u.numbers.currency[u.numbers.nu[0]]).short}else{var f=u.numbers.decimal[i]||u.numbers.decimal[u.numbers.nu[0]];c="long"===o?f.long:f.short}if(!c)return 0;var m=String(Math.pow(10,t)),p=Object.keys(c);if(m<p[0])return 0;if(m>p[p.length-1])return p[p.length-1].length-1;var d=p.indexOf(m);if(-1===d)return 0;var g=p[d];return"0"===c[g].other?0:g.length-c[g].other.match(/0+/)[0].length}}function x(e,t,n){var r,a,u,i,o=n;if(0===e)r=k("0",o),a=0,u=0;else{var l=e.toString(),s=l.indexOf("e"),c=l.split("e"),f=c[0],m=c[1],p=f.replace(".","");if(s>=0&&p.length<=o)a=+m,r=p+k("0",o-p.length),u=e;else{var d=(a=O(e))-o+1,g=Math.round(y(e,d));y(g,o-1)>=10&&(a+=1,g=Math.floor(g/10)),r=g.toString(),u=y(g,o-1-a)}}if(a>=o-1?(r+=k("0",a-o+1),i=a+1):a>=0?(r="".concat(r.slice(0,a+1),".").concat(r.slice(a+1)),i=a+1):(r="0.".concat(k("0",-a-1)).concat(r),i=1),r.indexOf(".")>=0&&n>t){for(var D=n-t;D>0&&"0"===r[r.length-1];)r=r.slice(0,-1),D--;"."===r[r.length-1]&&(r=r.slice(0,-1))}return{formattedString:r,roundedNumber:u,integerDigitsCount:i};function y(e,t){return t<0?e*Math.pow(10,-t):e/Math.pow(10,t)}}function _(e,t,n){var r,a,u=n,i=Math.round(e*Math.pow(10,u)),o=i/Math.pow(10,u);if(i<1e21)r=i.toString();else{var l=(r=i.toString()).split("e"),s=l[0],c=l[1];r=s.replace(".",""),r+=k("0",Math.max(+c-r.length+1,0))}if(0!==u){var f=r.length;if(f<=u)r=k("0",u+1-f)+r,f=u+1;var m=r.slice(0,f-u),p=r.slice(f-u);r="".concat(m,".").concat(p),a=m.length}else a=r.length;for(var d=n-t;d>0&&"0"===r[r.length-1];)r=r.slice(0,-1),d--;return"."===r[r.length-1]&&(r=r.slice(0,-1)),{formattedString:r,roundedNumber:o,integerDigitsCount:a}}function z(e,t){var n,r=t<0||f(t,-0);switch(r&&(t=-t),e.roundingType){case"significantDigits":n=x(t,e.minimumSignificantDigits,e.maximumSignificantDigits);break;case"fractionDigits":n=_(t,e.minimumFractionDigits,e.maximumFractionDigits);break;default:(n=x(t,1,2)).integerDigitsCount>1&&(n=_(t,0,0))}t=n.roundedNumber;var a=n.formattedString,u=n.integerDigitsCount,i=e.minimumIntegerDigits;u<i&&(a=k("0",i-u)+a);return r&&(t=-t),{roundedNumber:t,formattedString:a}}function U(e,t,n){var r=n.getInternalSlots;if(0===t)return[0,0];t<0&&(t=-t);var a=O(t),u=G(e,a,{getInternalSlots:r});t=u<0?t*Math.pow(10,-u):t/Math.pow(10,u);var i=z(r(e),t);return 0===i.roundedNumber||O(i.roundedNumber)===a-u?[u,a]:[G(e,a+1,{getInternalSlots:r}),a+1]}function H(e,t){var n=t.currencyDigitsData;return p(n,e)?n[e]:2}var K,Y={adlm:["𞥐","𞥑","𞥒","𞥓","𞥔","𞥕","𞥖","𞥗","𞥘","𞥙"],ahom:["𑜰","𑜱","𑜲","𑜳","𑜴","𑜵","𑜶","𑜷","𑜸","𑜹"],arab:["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"],arabext:["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"],bali:["᭐","᭑","᭒","᭓","᭔","᭕","᭖","᭗","᭘","᭙"],beng:["০","১","২","৩","৪","৫","৬","৭","৮","৯"],bhks:["𑱐","𑱑","𑱒","𑱓","𑱔","𑱕","𑱖","𑱗","𑱘","𑱙"],brah:["𑁦","𑁧","𑁨","𑁩","𑁪","𑁫","𑁬","𑁭","𑁮","𑁯"],cakm:["𑄶","𑄷","𑄸","𑄹","𑄺","𑄻","𑄼","𑄽","𑄾","𑄿"],cham:["꩐","꩑","꩒","꩓","꩔","꩕","꩖","꩗","꩘","꩙"],deva:["०","१","२","३","४","५","६","७","८","९"],diak:["𑥐","𑥑","𑥒","𑥓","𑥔","𑥕","𑥖","𑥗","𑥘","𑥙"],fullwide:["０","１","２","３","４","５","６","７","８","９"],gong:["𑶠","𑶡","𑶢","𑶣","𑶤","𑶥","𑶦","𑶧","𑶨","𑶩"],gonm:["𑵐","𑵑","𑵒","𑵓","𑵔","𑵕","𑵖","𑵗","𑵘","𑵙"],gujr:["૦","૧","૨","૩","૪","૫","૬","૭","૮","૯"],guru:["੦","੧","੨","੩","੪","੫","੬","੭","੮","੯"],hanidec:["〇","一","二","三","四","五","六","七","八","九"],hmng:["𖭐","𖭑","𖭒","𖭓","𖭔","𖭕","𖭖","𖭗","𖭘","𖭙"],hmnp:["𞅀","𞅁","𞅂","𞅃","𞅄","𞅅","𞅆","𞅇","𞅈","𞅉"],java:["꧐","꧑","꧒","꧓","꧔","꧕","꧖","꧗","꧘","꧙"],kali:["꤀","꤁","꤂","꤃","꤄","꤅","꤆","꤇","꤈","꤉"],khmr:["០","១","២","៣","៤","៥","៦","៧","៨","៩"],knda:["೦","೧","೨","೩","೪","೫","೬","೭","೮","೯"],lana:["᪀","᪁","᪂","᪃","᪄","᪅","᪆","᪇","᪈","᪉"],lanatham:["᪐","᪑","᪒","᪓","᪔","᪕","᪖","᪗","᪘","᪙"],laoo:["໐","໑","໒","໓","໔","໕","໖","໗","໘","໙"],lepc:["᪐","᪑","᪒","᪓","᪔","᪕","᪖","᪗","᪘","᪙"],limb:["᥆","᥇","᥈","᥉","᥊","᥋","᥌","᥍","᥎","᥏"],mathbold:["𝟎","𝟏","𝟐","𝟑","𝟒","𝟓","𝟔","𝟕","𝟖","𝟗"],mathdbl:["𝟘","𝟙","𝟚","𝟛","𝟜","𝟝","𝟞","𝟟","𝟠","𝟡"],mathmono:["𝟶","𝟷","𝟸","𝟹","𝟺","𝟻","𝟼","𝟽","𝟾","𝟿"],mathsanb:["𝟬","𝟭","𝟮","𝟯","𝟰","𝟱","𝟲","𝟳","𝟴","𝟵"],mathsans:["𝟢","𝟣","𝟤","𝟥","𝟦","𝟧","𝟨","𝟩","𝟪","𝟫"],mlym:["൦","൧","൨","൩","൪","൫","൬","൭","൮","൯"],modi:["𑙐","𑙑","𑙒","𑙓","𑙔","𑙕","𑙖","𑙗","𑙘","𑙙"],mong:["᠐","᠑","᠒","᠓","᠔","᠕","᠖","᠗","᠘","᠙"],mroo:["𖩠","𖩡","𖩢","𖩣","𖩤","𖩥","𖩦","𖩧","𖩨","𖩩"],mtei:["꯰","꯱","꯲","꯳","꯴","꯵","꯶","꯷","꯸","꯹"],mymr:["၀","၁","၂","၃","၄","၅","၆","၇","၈","၉"],mymrshan:["႐","႑","႒","႓","႔","႕","႖","႗","႘","႙"],mymrtlng:["꧰","꧱","꧲","꧳","꧴","꧵","꧶","꧷","꧸","꧹"],newa:["𑑐","𑑑","𑑒","𑑓","𑑔","𑑕","𑑖","𑑗","𑑘","𑑙"],nkoo:["߀","߁","߂","߃","߄","߅","߆","߇","߈","߉"],olck:["᱐","᱑","᱒","᱓","᱔","᱕","᱖","᱗","᱘","᱙"],orya:["୦","୧","୨","୩","୪","୫","୬","୭","୮","୯"],osma:["𐒠","𐒡","𐒢","𐒣","𐒤","𐒥","𐒦","𐒧","𐒨","𐒩"],rohg:["𐴰","𐴱","𐴲","𐴳","𐴴","𐴵","𐴶","𐴷","𐴸","𐴹"],saur:["꣐","꣑","꣒","꣓","꣔","꣕","꣖","꣗","꣘","꣙"],segment:["🯰","🯱","🯲","🯳","🯴","🯵","🯶","🯷","🯸","🯹"],shrd:["𑇐","𑇑","𑇒","𑇓","𑇔","𑇕","𑇖","𑇗","𑇘","𑇙"],sind:["𑋰","𑋱","𑋲","𑋳","𑋴","𑋵","𑋶","𑋷","𑋸","𑋹"],sinh:["෦","෧","෨","෩","෪","෫","෬","෭","෮","෯"],sora:["𑃰","𑃱","𑃲","𑃳","𑃴","𑃵","𑃶","𑃷","𑃸","𑃹"],sund:["᮰","᮱","᮲","᮳","᮴","᮵","᮶","᮷","᮸","᮹"],takr:["𑛀","𑛁","𑛂","𑛃","𑛄","𑛅","𑛆","𑛇","𑛈","𑛉"],talu:["᧐","᧑","᧒","᧓","᧔","᧕","᧖","᧗","᧘","᧙"],tamldec:["௦","௧","௨","௩","௪","௫","௬","௭","௮","௯"],telu:["౦","౧","౨","౩","౪","౫","౬","౭","౮","౯"],thai:["๐","๑","๒","๓","๔","๕","๖","๗","๘","๙"],tibt:["༠","༡","༢","༣","༤","༥","༦","༧","༨","༩"],tirh:["𑓐","𑓑","𑓒","𑓓","𑓔","𑓕","𑓖","𑓗","𑓘","𑓙"],vaii:["ᘠ","ᘡ","ᘢ","ᘣ","ᘤ","ᘥ","ᘦ","ᘧ","ᘨ","ᘩ"],wara:["𑣠","𑣡","𑣢","𑣣","𑣤","𑣥","𑣦","𑣧","𑣨","𑣩"],wcho:["𞋰","𞋱","𞋲","𞋳","𞋴","𞋵","𞋶","𞋷","𞋸","𞋹"]},W=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20BF\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC1\uFDFC\uFDFD\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEE0-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDD78\uDD7A-\uDDCB\uDDCD-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6\uDF00-\uDF92\uDF94-\uDFCA]/,Z=new RegExp("^".concat(W.source)),V=new RegExp("".concat(W.source,"$")),q=/[#0](?:[\.,][#0]+)*/g;function J(e,t,n,r){var a,u,i=e.sign,o=e.exponent,l=e.magnitude,s=r.notation,c=r.style,f=r.numberingSystem,m=t.numbers.nu[0],p=null;if("compact"===s&&l&&(p=function(e,t,n,r,a,u,i){var o,l,s=e.roundedNumber,c=e.sign,f=e.magnitude,m=String(Math.pow(10,f)),p=n.numbers.nu[0];if("currency"===r&&"name"!==u){var d=null===(o=((g=n.numbers.currency)[i]||g[p]).short)||void 0===o?void 0:o[m];if(!d)return null;l=$(t,s,d)}else{var g,D=((g=n.numbers.decimal)[i]||g[p])[a][m];if(!D)return null;l=$(t,s,D)}if("0"===l)return null;return l=X(l,c).replace(/([^\s;\-\+\d¤]+)/g,"{c:$1}").replace(/0+/,"0")}(e,n,t,c,r.compactDisplay,r.currencyDisplay,f)),"currency"===c&&"name"!==r.currencyDisplay){var d=t.currencies[r.currency];if(d)switch(r.currencyDisplay){case"code":a=r.currency;break;case"symbol":a=d.symbol;break;default:a=d.narrow}else a=r.currency}if(p)u=p;else if("decimal"===c||"unit"===c||"currency"===c&&"name"===r.currencyDisplay)u=X((t.numbers.decimal[f]||t.numbers.decimal[m]).standard,i);else if("currency"===c){u=X((D=t.numbers.currency[f]||t.numbers.currency[m])[r.currencySign],i)}else{u=X(t.numbers.percent[f]||t.numbers.percent[m],i)}var g=q.exec(u)[0];if(u=u.replace(q,"{0}").replace(/'(.)'/g,"$1"),"currency"===c&&"name"!==r.currencyDisplay){var D,y=(D=t.numbers.currency[f]||t.numbers.currency[m]).currencySpacing.afterInsertBetween;y&&!V.test(a)&&(u=u.replace("¤{0}","¤".concat(y,"{0}")));var v=D.currencySpacing.beforeInsertBetween;v&&!Z.test(a)&&(u=u.replace("{0}¤","{0}".concat(v,"¤")))}for(var h=u.split(/({c:[^}]+}|\{0\}|[¤%\-\+])/g),b=[],F=t.numbers.symbols[f]||t.numbers.symbols[m],E=0,C=h;E<C.length;E++){if(U=C[E])switch(U){case"{0}":b.push.apply(b,Q(F,e,s,o,f,!p&&r.useGrouping,g));break;case"-":b.push({type:"minusSign",value:F.minusSign});break;case"+":b.push({type:"plusSign",value:F.plusSign});break;case"%":b.push({type:"percentSign",value:F.percentSign});break;case"¤":b.push({type:"currency",value:a});break;default:/^\{c:/.test(U)?b.push({type:"compact",value:U.substring(3,U.length-1)}):b.push({type:"literal",value:U})}}switch(c){case"currency":if("name"===r.currencyDisplay){var S=(t.numbers.currency[f]||t.numbers.currency[m]).unitPattern,w=void 0,T=t.currencies[r.currency];w=T?$(n,e.roundedNumber*Math.pow(10,o),T.displayName):r.currency;for(var A=[],M=0,L=S.split(/(\{[01]\})/g);M<L.length;M++){switch(U=L[M]){case"{0}":A.push.apply(A,b);break;case"{1}":A.push({type:"currency",value:w});break;default:U&&A.push({type:"literal",value:U})}}return A}return b;case"unit":var I=r.unit,B=r.unitDisplay,N=t.units.simple[I];S=void 0;if(N)S=$(n,e.roundedNumber*Math.pow(10,o),t.units.simple[I][B]);else{var O=I.split("-per-"),k=O[0],j=O[1];N=t.units.simple[k];var P=$(n,e.roundedNumber*Math.pow(10,o),t.units.simple[k][B]),R=t.units.simple[j].perUnit[B];if(R)S=R.replace("{0}",P);else{var G=t.units.compound.per[B],x=$(n,1,t.units.simple[j][B]);S=S=G.replace("{0}",P).replace("{1}",x.replace("{0}",""))}}A=[];for(var _=0,z=S.split(/(\s*\{0\}\s*)/);_<z.length;_++){var U=z[_],H=/^(\s*)\{0\}(\s*)$/.exec(U);H?(H[1]&&A.push({type:"literal",value:H[1]}),A.push.apply(A,b),H[2]&&A.push({type:"literal",value:H[2]})):U&&A.push({type:"unit",value:U})}return A;default:return b}}function Q(e,t,n,r,a,u,i){var o=[],l=t.formattedString,s=t.roundedNumber;if(isNaN(s))return[{type:"nan",value:l}];if(!isFinite(s))return[{type:"infinity",value:l}];var c=Y[a];c&&(l=l.replace(/\d/g,(function(e){return c[+e]||e})));var f,m,p=l.indexOf(".");if(p>0?(f=l.slice(0,p),m=l.slice(p+1)):f=l,u&&("compact"!==n||s>=1e4)){var d=e.group,g=[],D=i.split(".")[0].split(","),y=3,v=3;D.length>1&&(y=D[D.length-1].length),D.length>2&&(v=D[D.length-2].length);var h=f.length-y;if(h>0){for(g.push(f.slice(h,h+y)),h-=v;h>0;h-=v)g.push(f.slice(h,h+v));g.push(f.slice(0,h+v))}else g.push(f);for(;g.length>0;){var b=g.pop();o.push({type:"integer",value:b}),g.length>0&&o.push({type:"group",value:d})}}else o.push({type:"integer",value:f});if(void 0!==m&&o.push({type:"decimal",value:e.decimal},{type:"fraction",value:m}),("scientific"===n||"engineering"===n)&&isFinite(s)){o.push({type:"exponentSeparator",value:e.exponential}),r<0&&(o.push({type:"exponentMinusSign",value:e.minusSign}),r=-r);var F=_(r,0,0);o.push({type:"exponentInteger",value:F.formattedString})}return o}function X(e,t){e.indexOf(";")<0&&(e="".concat(e,";-").concat(e));var n=e.split(";"),r=n[0],a=n[1];switch(t){case 0:return r;case-1:return a;default:return a.indexOf("-")>=0?a.replace(/-/g,"+"):"+".concat(r)}}function $(e,t,n){return n[e.select(t)]||n.other}function ee(e,t,n){var r,a,u,i=n.getInternalSlots,o=i(e),l=o.pl,s=o.dataLocaleData,c=o.numberingSystem,m=s.numbers.symbols[c]||s.numbers.symbols[s.numbers.nu[0]],p=0,d=0;if(isNaN(t))a=m.nan;else if(isFinite(t)){"percent"===o.style&&(t*=100),d=(r=U(e,t,{getInternalSlots:i}))[0],p=r[1];var g=z(o,t=d<0?t*Math.pow(10,-d):t/Math.pow(10,d));a=g.formattedString,t=g.roundedNumber}else a=m.infinity;switch(o.signDisplay){case"never":u=0;break;case"auto":u=f(t,0)||t>0||isNaN(t)?0:-1;break;case"always":u=f(t,0)||t>0||isNaN(t)?1:-1;break;default:u=0===t||isNaN(t)?0:t>0?1:-1}return J({roundedNumber:t,formattedString:a,exponent:d,magnitude:p,sign:u},o.dataLocaleData,l,o)}function te(e,t,n){void 0===t&&(t=Object.create(null));var r=(0,n.getInternalSlots)(e),a=w(t,"style","string",["decimal","percent","currency","unit"],"decimal");r.style=a;var u=w(t,"currency","string",void 0,void 0);if(void 0!==u&&!B(u))throw RangeError("Malformed currency code");if("currency"===a&&void 0===u)throw TypeError("currency cannot be undefined");var i=w(t,"currencyDisplay","string",["code","symbol","narrowSymbol","name"],"symbol"),o=w(t,"currencySign","string",["standard","accounting"],"standard"),l=w(t,"unit","string",void 0,void 0);if(void 0!==l&&!N(l))throw RangeError("Invalid unit argument for Intl.NumberFormat()");if("unit"===a&&void 0===l)throw TypeError("unit cannot be undefined");var s=w(t,"unitDisplay","string",["short","narrow","long"],"short");"currency"===a&&(r.currency=u.toUpperCase(),r.currencyDisplay=i,r.currencySign=o),"unit"===a&&(r.unit=l,r.unitDisplay=s)}function ne(e,t,n,r,a){var u=S(t,"minimumIntegerDigits",1,21,1),i=t.minimumFractionDigits,o=t.maximumFractionDigits,l=t.minimumSignificantDigits,s=t.maximumSignificantDigits;if(e.minimumIntegerDigits=u,void 0!==l||void 0!==s)e.roundingType="significantDigits",l=C(l,1,21,1),s=C(s,l,21,21),e.minimumSignificantDigits=l,e.maximumSignificantDigits=s;else if(void 0!==i||void 0!==o){e.roundingType="fractionDigits",i=C(i,0,20,n),o=C(o,i,20,Math.max(i,r)),e.minimumFractionDigits=i,e.maximumFractionDigits=o}else"compact"===a?e.roundingType="compactRounding":(e.roundingType="fractionDigits",e.minimumFractionDigits=n,e.maximumFractionDigits=r)}!function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="MISSING_LOCALE_DATA",t}n(t,e)}(Error),function(e){e.startRange="startRange",e.shared="shared",e.endRange="endRange"}(K||(K={}));var re=Object.freeze({__proto__:null,_formatToParts:J,getInternalSlot:function(e,t,n){return P(e,t,n)[n]},getMultiInternalSlots:P,isLiteralPart:function(e){return"literal"===e.type},setInternalSlot:j,setMultiInternalSlots:function(e,t,n){for(var r=0,a=Object.keys(n);r<a.length;r++){var u=a[r];j(e,t,u,n[u])}},getMagnitude:O,defineProperty:function(e,t,n){var r=n.value;Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:!0,value:r})},isMissingLocaleDataError:function(e){return"MISSING_LOCALE_DATA"===e.type},invariant:R,CanonicalizeLocaleList:o,CanonicalizeTimeZoneName:function(e,t){var n=t.tzData,r=t.uppercaseLinks,a=e.toUpperCase(),u=Object.keys(n).reduce((function(e,t){return e[t.toUpperCase()]=t,e}),{}),i=r[a]||u[a];return"Etc/UTC"===i||"Etc/GMT"===i?"UTC":i},CoerceOptionsToObject:E,GetNumberOption:S,GetOption:w,GetOptionsObject:function(e){if(void 0===e)return Object.create(null);if("object"==typeof e)return e;throw new TypeError("Options must be an object")},SANCTIONED_UNITS:T,removeUnitNamespace:A,SIMPLE_UNITS:M,IsSanctionedSimpleUnitIdentifier:L,IsValidTimeZoneName:function(e,t){var n=t.tzData,r=t.uppercaseLinks,a=e.toUpperCase(),u=new Set,i=new Set;return Object.keys(n).map((function(e){return e.toUpperCase()})).forEach((function(e){return u.add(e)})),Object.keys(r).forEach((function(e){i.add(e.toUpperCase()),u.add(r[e].toUpperCase())})),u.has(a)||i.has(a)},IsWellFormedCurrencyCode:B,IsWellFormedUnitIdentifier:N,ComputeExponent:U,ComputeExponentForMagnitude:G,CurrencyDigits:H,FormatNumericToParts:function(e,t,n){for(var r=ee(e,t,n),a=m(0),u=0,i=r;u<i.length;u++){var o=i[u];a.push({type:o.type,value:o.value})}return a},FormatNumericToString:z,InitializeNumberFormat:function(e,t,n,r){var u=r.getInternalSlots,i=r.localeData,l=r.availableLocales,s=r.numberingSystemNames,c=r.getDefaultLocale,f=r.currencyDigitsData,m=o(t),p=E(n),d=Object.create(null),g=w(p,"localeMatcher","string",["lookup","best fit"],"best fit");d.localeMatcher=g;var D=w(p,"numberingSystem","string",void 0,void 0);if(void 0!==D&&s.indexOf(D)<0)throw RangeError("Invalid numberingSystems: ".concat(D));d.nu=D;var y=a(l,m,d,["nu"],i,c),v=i[y.dataLocale];R(!!v,"Missing locale data for ".concat(y.dataLocale));var h=u(e);h.locale=y.locale,h.dataLocale=y.dataLocale,h.numberingSystem=y.nu,h.dataLocaleData=v,te(e,p,{getInternalSlots:u});var b,F,C=h.style;if("currency"===C){var S=H(h.currency,{currencyDigitsData:f});b=S,F=S}else b=0,F="percent"===C?0:3;var T=w(p,"notation","string",["standard","scientific","engineering","compact"],"standard");h.notation=T,ne(h,p,b,F,T);var A=w(p,"compactDisplay","string",["short","long"],"short");"compact"===T&&(h.compactDisplay=A);var M=w(p,"useGrouping","boolean",void 0,!0);h.useGrouping=M;var L=w(p,"signDisplay","string",["auto","never","always","exceptZero"],"auto");return h.signDisplay=L,e},PartitionNumberPattern:ee,SetNumberFormatDigitOptions:ne,SetNumberFormatUnitOptions:te,ToRawFixed:_,ToRawPrecision:x,PartitionPattern:function(e){for(var t=[],n=e.indexOf("{"),r=0,a=0,u=e.length;n<e.length&&n>-1;)R((r=e.indexOf("}",n))>n,"Invalid pattern ".concat(e)),n>a&&t.push({type:"literal",value:e.substring(a,n)}),t.push({type:e.substring(n+1,r),value:void 0}),a=r+1,n=e.indexOf("{",a);return a<u&&t.push({type:"literal",value:e.substring(a,u)}),t},SupportedLocales:function(e,t,n){return void 0!==n&&w(n=c(n),"localeMatcher","string",["lookup","best fit"],"best fit"),u(e,t)},get RangePatternType(){return K},ToString:l,ToNumber:s,TimeClip:function(e){return isFinite(e)?Math.abs(e)>8640000000000001?NaN:function(e){var t=s(e);if(isNaN(t)||f(t,-0))return 0;if(isFinite(t))return t;var n=Math.floor(Math.abs(t));return t<0&&(n=-n),f(n,-0)?0:n}(e):NaN},ToObject:c,SameValue:f,ArrayCreate:m,HasOwnProperty:p,Type:function(e){return null===e?"Null":void 0===e?"Undefined":"function"==typeof e||"object"==typeof e?"Object":"number"==typeof e?"Number":"boolean"==typeof e?"Boolean":"string"==typeof e?"String":"symbol"==typeof e?"Symbol":"bigint"==typeof e?"BigInt":void 0},Day:g,WeekDay:function(e){return d(g(e)+4,7)},DayFromYear:D,TimeFromYear:function(e){return Date.UTC(e,0)},YearFromTime:y,DaysInYear:v,DayWithinYear:h,InLeapYear:b,MonthFromTime:F,DateFromTime:function(e){var t=h(e),n=F(e),r=b(e);if(0===n)return t+1;if(1===n)return t-30;if(2===n)return t-58-r;if(3===n)return t-89-r;if(4===n)return t-119-r;if(5===n)return t-150-r;if(6===n)return t-180-r;if(7===n)return t-211-r;if(8===n)return t-242-r;if(9===n)return t-272-r;if(10===n)return t-303-r;if(11===n)return t-333-r;throw new Error("Invalid time")},HourFromTime:function(e){return d(Math.floor(e/36e5),24)},MinFromTime:function(e){return d(Math.floor(e/6e4),60)},SecFromTime:function(e){return d(Math.floor(e/1e3),60)},OrdinaryHasInstance:function(e,t,n){if("function"!=typeof e)return!1;if(null==n?void 0:n.boundTargetFunction)return t instanceof(null==n?void 0:n.boundTargetFunction);if("object"!=typeof t)return!1;var r=e.prototype;if("object"!=typeof r)throw new TypeError("OrdinaryHasInstance called on an object with an invalid prototype property.");return Object.prototype.isPrototypeOf.call(r,t)},msFromTime:function(e){return d(e,1e3)}}),ae=e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.InitializeRelativeTimeFormat=void 0;var n=/^[a-z0-9]{3,8}(-[a-z0-9]{3,8})*$/i;t.InitializeRelativeTimeFormat=function(e,t,r,a){var u=a.getInternalSlots,o=a.availableLocales,l=a.relevantExtensionKeys,s=a.localeData,c=a.getDefaultLocale,f=u(e);f.initializedRelativeTimeFormat=!0;var m=(0,re.CanonicalizeLocaleList)(t),p=Object.create(null),d=(0,re.CoerceOptionsToObject)(r),g=(0,re.GetOption)(d,"localeMatcher","string",["best fit","lookup"],"best fit");p.localeMatcher=g;var D=(0,re.GetOption)(d,"numberingSystem","string",void 0,void 0);if(void 0!==D&&!n.test(D))throw new RangeError("Invalid numbering system ".concat(D));p.nu=D;var y=(0,i.ResolveLocale)(o,m,p,l,s,c),v=y.locale,h=y.nu;f.locale=v,f.style=(0,re.GetOption)(d,"style","string",["long","narrow","short"],"long"),f.numeric=(0,re.GetOption)(d,"numeric","string",["always","auto"],"always");var b=s[y.dataLocale];return(0,re.invariant)(!!b,"Missing locale data for ".concat(y.dataLocale)),f.fields=b,f.numberFormat=new Intl.NumberFormat(t),f.pluralRules=new Intl.PluralRules(t),f.numberingSystem=h,e}}));t(ae),ae.InitializeRelativeTimeFormat;var ue=e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SingularRelativeTimeUnit=void 0,t.SingularRelativeTimeUnit=function(e){if((0,re.invariant)("String"===(0,re.Type)(e),"unit must be a string"),"seconds"===e)return"second";if("minutes"===e)return"minute";if("hours"===e)return"hour";if("days"===e)return"day";if("weeks"===e)return"week";if("months"===e)return"month";if("quarters"===e)return"quarter";if("years"===e)return"year";if("second"!==e&&"minute"!==e&&"hour"!==e&&"day"!==e&&"week"!==e&&"month"!==e&&"quarter"!==e&&"year"!==e)throw new RangeError("invalid unit");return e}}));t(ue),ue.SingularRelativeTimeUnit;var ie=e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.MakePartsList=void 0,t.MakePartsList=function(e,t,n){for(var r=[],a=0,u=(0,re.PartitionPattern)(e);a<u.length;a++){var i=u[a];if("literal"===i.type)r.push({type:"literal",value:i.value});else{(0,re.invariant)("0"===i.type,"Malformed pattern ".concat(e));for(var o=0,l=n;o<l.length;o++){var s=l[o];r.push({type:s.type,value:s.value,unit:t})}}}return r}}));t(ie),ie.MakePartsList;var oe=e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.PartitionRelativeTimePattern=void 0,t.PartitionRelativeTimePattern=function(e,t,n,r){var a=r.getInternalSlots;if((0,re.invariant)("Number"===(0,re.Type)(t),"value must be number, instead got ".concat(typeof t),TypeError),(0,re.invariant)("String"===(0,re.Type)(n),"unit must be number, instead got ".concat(typeof t),TypeError),isNaN(t)||!isFinite(t))throw new RangeError("Invalid value ".concat(t));var u=(0,ue.SingularRelativeTimeUnit)(n),i=a(e),o=i.fields,l=i.style,s=i.numeric,c=i.pluralRules,f=i.numberFormat,m=u;"short"===l?m="".concat(u,"-short"):"narrow"===l&&(m="".concat(u,"-narrow")),m in o||(m=u);var p=o[m];if("auto"===s&&(0,re.ToString)(t)in p)return[{type:"literal",value:p[(0,re.ToString)(t)]}];var d="future";((0,re.SameValue)(t,-0)||t<0)&&(d="past");var g=p[d],D="function"==typeof f.formatToParts?f.formatToParts(Math.abs(t)):[{type:"literal",value:f.format(Math.abs(t)),unit:n}],y=g[c.select(t)];return(0,ie.MakePartsList)(y,u,D)}}));t(oe),oe.PartitionRelativeTimePattern;var le=e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=new WeakMap;t.default=function(e){var t=n.get(e);return t||(t=Object.create(null),n.set(e,t)),t}}));t(le);var se=e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=(0,r.__importDefault)(le),a=function(){function e(t,r){if(!(this&&this instanceof e?this.constructor:void 0))throw new TypeError("Intl.RelativeTimeFormat must be called with 'new'");return(0,ae.InitializeRelativeTimeFormat)(this,t,r,{getInternalSlots:n.default,availableLocales:e.availableLocales,relevantExtensionKeys:e.relevantExtensionKeys,localeData:e.localeData,getDefaultLocale:e.getDefaultLocale})}return e.prototype.format=function(e,t){if("object"!=typeof this)throw new TypeError("format was called on a non-object");if(!(0,n.default)(this).initializedRelativeTimeFormat)throw new TypeError("format was called on a invalid context");return(0,oe.PartitionRelativeTimePattern)(this,Number(e),(0,re.ToString)(t),{getInternalSlots:n.default}).map((function(e){return e.value})).join("")},e.prototype.formatToParts=function(e,t){if("object"!=typeof this)throw new TypeError("formatToParts was called on a non-object");if(!(0,n.default)(this).initializedRelativeTimeFormat)throw new TypeError("formatToParts was called on a invalid context");return(0,oe.PartitionRelativeTimePattern)(this,Number(e),(0,re.ToString)(t),{getInternalSlots:n.default})},e.prototype.resolvedOptions=function(){if("object"!=typeof this)throw new TypeError("resolvedOptions was called on a non-object");var e=(0,n.default)(this);if(!e.initializedRelativeTimeFormat)throw new TypeError("resolvedOptions was called on a invalid context");return{locale:e.locale,style:e.style,numeric:e.numeric,numberingSystem:e.numberingSystem}},e.supportedLocalesOf=function(t,n){return(0,re.SupportedLocales)(e.availableLocales,(0,re.CanonicalizeLocaleList)(t),n)},e.__addLocaleData=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var r=0,a=t;r<a.length;r++){var u=a[r],i=u.data,o=u.locale,l=new Intl.Locale(o).minimize().toString();e.localeData[o]=e.localeData[l]=i,e.availableLocales.add(l),e.availableLocales.add(o),e.__defaultLocale||(e.__defaultLocale=l)}},e.getDefaultLocale=function(){return e.__defaultLocale},e.localeData={},e.availableLocales=new Set,e.__defaultLocale="",e.relevantExtensionKeys=["nu"],e.polyfilled=!0,e}();t.default=a;try{"undefined"!=typeof Symbol&&Object.defineProperty(a.prototype,Symbol.toStringTag,{value:"Intl.RelativeTimeFormat",writable:!1,enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype.constructor,"length",{value:0,writable:!1,enumerable:!1,configurable:!0}),Object.defineProperty(a.supportedLocalesOf,"length",{value:1,writable:!1,enumerable:!1,configurable:!0})}catch(e){}}));t(se);var ce=e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.supportedLocales=void 0,t.supportedLocales=["af-NA","af","agq","ak","am","ar-AE","ar-BH","ar-DJ","ar-DZ","ar-EG","ar-EH","ar-ER","ar-IL","ar-IQ","ar-JO","ar-KM","ar-KW","ar-LB","ar-LY","ar-MA","ar-MR","ar-OM","ar-PS","ar-QA","ar-SA","ar-SD","ar-SO","ar-SS","ar-SY","ar-TD","ar-TN","ar-YE","ar","as","asa","ast","az-Cyrl","az-Latn","az","bas","be-tarask","be","bem","bez","bg","bm","bn-IN","bn","bo-IN","bo","br","brx","bs-Cyrl","bs-Latn","bs","ca-AD","ca-ES-valencia","ca-FR","ca-IT","ca","ccp-IN","ccp","ce","ceb","cgg","chr","ckb-IR","ckb","cs","cy","da-GL","da","dav","de-AT","de-BE","de-CH","de-IT","de-LI","de-LU","de","dje","doi","dsb","dua","dyo","dz","ebu","ee-TG","ee","el-CY","el","en-001","en-150","en-AE","en-AG","en-AI","en-AS","en-AT","en-AU","en-BB","en-BE","en-BI","en-BM","en-BS","en-BW","en-BZ","en-CA","en-CC","en-CH","en-CK","en-CM","en-CX","en-CY","en-DE","en-DG","en-DK","en-DM","en-ER","en-FI","en-FJ","en-FK","en-FM","en-GB","en-GD","en-GG","en-GH","en-GI","en-GM","en-GU","en-GY","en-HK","en-IE","en-IL","en-IM","en-IN","en-IO","en-JE","en-JM","en-KE","en-KI","en-KN","en-KY","en-LC","en-LR","en-LS","en-MG","en-MH","en-MO","en-MP","en-MS","en-MT","en-MU","en-MW","en-MY","en-NA","en-NF","en-NG","en-NL","en-NR","en-NU","en-NZ","en-PG","en-PH","en-PK","en-PN","en-PR","en-PW","en-RW","en-SB","en-SC","en-SD","en-SE","en-SG","en-SH","en-SI","en-SL","en-SS","en-SX","en-SZ","en-TC","en-TK","en-TO","en-TT","en-TV","en-TZ","en-UG","en-UM","en-VC","en-VG","en-VI","en-VU","en-WS","en-ZA","en-ZM","en-ZW","en","eo","es-419","es-AR","es-BO","es-BR","es-BZ","es-CL","es-CO","es-CR","es-CU","es-DO","es-EA","es-EC","es-GQ","es-GT","es-HN","es-IC","es-MX","es-NI","es-PA","es-PE","es-PH","es-PR","es-PY","es-SV","es-US","es-UY","es-VE","es","et","eu","ewo","fa-AF","fa","ff-Adlm-BF","ff-Adlm-CM","ff-Adlm-GH","ff-Adlm-GM","ff-Adlm-GW","ff-Adlm-LR","ff-Adlm-MR","ff-Adlm-NE","ff-Adlm-NG","ff-Adlm-SL","ff-Adlm-SN","ff-Adlm","ff-Latn-BF","ff-Latn-CM","ff-Latn-GH","ff-Latn-GM","ff-Latn-GN","ff-Latn-GW","ff-Latn-LR","ff-Latn-MR","ff-Latn-NE","ff-Latn-NG","ff-Latn-SL","ff-Latn","ff","fi","fil","fo-DK","fo","fr-BE","fr-BF","fr-BI","fr-BJ","fr-BL","fr-CA","fr-CD","fr-CF","fr-CG","fr-CH","fr-CI","fr-CM","fr-DJ","fr-DZ","fr-GA","fr-GF","fr-GN","fr-GP","fr-GQ","fr-HT","fr-KM","fr-LU","fr-MA","fr-MC","fr-MF","fr-MG","fr-ML","fr-MQ","fr-MR","fr-MU","fr-NC","fr-NE","fr-PF","fr-PM","fr-RE","fr-RW","fr-SC","fr-SN","fr-SY","fr-TD","fr-TG","fr-TN","fr-VU","fr-WF","fr-YT","fr","fur","fy","ga-GB","ga","gd","gl","gsw-FR","gsw-LI","gsw","gu","guz","gv","ha-GH","ha-NE","ha","haw","he","hi","hr-BA","hr","hsb","hu","hy","ia","id","ig","ii","is","it-CH","it-SM","it-VA","it","ja","jgo","jmc","jv","ka","kab","kam","kde","kea","kgp","khq","ki","kk","kkj","kl","kln","km","kn","ko-KP","ko","kok","ks-Arab","ks","ksb","ksf","ksh","ku","kw","ky","lag","lb","lg","lkt","ln-AO","ln-CF","ln-CG","ln","lo","lrc-IQ","lrc","lt","lu","luo","luy","lv","mai","mas-TZ","mas","mer","mfe","mg","mgh","mgo","mi","mk","ml","mn","mni-Beng","mni","mr","ms-BN","ms-ID","ms-SG","ms","mt","mua","my","mzn","naq","nb-SJ","nb","nd","nds-NL","nds","ne-IN","ne","nl-AW","nl-BE","nl-BQ","nl-CW","nl-SR","nl-SX","nl","nmg","nn","nnh","no","nus","nyn","om-KE","om","or","os-RU","os","pa-Arab","pa-Guru","pa","pcm","pl","ps-PK","ps","pt-AO","pt-CH","pt-CV","pt-GQ","pt-GW","pt-LU","pt-MO","pt-MZ","pt-PT","pt-ST","pt-TL","pt","qu-BO","qu-EC","qu","rm","rn","ro-MD","ro","rof","ru-BY","ru-KG","ru-KZ","ru-MD","ru-UA","ru","rw","rwk","sa","sah","saq","sat-Olck","sat","sbp","sc","sd-Arab","sd-Deva","sd","se-FI","se-SE","se","seh","ses","sg","shi-Latn","shi-Tfng","shi","si","sk","sl","smn","sn","so-DJ","so-ET","so-KE","so","sq-MK","sq-XK","sq","sr-Cyrl-BA","sr-Cyrl-ME","sr-Cyrl-XK","sr-Cyrl","sr-Latn-BA","sr-Latn-ME","sr-Latn-XK","sr-Latn","sr","su-Latn","su","sv-AX","sv-FI","sv","sw-CD","sw-KE","sw-UG","sw","ta-LK","ta-MY","ta-SG","ta","te","teo-KE","teo","tg","th","ti-ER","ti","tk","to","tr-CY","tr","tt","twq","tzm","ug","uk","und","ur-IN","ur","uz-Arab","uz-Cyrl","uz-Latn","uz","vai-Latn","vai-Vaii","vai","vi","vun","wae","wo","xh","xog","yav","yi","yo-BJ","yo","yrl-CO","yrl-VE","yrl","yue-Hans","yue-Hant","yue","zgh","zh-Hans-HK","zh-Hans-MO","zh-Hans-SG","zh-Hans","zh-Hant-HK","zh-Hant-MO","zh-Hant","zh","zu"]}));t(ce),ce.supportedLocales;var fe=e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.shouldPolyfill=void 0,t.shouldPolyfill=function(e){if(void 0===e&&(e="en"),!("RelativeTimeFormat"in Intl)||!function(e){if(!e)return!0;var t=Array.isArray(e)?e:[e];return Intl.RelativeTimeFormat.supportedLocalesOf(t).length===t.length}(e)||!function(e){try{return"numberingSystem"in new Intl.RelativeTimeFormat(e||"en",{numeric:"auto"}).resolvedOptions()}catch(e){return!1}}(e))return(0,i.match)([e],ce.supportedLocales,"en")}}));t(fe),fe.shouldPolyfill;var me=e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=(0,r.__importDefault)(se);(0,fe.shouldPolyfill)()&&Object.defineProperty(Intl,"RelativeTimeFormat",{value:n.default,writable:!0,enumerable:!1,configurable:!0})})),pe=t(me);export{me as __moduleExports,pe as default};
