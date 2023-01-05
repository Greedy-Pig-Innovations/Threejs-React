import * as THREE from 'three';

export const createSphere = (size,texture,position,scene,textureLoader) => {
    //cretaes new sphere with an unseeable object, this allows for the sphere to be its own axis, say if planning to revolve
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