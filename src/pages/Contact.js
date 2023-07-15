import { React, useState } from 'react';
import { PopupButton } from '@typeform/embed-react'
import { LiaLongArrowAltRightSolid } from 'react-icons/lia';
import qrcode from '../assets/img/qrcode.webp';

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className='contact'>
      <div className="contact-links">
        <a href="mailto:info@1estudio.com"> <LiaLongArrowAltRightSolid size={16} /> Email : info@1estudio.com</a>
        <a href="https://instagram.com/onee_studio?igshid=YmM0MjE2YWMzOA==" target='blank'>  <LiaLongArrowAltRightSolid size={16} /> Instagram : onee_studio</a>
        <a href="https://www.xiaohongshu.com/user/profile/64a57874000000001c02b090?xhsshare=WeixinSession&appuid=55859bdc62a60c59ecc014e4&apptime=1688655507" target='blank'> <LiaLongArrowAltRightSolid size={16} /> Red : 万一工作室</a>
        <div className="hover-image" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <p className='wechat'> <LiaLongArrowAltRightSolid size={16} /> WeChat</p>
          {isHovered && <img src={qrcode} alt="QR Code" className="qrcode" />}
        </div>
      </div>
      <p>To unlock our personalized services, kindly use the button provided below to request a quotation and schedule a <span>FREE</span> consultation!</p>
      <PopupButton id="ffmTiZVz" style={{ fontSize: 13 }} className="typeform-button">
        Get a quotation
      </PopupButton>
    </div>
  );
};

export default Contact;
