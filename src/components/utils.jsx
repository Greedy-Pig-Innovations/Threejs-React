import * as THREE from 'three';

export const createSphere = (size,texture,position,scene,textureLoader) => {
    const geo = new THREE.SphereGeometry(size,64,64)
    const mat= new THREE.MeshBasicMaterial({
        map: textureLoader.load(texture)
    });
    const mesh = new  THREE.Mesh(geo,mat);
    const obj = new THREE.Object3D();
    obj.add(mesh)
    scene.add(obj)
    mesh.position.x = position;
    return {mesh,obj}
}