import Select from './select/Select';
import cl from './SelectionOfReportingPeriod.module.css'

interface SelectionOfReportingPeriodProps {
    title: string;
    quarter: string;
    year: string;
    setQuarter: (quarter: string) => void;
    setYear: (year: string) => void;
}

const SelectionOfReportingPeriod: React.FC<SelectionOfReportingPeriodProps> = ({title, quarter, year, setQuarter, setYear}) => {
    const currentYear = new Date().getFullYear();
    const quarters = ['I квартал', 'II квартал', 'III квартал', 'IV квартал'];
    const years = Array.from({ length: 25 }, (_, i) => (currentYear - i).toString());

    return (
        <div className={cl.container}>
            <div className={cl.title}>
                {title}
            </div>
            
            <Select value={quarter} options={quarters} setValue={setQuarter} isYear={false}/>
            <Select value={year} options={years} setValue={setYear} isYear={true}/>
        </div>
    )
}

export default SelectionOfReportingPeriod