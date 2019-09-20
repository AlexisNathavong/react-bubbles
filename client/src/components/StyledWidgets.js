import styled from 'styled-components';

//Login
export const Card = styled.div`

    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: 30px;
    border: 2px solid #E3E1E1;
    border-radius: 12px;
    box-shadow: 5px 5px 8px;
    width: 30%;
    align-items: center;
    height: 300px;
    display: flex;
    justify-content: center;

`;

export const Context = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    @media (max-width: 500px) {
        
    }
    
    margin-bottom: 25px;
    .form-group {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        margin-left: 10px;
        label {
            
            margin-bottom: 5px;
            display: flex;
            justify-content: space-between;
        }
    }
`;

//App
export const Nav = styled.nav`

    a {
        margin-left: 70px;
        text-decoration: none;
        font-size: 18px;
        font-family: 'Roboto', sans-serif;
        cursor: pointer;
        @media (max-width: 500px) {
            display: flex;
            justify-content: center;
            margin: 0 auto;
        }
    }
`;