import { useState } from "react";
import { WithContext as ReactTags, Tag } from "react-tag-input";

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

interface TagInputProps {
  defaultTags?: Tag[]; 
  onChange?: (tags: Tag[]) => void; 
}

export default function TagInput({ defaultTags = [], onChange }: TagInputProps) {
  const [tags, setTags] = useState<Tag[]>(defaultTags);

  const handleDelete = (i: number) => {
    const updatedTags = tags.filter((_, index) => index !== i);
    setTags(updatedTags);
    onChange?.(updatedTags);
  };

  const handleAddition = (tag: Tag) => {
    const updatedTags = [...tags, tag];
    setTags(updatedTags);
    onChange?.(updatedTags);
  };

  return (
    <ReactTags
      tags={tags}
      handleDelete={handleDelete}
      handleAddition={handleAddition}
      delimiters={delimiters}
      placeholder="Type and press Enter..."
    />
  );
}
