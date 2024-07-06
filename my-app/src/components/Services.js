import styles from '../Styles/services.module.css';
import React, {useState} from "react";
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled} from '@mui/material/styles';
import Form from './Form';
import useMediaQuery from "@mui/material/useMediaQuery";
import {Snackbar, Alert} from "@mui/material";


function Services(props){

    const isMobile = useMediaQuery('@media (max-width:768px)');
    const [selected, setSelected] = useState("GROUP"); // Default selection

    const [currentItem, setCurrentItem] = useState({});

    const handleChange = (event, newValue) => {
        setSelected(newValue);
    };

    const [openModal, setOpenModal] = useState(false);

    const [showAlert, setShowAlert] = useState(false);

    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 6000); // Automatically hide the alert after 6 seconds
    };

    const handleOpenModal = (item) => {
        setOpenModal(true);
        setCurrentItem(item);
    }

    console.log(currentItem);
    const handleCloseModal = () => setOpenModal(false);


    // Function to handle click events
    // const handleClick = (service) => {
    //     setSelected(service);
    // };
    //
    // const ServiceButton = styled(Button)(({ theme, isSelected }) => ({
    //     color: '#EAEAEA',
    //     fontSize: isMobile ? '0.8rem' : '1.4rem',
    //     transition: "background-color 0.3s ease",
    //     borderRadius: isSelected ? "10px" : "1px",
    //     backgroundColor: isSelected ? "#B8B42D" : "inherit",
    //     '&:hover': {
    //         backgroundColor: isSelected ? "#B8B42D" : "inherit",
    //     },
    // }));

    const ServiceTabs = styled(Tabs)(({ theme }) => ({
        '.MuiTab-root': {
            color: '#EAEAEA', // Ensures the font color is applied to each Tab
            borderRadius: '10px', // Sets the border radius of the Tabs
        },
        '.Mui-selected': {
            backgroundColor: '#B8B42D', // Sets the background color of the selected Tab
        },
    }));

    const CardButton = styled(Button)(({ theme }) => ({
        backgroundColor: "#transparent",
        width: "100%",
        height: "100%",
    }));

    const CardSmallButton = styled(Button)(({ theme }) => ({
        backgroundColor: "#494b4b",
        width: "20%",
        height: "50%",
        borderRadius: "10px",
        color: "#B8B42D",
        fontSize: isMobile ? '0.5rem' : '1rem',
        '&:hover': {
            backgroundColor: '#494b4b',
            borderColor: '#494b4b',
            boxShadow: 'none',
        },
    }));

    // Determine which data to use based on the selected state
    let dataToDisplay;
    if (selected === "PRIVATE") {
        dataToDisplay = props.pteData;
    } else if (selected === "FREESTYLE") {
        dataToDisplay = props.fsData;
    } else {
        dataToDisplay = props.groupData;
    }

    return(
        <div className={styles.serviceContainer}>
            <h2 className={styles.headers}>SERVICES</h2>
            <Form open={openModal} handleClose={handleCloseModal} data={currentItem} handleShowAlert={handleShowAlert}/>

            <Snackbar open={showAlert} autoHideDuration={6000}>
                <Alert severity="success"
                       variant="filled"
                       sx={{ width: '100%' }}>
                    Submission successful!
                </Alert>
            </Snackbar>

                <ServiceTabs
                    value={selected}
                    onChange={handleChange}
                    textColor="transparent"
                    indicatorColor="transparent"
                    aria-label="services selection tabs"
                >
                    <Tab value="GROUP" label="GROUP" sx={{fontSize: isMobile ? '1rem' : '1.4rem'}} />
                    <Tab value="PRIVATE" label="PRIVATE" sx={{fontSize: isMobile ? '1rem' : '1.4rem'}} />
                    <Tab value="FREESTYLE" label="FREESTYLE" sx={{fontSize: isMobile ? '1rem' : '1.4rem'}} />
                </ServiceTabs>

            {dataToDisplay.map((item, index) => (
                <div className={styles.cardsList} key={`${selected}-${index}`}>
                    <CardButton onClick={() => handleOpenModal(item)}>
                        <div className={styles.cardContainer}>
                            <div className={styles.cardText}>
                                <h1>{item.location}</h1>
                                <p>{item.timing}</p>
                                <p>{item.schedule}</p>
                                <span>{item.date}</span>
                            </div>
                            <CardSmallButton onClick={handleOpenModal}>Book Now</CardSmallButton>
                        </div>
                    </CardButton>
                </div>
            ))}

        </div>
    );
}

export default Services;