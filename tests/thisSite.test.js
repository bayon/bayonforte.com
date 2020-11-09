//import axios from 'axios';
// THIS React Version is : 16.12.0
test('expect a test to run', async () => {


    console.log("process.env.REACT_APP_API_URL: ", process.env.REACT_APP_API_URL)
    /*
    async function getData() {
        const env_api = `${process.env.REACT_APP_API_URL}/get-thisSite`;
        console.log(env_api);
        const endpoint = await axios(env_api); // will fail if api is not up and running .
        const data2 = await endpoint.json();
        return data2;
    }
    
    const data = await getData();
    console.log("data = :", data)
    */

    expect("JackStraw").toBe("JackStraw");
});

