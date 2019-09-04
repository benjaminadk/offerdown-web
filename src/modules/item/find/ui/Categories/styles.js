import styled from 'styled-components'

export const CategoriesWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 66px;
  display: grid;
  align-items: center;
  justify-items: center;
  background: ${p => p.theme.headerBackground};
  .bar {
    width: 650px;
    display: flex;
    color: ${p => p.theme.white};
    font-size: 16px;
    & > * {
      padding: 4px 12px;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    .more {
      display: flex;
      align-items: center;
    }
  }
`
