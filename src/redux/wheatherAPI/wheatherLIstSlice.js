import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {WEATHER_KEY} from '@env';
import {filterDays, cleanListData} from './wheatherListAuxFunc';

export const getWheatherList = createAsyncThunk(
  'wheatherList/getWheatherList',
  async (_, {getState}) => {
    const {location} = getState();
    const {latitude, longitude} = location;

    const apiKey = WEATHER_KEY;

    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    const response = await axios.get(url);
    if (!response.data) {
      return {
        payload: 'Não foi possível obter a lista do clima',
        error: true,
        meta: {
          rejectedWithValue: true,
        },
      };
    }
    console.log(response.data.list);
    return response.data;
  },
);

const wheatherListSlice = createSlice({
  name: 'wheatherList',
  initialState: {
    modalListStatus: false,
    listData: [],
    objectDetails: [],
    fullListData: [],
    loadingList: true,
    error: null,
  },
  reducers: {
    selectObjsDetailsReducer: (state, action) => {
      const novaData = action.payload;
      const novaLista = state.fullListData;
      const novaListaFiltrada = novaLista.filter(obj => obj.data == novaData);
      state.objectDetails = novaListaFiltrada;
      state.modalListStatus = true;
      console.log(novaListaFiltrada);
    },
    closeModalReducer: (state, action) => {
      state.modalListStatus = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getWheatherList.pending, state => {
        state.loadingList = true;
        state.error = null;
      })
      .addCase(getWheatherList.fulfilled, (state, action) => {
        state.error = null;
        let id = 0;
        state.fullListData = action.payload.list.map(obj =>
          cleanListData(obj, (id += 1)),
        );
        state.listData = filterDays(action.payload.list);
        state.loadingList = false;
      })
      .addCase(getWheatherList.rejected, (state, action) => {
        state.loadingList = false;
        state.error = action.error.message;
      });
  },
});

export default wheatherListSlice.reducer;
export const {selectObjsDetailsReducer, closeModalReducer} =
  wheatherListSlice.actions;
