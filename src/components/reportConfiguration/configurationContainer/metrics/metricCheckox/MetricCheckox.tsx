import cl from './MetricCheckox.module.css'
import { ReactComponent as EmptyCheckbox } from '../../../../../icons/emptyCheckbox.svg';
import { ReactComponent as ChoosenCheckbox } from '../../../../../icons/choosenCheckbox.svg';
import { observer } from 'mobx-react-lite';

interface MetricCheckoxProps {
    label: string;
    value: boolean;
    toggleValue: () => void;
}

const MetricCheckox: React.FC<MetricCheckoxProps> = ({ value, toggleValue, label }) => {

    return (
        <div className={cl.container} onClick={() => toggleValue()}>
            <div className={cl.checkboxContainer}>
                {value
                    ? <ChoosenCheckbox />
                    : <EmptyCheckbox />
                }
            </div>
            <div className={cl.text}>
                {label}
            </div>
        </div>
    )
}

export default MetricCheckox