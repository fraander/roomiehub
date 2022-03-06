import * as React from 'react';

import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/Button'
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

export default function CheckButton({ onRemove }) {
    
    return (
        <Checkbox onClick={onRemove}/>
    );
}