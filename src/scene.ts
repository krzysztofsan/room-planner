import * as THREE from "three";

const prepareScene = () => {
  // TODO: make sure canvas element is defined
  const canvas = document.querySelector("#scene")! as HTMLCanvasElement;
  const body = document.querySelector("body")!;

  const view = {
    width: body.clientWidth,
    height: body.clientHeight,
  };

  canvas.width = view.width;
  canvas.height = view.height;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });

  const size = 30;
  const aspect = canvas.clientWidth / canvas.clientHeight;

  const width = size;
  const height = size / aspect;

  const near = 0.1;
  const far = 100;
  const camera = new THREE.OrthographicCamera(
    -width / 2,
    width / 2,
    height / 2,
    -height / 2,
    near,
    far
  );

  camera.position.z = 10;
  camera.position.x = 10;
  camera.position.y = 10;

  camera.lookAt(new THREE.Vector3(0, 0, 0));

  const scene = new THREE.Scene();

  scene.background = new THREE.Color("#FFFFFF");

  return {
    renderer,
    scene,
    camera,
  };
};

const prepareLight = () => {
  const color = 0xffffff;
  const intensity = 1;
  const light = new THREE.RectAreaLight(color, intensity, 500, 500);

  light.position.set(0, 0, 100);
  light.rotation.y = THREE.MathUtils.degToRad(30);
  light.rotation.x = THREE.MathUtils.degToRad(-30);

  return light;
};

export { prepareScene, prepareLight };
