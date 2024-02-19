import { useEffect, useState } from "react";

const useFetchItems = (url) => {
    const [item, setItem] = useState()
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(
                (results) => {
                    setIsLoaded({
                        isLoaded: true
                    });
                    return setItem({
                        item: results
                    }),
                        (error) => {
                            return setIsLoaded({
                                isLoaded: true,
                                error
                            })
                        }
                })
    }, [])

    return { error, isLoaded, item }
}

export default useFetchItems;