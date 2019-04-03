import * as React from 'react'
import Modal from '@material-ui/core/Modal'

import './Modal.css'

const modal = (props: IModal) => {return(
    <Modal open={props.open} onClose={props.onClose} className={'modal'}>
        {props.children}
    </Modal>
)}

export default modal;