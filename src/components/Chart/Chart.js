import React from 'react';
import {Line} from 'react-chartjs-2';
import Grid from '../Grid';
import Button from '../Button';



const Chart = (chartData) => {

    const sortedDataList = chartData.chartData.sort((a, b)=> (a.size_sqm > b.size_sqm) ? 1: -1)


    const label = sortedDataList.map(data =>{
        return data.size_sqm;
    }) 
    const values = sortedDataList.map(data =>{
        return data.price_sqm.toFixed(2);
    })
    const homevalue = sortedDataList.map(data=>{
        return 3000;
    })
    




    return (
        <Grid variant='back'>
            <Line
           data={{
               
               labels: label,
               datasets: [
                   {
                       label: 'Prices of houses with as many rooms as yours',
                       data: values,
                       borderColor: ['blue'],

                   },
                    {
                        label: 'Your house price per sqm',
                        data: homevalue,
                        borderColor: ['red'],
                        fill: false,
    
                    },
               ],
           }}
           options={{
               mainteinAspectRatio: false,
               legend: {
                   display: true,
                   
               },
               title: {
                   display: true,
                   text: 'Price per sqm',
                   position: 'left'

               },
               scales: {
                yAxes: [{
                    ticks: {
                        max: 6000,
                        stepSize: 1000,
                        beginAtZero: true
                    }
                }]
            }
           }}
           ></Line>
        </Grid>
            
        
    )
}
export default Chart;
