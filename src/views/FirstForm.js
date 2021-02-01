import React from 'react'
import Input from '../components/Input'
import Grid from '../components/Grid'
import Title from '../components/Title'
import Button from '../components/Button'
import Headline from '../components/Headline'

import {Link} from 'react-router-dom';

function Firstform({home, setHome}) {
    const changeStreetHandler = (event) => {
        setHome({...home, street_address: event.target.value })
    }
    return (
        <Grid variant='back'>
            <Grid variant='border'>
                <Grid variant='pile'>
                    <Grid variant='pile'>
                        <Headline variant='h1'>Get an offer on your home</Headline>
                    </Grid>
                    <Grid variant='pile'>
                        <Title variant='title2'>Street address and number</Title>
                        <Input variant='long' type='text' value={home.street_address} onChange={changeStreetHandler} />
                    </Grid>
                    <Grid variant='right'>
                        <Link to="/year">
                            <Button variant='primary'>Next</Button>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Firstform;
