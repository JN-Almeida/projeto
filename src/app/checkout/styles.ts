"use client";
import styled from "styled-components";
import Button from "@/components/Button";

export const CheckoutContainer = styled.div`
  padding: 23px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  width: 100%;
  margin-bottom: 35px;
`;
export const TableGrid = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 0.4fr 1fr 1fr;
  align-items: center;
  margin-bottom: 23px;
  @media screen and (max-width: 667px) {
    grid-template-columns: 0.8fr 1fr 1fr;
    position: relative;
  }
`;
export const TableGridHeader = styled(TableGrid)`
  grid-template-columns: 0.8fr 1fr 1fr;
  @media screen and (max-width: 667px) {
    display: none;
  }
`;
export const HeaderLabel = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.grey};
  margin-bottom: 5px;
`;

export const ProductImg = styled.div`
  width: 91px;
  height: 114px;
  position: relative;
  @media screen and (max-width: 667px) {
    width: 64px;
    height: 82px;
    grid-row: 1 / span 2;
  }
`;

export const ProductTitle = styled.p`
  font-size: 14px;
  margin-bottom: 7px;
  color: ${({ theme }) => theme.colors.secundary_color};
  @media screen and (max-width: 667px) {
    max-width: 100px;
  }
`;
export const ProductPrice = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secundary_color};
  @media screen and (max-width: 667px) {
    position: absolute;
    top: 3px;
    right: 35px;
  }
`;
export const Price = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secundary_color};
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${HeaderLabel} {
    display: none;
  }
  @media screen and (max-width: 667px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-column: 3;
    grid-row: 2;
    ${HeaderLabel} {
      font-size: 12px;
      margin-bottom: 0;
      display: block;
    }
    button {
      position: absolute;
      top: 5px;
      right: 0;
    }
  }
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
