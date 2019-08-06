import axios from 'axios'

class ReconnectingWebSocket{
    private connection: any;
    private onmessageHandler: any;
    constructor(){
        axios.get('http://localhost:8080/websocket_port').then(result => {
            console.log(result)
            this.connection = new WebSocket('ws:' + window.location.hostname +`:${result.data.port}`)
            this.connection.onmessage = this.onmessageHandler;
        }).catch((err) => {
            console.error(err)
        })
    };
    set onmessage(handler: any){
        if (this.connection){
            this.connection.onmessage=handler;
        } else {
            this.onmessageHandler=handler;
        }
    }
    public send(...args:any){
        this.connection.send(...args)
    }
}

const ws = new ReconnectingWebSocket();

export default ws