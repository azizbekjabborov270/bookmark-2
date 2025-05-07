import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Pagination from '../components/Pagination';
import LeftPanel from '../components/LeftPanel';
import Book from '../components/Book';
import More from '../components/More';

import logo from "../images/Group 193.png"
import search from "../images/Group 21.png"
import sun from "../images/Group 182.png"

function Books() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [totalItems, setTotalItems] = useState(10);
  const [moreModal, setMoreModal] = useState({ isShow: false, item: null });
  const [bookmark, setBookmark] = useState([]);

  // Tokenni tekshirish
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); // Token mavjud bo'lmasa, Login sahifasiga yo'naltirish
    }
  }, [navigate]);

  // Load bookmarks from localStorage on component mount
  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    setBookmark(savedBookmarks);
  }, []);

  // Save bookmarks to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmark));
  }, [bookmark]);

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=python&startIndex=${page * 10}`)
      .then((res) => {
        console.log(res.data);
        setData(res?.data?.items);
        setTotalItems(res?.data?.totalItems);
      });
  }, [page]);

  function addBook(item) {
    const isAlreadyBookmarked = bookmark.some((book) => book.id === item.id);
    if (!isAlreadyBookmarked) {
      setBookmark([...bookmark, item]);
    }
  }

  function removeBookmark(index) {
    const updatedBookmarks = bookmark.filter((_, i) => i !== index);
    setBookmark(updatedBookmarks);
  }

  function handlePageClick(e) {
    setPage(e.selected);
  }

  function handleLogout() {
    localStorage.removeItem('token'); // Clear token from localStorage
    localStorage.removeItem('bookmarks'); // Clear bookmarks from localStorage
    navigate('/login'); // Redirect to login page
  }

  return (
    <Wrapper>
      <div className="top-1">
        <img className="logo" src={logo} alt="logo" />
        <div className="input-box">
          <input type="text" placeholder="Search books" />
          <img className="search" src={search} alt="search" />
        </div>
        <img className="sun" src={sun} alt="sun" />
        <button onClick={handleLogout} className="exit-btn">
          Logout
        </button>
      </div>
      <div className="top-2">
        <h3>Showing 18 Result(s)</h3>
        <button>Order by newest</button>
      </div>
      <div className="forvard">
        <div className="left">
          <LeftPanel bookmark={bookmark} removeBookmark={removeBookmark} />
        </div>
        <div className="right">
          <ul className="books">
            {data?.map((item, index) => (
              <Book
                key={index}
                index={index}
                item={item}
                addBook={addBook}
                setMoreModal={setMoreModal}
              />
            ))}
          </ul>
          <Pagination
            page={page}
            size={10}
            elements={totalItems}
            handlePageClick={handlePageClick}
          />
        </div>
      </div>
      {moreModal.isShow && <More moreModal={moreModal} setMoreModal={setMoreModal} />}
    </Wrapper>
  );
}

export default Books;

const Wrapper = styled.div`
    background: #e5e5e5;

    .top-1 {
      padding: 0 20px;
      width: 100%;
      height: 70px;
      background-color: #ffffff;
      display: flex;
      align-items: center; /* Center items vertically */
      gap: 10px; /* Add spacing between elements */
      justify-content: space-around; /* Space between elements */
    }

    .logo {
      width: 226px;
      height: 44px;
      margin-right: 56px;
    }

    .top-1 input {
      border: 1px solid #e3e6eb;
      border-radius: 30px;
      width: 670px;
      height: 48px;
      box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.1);
      background: #f8fafd;
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.24);
      padding-left: 48px;
    }

    .input-box{
      position: relative;
      width: 300px;
      height: 45px;
    }

    .input-box .search {
      position: absolute;
      top: 55%;
      left: 15px;
      transform: translateY(-50%);
      cursor: pointer;
    }
    .sun{
      width: 30px;
      height: 30px;
      cursor: pointer;
      margin-left: 350px; 
            
    }
    .exit-btn{
      border-radius: 4px;
      cursor: pointer;
      width: 99px;
      height: 40px;
      background: #0d75ff;
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 16px;
      color: #fff;
      border: none;
      margin-left: 140px;
    }
    .top-1 input:focus {
      outline: none; /* Remove default outline */
      border-color: #007bff; /* Highlight border on focus */
      box-shadow: 0 0 4px rgba(0, 123, 255, 0.5); /* Add a subtle shadow */
    }

    .top-2 {
      display: flex;
      align-items: center; /* Elementlarni vertikal markazlash */
      justify-content: space-between; /* Elementlarni gorizontal bo'ylab ajratish */
      padding: 0 20px; /* Ichki bo'shliq qo'shish */
      width: 100%;
      height: 56px;
      box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.15);
      background: #fff;
      margin-bottom: 1px; /* Pastki bo'shliq qo'shish */ 
    }

    .top-2 button {
      border-radius: 4px;
width: 165px;
height: 34px;
background: #a6b0c3;
      cursor: pointer;
      color: #fff;
      border: none;
      cursor: pointer;
      font-family: var(--font-family);
font-weight: 500;
font-size: 14px;
color: #fff;
margin-right: 20px;
    }

    .top-2 button:hover {
      background: #adadad;
      color: #fff;
    }

    .top-2 h3 {
      font-family: var(--font-family);
font-weight: 500;
font-size: 14px;
color: #222531;
padding-left: 306px
    }

    .forvard {
      width: 100%;
      height: calc(100vh - 100px);
      background-color: aqua;

      display: flex;
    }

    .left {
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;

      width: 300px;
      background-color: #fff;
      padding: 25px;
    }

    .right {
      padding: 20px;
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      width: calc(100vw - 300px);
      background-color: #f8fafd;

      .books {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        list-style: none;
      }
    }
  `