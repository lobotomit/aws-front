<template>
    <transition name="modal">
        <div class="bg-transparent modal-mask fixed z-50 top-0 left-0 h-full w-full bg-gray-100 table bg-transparent">
            <div class="table-cell align-middle">
                <div class="modal-container w-full sm:w-5/6 md:2/3 mt-0 m-auto pt-3 p-4 bg-white rounded-sm shadow-l">
                    <div>
                        <slot name="header">
                            default header
                        </slot>
                    </div>
                    <div class="pt-4 p-0">
                        <slot name="body">
                            default body
                        </slot>
                    </div>
                    <div class="modal-footer">
                        <div>
                            <slot name="footer">

                            </slot>
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-1/3"
                                    @click="$emit('close')">
                                close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import {Vue} from "vue-property-decorator";
    import Component from "vue-class-component";

    @Component({
        name: "ModalComponent"
    })
    export default class ModalComponent extends Vue {

    }
</script>

<style scoped>
    .modal-mask {
        background-color: rgba(0, 0, 0, .5);
        transition: opacity .3s ease;
    }

    .modal-container {
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>
