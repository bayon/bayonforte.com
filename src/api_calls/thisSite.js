export const fetchDataThisSite = async () => {
    try {
        const env_api = `${process.env.REACT_APP_API_URL}/get-thisSite`;
        const endpoint = await fetch(env_api); // will fail if api is not up and running .
        const data2 = await endpoint.json();
        return data2;
    } catch (e) {
        console.log(e);
    }
};
