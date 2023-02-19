import { useEffect, useState } from 'react'

const useGoogle = term => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyDkzWlBhKRkcSm0JOdReJJ5d3AOasTfRGI&cx=b4344e2dbe28d4577&q=${term}`)
            .then((response) => response.json()).then((result) => {
                setData(result);
            })

    }, [term])

    return { data };
}

export default useGoogle
