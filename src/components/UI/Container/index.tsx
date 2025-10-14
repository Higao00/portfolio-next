import styled, { css } from 'styled-components';
import { ContainerProps } from '@/types';

const ContainerBase = styled.div<ContainerProps>`
  width: 100%;
  position: relative;

  ${({ centered = true }) =>
    centered &&
    css`
      margin-left: auto;
      margin-right: auto;
    `}

  ${({ padding = true }) =>
    padding &&
    css`
      padding-left: ${({ theme }) => theme.spacing[4]};
      padding-right: ${({ theme }) => theme.spacing[4]};

      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        padding-left: ${({ theme }) => theme.spacing[6]};
        padding-right: ${({ theme }) => theme.spacing[6]};
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        padding-left: ${({ theme }) => theme.spacing[8]};
        padding-right: ${({ theme }) => theme.spacing[8]};
      }
    `}

  ${({ maxWidth = 'xl' }) => {
    switch (maxWidth) {
      case 'sm':
        return css`
          max-width: 640px;
        `;
      case 'md':
        return css`
          max-width: 768px;
        `;
      case 'lg':
        return css`
          max-width: 1024px;
        `;
      case 'xl':
        return css`
          max-width: 1280px;
        `;
      case '2xl':
        return css`
          max-width: 1536px;
        `;
      case 'full':
        return css`
          max-width: 100%;
        `;
      default:
        return css`
          max-width: 1280px;
        `;
    }
  }}
`;

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <ContainerBase className={className} {...props}>
      {children}
    </ContainerBase>
  );
};

export default Container;