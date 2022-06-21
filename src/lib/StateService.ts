import * as signalR from '@aspnet/signalr';

export class StateService {
  //#region Fields
  protected hub?: signalR.HubConnection;
  //#endregion
  //#region Properties
  //#endregion
  //#region Constructors
  constructor() {}
  //endregion
  //#region API Methods
  public Connect(url: string, transport: signalR.HttpTransportType): void {
    this.hub = this.createHubBuilder(url, transport).build();
  }
  //#endregion
  //#region Helpers
  protected createHubBuilder(
    url: string,
    transport: signalR.HttpTransportType
  ): signalR.HubConnectionBuilder {
    return new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(url, {
        transport,
      });
  }
}
