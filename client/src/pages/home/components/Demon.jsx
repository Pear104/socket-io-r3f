/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/demon/Demon.glb 
*/

import React, { useMemo, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { SkeletonUtils } from "three/examples/jsm/Addons.js";
import { useGraph } from "@react-three/fiber";

export function Demon(props) {
  const group = useRef();
  const { scene, materials, animations } = useGLTF("models/demon/Demon.glb");
  const { actions } = useAnimations(animations, group);
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes } = useGraph(clone);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group
            name="CharacterArmature"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <primitive object={nodes.Root} />
          </group>
          <group name="Demon" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name="Demon_1"
              geometry={nodes.Demon_1.geometry}
              material={materials.Demon_Main}
              skeleton={nodes.Demon_1.skeleton}
            />
            <skinnedMesh
              name="Demon_2"
              geometry={nodes.Demon_2.geometry}
              material={materials.Black}
              skeleton={nodes.Demon_2.skeleton}
            />
            <skinnedMesh
              name="Demon_3"
              geometry={nodes.Demon_3.geometry}
              material={materials.Eye_White}
              skeleton={nodes.Demon_3.skeleton}
            />
            <skinnedMesh
              name="Demon_4"
              geometry={nodes.Demon_4.geometry}
              material={materials.Eye_Black}
              skeleton={nodes.Demon_4.skeleton}
            />
          </group>
          <skinnedMesh
            name="Trident"
            geometry={nodes.Trident.geometry}
            material={materials.Black}
            skeleton={nodes.Trident.skeleton}
            position={[1.895, 1.734, -0.17]}
            scale={75.326}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("models/demon/Demon.glb");
