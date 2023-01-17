// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";

import { collection, getDocs, setDoc , getFirestore, doc, deleteDoc } from "firebase/firestore";

import { v4 as uuidv4 } from 'uuid';
import { User } from "react-feather";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export function firebaseConfig(){

  const config = {

    apiKey: "AIzaSyCY4GGbQt7M85KbN4LYPsEjffxcKG6DcHA",
  
    authDomain: "react-project-a3a66.firebaseapp.com",
  
    projectId: "react-project-a3a66",
  
    storageBucket: "react-project-a3a66.appspot.com",
  
    messagingSenderId: "1049852586336",
  
    appId: "1:1049852586336:web:9e19c36e3d609fb5925605",
  
    measurementId: "G-YSHVZ9V3GP"
  
  };

  

// Initialize Firebase

const app = initializeApp(config);

const analytics = getAnalytics(app);

}

export function firebaseRegistrarUsuario(firstName, email, password){
  createUserWithEmailAndPassword(getAuth(),firstName, email, password)
  .then(credenciales =>{
    //credenciales.user.email
  })
}

export async function firebaseiniciarSesion(email, password){
  try{
    let credenciales = await signInWithEmailAndPassword(getAuth(), email, password, User);
  
  }catch(e){
    return false;
  }
    return true;
}

// const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });


export async function firebaseBuscar(coleccionABuscar) {
let listado = [];
let consulta = collection(getFirestore(), coleccionABuscar);  
let resultado = await getDocs(consulta);
resultado.forEach( documento => {
  let objeto = documento.data();
  objeto.id = documento.id;
  listado.push(objeto);

});
return listado;
}


export function firebaseCrear(coleccion, objeto){
objeto.id= uuidv4();
  let referencia =   doc(getFirestore(), coleccion, objeto.id);
  setDoc(referencia, objeto);

}

export async function firebaseEliminar(coleccion, id){
await deleteDoc(doc(getFirestore(), coleccion, id));
}
