
import ReactDOM from 'react-dom';

import ModalInner from './ModalInner';
function Modal ({children, state, onClose}) {

    



    return ReactDOM.createPortal(
    state && (<ModalInner state={state} onClose={onClose}>{children}</ModalInner>), 
    document.getElementById('modal-root'),
    )
    
}
export default Modal