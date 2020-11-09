import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
//#1
//todos
import { REQUEST_API_DATA, receiveApiData } from "./actions";
import { fetchData } from "./api_calls/todos";
//this site
import { REQUEST_API_DATA_THIS_SITE, receiveApiDataThisSite } from "./actions";
import { fetchDataThisSite } from "./api_calls/thisSite";
//qualifications
import { REQUEST_API_EXPERIENCE, receiveApiExperience } from "./actions";
import { fetchExperience } from "./api_calls/experience";
//skills
import { REQUEST_API_SKILLS, receiveApiSkills } from "./actions";
import { fetchSkills } from "./api_calls/skills";

// chart
import { REQUEST_API_CHART, receiveApiChart } from "./actions";
import { fetchChart } from "./api_calls/chart";

//registration
import {
    REQUEST_API_REGISTRATION_SUBMIT,
    receiveApiRegistrationSubmit
} from "./actions";
import { fetchSubmitRegistrationSubmit } from "./api_calls/registrationSubmit";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
//#2
// todos
function* getApiData(action) {
    try {
        // do api call
        const data = yield call(fetchData);
        yield put(receiveApiData(data));
    } catch (e) {
        console.log(e);
    }
}
//this site
function* getApiDataThisSite(action) {
    try {
        // do api call
        const data = yield call(fetchDataThisSite);
        yield put(receiveApiDataThisSite(data));
    } catch (e) {
        console.log(e);
    }
}
// experience
function* getApiExperience(action) {
    try {
        // do api call
        const data = yield call(fetchExperience);
        yield put(receiveApiExperience(data));
    } catch (e) {
        console.log(e);
    }
}
// experience
function* getApiSkills(action) {
    try {
        // do api call
        const data = yield call(fetchSkills);
        yield put(receiveApiSkills(data));
    } catch (e) {
        console.log(e);
    }
}
// registration submit
function* setApiRegistrationSubmit(action) {
    try {
        // do api call
        const data = yield call(fetchApiRegistrationSubmit);
        yield put(receiveApiRegistrationSubmit(data));
    } catch (e) {
        console.log(e);
    }
}
function* fetchApiRegistrationSubmit(action) {
    try {
        // do api call
        const data = yield call(fetchApiRegistrationSubmit);
        yield put(receiveApiRegistrationSubmit(data));
    } catch (e) {
        console.log(e);
    }
}
// chart
function* getApiChart(action) {
    try {
        // do api call
        const data = yield call(fetchChart);
        yield put(receiveApiChart(data));
    } catch (e) {
        console.log(e);
    }
}
/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* mySaga() {
    //#3
    //todos
    yield takeLatest(REQUEST_API_DATA, getApiData);
    //this site
    yield takeLatest(REQUEST_API_DATA_THIS_SITE, getApiDataThisSite);
    //experience
    yield takeLatest(REQUEST_API_EXPERIENCE, getApiExperience);
    //skills
    yield takeLatest(REQUEST_API_SKILLS, getApiSkills);
    //registration submit
    yield takeLatest(REQUEST_API_REGISTRATION_SUBMIT, setApiRegistrationSubmit);
    //chart
    yield takeLatest(REQUEST_API_CHART, getApiChart);
}
