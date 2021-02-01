import React from 'react';
import Select from './Select';

export default {
    title: 'Select',
    component: Select
}

export const Main = () => <Select variant='main'>
    <option selected hidden>Select city</option>
    <option>Helsinki</option>
    <option>Tampere</option>
    <option>Turku</option>
</Select>
export const Halfscreen = () => <Select variant='halfscreen'>
<option selected hidden>Select city</option>
<option>Helsinki</option>
<option>Tampere</option>
<option>Turku</option>
</Select>
export const Small = () => <Select variant='small'>
<option selected hidden>Select city</option>
<option>Helsinki</option>
<option>Tampere</option>
<option>Turku</option>
</Select>
