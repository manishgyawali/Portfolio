import React from "react";
import Image0 from "../../assets/Images/blogimg.jpeg";
import Image1 from "../../assets/Images/blogimg1.jpeg";
import Image2 from "../../assets/Images/blogimg2.jpeg";
import Image3 from "../../assets/Images/personimg.jpeg";

const Blog = () => {
  const blogData = [
    {
      image: Image0,
      name: "Mark Wiens",
      image1: Image3,
      date: "JAN, 18, 2021",
      likes: "15 LIKES",
      comments: "3 COMMENTS",
      heading: "Break Through Self Doubt And Fear",
      parag:
        "Dream interpretation has many forms; it can be done for the sake of fun, hobby or can be taken up as a serious career.",
    },
    {
      image: Image1,
      image1: Image3,
      name: "Mark Wiens",
      date: "JAN, 18, 2021",
      likes: "15 LIKES",
      comments: "3 COMMENTS",
      heading: "Portable Fashion for young women",
      parag:
        "You may be a skillful, effective employer but if you don’t trust your personnel and the opposite, then the chances of improving.",
    },
    {
      image: Image2,
      date: "JAN, 18, 2021",
      image1: Image3,
      name: "Mark Wiens",
      comments: "3 COMMENTS",
      likes: "15 LIKES",
      heading: "Do Dreams Serve As A Premonition",
      parag:
        "So many of us are demotivated to achieve anything. Such people are not enthusiastic about anything. They don’t want to work involved.",
    },
  ];

  return (
    <div className="bg-gray-50 py-24 flex flex-col gap-20">
      <div className="items-center justify-center text-center flex flex-col gap-3  w-11/12 mx-auto">
        <h1 className="font-semibold text-4xl">Latest posts from our blog</h1>
        <p className="w-7/12 text-gray-400">
          You may be a skillful, effective employer but if you don’t trust your
          personnel and the opposite, then the chances of improving and
          expanding the business.
        </p>
      </div>
      <div className=" justify-center gap-5 flex-wrap grid  md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto">
        {blogData.map((val, i) => (
          <div key={i} className="bg-white   rounded shadow-lg">
            <div>
              <img
                src={val.image}
                alt="blog post"
                className="w-full  object-cover"
              />
            </div>
            <div className=" ">
              <div className="flex text-sm   ">
                <div className="flex items-center gap-3 mt-2 p-2">
                  <img
                    src={val.image1}
                    alt="author"
                    className="w-7 h-7 rounded-full"
                  />
                  <h2>{val.name}</h2>
                </div>
                <div className="mt-2 flex w-full  gap-2  items-center  ">
                  <h2>{val.date}</h2>
                  <h2>{val.likes} </h2>
                  <h2>{val.comments}</h2>
                </div>
              </div>
              <div className="mt-3  flex flex-col gap-3 px-5 py-3">
                <h1 className="font-semibold text-xl">{val.heading}</h1>
                <p className="text-gray-500 ">{val.parag}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
