//todos
export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";
export const requestApiData = () => ({ type: REQUEST_API_DATA });
export const receiveApiData = (data) => ({ type: RECEIVE_API_DATA, data });
//this site
export const REQUEST_API_DATA_THIS_SITE = "REQUEST_API_DATA_THIS_SITE";
export const RECEIVE_API_DATA_THIS_SITE = "RECEIVE_API_DATA_THIS_SITE";
export const requestApiDataThisSite = () => ({
    type: REQUEST_API_DATA_THIS_SITE
});
export const receiveApiDataThisSite = (data) => ({
    type: RECEIVE_API_DATA_THIS_SITE,
    data
});
//experience
export const REQUEST_API_EXPERIENCE = "REQUEST_API_EXPERIENCE";
export const RECEIVE_API_EXPERIENCE = "RECEIVE_API_EXPERIENCE";
export const requestApiExperience = () => ({
    type: REQUEST_API_EXPERIENCE
});
export const receiveApiExperience = (data) => ({
    type: RECEIVE_API_EXPERIENCE,
    data
});
//skills
export const REQUEST_API_SKILLS = "REQUEST_API_SKILLS";
export const RECEIVE_API_SKILLS = "RECEIVE_API_SKILLS";
export const requestApiSkills = () => ({
    type: REQUEST_API_SKILLS
});
export const receiveApiSkills = (data) => ({
    type: RECEIVE_API_SKILLS,
    data
});
//registration submit
export const REQUEST_API_REGISTRATION_SUBMIT =
    "REQUEST_API_REGISTRATION_SUBMIT";
export const RECEIVE_API_REGISTRATION_SUBMIT =
    "RECEIVE_API_REGISTRATION_SUBMIT";
export const requestApiRegistrationSubmit = () => ({
    type: REQUEST_API_REGISTRATION_SUBMIT
});
export const receiveApiRegistrationSubmit = (data) => ({
    type: RECEIVE_API_REGISTRATION_SUBMIT,
    data
});

//registration set submit
export const REQUEST_API_REGISTRATION_SUBMIT_SET =
    "REQUEST_API_REGISTRATION_SUBMIT_SET";
export const RECEIVE_API_REGISTRATION_SUBMIT_SET =
    "RECEIVE_API_REGISTRATION_SUBMIT_SET";
export const requestApiRegistrationSubmitSet = () => ({
    type: REQUEST_API_REGISTRATION_SUBMIT_SET
});
export const receiveApiRegistrationSubmitSet = (data) => ({
    type: RECEIVE_API_REGISTRATION_SUBMIT_SET,
    data
});
//chart
export const REQUEST_API_CHART = "REQUEST_API_CHART";
export const RECEIVE_API_CHART = "RECEIVE_API_CHART";
export const requestApiChart = () => ({
    type: REQUEST_API_CHART
});
export const receiveApiChart = (data) => ({
    type: RECEIVE_API_CHART,
    data
});
