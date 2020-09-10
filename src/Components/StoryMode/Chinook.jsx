import React, { Component } from 'react';
import * as THREE from "three";
import { MTLLoader,  OBJLoader } from "three-obj-mtl-loader";
import OrbitControls from "three-orbitcontrols";
import NavBar from '../NavBar/NavBar';
import './StoryMode.scss';


export default class Chinook extends Component {
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
        //wireframe for Materials can be added later if we have time.
        let objLoader = new OBJLoader();
          // objLoader.setMaterials({wireframe: true})
          objLoader.load("./assets/model_obj_f3W-vzmHRgW_4EeRj7QNREa/model.obj",
          // objLoader.load("./assets/18715_Tandem_rotor_transport_helicopter_V1.obj",
          object=>{
          this.aircraft=object;
          this.aircraft.scale.set(0.9,0.9,0.9);
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






    render() {
        return (
            <div>
                 <div style={{width: "300px", height: "300px"}}
            ref={mount => {this.mount=mount}}/>
            </div>
        )
    }
}

