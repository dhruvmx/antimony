import * as THREE from 'three';
import {GLTFLoader} from './vendor/three/GLTFLoader.js';

let modelPromise;
const active=[];
export function clearAnatomy(){while(active.length)active.pop()();}
export async function mountAnatomy(){
 for(const holder of document.querySelectorAll('[data-anatomy]')){
  if(holder.dataset.mounted)continue;
  holder.dataset.mounted='true';
  const status=holder.querySelector('.anatomy-status');
  let renderer;
  try{renderer=new THREE.WebGLRenderer({alpha:true,antialias:true});}
  catch{status.textContent='The 3D illustration needs WebGL, which is unavailable in this browser.';continue;}
  renderer.setPixelRatio(Math.min(devicePixelRatio,2));
  renderer.setClearColor(0x000000,0);
  renderer.outputColorSpace=THREE.SRGBColorSpace;
  renderer.toneMapping=THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure=1.25;
  renderer.domElement.setAttribute('role','img');
  renderer.domElement.setAttribute('aria-label','Front view of a 3D muscular anatomy teaching model');
  holder.prepend(renderer.domElement);
  const scene=new THREE.Scene();
  scene.add(new THREE.HemisphereLight(0xffffff,0x8490a3,2.3));
  const key=new THREE.DirectionalLight(0xffedd8,3.4);key.position.set(-3,4,5);scene.add(key);
  const fill=new THREE.DirectionalLight(0xdbeaff,1.5);fill.position.set(4,2,3);scene.add(fill);
  const rim=new THREE.DirectionalLight(0xffffff,2);rim.position.set(0,3,-3);scene.add(rim);
  const camera=new THREE.OrthographicCamera(-1,1,1,-1,.01,20);
  let object,disposed=false,observer;
  const materials=[];
  const clean=()=>{disposed=true;observer?.disconnect();renderer.dispose();materials.forEach(m=>m.dispose());};
  active.push(clean);
  try{
   modelPromise??=new GLTFLoader().loadAsync('/assets/muscle-body.glb').catch(e=>{modelPromise=null;throw e;});
   const gltf=await modelPromise;
   if(disposed||!holder.isConnected)return;
   object=gltf.scene.clone(true);
   object.traverse(mesh=>{if(!mesh.isMesh)return;const name=mesh.material.name;const color=name.includes('bone')?0xe9dfc6:name.includes('connective')?0xd9bca2:0xb95b43;mesh.material=new THREE.MeshStandardMaterial({color,roughness:.68,metalness:0,side:THREE.DoubleSide});materials.push(mesh.material);});
   const box=new THREE.Box3().setFromObject(object),size=box.getSize(new THREE.Vector3()),center=box.getCenter(new THREE.Vector3());
   object.position.sub(center);
   const pivot=new THREE.Group();pivot.add(object);scene.add(pivot);
   camera.position.set(0,0,4);camera.lookAt(0,0,0);
   const draw=()=>{if(disposed||!holder.isConnected)return;const w=holder.clientWidth,h=holder.clientHeight;if(!w||!h)return;renderer.setSize(w,h,false);const viewHeight=Math.max(size.y*1.08,size.x/(w/h)*1.12);camera.top=viewHeight/2;camera.bottom=-viewHeight/2;camera.left=-viewHeight*w/h/2;camera.right=viewHeight*w/h/2;camera.updateProjectionMatrix();renderer.render(scene,camera);};
   observer=new ResizeObserver(draw);observer.observe(holder);draw();
   status.hidden=true;
   holder.closest('.anatomy-scene').querySelectorAll('[data-body-view]').forEach(button=>{
    button.disabled=false;
    button.onclick=()=>{pivot.rotation.y=button.dataset.bodyView==='back'?Math.PI:0;renderer.domElement.setAttribute('aria-label',`${button.dataset.bodyView==='back'?'Back':'Front'} view of a 3D muscular anatomy teaching model`);holder.closest('.anatomy-scene').querySelectorAll('[data-body-view]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));draw();};
   });
  }catch{if(!disposed){status.hidden=false;status.textContent='The anatomy illustration could not load. Refresh to try again. Your care tasks remain available.';}}
 }
}
