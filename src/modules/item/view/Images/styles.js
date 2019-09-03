import styled from 'styled-components'

export const ImagesWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 385px;
  background-color: ${p => p.theme.black};
  .heart {
    position: absolute;
    top: 10px;
    right: 20px;
    z-index: 3;
    fill: ${p => p.theme.white};
    cursor: pointer;
  }
`

export const ViewingWindow = styled.div.attrs(p => ({
  style: {
    visibility: p.loading ? 'hidden' : 'visible',
    transform: `translateX(${p.offsetX}px)`
  }
}))`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  height: 100%;
  display: flex;
  margin: 0 auto;
  transition: 250ms;
  img {
    width: auto;
    height: 385px;
    margin-right: 5px;
    cursor: pointer;
  }
`

const Arrow = styled.div`
  position: absolute;
  top: calc(50% - 25px);
  z-index: 3;
  width: 50px;
  height: 50px;
  display: ${p => (p.show ? 'grid' : 'none')};
  align-items: center;
  justify-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  cursor: pointer;
`

export const ArrowRight = styled(Arrow)`
  right: 20px;
`

export const ArrowLeft = styled(Arrow)`
  left: 20px;
`

export const Backdrop = styled.div.attrs(p => ({
  style: {
    backgroundImage: `url(${p.image})`
  }
}))`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 0.5;
  filter: blur(15px);
`
