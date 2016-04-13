module.exports=function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";var n=r(3),o=r(19);e.exports=o.fromExpress(function(e,t){n.defaults({AUTH0_DOMAIN:e.webtaskContext.secrets.AUTH0_DOMAIN,AUTH0_SCOPES:e.webtaskContext.secrets.AUTH0_SCOPES,NODE_ENV:"production",HOSTING_ENV:"webtask",CLIENT_VERSION:"1.2.0"});var o=r(12);return o(e,t)})},function(e,t,r){var n=r(22),o=r(17),a={};t.wrap=function(e,t,r){return o.assert(e instanceof Error,"Cannot wrap non-Error object"),e.isBoom?e:a.initialize(e,t||500,r)},t.create=function(e,r,n){return a.create(e,r,n,t.create)},a.create=function(e,t,r,n){var o=new Error(t?t:void 0);return Error.captureStackTrace(o,n),o.data=r||null,a.initialize(o,e),o},a.initialize=function(e,t,r){var n=parseInt(t,10);return o.assert(!isNaN(n)&&n>=400,"First argument must be a number (400+):",t),e.isBoom=!0,e.isServer=n>=500,e.hasOwnProperty("data")||(e.data=null),e.output={statusCode:n,payload:{},headers:{}},e.reformat=a.reformat,e.reformat(),r||e.message||(r=e.output.payload.error),r&&(e.message=r+(e.message?": "+e.message:"")),e},a.reformat=function(){this.output.payload.statusCode=this.output.statusCode,this.output.payload.error=n.STATUS_CODES[this.output.statusCode]||"Unknown",500===this.output.statusCode?this.output.payload.message="An internal server error occurred":this.message&&(this.output.payload.message=this.message)},t.badRequest=function(e,r){return a.create(400,e,r,t.badRequest)},t.unauthorized=function(e,r,n){var i=a.create(401,e,void 0,t.unauthorized);if(!r)return i;var s="",u=0,c=0;if("string"==typeof r){if(s=r,(n||e)&&(i.output.payload.attributes={}),n){var f=Object.keys(n);for(u=0,c=f.length;c>u;++u){var l=f[u];u&&(s+=",");var p=n[l];null!==p&&void 0!==p||(p=""),s+=" "+l+'="'+o.escapeHeaderAttribute(p.toString())+'"',i.output.payload.attributes[l]=p}}e?(n&&(s+=","),s+=' error="'+o.escapeHeaderAttribute(e)+'"',i.output.payload.attributes.error=e):i.isMissing=!0}else{var d=r;for(u=0,c=d.length;c>u;++u)u&&(s+=", "),s+=d[u]}return i.output.headers["WWW-Authenticate"]=s,i},t.forbidden=function(e,r){return a.create(403,e,r,t.forbidden)},t.notFound=function(e,r){return a.create(404,e,r,t.notFound)},t.methodNotAllowed=function(e,r){return a.create(405,e,r,t.methodNotAllowed)},t.notAcceptable=function(e,r){return a.create(406,e,r,t.notAcceptable)},t.proxyAuthRequired=function(e,r){return a.create(407,e,r,t.proxyAuthRequired)},t.clientTimeout=function(e,r){return a.create(408,e,r,t.clientTimeout)},t.conflict=function(e,r){return a.create(409,e,r,t.conflict)},t.resourceGone=function(e,r){return a.create(410,e,r,t.resourceGone)},t.lengthRequired=function(e,r){return a.create(411,e,r,t.lengthRequired)},t.preconditionFailed=function(e,r){return a.create(412,e,r,t.preconditionFailed)},t.entityTooLarge=function(e,r){return a.create(413,e,r,t.entityTooLarge)},t.uriTooLong=function(e,r){return a.create(414,e,r,t.uriTooLong)},t.unsupportedMediaType=function(e,r){return a.create(415,e,r,t.unsupportedMediaType)},t.rangeNotSatisfiable=function(e,r){return a.create(416,e,r,t.rangeNotSatisfiable)},t.expectationFailed=function(e,r){return a.create(417,e,r,t.expectationFailed)},t.badData=function(e,r){return a.create(422,e,r,t.badData)},t.preconditionRequired=function(e,r){return a.create(428,e,r,t.preconditionRequired)},t.tooManyRequests=function(e,r){return a.create(429,e,r,t.tooManyRequests)},t.internal=function(e,r,n){return a.serverError(e,r,n,t.internal)},a.serverError=function(e,r,n,o){var i;return r instanceof Error?i=t.wrap(r,n,e):(i=a.create(n||500,e,void 0,o),i.data=r),i},t.notImplemented=function(e,r){return a.serverError(e,r,501,t.notImplemented)},t.badGateway=function(e,r){return a.serverError(e,r,502,t.badGateway)},t.serverTimeout=function(e,r){return a.serverError(e,r,503,t.serverTimeout)},t.gatewayTimeout=function(e,r){return a.serverError(e,r,504,t.gatewayTimeout)},t.badImplementation=function(e,r){var n=a.serverError(e,r,500,t.badImplementation);return n.isDeveloperError=!0,n}},function(e,t){e.exports=require("request")},function(e,t){e.exports=require("nconf")},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("crypto")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("url")},function(e,t,r){function n(e){return e=e.match(/.{1,64}/g).join("\n"),e="-----BEGIN CERTIFICATE-----\n"+e,e+="\n-----END CERTIFICATE-----\n"}var o=r(26),a=r(2),i=r(25),s={max:5242880,length:function(e){return e.length},maxAge:3e5},u=o(s);e.exports=function(e){return e=e||{},e.strictSSL="undefined"==typeof e.strictSSL?!0:e.strictSSL,function(t,r,o,s){var c=o.iss+"|"+o.aud,f=u.get(c);if(f)return s(null,f);switch(r.alg){case"RS256":var l=o.iss+".well-known/jwks.json";a.get(l,{json:!0,strictSSL:e.strictSSL},function(e,t,a){if(e)return s(e);if(200!==t.statusCode)return s(new Error("Failed to obtain JWKS from "+o.iss));var f=i.find(a.keys,function(e){return e.kid==r.kid});if(!f)return s(new Error("Failed to obtain signing key used by "+o.iss));var l=n(f.x5c[0]);return u.set(c,l),s(null,l)});break;default:return s(new Error("Unsupported JWT algorithm: "+r.alg))}}}},function(e,t,r){function n(e){return e&&"[object Function]"==h.call(e)}function o(e){return function(t,r,n){d.get(e+"/userinfo").set("Authorization","Bearer "+t.body.access_token).end(function(e,o){return e?void r.redirect(r.locals.baseUrl):(t.userInfo=o.body,void n())})}}function a(e,t){return function(r,o,a){var i=e;n(e)&&(i=e(r)),r.apiToken=p.sign(r.userInfo,i,{algorithm:"HS256",issuer:o.locals.baseUrl,expiresIn:t}),delete r.userinfo,a()}}var i=r(6),s=r(23),u=r(21),c=r(8),f=r(9),l=r(4),p=r(24),d=r(27),h={}.toString;e.exports=function(e){var t=864e5,n=i.Router(),p=function(e,t,r){r()},d=[p];return e=e||{},e.clientName=e.clientName||"Auth0 Extension",e.clientId=e.clientId,e.exp=e.exp||t,e.credentialsRequired="undefined"==typeof e.credentialsRequired?!1:e.credentialsRequired,e.scopes=e.scopes+" openid profile",e.responseType=e.responseType||"token",e.tokenExpiresIn=e.tokenExpiresIn||"10h",e.rootTenantAuthority=e.rootTenantAuthority||"https://auth0.auth0.com",e.authenticatedCallback=e.authenticatedCallback||function(e,t,r,n){n()},e.apiToken&&!e.apiToken.secret&&(console.log('You are using a "development secret" for API token generation. Please setup your secret on "apiToken.secret".'),e.apiToken.secret=r(5).randomBytes(32).toString("hex")),e.apiToken&&e.apiToken.secret&&(d=[o(e.rootTenantAuthority),e.apiToken.payload||p,a(e.apiToken.secret,e.tokenExpiresIn)]),n.use(function(e,t,r){var n="https",o=c.parse(e.originalUrl).pathname.replace(e.path,"");t.locals.baseUrl=c.format({protocol:n,host:e.get("host"),pathname:o}),r()}),n.use(l.urlencoded({extended:!1})),n.use(u({secret:f(),algorithms:["RS256"],credentialsRequired:e.credentialsRequired}).unless({path:["/login","/callback"]})),n.get("/login",function(t,r){var n=[e.rootTenantAuthority+"/i/oauth2/authorize","?client_id="+(e.clientId||r.locals.baseUrl),"&response_type="+e.responseType,"&response_mode=form_post","&scope="+encodeURIComponent(e.scopes),"&expiration="+e.exp,"&redirect_uri="+r.locals.baseUrl+"/callback"].join("");r.redirect(n)}),n.get("/logout",function(t,r){var n=["html","  head","    script.","      sessionStorage.removeItem('token')","      sessionStorage.removeItem('apiToken')","      window.location.href = '"+e.rootTenantAuthority+"/v2/logout?returnTo=#{baseUrl}';","  body"].join("\n"),o=s.compile(n)({baseUrl:r.locals.baseUrl});r.header("Content-Type","text/html"),r.status(200).send(o)}),n.post("/callback",d,function(t,r){e.authenticatedCallback(t,r,t.body.access_token,function(e){if(e)return r.sendStatus(500);var n=["html","  head","    script.","      sessionStorage.setItem('token', '"+t.body.access_token+"');",1===d.length?"":"      sessionStorage.setItem('apiToken', '"+t.apiToken+"');","      window.location.href = '#{baseUrl}';","  body"].join("\n"),o=s.compile(n)({baseUrl:r.locals.baseUrl});r.header("Content-Type","text/html"),r.status(200).send(o)})}),n.get("/.well-known/oauth2-client-configuration",function(t,r){r.header("Content-Type","application/json"),r.status(200).send({redirect_uris:[r.locals.baseUrl+"/callback"],client_name:e.clientName})}),n}},function(e,t,r){"use strict";var n=r(20),o=r(8),a=r(3);e.exports=function(){var e='\n    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n      <title>User Import / Export Dashboard</title>\n      <meta charset="UTF-8" />\n      <meta http-equiv="X-UA-Compatible" content="IE=Edge" />\n      <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n      <link rel="shortcut icon" href="https://cdn.auth0.com/styleguide/2.0.1/lib/logos/img/favicon.png">\n      <meta name="viewport" content="width=device-width, initial-scale=1">\n      <link rel="stylesheet" type="text/css" href="https://cdn.auth0.com/styles/zocial.min.css">\n      <link rel="stylesheet" type="text/css" href="https://cdn.auth0.com/manage/v0.3.973/css/index.min.css">\n      <link rel="stylesheet" type="text/css" href="https://cdn.auth0.com/styleguide/3.8.4/index.css">\n      <% if (assets.version) { %>\n        <link rel="stylesheet" type="text/css" href="//a0ext.blob.core.windows.net/scripts/auth0-user-import-export.ui.<%= assets.version %>.css">\n      <% } %>\n    </head>\n    <body>\n      <div id="app"></div>\n      <script type="text/javascript">window.config = <%- JSON.stringify(config) %>;</script>\n      <script type="text/javascript" src="//cdn.auth0.com/js/lock-9.0.min.js"></script>\n      <script type="text/javascript" src="//cdn.auth0.com/manage/v0.3.973/components/ZeroClipboard/ZeroClipboard.js"></script>\n      <script type="text/javascript" src="//cdn.auth0.com/manage/v0.3.973/js/bundle.js"></script>\n      <% if (assets.app) { %><script type="text/javascript" src="<%= assets.app %>"></script><% } %>\n      <% if (assets.version) { %>\n      <script type="text/javascript" src="//a0ext.blob.core.windows.net/scripts/auth0-user-import-export.ui.vendors.<%= assets.version %>.js"></script>\n      <script type="text/javascript" src="//a0ext.blob.core.windows.net/scripts/auth0-user-import-export.ui.<%= assets.version %>.js"></script>\n      <% } %>\n    </body>\n    </html>\n  ';return function(t,r,i){var s={AUTH0_DOMAIN:a.get("AUTH0_DOMAIN"),BASE_URL:o.format({protocol:"production"!==a.get("NODE_ENV")?"http":"https",host:t.get("host"),pathname:o.parse(t.originalUrl||"").pathname.replace(t.path,"")}),BASE_PATH:o.parse(t.originalUrl||"").pathname.replace(t.path,"")},u=a.get("CLIENT_VERSION");return u?r.send(n.render(e,{config:s,assets:{version:u}})):void r.send(n.render(e,{config:s,assets:{app:"/app/bundle.js"}}))}}},function(e,t,r){(function(t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var o=r(13),a=n(o),i=r(7),s=r(3),u=r(6),c=r(4),f=r(10),l=r(2),p=r(18),d=r(11);s.argv().env().file(i.join(t,"./config.json")).defaults({NODE_ENV:"development"});var h=u();h.use(c.json()),h.use(c.urlencoded({extended:!1})),h.use("/meta",function(e,t){t.status(200).send(p)}),h.post("/users-import",function(e,t){var r=!1,n={url:"https://"+s.get("AUTH0_DOMAIN")+"/api/v2/jobs/users-imports",headers:{Authorization:e.headers["x-authorization"]}},o=l.post(n,function(e,n,o){return r?null:(r=!0,e?(t.status(400),t.json({error:e&&e.message||o})):(t.status(n.statusCode),t.json(o)))});try{var i=o.form();i.append("users",(0,a["default"])(e.body.users,null,2),{filename:"file.json",contentType:"text/plain"}),i.append("connection_id",e.body.connection_id)}catch(u){if(r)return;r=!0,t.status(400),t.json({error:u.message})}}),h.use(f({scopes:"create:users read:users read:connections",clientName:"User Import / Export Extension"})),h.get("*",d()),{NODE_ENV:"production",CLIENT_VERSION:"1.2.0"}.PORT||3e3,e.exports=Webtask.fromExpress(h)}).call(t,"/")},function(e,t,r){e.exports={"default":r(14),__esModule:!0}},function(e,t,r){var n=r(15);e.exports=function(e){return(n.JSON&&n.JSON.stringify||JSON.stringify).apply(JSON,arguments)}},function(e,t){var r=e.exports={version:"1.2.6"};"number"==typeof __e&&(__e=r)},function(e,t){var r={};t.escapeJavaScript=function(e){if(!e)return"";for(var t="",n=0,o=e.length;o>n;++n){var a=e.charCodeAt(n);t+=r.isSafe(a)?e[n]:r.escapeJavaScriptChar(a)}return t},t.escapeHtml=function(e){if(!e)return"";for(var t="",n=0,o=e.length;o>n;++n){var a=e.charCodeAt(n);t+=r.isSafe(a)?e[n]:r.escapeHtmlChar(a)}return t},r.escapeJavaScriptChar=function(e){if(e>=256)return"\\u"+r.padLeft(""+e,4);var t=new Buffer(String.fromCharCode(e),"ascii").toString("hex");return"\\x"+r.padLeft(t,2)},r.escapeHtmlChar=function(e){var t=r.namedHtml[e];if("undefined"!=typeof t)return t;if(e>=256)return"&#"+e+";";var n=new Buffer(String.fromCharCode(e),"ascii").toString("hex");return"&#x"+r.padLeft(n,2)+";"},r.padLeft=function(e,t){for(;e.length<t;)e="0"+e;return e},r.isSafe=function(e){return"undefined"!=typeof r.safeCharCodes[e]},r.namedHtml={38:"&amp;",60:"&lt;",62:"&gt;",34:"&quot;",160:"&nbsp;",162:"&cent;",163:"&pound;",164:"&curren;",169:"&copy;",174:"&reg;"},r.safeCharCodes=function(){for(var e={},t=32;123>t;++t)(t>=97||t>=65&&90>=t||t>=48&&57>=t||32===t||46===t||44===t||45===t||58===t||95===t)&&(e[t]=null);return e}()},function(e,t,r){var n=r(5),o=r(7),a=r(28),i=r(16),s={};t.clone=function(e,r){if("object"!=typeof e||null===e)return e;r=r||{orig:[],copy:[]};var n=r.orig.indexOf(e);if(-1!==n)return r.copy[n];var o,a=!1;if(Array.isArray(e))o=[],a=!0;else if(Buffer.isBuffer(e))o=new Buffer(e);else if(e instanceof Date)o=new Date(e.getTime());else if(e instanceof RegExp)o=new RegExp(e);else{var i=Object.getPrototypeOf(e);i&&i.isImmutable?o=e:(o=Object.create(i),a=!0)}if(r.orig.push(e),r.copy.push(o),a)for(var s=Object.getOwnPropertyNames(e),u=0,c=s.length;c>u;++u){var f=s[u],l=Object.getOwnPropertyDescriptor(e,f);l&&(l.get||l.set)?Object.defineProperty(o,f,l):o[f]=t.clone(e[f],r)}return o},t.merge=function(e,r,n,o){if(t.assert(e&&"object"==typeof e,"Invalid target value: must be an object"),t.assert(null===r||void 0===r||"object"==typeof r,"Invalid source value: must be null, undefined, or an object"),!r)return e;if(Array.isArray(r)){t.assert(Array.isArray(e),"Cannot merge array onto an object"),o===!1&&(e.length=0);for(var a=0,i=r.length;i>a;++a)e.push(t.clone(r[a]));return e}for(var s=Object.keys(r),u=0,c=s.length;c>u;++u){var f=s[u],l=r[f];l&&"object"==typeof l?!e[f]||"object"!=typeof e[f]||Array.isArray(e[f])^Array.isArray(l)||l instanceof Date||Buffer.isBuffer(l)||l instanceof RegExp?e[f]=t.clone(l):t.merge(e[f],l,n,o):null!==l&&void 0!==l?e[f]=l:n!==!1&&(e[f]=l)}return e},t.applyToDefaults=function(e,r,n){if(t.assert(e&&"object"==typeof e,"Invalid defaults value: must be an object"),t.assert(!r||r===!0||"object"==typeof r,"Invalid options value: must be true, falsy or an object"),!r)return null;var o=t.clone(e);return r===!0?o:t.merge(o,r,n===!0,!1)},t.cloneWithShallow=function(e,r){if(!e||"object"!=typeof e)return e;var n=s.store(e,r),o=t.clone(e);return s.restore(o,e,n),o},s.store=function(e,r){for(var n={},o=0,a=r.length;a>o;++o){var i=r[o],u=t.reach(e,i);void 0!==u&&(n[i]=u,s.reachSet(e,i,void 0))}return n},s.restore=function(e,t,r){for(var n=Object.keys(r),o=0,a=n.length;a>o;++o){var i=n[o];s.reachSet(e,i,r[i]),s.reachSet(t,i,r[i])}},s.reachSet=function(e,t,r){for(var n=t.split("."),o=e,a=0,i=n.length;i>a;++a){var s=n[a];a+1===i&&(o[s]=r),o=o[s]}},t.applyToDefaultsWithShallow=function(e,r,n){if(t.assert(e&&"object"==typeof e,"Invalid defaults value: must be an object"),t.assert(!r||r===!0||"object"==typeof r,"Invalid options value: must be true, falsy or an object"),t.assert(n&&Array.isArray(n),"Invalid keys"),!r)return null;var o=t.cloneWithShallow(e,n);if(r===!0)return o;var a=s.store(r,n);return t.merge(o,r,!1,!1),s.restore(o,r,a),o},t.deepEqual=function(e,r,n,o){n=n||{prototype:!0};var a=typeof e;if(a!==typeof r)return!1;if("object"!==a||null===e||null===r)return e===r?0!==e||1/e===1/r:e!==e&&r!==r;if(o=o||[],-1!==o.indexOf(e))return!0;if(o.push(e),Array.isArray(e)){if(!Array.isArray(r))return!1;if(!n.part&&e.length!==r.length)return!1;for(var i=0,s=e.length;s>i;++i){if(n.part){for(var u=!1,c=0,f=r.length;f>c;++c)if(t.deepEqual(e[i],r[c],n,o)){u=!0;break}return u}if(!t.deepEqual(e[i],r[i],n,o))return!1}return!0}if(Buffer.isBuffer(e)){if(!Buffer.isBuffer(r))return!1;if(e.length!==r.length)return!1;for(var l=0,p=e.length;p>l;++l)if(e[l]!==r[l])return!1;return!0}if(e instanceof Date)return r instanceof Date&&e.getTime()===r.getTime();if(e instanceof RegExp)return r instanceof RegExp&&e.toString()===r.toString();if(n.prototype&&Object.getPrototypeOf(e)!==Object.getPrototypeOf(r))return!1;var d=Object.getOwnPropertyNames(e);if(!n.part&&d.length!==Object.getOwnPropertyNames(r).length)return!1;for(var h=0,g=d.length;g>h;++h){var v=d[h],y=Object.getOwnPropertyDescriptor(e,v);if(y.get){if(!t.deepEqual(y,Object.getOwnPropertyDescriptor(r,v),n,o))return!1}else if(!t.deepEqual(e[v],r[v],n,o))return!1}return!0},t.unique=function(e,t){for(var r={},n=[],o=0,a=e.length;a>o;++o){var i=t?e[o][t]:e[o];r[i]!==!0&&(n.push(e[o]),r[i]=!0)}return n},t.mapToObject=function(e,t){if(!e)return null;for(var r={},n=0,o=e.length;o>n;++n)t?e[n][t]&&(r[e[n][t]]=!0):r[e[n]]=!0;return r},t.intersect=function(e,r,n){if(!e||!r)return[];for(var o=[],a=Array.isArray(e)?t.mapToObject(e):e,i={},s=0,u=r.length;u>s;++s)if(a[r[s]]&&!i[r[s]]){if(n)return r[s];o.push(r[s]),i[r[s]]=!0}return n?null:o},t.contain=function(e,r,n){var o=null;"object"!=typeof e||"object"!=typeof r||Array.isArray(e)||Array.isArray(r)?r=[].concat(r):(o=r,r=Object.keys(r)),n=n||{},t.assert(arguments.length>=2,"Insufficient arguments"),t.assert("string"==typeof e||"object"==typeof e,"Reference must be string or an object"),t.assert(r.length,"Values array cannot be empty");var a,i;if(n.deep){a=t.deepEqual;var s=n.hasOwnProperty("only"),u=n.hasOwnProperty("part");i={prototype:s?n.only:u?!n.part:!1,part:s?!n.only:u?n.part:!0}}else a=function(e,t){return e===t};for(var c=!1,f=new Array(r.length),l=0,p=f.length;p>l;++l)f[l]=0;if("string"==typeof e){var d="(";for(l=0,p=r.length;p>l;++l){var h=r[l];t.assert("string"==typeof h,"Cannot compare string reference to non-string value"),d+=(l?"|":"")+t.escapeRegex(h)}var g=new RegExp(d+")","g"),v=e.replace(g,function(e,t){var n=r.indexOf(t);return++f[n],""});c=!!v}else if(Array.isArray(e))for(l=0,p=e.length;p>l;++l){for(var y=0,m=r.length,b=!1;m>y&&b===!1;++y)b=a(r[y],e[l],i)&&y;b!==!1?++f[b]:c=!0}else{var x=Object.keys(e);for(l=0,p=x.length;p>l;++l){var w=x[l],j=r.indexOf(w);if(-1!==j){if(o&&!a(o[w],e[w],i))return!1;++f[j]}else c=!0}}var T=!1;for(l=0,p=f.length;p>l;++l)if(T=T||!!f[l],n.once&&f[l]>1||!n.part&&!f[l])return!1;return n.only&&c?!1:T},t.flatten=function(e,r){for(var n=r||[],o=0,a=e.length;a>o;++o)Array.isArray(e[o])?t.flatten(e[o],n):n.push(e[o]);return n},t.reach=function(e,r,n){if(r===!1||null===r||"undefined"==typeof r)return e;n=n||{},"string"==typeof n&&(n={separator:n});for(var o=r.split(n.separator||"."),a=e,i=0,s=o.length;s>i;++i){var u=o[i];if("-"===u[0]&&Array.isArray(a)&&(u=u.slice(1,u.length),u=a.length-u),!a||!a.hasOwnProperty(u)||"object"!=typeof a&&n.functions===!1){t.assert(!n.strict||i+1===s,"Missing segment",u,"in reach path ",r),t.assert("object"==typeof a||n.functions===!0||"function"!=typeof a,"Invalid segment",u,"in reach path ",r),a=n["default"];break}a=a[u]}return a},t.reachTemplate=function(e,r,n){return r.replace(/{([^}]+)}/g,function(r,o){var a=t.reach(e,o,n);return void 0===a||null===a?"":a})},t.formatStack=function(e){for(var t=[],r=0,n=e.length;n>r;++r){var o=e[r];t.push([o.getFileName(),o.getLineNumber(),o.getColumnNumber(),o.getFunctionName(),o.isConstructor()])}return t},t.formatTrace=function(e){for(var t=[],r=0,n=e.length;n>r;++r){var o=e[r];t.push((o[4]?"new ":"")+o[3]+" ("+o[0]+":"+o[1]+":"+o[2]+")")}return t},t.callStack=function(e){var r=Error.prepareStackTrace;Error.prepareStackTrace=function(e,t){return t};var n={};Error.captureStackTrace(n,arguments.callee);var o=n.stack;Error.prepareStackTrace=r;var a=t.formatStack(o);return e?a.slice(e):a},t.displayStack=function(e){var r=t.callStack(void 0===e?1:e+1);return t.formatTrace(r)},t.abortThrow=!1,t.abort=function(e,r){if(t.abortThrow===!0)throw new Error(e||"Unknown error");var n="";r||(n=t.displayStack(1).join("\n	")),console.log("ABORT: "+e+"\n	"+n),process.exit(1)},t.assert=function(e){if(!e){if(2===arguments.length&&arguments[1]instanceof Error)throw arguments[1];for(var r=[],n=1,o=arguments.length;o>n;++n)""!==arguments[n]&&r.push(arguments[n]);throw r=r.map(function(e){return"string"==typeof e?e:e instanceof Error?e.message:t.stringify(e)}),new Error(r.join(" ")||"Unknown error")}},t.Timer=function(){this.ts=0,this.reset()},t.Timer.prototype.reset=function(){this.ts=Date.now()},t.Timer.prototype.elapsed=function(){return Date.now()-this.ts},t.Bench=function(){this.ts=0,this.reset()},t.Bench.prototype.reset=function(){this.ts=t.Bench.now()},t.Bench.prototype.elapsed=function(){return t.Bench.now()-this.ts},t.Bench.now=function(){var e=process.hrtime();return 1e3*e[0]+e[1]/1e6},t.escapeRegex=function(e){return e.replace(/[\^\$\.\*\+\-\?\=\!\:\|\\\/\(\)\[\]\{\}\,]/g,"\\$&")},t.base64urlEncode=function(e,t){var r=Buffer.isBuffer(e)?e:new Buffer(e,t||"binary");return r.toString("base64").replace(/\+/g,"-").replace(/\//g,"_").replace(/\=/g,"")},t.base64urlDecode=function(e,t){if(e&&!/^[\w\-]*$/.test(e))return new Error("Invalid character");try{var r=new Buffer(e,"base64");return"buffer"===t?r:r.toString(t||"binary")}catch(n){return n}},t.escapeHeaderAttribute=function(e){return t.assert(/^[ \w\!#\$%&'\(\)\*\+,\-\.\/\:;<\=>\?@\[\]\^`\{\|\}~\"\\]*$/.test(e),"Bad attribute value ("+e+")"),e.replace(/\\/g,"\\\\").replace(/\"/g,'\\"')},t.escapeHtml=function(e){return i.escapeHtml(e)},t.escapeJavaScript=function(e){return i.escapeJavaScript(e)},t.nextTick=function(e){return function(){var t=arguments;process.nextTick(function(){e.apply(null,t)})}},t.once=function(e){if(e._hoekOnce)return e;var t=!1,r=function(){t||(t=!0,e.apply(null,arguments))};return r._hoekOnce=!0,r},t.isAbsolutePath=function(e,t){return e?o.isAbsolute?o.isAbsolute(e):(t=t||process.platform,"win32"!==t?"/"===e[0]:!!/^(?:[a-zA-Z]:[\\\/])|(?:[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/])/.test(e)):!1},t.isInteger=function(e){return"number"==typeof e&&parseFloat(e)===parseInt(e,10)&&!isNaN(e)},t.ignore=function(){},t.inherits=a.inherits,t.format=a.format,t.transform=function(e,r,n){if(t.assert(null===e||void 0===e||"object"==typeof e||Array.isArray(e),"Invalid source object: must be null, undefined, an object, or an array"),Array.isArray(e)){for(var o=[],a=0,i=e.length;i>a;++a)o.push(t.transform(e[a],r,n));return o}for(var s={},u=Object.keys(r),c=0,f=u.length;f>c;++c){var l=u[c],p=l.split("."),d=r[l];t.assert("string"==typeof d,'All mappings must be "." delineated strings');for(var h,g=s;p.length>1;)h=p.shift(),g[h]||(g[h]={}),g=g[h];h=p.shift(),g[h]=t.reach(e,d,n)}return s},t.uniqueFilename=function(e,t){t=t?"."!==t[0]?"."+t:t:"",e=o.resolve(e);var r=[Date.now(),process.pid,n.randomBytes(8).toString("hex")].join("-")+t;return o.join(e,r)},t.stringify=function(){try{return JSON.stringify.apply(null,arguments)}catch(e){return"[Cannot display object: "+e.message+"]"}},t.shallow=function(e){for(var t={},r=Object.keys(e),n=0,o=r.length;o>n;++n){var a=r[n];t[a]=e[a]}return t}},function(e,t){e.exports={title:"User Import / Export",name:"auth0-user-import-export",version:"1.2.0",author:"auth0",description:"This extension allows you to import/export users from/to your account.",type:"application",logoUrl:"https://cdn.rawgit.com/auth0/auth0-user-import-export-extension/master/assets/logo.svg",initialUrlPath:"/login",repository:"https://github.com/auth0/auth0-user-import-export-extension",keywords:["auth0","extension"],auth0:{scopes:"create:users read:users read:connections"}}},function(e,t,r){function n(e){return function(t,r,n){var o=i(r.x_wt.jtn);return r.originalUrl=r.url,r.url=r.url.replace(o,"/"),r.webtaskContext=s(t),e(r,n)}}function o(e){var t;return e.ext("onRequest",function(e,r){var n=i(e.x_wt.jtn);e.setUrl(e.url.replace(n,"/")),e.webtaskContext=t}),function(r,n,o){var a=e._dispatch();t=s(r),a(n,o)}}function a(e){return function(t,r,n){var o=i(r.x_wt.jtn);return r.originalUrl=r.url,r.url=r.url.replace(o,"/"),r.webtaskContext=s(t),e.emit("request",r,n)}}function i(e){var t="^/api/run/[^/]+/",r="(?:[^/?#]*/?)?";return new RegExp(t+(e?r:""))}function s(e){function t(e,t,n){var o=r(1);"function"==typeof t&&(n=t,t={}),n(o.preconditionFailed("Storage is not available in this context"))}function n(t,n,o){var a=r(1),i=r(2);"function"==typeof n&&(o=n,n={}),i({uri:e.secrets.EXT_STORAGE_URL,method:"GET",headers:n.headers||{},qs:{path:t},json:!0},function(e,t,r){return e?o(a.wrap(e,502)):404===t.statusCode&&Object.hasOwnProperty.call(n,"defaultValue")?o(null,n.defaultValue):t.statusCode>=400?o(a.create(t.statusCode,r&&r.message)):void o(null,r)})}function o(e,t,n,o){var a=r(1);"function"==typeof n&&(o=n,n={}),o(a.preconditionFailed("Storage is not available in this context"))}function a(t,n,o,a){var i=r(1),s=r(2);"function"==typeof o&&(a=o,o={}),s({uri:e.secrets.EXT_STORAGE_URL,method:"PUT",headers:o.headers||{},qs:{path:t},body:n},function(e,t,r){return e?a(i.wrap(e,502)):t.statusCode>=400?a(i.create(t.statusCode,r&&r.message)):void a(null)})}return e.read=e.secrets.EXT_STORAGE_URL?n:t,e.write=e.secrets.EXT_STORAGE_URL?a:o,e}t.fromConnect=t.fromExpress=n,t.fromHapi=o,t.fromServer=t.fromRestify=a},function(e,t){e.exports=require("ejs")},function(e,t){e.exports=require("express-jwt")},function(e,t){e.exports=require("http")},function(e,t){e.exports=require("jade")},function(e,t){e.exports=require("jsonwebtoken")},function(e,t){e.exports=require("lodash")},function(e,t){e.exports=require("lru-cache")},function(e,t){e.exports=require("superagent")},function(e,t){e.exports=require("util")}]);