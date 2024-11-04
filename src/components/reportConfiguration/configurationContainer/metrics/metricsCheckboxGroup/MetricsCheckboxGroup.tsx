import cl from './MetricsCheckboxGroup.module.css'
import { useState } from 'react';
import { ReactComponent as EmptyCheckbox } from '../../../../../icons/emptyCheckbox.svg';
import { ReactComponent as ChoosenCheckbox } from '../../../../../icons/choosenCheckbox.svg';
import checkboxStore from '../../../../../store/checkboxStore';
import { observer } from 'mobx-react-lite';
import MetricCheckox from '../metricCheckox/MetricCheckox';


const MetricsCheckboxGroup: React.FC = observer(() => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    return (
        <div className={cl.container}>
            <div className={cl.arrowCheckboxContainer}>
                <div className={`${cl.arrow} ${cl.text}`} onClick={() => { setIsVisible(!isVisible) }}>
                    {isVisible ? "↑" : "↓"}
                </div>

                <div className={cl.checkbox} onClick={() => checkboxStore.toggleKeyMetrics()}>
                    <div className={cl.checkboxContainer}>
                        {checkboxStore.keyMetrics
                            ? <ChoosenCheckbox />
                            : <EmptyCheckbox />
                        }
                    </div>

                    <div className={cl.text}>
                        Финансовые метрики
                    </div>
                </div>
            </div>

            {isVisible &&
                <div className={cl.itemCheckboxContainer}>                
                    <MetricCheckox  value={checkboxStore.incomeExpenses} toggleValue={() => checkboxStore.toggleIncomeExpenses()} label={"Доходы-Расходы"}/>
                    <MetricCheckox  value={checkboxStore.liquidity} toggleValue={() => checkboxStore.toggleLiquidity()} label={"Ликвидность"}/>
                    <MetricCheckox  value={checkboxStore.profitability} toggleValue={() => checkboxStore.toggleProfitability()} label={"Рентабельность"}/>
                    <MetricCheckox  value={checkboxStore.financialStability} toggleValue={() => checkboxStore.toggleFinancialStability()} label={"Фин. устойчивость"}/>
                    <MetricCheckox  value={checkboxStore.businessLoad} toggleValue={() => checkboxStore.toggleBusinessLoad()} label={"Деловая активность"}/>
                </div>
            }
        </div>
    )
})

export default MetricsCheckboxGroup