import React from 'react';
import styled from 'styled-components';

function Modal({ message, onClose }) {
    return (
        <ModalWrapper>
            <div className="modal-content">
                <p>{message}</p>
                <button className="close-btn" onClick={onClose}>Close</button>
            </div>
        </ModalWrapper>
    );
}

export default Modal;

const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7); /* Modal fonini to'liq qorong'u qilish */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;

    .modal-content {
        background: #fff;
        padding: 20px;
        border-radius: 8px;
        text-align: center;
        width: 500px; /* Modalning kengligi */
        height: 150px; /* Modalning balandligi */
        
        p {
            font-size: 16px;
            color: #333;
        }

        .close-btn {
            margin-top: 20px;
            padding: 10px;
            background-color: #0d75ff;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
    }
`;
