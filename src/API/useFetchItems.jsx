import { useEffect, useState, useMemo } from "react";

const useFetchItems = (url, params) => {
    const [item, setItem] = useState()
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState(null)

// console.log(params)
// const params1 = {username: 'katashelo@icloud.com', password: 'katashelo'}
//     const query = useMemo(() => Object.keys(params==undefined ? params1 : params )
//         .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
//         .join('&'), [params]) ;

    useEffect(() => {
        // query.length ? fetch(url + query)
        //     .then(res => res.json())
        //     .then(
        //         (results) => {
        //             setIsLoaded({
        //                 isLoaded: true
        //             });
        //             return setItem({
        //                 item: results
        //             }),
        //                 (error) => {
        //                     return setIsLoaded({
        //                         isLoaded: true,
        //                         error
        //                     })
        //                 }
        //         })
        //     : 
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