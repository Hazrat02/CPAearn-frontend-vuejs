<template>
    <div class="multi-select">
      <label>{{ label }}</label>
      <div class="options">
        <div v-for="option in options" :key="option.value">
          <input
            type="checkbox"
            :id="option.value"
            :value="option.value"
            v-model="selectedValues"
          />
          <label :for="option.value">{{ option.label }}</label>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
    selectedOptions:[],
      label: String,
      options: Array,
      value: Array, // v-model binding for selected values
    },
    computed: {
     
        bal(){
            console.log(this.selectedOptions)
        },
        
    
      selectedValues: {
        get() {
            console.log(this.value)
          return 'this.value';
        },
        set(newValue) {
          this.$emit("input", newValue);
        },
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your custom styling here */
  </style>
  