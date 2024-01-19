// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components'

export const StyledLoginMainComponent = styled.div`
  background-color: ${props =>
    props.activeTheme === 'Dark' ? '#0f0f0f' : '#ebebeb'};
  color: ${props => (props.activeTheme === 'Dark' ? '#ffffff' : '#000000')};
`
export const StyledLoginFormComponent = styled.div`
  background-color: ${props =>
    props.activeTheme === 'Dark' ? '#000000' : '#ffffff'};
  color: ${props => (props.activeTheme === 'Dark' ? '#ffffff' : '#000000')};
`
