import React from 'react';
import Grid from './Grid';
import Input from '../Input'

export default {
    title: 'Grid',
    component: Grid
}

export const Flex = () => <Grid variant='pile'>
    <Input variant='long' type='text' />
    <Input variant='long' type='text' />
</Grid>
export const Border = () => <Grid variant='border'>
    <Grid variant='pile'>
        <Input variant='long' type='text' />
        <Input variant='long' type='text' />
    </Grid>
    <Grid variant='pile'>
        <Input variant='long' type='text' />
        <Input variant='long' type='text' />
    </Grid>
</Grid>
export const Back = () => <Grid variant='back'>
    <Grid variant='border'>
        <Grid variant='pile'>
            <Input variant='long' type='text' />
            <Input variant='long' type='text' />
        </Grid>
        <Grid variant='pile'>
            <Input variant='long' type='text' />
            <Input variant='long' type='text' />
        </Grid>
    </Grid>
</Grid>
export const Right = () => <Grid variant='right'>
<Grid variant='border'>
    <Grid variant='pile'>
        <Input variant='long' type='text' />
        <Input variant='long' type='text' />
    </Grid>
    <Grid variant='pile'>
        <Input variant='long' type='text' />
        <Input variant='long' type='text' />
    </Grid>
</Grid>
</Grid>
export const Left = () => <Grid variant='left'>
<Grid variant='border'>
    <Grid variant='pile'>
        <Input variant='long' type='text' />
        <Input variant='long' type='text' />
    </Grid>
    <Grid variant='pile'>
        <Input variant='long' type='text' />
        <Input variant='long' type='text' />
    </Grid>
</Grid>
</Grid>