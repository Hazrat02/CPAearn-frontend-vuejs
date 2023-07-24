<template>
  <div  class="modal-overlay" @click="closeModal" v-if="showModal">
    <div class="" :class="this.modalWidth " style="border-radius: 100%;z-index: 999999999" >
      <div class="modal-header">
        <span class="modal-title">{{this.title}}</span>
        <button class="close-button" @click="closeModal">&times;</button>
      </div>
      <div class="modal-content" @click.stop>
        <!-- Your modal content goes here -->
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {props: {
    title: {
      type: String,
      default: "Modal Title",
    },
    showModal: {
      type: Boolean,
      default: false,
    },
    modalWidth: {
      type: String,
      default: "col-11 col-md-6 bg-white rounded-4",
    },
    modalHeight: {
      type: String,
      default: "auto",
    },
    position: {
      type: String,
      default: "center", // Default position is center, other options: top, right, bottom, left
    },
  },
  computed: {
    // modalStyle(){

    //   return this.modalWidth
    // }
    // ,
    modalStyle() {
      //col-11 col-md-6 bg-white rounded-4
      let style = this.modalWidth;
      return style;
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
/* Add your modal styles here */
.modal-overlay {
  /* Styles for the overlay/background when modal is active */
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container {
  /* Styles for the modal container */
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.modal-header {
  /* Styles for the modal header */
  padding: 16px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-title {
  /* Styles for the modal title */
  font-size: 18px;
  font-weight: bold;
}

.close-button {
  /* Styles for the close button */
  cursor: pointer;
  font-size: 20px;
  background: none;
  border: none;
}

.modal-content {
  /* Styles for the modal content */
  padding: 16px;
}
</style>
