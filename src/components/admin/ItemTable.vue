<template>
    <div>
        <div class="table w-full">
            <div class="table-row">
                <div class="table-cell bg-gray-800 text-gray-200 px-4 py-2 text-sm">ID</div>
                <div class="table-cell bg-gray-800 text-gray-200 px-4 py-2 text-sm">Nombre</div>
                <div class="table-cell bg-gray-800 text-gray-200 px-4 py-2 text-sm">Projecto</div>
                <div class="table-cell bg-gray-800 text-gray-200 px-4 py-2 text-sm">Tipo</div>
                <div class="table-cell bg-gray-800 text-gray-200 px-4 py-2 text-sm">Tamaño</div>
                <div class="table-cell bg-gray-800 text-gray-200 px-4 py-2 text-sm">€/H</div>
                <div class="table-cell bg-gray-800 text-gray-200 px-4 py-2 text-sm">€/mes</div>
                <div class="table-cell bg-gray-800 text-gray-200 px-4 py-2 text-sm">Clase</div>
            </div>
            <div class="table-row" v-for="item in items" :key="item.id">
                <div class="table-cell bg-gray-400 text-gray-700 px-4 py-2 text-sm">{{item.id}}</div>
                <div class="table-cell bg-gray-200 text-gray-700 px-4 py-2 text-sm">{{item.title}}</div>
                <div class="table-cell bg-gray-400 text-gray-700 px-4 py-2 text-sm">{{item.project}}</div>
                <div class="table-cell bg-gray-200 text-gray-700 px-4 py-2 text-sm">{{item.typeTitle}}</div>
                <div class="table-cell bg-gray-400 text-gray-700 px-4 py-2 text-sm">{{item.typeSize}}</div>
                <div class="table-cell bg-gray-200 text-gray-700 px-4 py-2 text-sm">{{item.typePrice}}</div>
                <div class="table-cell bg-gray-200 text-gray-700 px-4 py-2 text-sm">{{item.typePrice*740}}</div>
                <div class="table-cell bg-gray-400 text-gray-700 px-4 py-2 text-sm">{{item.typeItemClassTitle}}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Prop, Vue} from "vue-property-decorator";
    import Component from "vue-class-component";
    import {State, Action, Getter} from 'vuex-class';
    import {InfrastructureState, Item} from "@/store/infrastructure/types";

    const namespace: string = 'infrastructure';
    @Component({
        name: 'itemTable'
    })
    export default class ItemTable extends Vue {
        @Prop() private items!: Item[];


    }
</script>

<style scoped>

</style>
