import Image from "next/image";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";

interface MobileMenuButtonProps {
  $isOpen: boolean;
}

export const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all ${({ theme }) => theme.duration.normal} ${({ theme }) => theme.easing.out};

  &.scrolled {
    background: rgba(15, 23, 42, 0.95);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

export const HeaderContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 1rem;
    height: 60px;
  }
  
  @media (max-width: 480px) {
    padding: 0 0.75rem;
    height: 55px;
  }
`;

export const LogoContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  text-decoration: none;
  z-index: 1001;
`;

export const LogoImage = styled(Image)`
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.primary[400]};
  transition: all ${({ theme }) => theme.duration.normal} ${({ theme }) => theme.easing.out};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary[300]};
    transform: scale(1.05);
  }
  
  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`;

export const LogoText = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily.display};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.inverse};
  margin: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
  }
  
  @media (max-width: 480px) {
    display: none;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    gap: 1rem;
  }
`;

export const NavItem = styled(motion.li)`
  position: relative;
`;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.neutral[300]};
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: all ${({ theme }) => theme.duration.fast} ${({ theme }) => theme.easing.out};
  position: relative;
  overflow: hidden;
  white-space: nowrap;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.gradients.primary};
    opacity: 0;
    transition: opacity ${({ theme }) => theme.duration.fast} ${({ theme }) => theme.easing.out};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.text.inverse};
    transform: translateY(-2px);

    &::before {
      opacity: 1;
    }
  }

  &.active {
    color: ${({ theme }) => theme.colors.text.inverse};
    
    &::before {
      opacity: 1;
    }
  }

  span {
    position: relative;
    z-index: 1;
  }

  svg {
    position: relative;
    z-index: 1;
    font-size: 1.2rem;
  }
`;

export const MobileMenuButton = styled(motion.button)<MobileMenuButtonProps>`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1001;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
  }
  
  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`;

export const MenuLine = styled.div<MobileMenuButtonProps>`
  width: 24px;
  height: 2px;
  background: ${({ theme }) => theme.colors.text.inverse};
  border-radius: 2px;
  transition: all ${({ theme }) => theme.duration.normal} ${({ theme }) => theme.easing.out};
  position: relative;

  &:not(:last-child) {
    margin-bottom: 4px;
  }

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      &:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }

      &:nth-child(2) {
        opacity: 0;
      }

      &:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
      }
    `}
`;

export const MobileMenu = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(15, 23, 42, 0.98);
  backdrop-filter: blur(20px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  padding: 2rem 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
  
  @media (max-height: 600px) {
    align-items: flex-start;
    padding-top: 80px;
  }
`;

export const MobileNavList = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0;
  padding: 2rem 1rem;
  list-style: none;
  text-align: center;
  width: 100%;
  max-width: 400px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 0.75rem;
    padding: 1.5rem 1rem;
  }
`;

export const MobileNavItem = styled(motion.li)`
  opacity: 0;
`;

export const MobileNavLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  font-family: ${({ theme }) => theme.typography.fontFamily.display};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.inverse};
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  transition: all ${({ theme }) => theme.duration.normal} ${({ theme }) => theme.easing.out};
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  min-height: 60px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.gradients.primary};
    opacity: 0;
    transition: opacity ${({ theme }) => theme.duration.fast} ${({ theme }) => theme.easing.out};
    border-radius: ${({ theme }) => theme.borderRadius.xl};
  }

  &:hover {
    transform: scale(1.02);

    &::before {
      opacity: 1;
    }
  }

  span {
    position: relative;
    z-index: 1;
  }

  svg {
    position: relative;
    z-index: 1;
    font-size: 1.5rem;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    min-height: 50px;
    
    svg {
      font-size: 1.25rem;
    }
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    min-height: 45px;
    
    svg {
      font-size: 1.1rem;
    }
  }
`;

export const MobileMenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  backdrop-filter: blur(4px);
`;
