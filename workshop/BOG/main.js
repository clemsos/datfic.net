/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Menu_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __webpack_require__(2);
    __webpack_require__(5);
    console.log("ok");
    var menu = new Menu_1.default();
    var container;
    var camera;
    var scene;
    var renderer;
    var mouseX = 0;
    var mouseY = 0;
    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;
    var ambientLight;
    var pointLight;
    init();
    animate();
    function init() {
        container = document.createElement('div');
        document.body.appendChild(container);
        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
        camera.position.x = 0;
        camera.position.y = 0;
        camera.position.z = 250;
        scene = new THREE.Scene();
        ambientLight = new THREE.AmbientLight(0x0400FF, 0.5);
        ambientLight.position.setY(100);
        scene.add(ambientLight);
        pointLight = new THREE.PointLight(0xFFFFFF, 1);
        camera.add(pointLight);
        scene.add(camera);
        var onProgress = function (xhr) {
            if (xhr.lengthComputable) {
                var percentComplete = xhr.loaded / xhr.total * 100;
                console.log(Math.round(percentComplete) + '% downloaded');
            }
        };
        var onError = function (xhr) { };
        THREE.Loader.Handlers.add(/\.dds$/i, new THREE.DDSLoader());
        var modelPath = "dist/3D/";
        function createObject(nameWithoutExtention, callback) {
            var mtlLoader = new THREE.MTLLoader();
            mtlLoader.setPath(modelPath);
            mtlLoader.load(nameWithoutExtention + ".mtl", function (materials) {
                materials.preload();
                var objLoader = new THREE.OBJLoader();
                objLoader.setMaterials(materials);
                objLoader.setPath(modelPath);
                objLoader.load(nameWithoutExtention + ".obj", function (object) {
                    callback(object);
                }, onProgress, onError);
            });
        }
        var cafet;
        createObject("sphere", function (object) {
            cafet = object;
            cafet.scale.set(50, 50, 50);
            cafet.position.x = -50;
            cafet.position.y = 50;
            cafet.position.z = -100;
            cafet.rotateZ(0);
            cafet.rotateY(0);
            cafet.rotateX(0);
            scene.add(cafet);
        });
        var client1;
        createObject("strange", function (object) {
            client1 = object;
            client1.scale.set(50, 50, 50);
            client1.position.x = 150;
            client1.position.y = 0;
            client1.rotateZ(0);
            client1.rotateY(0);
            client1.rotateX(0);
            scene.add(client1);
        });
        var client2;
        createObject("suzanne", function (object) {
            client2 = object;
            client2.scale.set(50, 50, 50);
            client2.position.x = -150;
            client2.position.y = 0;
            client2.rotateZ(0);
            client2.rotateY(0);
            client2.rotateX(0);
            scene.add(client2);
        });
        var espacetoilet;
        createObject("torus", function (object) {
            espacetoilet = object;
            espacetoilet.scale.set(20, 20, 20);
            espacetoilet.position.x = 0;
            espacetoilet.position.y = 0;
            espacetoilet.rotateZ(0);
            espacetoilet.rotateY(0);
            espacetoilet.rotateX(0);
            scene.add(espacetoilet);
        });
        renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.insertBefore(renderer.domElement, document.querySelector(".menu"));
        document.addEventListener('mousemove', onDocumentMouseMove, false);
        window.addEventListener('resize', onWindowResize, false);
    }
    function onWindowResize() {
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
    function onDocumentMouseMove(event) {
        mouseX = (event.clientX - windowHalfX) / 2;
        mouseY = (event.clientY - windowHalfY) / 2;
    }
    function animate() {
        requestAnimationFrame(animate);
        render();
    }
    function render() {
        camera.position.x += (mouseX - camera.position.x) * .05;
        camera.position.y += (-mouseY - camera.position.y) * .05;
        pointLight.position.x = mouseX * 10;
        console.log(pointLight.position.x);
        camera.lookAt(new THREE.Vector3(0, 0, 0));
        renderer.render(scene, camera);
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Menu = (function () {
        function Menu() {
            var menu = document.querySelector(".menu");
            var sections = document.querySelectorAll("main section");
            for (var i = 0; i < sections.length; i++) {
                var section = sections[i];
                var menuButtonElement = document.createElement("div");
                menuButtonElement.className = "menu-button " + section.className;
                menuButtonElement.dataset.sectionCible = section.className;
                menuButtonElement.innerHTML = section.dataset.name;
                menu.appendChild(menuButtonElement);
                console.log(section.className);
            }
        }
        return Menu;
    }());
    exports.default = Menu;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>application</title>\n    <style>\n        @font-face {\n            font-family: \"Gill_Facia\";\n            src: url(\"dist/Gill_Facia/34A36B_1_0.ttf\");\n            font-style: normal;\n        }\n        html {\n            font-family: Gill_Facia;\n        }\n    </style>\n</head>\n<body>\n    <aside class=\"menu not-home\">\n    </aside>\n    <main>\n        <section class=\"intro\" data-name=\"intro\">\n            <div class=\"box\"></div>\n            <div class=\"container\">\n                <h1 class=\"bog\">BOG</h1>\n                <div class=\"subtitle\">\n                    <div class=\"subtitle-offset\"></div>\n                    <h2><span>Connecting to</span><br>\n                        <span>an Intelligent Future</span><br>\n                    </h2>\n                </div>\n            </div>\n        </section>\n\n        <div class=\"next\"></div>\n\n        <section class=\"product-description\" data-name=\"description\">\n            <div class=\"box\"></div>\n            <div class=\"container\">\n                <h1>Smart Building</h1>\n                <div class=\"subtitle\">\n                    <div class=\"subtitle-offset\"></div>\n                    <h2><span></span><br>\n                        <span>let it guide you through your day</span><br>\n                        <span>and you will not be disappointed.</span>\n                    </h2>\n                </div>\n            </div>\n        </section>\n\n        <div class=\"next\"></div>\n\n        <section class=\"about\" data-name=\"about\">\n            <div class=\"box\"></div>\n            <div class=\"container\">\n                <h1>about</h1>\n                <div class=\"subtitle\">\n                    <div class=\"subtitle-offset\"></div>\n                    <h2><span></span><br>\n                        <span>let it guide you through your day</span><br>\n                        <span>and you will not be disappointed.</span>\n                    </h2>\n                </div>\n            </div>\n            <img src=\"" + __webpack_require__(3) + "\" class=\"diagram\">\n        </section>\n        <section class=\"about\" data-name=\"about\">\n            <div class=\"box\"></div>\n            <img src=\"" + __webpack_require__(4) + "\" class=\"diagram-second\">\n        </section>\n\n        <div class=\"next\"></div>\n\n        <section class=\"use-case-first\" data-name=\"use case 1\">\n            <div class=\"box\"></div>\n            <div class=\"container\">\n                <h1>use case 1</h1>\n                <div class=\"subtitle\">\n                    <div class=\"subtitle-offset\"></div>\n                    <h2><span></span><br>\n                        <span>let it guide you through your day</span><br>\n                        <span>and you will not be disappointed.</span>\n                    </h2>\n                </div>\n            </div>\n            <video autoplay loop class=\"video-cafet\">\n                <source src=\"dist/video/cafet.mp4\" type=\"video/mp4\">\n            </video>\n        </section>\n        <section class=\"use-case-second\" data-name=\"use case 2\">\n            <div class=\"box\"></div>\n            <div class=\"container\">\n                <h1>use case 2</h1>\n                <div class=\"subtitle\">\n                    <div class=\"subtitle-offset\"></div>\n                    <h2><span></span><br>\n                        <span>let it guide you through your day</span><br>\n                        <span>and you will not be disappointed.</span>\n                    </h2>\n                </div>\n            </div>\n            <video autoplay loop class=\"video-enter\">\n                <source src=\"dist/video/enter.mp4\" type=\"video/mp4\">\n            </video>\n        </section>\n\n        <div class=\"next\"></div>\n\n        <section class=\"temoignage\" data-name=\"temoignage\">\n            <div class=\"box\"></div>\n            <div class=\"container\">\n                <h1>temoignage</h1>\n                <div class=\"subtitle\">\n                    <div class=\"subtitle-offset\"></div>\n                    <h2><span></span><br>\n                        <span>let it guide you through your day</span><br>\n                        <span>and you will not be disappointed.</span>\n                    </h2>\n                </div>\n            </div>\n        </section>\n\n        <div class=\"next\"></div>\n\n        <section class=\"partenariat\" data-name=\"partenariat\">\n            <div class=\"box\"></div>\n            <div class=\"container\">\n                <h1>partenariat</h1>\n                <div class=\"subtitle\">\n                    <div class=\"subtitle-offset\"></div>\n                    <h2><span></span><br>\n                        <span>let it guide you through your day</span><br>\n                        <span>and you will not be disappointed.</span>\n                    </h2>\n                </div>\n            </div>\n        </section>\n\n        <div class=\"next\"></div>\n\n        <section class=\"certification\" data-name=\"certification\">\n            <h1>certification</h1>\n        </section>\n\n        <div class=\"next\"></div>\n\n        <section class=\"team-description\" data-name=\"team description\">\n            <h1>team-description</h1>\n        </section>\n    </main>\n    <footer></footer>\n\n    <script type=\"text/javascript\" src=\"dist/three/build/three.min.js\"></script>\n    <script src=\"dist/three/examples/js/loaders/DDSLoader.js\"></script>\n    <script src=\"dist/three/examples/js/loaders/MTLLoader.js\"></script>\n    <script src=\"dist/three/examples/js/loaders/OBJLoader.js\"></script>\n</body>\n</html>";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/image.png";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/image1.png";

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);