import styled from "styled-components";
import { TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { motion } from "framer-motion";

export const FormWrapper = styled.div`
  width: 100%;
`;

export const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InputGroup = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    background: ${({ theme }) => theme.colors.background.secondary};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    transition: all ${({ theme }) => theme.duration.normal} ${({ theme }) => theme.easing.out};

    &:hover {
      .MuiOutlinedInput-notchedOutline {
        border-color: ${({ theme }) => theme.colors.primary[400]};
      }
    }

    &.Mui-focused {
      .MuiOutlinedInput-notchedOutline {
        border-color: ${({ theme }) => theme.colors.primary[500]};
        border-width: 2px;
      }
    }

    .MuiOutlinedInput-notchedOutline {
      border-color: ${({ theme }) => theme.colors.neutral[200]};
    }
  }

  .MuiInputLabel-root {
    color: ${({ theme }) => theme.colors.text.secondary};
    
    &.Mui-focused {
      color: ${({ theme }) => theme.colors.primary[500]};
    }
  }

  .MuiInputBase-input {
    color: ${({ theme }) => theme.colors.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  }
`;

export const TextArea = styled(TextField)`
  .MuiOutlinedInput-root {
    background: ${({ theme }) => theme.colors.background.secondary};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    transition: all ${({ theme }) => theme.duration.normal} ${({ theme }) => theme.easing.out};

    &:hover {
      .MuiOutlinedInput-notchedOutline {
        border-color: ${({ theme }) => theme.colors.primary[400]};
      }
    }

    &.Mui-focused {
      .MuiOutlinedInput-notchedOutline {
        border-color: ${({ theme }) => theme.colors.primary[500]};
        border-width: 2px;
      }
    }

    .MuiOutlinedInput-notchedOutline {
      border-color: ${({ theme }) => theme.colors.neutral[200]};
    }
  }

  .MuiInputLabel-root {
    color: ${({ theme }) => theme.colors.text.secondary};
    
    &.Mui-focused {
      color: ${({ theme }) => theme.colors.primary[500]};
    }
  }

  .MuiInputBase-input {
    color: ${({ theme }) => theme.colors.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  }
`;

export const ErrorMessage = styled(motion.span)`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.status.error};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  margin-top: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const SubmitButton = styled(LoadingButton)`
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.gradients.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  text-transform: none;
  transition: all ${({ theme }) => theme.duration.normal} ${({ theme }) => theme.easing.out};
  box-shadow: ${({ theme }) => theme.shadows.md};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    background: ${({ theme }) => theme.colors.gradients.primary};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.neutral[300]};
    color: ${({ theme }) => theme.colors.neutral[500]};
  }

  .MuiLoadingButton-loadingIndicator {
    color: white;
  }
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const FullWidthField = styled.div`
  grid-column: 1 / -1;
`;

export const FormHeader = styled.div`
  margin-bottom: 1.5rem;
`;

export const FormFooter = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const PrivacyNote = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.tertiary};
  text-align: center;
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin: 0;
`;
