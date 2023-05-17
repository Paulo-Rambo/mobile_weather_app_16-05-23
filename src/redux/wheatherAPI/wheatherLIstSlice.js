import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {WEATHER_KEY} from '@env';

function obterDataFormatada(objeto) {
  const [dataParte, horaParte] = objeto.split(' '); // Divide a string em data e hora
  const [ano, mes, dia] = dataParte.split('-'); // Divide a parte da data em ano, mês e dia
  const [hora, minutos, segundos] = horaParte.split(':'); // Divide a parte da hora em hora, minutos e segundos

  const data = new Date(ano, mes - 1, dia, hora, minutos, segundos);

  return data;
}

function cleanListData(obj) {
  const nomesDias = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  let getNewDateHour = obterDataFormatada(obj.dt_txt);
  let weekyDayNumber = getNewDateHour.getDay();
  const weekDay = nomesDias[weekyDayNumber];
  const newDate = getNewDateHour.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'numeric',
  });
  const newHour = getNewDateHour.toLocaleTimeString('pt-BR');
  let newDataObj = {
    data: newDate,
    hour: newHour,
    icon: `https://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`,
    temp: (obj.main.temp - 273.15).toFixed(1),
    weekyDay: weekDay,
  };
  return newDataObj;
}

const filterDays = data => {
  let objectsList = [];

  const dataAtual = new Date().toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'numeric',
  });
  const primeiroObj = data[0].dt_txt;
  const primeiroObjData = obterDataFormatada(primeiroObj);
  const horaPrimeiroObj = primeiroObjData.toLocaleTimeString();

  data.forEach(obj => {
    const dataObj = obterDataFormatada(obj.dt_txt);
    const dataDoObjetoFormatada = dataObj.toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'numeric',
    });
    const horaDoObjetoFormatada = dataObj.toLocaleTimeString();

    if (dataDoObjetoFormatada === dataAtual) {
      return;
    }
    if (horaPrimeiroObj === horaDoObjetoFormatada) {
      let newData = cleanListData(obj);
      objectsList.push(newData);
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
    loadingList: true,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getWheatherList.pending, state => {
        state.loadingList = true;
        state.error = null;
      })
      .addCase(getWheatherList.fulfilled, (state, action) => {
        state.error = null;
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
