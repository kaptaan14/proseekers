import React from "react";
import SkillDiv from "./SkillDiv";
import { GoPlus } from "react-icons/go";
import { PiDotsThreeVerticalBold } from "react-icons/pi";

const ProjectView = () => {
  return (
    <div className="w-full  mb-20">
      <div className="flex flex-row  items-center justify-between">
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
            <h1>Apply</h1>
          </button>
        </div>
      </div>
      <div className="mt-4 flex flex-row gap-2 overflow-scroll scroll-container">
        <SkillDiv>C++</SkillDiv>
        <SkillDiv>React</SkillDiv>
        <SkillDiv>NextJS</SkillDiv>
        <SkillDiv>NextJS</SkillDiv>
        <SkillDiv>NextJS</SkillDiv>
      </div>
      <button className="flex sm:hidden mt-10 w-full hover:border-blue-200 hover:bg-blue-100 flex-row items-center justify-center gap-2   border px-4 py-1.5 rounded-lg">
        <h1>Apply</h1>
      </button>

      <div>
        <h1 className="text-4xl mt-10 font-semibold">Description</h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At recusandae
          amet sit! Ipsum, dolorem sit doloribus, fugiat labore alias aperiam
          provident quia maiores, distinctio facere corporis. Reiciendis
          eligendi modi dolor ipsa, quaerat dicta dolore suscipit corrupti unde,
          tempore ullam minima! Doloribus cumque laborum nostrum nulla. Minima
          officiis alias asperiores commodi inventore quod, sint illum,
          assumenda veniam minus soluta libero culpa tempora obcaecati delectus
          quidem dolores eveniet quas. Distinctio iste sed dolore suscipit
          nostrum officiis, ipsum illo repudiandae. Quidem, architecto ab minima
          sequi autem asperiores neque accusamus quisquam hic voluptatum omnis
          magnam delectus harum numquam placeat temporibus necessitatibus
          sapiente consequatur eius enim rerum est a. Qui commodi molestiae ad
          iste nostrum? Qui porro commodi ullam earum cupiditate. Provident
          eveniet tempore repellendus, ipsa suscipit corrupti adipisci iure
          magni corporis eligendi, reiciendis aspernatur natus doloremque illo,
          ex repudiandae maiores voluptatum assumenda architecto modi
          reprehenderit excepturi. Labore praesentium quae, aut sequi
          reprehenderit corrupti. Dolorem doloribus ab nemo vitae corporis
          dolores quo ut eius aliquam est consequatur, voluptate inventore natus
          cumque reiciendis aut ea vel. Saepe fugiat dolorem sed tempore totam
          tenetur eius vel cumque repudiandae reprehenderit, excepturi,
          reiciendis quisquam alias earum dolores temporibus, explicabo
          doloribus obcaecati fugit eaque facilis minus consequuntur. Maxime
          provident, quia, iure praesentium assumenda sequi dicta obcaecati
          inventore fuga, voluptatum eaque perspiciatis voluptatibus quo illo
          iste! Asperiores eos ea, aut nisi pariatur fugiat ipsam mollitia sunt,
          cum beatae magnam? Cumque nostrum in voluptas! Exercitationem illo
          assumenda perferendis reprehenderit consequatur. Molestias, dolore
          minus earum iste voluptatibus obcaecati, quae consequatur fugiat
          tempore cumque laudantium hic et doloribus temporibus repellendus enim
          facilis corrupti. Veniam harum tempora quisquam temporibus, rerum
          aperiam mollitia laboriosam cum praesentium amet ex adipisci voluptate
          ipsum neque eius rem aspernatur voluptatem eum architecto dolorem sed
          magni perspiciatis? Officia aperiam aliquid officiis sit iste id.
          Magni temporibus sed, porro rem cumque natus repellendus quae tempora
          cum expedita animi veniam ut esse itaque, iste hic, voluptas maiores
          pariatur. Recusandae qui minima non beatae consectetur deleniti
          quaerat, rem animi porro asperiores saepe error quod commodi tempora.
          Id illo ex rerum, magni eaque voluptates voluptatibus inventore porro
          corporis! Id, ad rem ipsum corrupti asperiores cumque quae cum
          quisquam? Nulla ducimus enim tempore error asperiores officiis
          recusandae molestiae earum aliquid quasi itaque totam, sapiente
          placeat dolorum pariatur saepe temporibus blanditiis, nisi hic
          necessitatibus incidunt! Perferendis dolor non libero doloremque
          deleniti officiis eos placeat hic dolorem repellat quis a adipisci
          amet voluptates ducimus soluta, commodi cum explicabo.
        </p>

        <p className="italic mt-20">Author : @hiddencaptain</p>
      </div>
    </div>
  );
};

export default ProjectView;
