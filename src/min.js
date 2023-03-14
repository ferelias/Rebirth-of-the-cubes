const container = document.querySelector('#game-container');

//escena
const scene = new THREE.Scene();
//scene.background = new THREE.Color('rgb(51, 15, 50)')

// camera
const camera = new THREE.PerspectiveCamera(
    35,
    container.clientWidth/container.clientHeight,
    0.1,
    1000
);
camera.position.set(0, 0, 15);
camera.lookAt(0, 0, 0);

// material
const material = new THREE.MeshBasicMaterial({
    color: '#35bbd9',
    transparent: true,
    opacity: 1
    //wireframe: true
});
material.opacity = .7;
const materialStandar = new THREE.MeshStandardMaterial({
    color: '#108f77',
    flatShading: true,
    roughness: 2
});

// mesh
const geometry = new THREE.BoxBufferGeometry(2, 2, 2);
const box_mesh = new THREE.Mesh(geometry, materialStandar);

scene.add(box_mesh);

//mesh 2
const box_mesh_2 = new THREE.Mesh(geometry, material);
box_mesh_2.position.set(-5, 1, 0);
scene.add(box_mesh_2);

//mesh 3
const box_mesh_3 = new THREE.Mesh(geometry, material);
box_mesh_3.position.set(5, 1, 0);
scene.add(box_mesh_3);

//Luces
//const ambient_light =new THREE.AmbientLight('f5248999, .1');
//scene.add(ambient_light);
const hemisphereLight = new THREE.HemisphereLight('#d81774', '#afa9ac', 3);
scene.add(hemisphereLight);

const directionalLight = new THREE.DirectionalLight('#ff80bd', 6);
directionalLight.position.set(.8, 2, 4)
scene.add(directionalLight);

//render
const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    canvas: container
});
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.physicallyCorrectLights = true;

//container.appendChild(renderer.domElement);

// ANimacion mesh1
const update = () => {
    box_mesh.rotateX(0.01);
    box_mesh.rotateY(0.01);
    box_mesh_2.rotateX(0.01);
    box_mesh_2.rotateY(0.01);
    box_mesh_3.rotateX(0.01);
    box_mesh_3.rotateY(0.01);

    renderer.render(scene, camera);

    renderer.setAnimationLoop(() => update());
}
update();


