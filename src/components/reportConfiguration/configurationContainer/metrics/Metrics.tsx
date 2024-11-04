import MetricsCheckboxGroup from './metricsCheckboxGroup/MetricsCheckboxGroup'
import cl from './Metrics.module.css'
import MetricCheckox from './metricCheckox/MetricCheckox'
import checkboxStore from '../../../../store/checkboxStore';
import { observer } from 'mobx-react-lite';

const Metrics: React.FC = observer(() => {


    return (
        <div>
            <MetricsCheckboxGroup />
            <MetricCheckox value={checkboxStore.balanceSheet} toggleValue={() => checkboxStore.toggleBalanceSheet()} label={"Бухгалтерский баланс"} />
            <MetricCheckox value={checkboxStore.financialResultsReport} toggleValue={() => checkboxStore.toggleFinancialResultsReport()} label={"Отчёт о финансовых результатах"} />
            <MetricCheckox value={checkboxStore.statementOfChangesInEquity} toggleValue={() => checkboxStore.toggleStatementOfChangesInEquity()} label={"Отчёт об изменениях капитала"} />
        </div>
    )
})

export default Metrics