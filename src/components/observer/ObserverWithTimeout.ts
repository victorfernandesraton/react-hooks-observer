import ObserveeStrategy from "./ObserverStrategy";
export type Observer = (params: any) => any;

export default abstract class ObserverWithTimeoutStrategy extends ObserveeStrategy {
  protected observers: Array<Observer> = [];
  protected timerId: NodeJS.Timeout | null;
  protected timerInterval: number;
  constructor(timerInterval: number) {
    super();
    this.timerId = null;
    this.timerInterval = timerInterval;
  }

  async update(params?: any) {
    this.timerId = setInterval(async () => {
      const data = await this.updateExecution(params);
      this.notify(data);
    }, this.timerInterval);
  }
  public clearInterval() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
    this.timerId = null;
  }
}
