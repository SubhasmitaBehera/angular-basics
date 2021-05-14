import { Component } from '@angular/core';
import { ServersComponent } from '../servers/servers.component'
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
    .online {
        color: white;
    }
    `]

})

export class ServerComponent {
    serverID = 100
    serverStatus = 'online'
    s = new ServersComponent()
    p = this.s.servers;
    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus
    }
    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}