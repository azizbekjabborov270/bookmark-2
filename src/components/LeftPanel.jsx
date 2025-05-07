import React from 'react'
import styled from 'styled-components'
import readBtn from "../images/book-open 1.png"
import deleteBtn from "../images/delete 1.png"
import { Link } from 'react-router-dom';

function LeftPanel({ bookmark, removeBookmark }) {
    console.log(bookmark);

    return (
        <Wrapper>
            <h2 className='heading'>Bookmarks</h2>
            <p className='desc'>If you don’t like to read, you haven’t found the right book</p>

            <ul className='books'>
                {
                    bookmark.map((item, index) => {
                        return (
                            <li className='book' key={index}>
                                <div className="info">
                                    <h3 className='name'>{item?.volumeInfo?.title}</h3>
                                    <p className='author'>{item?.volumeInfo?.authors}</p>
                                </div>

                                <div className="buttons">
                                    <Link target='_blank' to={item?.volumeInfo?.previewLink}>
                                        <img src={readBtn} alt="read" />
                                    </Link>
                                    <img
                                        src={deleteBtn}
                                        alt="delete"
                                        onClick={() => removeBookmark(index)} // Call removeBookmark with the index
                                    />
                                </div>
                            </li>
                        )
                    })
                }

            </ul>
        </Wrapper>
    )
}

export default LeftPanel

const Wrapper = styled.div`
    border: 0px solid #e3e6eb;

    .heading {
        font-family: "Rubik", sans-serif;
        font-weight: 400;
        font-size: 24px;
        color: #000;
    }

    .desc {
        font-family: "Rubik", sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 156%;
        color: #000;
        margin-top: 5px;
        margin-bottom: 25px;
    }

    .books {
        display: flex;
        flex-direction: column;
        gap: 15px;
        list-style: none;
    }

    .book {
        border-radius: 4px;
        width: 100%;
        background: #f8fafd;
        padding: 10px 15px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        .name {
            font-family: "Rubik", sans-serif;
            font-weight: 400;
            font-size: 16px;
            color: #000;
        }

        .author {
            font-weight: 500;
            font-size: 13px;
            color: #757881;
            margin-top: 5px;
        }
    }

    .buttons {
        display: flex;
        gap: 5px;
        cursor: pointer;
    }
`