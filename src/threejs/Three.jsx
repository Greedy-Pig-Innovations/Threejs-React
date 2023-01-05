import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import { createSphere } from './utils';
import demoTxt from '../assets/demoTxt.jpg'
import { init, controls } from '.';


export function Three() {
let {renderer,scene,textureLoader,camera} = init();
controls(camera,renderer.domElement)


const demoSphere = createSphere(16,demoTxt, 0 ,scene,textureLoader)

function animate() {
    demoSphere.mesh.rotateY(0.004)
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
animate();

window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

}
