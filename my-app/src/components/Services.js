import styles from '../Styles/services.module.css';
import React, {useState} from "react";
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled} from '@mui/material/styles';
import useMediaQuery from "@mui/material/useMediaQuery";


function Services(props){

    const isMobile = useMediaQuery('(max-width:768px)');

    const [selected, setSelected] = useState("GROUP"); // Default selection

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
        fontSize: isMobile ? '0.8rem' : '1rem',
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
            {/*<Stack direction="row" spacing={2}>*/}
            {/*    <ServiceButton isSelected={selected === "GROUP"} onClick={() => handleClick("GROUP")}>*/}
            {/*        GROUP*/}
            {/*    </ServiceButton>*/}
            {/*    <ServiceButton isSelected={selected === "PRIVATE"} onClick={() => handleClick("PRIVATE")}>*/}
            {/*        PRIVATE*/}
            {/*    </ServiceButton>*/}
            {/*    <ServiceButton isSelected={selected === "FREESTYLE"} onClick={() => handleClick("FREESTYLE")}>*/}
            {/*        FREESTYLE*/}
            {/*    </ServiceButton>*/}
            {/*</Stack>*/}
            {/*<Box sx={{ width: '100%' }}>*/}
                <Tabs
                    value={selected}
                    onChange={(event, newValue) => setSelected(newValue)}
                    sx={{
                        // Custom textColor using CSS properties
                        '.MuiTabs-indicator': {
                            backgroundColor: 'transparent', // Custom indicator color
                        },
                        '.MuiTab-root': {
                            color: '#EAEAEA', // Custom text color for all tabs
                            borderRadius: '10px', // Adds border radius to each tab
                            backgroundColor: 'transparent'
                        },
                        '.Mui-selected': {
                            backgroundColor: '#B8B42D' // Ensures selected tab also has a transparent background
                            // backgroundColor: isMobile ? '#B8B42D' : '#B8B42D', // Ensures selected tab also has a transparent background
                        },

                    }}
                    aria-label="services selection tabs"
                >
                    <Tab value="GROUP" label="GROUP" sx={{fontSize: isMobile ? '1rem' : '1.4rem'}} />
                    <Tab value="PRVIATE" label="PRIVATE" sx={{fontSize: isMobile ? '1rem' : '1.4rem'}} />
                    <Tab value="FREESTYLE" label="FREESTYLE" sx={{fontSize: isMobile ? '1rem' : '1.4rem'}} />
                </Tabs>
            {/*</Box>*/}

            {dataToDisplay.map((item, index) => (
                <div className={styles.cardsList} key={`${selected}-${index}`}>
                    <CardButton>
                        <div className={styles.cardContainer}>
                            <div className={styles.cardText}>
                                <h1>{item.location}</h1>
                                <p>{item.timing}</p>
                                <p>{item.schedule}</p>
                                <span>{item.date}</span>
                            </div>
                            <CardSmallButton>Book Now</CardSmallButton>
                        </div>
                    </CardButton>
                </div>
            ))}

        </div>
    );
}

export default Services;