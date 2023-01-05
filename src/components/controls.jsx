import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

 const controls = (camera,renderer) => {
// Sets orbit control to move the camera around
const controls = new OrbitControls(camera, renderer);
controls.enablePan = false;
// Camera positioning
controls.update();

    return controls;
}

export default controls;