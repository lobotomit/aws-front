import { MutationTree } from 'vuex';
import { InfrastructureState, Item } from './types';

export const mutations: MutationTree<InfrastructureState> = {
    itemLoaded(state, payload: Item[]) {
        state.error = false;
        state.items = payload;
    },
    itemError(state) {
        state.error = true;
        state.items = undefined;
    },
    addItem(state, payload: Item){
        if(!state.error){
            if(state.items == undefined){
                state.items = []
            }
            state.items.push(payload);
        }
    }

};
