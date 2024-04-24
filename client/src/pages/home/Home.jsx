import { KeyboardControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Experience } from "./components/Experience";
import SocketManager from "./components/SocketManager";

const map = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
  { name: "rightward", keys: ["ArrowRight", "KeyD"] },
  { name: "jump", keys: ["Space"] },
  { name: "run", keys: ["Shift"] },
  // Optional animation key map
  { name: "action1", keys: ["1"] },
  { name: "action2", keys: ["2"] },
  { name: "action3", keys: ["3"] },
  { name: "action4", keys: ["KeyF"] },
];

export default function Home() {
  return (
    <>
      <SocketManager />
      <Canvas
        camera={{ position: [10, 10, 3], fov: 75 }}
        onPointerDown={(e) => {
          if (e.pointerType === "mouse") {
            e.target.requestPointerLock();
          }
        }}
      >
        <KeyboardControls map={map}>
          <Physics debug>
            <Experience />
          </Physics>
        </KeyboardControls>
      </Canvas>
    </>
  );
}
