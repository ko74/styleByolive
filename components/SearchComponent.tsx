import clsx from "clsx";
import React from "react";

type SearchComponentProps = {
  prepend?: JSX.Element | React.ReactElement | string | number | any;
  append?: JSX.Element | React.ReactElement | string | number | any;
  prependClasses?: string;
};

const SearchComponent: React.FC<SearchComponentProps> = ({
  append,
  prepend,
  prependClasses,
}) => {
  return (
    <div className=" flex items-center gap-1 border border-gray-400  rounded relative p-1">
      {prepend && (
        <div className={clsx("cursor-pointer", prependClasses)}>{prepend}</div>
      )}

      <input
        type="text"
        name=""
        id=""
        className={clsx(
          "rounded outline-none focus:outline-none",
          "relative "
        )}
      />

      {append && <div className="cursor-pointer">{append}</div>}
    </div>
  );
};

export default SearchComponent;
