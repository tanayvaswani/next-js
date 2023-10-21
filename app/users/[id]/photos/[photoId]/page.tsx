import React from "react";

interface Props {
  params: {
    id: number;
    photoId: number;
  };
}

const PhotoPage = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      PhotoPage
      <h3>ID: {id}</h3>
      <h3>Photo ID: {photoId}</h3>
    </div>
  );
};

export default PhotoPage;
