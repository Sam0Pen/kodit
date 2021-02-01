import React from 'react';
import Input from './Input';

export default {
    title: 'Input',
    component: Input
}

export const Long = () => <Input variant='long' type='text' />
export const Medium = () => <Input variant='medium' type='text' />
export const Small = () => <Input variant='small' type='text' />
