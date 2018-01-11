/// <reference types="three" />

import Menu from "./navigation/Menu";

require("../index.html");
require("../styles/main.scss");

console.log("ok");

const menu = new Menu();



declare global {
    const THREE: THREE;
}

let container: any;
let stats: any;

let camera: any;
let scene: any;
let renderer: any;
let toilette: any;

let mouseX = 0;
let mouseY = 0;

let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;


init();
animate();


function init() {

    container = document.createElement( 'div' );
    document.body.appendChild( container );

    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
    camera.position.z = 250;

    // scene

    scene = new THREE.Scene();

    var ambientLight = new THREE.AmbientLight( 0xffffFF, 0.8 );
    scene.add( ambientLight );

    var pointLight = new THREE.PointLight( 0x0400FF, 0.2 );
    camera.add( pointLight );
    scene.add( camera );

    // model

    var onProgress = function ( xhr: any ) {
        if ( xhr.lengthComputable ) {
            var percentComplete = xhr.loaded / xhr.total * 100;
            console.log( Math.round(percentComplete) + '% downloaded' );
        }
    };

    var onError = function ( xhr: any ) { };

    THREE.Loader.Handlers.add( /\.dds$/i, new THREE.DDSLoader() );

    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setPath( 'dist/3D/' );
    mtlLoader.load( 'cafet.mtl', function( materials: any ) {

        materials.preload();

        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials( materials );
        objLoader.setPath( 'dist/3D/' );
        objLoader.load( 'cafet.obj', function ( object: any ) {
            toilette = object;

            toilette.scale.set(500,500,500);
            object.position.y = 0;
            object.rotateZ(20);
            object.rotateY(100);
            object.rotateX(90);

            scene.add( object );

        }, onProgress, onError );

    });

    //

    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.insertBefore(renderer.domElement, document.querySelector(".menu"));
    document.addEventListener( 'mousemove', onDocumentMouseMove, false );

    //

    window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

function onDocumentMouseMove( event: any ) {

    mouseX = ( event.clientX - windowHalfX ) / 2;
    mouseY = ( event.clientY - windowHalfY ) / 2;

}

//

function animate() {

    requestAnimationFrame( animate );
    render();

}

function render() {

    camera.position.x += ( mouseX - camera.position.x ) * .05;
    camera.position.y += ( - mouseY - camera.position.y ) * .05;

    if(typeof toilette !== "undefined") {
        camera.lookAt( toilette.position );
    }

    renderer.render( scene, camera );

}
