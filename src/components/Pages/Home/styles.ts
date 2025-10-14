import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.gradients.dark};
  padding-top: 80px; /* Add padding for fixed header */

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-top: 70px; /* Adjust for mobile header height */
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      ellipse at center,
      rgba(14, 165, 233, 0.1) 0%,
      rgba(168, 85, 247, 0.05) 35%,
      transparent 70%
    );
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.02"><circle cx="30" cy="30" r="1"/></g></svg>');
    z-index: 1;
  }
`;

export const HeroContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 1rem;
    gap: 2rem;
  }
`;

export const HeroContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: 2;
  }
`;

export const HeroGreeting = styled(motion.span)`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.primary[400]};
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
  
  &::before {
    content: '👋 ';
    margin-right: 0.5rem;
  }
`;

export const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: ${({ theme }) => theme.typography.fontWeight.extrabold};
  color: ${({ theme }) => theme.colors.text.inverse};
  line-height: 1.1;
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily.display};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: clamp(2rem, 8vw, 3rem);
  }
`;

export const HeroSubtitle = styled(motion.h2)`
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.neutral[300]};
  margin: 0;
  
  .highlight {
    background: ${({ theme }) => theme.colors.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const HeroDescription = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.neutral[400]};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  max-width: 500px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 600px;
    margin: 0 auto;
  }
`;

export const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroVisual = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: 1;
  }
`;

export const ProfileImageContainer = styled(motion.div)`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gradients.primary};
  padding: 4px;
  margin-bottom: 2rem;

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.gradients.secondary};
    opacity: 0.3;
    filter: blur(20px);
    z-index: -1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 250px;
    height: 250px;
  }
`;

export const ProfileImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.background.primary};
`;

export const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
  max-width: 400px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 300px;
  }
`;

export const StatCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: 1.5rem;
  text-align: center;
  transition: all ${({ theme }) => theme.duration.normal} ${({ theme }) => theme.easing.out};

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-4px);
  }
`;

export const StatNumber = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize["2xl"]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.inverse};
  margin-bottom: 0.25rem;
`;

export const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.neutral[400]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

export const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
`;

export const FloatingIcon = styled(motion.div)`
  position: absolute;
  color: ${({ theme }) => theme.colors.primary[400]};
  opacity: 0.6;
  font-size: 2rem;
`;

export const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  color: ${({ theme }) => theme.colors.neutral[400]};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  text-align: center;
  cursor: pointer;
  transition: color ${({ theme }) => theme.duration.fast} ${({ theme }) => theme.easing.out};

  &:hover {
    color: ${({ theme }) => theme.colors.primary[400]};
  }
`;

export const ScrollArrow = styled(motion.div)`
  margin-top: 0.5rem;
  font-size: 1.5rem;
`;;
export const VideoMobile = styled.video`
    width: 100%;
    height: 100vh;
    object-fit: cover;

    position: absolute;

    @media (min-width: 1280px) {
        display: none;
    }
`;

export const Container = styled.section`
    height: calc(100vh - 110px);
    width: 90%;

    position: relative;

    padding: 0 5%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 5%;

    @media (min-width: 1280px) {
        flex-direction: row;
        column-gap: 1%;
    }

    @media (min-width: 800px) and (max-width: 1280px) {
        flex-direction: row;
        column-gap: 1%;
    }
`;

export const Images = styled.img`
    max-width: 100%;
    width: 100%;
    height: auto;
    max-height: calc((100vh - 110px) / 2);
    object-fit: contain;

    @media (min-width: 1280px) {
        width: 100%;
        height: calc((100vh - 110px) / 2);
    }
`;
