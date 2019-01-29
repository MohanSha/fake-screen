import React, { useState } from 'react';
import queryString from 'query-string';
import styled from 'styled-components';

import find from './find.svg';
import smile from './smile.svg';

function Search({ location, className, goMain, onSearch }) {
  const [value, setValue] = useState(getQuery());
  function onChange(e) {
    setValue(e.target.value);
  }
  function getQuery() {
    const qsObj = queryString.parse(location.search);
    return qsObj.query || '';
  }

  function onClick() {
    if (value.length) onSearch(value);
  }
  return (
    <div className={className}>
      <section className="top-bars">
        <div className="top-bar">
          <div className="bar-items left">
            <img
              onClick={goMain}
              className="logo"
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
              alt="Google"
            />
            <div className="search-bar">
              <input
                id="search"
                type="text"
                name="search"
                value={value}
                onChange={onChange}
              />
              <div className="icon">
                <img
                  src="https://www.gstatic.com/images/branding/googlemic/2x/googlemic_color_24dp.png"
                  alt="microphone"
                />
              </div>
              <div className="icon" onClick={onClick}>
                <img src={find} alt="find" />
              </div>
            </div>
          </div>
          <div className="bar-items right">
            <div className="functions">
              <img src={smile} alt="smile" />
            </div>
          </div>
        </div>
        <div className="app-bar">
          <div className="tags left">
            <div className="tag active">All</div>
            <div className="tag">Maps</div>
            <div className="tag">Images</div>
            <div className="tag">News</div>
            <div className="tag">Videos</div>
            <div className="tag">More</div>
          </div>
          <div className="tags right">
            <div className="tag">Settings</div>
            <div className="tag">Tools</div>
          </div>
        </div>
      </section>
      <section className="content">
        <p>
          Your search - <span id="search-in-content">{getQuery()}</span> - did
          not match any documents.
        </p>
        <p>Suggestions</p>
        <ul>
          <li>Make sure that all words are spelled correctly.</li>
          <li>Try different keywords.</li>
          <li>Try more general keywords.</li>
        </ul>
      </section>
      <footer>
        <section className="upper">
          <div className="footer-items left">
            <div className="item">Taiwan</div>
          </div>
        </section>
        <section className="lower">
          <div className="footer-items left">
            <div className="item">Help</div>
            <div className="item">Send feedback</div>
            <div className="item">Privacy</div>
            <div className="item">Terms</div>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default styled(Search)`
  height: 100%;
  background: white;
  padding-top: 22px;
  .top-bars {
    border-bottom: 1px rgb(235, 235, 235) solid;
  }
  .top-bar {
    height: 44px;
  }
  .app-bar {
    height: 58px;
    margin-left: 154px;
    position: relative;
    width: 584px;
  }
  .bar-items {
    display: flex;
    align-items: center;
    position: relative;
    height: 44px;
  }
  .left {
    position: absolute;
    left: 0;
  }
  .right {
    position: absolute;
    right: 4px;
  }
  .logo {
    width: 150px;
    height: 34px;
    padding: 4px 28px 0 30px;
    cursor: pointer;
  }
  .search-bar {
    display: flex;
    align-items: center;
    border-radius: 22px;
    width: 586px;
    height: 46px;
    border: 1px rgb(223, 225, 229) solid;
    padding: 5px 0 0 20px;
    input {
      outline: 0;
      border: 0;
      flex: 1;
      font-size: 16px;
    }
    img {
      width: 24px;
      height: 24px;
    }
    .icon {
      width: 40px;
    }
    .icon:nth-of-type(1) {
      cursor: pointer;
    }
    .icon:nth-of-type(2) {
      fill: rgb(66, 133, 244);
      color: rgb(66, 133, 244);
    }
  }
  .functions {
    display: flex;
    align-items: center;
    height: 100%;
    padding-right: 14px;
    img {
      margin: 8px;
      width: 24px;
      cursor: pointer;
      height: 24px;
    }
  }
  .tags {
    height: 100%;
    display: flex;
    font-size: 13px;
    align-items: center;
    color: rgb(119, 119, 119);
  }
  .tag.active {
    color: rgb(26, 115, 232);
    border-bottom: 3px rgb(26, 115, 232) solid;
    font-weight: 700;
  }
  .tag {
    height: 100%;
    cursor: pointer;
    padding: 28px 16px 0;
    &:hover:not(.active) {
      color: rgb(34, 34, 34);
    }
  }

  .content {
    color: rgb(34, 34, 34);
    padding: 55px 0 0 170px;
    p {
      margin: 16px 0;
    }
  }
  #search-in-content {
    font-weight: 700;
  }
  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 83px;
    border-top: 1px solid rgba(0, 0, 0, 0.07);
    background-color: rgba(0, 0, 0, 0.05);
    .upper {
      position: relative;
      color: rgba(0, 0, 0, 0.54);
      width: 100%;
      font-size: 15px;
      padding-bottom: 2px;
      height: 50%;
    }
    .lower {
      position: relative;
      border-top: 1px solid rgba(0, 0, 0, 0.07);
      height: 50%;
      color: rgb(95, 99, 104);
      font-size: 13px;
      width: 100%;
      .item {
        cursor: pointer;
      }
      .item:hover {
        text-decoration: underline;
      }
    }
    .footer-items {
      height: 100%;
      display: flex;
      align-items: center;
      padding-left: 150px;
      position: relative;
    }
    .left .item {
      margin-right: 27px;
    }
  }
  @media (max-width: 768px) {
    .top-bar {
      height: auto;
    }
    .items.left {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: auto;
      width: 100%;
      position: relative;
    }
    .items.right {
      display: none;
    }
    .search-bar {
      margin-top: 15px;
      width: 90%;
      height: 40px;
      border-radius: 3px;
    }
    .app-bar {
      margin: 0 15px;
      width: 100%;
      height: 40px;
    }
    .tags {
      display: flex;
      width: 90%;
    }
    .tags.right {
      display: none;
    }
    .tag {
      text-align: center;
      padding: 16px 0 0 0;
      flex: 1;
    }
    .content {
      padding: 10px 40px;
    }
    footer {
      .items.left {
        justify-content: flex-start;
        flex-direction: row;
        align-items: center;
        height: 100%;
      }
      .item:first-child {
        padding-left: 15px;
      }
    }
  }
`;