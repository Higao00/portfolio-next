import styled from 'styled-components';
import { motion } from 'framer-motion';

export const LanguageSelector = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-left: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-left: 0;
    justify-content: center;
    padding: 0.5rem 0;
  }
`;

export const LanguageButton = styled(motion.button)<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: ${({ $active, theme }) => 
    $active ? theme.colors.primary[500] : theme.colors.background.secondary || 'rgba(255, 255, 255, 0.1)'};
  border: 2px solid ${({ $active, theme }) => 
    $active ? theme.colors.primary[500] : 'transparent'};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  cursor: pointer;
  transition: all ${({ theme }) => theme.duration.fast} ${({ theme }) => theme.easing.out};
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.primary[500]};
    opacity: 0;
    transition: opacity ${({ theme }) => theme.duration.fast} ${({ theme }) => theme.easing.out};
    border-radius: inherit;
  }
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary[400]};
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    
    &::before {
      opacity: ${({ $active }) => $active ? 0 : 0.1};
    }
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary[200]};
  }
  
  &:active {
    transform: translateY(-1px) scale(1.02);
  }
`;

export const FlagIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  position: relative;
  z-index: 1;
  transition: transform ${({ theme }) => theme.duration.fast} ${({ theme }) => theme.easing.out};
  
  ${LanguageButton}:hover & {
    transform: scale(1.15);
  }
  
  svg {
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }
`;