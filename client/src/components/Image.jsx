import { IKImage } from "imagekitio-react";
import React from "react";

const Image = ({ path, alt, className, h, w }) => {
  return (
    <IKImage
      className={`${className} w-full rounded-2xl  object-cover`}
      urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT}
      path={path}
      transformation={[
        {
          height: h,
          width: w,
        },
      ]}
      alt={alt}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
    />
  );
};

export default Image;
