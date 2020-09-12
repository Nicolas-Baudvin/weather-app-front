import React from 'react';
import './style.scss';
import { getMonth, getDay, WeatherTableCodes, ImageByCode } from '../../Utils';

export default ({ state }) => {
    console.log(state);
    const getDate = (day = false) => {
        const date = new Date();

        const m = getMonth(date.getMonth());
        const d = getDay(date.getDay());
        const y = date.getFullYear();
        const n = date.getDate();

        const result = `${d} ${day ? day : n} ${m} ${y}`
        return result;
    };

    return (
        <div className="home">
            <div className="home-header">
                <div className="home-header__date--container">
                    <time className="home-header__date">{getDate()}</time>
                    <p>{state.city.name} - {state.city.cp}</p>
                </div>
                <div className="home-header__weather--container">
                    <img src={ImageByCode(state.forecast[0].weather)} alt="Il fait jour" className="home-header__weather" />
                    <p>
                        {WeatherTableCodes[state.forecast[0].weather]}
                    </p>
                    <p>
                        min {state.forecast[0].tmin} C°
                        max {state.forecast[0].tmax} C°
                    </p>
                </div>
            </div>
            <div className="home-forecast">
                {
                    state.forecast.map((day, index) => {
                        const nDay = day.datetime.split('T')[0].replaceAll("-", " - ");
                        if ((index == 0) || (index >= 7))
                        {
                            return false;
                        }
                        return (
                            <div className="home-forecast__item" key={day.day}>
                                <div className="home-forecast__item--pic">
                                    <img src={ImageByCode(day.weather)} alt={WeatherTableCodes[day.weather]} />
                                </div>
                                <time className="home-forecast__item--date">
                                    {nDay}
                                </time>
                                <p>{WeatherTableCodes[day.weather]}</p>
                                <p className="home-forecast__item--temp"> T min {day.tmin} C° - T max {day.tmax} C° </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};
