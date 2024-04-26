"use client";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  @media screen and (max-width: 667px) {
    grid-column: 2;
  }
`;
export const InputQuant = styled.input`
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  width: 62px;
  height: 26px;
  color: ${({ theme }) => theme.colors.secundary_color};
`;
export const ActionButton = styled.button`
  height: 18px;
  svg {
    width: 18px;
    height: 18px;
  }
`;
