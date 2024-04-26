"use client";
import Button from "@/components/Button";
import styled from "styled-components";

export const SuccessContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 63px 0;
  gap: 23px;
  @media screen and (max-width: 667px) {
    padding: 70px 15px;
  }
`;
export const Title = styled.h1`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.secundary_color};
  text-align: center;
`;
export const Imgcontainer = styled.div`
  position: relative;
  width: 295px;
  height: 307px;
  @media screen and (max-width: 667px) {
    width: 238px;
    height: 248px;
  }
`;
export const ButtonLink = styled(Button)`
  width: 173px;
`;
