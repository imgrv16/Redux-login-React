import {configureStore} from '@reduxjs/toolkit';
import { configure } from '@testing-library/react';
import useReducer from '../Features/userSlices';

export default configureStore({
    reducer : {
        user : useReducer
    },
})