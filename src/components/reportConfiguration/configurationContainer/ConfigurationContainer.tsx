import cl from './ConfigurationContainer.module.css'
import SelectionOfReportingPeriod from './selectionOfReportingPeriod/SelectionOfReportingPeriod'
import configurationStore from '../../../store/configurationStore'
import { observer } from 'mobx-react-lite';
import Metrics from './metrics/Metrics';

const ConfigurationContainer: React.FC = observer(() => {


    return (
        <div className={cl.container}>
            <div className={cl.forBorderContainer}>
                <div className={cl.selectionOfReportingPeriodsContainer}>
                    <div className={`${cl.selectionOfStartReportingPeriod} ${cl.itemSelectionOfReportingPeriod}`}>
                        <SelectionOfReportingPeriod
                            title={'Начало периода отчетности'}
                            quarter={configurationStore.startOfReportingQuarter}
                            year={configurationStore.startOfReportingYear}
                            setQuarter={(value) => configurationStore.setStartOfReportingQuarter(value)}
                            setYear={(value) => configurationStore.setStartOfReportingYear(value)}
                        />
                    </div>

                    <div className={`${cl.selectionOfEndReportingPeriod} ${cl.itemSelectionOfReportingPeriod}`}>
                        <SelectionOfReportingPeriod
                            title={'Конец периода отчетности'}
                            quarter={configurationStore.endOfReportingQuarter}
                            year={configurationStore.endOfReportingYear}
                            setQuarter={(value) => configurationStore.setEndOfReportingQuarter(value)}
                            setYear={(value) => configurationStore.setEndOfReportingYear(value)}
                        />
                    </div>
                </div>
            </div>

            <div className={cl.metricsContainer}>
                <Metrics />
            </div>
        </div>
    )
})

export default ConfigurationContainer