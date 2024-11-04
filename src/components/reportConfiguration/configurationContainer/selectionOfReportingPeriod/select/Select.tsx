import cl from './Select.module.css'
import { ReactComponent as Icon } from '../../../../../icons/select.svg';
import { useState, useEffect, useRef } from 'react';

interface SelectProps {
    value: string;
    options: string[];
    setValue: (value: string) => void;
    isYear: boolean;
}

const Select: React.FC<SelectProps> = ({ value, options, setValue, isYear }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const selectRef = useRef<HTMLDivElement>(null);

    const handleToggle = () => setIsOpen(!isOpen);

    const handleSelect = (option: string) => {
        setValue(option);
        setIsOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={selectRef} className={`${cl.container} ${isYear ? cl.yearContainer : cl.quarterContainer}`} onClick={handleToggle}>
            <Icon className={cl.icon}/>
            
            <div className={cl.value}>
                {value}
            </div>

            {isOpen && (
                <div className={cl.options}>
                    {options.map((option, index) => (
                        <div
                            key={option}
                            className={`${cl.option} ${option === value ? cl.selected : ''} ${index === options.length - 1 ? cl.lastOption : ''}`}
                            onClick={() => handleSelect(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Select