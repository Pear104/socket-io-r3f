import { Box, OrbitControls } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import { Demon } from "./Demon";
import { useAtom } from "jotai";
import { charactersAtom, socket } from "./SocketManager";
import { useRef } from "react";
import * as THREE from "three";
// import { useFrame } from "@react-three/fiber";

const animationSet = {
  idle: "CharacterArmature|Idle",
  walk: "CharacterArmature|Walk",
  run: "CharacterArmature|Run",
  jump: "CharacterArmature|Jump",
  jumpIdle: "CharacterArmature|Jump_Idle",
  jumpLand: "CharacterArmature|Jump_Land",
  fall: "CharacterArmature|Duck", // This is for falling from high sky
  action1: "CharacterArmature|Wave",
  action2: "CharacterArmature|Death",
  action3: "CharacterArmature|HitReact",
  action4: "CharacterArmature|Punch",
};
// const characterURL = "./models/xbot/xbot.gltf";
const characterURL = "./models/demon/Demon.glb";
const ControlledCharacter = () => {
  const charRef = useRef();
  window.onkeydown = (e) => {
    console.log(charRef.current);
    console.log(charRef.current.position);
  };
  return (
    <group ref={charRef}>
      <Ecctrl
        // debug
        animated
        floatHeight={0}
        followLight
        springK={2}
        dampingC={0.2}
        autoBalanceSpringK={1.2}
        autoBalanceDampingC={0.04}
        autoBalanceSpringOnY={0.7}
      >
        <EcctrlAnimation
          characterURL={characterURL}
          animationSet={animationSet}
        >
          <Demon position={[0, -0.65, 0]} />
        </EcctrlAnimation>
      </Ecctrl>
    </group>
  );
};

export const Experience = () => {
  const [characters] = useAtom(charactersAtom);

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={5} />
      <RigidBody type="fixed">
        <Box args={[10, 1, 10]} position={[0, 0, 0]}>
          <meshStandardMaterial color={"green"} />
        </Box>
      </RigidBody>
      <ControlledCharacter />
      {characters
        .filter((char) => char.id != socket.id)
        .map((char) => (
          <Demon key={char.id} position={[0, 0.52, 0]} />
        ))}
    </>
  );
};
