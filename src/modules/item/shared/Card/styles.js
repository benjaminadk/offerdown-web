import styled from 'styled-components'

import { cardWidth, cardMargin } from '../constants'

export const CardWrapper = styled.div`
  width: ${cardWidth}px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${p => p.theme.grey[3]};
  border-radius: 5px;

  margin: ${cardMargin}px;
  cursor: pointer;
  &:hover .content {
    background-color: ${p => p.theme.grey[1]};
  }
  img {
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .content {
    padding: 12px;
  }
  .name {
    font-size: 18px;
    font-weight: 700;
  }
  .price {
    font-size: 20px;
    font-weight: 900;
    margin: 5px 0;
  }
  .location {
    font-size: 14px;
    color: ${p => p.theme.grey[8]};
  }
`
