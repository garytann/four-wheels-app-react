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

    const isMobile = useMediaQuery('@media (max-width:600px)');
    const isTablet = useMediaQuery('@media (min-width:768px) and (max-width:1199px)');
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

    // console.log(currentItem);
    const handleCloseModal = () => setOpenModal(false);


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
        fontSize: isMobile ? '0.6rem' : isTablet ? '0.8rem' : '1rem',
        padding: isMobile ? '0.5rem 0.5rem' : isTablet ? '0.75rem 0.75rem' : '1rem 1rem',
        '&:hover': {
            backgroundColor: '#494b4b',
            borderColor: '#494b4b',
            boxShadow: 'none',
        },
    }));

    // Determine which data to use based on the selected state
    let dataToDisplay;
    if (selected === "PRIVATE") {
        dataToDisplay = props.pteData || [];
    } else if (selected === "FREESTYLE") {
        dataToDisplay = props.fsData || [];
    } else {
        dataToDisplay = props.groupData|| [];
    }

    // // Log the data and its type
    // useEffect(() => {
    //     console.log("services groupData:", props.groupData?.data);
    //     console.log("Type of groupData:", typeof props.groupData?.data);
    //
    //     console.log("services pteData:", props.pteData);
    //     console.log("Type of pteData:", typeof props.pteData);
    //
    //     console.log("services fsData:", props.fsData);
    //     console.log("Type of fsData:", typeof props.fsData);
    // }, [props.groupData, props.pteData, props.fsData]);


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

            {/*{dataToDisplay.map((item, index) => (*/}
            {/*    <div className={styles.cardsList} key={`${selected}-${index}`}>*/}
            {/*        <CardButton onClick={() => handleOpenModal(item)}>*/}
            {/*            <div className={styles.cardContainer}>*/}
            {/*                <div className={styles.cardText}>*/}
            {/*                    <h1>{item.location}</h1>*/}
            {/*                    <p>{item.timing}</p>*/}
            {/*                    /!*<p>{item.schedule}</p>*!/*/}
            {/*                    <span>{item.lesson_date}</span>*/}
            {/*                </div>*/}
            {/*                <CardSmallButton onClick={handleOpenModal}>Book Now</CardSmallButton>*/}
            {/*            </div>*/}
            {/*        </CardButton>*/}
            {/*    </div>*/}
            {/*))}*/}
            {dataToDisplay.length > 0 ? (
                dataToDisplay.map((item, index) => (
                    <div className={styles.cardsList} key={`${selected}-${index}`}>
                        <CardButton onClick={() => handleOpenModal(item)}>
                            <div className={styles.cardContainer}>
                                <div className={styles.cardText}>
                                    <h1>{item.location}</h1>
                                    <p>{item.timing}</p>
                                    <span>{item.lesson_date}</span>
                                </div>
                                <CardSmallButton onClick={handleOpenModal}>Book Now</CardSmallButton>
                            </div>
                        </CardButton>
                    </div>
                ))
            ) : (
                <p>No lessons available</p>
            )}
        </div>
    );
}

export default Services;