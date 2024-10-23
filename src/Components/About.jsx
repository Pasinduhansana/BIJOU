import React from "react";
import bgimg from "../assets/AboutUsimg.jpg";

const About = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bgimg})` }} // Replace with your image path
      ></div>

      {/* Content with Backdrop Filter */}
      <div className="relative z-10 rounded-lg max-w-screen-lg mx-auto py-10 px-4 sm:py-16 sm:px-6 lg:px-8 text-gray-800 space-y-12 backdrop-blur-[20px] bg-white bg-opacity-30 my-10">
        <div className="backdrop-filter  p-4 sm:p-6 rounded-lg">
          <h1 className="text-3xl sm:text-4xl font-bold text-center  sm:mb-10 text-gray-900  p-4 sm:p-6 rounded-lg">
            ABOUT BIJOU
          </h1>
          <p className="text-sm sm:text-base leading-6 sm:leading-7">
            At Bijou, we believe that every piece of jewelry tells a story.
            Whether it’s a symbol of love, a gift of friendship, or a reminder
            of a cherished moment, we craft each item with passion, precision,
            and a dedication to quality.
          </p>
        </div>

        <div className="backdrop-filter  p-4 sm:p-6 rounded-lg">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-gray-900">
            Our Mission
          </h2>
          <p className="text-sm sm:text-base leading-6 sm:leading-7">
            Our mission is to help you celebrate life’s special moments with
            timeless and elegant jewelry that complements your unique style.
            Bijou’s collections are designed to inspire and bring joy to your
            everyday life.
          </p>
        </div>

        <div className="backdrop-filter  p-4 sm:p-6 rounded-lg">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-gray-900">
            Craftsmanship
          </h2>
          <p className="text-sm sm:text-base leading-6 sm:leading-7">
            Every piece of jewelry at Bijou is a result of meticulous
            craftsmanship. We work with skilled artisans to bring our designs to
            life, ensuring that each item reflects the beauty and elegance our
            customers deserve.
          </p>
        </div>

        <div className="backdrop-filter  p-4 sm:p-6 rounded-lg">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-gray-900">
            Our Story
          </h2>
          <p className="text-sm sm:text-base leading-6 sm:leading-7">
            Founded with a passion for fine jewelry, Bijou has grown into a
            brand loved by many. What started as a small, family-owned business
            has become a destination for those looking for the perfect piece to
            mark life’s special occasions. Our journey has been guided by our
            core values of authenticity, quality, and customer satisfaction.
          </p>
        </div>

        <div className="backdrop-filter  p-4 sm:p-6 rounded-lg">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-gray-900">
            Why Bijou?
          </h2>
          <ul className="list-disc list-inside text-sm sm:text-base leading-6 sm:leading-7 space-y-2">
            <li>Handcrafted with care and attention to detail</li>
            <li>Timeless designs that never go out of style</li>
            <li>Ethically sourced materials</li>
            <li>Personalized service and custom jewelry options</li>
          </ul>
        </div>

        <p className="text-base sm:text-lg text-center mt-6 sm:mt-12 leading-6 sm:leading-7  p-4 sm:p-6 rounded-lg">
          Join the Bijou family and let us be part of your story. Discover the
          beauty, elegance, and craftsmanship that sets Bijou apart.
        </p>
      </div>
    </div>
  );
};

export default About;
