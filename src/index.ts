import * as THREE from "three";
import { prepareScene, prepareLight } from "./scene";
import { prepareWall } from "./objects/wall";
import { prepareFloor } from "./objects/floor";

const { renderer, scene, camera } = prepareScene();
const light = prepareLight();

scene.add(light);

// Demo cube - TODO: remove
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0xf4aa28 });
const cube = new THREE.Mesh(geometry, material);

cube.position.y = 1;

scene.add(cube);

// Grid
const grid = new THREE.GridHelper(100, 200);

scene.add(grid);

// Walls
scene.add(prepareWall(10, { x: -5, z: 0 }, 90));
scene.add(prepareWall(10, { x: 0, z: -5 }, 0));
scene.add(prepareWall(10, { x: 5, z: 0 }, 270));
scene.add(prepareWall(10, { x: 0, z: 5 }, 180));
//

// Floor
scene.add(prepareFloor({ x: 10, z: 10 }, { x: 0, z: 0 }));

// Axes - TODO: remove
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);
//

renderer.render(scene, camera);

function render(time: number) {
  time *= 0.001; // convert time to seconds

  cube.rotation.x = time / 3;
  cube.rotation.y = time / 2;

  renderer.render(scene, camera);

  requestAnimationFrame(render);
}
requestAnimationFrame(render);
