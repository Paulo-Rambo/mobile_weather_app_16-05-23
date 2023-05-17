import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {WEATHER_KEY} from '@env';

function obterDataFormatada(objeto) {
  const partes = objeto.split(' '); // Dividindo a string em duas partes: data e hora
  const dataParte = partes[0]; // Parte que contém a data
  const dataComponentes = dataParte.split('-'); // Dividindo a parte da data em ano, mês e dia

  const ano = dataComponentes[0];
  const mes = dataComponentes[1];
  const dia = dataComponentes[2];

  // Formando a string da data no formato desejado (dd/mm/yyyy)
  const dataFormatada = `${mes}/${dia}/${ano}`;
  const horaFormatada = partes[1];

  return {
    data: dataFormatada,
    hora: horaFormatada,
  };
}

const filterDays = data => {
  let objectsList = [];
  objectsList.push(data[0]);

  const dataAtual = new Date().toLocaleDateString();
  console.log(dataAtual);
  const primeiroObj = data[0].dt_txt;
  const dataHoraPrimeiroObj = obterDataFormatada(primeiroObj);

  data.forEach(obj => {
    const dataDoObjetoFormatada = obterDataFormatada(obj.dt_txt);

    if (
      dataDoObjetoFormatada.data === dataAtual ||
      dataDoObjetoFormatada.data === dataHoraPrimeiroObj.data
    ) {
      return;
    }
    if (dataHoraPrimeiroObj.hora === dataDoObjetoFormatada.hora) {
      objectsList.push(obj);
    }
  });
  console.log(objectsList);
  return objectsList;
};

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
    //console.log(response.data.list[1]);
    return response.data;
  },
);

const wheatherListSlice = createSlice({
  name: 'wheatherList',
  initialState: {
    listData: [],
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getWheatherList.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getWheatherList.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;

        state.listData = filterDays(action.payload.list);
      })
      .addCase(getWheatherList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default wheatherListSlice.reducer;
