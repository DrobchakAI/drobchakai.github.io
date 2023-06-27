
import React, { useEffect } from 'react';
import "./weather.scss";
import { ChartWrapper } from '../chart/chartWrapper';

function Weather() {
    const URI = "https://archive-api.open-meteo.com/v1/era5";
    let date = new Date();
    let [filterParams, setFilterParams] = React.useState({
        lat: 53.241505,
        lon: 50.221245,
        startDate: `${date.getFullYear()}-${String(date.getMonth()).padStart(2, '0')}-${date.getDate() - 3}`,
        endDate: `${date.getFullYear()}-${String(date.getMonth()).padStart(2, '0')}-${date.getDate()}`
    })

    const changeFilter = (e) => {
        let preFilterParams = { ...filterParams };
        if (typeof (preFilterParams[e.target.name]) != "undefined" && preFilterParams[e.target.name] !== null) {
            preFilterParams[e.target.name] = e.target.value;
        }
        setFilterParams(preFilterParams);
    };
    let [data, setData] = React.useState([]);

    useEffect(() => {
        const getData = async (filterParams) => {
            fetch(URI + "?latitude=" + filterParams.lat + "&longitude=" + filterParams.lon + "&start_date=" + filterParams.startDate + "&end_date=" + filterParams.endDate + "&hourly=temperature_2m")
                .then(res => res.json())
                .then(
                    (result) => {

                        setData(result)
                    },
                    (error) => {
                        console.error(error)
                    }
                )
        }
        getData(filterParams);
    }, [filterParams]);

    return <div className='weatherWrapper'>
        <div className="title">
            Диаграмма изменений температуры в отрезке времени
        </div>
        <div className="inputs">
            <div className="input-wrapper">
                <div className="title">Широта:</div>
                <input type="number" onChange={changeFilter} name='lat' value={filterParams.lat} />
            </div>
            <div className="input-wrapper">
                <div className="title">Долгота:</div>
                <input type="number" onChange={changeFilter} name='lon' value={filterParams.lon} />
            </div>

            <div className="input-wrapper">
                <div className="title">Дата От:</div>
                <input type="text" onChange={changeFilter} name='startDate' value={filterParams.startDate} />
            </div>

            <div className="input-wrapper">
                <div className="title">Дата До:</div>
                <input type="text" onChange={changeFilter} name='endDate' value={filterParams.endDate} />
            </div>
        </div>
        <ChartWrapper data={data} />

    </div>
}



export default Weather;