import { useEffect, useState } from "react";
import axios from "axios";

export   const postData = async (url: string, body:any) => {

    let result;
    let error;
    let loading = true;

        try {
            let { data } = await axios.post(url, body);
            let json: any = JSON.stringify(data)
            result = json;
            loading = false;
        } catch (err: any) {
            console.log("json", err)
            error = err.response;
            loading = false;
        }
        
        return { result,  error,  loading}
}

export const useFetch = (url: string) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const response = await fetch(url);
                const json = await response.json();
                setData(json);
                setLoading(false);

            } catch (error: any) {
                setError(error);
                setLoading(false)
            }

        }
        fetchData();
    }, [url])

    return { loading, error, data }
}

export const usePost = async (url: string, body: any) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const postData = async () => {
            setLoading(true);
                try {
                    const { data } = await axios.put(url, body);
                    const json: any = JSON.stringify(data)
                    console.log("json", json)
                    setData(json);
                    setLoading(false);
                } catch (error: any) {
                    console.log(error)
                    setError(error.response);
                    setLoading(false)
                }
        }
        postData();
    }, [url, body]);

    return { loading, error, data }
}
export const useAuthPost = (url: string, body: any) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const postData = async () => {
            setLoading(true);
            if (Object.entries(body).length !== 0) {
                try {
                    const { data } = await axios.put(url, body, {
                        headers: {
                            Authorization: process.env.AUTH,
                        }
                    })
                    console.log("the data ", data)
                    const json: any = JSON.stringify(data)
                    setData(json);
                    setLoading(false);
                    console.log("this is the success msg ", json)

                } catch (error: any) {
                    setError(error.response);
                    setLoading(false)
                }
            }


        }
        postData();
    }, [url, body]);

    return { loading, error, data }
}