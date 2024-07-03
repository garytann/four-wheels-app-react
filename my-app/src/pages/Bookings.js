import styles from "../Styles/booking.module.css"
import React from 'react';
import Services from "../components/Services"


function Bookings (){

    const fsData = [
        {
            location: "Jurong Lakeside Gardens",
            timing: "0800 - 0900",
            schedule: "1hr",
            date: "01 June 2024"
        },
        {
            location: "Jurong Lakeside Gardens",
            timing: "0800 - 0900",
            schedule: "1hr",
            date: "01 June 2024"
        }
    ]
    const pteData = [
        {
            location: "Jurong Lakeside Gardens",
            timing: "0800 - 0900",
            schedule: "1hr",
            date: "01 June 2024"
        }
    ]
    const groupData = [
        {
            location: "Jurong Lakeside Gardens",
            timing: "0800 - 0900",
            schedule: "1hr",
            date: "01 June 2024"
        },

        {
            location: "Jurong Lakeside Gardens",
            timing: "0800 - 0900",
            schedule: "1hr",
            date: "01 June 2024"
        },

        {
            location: "Jurong Lakeside Gardens",
            timing: "0800 - 0900",
            schedule: "1hr",
            date: "01 June 2024"
        },

        {
            location: "Jurong Lakeside Gardens",
            timing: "0800 - 0900",
            schedule: "1hr",
            date: "01 June 2024"
        },
        {
            location: "Jurong Lakeside Gardens",
            timing: "0800 - 0900",
            schedule: "1hr",
            date: "01 June 2024"
        },
        {
            location: "Jurong Lakeside Gardens",
            timing: "0800 - 0900",
            schedule: "1hr",
            date: "01 June 2024"
        }

    ]
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h1 className={styles.headers}>Our Programs</h1>
                <p className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
            </div>
            <React.Fragment>
                <Services
                    groupData = {groupData}
                    pteData = {pteData}
                    fsData ={fsData}
                />
            </React.Fragment>
        </div>


    )
}

export default Bookings;