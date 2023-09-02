import BaseButton from "@/components/buttons/BaseButton";
import FileUploadButton from "@/components/buttons/FileUploadButton";
import React from "react";
import { BsCamera } from "react-icons/bs";

const EmptyPost = ({ selectFileHandler }) => {
  return (
    <div className="py-10 text-center">
      <div className="grid h-auto place-items-center">
        <div className="grid h-12 w-12 place-content-center place-items-center justify-center rounded-full border border-solid border-black">
          <BsCamera size={24} />
        </div>
      </div>

      <div className="my-4">
        <h3 className="text-3xl font-extrabold">Share Photos</h3>
      </div>
      <div className="mb-3">
        <p className="text-state-600 text-sm font-normal">
          When you in upload photos, they'll appear here.
        </p>
      </div>
      <div>
        <FileUploadButton
          onFileSelect={selectFileHandler}
          title="Select from computer"
        />
      </div>
    </div>
  );
};

export default EmptyPost;
