import React, { useRef } from "react";
import BaseButton from "./BaseButton";

const FileUploadButton = ({ onFileSelect, title }) => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    onFileSelect(file);
  };

  return (
    <div>
      <BaseButton
        classes="bg-primary p-1.5 rounded-md text-white active:bg-primaryActive"
        clickHandler={handleButtonClick}
      >
        {title}
      </BaseButton>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default FileUploadButton;
