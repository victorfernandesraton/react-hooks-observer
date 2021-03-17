export type Observer = (params?: any) => any;

export default abstract class ObserverStrategy {
  protected observers: Array<Observer> = [];

  attach(observer: Observer) {
    this.observers.push(observer);
  }

  deatch(ObserverToRemove: Observer) {
    this.observers = this.observers.filter(
      (observer) => ObserverToRemove !== observer
    );
  }

  protected notify(temperature: number) {
    this.observers.forEach((o) => o(temperature));
  }
  abstract updateExecution(params?: any): any;

  async update(params?: any) {
    const data = await this.updateExecution(params);
    this.notify(data);
  }
}
