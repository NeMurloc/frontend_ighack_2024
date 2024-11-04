import cl from './DataItem.module.css'
import Histogram from './histogram/Histogram';
import Linear from './linear/Linear';

interface Metric {
    name: string;
    value: number;
}

interface GraphValue {
    period: string;
    [key: string]: number | string;
}

interface Graph {
    name: string;
    type: string;
    values: GraphValue[];
}

interface LiquidityData {
    title: string;
    metrics: Metric[];
    graphs: Graph[];
    conclusion: string;
}

interface DataItemProps {
    data: LiquidityData[];
}

const DataItem: React.FC<DataItemProps> = ({ data }) => {


    return (
        <div className={cl.container}>
            {data.map((item, index) => (
                <div key={index}>
                    <div className={cl.title}>
                        {item.title}
                    </div>

                    <div className={cl.metricsContainer}>
                        {item.metrics.map((metric, metricIndex) => (
                            <div key={metricIndex} className={cl.metricItem}>
                                {`${metric.name} = ${metric.value}`}
                            </div>
                        ))}
                    </div>

                    <div className={cl.graphContainer}>
                        {item.graphs.map((graph, graphIndex) => {
                            if (graph.type === 'linear') {
                                return <Linear key={graphIndex} graph={graph} totalGraphs={item.graphs.length} />;
                            } else if (graph.type === 'histogram') {
                                return <Histogram key={graphIndex} graph={graph} totalGraphs={item.graphs.length} />;
                            }
                            // else if (graph.type === 'circle') {
                            //     return <CustomPieChart key={graphIndex} graph={graph} totalGraphs={item.graphs.length} />;
                            // }
                            return null;
                        })}
                    </div>

                    <div className={cl.conclusion}>
                        <span className={cl.spanConclusion}>{'Вывод по метрике: '}</span>{item.conclusion}
                    </div>
                </div>
            ))}


        </div>
    )
}

export default DataItem