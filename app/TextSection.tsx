"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";

interface TextSectionProps {
  children: React.ReactNode;
}

const TextWrapper = ({ children }: TextSectionProps) => {
  const text = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: text,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [1, 0.8, 0], [1, 1, 0]);
  const x = useTransform(scrollYProgress, [1, 0.4, 0], [0, 0, -1000]);
  const colorChange = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "hsla(180, 7%, 75%, 0.9)",
      "hsla(180, 7%, 75%, 0.9)",
      "#f2994a",
      "#f2994a",
      "#f2994a",
      "#f2994a",
    ]
  );

  return (
    <div ref={text}>
      <motion.p style={{ opacity, x, color: colorChange }}>{children}</motion.p>
    </div>
  );
};

function TextSection() {
  return (
    <TextSectionStyled>
      <TextWrapper>Unlock the digital universe.</TextWrapper>
      <TextWrapper>Artistry meets authenticity.</TextWrapper>
      <TextWrapper>Own a piece of the digital revolution.</TextWrapper>
      <TextWrapper>Where art and technology converge.</TextWrapper>
      <TextWrapper>Digital art redefined.</TextWrapper>
      <TextWrapper>Invest in the intangible.</TextWrapper>
      <TextWrapper>Virtual collectibles, tangible value.</TextWrapper>
    </TextSectionStyled>
  );
}

const TextSectionStyled = styled.section`
  p {
    font-size: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
  }
`;

export default TextSection;
