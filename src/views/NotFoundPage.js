import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Grid from '../components/Grid';
import Headline from '../components/Headline'

const NotFoundPage = () => (
    <Grid variant='back'>
        <Grid variant='border'>
            <Grid variant='pile'>
                <Headline variant='h1'>404 - Not Found!</Headline>
                <Link to="/">
                    <Button variant='danger'>Go Home</Button>
                </Link>
            </Grid>
        </Grid>
    </Grid>
);

export default NotFoundPage;