import { getClimate } from "./Temperature-request";
import ObserverStrategy from "../../observer/ObserverStrategy";
export type TemperatureObserver = (temperature: number) => void;
export default class ConcreteObserver extends ObserverStrategy {
  async updateExecution(params?: any): Promise<any> {
    try {
      const response = await getClimate({
        q: "Salvador,br",
        units: "metric",
      });
      const data = await response.json();

      return data?.main?.temp ?? 0;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export const weatherSubject = new ConcreteObserver();
