"use client";
import styled from "styled-components";

export const Container = styled.div`
  width: 339px;
  height: 324px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ProductTitle = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.black};
  margin-top: 7px;
  margin-bottom: 7px;
`;
export const ProductPrice = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 7px;
`;
export const QuantOnCart = styled.span`
  display: flex;
  align-items: center;
  gap: 3px;
  font-weight: 500;
  margin-right: 14px;
`;
