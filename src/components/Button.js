import styled from 'styled-components'

export const ButtonContainer = styled.button`
font-size: 1.4rem;
text-transform: capitalize;
background: transparent;
border: 0.1rem solid var(--lightBlue);
border-color: ${props => props.cart? "var(--mainYellow)": "var(--lightBlue)"};
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
color: ${props => props.cart? "var(--mainYellow)": "var(--lightBlue)"};
cursor: pointer;
transition: all 0.5s ease-in-out;
&:hover{
    background: ${ebuka => ebuka.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainWhite);
}

&:focus{
    outline: none;
}
`