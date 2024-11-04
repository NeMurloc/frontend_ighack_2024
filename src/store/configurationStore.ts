import { makeObservable, observable, action } from 'mobx';

class ConfigurationStore {
    startOfReportingQuarter: string;
    endOfReportingQuarter: string;
    startOfReportingYear: string;
    endOfReportingYear: string;

    constructor() {
        const currentYear = new Date().getFullYear();
        this.startOfReportingQuarter = 'I квартал';
        this.endOfReportingQuarter = 'I квартал';
        this.startOfReportingYear = String(currentYear);
        this.endOfReportingYear = String(currentYear);
        
        makeObservable(this, {
            startOfReportingQuarter: observable,
            endOfReportingQuarter: observable,
            startOfReportingYear: observable,
            endOfReportingYear: observable,
            setStartOfReportingQuarter: action,
            setEndOfReportingQuarter: action,
            setStartOfReportingYear: action,
            setEndOfReportingYear: action,
        });
    }

    setStartOfReportingQuarter(quarter: string) {
        this.startOfReportingQuarter = quarter;
    }

    setEndOfReportingQuarter(quarter: string) {
        this.endOfReportingQuarter = quarter;
    }

    setStartOfReportingYear(year: string) {
        this.startOfReportingYear = year;
    }

    setEndOfReportingYear(year: string) {
        this.endOfReportingYear = year;
    }
}

const configurationStore = new ConfigurationStore();
export default configurationStore;
