import styled from "styled-components"

const Container = styled.div`

    height: 30px;
    background-color: teal;
    color: white;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight:500;
    display: flex;


`

const Announcement = () => {
  return (
    <div>
      <Container>
        Super Deal! Free Shipping On Order Over 500 Rs
      </Container>
    </div>
  )
}

export default Announcement

