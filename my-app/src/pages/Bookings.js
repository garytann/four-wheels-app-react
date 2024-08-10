import styles from "../Styles/booking.module.css"
import React, { useEffect , useState}from 'react';
import Services from "../components/Services"


function Bookings (){



    const fsData = [
        {
            location: "Jurong Lakeside Gardens",
            timing: "0800 - 0900",
            schedule: "1hr",
            lesson_date: "01 June 2024"
        },
        {
            location: "Jurong Lakeside Gardens",
            timing: "0800 - 0900",
            schedule: "1hr",
            lesson_date: "01 June 2024"
        }
    ]
    const pteData = [
        {
            location: "Jurong Lakeside Gardens",
            timing: "0800 - 0900",
            schedule: "1hr",
            lesson_date: "01 June 2024"
        }
    ]

    //
    const [groupData, setGroupData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        // Fetch group data from the API
        const fetchGroupData = async () => {
            try {
                const response = await fetch(
                    `http://127.0.0.1:9000/api/v1/lessons/group`
                );
                if (!response.ok) {
                    throw new Error(`HTTP error: Status ${response.status}`);
                }
                let postsData = await response.json();
                setGroupData(postsData);
                setError(null);
            } catch (err) {
                setError(err.message);
                setGroupData(null);
            } finally {
                setLoading(false);
            }
        };

        fetchGroupData();

    }, []);

    // useEffect(() => {
    //     console.log("Updated groupData:", groupData);
    // }, [groupData]);

    // console.log(groupData);
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h1 className={styles.headers}>Our Programs</h1>
                <p className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
            </div>
            {loading ? (
                <p>Loading...</p> // Show a loading indicator while data is being fetched
            ) : error ? (
                <p>Error: {error}</p> // Show error message if something went wrong
            ) : (
                <React.Fragment>
                    <Services
                        groupData={groupData?.data}
                        pteData={pteData}
                        fsData={fsData}
                    />
                </React.Fragment>
            )}
        </div>


    )
}

export default Bookings;