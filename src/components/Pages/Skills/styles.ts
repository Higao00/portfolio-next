import styled from "styled-components";
import { motion } from "framer-motion";

export const SkillsSection = styled.section`
  min-height: 100vh;
  padding: 6rem 0 4rem;
  padding-top: 80px;
  background: ${({ theme }) => theme.colors.gradients.dark};
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-top: 70px;
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

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 1rem;
  }
`;

export const Header = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
`;

export const Title = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.inverse};
  margin-bottom: 1rem;
  font-family: ${({ theme }) => theme.typography.fontFamily.display};

  .highlight {
    background: ${({ theme }) => theme.colors.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const Subtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.neutral[300]};
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

export const FilterContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

export const FilterButton = styled(motion.button)<{ $isActive: boolean }>`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all ${({ theme }) => theme.duration.fast} ${({ theme }) => theme.easing.out};
  position: relative;
  overflow: hidden;

  ${({ $isActive, theme }) =>
    $isActive
      ? `
        background: ${theme.colors.gradients.primary};
        color: ${theme.colors.text.inverse};
        box-shadow: ${theme.shadows.md};
      `
      : `
        background: ${theme.colors.background.primary};
        color: ${theme.colors.text.secondary};
        border: 1px solid ${theme.colors.neutral[200]};
        
        &:hover {
          background: ${theme.colors.primary[50]};
          color: ${theme.colors.primary[600]};
          border-color: ${theme.colors.primary[200]};
        }
      `}

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary[500]};
    outline-offset: 2px;
  }
`;

export const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const SkillCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background.primary};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 1px solid ${({ theme }) => theme.colors.neutral[100]};
  transition: all ${({ theme }) => theme.duration.normal} ${({ theme }) => theme.easing.out};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ theme }) => theme.colors.gradients.primary};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform ${({ theme }) => theme.duration.normal} ${({ theme }) => theme.easing.out};
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};

    &::before {
      transform: scaleX(1);
    }
  }
`;

export const SkillHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const SkillIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background: ${({ theme }) => theme.colors.background.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.colors.neutral[100]};

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  }
`;

export const SkillInfo = styled.div`
  flex: 1;
`;

export const SkillTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 0.25rem 0;
  font-family: ${({ theme }) => theme.typography.fontFamily.display};
`;

export const SkillCategory = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.tertiary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
`;

export const SkillDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin: 0 0 1rem 0;
`;

export const SkillLevel = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const LevelLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.tertiary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  min-width: 60px;
`;

export const LevelBar = styled.div`
  flex: 1;
  height: 8px;
  background: ${({ theme }) => theme.colors.neutral[200]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  overflow: hidden;
`;

export const LevelProgress = styled(motion.div)<{ $level: string }>`
  height: 100%;
  background: ${({ theme }) => theme.colors.gradients.primary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  
  ${({ $level }) => {
    switch ($level) {
      case 'beginner':
        return 'width: 25%;';
      case 'intermediate':
        return 'width: 50%;';
      case 'advanced':
        return 'width: 75%;';
      case 'expert':
        return 'width: 100%;';
      default:
        return 'width: 50%;';
    }
  }}
`;

export const StatsSection = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
  padding: 3rem 2rem;
  background: ${({ theme }) => theme.colors.background.primary};
  border-radius: ${({ theme }) => theme.borderRadius["2xl"]};
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;

export const StatCard = styled(motion.div)`
  text-align: center;
  padding: 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  background: linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const StatNumber = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize["3xl"]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 0.5rem;
  font-family: ${({ theme }) => theme.typography.fontFamily.display};
`;

export const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;
