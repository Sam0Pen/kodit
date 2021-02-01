import React from 'react'
import Input from '../components/Input'
import Grid from '../components/Grid'
import Title from '../components/Title'
import Button from '../components/Button'
import Headline from '../components/Headline'

import {Link} from 'react-router-dom';

function Thirdform({ home, setHome }) {
    const changeRoomHandler = (event) => {
        setHome({ ...home, rooms: event.target.value })
    }
    const changeSizeHandler = (event) => {
        setHome({ ...home, size: event.target.value })
    }
    return (
        <Grid variant='back'>
            <Grid variant='border'>
                <Grid variant='pile'>
                    <Grid variant='pile'>
                        <Headline variant='h1'>Your house size</Headline>
                    </Grid>
                    <Grid variant='border'>
                        <Grid variant='pile'>
                            <Title variant='title2'>Number of rooms</Title>
                            <Input variant='medium' type='number' value={home.rooms} onChange={changeRoomHandler} />
                        </Grid>
                        <Grid variant='pile'>
                            <Title variant='title2'>The size of your house</Title>
                            <Input variant='medium' type='number' value={home.size} onChange={changeSizeHandler} />
                        </Grid>
                    </Grid>
                    <Grid variant='border'>
                        <Grid variant='left'>
                            <Link to="/year">
                                <Button variant='secondary'>Back</Button>
                            </Link>
                        </Grid>
                        <Grid variant='right1'>
                            <Link to="/end">
                                <Button variant='primary'>Next</Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Thirdform;
