import React, { useState } from "react";
import { MESSAGES } from "../utils/constants";
import { sendResponse } from "../utils/api";

const ValentineMessage = () => {
  const [message, setMessage] = useState(MESSAGES.greeting);

  const handleResponse = async (answer) => {
    setMessage(answer === "yes" ? MESSAGES.yesResponse : MESSAGES.noResponse);
    await sendResponse(answer); // Send response to backend (optional)
  };

  return (
    <div className="message-container">
      <h1>{message}</h1>
      {message === MESSAGES.greeting && (
        <div>
          <button className="btn yes" onClick={() => handleResponse("yes")}>
            Yes 💖
          </button>
          <button className="btn no" onClick={() => handleResponse("no")}>
            No 💔
          </button>
        </div>
      )}
    </div>
  );
};

export default ValentineMessage;
