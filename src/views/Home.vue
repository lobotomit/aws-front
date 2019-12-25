<template>
  <div class="home">
    <p>Hello to Home</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Action, Getter } from 'vuex-class';

@Component({
  name: 'home',
  components: {
  }
})
export default class Home extends Vue{
}
</script>
