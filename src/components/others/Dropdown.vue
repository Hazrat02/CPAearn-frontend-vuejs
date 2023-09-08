<template>
    <div class="dropdown">
        <i @click="toggleDropdown" class="bi bi-filter-square"></i>
      <!-- <button @click="toggleDropdown"><i class="bi bi-filter-square"></i>{{ selectedOption }}</button> -->
      <ul v-if="isOpen">
        <li v-for="(option, index) in filterOptions" :key="index" @click="selectOption(option)">
          {{ option }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false,
        selectedOption: "All", // Initial selected option
        filterOptions: ["All", "Deposit", "Withdraw"], // Dropdown options
      };
    },
    methods: {
      toggleDropdown() {
        this.isOpen = !this.isOpen;
      },
      selectOption(option) {
        this.selectedOption = option;
        this.isOpen = false;
  
        // You can add logic here to filter transactions based on the selected option
        // For example, you can set a data property to store the selected filter option
        // and then filter the transactions accordingly.
      },
    },
  };
  </script>

  <style scoped>
  .dropdown {
    position: relative;
    display: inline-block;
  }
  
  button {
    background-color: #ffffff;
    border: 1px solid #b81515;
    padding: 10px;
    cursor: pointer;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
    margin-left: -50px;
    position: absolute;
    background-color: #ffffff;
    border: 1px solid #ccc;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    max-height: 150px;
    overflow-y: auto;
   
    z-index: 199999; /* Ensure the dropdown appears above other content */
  }
  
  li {
    padding: 10px;
    cursor: pointer;
  }
  
  ul.show {
    display: block;
  }
  </style>
  