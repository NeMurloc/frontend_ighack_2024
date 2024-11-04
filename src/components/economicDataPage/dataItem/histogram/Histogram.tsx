import { Bar, CartesianGrid, Legend, Tooltip, XAxis, YAxis, ResponsiveContainer, BarChart } from 'recharts';
import cl from './Histogram.module.css';
import translationsStore from '../../../../store/translationsStore';

interface GraphValue {
    period: string;
    [key: string]: number | string;
}

interface Graph {
    name: string;
    type: string;
    values: GraphValue[];
}

interface HistogramProps {
    graph: Graph;
    totalGraphs: number;
}

const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#ff0000'];

const Histogram: React.FC<HistogramProps> = ({ graph, totalGraphs }) => {
    return (
        <div className={`${cl.container} ${totalGraphs === 1 ? cl.fullWidth : ''}`}>
            <div className={cl.title}>
                {graph.name}
            </div>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={graph.values} margin={{ top: 0, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ccc" strokeWidth={2} />
                    <XAxis
                        dataKey="period"
                        stroke="#fff"
                        tick={{ fontSize: 20, fill: '#fff' }}
                        strokeWidth={2}
                    />
                    <YAxis
                        stroke="#fff"
                        tick={{ fontSize: 20, fill: '#fff' }}
                        strokeWidth={2}
                    />
                    <Tooltip />
                    <Legend wrapperStyle={{ fontSize: '24px', color: '#fff' }} />
                    {Object.keys(graph.values[0]).map((key, index) => {
                        if (key === 'period') return null;
                        return (
                            <Bar
                                key={key}
                                dataKey={key}
                                fill={colors[index % colors.length]}
                                name={translationsStore.translations[key] || key}
                            />
                        );
                    })}
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Histogram;
