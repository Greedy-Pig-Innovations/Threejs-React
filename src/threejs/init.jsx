import * as THREE from 'three';


 const init = () => {
      // Creates a new canvas NOTE: Anti-aliasing smooths out the edges.
    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    // Creates a new scene, texture loader, and camera
    const scene = new THREE.Scene();
    const textureLoader = new THREE.TextureLoader();
    const camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.set(-90, 140, 140);

      // Ambient light which is for the whole scene
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    // directional light - parallel sun rays
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    // directionalLight.castShadow = true;
    directionalLight.position.set(0, 32, 64);
    scene.add(directionalLight);



    // if window resizes
    window.addEventListener('resize', function() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
});

        //retuns values to be used in three.js
        return {renderer,scene,textureLoader,camera,ambientLight,directionalLight}
}

export default init;