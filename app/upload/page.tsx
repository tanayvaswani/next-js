"use client";
import { CldUploadWidget } from "next-cloudinary";
import React from "react";

const UploadPage = () => {
  return (
    <CldUploadWidget uploadPreset="pbqxsl5i">
      {({ open }) => (
        <button className="btn btn-primary" onClick={() => open()}>
          Upload Files
        </button>
      )}
    </CldUploadWidget>
  );
};

export default UploadPage;
