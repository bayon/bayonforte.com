import { RECEIVE_API_DATA } from "../actions";
import { RECEIVE_API_DATA_THIS_SITE } from "../actions";
import { RECEIVE_API_EXPERIENCE } from "../actions";
import { RECEIVE_API_SKILLS } from "../actions";
import { RECEIVE_API_REGISTRATION_SUBMIT } from "../actions";
import { RECEIVE_API_CHART } from "../actions";

export default (state = {}, { type, data }) => {
    switch (type) {
        case RECEIVE_API_DATA:
            console.log("RECIEVE API DATA:", data);
            return data;
        case RECEIVE_API_DATA_THIS_SITE:
            console.log("RECIEVE API DATA THIS SITE:", data);
            return data;
        case RECEIVE_API_EXPERIENCE:
            console.log("RECIEVE API EXPERIENCE:", data);
            return data;
        case RECEIVE_API_SKILLS:
            console.log("RECIEVE API SKILLS:", data);
            return data;
        case RECEIVE_API_REGISTRATION_SUBMIT:
            console.log("RECIEVE API REGISTRATION SUBMIT:", data);
            return data;
        case RECEIVE_API_CHART:
            console.log("RECIEVE API CHART:", data);
            return data;
        default:
            return state;
    }
};
