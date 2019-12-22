export interface InfrastructureState {
    items?: Item[];
    error: boolean;
}


export interface Item {
    id: number;
    title: string;
    project: string;
    typeId: number;
    typeTitle: string;
    typePrice: number;
    typeSize: string;
    typeItemClassId: number;
    typeItemClassTitle: string;
    state: string;
    typeSizeId: number;
    stateId: number;
}

