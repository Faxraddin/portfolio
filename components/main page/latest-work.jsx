import Image from "next/image";
import {AiOutlineArrowRight} from 'react-icons/ai';

const LatestWork = (props) => {
  return (
    <div className="w-1/3 font-light font-mono md:w-2/5 flex-1 shadow hover:shadow-xl ease-linear latest-work ">
      <div className="p-2 border border-solid border-thin flex flex-col gap-3">
        <Image src={props.img} width={320} height={170} />
        <div className="flex items-center justify-between w-[97%]">
          <h2 className="sm:text-[3vw]">{props.name}</h2> 
          <AiOutlineArrowRight className="sm:text-[5vw]" fontSize={25}></AiOutlineArrowRight>
        </div>
      </div>
    </div>
  );
};

export default LatestWork;