import React from "react";
import Image from "next/image";
import Link from "next/link";
const Page = async () => {
  const data = await fetch("https://api.imgflip.com/get_memes");
  const response = await data.json();
  console.log(response.data.memes);
  interface Memes {
    id: string;
    name: string;
    url: string;
  }
  return (
    <>
      <h1 className="text-center text-xl mt-4">Meme Maker</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {response.data.memes.map((item: Memes) => {
          return (
            <div
              key={item.id}
              className="shadow-md p-5 m-2 flex justify-start items-center flex-col gap-3 bg-[#fdfffe] text-[#16a085]"
            >
              <Image
                src={item.url}
                alt="memes"
                style={{
                  width: "350px",
                  height: "350px",
                  objectFit: "cover", // Adjusts how the image fits into the container
                }}
                width={200}
                height={200}
              />
              <button
                type="submit"
                className="
    w-full 
    py-3 
    bg-gradient-to-r 
    from-indigo-500 
    to-blue-700 
    text-white 
    text-lg 
    font-bold 
    uppercase 
    tracking-wider 
    rounded-lg 
    shadow-lg 
    hover:from-indigo-400 
    hover:to-blue-600 
    hover:shadow-xl 
    transition-all 
    duration-300 
    ease-in-out
  "
              >
                <Link
                  href={{
                    pathname: "creatememes/",
                    query: {
                      url: item.url,
                      id: item.id,
                    },
                  }}
                >
                  Generate Meme
                </Link>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Page;
