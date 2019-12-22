import { ActionTree } from 'vuex';
import axios from 'axios';
import {InfrastructureState, Item} from './types';
import { RootState } from '../types';


export const actions: ActionTree<InfrastructureState, RootState> = {
    fetchData({ commit }): any {
        axios({
            url: process.env.VUE_APP_URL +'/api/v1/item'
        }).then((response) => {
            const payload: Item[] = response && response.data;
            commit('itemLoaded', payload);
        }, (error) => {
            console.log(error);
            commit('itemError');
        });
    }
};
