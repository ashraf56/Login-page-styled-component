import styled from "styled-components";





export const Containers =styled.section`
min-width:90%;
min-height: 90vh;
padding:20px;
font-family: 'Poppins';
display:flex;
align-items: center;

@media (max-width: 768px) {
    display:block
     
  }

  @media (min-width: 769px) and (max-width: 1023px) {
  
    display:block  
   
}

 

`;


export const Banner= styled.section`
width:40%;
height:100%;
padding-left:40px;
@media (max-width: 768px) {
    width:100%;
    padding-left:0px;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
   width:100%;
   padding-left:0px;
  }
`;
export const Feilds= styled.section`
width:40%;
height:100%;
margin:auto;
justify-content: center;
align-items: center;

@media (max-width: 768px) {
    /* Styles for mobile devices */
   width:100%;

  }

  @media (min-width: 769px) and (max-width: 1023px) {
    width:100%;
  }

`;
export const Card= styled.div`
min-width:80%;
align-items: center;
border: 2px ;
margin:auto;
border-radius: 12px;
display:block;
padding:80px;
border-radius: 12px;
background: #FFF;
box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.16);

@media (max-width: 768px) {
    /* Styles for mobile devices */
    min-width:40%;

  }

  @media (min-width: 769px) and (max-width: 1023px) {
    min-width:50%;
  }


 

`;

export const Headertext = styled.h1`
color:  #04072F;
text-align: center;
font-family: Poppins;
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: 50%; 



  @media  (min-width: 1724px) {

    font-size: 68px 
   
}

`;


export const InputField = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  margin: 5px 0;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;
