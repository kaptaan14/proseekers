"use client";

import React from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const SaveDelete = () => {
  const [save, setSave] = React.useState(false);

  const handleSave = () => {
    setSave(!save);
  };

  return (
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
  );
};

export default SaveDelete;
