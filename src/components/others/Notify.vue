<template>
    <div id="app">
  <v-button @click="show">
    Show notify with text
  </v-button>

  <v-button @click="show2">
    Show notify with components
  </v-button>
</div>
</template>
<script>

const { createApp, h, renderSlot, ref, watch } = Vue

const VButton = {
  setup(_props, { slots }) {
    return () => h(
      'button',
      { class: 'v-button' },
      renderSlot(slots, 'default')
    )
  }
}

const VNotify = {
  setup () {
    const content = ref()
    const isVisible = ref(false)
    const time = ref(2000)
    let interval = null
 
    watch(isVisible, val => {
      if (!val) {
        clearInterval(interval)
      }
    })

    function show(options) {
      clearInterval(interval)
      time.value = 2000
      interval = setInterval(() => {
        time.value -= 10
        if (time.value <= 0) {
          isVisible.value = false
        }
      }, 10)
      content.value = options
      isVisible.value = true
    }
    
    return { isVisible, show, content, time }
  },
  
  render: (vm) => vm.isVisible ? h('div', { class: 'v-notify' }, [
    vm.content,
    h('progress', { max: 2000, value: vm.time })
  ]) : undefined
}

let container = document.createElement('div')
document.body.appendChild(container)
const NotifyService = createApp(VNotify).mount(container)


const app = createApp({
  components: { VButton },
  
  setup() {
    function show() {
      NotifyService.show('text notification')
    }
    function show2() {
      NotifyService.show(
        [h(VButton, null, { default: () => 'button' }), ' in notify']
      )
    }
    
    return { show, show2 }
  },
}).mount('#app')

</script>


<style>

.v-button {
  border: 0;
  border-radius: 4px;
  background: #4b66ff;
  color: white;
  padding: 0.75rem 1rem;
}
.v-button:hover {
  background: #3a56f3;
}
.v-button:active {
  background: #2441e8;
}
#app .v-button {
  margin: 1rem;
}

.v-notify {
  background: #cfd8e3;
  border-radius: 4px;
  padding: 0.75rem 1rem 1.5rem 1rem;
  width: 350px;
  position: relative;
}
progress {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>