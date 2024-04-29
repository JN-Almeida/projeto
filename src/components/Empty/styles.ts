"use client";
import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 667px) {
    grid-column: 2;
  }
`;
export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.secundary_color};
  font-size: 20px;
  font-weight: bold;
  margin-top: 62px;
  margin-bottom: 30px;
`;
export const Line = styled.h1`
  background-color: ${({ theme }) => theme.colors.secundary_color};
  width: 447px;
  height: 1px;
`;
export const ButtonLink = styled(Link)`
  width: 173px;
  margin-top: 20px;
  margin-bottom: 82px;
`;
