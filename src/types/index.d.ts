import {Action, Mutation} from "vuex";

export interface ActionTree<S, R> {
    [key: string]: Action<S, R>;
}

export interface MutationTree<S> {
    [key: string]: Mutation<S>;
}
