import React, {useEffect, useState} from 'react';
import Grid from '../components/Grid';
import Button from '../components/Button';
import Chart from '../components/Chart';
import FindingMatch from '../components/FindingMatch';
import FindingLessMatch from '../components/FindingLessMatch';
import Headline from '../components/Headline';

import {Link} from 'react-router-dom';

function Result({home, appartments}) {
    const [chartData, setChartData] = useState([]);

    useEffect(async () => {
        let mergedData = await FindingMatch(home, appartments);
        setChartData(mergedData);
    }, [home])
    
    async function showAllData(){
        let mergedData = await FindingMatch(home, appartments);
        setChartData(mergedData);
    };

    async function showLessData(){
        let mergedData = await FindingLessMatch(home, appartments);
        setChartData(mergedData);
    };

    return (
        <Grid variant='back'>
            <Grid variant='pile2'>

                <Grid variant='border'>

                    <Grid variant='pile'>
                        <Headline variant='h1'>Your house is aproximately</Headline>
                        <Headline variant='h2'>3000€/sqm</Headline>
                        <Grid variant='border'>
                            <Grid variant='left'>
                                <Link to="/rooms">
                                    <Button variant='secondary'>Back</Button>
                                </Link>
                            </Grid>
                            <Grid variant='right1'>
                                <Link to="/home">
                                    <Button variant='primary'>Again</Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid variant='chart'>
                <Grid variant='pile3'>
                    <Button variant='success' onClick={showLessData}>Show less</Button>
                    <Button variant='success' onClick={showAllData}>Show more</Button>
                </Grid>
                <Chart chartData={chartData} />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Result;
