import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideBox from "./SlideBox";

function Creator_Slider() {
  const creatorSlides = [
    {
      image: "donation.webp",
      heading: "Donation Form",
      info: "Gametosa provides content creators with a convenient and easy way to receive donations. Receive and withdraw donations via Indian Payment gateway.",
    },
    {
      image: "membership.webp",
      heading: "Creator Membership",
      info: "Exclusive features for the creator and for their fans. Creator can now grow their revenue by 95% using Gametosa Membership features.",
    },
    {
      image: "superchat.webp",
      heading: "Superchat",
      info: "Exclusive features for the creator and for their fans. Creator can now grow their revenue by 95% using Gametosa Superchat features.",
    },
    {
      image: "firstmobilescreen.webp",
      heading: "Creator Tool",
      info: "Gametosa provides creator tools like alerts box, overlays, donation links, and more.",
    },
    {
      image: "firstmobilescreen.webp",
      heading: "Brands Integration",
      info: "Gametosa provides brand campaigns with a convenient and easy way to collaborate with creators.",
    },
  ];
  return (
    <>
      <div className="p-4">
        <SlideBox  slides={creatorSlides} />
      </div>
    </>
  );
}

export default Creator_Slider;
