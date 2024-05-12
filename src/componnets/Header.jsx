import styled from "styled-components";
import image from "../image/rohan.png";
import SocialMedia from "./SocialMedia";
import { motion } from "framer-motion";
import { useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  background-color: #f0f0f0;
  gap: 30px;
  width: 80vw;
`;

const ContentContainer = styled.div`
  flex: 1;
`;

const ImageFormat = styled.img`
  width: 100px;
  height: auto;
  border-radius: 50%;
`;

const HeaderFormat = styled.header`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

function Header() {
  const textIndex = useMotionValue(0);
  const texts = ["ROHAN GUPTA", "Software Developer"];

  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 60, {
      type: "tween",
      duration: 1,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });
  }, []);

  const textIndexSolution = useMotionValue(0);
  const textsSolution = [" LeetCode Solutions!", " Learnings!"];

  const baseTextSolution = useTransform(
    textIndexSolution,
    (latest) => textsSolution[latest] || ""
  );
  const countSolution = useMotionValue(0);
  const roundedSolution = useTransform(countSolution, (latest) =>
    Math.round(latest)
  );
  const displayTextSolution = useTransform(roundedSolution, (latest) =>
    baseTextSolution.get().slice(0, latest)
  );
  const updatedThisRoundSolution = useMotionValue(true);

  useEffect(() => {
    animate(countSolution, 60, {
      type: "tween",
      duration: 2,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRoundSolution.get() === true && latest > 0) {
          updatedThisRoundSolution.set(false);
        } else if (updatedThisRoundSolution.get() === false && latest === 0) {
          if (textIndexSolution.get() === textsSolution.length - 1) {
            textIndexSolution.set(0);
          } else {
            textIndexSolution.set(textIndexSolution.get() + 1);
          }
          updatedThisRoundSolution.set(true);
        }
      },
    });
  }, []);

  return (
    <HeaderFormat>
      <HeaderContainer>
        <ContentContainer>
          <h2>
            Hi! I am <motion.span className="inline">{displayText}</motion.span>
          </h2>
          <h2>
            🚀 Welcome to my
            <motion.span className="inline">{displayTextSolution}</motion.span>
          </h2>
        </ContentContainer>
        <SocialMedia />

        <motion.div
          className="box"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <ImageFormat src={image} alt="Rohan" />
        </motion.div>
      </HeaderContainer>
    </HeaderFormat>
  );
}

export default Header;
