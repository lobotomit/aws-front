import { GetterTree } from 'vuex';
import {InfrastructureState, Item} from './types';
import { RootState } from '../types';

export const getters: GetterTree<InfrastructureState, RootState> = {
    getItems(state): Item[] | undefined {
        const { items } = state;
        return items;
    }
};
