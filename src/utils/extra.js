import { reactive, toRef } from 'vue';


let Loading = false;

const state = reactive({
  Loading: Loading,
});

const LoadingRef = toRef(state, 'Loading');


export function setloading(val) {

  LoadingRef.value = val;

}


// export  function isLoading() {
//   return LoadingRef.value;
// }
// let Loading = false;

// const state = reactive({
//   Loading: Loading,
// });

// const LoadingRef = toRef(state, 'Loading');


// export function setloading(val) {

//   LoadingRef.value = val;

// }


export  function isLoading() {
  return LoadingRef.value;
}


let backedUrl = 'http://127.0.0.1:8000/';

const backedUrlstate = reactive({
  backedUrl: backedUrl,
});

const backedUrlRef = toRef(backedUrlstate, 'backedUrl');

export  function setbackedUrl(link) {
  backedUrlRef.value= backedUrl+link
  return backedUrlRef.value;
}




const sidebar='false'

export  function isSidebar() {
 
  return sidebar;
}
export  function ShowHideSidebar() {
 if (sidebar=true) {
  sidebar==false;
 } else {
  sidebar==true
 }
  return sidebar;
}








 
  