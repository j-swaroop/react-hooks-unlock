// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-image: linear-gradient(to top, #3c2940, #0b0c1e);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ResponsiveContainer = styled.div`
  width: 90%;
  max-width: 1140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  width: 100px;
`

export const Text = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  color: #e2e8f0;
  text-align: center;
`

export const Button = styled.button`
  font-family: 'Roboto';
  height: 38px;
  width: 90px;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  background-color: #06b6d4;
  margin-top: 80px;
  cursor: pointer;
`
