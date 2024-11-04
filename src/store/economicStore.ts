import { makeAutoObservable } from 'mobx';

// Определение интерфейсов
interface Metric {
    name: string;
    value: number;
}

interface GraphValue {
    period: string;
    [key: string]: number | string;
}

interface Graph {
    name: string;
    type: string;
    values: GraphValue[];
}

interface EconomicData {
    title: string;
    metrics: Metric[];
    graphs: Graph[];
    conclusion: string;
}

// Определение класса хранилища
class EconomicStore {
    economicData: EconomicData[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    // Метод для добавления нового объекта в массив
    addLiquidityData(newData: EconomicData) {
        this.economicData.push(newData);
    }
}

// Экспорт экземпляра хранилища
const economicStore = new EconomicStore();
export default economicStore;
