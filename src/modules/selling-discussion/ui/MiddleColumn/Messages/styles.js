import styled from 'styled-components'

export const MessagesListWrapper = styled.div`
  overflow-y: auto;
  height: ${p => `calc(100vh - ${p.theme.headerHeight} - 58px - 97px - 68px)`};
  background-color: #f4f4f4;
  border-right: ${p => p.theme.borderLight};
  border-bottom: ${p => p.theme.borderLight};
  padding: 16px 22px 0 16px;
`

export const Message = styled.div.attrs(p => ({
  style: {
    marginRight: p.align === 'right' ? '0' : '16px',
    marginLeft: p.align === 'left' ? '0' : '16px',
    marginBottom: '16px'
  }
}))`
  position: relative;
  .time {
    color: ${p => p.theme.detail};
    font-size: 14px;
    line-height: 20px;
    text-align: ${p => p.align};
    padding-left: 8px;
    padding-right: 8px;
    margin-left: 32px;
    margin-right: 32px;
  }
  .text-row {
    text-align: ${p => p.align};
    padding-left: 16px;
    padding-right: 16px;
  }
`

export const Avatar = styled.div.attrs(p => ({
  style: {
    left: p.align === 'left' && '0',
    right: p.align === 'right' && '0',
    backgroundImage: `url(${p.image})`
  }
}))`
  position: absolute;
  top: 4px;
  width: 32px;
  height: 32px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  border-radius: 50%;
`

export const Text = styled.div.attrs(p => ({
  style: {
    backgroundColor: p.align === 'left' ? p.theme.white : p.theme.grey[2]
  }
}))`
  max-width: 400px;
  display: inline-block;
  border-bottom: 2px solid ${p => p.theme.grey[3]};
  border-radius: 4px;
  word-wrap: break-word;
  padding: 8px 16px;
`
