<template>
    <div>

        <div>{{getItems}}</div>
        <div>{{infrastructure.items}}</div>
        <button @click="addItem">Add</button>
    </div>
</template>

<script lang="ts">
    import {Vue} from "vue-property-decorator";
    import Component from "vue-class-component";
    import {State, Action, Getter} from 'vuex-class';
    import {InfrastructureState, Item} from "@/store/infrastructure/types";

    const namespace: string = 'infrastructure';
    @Component({
        name: 'itemTable'
    })
    export default class ItemTable extends Vue {
        @State(namespace) infrastructure: InfrastructureState | undefined;
        @Action('fetchData', {namespace}) fetchData: any;
        @Getter('getItems', {namespace}) getItems: Item[];
        @Action('addItem', {namespace}) actionAddItem: any;

        mounted() {
            // fetching data as soon as the component's been mounted
            this.fetchData();
        }

        addItem() {
            let item: Item = {
                title: "test",
                project: "projectTest",
                typeId: 1,
            };
            this.actionAddItem(item);
        }
    }
</script>

<style scoped>

</style>
