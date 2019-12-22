import { GetterTree } from 'vuex';
import {InfrastructureState, Item} from './types';
import { RootState } from '../types';

export const getters: GetterTree<InfrastructureState, RootState> = {
    getItems(state): Item[]{
        const { items } = state;
        return (items == undefined) ? [] : items;
    }
};
