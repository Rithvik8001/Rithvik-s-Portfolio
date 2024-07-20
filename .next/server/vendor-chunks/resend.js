"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/resend";
exports.ids = ["vendor-chunks/resend"];
exports.modules = {

/***/ "(rsc)/./node_modules/resend/dist/index.mjs":
/*!********************************************!*\
  !*** ./node_modules/resend/dist/index.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Resend: () => (/* binding */ Resend)\n/* harmony export */ });\n/* harmony import */ var _react_email_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-email/render */ \"(rsc)/./node_modules/@react-email/render/dist/index.mjs\");\nvar __defProp = Object.defineProperty;\nvar __defProps = Object.defineProperties;\nvar __getOwnPropDescs = Object.getOwnPropertyDescriptors;\nvar __getOwnPropSymbols = Object.getOwnPropertySymbols;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __propIsEnum = Object.prototype.propertyIsEnumerable;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __spreadValues = (a, b) => {\n  for (var prop in b || (b = {}))\n    if (__hasOwnProp.call(b, prop))\n      __defNormalProp(a, prop, b[prop]);\n  if (__getOwnPropSymbols)\n    for (var prop of __getOwnPropSymbols(b)) {\n      if (__propIsEnum.call(b, prop))\n        __defNormalProp(a, prop, b[prop]);\n    }\n  return a;\n};\nvar __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));\nvar __async = (__this, __arguments, generator) => {\n  return new Promise((resolve, reject) => {\n    var fulfilled = (value) => {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    };\n    var rejected = (value) => {\n      try {\n        step(generator.throw(value));\n      } catch (e) {\n        reject(e);\n      }\n    };\n    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);\n    step((generator = generator.apply(__this, __arguments)).next());\n  });\n};\n\n// package.json\nvar version = \"3.4.0\";\n\n// src/api-keys/api-keys.ts\nvar ApiKeys = class {\n  constructor(resend) {\n    this.resend = resend;\n  }\n  create(_0) {\n    return __async(this, arguments, function* (payload, options = {}) {\n      const data = yield this.resend.post(\n        \"/api-keys\",\n        payload,\n        options\n      );\n      return data;\n    });\n  }\n  list() {\n    return __async(this, null, function* () {\n      const data = yield this.resend.get(\"/api-keys\");\n      return data;\n    });\n  }\n  remove(id) {\n    return __async(this, null, function* () {\n      const data = yield this.resend.delete(\n        `/api-keys/${id}`\n      );\n      return data;\n    });\n  }\n};\n\n// src/audiences/audiences.ts\nvar Audiences = class {\n  constructor(resend) {\n    this.resend = resend;\n  }\n  create(_0) {\n    return __async(this, arguments, function* (payload, options = {}) {\n      const data = yield this.resend.post(\n        \"/audiences\",\n        payload,\n        options\n      );\n      return data;\n    });\n  }\n  list() {\n    return __async(this, null, function* () {\n      const data = yield this.resend.get(\"/audiences\");\n      return data;\n    });\n  }\n  get(id) {\n    return __async(this, null, function* () {\n      const data = yield this.resend.get(\n        `/audiences/${id}`\n      );\n      return data;\n    });\n  }\n  remove(id) {\n    return __async(this, null, function* () {\n      const data = yield this.resend.delete(\n        `/audiences/${id}`\n      );\n      return data;\n    });\n  }\n};\n\n// src/batch/batch.ts\n\nvar Batch = class {\n  constructor(resend) {\n    this.resend = resend;\n  }\n  send(_0) {\n    return __async(this, arguments, function* (payload, options = {}) {\n      return this.create(payload, options);\n    });\n  }\n  create(_0) {\n    return __async(this, arguments, function* (payload, options = {}) {\n      for (const email of payload) {\n        if (email.react) {\n          email.html = yield (0,_react_email_render__WEBPACK_IMPORTED_MODULE_0__.renderAsync)(email.react);\n          delete email.react;\n        }\n      }\n      const data = yield this.resend.post(\n        \"/emails/batch\",\n        payload,\n        options\n      );\n      return data;\n    });\n  }\n};\n\n// src/contacts/contacts.ts\nvar Contacts = class {\n  constructor(resend) {\n    this.resend = resend;\n  }\n  create(_0) {\n    return __async(this, arguments, function* (payload, options = {}) {\n      const data = yield this.resend.post(\n        `/audiences/${payload.audienceId}/contacts`,\n        {\n          unsubscribed: payload.unsubscribed,\n          email: payload.email,\n          first_name: payload.firstName,\n          last_name: payload.lastName\n        },\n        options\n      );\n      return data;\n    });\n  }\n  list(options) {\n    return __async(this, null, function* () {\n      const data = yield this.resend.get(\n        `/audiences/${options.audienceId}/contacts`\n      );\n      return data;\n    });\n  }\n  get(options) {\n    return __async(this, null, function* () {\n      const data = yield this.resend.get(\n        `/audiences/${options.audienceId}/contacts/${options.id}`\n      );\n      return data;\n    });\n  }\n  update(payload) {\n    return __async(this, null, function* () {\n      const data = yield this.resend.patch(\n        `/audiences/${payload.audienceId}/contacts/${payload.id}`,\n        {\n          unsubscribed: payload.unsubscribed,\n          first_name: payload.firstName,\n          last_name: payload.lastName\n        }\n      );\n      return data;\n    });\n  }\n  remove(payload) {\n    return __async(this, null, function* () {\n      const data = yield this.resend.delete(\n        `/audiences/${payload.audienceId}/contacts/${(payload == null ? void 0 : payload.email) ? payload == null ? void 0 : payload.email : payload == null ? void 0 : payload.id}`\n      );\n      return data;\n    });\n  }\n};\n\n// src/domains/domains.ts\nvar Domains = class {\n  constructor(resend) {\n    this.resend = resend;\n  }\n  create(_0) {\n    return __async(this, arguments, function* (payload, options = {}) {\n      const data = yield this.resend.post(\n        \"/domains\",\n        payload,\n        options\n      );\n      return data;\n    });\n  }\n  list() {\n    return __async(this, null, function* () {\n      const data = yield this.resend.get(\"/domains\");\n      return data;\n    });\n  }\n  get(id) {\n    return __async(this, null, function* () {\n      const data = yield this.resend.get(\n        `/domains/${id}`\n      );\n      return data;\n    });\n  }\n  update(payload) {\n    return __async(this, null, function* () {\n      const data = yield this.resend.patch(\n        `/domains/${payload.id}`,\n        {\n          click_tracking: payload.clickTracking,\n          open_tracking: payload.openTracking,\n          tls: payload.tls\n        }\n      );\n      return data;\n    });\n  }\n  remove(id) {\n    return __async(this, null, function* () {\n      const data = yield this.resend.delete(\n        `/domains/${id}`\n      );\n      return data;\n    });\n  }\n  verify(id) {\n    return __async(this, null, function* () {\n      const data = yield this.resend.post(\n        `/domains/${id}/verify`\n      );\n      return data;\n    });\n  }\n};\n\n// src/emails/emails.ts\n\nvar Emails = class {\n  constructor(resend) {\n    this.resend = resend;\n  }\n  send(_0) {\n    return __async(this, arguments, function* (payload, options = {}) {\n      return this.create(payload, options);\n    });\n  }\n  create(_0) {\n    return __async(this, arguments, function* (payload, options = {}) {\n      if (payload.react) {\n        payload.html = yield (0,_react_email_render__WEBPACK_IMPORTED_MODULE_0__.renderAsync)(payload.react);\n        delete payload.react;\n      }\n      const data = yield this.resend.post(\n        \"/emails\",\n        payload,\n        options\n      );\n      return data;\n    });\n  }\n  get(id) {\n    return __async(this, null, function* () {\n      const data = yield this.resend.get(\n        `/emails/${id}`\n      );\n      return data;\n    });\n  }\n};\n\n// src/resend.ts\nvar defaultBaseUrl = \"https://api.resend.com\";\nvar defaultUserAgent = `resend-node:${version}`;\nvar baseUrl = typeof process !== \"undefined\" && process.env ? process.env.RESEND_BASE_URL || defaultBaseUrl : defaultBaseUrl;\nvar userAgent = typeof process !== \"undefined\" && process.env ? process.env.RESEND_USER_AGENT || defaultUserAgent : defaultUserAgent;\nvar Resend = class {\n  constructor(key) {\n    this.key = key;\n    this.apiKeys = new ApiKeys(this);\n    this.audiences = new Audiences(this);\n    this.batch = new Batch(this);\n    this.contacts = new Contacts(this);\n    this.domains = new Domains(this);\n    this.emails = new Emails(this);\n    if (!key) {\n      if (typeof process !== \"undefined\" && process.env) {\n        this.key = process.env.RESEND_API_KEY;\n      }\n      if (!this.key) {\n        throw new Error(\n          'Missing API key. Pass it to the constructor `new Resend(\"re_123\")`'\n        );\n      }\n    }\n    this.headers = new Headers({\n      Authorization: `Bearer ${this.key}`,\n      \"User-Agent\": userAgent,\n      \"Content-Type\": \"application/json\"\n    });\n  }\n  fetchRequest(_0) {\n    return __async(this, arguments, function* (path, options = {}) {\n      try {\n        const response = yield fetch(`${baseUrl}${path}`, options);\n        if (!response.ok) {\n          try {\n            const rawError = yield response.text();\n            return { data: null, error: JSON.parse(rawError) };\n          } catch (err) {\n            if (err instanceof SyntaxError) {\n              return {\n                data: null,\n                error: {\n                  name: \"application_error\",\n                  message: \"Internal server error. We are unable to process your request right now, please try again later.\"\n                }\n              };\n            }\n            const error = {\n              message: response.statusText,\n              name: \"application_error\"\n            };\n            if (err instanceof Error) {\n              return { data: null, error: __spreadProps(__spreadValues({}, error), { message: err.message }) };\n            }\n            return { data: null, error };\n          }\n        }\n        const data = yield response.json();\n        return { data, error: null };\n      } catch (error) {\n        return {\n          data: null,\n          error: {\n            name: \"application_error\",\n            message: \"Unable to fetch data. The request could not be resolved.\"\n          }\n        };\n      }\n    });\n  }\n  post(_0, _1) {\n    return __async(this, arguments, function* (path, entity, options = {}) {\n      const requestOptions = __spreadValues({\n        method: \"POST\",\n        headers: this.headers,\n        body: JSON.stringify(entity)\n      }, options);\n      return this.fetchRequest(path, requestOptions);\n    });\n  }\n  get(_0) {\n    return __async(this, arguments, function* (path, options = {}) {\n      const requestOptions = __spreadValues({\n        method: \"GET\",\n        headers: this.headers\n      }, options);\n      return this.fetchRequest(path, requestOptions);\n    });\n  }\n  put(_0, _1) {\n    return __async(this, arguments, function* (path, entity, options = {}) {\n      const requestOptions = __spreadValues({\n        method: \"PUT\",\n        headers: this.headers,\n        body: JSON.stringify(entity)\n      }, options);\n      return this.fetchRequest(path, requestOptions);\n    });\n  }\n  patch(_0, _1) {\n    return __async(this, arguments, function* (path, entity, options = {}) {\n      const requestOptions = __spreadValues({\n        method: \"PATCH\",\n        headers: this.headers,\n        body: JSON.stringify(entity)\n      }, options);\n      return this.fetchRequest(path, requestOptions);\n    });\n  }\n  delete(path, query) {\n    return __async(this, null, function* () {\n      const requestOptions = {\n        method: \"DELETE\",\n        headers: this.headers,\n        body: JSON.stringify(query)\n      };\n      return this.fetchRequest(path, requestOptions);\n    });\n  }\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcmVzZW5kL2Rpc3QvaW5kZXgubWpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLDZEQUE2RDtBQUMzSTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0U7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsR0FBRztBQUN4QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLEdBQUc7QUFDekI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixHQUFHO0FBQ3pCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxvRUFBb0U7QUFDcEU7QUFDQTtBQUNBLDZCQUE2QixnRUFBVztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFHRSIsInNvdXJjZXMiOlsid2VicGFjazovL3JpdGh2aWtyZWRkeTEwLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9yZXNlbmQvZGlzdC9pbmRleC5tanM/YjlhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZGVmUHJvcHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydGllcztcbnZhciBfX2dldE93blByb3BEZXNjcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzO1xudmFyIF9fZ2V0T3duUHJvcFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIF9faGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgX19wcm9wSXNFbnVtID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBfX2RlZk5vcm1hbFByb3AgPSAob2JqLCBrZXksIHZhbHVlKSA9PiBrZXkgaW4gb2JqID8gX19kZWZQcm9wKG9iaiwga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUsIHZhbHVlIH0pIDogb2JqW2tleV0gPSB2YWx1ZTtcbnZhciBfX3NwcmVhZFZhbHVlcyA9IChhLCBiKSA9PiB7XG4gIGZvciAodmFyIHByb3AgaW4gYiB8fCAoYiA9IHt9KSlcbiAgICBpZiAoX19oYXNPd25Qcm9wLmNhbGwoYiwgcHJvcCkpXG4gICAgICBfX2RlZk5vcm1hbFByb3AoYSwgcHJvcCwgYltwcm9wXSk7XG4gIGlmIChfX2dldE93blByb3BTeW1ib2xzKVxuICAgIGZvciAodmFyIHByb3Agb2YgX19nZXRPd25Qcm9wU3ltYm9scyhiKSkge1xuICAgICAgaWYgKF9fcHJvcElzRW51bS5jYWxsKGIsIHByb3ApKVxuICAgICAgICBfX2RlZk5vcm1hbFByb3AoYSwgcHJvcCwgYltwcm9wXSk7XG4gICAgfVxuICByZXR1cm4gYTtcbn07XG52YXIgX19zcHJlYWRQcm9wcyA9IChhLCBiKSA9PiBfX2RlZlByb3BzKGEsIF9fZ2V0T3duUHJvcERlc2NzKGIpKTtcbnZhciBfX2FzeW5jID0gKF9fdGhpcywgX19hcmd1bWVudHMsIGdlbmVyYXRvcikgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHZhciBmdWxmaWxsZWQgPSAodmFsdWUpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgdmFyIHJlamVjdGVkID0gKHZhbHVlKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBzdGVwKGdlbmVyYXRvci50aHJvdyh2YWx1ZSkpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB2YXIgc3RlcCA9ICh4KSA9PiB4LmRvbmUgPyByZXNvbHZlKHgudmFsdWUpIDogUHJvbWlzZS5yZXNvbHZlKHgudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7XG4gICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KF9fdGhpcywgX19hcmd1bWVudHMpKS5uZXh0KCkpO1xuICB9KTtcbn07XG5cbi8vIHBhY2thZ2UuanNvblxudmFyIHZlcnNpb24gPSBcIjMuNC4wXCI7XG5cbi8vIHNyYy9hcGkta2V5cy9hcGkta2V5cy50c1xudmFyIEFwaUtleXMgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHJlc2VuZCkge1xuICAgIHRoaXMucmVzZW5kID0gcmVzZW5kO1xuICB9XG4gIGNyZWF0ZShfMCkge1xuICAgIHJldHVybiBfX2FzeW5jKHRoaXMsIGFyZ3VtZW50cywgZnVuY3Rpb24qIChwYXlsb2FkLCBvcHRpb25zID0ge30pIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB5aWVsZCB0aGlzLnJlc2VuZC5wb3N0KFxuICAgICAgICBcIi9hcGkta2V5c1wiLFxuICAgICAgICBwYXlsb2FkLFxuICAgICAgICBvcHRpb25zXG4gICAgICApO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSk7XG4gIH1cbiAgbGlzdCgpIHtcbiAgICByZXR1cm4gX19hc3luYyh0aGlzLCBudWxsLCBmdW5jdGlvbiogKCkge1xuICAgICAgY29uc3QgZGF0YSA9IHlpZWxkIHRoaXMucmVzZW5kLmdldChcIi9hcGkta2V5c1wiKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0pO1xuICB9XG4gIHJlbW92ZShpZCkge1xuICAgIHJldHVybiBfX2FzeW5jKHRoaXMsIG51bGwsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0geWllbGQgdGhpcy5yZXNlbmQuZGVsZXRlKFxuICAgICAgICBgL2FwaS1rZXlzLyR7aWR9YFxuICAgICAgKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0pO1xuICB9XG59O1xuXG4vLyBzcmMvYXVkaWVuY2VzL2F1ZGllbmNlcy50c1xudmFyIEF1ZGllbmNlcyA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IocmVzZW5kKSB7XG4gICAgdGhpcy5yZXNlbmQgPSByZXNlbmQ7XG4gIH1cbiAgY3JlYXRlKF8wKSB7XG4gICAgcmV0dXJuIF9fYXN5bmModGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiogKHBheWxvYWQsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgY29uc3QgZGF0YSA9IHlpZWxkIHRoaXMucmVzZW5kLnBvc3QoXG4gICAgICAgIFwiL2F1ZGllbmNlc1wiLFxuICAgICAgICBwYXlsb2FkLFxuICAgICAgICBvcHRpb25zXG4gICAgICApO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSk7XG4gIH1cbiAgbGlzdCgpIHtcbiAgICByZXR1cm4gX19hc3luYyh0aGlzLCBudWxsLCBmdW5jdGlvbiogKCkge1xuICAgICAgY29uc3QgZGF0YSA9IHlpZWxkIHRoaXMucmVzZW5kLmdldChcIi9hdWRpZW5jZXNcIik7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9KTtcbiAgfVxuICBnZXQoaWQpIHtcbiAgICByZXR1cm4gX19hc3luYyh0aGlzLCBudWxsLCBmdW5jdGlvbiogKCkge1xuICAgICAgY29uc3QgZGF0YSA9IHlpZWxkIHRoaXMucmVzZW5kLmdldChcbiAgICAgICAgYC9hdWRpZW5jZXMvJHtpZH1gXG4gICAgICApO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSk7XG4gIH1cbiAgcmVtb3ZlKGlkKSB7XG4gICAgcmV0dXJuIF9fYXN5bmModGhpcywgbnVsbCwgZnVuY3Rpb24qICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB5aWVsZCB0aGlzLnJlc2VuZC5kZWxldGUoXG4gICAgICAgIGAvYXVkaWVuY2VzLyR7aWR9YFxuICAgICAgKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0pO1xuICB9XG59O1xuXG4vLyBzcmMvYmF0Y2gvYmF0Y2gudHNcbmltcG9ydCB7IHJlbmRlckFzeW5jIH0gZnJvbSBcIkByZWFjdC1lbWFpbC9yZW5kZXJcIjtcbnZhciBCYXRjaCA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IocmVzZW5kKSB7XG4gICAgdGhpcy5yZXNlbmQgPSByZXNlbmQ7XG4gIH1cbiAgc2VuZChfMCkge1xuICAgIHJldHVybiBfX2FzeW5jKHRoaXMsIGFyZ3VtZW50cywgZnVuY3Rpb24qIChwYXlsb2FkLCBvcHRpb25zID0ge30pIHtcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZShwYXlsb2FkLCBvcHRpb25zKTtcbiAgICB9KTtcbiAgfVxuICBjcmVhdGUoXzApIHtcbiAgICByZXR1cm4gX19hc3luYyh0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uKiAocGF5bG9hZCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICBmb3IgKGNvbnN0IGVtYWlsIG9mIHBheWxvYWQpIHtcbiAgICAgICAgaWYgKGVtYWlsLnJlYWN0KSB7XG4gICAgICAgICAgZW1haWwuaHRtbCA9IHlpZWxkIHJlbmRlckFzeW5jKGVtYWlsLnJlYWN0KTtcbiAgICAgICAgICBkZWxldGUgZW1haWwucmVhY3Q7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IGRhdGEgPSB5aWVsZCB0aGlzLnJlc2VuZC5wb3N0KFxuICAgICAgICBcIi9lbWFpbHMvYmF0Y2hcIixcbiAgICAgICAgcGF5bG9hZCxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0pO1xuICB9XG59O1xuXG4vLyBzcmMvY29udGFjdHMvY29udGFjdHMudHNcbnZhciBDb250YWN0cyA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IocmVzZW5kKSB7XG4gICAgdGhpcy5yZXNlbmQgPSByZXNlbmQ7XG4gIH1cbiAgY3JlYXRlKF8wKSB7XG4gICAgcmV0dXJuIF9fYXN5bmModGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiogKHBheWxvYWQsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgY29uc3QgZGF0YSA9IHlpZWxkIHRoaXMucmVzZW5kLnBvc3QoXG4gICAgICAgIGAvYXVkaWVuY2VzLyR7cGF5bG9hZC5hdWRpZW5jZUlkfS9jb250YWN0c2AsXG4gICAgICAgIHtcbiAgICAgICAgICB1bnN1YnNjcmliZWQ6IHBheWxvYWQudW5zdWJzY3JpYmVkLFxuICAgICAgICAgIGVtYWlsOiBwYXlsb2FkLmVtYWlsLFxuICAgICAgICAgIGZpcnN0X25hbWU6IHBheWxvYWQuZmlyc3ROYW1lLFxuICAgICAgICAgIGxhc3RfbmFtZTogcGF5bG9hZC5sYXN0TmFtZVxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zXG4gICAgICApO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSk7XG4gIH1cbiAgbGlzdChvcHRpb25zKSB7XG4gICAgcmV0dXJuIF9fYXN5bmModGhpcywgbnVsbCwgZnVuY3Rpb24qICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB5aWVsZCB0aGlzLnJlc2VuZC5nZXQoXG4gICAgICAgIGAvYXVkaWVuY2VzLyR7b3B0aW9ucy5hdWRpZW5jZUlkfS9jb250YWN0c2BcbiAgICAgICk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9KTtcbiAgfVxuICBnZXQob3B0aW9ucykge1xuICAgIHJldHVybiBfX2FzeW5jKHRoaXMsIG51bGwsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0geWllbGQgdGhpcy5yZXNlbmQuZ2V0KFxuICAgICAgICBgL2F1ZGllbmNlcy8ke29wdGlvbnMuYXVkaWVuY2VJZH0vY29udGFjdHMvJHtvcHRpb25zLmlkfWBcbiAgICAgICk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9KTtcbiAgfVxuICB1cGRhdGUocGF5bG9hZCkge1xuICAgIHJldHVybiBfX2FzeW5jKHRoaXMsIG51bGwsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0geWllbGQgdGhpcy5yZXNlbmQucGF0Y2goXG4gICAgICAgIGAvYXVkaWVuY2VzLyR7cGF5bG9hZC5hdWRpZW5jZUlkfS9jb250YWN0cy8ke3BheWxvYWQuaWR9YCxcbiAgICAgICAge1xuICAgICAgICAgIHVuc3Vic2NyaWJlZDogcGF5bG9hZC51bnN1YnNjcmliZWQsXG4gICAgICAgICAgZmlyc3RfbmFtZTogcGF5bG9hZC5maXJzdE5hbWUsXG4gICAgICAgICAgbGFzdF9uYW1lOiBwYXlsb2FkLmxhc3ROYW1lXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9KTtcbiAgfVxuICByZW1vdmUocGF5bG9hZCkge1xuICAgIHJldHVybiBfX2FzeW5jKHRoaXMsIG51bGwsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0geWllbGQgdGhpcy5yZXNlbmQuZGVsZXRlKFxuICAgICAgICBgL2F1ZGllbmNlcy8ke3BheWxvYWQuYXVkaWVuY2VJZH0vY29udGFjdHMvJHsocGF5bG9hZCA9PSBudWxsID8gdm9pZCAwIDogcGF5bG9hZC5lbWFpbCkgPyBwYXlsb2FkID09IG51bGwgPyB2b2lkIDAgOiBwYXlsb2FkLmVtYWlsIDogcGF5bG9hZCA9PSBudWxsID8gdm9pZCAwIDogcGF5bG9hZC5pZH1gXG4gICAgICApO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSk7XG4gIH1cbn07XG5cbi8vIHNyYy9kb21haW5zL2RvbWFpbnMudHNcbnZhciBEb21haW5zID0gY2xhc3Mge1xuICBjb25zdHJ1Y3RvcihyZXNlbmQpIHtcbiAgICB0aGlzLnJlc2VuZCA9IHJlc2VuZDtcbiAgfVxuICBjcmVhdGUoXzApIHtcbiAgICByZXR1cm4gX19hc3luYyh0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uKiAocGF5bG9hZCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICBjb25zdCBkYXRhID0geWllbGQgdGhpcy5yZXNlbmQucG9zdChcbiAgICAgICAgXCIvZG9tYWluc1wiLFxuICAgICAgICBwYXlsb2FkLFxuICAgICAgICBvcHRpb25zXG4gICAgICApO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSk7XG4gIH1cbiAgbGlzdCgpIHtcbiAgICByZXR1cm4gX19hc3luYyh0aGlzLCBudWxsLCBmdW5jdGlvbiogKCkge1xuICAgICAgY29uc3QgZGF0YSA9IHlpZWxkIHRoaXMucmVzZW5kLmdldChcIi9kb21haW5zXCIpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSk7XG4gIH1cbiAgZ2V0KGlkKSB7XG4gICAgcmV0dXJuIF9fYXN5bmModGhpcywgbnVsbCwgZnVuY3Rpb24qICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB5aWVsZCB0aGlzLnJlc2VuZC5nZXQoXG4gICAgICAgIGAvZG9tYWlucy8ke2lkfWBcbiAgICAgICk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9KTtcbiAgfVxuICB1cGRhdGUocGF5bG9hZCkge1xuICAgIHJldHVybiBfX2FzeW5jKHRoaXMsIG51bGwsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0geWllbGQgdGhpcy5yZXNlbmQucGF0Y2goXG4gICAgICAgIGAvZG9tYWlucy8ke3BheWxvYWQuaWR9YCxcbiAgICAgICAge1xuICAgICAgICAgIGNsaWNrX3RyYWNraW5nOiBwYXlsb2FkLmNsaWNrVHJhY2tpbmcsXG4gICAgICAgICAgb3Blbl90cmFja2luZzogcGF5bG9hZC5vcGVuVHJhY2tpbmcsXG4gICAgICAgICAgdGxzOiBwYXlsb2FkLnRsc1xuICAgICAgICB9XG4gICAgICApO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSk7XG4gIH1cbiAgcmVtb3ZlKGlkKSB7XG4gICAgcmV0dXJuIF9fYXN5bmModGhpcywgbnVsbCwgZnVuY3Rpb24qICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB5aWVsZCB0aGlzLnJlc2VuZC5kZWxldGUoXG4gICAgICAgIGAvZG9tYWlucy8ke2lkfWBcbiAgICAgICk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9KTtcbiAgfVxuICB2ZXJpZnkoaWQpIHtcbiAgICByZXR1cm4gX19hc3luYyh0aGlzLCBudWxsLCBmdW5jdGlvbiogKCkge1xuICAgICAgY29uc3QgZGF0YSA9IHlpZWxkIHRoaXMucmVzZW5kLnBvc3QoXG4gICAgICAgIGAvZG9tYWlucy8ke2lkfS92ZXJpZnlgXG4gICAgICApO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSk7XG4gIH1cbn07XG5cbi8vIHNyYy9lbWFpbHMvZW1haWxzLnRzXG5pbXBvcnQgeyByZW5kZXJBc3luYyBhcyByZW5kZXJBc3luYzIgfSBmcm9tIFwiQHJlYWN0LWVtYWlsL3JlbmRlclwiO1xudmFyIEVtYWlscyA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IocmVzZW5kKSB7XG4gICAgdGhpcy5yZXNlbmQgPSByZXNlbmQ7XG4gIH1cbiAgc2VuZChfMCkge1xuICAgIHJldHVybiBfX2FzeW5jKHRoaXMsIGFyZ3VtZW50cywgZnVuY3Rpb24qIChwYXlsb2FkLCBvcHRpb25zID0ge30pIHtcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZShwYXlsb2FkLCBvcHRpb25zKTtcbiAgICB9KTtcbiAgfVxuICBjcmVhdGUoXzApIHtcbiAgICByZXR1cm4gX19hc3luYyh0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uKiAocGF5bG9hZCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICBpZiAocGF5bG9hZC5yZWFjdCkge1xuICAgICAgICBwYXlsb2FkLmh0bWwgPSB5aWVsZCByZW5kZXJBc3luYzIocGF5bG9hZC5yZWFjdCk7XG4gICAgICAgIGRlbGV0ZSBwYXlsb2FkLnJlYWN0O1xuICAgICAgfVxuICAgICAgY29uc3QgZGF0YSA9IHlpZWxkIHRoaXMucmVzZW5kLnBvc3QoXG4gICAgICAgIFwiL2VtYWlsc1wiLFxuICAgICAgICBwYXlsb2FkLFxuICAgICAgICBvcHRpb25zXG4gICAgICApO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSk7XG4gIH1cbiAgZ2V0KGlkKSB7XG4gICAgcmV0dXJuIF9fYXN5bmModGhpcywgbnVsbCwgZnVuY3Rpb24qICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB5aWVsZCB0aGlzLnJlc2VuZC5nZXQoXG4gICAgICAgIGAvZW1haWxzLyR7aWR9YFxuICAgICAgKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0pO1xuICB9XG59O1xuXG4vLyBzcmMvcmVzZW5kLnRzXG52YXIgZGVmYXVsdEJhc2VVcmwgPSBcImh0dHBzOi8vYXBpLnJlc2VuZC5jb21cIjtcbnZhciBkZWZhdWx0VXNlckFnZW50ID0gYHJlc2VuZC1ub2RlOiR7dmVyc2lvbn1gO1xudmFyIGJhc2VVcmwgPSB0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwcm9jZXNzLmVudiA/IHByb2Nlc3MuZW52LlJFU0VORF9CQVNFX1VSTCB8fCBkZWZhdWx0QmFzZVVybCA6IGRlZmF1bHRCYXNlVXJsO1xudmFyIHVzZXJBZ2VudCA9IHR5cGVvZiBwcm9jZXNzICE9PSBcInVuZGVmaW5lZFwiICYmIHByb2Nlc3MuZW52ID8gcHJvY2Vzcy5lbnYuUkVTRU5EX1VTRVJfQUdFTlQgfHwgZGVmYXVsdFVzZXJBZ2VudCA6IGRlZmF1bHRVc2VyQWdlbnQ7XG52YXIgUmVzZW5kID0gY2xhc3Mge1xuICBjb25zdHJ1Y3RvcihrZXkpIHtcbiAgICB0aGlzLmtleSA9IGtleTtcbiAgICB0aGlzLmFwaUtleXMgPSBuZXcgQXBpS2V5cyh0aGlzKTtcbiAgICB0aGlzLmF1ZGllbmNlcyA9IG5ldyBBdWRpZW5jZXModGhpcyk7XG4gICAgdGhpcy5iYXRjaCA9IG5ldyBCYXRjaCh0aGlzKTtcbiAgICB0aGlzLmNvbnRhY3RzID0gbmV3IENvbnRhY3RzKHRoaXMpO1xuICAgIHRoaXMuZG9tYWlucyA9IG5ldyBEb21haW5zKHRoaXMpO1xuICAgIHRoaXMuZW1haWxzID0gbmV3IEVtYWlscyh0aGlzKTtcbiAgICBpZiAoIWtleSkge1xuICAgICAgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSBcInVuZGVmaW5lZFwiICYmIHByb2Nlc3MuZW52KSB7XG4gICAgICAgIHRoaXMua2V5ID0gcHJvY2Vzcy5lbnYuUkVTRU5EX0FQSV9LRVk7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMua2V5KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnTWlzc2luZyBBUEkga2V5LiBQYXNzIGl0IHRvIHRoZSBjb25zdHJ1Y3RvciBgbmV3IFJlc2VuZChcInJlXzEyM1wiKWAnXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0aGlzLmtleX1gLFxuICAgICAgXCJVc2VyLUFnZW50XCI6IHVzZXJBZ2VudCxcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgfSk7XG4gIH1cbiAgZmV0Y2hSZXF1ZXN0KF8wKSB7XG4gICAgcmV0dXJuIF9fYXN5bmModGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiogKHBhdGgsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChgJHtiYXNlVXJsfSR7cGF0aH1gLCBvcHRpb25zKTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByYXdFcnJvciA9IHlpZWxkIHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgICAgIHJldHVybiB7IGRhdGE6IG51bGwsIGVycm9yOiBKU09OLnBhcnNlKHJhd0Vycm9yKSB9O1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIFN5bnRheEVycm9yKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgICAgICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJhcHBsaWNhdGlvbl9lcnJvclwiLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJJbnRlcm5hbCBzZXJ2ZXIgZXJyb3IuIFdlIGFyZSB1bmFibGUgdG8gcHJvY2VzcyB5b3VyIHJlcXVlc3QgcmlnaHQgbm93LCBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSB7XG4gICAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLnN0YXR1c1RleHQsXG4gICAgICAgICAgICAgIG5hbWU6IFwiYXBwbGljYXRpb25fZXJyb3JcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICByZXR1cm4geyBkYXRhOiBudWxsLCBlcnJvcjogX19zcHJlYWRQcm9wcyhfX3NwcmVhZFZhbHVlcyh7fSwgZXJyb3IpLCB7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBkYXRhOiBudWxsLCBlcnJvciB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4geyBkYXRhLCBlcnJvcjogbnVsbCB9O1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICBuYW1lOiBcImFwcGxpY2F0aW9uX2Vycm9yXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlVuYWJsZSB0byBmZXRjaCBkYXRhLiBUaGUgcmVxdWVzdCBjb3VsZCBub3QgYmUgcmVzb2x2ZWQuXCJcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcG9zdChfMCwgXzEpIHtcbiAgICByZXR1cm4gX19hc3luYyh0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uKiAocGF0aCwgZW50aXR5LCBvcHRpb25zID0ge30pIHtcbiAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0gX19zcHJlYWRWYWx1ZXMoe1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGVudGl0eSlcbiAgICAgIH0sIG9wdGlvbnMpO1xuICAgICAgcmV0dXJuIHRoaXMuZmV0Y2hSZXF1ZXN0KHBhdGgsIHJlcXVlc3RPcHRpb25zKTtcbiAgICB9KTtcbiAgfVxuICBnZXQoXzApIHtcbiAgICByZXR1cm4gX19hc3luYyh0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uKiAocGF0aCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IF9fc3ByZWFkVmFsdWVzKHtcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnNcbiAgICAgIH0sIG9wdGlvbnMpO1xuICAgICAgcmV0dXJuIHRoaXMuZmV0Y2hSZXF1ZXN0KHBhdGgsIHJlcXVlc3RPcHRpb25zKTtcbiAgICB9KTtcbiAgfVxuICBwdXQoXzAsIF8xKSB7XG4gICAgcmV0dXJuIF9fYXN5bmModGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiogKHBhdGgsIGVudGl0eSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IF9fc3ByZWFkVmFsdWVzKHtcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGVudGl0eSlcbiAgICAgIH0sIG9wdGlvbnMpO1xuICAgICAgcmV0dXJuIHRoaXMuZmV0Y2hSZXF1ZXN0KHBhdGgsIHJlcXVlc3RPcHRpb25zKTtcbiAgICB9KTtcbiAgfVxuICBwYXRjaChfMCwgXzEpIHtcbiAgICByZXR1cm4gX19hc3luYyh0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uKiAocGF0aCwgZW50aXR5LCBvcHRpb25zID0ge30pIHtcbiAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0gX19zcHJlYWRWYWx1ZXMoe1xuICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShlbnRpdHkpXG4gICAgICB9LCBvcHRpb25zKTtcbiAgICAgIHJldHVybiB0aGlzLmZldGNoUmVxdWVzdChwYXRoLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgfSk7XG4gIH1cbiAgZGVsZXRlKHBhdGgsIHF1ZXJ5KSB7XG4gICAgcmV0dXJuIF9fYXN5bmModGhpcywgbnVsbCwgZnVuY3Rpb24qICgpIHtcbiAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocXVlcnkpXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHRoaXMuZmV0Y2hSZXF1ZXN0KHBhdGgsIHJlcXVlc3RPcHRpb25zKTtcbiAgICB9KTtcbiAgfVxufTtcbmV4cG9ydCB7XG4gIFJlc2VuZFxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/resend/dist/index.mjs\n");

/***/ })

};
;