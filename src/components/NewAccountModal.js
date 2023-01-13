import * as React from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const NewAccountModal = ({ groupCode }) => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Box sx={style}>
        <Stack spacing={2}>
          <legend><h2>Add a roomie</h2></legend>

          <Stack direction="row">
            <p>
              Have your roommates join with <i><b>{groupCode}</b></i> as their group code.
            </p>
          </Stack>

        </Stack>
      </Box>
    </div>
  );
};

export default NewAccountModal;