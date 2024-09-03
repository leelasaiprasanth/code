import React from "react";
import categories from "../categories";

interface Props {
  onSelecetCategory: (category: string) => void;
}

export const ExpenseFilter = ({ onSelecetCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelecetCategory(event.target.value)}
    >
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};
