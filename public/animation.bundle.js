"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunknv_coding"] = self["webpackChunknv_coding"] || []).push([["animation"],{

/***/ "./src/scripts/animationCanvas/animationCanvas.ts":
/*!********************************************************!*\
  !*** ./src/scripts/animationCanvas/animationCanvas.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar logo_webp_1 = __importDefault(__webpack_require__(/*! @/assets/img/animation/logo.webp */ \"./src/assets/img/animation/logo.webp\"));\nvar handshake_webp_1 = __importDefault(__webpack_require__(/*! @/assets/img/animation/handshake.webp */ \"./src/assets/img/animation/handshake.webp\"));\nvar chart_webp_1 = __importDefault(__webpack_require__(/*! @/assets/img/animation/chart.webp */ \"./src/assets/img/animation/chart.webp\"));\nvar animation_1 = __importDefault(__webpack_require__(/*! ./animation */ \"./src/scripts/animationCanvas/animation.js\"));\nvar animationCanvasInit = function () {\n    var containerEl = document.querySelector('.banner-canvas__container');\n    if (!containerEl) {\n        return;\n    }\n    var canvasEl = containerEl.querySelector('.canvas-logo');\n    if (!canvasEl) {\n        return;\n    }\n    var ctx = canvasEl.getContext('2d');\n    var imgArr = [logo_webp_1.default, handshake_webp_1.default, chart_webp_1.default];\n    (0, animation_1.default)(containerEl, canvasEl, ctx, imgArr);\n};\nanimationCanvasInit();\nexports[\"default\"] = animationCanvasInit;\n\n\n//# sourceURL=webpack://nv-coding/./src/scripts/animationCanvas/animationCanvas.ts?");

/***/ }),

/***/ "./src/scripts/animationCanvas/animation.js":
/*!**************************************************!*\
  !*** ./src/scripts/animationCanvas/animation.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n\r\n\r\nconst makeAnimation = (containerEl, canvasEl, ctx, imgArr) => {\r\n  const pics = [...imgArr];\r\n\r\n  const imageRes = 600;\r\n  const resolution = 2;\r\n  const mouseMagnetOriginal = 5000 * resolution;\r\n  const params = {\r\n    radius: 5 * resolution,\r\n    mouseMagnet: mouseMagnetOriginal,\r\n    mouseThreshold: 0.5,\r\n    padding: [0.1, 0.1],\r\n    floatingSpeed: 10,\r\n    floatingDist: 15,\r\n    sizeRandomness: 1,\r\n  };\r\n\r\n  const mouse = {\r\n    x: -100000,\r\n    y: -10000,\r\n  };\r\n\r\n  const data = [];\r\n  let particlesData = [];\r\n  let particlesNumber = 0;\r\n  let activeIdx = 0;\r\n  let size = [];\r\n\r\n  const timeoutDuration = 4;\r\n  const transitionDuration = 1.5;\r\n\r\n  let loadCnt = 0;\r\n  for (let i = 0; i < pics.length; i++) {\r\n    const imgEl = new Image();\r\n    imgEl.src = pics[i];\r\n    data.push([]);\r\n\r\n    imgEl.onload = function () {\r\n      if (loadCnt === 0) {\r\n        imageToParticles(imgEl);\r\n      }\r\n\r\n      sampleCoordinates(imgEl, i);\r\n\r\n      if (loadCnt === pics.length - 1) {\r\n        particlesNumber = Math.max(...data.map((arr) => arr.length));\r\n        particlesData = new Array(particlesNumber).fill(0);\r\n        particlesData = particlesData.map((v, i) => {\r\n          const rad = params.radius * (0.5 + Math.random());\r\n          return {\r\n            color: {\r\n              r: data[activeIdx][i].color.r,\r\n              g: data[activeIdx][i].color.g,\r\n              b: data[activeIdx][i].color.b,\r\n            },\r\n            xy: { x: data[activeIdx][i].xy.x, y: data[activeIdx][i].xy.y },\r\n            base: {\r\n              x: data[activeIdx][i].xy.x,\r\n              y: data[activeIdx][i].xy.y,\r\n            },\r\n            target: {\r\n              x: data[activeIdx][i].xy.x,\r\n              y: data[activeIdx][i].xy.y,\r\n            },\r\n            rand: [Math.random(), Math.random()],\r\n            rBase: rad,\r\n            r: rad,\r\n            speed: 0.5 + 0.5 * Math.random(),\r\n            floatingTimeStart: Math.random() * 2 * Math.PI,\r\n            floatingDist: params.floatingDist * (0.2 + Math.random()),\r\n          };\r\n        });\r\n        gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.ticker.add((t) => {\r\n          drawDots(t);\r\n        });\r\n        gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.set(containerEl, {\r\n          opacity: 1,\r\n        });\r\n        addListeners();\r\n      }\r\n      loadCnt++;\r\n    };\r\n  }\r\n\r\n  const timeout = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.set(switchPicture, {\r\n    delay: timeoutDuration,\r\n    onRepeat: switchPicture,\r\n    repeat: -1,\r\n    repeatDelay: timeoutDuration,\r\n  });\r\n\r\n  canvasEl.addEventListener('click', () => {\r\n    timeout.pause();\r\n    gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.globalTimeline.getChildren().forEach((t) => {\r\n      t.kill();\r\n    });\r\n    switchPicture();\r\n    gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.delayedCall(transitionDuration, () => {\r\n      timeout.play(0);\r\n    });\r\n    gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(params, {\r\n      mouseMagnet: 0,\r\n    });\r\n  });\r\n\r\n  window.addEventListener('resize', () => {});\r\n\r\n  function switchPicture() {\r\n    const prevActiveIdx = activeIdx;\r\n    activeIdx++;\r\n    activeIdx %= pics.length;\r\n\r\n    particlesData.forEach((v, idx) => {\r\n      const d = transitionDuration * (0.5 + Math.random() * 0.5);\r\n      if (data[activeIdx][idx]) {\r\n        gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(v.color, {\r\n          duration: d,\r\n          r: data[activeIdx][idx].color.r,\r\n          g: data[activeIdx][idx].color.g,\r\n          b: data[activeIdx][idx].color.b,\r\n        });\r\n        gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.fromTo(\r\n          v.xy,\r\n          {\r\n            x: data[prevActiveIdx][idx % data[prevActiveIdx].length].xy.x,\r\n            y: data[prevActiveIdx][idx % data[prevActiveIdx].length].xy.y,\r\n          },\r\n          {\r\n            duration: d,\r\n            x: data[activeIdx][idx].xy.x,\r\n            y: data[activeIdx][idx].xy.y,\r\n            ease: 'slow(0.7, 0.7, false)',\r\n          }\r\n        );\r\n        gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(v.base, {\r\n          duration: d,\r\n          x: data[activeIdx][idx].xy.x,\r\n          y: data[activeIdx][idx].xy.y,\r\n        });\r\n        gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(v.target, {\r\n          duration: d,\r\n          x: data[activeIdx][idx].xy.x,\r\n          y: data[activeIdx][idx].xy.y,\r\n        });\r\n        gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(v, {\r\n          r: v.rBase,\r\n        });\r\n      } else {\r\n        gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(v, {\r\n          duration: 0.2,\r\n          r: 0,\r\n        });\r\n        gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(v.xy, {\r\n          duration: d,\r\n          x: data[activeIdx][idx % pics.length].xy.x,\r\n          y: data[activeIdx][idx % pics.length].xy.y,\r\n        });\r\n      }\r\n    });\r\n  }\r\n\r\n  function imageToParticles(img) {\r\n    const imageRatio = img.width / img.height;\r\n    //const pixelWidth = containerEl.clientWidth;\r\n\r\n    size = [imageRes, imageRes / imageRatio];\r\n    size = size.map((v) => resolution * v);\r\n\r\n    canvasEl.width = size[0];\r\n    canvasEl.height = size[1];\r\n    canvasEl.width += 2 * params.padding[0] * size[0];\r\n    canvasEl.height += 2 * params.padding[1] * size[1];\r\n  }\r\n\r\n  function addListeners() {\r\n    containerEl.onmousemove = function (e) {\r\n      if (params.mouseMagnet < mouseMagnetOriginal) {\r\n        gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(params, {\r\n          mouseMagnet: mouseMagnetOriginal,\r\n        });\r\n      }\r\n\r\n      mouse.x = e.offsetX;\r\n      mouse.y = e.offsetY;\r\n      adjustMousePosition();\r\n    };\r\n    containerEl.ontouchmove = function (e) {\r\n      const rect = e.target.getBoundingClientRect();\r\n      mouse.x = e.targetTouches[0].pageX - rect.left;\r\n      mouse.y = e.targetTouches[0].pageY - rect.top;\r\n      adjustMousePosition();\r\n    };\r\n\r\n    containerEl.ontouchstart = function (e) {\r\n      gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(params, {\r\n        mouseMagnet: mouseMagnetOriginal,\r\n      });\r\n      const rect = e.target.getBoundingClientRect();\r\n      mouse.x = e.targetTouches[0].pageX - rect.left;\r\n      mouse.y = e.targetTouches[0].pageY - rect.top;\r\n      adjustMousePosition();\r\n    };\r\n\r\n    containerEl.ontouchend = function () {\r\n      gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(params, {\r\n        mouseMagnet: 0,\r\n      });\r\n    };\r\n\r\n    function adjustMousePosition() {\r\n      mouse.x *= 1 + 2 * params.padding[0];\r\n      mouse.y *= 1 + 2 * params.padding[1];\r\n      mouse.x *= resolution;\r\n      mouse.y *= resolution;\r\n      mouse.x *= imageRes / containerEl.clientWidth;\r\n      mouse.y *= imageRes / containerEl.clientWidth;\r\n    }\r\n  }\r\n\r\n  function shuffleArray(array) {\r\n    for (let i = array.length - 1; i > 0; i--) {\r\n      const j = Math.floor(Math.random() * (i + 1));\r\n      [array[i], array[j]] = [array[j], array[i]];\r\n    }\r\n    return array;\r\n  }\r\n\r\n  function sampleCoordinates(img, idx) {\r\n    ctx.drawImage(\r\n      img,\r\n      params.padding[0] * size[0],\r\n      params.padding[1] * size[1],\r\n      size[0],\r\n      size[1]\r\n    );\r\n\r\n    const imageData = ctx.getImageData(0, 0, canvasEl.width, canvasEl.height);\r\n\r\n    const step = 4 * (idx === 1 ? 2 : 2.5) * resolution;\r\n    const start = Math.ceil(params.radius);\r\n    const endHeight = Math.floor(canvasEl.height - params.radius);\r\n    const endWidth = Math.floor(canvasEl.width - params.radius);\r\n    for (let i = start; i < endHeight; i += step) {\r\n      for (let j = start; j < endWidth; j += step) {\r\n        const whiteLimit = 120;\r\n        const isBack =\r\n          imageData.data[(j + i * canvasEl.width) * 4] > whiteLimit &&\r\n          imageData.data[(j + i * canvasEl.width) * 4 + 1] > whiteLimit &&\r\n          imageData.data[(j + i * canvasEl.width) * 4 + 2] > whiteLimit;\r\n        const isTransparent =\r\n          imageData.data[(j + i * canvasEl.width) * 4 + 3] < 0.5;\r\n        if (!isBack && !isTransparent) {\r\n          data[idx].push({\r\n            xy: { x: j, y: i },\r\n            color: {\r\n              r: imageData.data[(j + i * canvasEl.width) * 4],\r\n              g: imageData.data[(j + i * canvasEl.width) * 4 + 1],\r\n              b: imageData.data[(j + i * canvasEl.width) * 4 + 2],\r\n            },\r\n            base: { x: j, y: i },\r\n          });\r\n        }\r\n      }\r\n\r\n      data[idx] = shuffleArray(data[idx]);\r\n    }\r\n  }\r\n\r\n  function drawDots(t) {\r\n    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);\r\n\r\n    for (let i = 0; i < particlesNumber; i++) {\r\n      const d = particlesData[i];\r\n      ctx.fillStyle = `rgb(${d.color.r}, ${d.color.g}, ${d.color.b})`;\r\n\r\n      const dX = mouse.x - d.target.x;\r\n      const dY = mouse.y - d.target.y;\r\n\r\n      const sqDist = dX * dX + dY * dY;\r\n\r\n      let floatingOffset = [\r\n        (d.rand[0] > 0.5 ? -1 : 1) *\r\n          Math.sin(params.floatingSpeed * d.speed * t + d.floatingTimeStart) *\r\n          d.floatingDist,\r\n        (d.rand[1] > 0.5 ? -1 : 1) *\r\n          Math.cos(params.floatingSpeed * d.speed * t + d.floatingTimeStart) *\r\n          d.floatingDist,\r\n      ];\r\n      floatingOffset = floatingOffset.map((v) =>\r\n        activeIdx === 2 ? v * 0.5 : v\r\n      );\r\n\r\n      const mouseOffset = [\r\n        (params.mouseMagnet * dX) / sqDist,\r\n        (params.mouseMagnet * dY) / sqDist,\r\n      ];\r\n\r\n      d.target.x = d.base.x + floatingOffset[0] - mouseOffset[0];\r\n      d.target.y = d.base.y + floatingOffset[1] - mouseOffset[1];\r\n\r\n      d.xy.x += (d.target.x - d.xy.x) * params.mouseThreshold;\r\n      d.xy.y += (d.target.y - d.xy.y) * params.mouseThreshold;\r\n\r\n      let radius = d.r;\r\n      if (activeIdx === 1) {\r\n        radius *= 0.8;\r\n      } else if (activeIdx === 3) {\r\n        radius = radius * 0.5 + 1;\r\n      }\r\n\r\n      ctx.beginPath();\r\n      ctx.arc(d.xy.x, d.xy.y, radius, 0, Math.PI * 2, true);\r\n      ctx.closePath();\r\n      ctx.fill();\r\n    }\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeAnimation);\r\n\n\n//# sourceURL=webpack://nv-coding/./src/scripts/animationCanvas/animation.js?");

/***/ }),

/***/ "./src/assets/img/animation/chart.webp":
/*!*********************************************!*\
  !*** ./src/assets/img/animation/chart.webp ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"./assets/img/animation/chart.webp\";\n\n//# sourceURL=webpack://nv-coding/./src/assets/img/animation/chart.webp?");

/***/ }),

/***/ "./src/assets/img/animation/handshake.webp":
/*!*************************************************!*\
  !*** ./src/assets/img/animation/handshake.webp ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"./assets/img/animation/handshake.webp\";\n\n//# sourceURL=webpack://nv-coding/./src/assets/img/animation/handshake.webp?");

/***/ }),

/***/ "./src/assets/img/animation/logo.webp":
/*!********************************************!*\
  !*** ./src/assets/img/animation/logo.webp ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"./assets/img/animation/logo.webp\";\n\n//# sourceURL=webpack://nv-coding/./src/assets/img/animation/logo.webp?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__("./src/scripts/animationCanvas/animationCanvas.ts")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);