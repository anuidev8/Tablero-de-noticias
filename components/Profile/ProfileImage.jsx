import React from 'react';


const ProfileImage = ({ path, description, size }) => {

  return (
    <>
      <figure className="image-profile">
        <img alt={description} src={path} />
      </figure>

      <style jsx>{`

          .image-profile{
            width: ${size || '50px'};
            height: ${size || '50px'};
            border-radius: 50%;
            border:1px solid white ;
            overflow: hidden;
          }

          .image-profile img{
            width: 50px;
            height: 50px;
            object-fit: cover;
          }

          `}</style>
    </>

  )

}


export default ProfileImage
