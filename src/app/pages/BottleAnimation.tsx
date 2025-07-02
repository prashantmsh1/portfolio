import clsx from "clsx";
import { motion } from "framer-motion";
import { ArrowBigDown, ArrowBigUp, Circle } from "lucide-react";
import { useState } from "react";

const BottleAnimation = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div onClick={(pre) => setIsActive((prev) => !prev)} className=" h-screen flex-col  flex items-center justify-center relative cursor-pointer ">
      {/* <button onClick={() => setIsActive((prev) => !prev)}>Toggle Animation</button> */}
      <motion.div
        initial={{ scale: 0.3, opacity: 0.1 }} // Only used on mount
        animate={{ scale: isActive ? 1 : 0.3, opacity: isActive ? 1 : 0.0 }} // Animate on state change
        transition={{ duration: 0.5 }}
        className=" flex p-4  w-[400px] rounded-full items-center justify-center h-[400px] bg-blue-700">
        <motion.div
          initial={{ scale: 1, opacity: 0.1 }}
          animate={{ scale: 1, opacity: isActive ? 1 : 1 }}
          transition={{ duration: 0.5 }}
          className=" bg-white h-full flex items-center justify-center w-full rounded-full relative">
          <div className=" flex absolute items-center w-[600px] justify-center h-full ">
            <motion.h1
              initial={{
                opacity: 0.0,
                scale: 0.3,
                y: 300,
              }}
              animate={{
                opacity: isActive ? 1 : 0.0,
                scale: isActive ? 1 : 0.3,
                y: isActive ? 0 : 300,
              }}
              transition={{ duration: 0.5 }}
              className=" text-center font-bold text-4xl text-gray-700 ">
              Filter any water by using the awesome bottle
            </motion.h1>
          </div>
        </motion.div>
      </motion.div>
      <motion.div className=" absolute">
        <motion.div initial={{ opacity: 1.0, y: 0 }} animate={{ opacity: isActive ? 1 : 1, y: isActive ? -200 : 0 }} transition={{ duration: 0.5 }}>
          <ArrowBigDown />
        </motion.div>
        <motion.div initial={{ opacity: 1.0, y: 0 }} animate={{ opacity: isActive ? 1 : 1, y: isActive ? 200 : 0 }} transition={{ duration: 0.5 }}>
          <ArrowBigUp />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BottleAnimation;
