import * as THREE from 'three';
import { createSphere } from './utils';
import demoTxt from '../assets/demoTxt.jpg'
import { init, controls } from '.';
import Stats from 'three/examples/jsm/libs/stats.module';


export function Three() {
    // destructure properties you want here
let {renderer,scene,textureLoader,camera,ambientLight,directionalLight} = init();
controls(camera,renderer.domElement)

// live fps counter
const stats = Stats();
document.body.appendChild(stats.dom)

//////////////// add below here //////////////////////////

const demoSphere = createSphere(16,demoTxt, 0 ,scene,textureLoader)

function animate() {
    demoSphere.mesh.rotateY(0.004)
    stats.update()
    
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
animate();

}
