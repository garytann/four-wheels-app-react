import React, { useState } from 'react';
import { Modal, Box, TextField, Button, FormControl, InputLabel} from '@mui/material';
import { styled} from '@mui/material/styles';
import useMediaQuery from "@mui/material/useMediaQuery";
import ParticipantCounter from "./ParticipationCounter";



function Form({ open, handleClose, data, handleShowAlert}) {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [pax, setPax] = useState(1);
    const [emailError, setEmailError] = useState('');
    const [contactError, setContactError] = useState('');

    const isMobile = useMediaQuery('@media (max-width:768px)');
    const boxStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: isMobile? 400 : 500,
        height: isMobile? 600 : 600,
        backgroundColor: 'background.paper',
        border: '2px solid #B8B42D',
        boxShadow: 24,
        borderRadius: 10,
        p: 4,
    };

    const FormSubmitButton = styled(Button)(({ theme}) => ({
        color: '#EAEAEA',
        marginTop: '3rem',
        fontSize: isMobile ? '0.8rem' : '1rem',
        transition: "background-color 0.3s ease",
        borderRadius: "10px",
        backgroundColor: "#494b4b",
        '&:hover': {
            backgroundColor: "#B8B42D"
        },
    }));

    const createBookingData = async (bookingData) => {
        try {
            const response = await fetch(`http://${process.env.REACT_APP_HOST}:9000/api/v1/bookings/`, {
                method: 'POST',
                headers :{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingData),
            });

            if (!response.ok){
                throw new Error(`HTTP error: Status ${response.status}`);
            }

            const result = await response.json();
            console.log('Booking successful:', result);
        } catch (error){
            console.error('Error:', error);
        }
    }

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        if (!validateEmail(value)) {
            setEmailError('Invalid email address');
        } else {
            setEmailError('');
        }
    };

    const handleContactChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value) && value.length <= 8) {
            setContact(value);
            setContactError('');
        } else if (!/^\d*$/.test(value)) {
            setContactError('Contact must be a numerical value');
        } else {
            setContactError('Contact cannot exceed 8 numerical characters');
        }
    };

    const handleSubmit =  async (event) => {
        event.preventDefault();
        // Build dictionary for the reuqest body
        const bookingData = {
            name,
            contact,
            email,
            pax,
            location: data.location,
            timing: data.timing,
            lesson_date: data.lesson_date,
        };
        await createBookingData(bookingData);
        handleShowAlert();
        handleClose(); // Close the modal after form submission

        // Reset form fields
        setName('');
        setContact('');
        setEmail('');
        setPax(1);
    };

    return (

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={boxStyle} component="form" onSubmit={handleSubmit}>
                <h1>
                    {data.location}
                </h1>
                <p>
                    {data.timing}
                </p>
                <p>
                    {data.lesson_date}
                </p>

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="contact"
                    label="Contact"
                    name="contact"
                    autoComplete="contact"
                    value={contact}
                    onChange={handleContactChange}
                    error={!!contactError}
                    helperText={contactError}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={handleEmailChange}
                    error={!!emailError}
                    helperText={emailError}
                />

                <FormControl fullWidth margin="normal" required>
                    <InputLabel id="pax-label">Participants</InputLabel>
                    <ParticipantCounter pax={pax} setPax={setPax}/>
                </FormControl>

                <FormSubmitButton fullWidth variant='contained' type='submit'>
                    Submit
                </FormSubmitButton>
            </Box>
        </Modal>


    );
}

export default Form;