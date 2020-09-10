import React, {useRef} from 'react';
import * as THREE from "three";
import { CubeTextureLoader, Sphere } from "three";
import { MTLLoader,  OBJLoader } from "three-obj-mtl-loader";
import {useThree, Canvas, extend, useFrame} from "react-three-fiber";
import {CubeCamera, WebGLCubeRenderTarget, RGBFormat, LinearMipmapLinearFilter} from "three";
import OrbitControls from "three-orbitcontrols";
import NavBar from '../NavBar/NavBar';
import './StoryMode.scss';
import cors from "cors";

extend({ OrbitControls });

cors();

class StoryMode extends React.Component{
    componentDidMount(){
      //Scene
      const width = this.mount.clientWidth;
      const height = this.mount.clientHeight;
      this.scene = new THREE.Scene();

      //Render
      this.renderer = new THREE.WebGLRenderer({antialias: true});
      this.renderer.setSize(width, height);
      this.mount.appendChild(this.renderer.domElement);

      //Camera
      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,
        0.1,
        1000
        );
        this.camera.position.z = 1;
        this.camera.position.x = 1;
        // this.camera.position.y = -10;

        //Controls
        const controls = new OrbitControls(this.camera, this.renderer.domElement);

        ///
        ///
        //SkyBox

        // let skyBoxArray = [];

        // let skyImg1 = new THREE.TextureLoader().load('./skybox-mainFront.png');
        // let skyImg2 = new THREE.TextureLoader().load('./skybox-back.png');
        // let skyImg3 = new THREE.TextureLoader().load('./skybox-ceiling.png');
        // let skyImg4 = new THREE.TextureLoader().load('./skybox-floor.png');
        // let skyImg5 = new THREE.TextureLoader().load('./skybox-sideRight.png');
        // let skyImg6 = new THREE.TextureLoader().load('./skybox-sideLeft.png');

        // skyBoxArray.push(new THREE.MeshBasicMaterial({map: skyImg1}));
        // skyBoxArray.push(new THREE.MeshBasicMaterial({map: skyImg2}));
        // skyBoxArray.push(new THREE.MeshBasicMaterial({map: skyImg3}));
        // skyBoxArray.push(new THREE.MeshBasicMaterial({map: skyImg4}));
        // skyBoxArray.push(new THREE.MeshBasicMaterial({map: skyImg5}));
        // skyBoxArray.push(new THREE.MeshBasicMaterial({map: skyImg6}));

        // let skyBoxGeometry = new THREE.BoxBufferGeometry(10000,10000,10000);
        // let skyBoxBox = new THREE.Mesh(skyBoxGeometry, skyBoxArray);
        // this.scene.add( skyBoxBox );
        // this.animate();

        // const loader = new THREE.CubeTextureLoader();
        // const texture = loader.load([
        //   './skybox-mainFront.png',
        //   './skybox-back.png',
        //   './skybox-ceiling.png',
        //   './skybox-floor.png',
        //   './skybox-sideRight.png',
        //   './skybox-sideLeft.png',
        // ])
        // this.scene.background = texture;
     


        ///
        ///
        ///

        

        //Lighting
        var light = []
        light[0]=new THREE.PointLight(0xffffff, 1, 0);
        light[1]=new THREE.PointLight(0xffffff, 1, 0);
        light[2]=new THREE.PointLight(0xffffff, 1, 0);
        light[3]=new THREE.PointLight(0xffffff, 1, 0);
        light[4]=new THREE.PointLight(0xffffff, 1, 0);
        light[5]=new THREE.PointLight(0xffffff, 1, 0);
        light[0].position.set(50,50,50);
        light[1].position.set(0,50,0);
        light[2].position.set(0,0,50);
        light[3].position.set(50,0,0);
        light[4].position.set(-50,-50,0);
        light[5].position.set(50,50,0);
        // this.scene.add(light[0]);
        // this.scene.add(light[1]);
        // this.scene.add(light[2]);
        // this.scene.add(light[3]);
        this.scene.add(light[4]);
        this.scene.add(light[5]);


        this.addModel();
        
        this.start();
    }

    

    addModel(){
      let objLoader = new OBJLoader();
        objLoader.load("./assets/model_obj_f3W-vzmHRgW_4EeRj7QNREa/model.obj",
        object=>{
        this.aircraft=object;
        this.aircraft.scale.set(1.5,1.5,1.5);
        this.scene.add(this.aircraft);
      }
      )
    }

    start=()=>{
      if(!this.frameId){
        this.frameId=requestAnimationFrame(this.animate);
      }
    };
    animate=()=>{
      this.renderScene();
      this.frameId=window.requestAnimationFrame(this.animate);
    };
    renderScene=()=>{
      if(this.renderer){
        this.renderer.render(this.scene, this.camera);
      }
      
    }

heliImage = ()=>{
}

//Trying out react-three-fiber and seeing if the desired result can be achieved.
CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls class.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls

  const {
    camera,
    gl: { domElement },
  } = useThree();

  // Ref to the controls, so that we can update them on every frame with useFrame
  const controls = useRef();
  useFrame(() => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      autoRotate={true}
      enableZoom={false}
    />
  );
};

SkyBox() {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
  const texture = loader.load([
    "https://6izyu.csb.app/4b.jpg",
    "https://6izyu.csb.app/3.jpg",
    "https://6izyu.csb.app/4b.jpg",
    "https://6izyu.csb.app/4.jpg",
    "https://6izyu.csb.app/5.jpg",
    "https://6izyu.csb.app/2.jpg",
          // './skybox-back.png',
          // './skybox-ceiling.png',
          // './skybox-floor.png',
          // './skybox-sideRight.png',
          // './skybox-sideLeft.png',
  ]);
  // Set the scene background property to the resulting texture.
  scene.background = texture;
  return null;
}

Sphere() {
  const { scene, gl } = useThree();
  // The cubeRenderTarget is used to generate a texture for the reflective sphere.
  // It must be updated on each frame in order to track camera movement and other changes.
  const cubeRenderTarget = new WebGLCubeRenderTarget(256, {
    format: RGBFormat,
    generateMipmaps: true,
    minFilter: LinearMipmapLinearFilter,
  });
  const cubeCamera = new CubeCamera(1, 1000, cubeRenderTarget);
  cubeCamera.position.set(0, 100, 0);
  scene.add(cubeCamera);
  // Update the cubeCamera with current renderer and scene.
  useFrame(() => cubeCamera.update(gl, scene));
  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]} castShadow>
      <sphereGeometry attach="geometry" args={[2, 32, 32]} />
      <meshBasicMaterial
        attach="material"
        envMap={cubeCamera.renderTarget.texture}
        color="white"
        roughness={0.1}
        metalness={1}
      />
    </mesh>
  );
}



    render(){
    return (
        <div className="StoryMode">
            <NavBar/>
            <h3>StoryMode</h3>
            {/* <Canvas>
              <this.CameraControls/>
              <this.Sphere/>
              <this.SkyBox/>
              </Canvas> */}
            <div className="skyBox1" style={{width: "700px", height: "700px"}}
            ref={mount => {this.mount=mount}}/>

           <div className="HeliModel">
            <h3 className="section__left">Helicopter Model No and Name: AH-64 Apache</h3>
            <h3 className="section__left">Manufacturer: Boeing</h3>
            <h5 className="section__left">The flying Tank.</h5>
            <div className="section__right">
                <h5>It can fly upside down.</h5>
           </div>
            </div>

        </div>
    )
}
}
export default StoryMode;