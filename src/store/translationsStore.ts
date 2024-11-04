import { makeObservable, observable, action } from "mobx";

class TranslationsStore {
    translations: { [key: string]: string };

    constructor() {
        this.translations = {
            current_liquidity: "Текущая ликвидность",
            fast_liquidity: "Быстрая ликвидность",
            absolute_liquidity: "Абсолютная ликвидность",
            return_on_sales: "Рентабельность продаж (ROS)",
            gross_profitability: "Валовая рентабельность",
            operating_profitability: "Операционная рентабельность",
            roe: "ROE (рентабельность собственного капитала)",
            roa: "ROA (рентабельность активов)",
            autonomy_coefficient: "Коэффициент автономии",
            financial_leverage_ratio: "Коэффициент финансового левериджа",
            asset_turnover: "Оборачиваемость активов",
            accounts_payable_turnover: "Оборачиваемость кредиторской задолженности",
            accounts_receivable_turnover: "Оборачиваемость дебиторской задолженности",
            revenue: "Выручка",
            gross_profit: "Валовая прибыль",
            operating_profit: "Операционная прибыль",
            net_profit: "Чистая прибыль",
        };

        makeObservable(this, {
            translations: observable,
        });
    }
}

const translationsStore = new TranslationsStore();
export default translationsStore;
