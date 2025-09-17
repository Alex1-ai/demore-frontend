import styled from "styled-components"
const Container = styled.div`
   height:30px;
   background-color: teal;
   color:white;
   display:flex;
   align-items:center;
   justify-content: center;
   font-size:14px;
   font-weight:500px;


`

const Announcement = () => {
  return (
    <Container>
         Super Deal! Enjoy Discounts and Affordable Prices!

    </Container>
  )
}

export default Announcement
