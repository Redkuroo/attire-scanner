
import React, { useState, useEffect } from "react";
import { useNavigate} from 'react-router-dom';

import status from '../image/status.png'
import accept from '../image/accept.png'
import thumbup from '../image/thumb-up.png'
import standby from '../image/neutral.jpg'
import ready from '../image/scanning.jpg'
import active from '../image/active.jpg'; // Import the active image

import { ClipLoader } from 'react-spinners'

function Scanner() {
  const navigate = useNavigate(); // Initialize useHistory
  //Status sa tao if ready na siya mag thumbs up or dili pa
  const imageA = standby;
  const imageB = ready;

  const [personImage, setpersonImage] = useState(imageA);
  const [statusImage, setstatusImage] = useState(status);
  const [darkenImage, setdarkenImage] = useState(false);
  const [thumbup_st, setthumbUp] = useState(false);
  const [message, setMessage] = useState('Waiting for command...');
  const [loading, setLoading] = useState(false);
  const [scan_message, setscanMessage] = useState(false);

  //Para ni sa boolean visibility sa kadtong student scanned. E disable niya ang visibility ato after 4 seconds na nagpakita.
  useEffect(() => {
    if (scan_message) {
      setTimeout(() => {
        setscanMessage(false);
      }, 4000);
    }
  }, [scan_message]);

  //Image ni sa tao
  const change_image = (img) => {
    setpersonImage(img);
  }

  //Para ni sa click dark effect kadtong X button sa upper left
  const click_dark = () => {
    setdarkenImage(!darkenImage);
    navigate('/dashboard');
  }

  //Para ni sa click lighten effect sa thumbs up na button.
  const click_thumbsup = () => {
    setthumbUp(!thumbup_st);
  }

  //Para ni sa click change image effect sa status indicator.
  const status_event = (img) => {
    setstatusImage(img);
  };

  const message_event = () => {
    //E change niya ang text sa kadtong lower left na white text container.
    setMessage('Calibration starting. Please stand still!');
    setLoading(true);

    //within 3 seconds. Moingon na ang message na calibration done og ang status mo back to X and thumbs up to darker image.
    setTimeout(() => {
      setMessage('Calibration Done.')
      setLoading();
      status_event(status);
      setthumbUp(thumbup_st);
      change_image(active);
    }, 3000);

    //magpakita diri tong student scanned na message
    setTimeout(() => {
      setscanMessage(true);
    }, 4000);

    //Back to start.
    setTimeout(() => {
      setMessage('Waiting for command...');
      setpersonImage(imageA);
    }, 6000);
  }

  //Sequence of events na mahitabo after gi click nimo ang image.
  const start_event = () => {
    change_image(imageB);
    click_thumbsup();
    status_event(accept);
    message_event();
  };

  return (
    <div className="bg-gray-950 h-screen flex flex-col relative">
      {scan_message && (
        <div className="flex transition-opacity duration-500 ${scan_message ? 'opacity-100' : 'opacity-0'}` space-x-5 absolute top-[22rem] left-[26rem] rounded-md bg-gray-300 w-[28rem] h-[5rem] items-center justify-center">
          <img src={accept} className="w-[2.7rem] h-[4.6]" />
          <h2 className="font-medium text-black text-[22px]">Student scanned.</h2>
        </div>
      )}
      <button className="absolute top-0 left-0 m-4" onClick={click_dark}>
        <img src={status} alt="Back Button" className={`w-[2.5rem] h-[2.5rem] ${darkenImage ? 'brightness-50 transition duration-100' : ''}`} />
      </button>
      <div className="flex justify-center items-center h-screen">
        <img src={personImage} className="w-[30rem] h-[28rem] rounded-[10px]" onClick={start_event} />
      </div>
      <div className="bg-[#353535] h-[12rem] flex justify-end space-x-4 ">
        <div className="flex items-center justify-center w-[60%] p-5 shadow-black shadow-md bg-[#535353]">
        <div className="flex items-center justify-center bg-white rounded-lg w-[29.6rem] h-[5rem]">
            {loading ? (
              <div className="flex items-center space-x-7">
                <ClipLoader color="#000" loading={loading} size={35} />
                <h1 className="font-bold text-[20px]">{message}</h1>
              </div>
            ) : (
              <h2 className="text-[18px] font-bold">{message}</h2>
            )}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-[#535353] w-[13rem] p-2 space-y-2 shadow-black shadow-md">
          <button className="w-[4.25rem] h-[4.5rem] ">
            <img src={thumbup} className={`${thumbup_st ? 'transition duration-100' : 'brightness-50 transition duration-100'}`} />
          </button>
          <p className="font-semibold text-[15px] text-white">Thumbs up to start</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-[#535353] w-[13rem] p-2 space-y-2 shadow-black shadow-md">
          <h1 className="font-bold text-white text-[22px]">Zoom</h1>
          <p className="text-[20px] text-white">145%</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-[#535353] w-[13rem] p-2 space-y-2 shadow-black shadow-md">
          <h1 className="font-bold text-white text-[22px]">Status</h1>
          <img src={statusImage} className="w-[2.7rem] h-[4.6]" />
        </div>
      </div>
    </div>
  );
}

export default Scanner;
