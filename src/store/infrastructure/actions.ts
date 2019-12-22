import {ActionTree} from 'vuex';
import axios from 'axios';
import {InfrastructureState, Item, ItemIn} from './types';
import {RootState} from '../types';


export const actions: ActionTree<InfrastructureState, RootState> = {
    fetchData({commit}): any {
        axios({
            url: 'http://localhost:8080' + '/api/v1/item'
        }).then((response) => {
            console.log("load");
            const payload: Item[] = response && response.data;
            commit('itemLoaded', payload);
        }, (error) => {
            console.log(error);
            commit('itemError');
        });
    },
    addItem({commit},item: ItemIn): any {
        commit('addItem', item)
    }
};
