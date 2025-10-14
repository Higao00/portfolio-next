import styled from "styled-components";
import { motion } from "framer-motion";

export const FormationsSection = styled.section`
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
    background: ${({ theme }) => theme.colors.gradients.secondary};
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

export const Timeline = styled(motion.div)`
  position: relative;
  margin-top: 3rem;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${({ theme }) => theme.colors.gradients.primary};
    transform: translateX(-50%);
    z-index: 1;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      left: 2rem;
    }
  }
`;

export const FormationCard = styled(motion.div)<{ $isLeft: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  position: relative;

  ${({ $isLeft }) => 
    $isLeft 
      ? `
        justify-content: flex-end;
        
        @media (max-width: 768px) {
          justify-content: flex-start;
          padding-left: 4rem;
        }
      `
      : `
        justify-content: flex-start;
        
        @media (max-width: 768px) {
          justify-content: flex-start;
          padding-left: 4rem;
        }
      `
  }
`;

export const TimelineDot = styled.div<{ $status: string }>`
  position: absolute;
  left: 50%;
  top: 2rem;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ $status, theme }) => 
    $status === 'in-progress' 
      ? theme.colors.gradients.accent
      : theme.colors.gradients.primary
  };
  border: 4px solid ${({ theme }) => theme.colors.background.primary};
  z-index: 2;
  box-shadow: ${({ theme }) => theme.shadows.md};

  ${({ $status }) => 
    $status === 'in-progress' &&
    `
      animation: pulse 2s infinite;
      
      @keyframes pulse {
        0%, 100% { transform: translateX(-50%) scale(1); }
        50% { transform: translateX(-50%) scale(1.2); }
      }
    `
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    left: 2rem;
    transform: translateX(-50%);
  }
`;

export const CardContent = styled.div<{ $isLeft: boolean }>`
  background: ${({ theme }) => theme.colors.background.primary};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border: 1px solid ${({ theme }) => theme.colors.neutral[100]};
  max-width: 500px;
  position: relative;
  transition: all ${({ theme }) => theme.duration.normal} ${({ theme }) => theme.easing.out};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }

  &::before {
    content: '';
    position: absolute;
    top: 2rem;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    
    ${({ $isLeft, theme }) => 
      $isLeft 
        ? `
          right: -20px;
          border-left-color: ${theme.colors.background.primary};
          
          @media (max-width: 768px) {
            left: -20px;
            right: auto;
            border-left-color: transparent;
            border-right-color: ${theme.colors.background.primary};
          }
        `
        : `
          left: -20px;
          border-right-color: ${theme.colors.background.primary};
        `
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      left: -20px;
      right: auto;
      border-left-color: transparent;
      border-right-color: ${({ theme }) => theme.colors.background.primary};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-left: 0;
    margin-right: 0;
    max-width: 100%;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const InstitutionLogo = styled.div`
  width: 60px;
  height: 60px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background: ${({ theme }) => theme.colors.background.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary[600]};
  border: 2px solid ${({ theme }) => theme.colors.primary[200]};
`;

export const CardInfo = styled.div`
  flex: 1;
`;

export const FormationTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 0.25rem 0;
  font-family: ${({ theme }) => theme.typography.fontFamily.display};
`;

export const Institution = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.primary[600]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  margin-bottom: 0.25rem;
`;

export const Period = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.tertiary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin: 1rem 0 0 0;
`;

export const StatusBadge = styled.span<{ $status: string }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.75rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wider};
  margin-top: 1rem;

  ${({ $status, theme }) => {
    switch ($status) {
      case 'completed':
        return `
          background: ${theme.colors.status.success}20;
          color: ${theme.colors.status.success};
          border: 1px solid ${theme.colors.status.success}40;
        `;
      case 'in-progress':
        return `
          background: ${theme.colors.status.info}20;
          color: ${theme.colors.status.info};
          border: 1px solid ${theme.colors.status.info}40;
        `;
      case 'planned':
        return `
          background: ${theme.colors.status.warning}20;
          color: ${theme.colors.status.warning};
          border: 1px solid ${theme.colors.status.warning}40;
        `;
      default:
        return `
          background: ${theme.colors.neutral[100]};
          color: ${theme.colors.neutral[600]};
        `;
    }
  }}

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: currentColor;
  }
`;

export const TypeBadge = styled.span<{ $type: string }>`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wider};
  
  ${({ $type, theme }) => {
    switch ($type) {
      case 'graduation':
        return `
          background: ${theme.colors.gradients.primary};
          color: ${theme.colors.text.inverse};
        `;
      case 'bootcamp':
        return `
          background: ${theme.colors.gradients.accent};
          color: ${theme.colors.text.inverse};
        `;
      case 'course':
        return `
          background: ${theme.colors.gradients.secondary};
          color: ${theme.colors.text.inverse};
        `;
      case 'certification':
        return `
          background: ${theme.colors.status.warning};
          color: ${theme.colors.text.inverse};
        `;
      default:
        return `
          background: ${theme.colors.neutral[200]};
          color: ${theme.colors.neutral[700]};
        `;
    }
  }}
`;
