import { Box, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { useControls } from "leva";
import { useRef } from "react";

const Experience = () => {
  // const values = useControls({
  //   foo: {
  //     min: 0,
  //     max: Math.PI,
  //   },
  // });
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.4} />
      <directionalLight position={[-10, 10, 0]} intensity={0.4} />

      {/* <RigidBody type="dynamic" colliders={"ball"}>
        <Sphere args={[1, 32, 32]} position={[0, 10, 0]}>
          <meshStandardMaterial color={"blue"} />
        </Sphere>
      </RigidBody> */}

      <RigidBody type="dynamic" colliders={"ball"} restitution={2}>
        <Sphere args={[1, 32, 32]} position={[0, 10, 0]}>
          <meshStandardMaterial color={"red"} />
        </Sphere>
      </RigidBody>

      {/* <RigidBody type="dynamic">
        <Box args={[1, 1, 1]} position={[0, 8, 0]}>
          <meshStandardMaterial color={"red"} />
        </Box>
      </RigidBody> */}

      <RigidBody type="fixed">
        <Box args={[10, 1, 10]} position={[0, 0, 0]}>
          <meshStandardMaterial color={"green"} />
        </Box>
      </RigidBody>
    </>
  );
};

export default function Test() {
  return (
    <Canvas camera={{ position: [10, 10, 3], fov: 30 }}>
      <Physics debug>
        <Experience />
      </Physics>
    </Canvas>
  );
}
