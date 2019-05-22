import * as React from 'react'
import './Notification.css'

class Notification extends React.Component{
    public state: INotificationState = {
        title: 'Message',
        message: '',
        animation: false
    };

    public showError = (message: string) => {
        this.setState({
            title: 'Error',
            animation: true,
            message
        })
    }

    public showMessage = (message: string) => {
        this.setState({
            title: 'Message',
            animation: true,
            message
        })
    }

    public render(){
        const errorClass = this.state.title === 'Error'? ' error': '';
        const animationClass = this.state.animation? ' animation': '';
        return(
        <div style={{position: 'absolute', left: '50%', bottom: 0}}>
            <div className={'notification' + errorClass + animationClass} onAnimationEnd={() => this.setState({animation: false})}>
                <div className={'title'}>
                    {this.state.title}
                </div>
                <div className={'message'}>
                    {this.state.message}
                </div>
            </div> 
        </div>
        )
    }
}

export default Notification;