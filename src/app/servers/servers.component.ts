import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms'

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false
  serverCreationStatus = "server is not created";
  serverName = '';
  serverCreated = false;
  servers = ['Testserver 1', 'Testserver 2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000);
  }

  ngOnInit(): void {
  }
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "server is created..."
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }


}
