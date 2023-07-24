import React from "react";
import Message from "./Message";

const MessageContainer = () => {
  const Messages = [
    {
      msg: 'Al-Hameed started as an agency in 1979. Its foundation was laid by the late Mr. Abdul Hameed. We are working as an Institutional Distributor, supplying medicine and surgical instruments to all the major Government and private hospitals across Pakistan through tender business. We are also distributing medicines to retail market of Capital region, and some areas of Punjab and Khyber Pakhtun Khwa provinces. We have complete logistic support and a competent team having expertise in supply chain management. We continuously extend and enhance our range of products and services, utilizing our numerous setups in Pakistan, Biogen Pharma is one of them.',
      msg1: 'Currently we are exporting our products to Yemen and Afghanistan Product registration is under process in Sri Lanka. Interdisciplinary and international collaboration, including collaboration with external partners, such as Zam Zam Shifa Pharma ltd Afghanistan, helps ensure we remain at the leading edge.',
    },
  ];

  return (
    <div className="message-container">
      <h1>Mission</h1>
      <div className="message-message">
      <Message msg={Messages[0].msg} msg1={Messages[0].msg1} />
      </div>
    </div>
  );
};

export default MessageContainer;
