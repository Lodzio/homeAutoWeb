import axios from 'axios'

class ReconnectingWebSocket {
    private connection: null | WebSocket = null;
    private onmessageHandler: any;
    private sendQueue: any = [];
    constructor() {
        axios.get(`http://${window.location.hostname}:8080/websocket_port`).then(result => {
            this.connection = new WebSocket('ws:' + window.location.hostname + `:${result.data.port}`)
            this.connection.onmessage = this.onmessageHandler;
            this.connection.onerror = (err: any) => console.error(err)
            this.connection.onopen = (resultws: any) => {
                this.sendQueue.forEach((data: any) => this.connection && this.connection.send(data));
            }
        }).catch((err) => {
            console.error(err)
        })
    };
    set onmessage(handler: any) {
        if (this.connection) {
            this.connection.onmessage = handler;
        } else {
            this.onmessageHandler = handler;
        }
    }
    public send(data: any) {
        if (this.connection !== null && this.connection.readyState === WebSocket.OPEN) {
            this.connection.send(data)
        } else {
            this.sendQueue.push(data);
        }
    }
}

const ws = new ReconnectingWebSocket();

export default ws
