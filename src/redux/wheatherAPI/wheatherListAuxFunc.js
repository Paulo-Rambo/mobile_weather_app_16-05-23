export function obterDataFormatada(objeto) {
  const [dataParte, horaParte] = objeto.split(' '); // Divide a string em data e hora
  const [ano, mes, dia] = dataParte.split('-'); // Divide a parte da data em ano, mês e dia
  const [hora, minutos, segundos] = horaParte.split(':'); // Divide a parte da hora em hora, minutos e segundos

  const data = new Date(ano, mes - 1, dia, hora, minutos, segundos);

  return data;
}

export function cleanListData(obj, id) {
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
    id: id,
    data: newDate,
    hour: newHour,
    icon: obj.weather[0].icon,
    temp: (obj.main.temp - 273.15).toFixed(1),
    weekyDay: weekDay,
    temp_max: (obj.main.temp_max - 273.15).toFixed(1),
    temp_min: (obj.main.temp_min - 273.15).toFixed(1),
    humidity: obj.main.humidity,
    wind: (obj.wind.speed * 3.6).toFixed(1),
  };
  console.log(newDataObj);
  return newDataObj;
}

export const filterDays = data => {
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
      const id = obj.data;
      let newData = cleanListData(obj, id);
      objectsList.push(newData);
    }
  });
  console.log(objectsList);
  return objectsList;
};
