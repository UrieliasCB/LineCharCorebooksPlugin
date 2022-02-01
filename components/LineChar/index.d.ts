/// <reference types="react" />
import { DataInterface } from './LineChartInterface';
export declare const options: {
    responsive: boolean;
    plugins: {
        legend: {
            position: "top";
        };
        title: {
            display: boolean;
            text: string;
        };
    };
};
declare const LineChart: ({ data, title }: DataInterface) => JSX.Element;
export default LineChart;
