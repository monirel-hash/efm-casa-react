import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = 'http://localhost:5000/pays';

const initialState = {
  pays: [],
  loading: null,
  error: null,
};

export const fetchPays = createAsyncThunk('pays/fetchpays', async () => {
  const { data } = await axios.get(API_URL);
  return data;
});

export const addPay = createAsyncThunk('pays/addPay', async (newpay) => {
  try {
    const { data } = await axios.post(API_URL, newpay);
    return data;
  } catch (e) {
    console.log('post error');
  }
});

export const updatePopulation = createAsyncThunk('pays/updatePay', async (payload) => {
  const { id, updatedPop } = payload;
  try {
    const { data } = await axios.put(`${API_URL}/${id}`, updatedPop);
    return data;
  } catch (e) {
    console.log('update error');
  }
});


export const searchPays = createAsyncThunk('pays/searchPays', async (keyword) => {
  const {data} = await axios.get(`${API_URL}?name_like=${keyword}`)
  return data;
})

const paysSlice = createSlice({
  name: 'pays',
  initialState: initialState,
  reducers: {
    filter(state, action) {
      if (action.payload.type === 'FILTER_BY_POPULATION') {
        console.log('pop');
        state.pays.sort((a, b) => b.population - a.population);
        return;
      }
      if (action.payload.type === 'FILTER_BY_CONTINENT') {
        console.log('cont');
        state.pays.sort((a, b) => a.continent.localeCompare(b.continent));
        return;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPays.pending, (state, action) => {
        state.loading = 'pending';
      })
      .addCase(fetchPays.fulfilled, (state, action) => {
        state.pays = action.payload;
        state.loading = 'success';
      })
      .addCase(fetchPays.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = 'Can not download the data from the server';
      })
      .addCase(addPay.fulfilled, (state, action) => {
        state.pays.push(action.meta.arg);
      })
      .addCase(updatePopulation.fulfilled, (state, action) => {
        console.log(action);
        state.pays.forEach((pay) => {
          if (pay.id === action.payload.id) {
            pay.population = action.payload.population;
          }
        });
      })
      .addCase(searchPays.fulfilled, (state, action) => {
        state.pays = action.payload
        state.loading = 'success'
        state.error = null
      })
  },
});



export const getAllPays = (state) => state.pays.pays;
export const getPaysError = (state) => state.pays.error;
export const getPaysLoading = (state) => state.pays.loading;

export const { ajoutePay, moddifierPopulation, filter } = paysSlice.actions;

export default paysSlice.reducer;
