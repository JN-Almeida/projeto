"use client";
import Button from "@/components/Button";
import styled from "styled-components";

export const CheckoutContainer = styled.div`
  padding: 23px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  width: 100%;
  margin-bottom: 35px;
`;
export const TableGrid = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1fr 1fr;
  align-items: center;
  margin-bottom: 23px;
`;
export const TableGridHeader = styled(TableGrid)`
  @media screen and (max-width: 414px) {
    display: none;
  }
`;
export const HeaderLabel = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.grey};
  margin-bottom: 5px;
`;

export const ProductDesc = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  color: ${({ theme }) => theme.colors.secundary_color};
`;
export const ProductTitle = styled.p`
  font-size: 14px;
`;
export const ProductPrice = styled.p`
  font-size: 16px;
`;
export const Price = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secundary_color};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CheckoutFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.grey};
`;
export const CheckoutBotton = styled(Button)`
  width: 173px;
`;
export const TotalPrice = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
`;
export const TotalLabel = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.grey};
`;
export const PriceLabel = styled.div`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.secundary_color};
`;
