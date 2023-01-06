import styled from 'styled-components'

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  max-width: 1200px;
  margin: auto;
  h2{
    text-align: center;
    margin-top: 30px;
  }
  
`

export const Title = styled.span`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;

`

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`


