
import React, { useEffect } from 'react';
import "./weather.scss";
import { ChartWrapper } from '../chart/chartWrapper';

function Weather() {

    const date = new Date();
    const [lat, setLat] = React.useState(53.241505);
    const [lon, setLon] = React.useState(50.221245);
    const changeLat = (event) => setLat(event.target.value);
    const changeLon = (event) => setLon(event.target.value);

    const [startDate, setStartDate] = React.useState(`${date.getFullYear()}-${String(date.getMonth()).padStart(2, '0')}-${date.getDate() - 3}`);
    const [endDate, setEndDate] = React.useState(`${date.getFullYear()}-${String(date.getMonth()).padStart(2, '0')}-${date.getDate()}`);

    const changeStartDate = (event) => setStartDate(event.target.value);
    const changeEndDate = (event) => setEndDate(event.target.value);

    const [data, setData] = React.useState([]);

    useEffect(() => {
        const getData = async (lat, lon, startDate, endDate) => {
            fetch("https://archive-api.open-meteo.com/v1/era5?latitude=" + lat + "&longitude=" + lon + "&start_date=" + startDate + "&end_date=" + endDate + "&hourly=temperature_2m")
                .then(res => res.json())
                .then(
                    (result) => {

                        setData(result)
                    },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                )
        }
        getData(lat, lon, startDate, endDate);
    }, [lat, lon, startDate, endDate]);

    return <div className='weatherWrapper'>
        <div className="title">
            Диаграмма изменений температуры в отрезке времени
        </div>
        <div className="inputs">
            <div className="input-wrapper">
                <div className="title">Широта:</div>
                <input type="number" onChange={changeLat} value={lat} />
            </div>
            <div className="input-wrapper">
                <div className="title">Долгота:</div>
                <input type="number" onChange={changeLon} value={lon} />
            </div>

            <div className="input-wrapper">
                <div className="title">Дата От:</div>
                <input type="text" onChange={changeStartDate} value={startDate} />
            </div>

            <div className="input-wrapper">
                <div className="title">Дата До:</div>
                <input type="text" onChange={changeEndDate} value={endDate} />
            </div>
        </div>
        <ChartWrapper data={data} />

    </div>
}



export default Weather;