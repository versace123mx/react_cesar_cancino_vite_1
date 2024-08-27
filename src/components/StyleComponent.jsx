import styled from '@emotion/styled'

const Titulo = styled.h1`
  font-size:20px;
`
let SomeComp = styled.div({
    color: 'hotpink'
  })
function StyleComponent() {
    return (
        <>
        <div>
            <h1>Styled component</h1>
            <hr />
            <Titulo>ff</Titulo>
        </div>
        </>
    )
}

export default StyleComponent
