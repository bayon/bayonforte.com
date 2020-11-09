export const fetch5DayForecast = async () => {
    try {
        const env_api = `http://api.openweathermap.org/data/2.5/forecast?zip=47115&appid=0f8a8df4efb46ad96d0c64cb4923e9b4`;
        const endpoint = await fetch(env_api); // will fail if api is not up and running .
        const data = await endpoint.json();
        return data;
    } catch (e) {
        console.log(e);
    }
};
