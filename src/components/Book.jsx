import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Book({ index, item, addBook, setMoreModal }) {
    return (
        <Wrapper key={index} >
            <div className="img">
                <img src={item?.volumeInfo?.imageLinks?.smallThumbnail} alt="" />
            </div>

            <h3>{item?.volumeInfo?.title}</h3>
            <p>{item?.volumeInfo?.authors}</p>
            <p>{item?.volumeInfo?.publishedDate}</p>
            <div className="btns">
                <button className='btn1' onClick={() => addBook(item)}>Bookmark</button>
                <button className='btn2' onClick={() => setMoreModal({ isShow: true, item: item })}>More</button>
                <Link target='_blank' to={item?.volumeInfo?.previewLink}>
                    <button className='btn3'>Read</button>
                </Link>
            </div>
        </Wrapper>
    )
}

export default Book

const Wrapper = styled.li`
    border: 0px solid #e3e6eb;
    border-radius: 5px;
    width: 282px;
    /* height: 431px; */
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    background: #fff;
    .img{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        width: 249px;
        height: 238px;
        background: #c9c9c9;
        margin: 15px;

    }
    .img img{
        border-radius: 5px;
        width: 201px;
        height: 202px;
        
    }
    h3{
        padding: 19px 21px 0px 21px;
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 18px;
        color: #000000;
    }
    p{
        font-family: var(--second-family);
        font-weight: 500;
        font-size: 13px;
        color: #757881;
        padding: 0px 150px   0px 21px;
    }
    .btns{
    }
    .btn1{
        border-radius: 4px;
        background: #ffd80d;
        height: 37px;
        width: 120px;
        border: none;
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 14px;
        color: #000;
        margin: 5px;
        margin-left: 21px;
        cursor: pointer;
    }
    .btn2{
        border-radius: 4px;
        width: 120px;
        height: 37px;
        background: rgba(13, 117, 255, 0.05);
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 14px;
        color: #0d75ff;
        border: none;
        margin: 5px;
        margin-left: 8px;
        cursor: pointer;

    }
    .btn3{
        border-radius: 4px;
        width: 246px;
        height: 37px;
        background: #75828a;
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 14px;
        color: #fff;
        border: none;
        margin-left: 21px;
        cursor: pointer;
        margin-bottom: 10px;
    }
`