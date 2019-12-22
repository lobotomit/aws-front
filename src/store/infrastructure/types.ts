export interface InfrastructureState {
    items?: Item[];
    error: boolean;
}


export interface Item  extends ItemIn{
    typeTitle?: string;
    typePrice?: number;
    typeSize?: string;
    typeItemClassId?: number;
    typeItemClassTitle?: string;
    state?: string;
    typeSizeId?: number;
    stateId?: number;
}

export interface ItemIn {
    id?: number;
    title: string;
    project: string;
    typeId: number;
}

