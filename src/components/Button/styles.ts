"use client";
import styled from "styled-components";
import { ButtonProps } from ".";

export const ButtonDefault = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-size: 12px;
  height: 40px;
  width: 100%;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, active }) =>
    active ? theme.colors.action_color : theme.colors.primary_color};
  transition: 0.3s;
  &:hover {
    background-color: ${({ theme, active }) => active ? theme.colors.action_color : theme.colors.primary_color_dark};
  }
`;
