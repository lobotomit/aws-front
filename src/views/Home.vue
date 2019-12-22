<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'
import { State, Action, Getter } from 'vuex-class';

@Component({
  name: 'home',
  components: {
    HelloWorld
  }
})
export default class Home extends Vue{


}
</script>
