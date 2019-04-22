import * as React from 'react'
import Modal from '../Modal/Modal'
import Button from '@material-ui/core/Button'
import './SubmitDialog.css'

class SubmitDialog extends React.Component<ISubmitDialog> {
    public state: {active: boolean} = {
        active: false,
    }

    private onSuccessHandler: () => void;
    private onCancelHandler: () => void;

    public activateDialog = (onSuccess: () => void, onCancel: () => void) => {
        this.setState({
            active: true
        })
        this.onSuccessHandler = onSuccess;
        this.onCancelHandler = onCancel;
    }

    public render(){
        return <Modal open={this.state.active} onClose={this.onCancel}>
            <div className={'submitDialog'}>
                {this.props.label}
                <div className={'buttons'}>
                <Button className={'submit'} onClick={this.onSubmit}>Ok</Button>
                <Button className={'cancel'} onClick={this.onCancel}>Cancel</Button>
                </div>
            </div>
        </Modal>
    }

    private onClose = () => {
        this.setState({
            active: false
        })
    }

    private onCancel = () => {
        this.onClose();
        this.onCancelHandler();
    }

    private onSubmit = () => {
        this.onClose();
        this.onSuccessHandler();
    }
}

export default SubmitDialog