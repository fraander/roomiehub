import * as React from 'react';

import Checkbox from '@mui/material/Checkbox'

export default function CheckButton({ onRemove }) {
    
    return (
        <Checkbox onClick={onRemove}/>
    );
}