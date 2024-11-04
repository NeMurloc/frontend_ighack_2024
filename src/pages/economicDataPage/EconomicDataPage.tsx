// import MTSFinancialCharts from '@/components/economicDataPage/MTSFinancialCharts';
import { observer } from 'mobx-react-lite';
import DataItem from '../../components/economicDataPage/dataItem/DataItem';
import MTSFinancialCharts from '../../components/economicDataPage/MTSFinancialCharts';
import economicStore from '../../store/economicStore';
import cl from './EconomicDataPage.module.css'
import { useNavigate } from 'react-router-dom';
import testData from '../../testData.json'

const EconomicDataPage: React.FC = observer(() => {
    const navigate = useNavigate();

    return (
        <div className={cl.container}>
            <div className={cl.startAgainButton} onClick={() => { navigate('*')}}>
                Начать заново
            </div>

            {/* <MTSFinancialCharts/> */}
            <div className={cl.dataContainer}> 
                {/* <DataItem data={economicStore.economicData}/> */}
                <DataItem data={testData}/>
            </div>

        </div>
    )
})

export default EconomicDataPage