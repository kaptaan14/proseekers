"use client";

import React from "react";
import SkillDiv from "./SkillDiv";
import { MdDelete } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { PiDotsThreeVerticalBold } from "react-icons/pi";

import Link from "next/link";
import { GoPlus } from "react-icons/go";

const Modal = ({ isOpen, onClose, children }: any) => {
  if (!isOpen) return null;

  if (isOpen) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50"
      onClick={onClose}
    >
      {/* Modal Content */}
      <div
        className={`bg-white w-full h-[90%] rounded-t-2xl overflow-auto transform transition-transform duration-[1200ms] delay-[300ms] ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
      >
        <div className="p-5">
          <button
            onClick={onClose}
            className=" bg-gray-100 rounded-full text-gray-500 p-2 hover:text-black float-right"
          >
            <RxCross2 />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

const ProjectCard = () => {
  const [save, setSave] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleSave = () => {
    setSave(!save);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="border hover:scale-[1.02] hover:shadow-sm border-gray-100 bg-white transition-all duration-700 pt-5 px-5 pb-2 rounded-2xl">
        <div
          onClick={handleModalOpen}
          className="flex group flex-row gap-3 text-start items-center justify-start"
        >
          {/* Project Image */}
          <div className="border w-20 h-20 border-gray-100 rounded-2xl p-2 overflow-hidden cursor-pointer">
            <img
              className="w-full h-full object-cover"
              src="/profile.png"
              alt=""
            />
          </div>

          {/* Title description */}
          <div className="cursor-pointer w-full">
            <div className="flex flex-row items-center justify-between">
              <h1 className="font-bold text-xl hover:underline">
                Title of the Project
              </h1>

              <IoIosArrowForward
                size={20}
                className="group-hover:text-blue-200"
              />
            </div>
            <div>
              <p className="text-gray-200 truncate max-w-[16rem] sm:max-w-[24rem]">
                Small description of the project Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Sequi quo beatae itaque odio et
                eligendi soluta inventore accusamus, magnam excepturi.
              </p>
            </div>
            <div>
              <p className="text-gray-200 italic">Unpaid</p>
            </div>
          </div>
        </div>

        <div className="mt-2 flex flex-row gap-2 overflow-scroll scroll-container max-w-[22rem] sm:max-w-full">
          <SkillDiv>C++</SkillDiv>
          <SkillDiv>React</SkillDiv>
          <SkillDiv>NextJS</SkillDiv>
          <SkillDiv>NextJS</SkillDiv>
          <SkillDiv>NextJS</SkillDiv>
        </div>

        <div className="mt-5 text-gray-200 flex flex-row justify-between">
          <div>
            <p>
              Posted by{" "}
              <span className="underline italic cursor-pointer">
                @hiddencaptain
              </span>{" "}
            </p>
          </div>
          <div className="flex flex-row gap-2 justify-center items-center">
            <MdDelete className="hover:text-red-600 cursor-pointer" size={30} />
            {!save ? (
              <FaRegBookmark
                className="cursor-pointer"
                onClick={handleSave}
                size={22}
              />
            ) : (
              <FaBookmark
                className="text-blue-200 cursor-pointer"
                onClick={handleSave}
                size={22}
              />
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <div className=" px-4 sm:px-52 mb-10">
          <div className="flex flex-row mt-10 items-center justify-between">
            <div className="flex flex-row gap-2 items-center justify-center">
              <div className="border w-20 h-20 border-gray-100 rounded-2xl p-2 overflow-hidden cursor-pointer">
                <img
                  className="w-full h-full object-cover"
                  src="/profile.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-xl font-semibold">Title of the Project</h2>
                <p>Small tagline of the project with 10 words</p>
                <p className="italic text-sm">24/10/2024</p>
              </div>
            </div>
            <div className="hidden sm:flex flex-row px-8 gap-6 py-5 font-semibold">
              <button className="text-gray-200">
                <PiDotsThreeVerticalBold size={25} />
              </button>
              <button className="hover:bg-gray-50 py-0 px-2 my-1">Share</button>
              <button className="flex transition-all duration-300 hover:border-blue-200 hover:bg-blue-100 flex-row items-center justify-center gap-2   border px-4 py-1.5 rounded-lg">
                <GoPlus />
                <h1>Join</h1>
              </button>
            </div>
          </div>
          <div className="mt-4 flex flex-row gap-2 overflow-scroll scroll-container max-w-[22rem] sm:max-w-[50rem]">
            <SkillDiv>C++</SkillDiv>
            <SkillDiv>React</SkillDiv>
            <SkillDiv>NextJS</SkillDiv>
            <SkillDiv>NextJS</SkillDiv>
            <SkillDiv>NextJS</SkillDiv>
          </div>
          <button className="flex sm:hidden mt-10 w-full hover:border-blue-200 hover:bg-blue-100 flex-row items-center justify-center gap-2   border px-4 py-1.5 rounded-lg">
            <h1>Join</h1>
          </button>

          <div>
            <h1 className="text-4xl mt-10 font-semibold">Description</h1>
            <p className="max-w-[22rem] sm:max-w-[50rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              recusandae amet sit! Ipsum, dolorem sit doloribus, fugiat labore
              alias aperiam provident quia maiores, distinctio facere corporis.
              Reiciendis eligendi modi dolor ipsa, quaerat dicta dolore suscipit
              corrupti unde, tempore ullam minima! Doloribus cumque laborum
              nostrum nulla. Minima officiis alias asperiores commodi inventore
              quod, sint illum, assumenda veniam minus soluta libero culpa
              tempora obcaecati delectus quidem dolores eveniet quas. Distinctio
              iste sed dolore suscipit nostrum officiis, ipsum illo repudiandae.
              Quidem, architecto ab minima sequi autem asperiores neque
              accusamus quisquam hic voluptatum omnis magnam delectus harum
              numquam placeat temporibus necessitatibus sapiente consequatur
              eius enim rerum est a. Qui commodi molestiae ad iste nostrum? Qui
              porro commodi ullam earum cupiditate. Provident eveniet tempore
              repellendus, ipsa suscipit corrupti adipisci iure magni corporis
              eligendi, reiciendis aspernatur natus doloremque illo, ex
              repudiandae maiores voluptatum assumenda architecto modi
              reprehenderit excepturi. Labore praesentium quae, aut sequi
              reprehenderit corrupti. Dolorem doloribus ab nemo vitae corporis
              dolores quo ut eius aliquam est consequatur, voluptate inventore
              natus cumque reiciendis aut ea vel. Saepe fugiat dolorem sed
              tempore totam tenetur eius vel cumque repudiandae reprehenderit,
              excepturi, reiciendis quisquam alias earum dolores temporibus,
              explicabo doloribus obcaecati fugit eaque facilis minus
              consequuntur. Maxime provident, quia, iure praesentium assumenda
              sequi dicta obcaecati inventore fuga, voluptatum eaque
              perspiciatis voluptatibus quo illo iste! Asperiores eos ea, aut
              nisi pariatur fugiat ipsam mollitia sunt, cum beatae magnam?
              Cumque nostrum in voluptas! Exercitationem illo assumenda
              perferendis reprehenderit consequatur. Molestias, dolore minus
              earum iste voluptatibus obcaecati, quae consequatur fugiat tempore
              cumque laudantium hic et doloribus temporibus repellendus enim
              facilis corrupti. Veniam harum tempora quisquam temporibus, rerum
              aperiam mollitia laboriosam cum praesentium amet ex adipisci
              voluptate ipsum neque eius rem aspernatur voluptatem eum
              architecto dolorem sed magni perspiciatis? Officia aperiam aliquid
              officiis sit iste id. Magni temporibus sed, porro rem cumque natus
              repellendus quae tempora cum expedita animi veniam ut esse itaque,
              iste hic, voluptas maiores pariatur. Recusandae qui minima non
              beatae consectetur deleniti quaerat, rem animi porro asperiores
              saepe error quod commodi tempora. Id illo ex rerum, magni eaque
              voluptates voluptatibus inventore porro corporis! Id, ad rem ipsum
              corrupti asperiores cumque quae cum quisquam? Nulla ducimus enim
              tempore error asperiores officiis recusandae molestiae earum
              aliquid quasi itaque totam, sapiente placeat dolorum pariatur
              saepe temporibus blanditiis, nisi hic necessitatibus incidunt!
              Perferendis dolor non libero doloremque deleniti officiis eos
              placeat hic dolorem repellat quis a adipisci amet voluptates
              ducimus soluta, commodi cum explicabo.
            </p>

            <p className="italic mt-20">Author : @hiddencaptain</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProjectCard;
