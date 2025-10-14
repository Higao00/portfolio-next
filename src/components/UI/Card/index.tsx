import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { CardProps } from '@/types';

const CardBase = styled(motion.div)<CardProps>`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background.primary};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  position: relative;
  overflow: hidden;
  transition: all ${({ theme }) => theme.duration.normal} ${({ theme }) => theme.easing.out};

  /* Variantes de estilo */
  ${({ variant = 'default' }) => {
    switch (variant) {
      case 'bordered':
        return css`
          border: 1px solid ${({ theme }) => theme.colors.neutral[200]};
        `;

      case 'shadow':
        return css`
          box-shadow: ${({ theme }) => theme.shadows.lg};

          &:hover {
            box-shadow: ${({ theme }) => theme.shadows.xl};
            transform: translateY(-4px);
          }
        `;

      case 'glass':
        return css`
          background: ${({ theme }) => theme.colors.background.glass};
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: ${({ theme }) => theme.shadows.glass};
        `;

      default:
        return css`
          box-shadow: ${({ theme }) => theme.shadows.sm};

          &:hover {
            box-shadow: ${({ theme }) => theme.shadows.md};
          }
        `;
    }
  }}

  /* Variantes de padding */
  ${({ padding = 'md' }) => {
    switch (padding) {
      case 'none':
        return css`
          padding: 0;
        `;
      case 'sm':
        return css`
          padding: ${({ theme }) => theme.spacing[4]};
        `;
      case 'lg':
        return css`
          padding: ${({ theme }) => theme.spacing[8]};
        `;
      case 'xl':
        return css`
          padding: ${({ theme }) => theme.spacing[10]};
        `;
      default:
        return css`
          padding: ${({ theme }) => theme.spacing[6]};
        `;
    }
  }}
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

const CardDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin: 0;
`;

const CardContent = styled.div`
  flex: 1;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing[4]};
  padding-top: ${({ theme }) => theme.spacing[4]};
  border-top: 1px solid ${({ theme }) => theme.colors.neutral[100]};
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

export const Card: React.FC<CardProps> & {
  Header: typeof CardHeader;
  Title: typeof CardTitle;
  Description: typeof CardDescription;
  Content: typeof CardContent;
  Footer: typeof CardFooter;
  Image: typeof CardImage;
} = ({ children, className, ...props }) => {
  return (
    <CardBase
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </CardBase>
  );
};

// Attach sub-components
Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Content = CardContent;
Card.Footer = CardFooter;
Card.Image = CardImage;

export default Card;