import React from 'react';
import { Box, Typography , IconButton} from '@mui/material';
import AddIcon from '@mui/icons-material/AddCircle';
import RemoveIcon from '@mui/icons-material/RemoveCircle';

function ParticipantCounter({ pax, setPax }) {
    const handleIncrement = () => {
        setPax(prevPax => Math.min(prevPax + 1, 5)); // Maximum 5 participants
    };

    const handleDecrement = () => {
        setPax(prevPax => Math.max(prevPax - 1, 1)); // Minimum 1 participant
    };

    return (
        <Box display="flex" alignItems="center" justifyContent="right" mt={1} gap={5}>
            <IconButton variant="contained" onClick={handleDecrement} disabled={pax <= 1}>
                <RemoveIcon sx={{ color: '#494b4b' }}/>
            </IconButton>
            <Typography variant="h6">{pax}</Typography>
            <IconButton variant="contained" onClick={handleIncrement} disabled={pax >= 5}>
                <AddIcon sx={{ color: '#494b4b' }}/>
            </IconButton>
        </Box>
    );
}

export default ParticipantCounter;