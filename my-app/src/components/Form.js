import React, { useState } from 'react';
import { Modal, Box, TextField, Button, Select, MenuItem, FormControl, InputLabel} from '@mui/material';
import { styled} from '@mui/material/styles';
import useMediaQuery from "@mui/material/useMediaQuery";

function Form({ open, handleClose, data, handleShowAlert}) {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [pax, setPax] = useState('');

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

    // const consolidateFormData = () => {
    //     const formData = {
    //         name: name,
    //         contact: contact,
    //         email: email,
    //         pax: pax
    //     };
    //     console.log(formData);
    //     // Here you can also add the code to post formData to the backend
    // };

    const handleSubmit = (event) => {
        console.log("submit")
        event.preventDefault();
        // Handle form submission logic here
        console.log({ name, email });
        handleShowAlert();
        handleClose(); // Close the modal after form submission
        // Reset form fields
        setName('');
        setContact('');
        setEmail('');
        setPax('');
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
                    onChange={(e) => setContact(e.target.value)}
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
                    onChange={(e) => setEmail(e.target.value)}
                />

                <FormControl fullWidth margin="normal">
                    <InputLabel id="pax-label">Number of Participants</InputLabel>
                    <Select
                        required
                        labelId="pax-label"
                        id="pax"
                        value={pax}
                        label="Number of Participants"
                        onChange={(e) => setPax(e.target.value)}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                    </Select>
                </FormControl>

                <FormSubmitButton fullWidth variant='contained' type='submit'>
                    Submit
                </FormSubmitButton>
            </Box>
        </Modal>


    );
}

export default Form;