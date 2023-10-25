import * as THREE from "three";
import { colors } from "../theme/colors";

const FLOOR_COLOR = colors.frenchBeige;

const prepareFloor = (
  size: { x: number; z: number; },
  position: { x: number; z: number }
) => {
  const geometry = new THREE.PlaneGeometry(size.x, size.z);

  const floor = new THREE.Mesh(
    geometry,
    new THREE.MeshStandardMaterial({
      color: FLOOR_COLOR,
    })
  );

  floor.position.set(position.x, 0, position.z);
  floor.rotation.x = THREE.MathUtils.degToRad(-90);

  return floor;
};

export { prepareFloor };
