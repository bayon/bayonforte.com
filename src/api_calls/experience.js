export const fetchExperience = async () => {
    try {
        const env_api = `${process.env.REACT_APP_API_URL}/get-experience`;
        const endpoint = await fetch(env_api); // will fail if api is not up and running .
        const data = await endpoint.json();
        return data;
    } catch (e) {
        console.log(e);
    }
};
