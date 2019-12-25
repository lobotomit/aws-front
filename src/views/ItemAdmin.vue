<template>
    <div>
        <ItemTable :items="getItems"/>
        <button @click="addItem">Add</button>
        <button id="show-modal" @click="showModal = true">Show Modal</button>
        <modal-component v-if="showModal"  @close="showModal = false"/>
    </div>
</template>

<script lang="ts">
    import {Vue, Prop} from "vue-property-decorator";
    import Component from "vue-class-component";
    import {State, Action, Getter} from 'vuex-class';
    import {InfrastructureState, Item} from "@/store/infrastructure/types";

    const namespace: string = 'infrastructure';
    import ItemTable from "@/components/admin/ItemTable.vue";
    import ModalComponent from "@/components/common/ModalComponent.vue";

    @Component({
        name: 'itemAdmin',
        components: {
            ModalComponent,
            ItemTable
        }
    })
    export default class ItemAdmin extends Vue {
        @State(namespace) infrastructure: InfrastructureState | undefined;
        @Action('fetchData', {namespace}) fetchData: any;
        @Getter('getItems', {namespace}) getItems: Item[];
        @Action('addItem', {namespace}) actionAddItem: any;

        public showModal = true;

        mounted() {
            // fetching data as soon as the component's been mounted
            this.fetchData();
        }
        closeModal(){
            this.showModal = false;
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
