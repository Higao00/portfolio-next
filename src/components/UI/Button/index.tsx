import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { ButtonProps } from '@/types';

const ButtonBase = styled(motion.button)<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-decoration: none;
  cursor: pointer;
  transition: all ${({ theme }) => theme.duration.fast} ${({ theme }) => theme.easing.out};
  position: relative;
  overflow: hidden;
  outline: none;
  user-select: none;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary[500]};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  /* Efeito de ripple */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.3s, height 0.3s;
  }

  &:active::before {
    width: 300px;
    height: 300px;
  }

  /* Variantes de tamanho */
  ${({ size = 'md' }) => {
    switch (size) {
      case 'sm':
        return css`
          padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
          font-size: ${({ theme }) => theme.typography.fontSize.sm};
          min-height: 36px;
        `;
      case 'lg':
        return css`
          padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
          font-size: ${({ theme }) => theme.typography.fontSize.lg};
          min-height: 48px;
        `;
      case 'xl':
        return css`
          padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[8]};
          font-size: ${({ theme }) => theme.typography.fontSize.xl};
          min-height: 56px;
        `;
      default:
        return css`
          padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[5]};
          font-size: ${({ theme }) => theme.typography.fontSize.base};
          min-height: 42px;
        `;
    }
  }}

  /* Variantes de estilo */
  ${({ variant = 'primary' }) => {
    switch (variant) {
      case 'primary':
        return css`
          background: ${({ theme }) => theme.colors.gradients.primary};
          color: ${({ theme }) => theme.colors.text.inverse};
          box-shadow: ${({ theme }) => theme.shadows.md};

          &:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: ${({ theme }) => theme.shadows.lg};
          }

          &:active:not(:disabled) {
            transform: translateY(0);
          }
        `;

      case 'secondary':
        return css`
          background: ${({ theme }) => theme.colors.gradients.secondary};
          color: ${({ theme }) => theme.colors.text.inverse};
          box-shadow: ${({ theme }) => theme.shadows.md};

          &:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: ${({ theme }) => theme.shadows.lg};
          }

          &:active:not(:disabled) {
            transform: translateY(0);
          }
        `;

      case 'outline':
        return css`
          background: transparent;
          color: ${({ theme }) => theme.colors.primary[600]};
          border: 2px solid ${({ theme }) => theme.colors.primary[300]};

          &:hover:not(:disabled) {
            background: ${({ theme }) => theme.colors.primary[50]};
            border-color: ${({ theme }) => theme.colors.primary[500]};
            color: ${({ theme }) => theme.colors.primary[700]};
          }

          &:active:not(:disabled) {
            background: ${({ theme }) => theme.colors.primary[100]};
          }
        `;

      case 'ghost':
        return css`
          background: transparent;
          color: ${({ theme }) => theme.colors.text.primary};

          &:hover:not(:disabled) {
            background: ${({ theme }) => theme.colors.neutral[100]};
          }

          &:active:not(:disabled) {
            background: ${({ theme }) => theme.colors.neutral[200]};
          }
        `;

      case 'link':
        return css`
          background: transparent;
          color: ${({ theme }) => theme.colors.text.accent};
          padding: 0;
          min-height: auto;

          &:hover:not(:disabled) {
            text-decoration: underline;
          }
        `;

      default:
        return css``;
    }
  }}

  /* Estado de loading */
  ${({ loading }) =>
    loading &&
    css`
      pointer-events: none;
      opacity: 0.7;
    `}
`;

const LoadingSpinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  loading = false,
  disabled = false,
  onClick,
  type = 'button',
  ...props
}) => {
  return (
    <ButtonBase
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      whileHover={{ scale: props.variant === 'link' ? 1 : 1.02 }}
      whileTap={{ scale: props.variant === 'link' ? 1 : 0.98 }}
      {...props}
    >
      {loading && <LoadingSpinner />}
      {children}
    </ButtonBase>
  );
};

export default Button;