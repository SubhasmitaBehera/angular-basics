import { Component } from '@angular/core'

@Component ({
    selector: 'app-server',
    templateUrl:'./server.component.html'
})

export class ServerComponent {
    serverID = 100
    serverStatus = 'online'

    getServerStatus(){
        return this.serverStatus
    }
}