import React from "react";
import Dropzone from "react-dropzone";

const UploadImage = () => {
  return (
    <div className="p-5 border rounded">
      <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p className="btn btn-outline-primary rounded-pill">click to select files</p>
            </div>
          </section>
        )}
      </Dropzone>
    </div>
  );
};

export default UploadImage;
