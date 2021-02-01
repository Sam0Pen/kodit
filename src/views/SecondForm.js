import React from 'react'
import Input from '../components/Input'
import Grid from '../components/Grid'
import Headline from '../components/Headline'
import Button from '../components/Button'

import {Link} from 'react-router-dom';

function Secondform({home, setHome}) {
    const changeYearHandler = (event) => {
        setHome({...home, built_year: event.target.value })
    }
    return (
        <Grid variant='back'>
            <Grid variant='border'>
                <Grid variant='pile'>
                    <Grid variant='pile'>
                        <Headline variant='h1'>Year of construction</Headline>
                    </Grid>
                    <Grid variant='pile'>
                        <Input variant='long' type='number' value={home.built_year} onChange={changeYearHandler} />
                    </Grid>
                    <Grid variant='border'>
                    <Grid variant='left'>
                        <Link to="/home">
                            <Button variant='secondary'>Back</Button>
                        </Link>
                    </Grid>
                    <Grid variant='right1'>
                        <Link to="/rooms">
                            <Button variant='primary' >Next</Button>
                        </Link>
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Secondform;