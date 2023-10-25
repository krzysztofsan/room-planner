import * as THREE from "three";
import { colors } from "../theme/colors";

const WALL_HEIGHT = 1;
const WALL_COLOR = colors.bisque;

const frontWallMaterial = new THREE.MeshStandardMaterial({
  color: WALL_COLOR,
});

const backWallMaterial = new THREE.MeshStandardMaterial({
  color: WALL_COLOR,
  transparent: true,
  opacity: 0.5,
});

const prepareWall = (
  width: number,
  position: { x: number; z: number },
  rotation: 0 | 90 | 180 | 270
) => {
  const geometry = new THREE.PlaneGeometry(width, WALL_HEIGHT);

  const frontWall = new THREE.Mesh(geometry, frontWallMaterial);
  frontWall.position.set(position.x, WALL_HEIGHT / 2, position.z);
  frontWall.rotation.set(0, THREE.MathUtils.degToRad(rotation), 0);

  const backWall = new THREE.Mesh(geometry, backWallMaterial);
  backWall.position.set(position.x, WALL_HEIGHT / 2, position.z);
  backWall.rotation.set(0, THREE.MathUtils.degToRad(rotation - 180), 0);

  const wallGroup = new THREE.Group();

  wallGroup.add(frontWall);
  wallGroup.add(backWall);

  return wallGroup;
};

export { prepareWall };
