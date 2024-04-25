"use client";
import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 88px;
  max-width: 1080px;
  padding: 0 16px;
  margin: 0 auto;
`;

export const Logo = styled(Link)`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};
`;
