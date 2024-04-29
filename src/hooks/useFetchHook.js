import { useEffect, useState } from "react";

const HookFetch = ({ url, render }) => {

    const [data, setData] = useState({});
    
    // :: OPTION A ::
    // const fetchData = async () => {
    //     const response = await fetch(url);
    //     const parseResponse = await response.json();
    //     console.log("data", parseResponse);
    //     setData(parseResponse);
    // };

    // :: OPTION B ::
    // const fetchData = async () => {
    //     try {
    //         const response = await fetch(url);
    //         if (!response.ok) {
    //             throw new Error("Failed to fetch data");
    //         }
    //         const parseResponse = await response.json();
    //         console.log("data", parseResponse);
    //         setData(parseResponse);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // };

    // useEffect(() => {
    //     fetchData();
    // }, [url]);

    // :: OPTION C ::
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const parseResponse = await response.json();
                console.log("data", parseResponse);
                setData(parseResponse);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [url]);

    // return <ContactInfo data={data} />
    return render(data);
};

export default HookFetch;