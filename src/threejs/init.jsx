import * as THREE from 'three';

 const init = () => {
    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    const scene = new THREE.Scene();
    const textureLoader = new THREE.TextureLoader();
    const camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.set(-90, 140, 140);

        return {renderer,scene,textureLoader,camera}
}

export default init;