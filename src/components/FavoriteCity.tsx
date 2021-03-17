import React, { useCallback, useEffect, useState } from "react";
import {
  TemperatureObserver,
  weatherSubject,
} from "./weather/business/Temperature-observer";

function FavoriteCity() {
  const [currentTemperature, setCurrentTemperature] = useState<number>(0);

  const oneTemperatureUpdated: TemperatureObserver = useCallback(
    (temperature: number) => {
      setCurrentTemperature(temperature);
    },
    []
  );

  useEffect(() => {
    weatherSubject.attach(oneTemperatureUpdated);

    weatherSubject.update();

    return () => weatherSubject.deatch(oneTemperatureUpdated);
  }, []);

  return <div>{currentTemperature}</div>;
}

export default FavoriteCity;
