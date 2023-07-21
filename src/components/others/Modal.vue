<template>
  <div class="modal" v-if="visible" :style="modalStyles">
    <div class="modal-content" :style="contentStyles">
      <slot></slot>
    </div>
    <div class="modal-overlay" @click="close"></div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    modalWidth: {
      type: String,
      default: "400px", // You can set a default width here
    },
    modalHeight: {
      type: String,
      default: "auto", // You can set a default height here
    },
  },
  methods: {
    close() {
      this.$emit("update:visible", false);
    },
  },
  computed: {
    modalStyles() {
      return {
        width: this.modalWidth,
        height: this.modalHeight,
      };
    },
    contentStyles() {
      // You can add more styles for the modal content if needed
      return {
        maxHeight: `calc(${this.modalHeight} - 100px)`, // You can adjust this value to leave space for other elements in the modal
      };
    },
  },
};
</script>

<style>
/* Add your custom styles for the modal here */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  overflow-y: auto; /* Enable vertical scrolling if content exceeds modal height */
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
