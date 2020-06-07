import * as React from 'react';
import styles = require('./styles.scss');
import VideoPlayer from "../components/videoplayer/VideoPlayer";

require('../styles/style.css');

const AfterpartyPage: React.FC<{}> = () => {

  return (
    <div className={styles.afterparty}>
      <VideoPlayer />

    <div className="block-items">
      <p id="title_text">Afterparty big scene</p>

      <div className="btns">

        <button className="count-btn">
          <i className="fa fa-users" aria-hidden="true"></i>2\10
        </button>

        <button className="count-btn">
          <i className="fa fa-eye" aria-hidden="true"></i>13
        </button>

        <button className="count-btn">Leave</button>
      </div>
    </div>


    <section className="lecture">
      <img src="public/assets/afterparty/фигма 2 1.png" />
      <img src="public/assets/afterparty/Group 9.png"  />
      <h3>Lecture: Why Students should have mental health days</h3>
    </section>

    <section className="very-visited-rooms">
      <h3>Самые посещаемые комнаты</h3>
      <div className="room-block">
        <div className="item">
          <img src="public/assets/afterparty/image 11.png" />
          <div className="control">
            <h3>Пляж</h3>

            <div className="btns">

              <button className="count-btn">
                <i className="fa fa-users" aria-hidden="true"></i>2\10
              </button>

              <button className="count-btn">
                <i className="fa fa-eye" aria-hidden="true"></i>13
              </button>

            </div>


          </div>
          <h3>Lecture: 5 steps to remove yourself</h3>
        </div>
        <div className="item">
          <img src="public/assets/afterparty/image 13.png" />
          <div className="control">
            <h3>Улица</h3>

            <div className="btns">

              <button className="count-btn">
                <i className="fa fa-users" aria-hidden="true"></i>2\10
              </button>

              <button className="count-btn">
                <i className="fa fa-eye" aria-hidden="true"></i>13
              </button>
            </div>
          </div>
          <h3>Lecture: How do virus tests actually work?</h3>
        </div>
        <div className="item">
          <img src="public/assets/afterparty/image 14.png" />
          <div className="control">
            <h3>Лес</h3>
            <div className="btns">

              <button className="count-btn">
                <i className="fa fa-users" aria-hidden="true"></i>2\10
              </button>

              <button className="count-btn">
                <i className="fa fa-eye" aria-hidden="true"></i>13
              </button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src="public/assets/afterparty/image 18.png"/>
          <div className="control">
            <h3>Космос</h3>

            <div className="btns">

              <button className="count-btn">
                <i className="fa fa-users" aria-hidden="true"></i>2\10
              </button>

              <button className="count-btn">
                <i className="fa fa-eye" aria-hidden="true"></i>13
              </button>

            </div>
          </div>
          <h3>Lecture: The link between climate</h3>
        </div>
        <div className="item">
          <img src="public/assets/afterparty/image 19.png" />
          <div className="control">
            <h3>Спальня</h3>

            <div className="btns">
              <button className="count-btn">
                <i className="fa fa-users" aria-hidden="true"></i>2\10
              </button>

              <button className="count-btn">
                <i className="fa fa-eye" aria-hidden="true"></i>13
              </button>
            </div>
          </div>
          <h3>Lecture: When is pandemic over?</h3>
        </div>
        <div className="item">
          <img src="public/assets/afterparty/image 33.png" />
          <div className="control">
            <h3>Япония</h3>

            <div className="btns">

              <button className="count-btn">
                <i className="fa fa-users" aria-hidden="true"></i>2\10
              </button>

              <button className="count-btn">
                <i className="fa fa-eye" aria-hidden="true"></i>13
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>


  </div>)
};

export default AfterpartyPage;
