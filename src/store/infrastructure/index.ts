import {Module} from 'vuex';
import {getters} from './getters';
import {actions} from './actions';
import {mutations} from './mutations';
import {InfrastructureState} from './types';
import {state} from "@/store/infrastructure/state";
import {RootState} from '../types';


const namespaced: boolean = true;

export const infrastructure: Module<InfrastructureState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};
