// create your App component here
import { useState, useEffect } from 'react';
const App = () => {
    const [dogImageUrl, setDogImageUrl] = useState()
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => setDogImageUrl(data.message))
    }, [])
    return (  
        <div>
            {dogImageUrl ? (
            <img src={dogImageUrl} alt="A Random Dog" />
            ) : (
            <p>Loading...</p>
            )}
        </div>
    );
}

export default App;