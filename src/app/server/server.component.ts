import { Component } from "@angular/core";


@Component({
  //setup some important information as metadata for the class
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent{
  serverId: number = 10;
  serverAvl: string= "offline"

}