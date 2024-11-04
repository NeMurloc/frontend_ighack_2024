import { makeObservable, observable, action } from "mobx";

class CheckboxStore {
    incomeExpenses: boolean;
    liquidity: boolean;
    profitability: boolean;
    financialStability: boolean;
    businessLoad: boolean;
    balanceSheet: boolean;
    financialResultsReport: boolean;
    statementOfChangesInEquity: boolean;

    keyMetrics: boolean;

    constructor() {
        this.incomeExpenses = false;
        this.liquidity = false;
        this.profitability = false;
        this.financialStability = false;
        this.businessLoad = false;
        this.balanceSheet = false;
        this.financialResultsReport = false;
        this.statementOfChangesInEquity = false;

        this.keyMetrics = false;

        makeObservable(this, {
            incomeExpenses: observable,
            liquidity: observable,
            profitability: observable,
            financialStability: observable,
            businessLoad: observable,
            balanceSheet: observable,
            financialResultsReport: observable,
            statementOfChangesInEquity: observable,

            keyMetrics: observable,
            toggleKeyMetrics: action,
            updateKeyMetrics: action,

            toggleIncomeExpenses: action,
            toggleLiquidity: action,
            toggleProfitability: action,
            toggleFinancialStability: action,
            toggleBusinessLoad: action,
            toggleBalanceSheet: action,
            toggleFinancialResultsReport: action,
            toggleStatementOfChangesInEquity: action,
        });
    }

    toggleKeyMetrics() {
        this.keyMetrics = !this.keyMetrics;
        this.incomeExpenses = this.keyMetrics;
        this.liquidity = this.keyMetrics;
        this.profitability = this.keyMetrics;
        this.financialStability = this.keyMetrics;
        this.businessLoad = this.keyMetrics;
    }

    updateKeyMetrics() {
        this.keyMetrics =
            this.incomeExpenses &&
            this.liquidity &&
            this.profitability &&
            this.financialStability &&
            this.businessLoad;
    }

    toggleIncomeExpenses() {
        this.incomeExpenses = !this.incomeExpenses;
        this.updateKeyMetrics();
    }

    toggleLiquidity() {
        this.liquidity = !this.liquidity;
        this.updateKeyMetrics();
    }

    toggleProfitability() {
        this.profitability = !this.profitability;
        this.updateKeyMetrics();
    }

    toggleFinancialStability() {
        this.financialStability = !this.financialStability;
        this.updateKeyMetrics();
    }

    toggleBusinessLoad() {
        this.businessLoad = !this.businessLoad;
        this.updateKeyMetrics();
    }

    toggleBalanceSheet() {
        this.balanceSheet = !this.balanceSheet;
    }

    toggleFinancialResultsReport() {
        this.financialResultsReport = !this.financialResultsReport;
    }

    toggleStatementOfChangesInEquity() {
        this.statementOfChangesInEquity = !this.statementOfChangesInEquity;
    }
}

const checkboxStore = new CheckboxStore();
export default checkboxStore;
