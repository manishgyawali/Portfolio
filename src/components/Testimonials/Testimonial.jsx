import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonial = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const testimonialData = [
    {
      image:
        "https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills, the bigger the payoff you.",
      name: "Harriet Maxwell",
      position: "CEO at Google",
    },
    {
      image:
        "https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "A purpose is the eternal condition for success. Every former smoker can tell you just how hard it is to stop smoking cigarettes. However.",
      name: "Carolyn Craig",
      position: "CEO at Facebook",
    },
    {
      image:
        "https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills, the bigger the payoff you.",
      name: "Harriet Maxwell",
      position: "CEO at Google",
    },
    {
      image:
        "https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "A purpose is the eternal condition for success. Every former smoker can tell you just how hard it is to stop smoking cigarettes. However.",
      name: "Carolyn Craig",
      position: "CEO at Facebook",
    },
  ];

  return (
    <div className="bg-[#F8F7F3] py-24">
      <div className=" flex flex-col gap-15">
        <div className="w-11/12 mx-auto text-center flex flex-col gap-3">
          <h1 className="font-semibold text-4xl">Client’s Feedback About Me</h1>
          <p className="w-7/12 text-gray-400 mx-auto">
            It is very easy to start smoking but it is an uphill task to quit
            it. Ask any chain smoker or even a person.
          </p>
        </div>
        <Carousel
          swipeable={true} // Make it swipeable on touch devices
          draggable={false}
            // showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          transitionDuration={1000}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          className=" mt-14 "
        >
          {testimonialData.map((val, i) => (
            <div
              key={i}
              className="flex font-montserrat gap-10 py-14 md:py-28 rounded-md bg-gray-100 shadow-md m-4"
            >
              <div className="flex flex-col px-10 items-center   lg::w-6/12 mx-auto gap-6 ">
                <p className="  md:text-xl lg:w-5/12   text-center">{val.text}</p>
                <div className="flex gap-4 text-center items-center justify-center">
                  <div>
                    <img
                      src={val.image}
                      alt=""
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1 text-center ">
                    <h1 className=" text-xl font-semibold hover:text-[#ED9728] transition-all ">
                      {val.name}
                    </h1>
                    <h2 className="text-gray-500 text-sm">{val.position}</h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
