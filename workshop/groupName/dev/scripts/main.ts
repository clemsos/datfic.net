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

let camera: THREE.Camera;
let scene: any;
let renderer: any;

let mouseX = 0;
let mouseY = 0;

let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

let ambientLight: any;
let pointLight: any;


init();
animate();


function init() {

    container = document.createElement( 'div' );
    document.body.appendChild( container );

    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 250;

    // scene

    scene = new THREE.Scene();

    ambientLight = new THREE.AmbientLight( 0x0400FF, 0.5 );
    ambientLight.position.setY(100);
    scene.add( ambientLight );

    pointLight = new THREE.PointLight( 0xFFFFFF, 1 );
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


    // object loader


    const modelPath = "dist/3D/";
    function createObject(nameWithoutExtention: string, callback: (object: THREE.Object3D) => void) {
        const mtlLoader = new THREE.MTLLoader();
        mtlLoader.setPath( modelPath );
        mtlLoader.load( `${nameWithoutExtention}.mtl`, function( materials: THREE.MaterialCreator ) {
            materials.preload();
            const objLoader = new THREE.OBJLoader();
            objLoader.setMaterials( materials );
            objLoader.setPath( modelPath );
            objLoader.load( `${nameWithoutExtention}.obj`, function ( object: THREE.Object3D ) {
                callback(object);
            }, onProgress, onError );

        });
    }

    let cafet: THREE.Object3D;
    createObject("cafet", (object) => {
        cafet = object;
        cafet.scale.set(200, 200, 200);
        cafet.position.x = -50;
        cafet.position.y = 50;
        cafet.position.z = -100;
        cafet.rotateZ(0);
        cafet.rotateY(0);
        cafet.rotateX(0);
        scene.add( cafet );
    });

    let client1: THREE.Object3D;
    createObject("client1", (object) => {
        client1 = object;
        client1.scale.set(100, 100, 100);
        client1.position.x = 150;
        client1.position.y = 0;
        client1.rotateZ(0);
        client1.rotateY(0);
        client1.rotateX(0);
        scene.add( client1 );
    });

    let client2: THREE.Object3D;
    createObject("client2", (object) => {
        client2 = object;
        client2.scale.set(100, 100, 100);
        client2.position.x = -150;
        client2.position.y = 0;
        client2.rotateZ(0);
        client2.rotateY(0);
        client2.rotateX(0);
        scene.add( client2 );
    });

    // let espace1: THREE.Object3D;
    // createObject("espace1", (object) => {
    //     espace1 = object;
    //     espace1.scale.set(200, 200, 200);
    //     espace1.position.x = 0;
    //     espace1.position.y = 0;
    //     espace1.rotateZ(0);
    //     espace1.rotateY(0);
    //     espace1.rotateX(0);
    //     scene.add( espace1 );
    // });

    let espacetoilet: THREE.Object3D;
    createObject("espacetoilet", (object) => {
        espacetoilet = object;
        espacetoilet.scale.set(20, 20, 20);
        espacetoilet.position.x = 0;
        espacetoilet.position.y = 0;
        espacetoilet.rotateZ(0);
        espacetoilet.rotateY(0);
        espacetoilet.rotateX(0);
        scene.add( espacetoilet );
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

    // camera.aspect = window.innerWidth / window.innerHeight;
    // camera.updateProjectionMatrix();

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

    // console.log(`x: ${camera.position.x} | y: ${camera.position.y} | z: ${camera.position.z}`);

    pointLight.position.x = mouseX * 10;
    console.log(pointLight.position.x);

    camera.lookAt( new THREE.Vector3(0, 0, 0) );

    renderer.render( scene, camera );

}
