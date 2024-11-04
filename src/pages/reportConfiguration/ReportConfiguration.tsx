import cl from "./ReportConfiguration.module.css"
import ConfigurationContainer from '../../components/reportConfiguration/configurationContainer/ConfigurationContainer';
import chatStore from "../../store/chatStore";
import axios from 'axios';
import { useState } from "react";
import configurationStore from "../../store/configurationStore";
import checkboxStore from "../../store/checkboxStore";
import loadingGif from '../../gifs/loading.gif'
import { useNavigate } from "react-router-dom";
import dataWithTemplateOfPrompts from '../../data.json'
import { processFinancialReports } from "../../generationPromts";
import testData from '../../testPromtToTestApi.json'
import economicStore from '../../store/economicStore';

interface ReportData {
    startQuarterStr: string;
    endQuarterStr: string;
    startOfReportingYear: string;
    endOfReportingYear: string;
    incomeExpenses: boolean;
    liquidity: boolean;
    profitability: boolean;
    financialStability: boolean;
    businessLoad: boolean;
    balanceSheet: boolean;
    financialResultsReport: boolean;
    statementOfChangesInEquity: boolean;
}

const ReportConfiguration: React.FC = () => {
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSendRequestClick = async () => {
        const wasChatOpen = chatStore.isOpen;

        if (wasChatOpen) {
            chatStore.handleCloseChat();
        }

        const variables: ReportData = {
            startQuarterStr: configurationStore.startOfReportingQuarter,
            endQuarterStr: configurationStore.endOfReportingQuarter,
            startOfReportingYear: configurationStore.startOfReportingYear,
            endOfReportingYear: configurationStore.endOfReportingYear,
            incomeExpenses: checkboxStore.incomeExpenses,
            liquidity: checkboxStore.liquidity,
            profitability: checkboxStore.profitability,
            financialStability: checkboxStore.financialStability,
            businessLoad: checkboxStore.businessLoad,
            balanceSheet: checkboxStore.balanceSheet,
            financialResultsReport: checkboxStore.financialResultsReport,
            statementOfChangesInEquity: checkboxStore.statementOfChangesInEquity
        };

        try {
            setLoading(true);
            const results = await processFinancialReports(variables, dataWithTemplateOfPrompts);
            console.log(results);
            for (const [key, value] of Object.entries(results)) {
                const wasChatOpen = chatStore.isOpen; // Track if chat was open

                testData.prompt = value + 'ВАЖНО! ЭТО ТЕСТОВЫЙ ЗАПРОС, ПОЭТОМУ ПРИДУМАЙ СВОИ ДАННЫЕ ДЛЯ МЕТРИК И ГРАФИКОВ!';
                try {
                    const response = await axios.post('https://mts-aidocprocessing-case.olymp.innopolis.university/generate', testData);
                    console.log(`Response for ${key}:`, response.data);
                    economicStore.addLiquidityData(response.data);
                } catch (error) {
                    console.error(`Error sending request for ${key}:`, error);
                } finally {
                    if (wasChatOpen) {
                        chatStore.handleOpenChat(); // Re-open the chat if it was open initially
                    }
                }
            }

            // Reset loading state after all requests are completed
            setLoading(false);
        } catch (error) {
            console.error('Error processing financial reports:', error);
        }
        navigate('/economicData');
        // try {
        //     const response = await axios.post('/api/report', data, {
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        //     });
        //     console.log("Response:", response.data);
        // } catch (error) {
        //     console.error("Error sending request:", error);
        // } finally {
        //     setLoading(false);
        //     if (wasChatOpen) {
        //         chatStore.handleOpenChat();
        //     }
        // }
    }

    return (
        <div className={cl.container}>
            {loading ? (
                <div className={cl.loadingOverlay}>
                    <img src={loadingGif} alt="Loading..." className={cl.loadingGif} />
                </div>
            ) : (
                <>
                    <ConfigurationContainer />

                    <div className={cl.sendRequestButton} onClick={handleSendRequestClick}>
                        Получить отчетность
                    </div>
                </>
            )}
        </div>
    )
}

export default ReportConfiguration