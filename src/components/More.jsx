import React from 'react'
import styled from 'styled-components'

function More({ moreModal, setMoreModal }) {
    console.log(moreModal);

    return (
        <Wrapper>
            <div className="overlay" onClick={() => setMoreModal({ isShow: false, item: null })}>

            </div>

            <div className="modal">

            </div>
        </Wrapper>
    )
}

export default More

const Wrapper = styled.div`
    .overlay {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
    }

    .modal {
        width: 600px;
        height: 100%;
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.25);
        background: #fff;

        position: absolute;
        right: 0;
        top: 0;
    }
`