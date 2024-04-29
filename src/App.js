import React, { useState } from "react";
import HookFetch from "./hooks/useFetchHook";
import ContactInfos from "./pages/test";

function App() {

    // const [resource, setResource] = useState("users");
    // const [data, setData] = useState([]);

    // const fetchData = useCallback(async () => {
    //     try {
    //         const response = await fetch(`https://jsonplaceholder.typicode.com/${resource}`);
    //         if (!response.ok) {
    //             throw new Error("Failed to fetch data");
    //         }
    //         const result = await response.json();
    //         setData(result);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // }, [resource]);

    // useEffect(() => {
    //     fetchData();
    // }, [resource, fetchData]);

    // const handleClick = (event, newResource) => {
    //     event.preventDefault();
    //     setResource(newResource);
    // };

    // return (
    //     <div>
    //         <div>
    //             <button onClick={(event) => handleClick(event, 'users')}>Users</button>
    //             <button onClick={(event) => handleClick(event, 'posts')}>Posts</button>
    //             <button onClick={(event) => handleClick(event, 'comments')}>Comments</button>
    //         </div>
    //         <div>
    //             <ul>
    //                 {data.map((item, index) => (
    //                     <li key={index}>{JSON.stringify(item)}</li>
    //                 ))}
    //             </ul>
    //         </div>
    //     </div>
    // );

    // const [userId, setUserId] = useState(null);
    // const [userId, setUserId] = useState(0);
    const [userId, setUserId] = useState(1);
    const url = "https://jsonplaceholder.typicode.com/users/";

    const handleMore = (event) => {
        event.preventDefault();
        setUserId(userId + 1);
    };

    const handleLess = (event) => {
        event.preventDefault();
        if (userId - 1 > 0) setUserId(userId - 1);
    };

    return (
        <div className="App">
            <h1>User ID : {userId}</h1>
            <button onClick={handleMore}>+</button>
            <button onClick={handleLess}>-</button>
            {/* Note : 'render' peut être nommé n'importe comment… 
            MAIS par convention on l'appelle 'render' !
            Le rôle de 'render', dans ce contexte, est de retourner 
            les données depuis FetchHook pour pouvoir les transmettre à 
            ContactInfos dont le rôle est uniquement l'affichage ! */}
            <HookFetch 
                url={url + userId} 
                render={(data) => <ContactInfos data={data} />}
                />
        </div >
    );

}

export default App;
