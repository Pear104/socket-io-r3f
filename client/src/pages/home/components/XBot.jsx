/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/xbot/xbot.gltf 
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";

export function XBot(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("models/xbot/xbot.gltf");
  const { actions, names } = useAnimations(animations, group);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="Beta_Joints"
            geometry={nodes.Beta_Joints.geometry}
            material={materials["Beta_Joints_MAT1.004"]}
            skeleton={nodes.Beta_Joints.skeleton}
          />
          <skinnedMesh
            name="Beta_Surface"
            geometry={nodes.Beta_Surface.geometry}
            material={materials["Beta_HighLimbsGeoSG3.004"]}
            skeleton={nodes.Beta_Surface.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("models/xbot/xbot.gltf");