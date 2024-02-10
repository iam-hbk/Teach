"use client";

import React, { useState, ChangeEvent } from "react";
import { FaCaretRight } from "react-icons/fa";

interface RadioOption {
  id: string;
  label: string;
  defaultChecked?: boolean;
}

const radioOptions: RadioOption[] = [
  { id: "overview", label: "Overview", defaultChecked: true },
  { id: "teach", label: "Why the T.E.A.C.H. Academic Competency Tool ?" },
  { id: "work", label: "How does it work?" },
  { id: "teaching", label: "TEACHING" },
  { id: "expertise", label: "EXPERTISE" },
  { id: "assessment", label: "ASSESSMENT" },
  { id: "caring", label: "CARING & COMMITMENT" },
  { id: "higher-ed", label: "HIGHER EDUCATION CONTEXT" },
];

interface RadioSelectionProps {
  selected: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const RadioSelection: React.FC<RadioSelectionProps> = ({
  handleChange,
  selected,
}) => {
  return (
    <div className="flex flex-col p-4">
      {radioOptions.map((option) => (
        <div className="form-control" key={option.id}>
          <label
            className={`label m-2 inline-flex cursor-pointer items-center justify-between rounded-md p-3 ${
              selected === option.id
                ? "bg-primary text-primary-content"
                : "box-border hover:border hover:border-primary"
            }`}
          >
            <span className="label-text bg-inherit text-inherit">
              {option.label}
            </span>
            <input
              type="radio"
              name="radio-choice"
              className="hidden"
              value={option.id}
              onChange={handleChange}
              checked={selected === option.id}
            />
            <FaCaretRight />
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioSelection;
