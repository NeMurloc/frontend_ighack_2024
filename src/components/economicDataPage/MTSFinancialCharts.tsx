import React from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Card from '../ui/Сard';
import CardContent from '../ui/CardContent';
import CardTitle from '../ui/CardTitle';
import CardHeader from '../ui/CardHeader';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';

const MTSFinancialCharts = () => {
  // Данные по кварталам
  const quarterlyData = [
    {
      period: "Q1 2019",
      revenue: 81187.798,
      grossProfit: 42346.86,
      operatingProfit: 23347.884,
      netProfit: 19971.475,
    },
    {
      period: "Q1 2020",
      revenue: 86433.816,
      grossProfit: 44808.076,
      operatingProfit: 23073.026,
      netProfit: 10293.162,
    },
    {
      period: "H1 2019",
      revenue: 166245.785,
      grossProfit: 86791.272,
      operatingProfit: 47656.465,
      netProfit: 35779.889,
    },
    {
      period: "H1 2020",
      revenue: 173737.817,
      grossProfit: 89787.921,
      operatingProfit: 47314.916,
      netProfit: 26372.298,
    }
  ];

  // Данные по расходам за H1 2020
  const expensesData = [
    { name: "Себестоимость", value: 83949.896 },
    { name: "Коммерческие расходы", value: 24658.509 },
    { name: "Управленческие расходы", value: 17814.496 },
    { name: "Процентные расходы", value: 17613.928 },
  ];

  // Данные по балансу на 30.06.2020
  const balanceData = [
    { name: "Внеоборотные активы", value: 744247.212 },
    { name: "Оборотные активы", value: 113632.494 },
    { name: "Капитал и резервы", value: 105143.570 },
    { name: "Долгосрочные обязательства", value: 581275.493 },
    { name: "Краткосрочные обязательства", value: 166460.844 },
  ];

  // Данные по маржинальности
  const marginData = quarterlyData.map(item => ({
    period: item.period,
    grossMargin: (item.grossProfit / item.revenue * 100).toFixed(1),
    operatingMargin: (item.operatingProfit / item.revenue * 100).toFixed(1),
    netMargin: (item.netProfit / item.revenue * 100).toFixed(1),
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  return (
    <div className="space-y-8 p-4">
      <Card>
        <CardHeader>
          <CardTitle>Динамика выручки и прибыли</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <LineChart width={800} height={300} data={quarterlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="period" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#8884d8" name="Выручка" />
              <Line type="monotone" dataKey="grossProfit" stroke="#82ca9d" name="Валовая прибыль" />
              <Line type="monotone" dataKey="operatingProfit" stroke="#ffc658" name="Операционная прибыль" />
              <Line type="monotone" dataKey="netProfit" stroke="#ff7300" name="Чистая прибыль" />
            </LineChart>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Структура расходов H1 2020</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <PieChart width={400} height={300}>
                <Pie
                  data={expensesData}
                  cx={200}
                  cy={150}
                  labelLine={false}
                  label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {expensesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Структура баланса на 30.06.2020</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <PieChart width={400} height={300}>
                <Pie
                  data={balanceData}
                  cx={200}
                  cy={150}
                  labelLine={false}
                  label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {balanceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Тренды маржинальности</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <LineChart width={400} height={300} data={marginData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="period" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="grossMargin" stroke="#82ca9d" name="Валовая маржа %" />
                <Line type="monotone" dataKey="operatingMargin" stroke="#ffc658" name="Операционная маржа %" />
                <Line type="monotone" dataKey="netMargin" stroke="#ff7300" name="Чистая маржа %" />
              </LineChart>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Динамика выручки и валовой прибыли</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <BarChart width={800} height={300} data={quarterlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="period" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#8884d8" name="Выручка" />
              <Bar dataKey="grossProfit" fill="#82ca9d" name="Валовая прибыль" />
            </BarChart>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Сравнение выручки и валовой прибыли</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <BarChart width={800} height={300} data={quarterlyData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="period" type="category" />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#8884d8" name="Выручка" />
              <Bar dataKey="grossProfit" fill="#82ca9d" name="Валовая прибыль" />
            </BarChart>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MTSFinancialCharts;
