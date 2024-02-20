import { useEffect, useState, useMemo } from "react";

const useFetchItems = (url, params) => {
    const [item, setItem] = useState()
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState(null)


      const query = useMemo(() => Object.keys(params)
             .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
             .join('&'), [params]);

    useEffect(() => {
        fetch(url + query)
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