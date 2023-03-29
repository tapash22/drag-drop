<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import CustomEditor from '@/components/CustomEditor.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    CustomEditor
  }
}
</script>
