import React from 'react';
import styled from '@emotion/styled';
import { Button, ConfirmModal } from '@/components/common';
import { Close, Plus } from '@/components/icons';
import { AddBakeryInputBaseProps } from './AddBakeryInput';
import { keyframes, Theme } from '@emotion/react';

interface StoreMultiInputProps extends AddBakeryInputBaseProps {
  value: string[] | undefined | null;
}

const StoreMultiInput = ({
  name,
  isRequired = false,
  label,
  placeholder,
  value,
  alertText,
  isSubmit = false,
  changeHandler,
}: StoreMultiInputProps) => {
  const [deleteIdx, setDeleteIdx] = React.useState(-1);
  const [inputValue, setInputValue] = React.useState('');
  const inputChangeHandler = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.currentTarget.value);
    },
    []
  );

  const ConfirmModalOpen = React.useCallback(
    (idx: number) => setDeleteIdx(idx),
    []
  );

  const ConfirmModalClose = React.useCallback(() => setDeleteIdx(-1), []);

  const addHomepage = React.useCallback(() => {
    if (inputValue == '' || !changeHandler) return;
    if (!value) changeHandler(name, [inputValue]);
    else changeHandler(name, [...value, inputValue]);

    setInputValue('');
  }, [changeHandler, inputValue, name, value]);

  const removeInputHandler = React.useCallback(
    (idx) => {
      if (!value || !value.length || !changeHandler) return;
      changeHandler(name, [
        ...value.slice(0, idx),
        ...value.slice(idx + 1, value.length),
      ]);
      setDeleteIdx(-1);
    },
    [changeHandler, name, value]
  );

  return (
    <Row>
      <Text isRequired={isRequired}>{label}</Text>
      {value?.map((inputValue: string, idx: number) => (
        <InputValueText key={idx}>
          {inputValue}
          <Close
            onClick={() => {
              ConfirmModalOpen(idx);
            }}
          />
        </InputValueText>
      ))}
      <Input
        placeholder={placeholder}
        value={inputValue}
        onChange={inputChangeHandler}
      />
      <AddButtonStyle
        styleType="none"
        className={inputValue !== '' ? 'blank' : ''}
        onClick={addHomepage}
      >
        <Plus width={16} height={16} />
        {label} 추가
      </AddButtonStyle>
      {value?.length === 0 && isSubmit && !alertText && (
        <AlertText>{alertText}</AlertText>
      )}
      <ConfirmModal
        open={deleteIdx >= 0}
        cancelText={'취소하기'}
        confirmText={'삭제하기'}
        cancelButtonHandler={ConfirmModalClose}
        acceptButtonHandler={() => removeInputHandler(deleteIdx)}
      >
        <ConfirmText>정말로 삭제할까요?</ConfirmText>
      </ConfirmModal>
    </Row>
  );
};

export default StoreMultiInput;

const AlertText = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.color.primary500};
`;

const Row = styled.div`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 4.5rem;
  }
`;

const ConfirmText = styled.h4`
  display: flex;
  justify-content: center;
  align-self: center;
  padding: 30px;
`;

const Text = styled.span<{ isRequired?: boolean }>`
  position: relative;
  display: inline-block;
  margin-bottom: 0.75rem;
  font-weight: bold;
  font-size: 0.87rem;
  color: ${({ theme }) => theme.color.gray800};

  &::before {
    content: '';
    position: absolute;
    right: -6px;
    top: -2px;
    width: 4px;
    height: 4px;
    background-color: #ff6e40;
    border-radius: 50%;
    opacity: ${({ isRequired }) => (isRequired ? 1 : 0)};
  }
`;

const InputValueText = styled.div`
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  border: none;

  svg {
    width: 14px;
    height: 14px;
    stroke: ${({ theme }) => theme.color.gray400};
  }
`;

const Input = styled.input`
  display: block;
  width: 100%;
  height: 2rem;
  border: none;
  padding: 0;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.color.gray600};

  &::placeholder {
    color: ${({ theme }) => theme.color.gray400};
  }
  &:focus {
    outline: none;
  }
`;

const Blank = (theme: Theme) => keyframes`
  0% {
    color: ${theme.color.black};
  }
  50% {
    color: ${theme.color.primary500};
  }
  100% {
    color: ${theme.color.black};
  }
`;

const AddButtonStyle = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  svg {
    stroke: ${({ theme }) => theme.color.gray400};
  }

  &.blank {
    animation: ${({ theme }) => Blank(theme)} 2s ease-in-out infinite;
  }
`;
