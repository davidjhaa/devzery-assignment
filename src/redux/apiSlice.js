import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    addApiObject: (state, action) => {
      const { title, priority, reqObject, resObject, header } = action.payload;
      state.push({ title, priority, reqObject, resObject, header });
    },

    editApiObject: (state, action) => {
      const { title, newValues } = action.payload;
      const api = state.find((api) => api.title === title);
      if (api) {
        api.priority = newValues.priority ?? api.priority;
        api.reqObject = newValues.reqObject ?? api.reqObject;
        api.resObject = newValues.resObject ?? api.resObject;
        api.header = newValues.header ?? api.header;
      }
    },

    removeApiObject: (state, action) => {
      return state.filter((api) => api.title !== action.payload.title);
    },

    // Edit the request object of a specific API by title
    editReqObjectByTitle: (state, action) => {
      const { title, reqObject } = action.payload;
      const api = state.find((api) => api.title === title);
      if (api) {
        api.reqObject = reqObject;
      }
    },

    // Edit the response object of a specific API by title
    editResObjectByTitle: (state, action) => {
      const { title, resObject } = action.payload;
      const api = state.find((api) => api.title === title);
      if (api) {
        api.resObject = resObject;
      }
    },
  },
});

export const {
  addApiObject,
  editApiObject,
  removeApiObject,
  editReqObjectByTitle,
  editResObjectByTitle,
} = apiSlice.actions;

export default apiSlice.reducer;
