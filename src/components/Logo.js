import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-black text-light flex items-center justify-center rounded-full text-2xl font-bold"
        whileHover={{
          backgroundColor: ['#121212'],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        SH
      </MotionLink>
    </div>
  );
};

export default Logo;
