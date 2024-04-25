"use client";
import Link from "next/link";
import styled from "styled-components";

export const Container = styled.a`
  display: flex;
  align-items: center;
  height: 40px;
  gap: 15px;

  svg {
    width: 24px;
    height: 20px;
  }
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;
export const Title = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
`;
export const Quantity = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grey};
`;
