/* eslint-disable react/prop-types */
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute z-10 left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 opacity-20 hover:bg-gray-700 hover:opacity-40 p-2 rounded-full cursor-pointer"
      onClick={onClick}
    >
      <BiChevronLeft className="text-white text-2xl" />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute z-10 right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 opacity-20 hover:bg-gray-700 hover:opacity-40 p-2 rounded-full cursor-pointer"
      onClick={onClick}
    >
      <BiChevronRight className="text-white text-2xl" />
    </div>
  );
};

export { CustomPrevArrow, CustomNextArrow };
