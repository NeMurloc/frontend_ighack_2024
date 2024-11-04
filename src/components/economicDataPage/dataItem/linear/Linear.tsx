import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import cl from './Linear.module.css';
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

interface LinearProps {
    graph: Graph;
    totalGraphs: number;
}

const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#ff0000'];

const Linear: React.FC<LinearProps> = ({ graph, totalGraphs }) => {
    return (
        <div className={`${cl.container} ${totalGraphs === 1 ? cl.fullWidth : ''}`}>
            <div className={cl.title}>
                {graph.name}
            </div>
            <ResponsiveContainer width="100%" height={400} >
                <LineChart data={graph.values} margin={{ top: 0, right: 30, left: 0, bottom: 0 }}>
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
                    <Legend
                        wrapperStyle={{ fontSize: '24px', color: '#fff' }}
                    />
                    {Object.keys(graph.values[0]).map((key, index) => {
                        if (key === 'period') return null;
                        return (
                            <Line
                                key={key}
                                type="monotone"
                                dataKey={key}
                                stroke={colors[index % colors.length]}
                                strokeWidth={2.5}
                                name={translationsStore.translations[key] || key}
                            />
                        );
                    })}
                </LineChart>
            </ResponsiveContainer>
            
        </div>
    );
};

export default Linear;
