import styled from "styled-components";
import { motion } from "framer-motion";

export const SocialSection = styled.section`
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
    background: ${({ theme }) => theme.colors.gradients.accent};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const Subtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.neutral[300]};
  max-width: 600px;
  margin: 0 auto;
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

export const SocialGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const SocialCard = styled(motion.a)`
  background: ${({ theme }) => theme.colors.background.primary};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 1px solid ${({ theme }) => theme.colors.neutral[100]};
  transition: all ${({ theme }) => theme.duration.normal} ${({ theme }) => theme.easing.out};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ theme }) => theme.colors.gradients.accent};
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

export const IconContainer = styled.div<{ $platform: string }>`
  width: 80px;
  height: 80px;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-shrink: 0;

  background: ${({ $platform, theme }) => {
    switch ($platform.toLowerCase()) {
      case 'github':
        return 'linear-gradient(135deg, #333 0%, #555 100%)';
      case 'linkedin':
        return 'linear-gradient(135deg, #0077b5 0%, #00a0dc 100%)';
      case 'instagram':
        return 'linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)';
      case 'whatsapp':
        return 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)';
      case 'email':
      case 'gmail':
        return 'linear-gradient(135deg, #ea4335 0%, #fbbc05 100%)';
      default:
        return theme.colors.gradients.primary;
    }
  }};

  svg {
    font-size: 2.5rem;
    color: white;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  }
`;

export const SocialInfo = styled.div`
  flex: 1;
`;

export const SocialName = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 0.5rem 0;
  font-family: ${({ theme }) => theme.typography.fontFamily.display};
`;

export const SocialUsername = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
`;

export const ConnectButton = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background.secondary};
  border: 1px solid ${({ theme }) => theme.colors.neutral[200]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 0.75rem 1.5rem;
  margin-top: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all ${({ theme }) => theme.duration.fast} ${({ theme }) => theme.easing.out};

  &:hover {
    background: ${({ theme }) => theme.colors.primary[50]};
    border-color: ${({ theme }) => theme.colors.primary[200]};
  }
`;

export const ConnectText = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const QuickActions = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const QuickActionButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-decoration: none;
  cursor: pointer;
  transition: all ${({ theme }) => theme.duration.fast} ${({ theme }) => theme.easing.out};
  position: relative;
  overflow: hidden;

  &.whatsapp {
    background: ${({ theme }) => theme.colors.status.success};
    color: white;

    &:hover {
      background: #128c7e;
      transform: translateY(-2px);
      box-shadow: ${({ theme }) => theme.shadows.lg};
    }
  }

  &.email {
    background: ${({ theme }) => theme.colors.gradients.primary};
    color: white;

    &:hover {
      transform: translateY(-2px);
      box-shadow: ${({ theme }) => theme.shadows.lg};
    }
  }

  svg {
    font-size: 1.25rem;
  }
`;
