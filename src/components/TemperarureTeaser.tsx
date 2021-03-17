import React, { useCallback, useEffect, useReducer } from "react";
import {
  TemperatureObserver,
  weatherSubjectWIthTimeout,
} from "./weather/business/TemperatureWIthTimeout-observer";

const SET_TEMPERATURE = "SET_TEMPERARURE";

const temperatureReducer = (temperature: number, action: any) => {
  console.log(temperature);
  switch (action?.type) {
    case SET_TEMPERATURE:
      return action?.temperature;
    default:
      return temperature;
  }
};

function Temperatureteaser() {
  const [currentTemperature, dispacth] = useReducer(temperatureReducer, null);
  const oneTemperatureUpdate: TemperatureObserver = useCallback(
    (temperature: number) => {
      dispacth({
        type: SET_TEMPERATURE,
        temperature,
      });
    },
    []
  );

  useEffect(() => {
    weatherSubjectWIthTimeout.attach(oneTemperatureUpdate);

    weatherSubjectWIthTimeout.update();

    return () => weatherSubjectWIthTimeout.deatch(oneTemperatureUpdate);
  }, []);

  return (
    <div>
      <span> A temperatura é{currentTemperature}</span>
      <button
        onClick={(e) => {
          weatherSubjectWIthTimeout.clearInterval();
          weatherSubjectWIthTimeout.update();
        }}
      >
        Atualizar
      </button>
    </div>
  );
}

export default Temperatureteaser;
