"use client";

import { useState, useEffect } from "react";

export default function TagInput() {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      setTags((prevTags) => [...prevTags, inputValue]);
      setInputValue("");
    }
  };

  const handleRemoveTag = (tagToRemove: string): void => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  useEffect(() => {
    console.log("Updated tags:", tags);
  }, [tags]);

  return (
    <div className="flex flex-col gap-2 mt-2">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleAddTag}
        placeholder="Type and press Enter to add a technology"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />

      <div className="flex flex-wrap gap-2">
        {tags.length > 0 ? (
          tags.map((tag, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
            >
              {tag}
              <button
                onClick={() => handleRemoveTag(tag)}
                className="text-white hover:text-gray-300 focus:outline-none"
                aria-label={`Remove ${tag}`}
              >
                &times;
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm">No Technologies added yet.</p>
        )}
      </div>
    </div>
  );
}
