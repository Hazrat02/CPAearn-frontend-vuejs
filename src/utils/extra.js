import { reactive, toRef } from 'vue';

console.log('done')
let Loading = false;

const state = reactive({
  Loading: Loading,
});

const LoadingRef = toRef(state, 'Loading');


export function setloading(val) {

  LoadingRef.value = val;

}


export  function isLoading() {
  return LoadingRef.value;
}


 
  