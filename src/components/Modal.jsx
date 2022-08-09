/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { 
    // Button, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    // ModalFooter 
} from 'reactstrap';

const ModalExample = ({titulo, img, descripcion,}) => {
    
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      {/* <Button color="btn btn-light" onClick={toggle}>Ver mas</Button> */}

      <div onClick={toggle}>
        <img src={img} className="img-fluid" alt=""/> 
      </div>
      <Modal isOpen={modal} toggle={toggle} className='modal-dialog modal-lg'>
        <ModalHeader toggle={toggle}>
          {titulo}
        </ModalHeader>
        <ModalBody>
            <div className="container" style={{padding: "10px 10px 20px 10px"}}>
                <div className="row">
                    <div className="col-3">
                        <img src={img} className="img-fluid" alt=""/>                    
                    </div>
                    <div className="col-9">{descripcion}</div>
                </div>
            </div>
        </ModalBody>
        {/* <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter> */}
      </Modal>
    </div>
  );
}

export default ModalExample;