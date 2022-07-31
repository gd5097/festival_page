import React from 'react';
import {
    Modal,
    Bg,
    ModalBox,
    CloseBtn,
    OpenBtn,
  } from './styledComponent';

const FoodTruck = ({name, content}) => {
    const [modalOn, setModalOn] = React.useState(false); 

    const onOpenModal = () => {
        setModalOn(!modalOn);
    }

    const PopUp = () => {
        return (
         <Modal>
            <Bg></Bg>
             <ModalBox>
                <p>{content}</p> 
                <CloseBtn onClick={onOpenModal}>닫기</CloseBtn> 
            </ModalBox>  
        </Modal>
        );
    };

    return (
        <div>
                <React.Fragment>
                    <br></br>
                    <OpenBtn className="openBtn" onClick={onOpenModal}>{name}</OpenBtn> 
                    {modalOn? <PopUp/>: ''}
                </React.Fragment>
        </div>
        
    );
};

export default FoodTruck;