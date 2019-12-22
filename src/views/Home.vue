<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ItemTable msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Action, Getter } from 'vuex-class';
import ItemTable from "@/components/ItemTable.vue";

@Component({
  name: 'home',
  components: {
    ItemTable
  }
})
export default class Home extends Vue{
}
</script>
