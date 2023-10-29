import styled from "styled-components";
import { Banner, Card, Containers, Feilds,  Headertext } from "./components/styles/Global.styled"
import { useState } from "react";
import "./App.css"
import img from '../src/assets/Fingerprint-bro.png'
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Form = styled.form`
 
  margin:auto;
`;

const FormControl = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color:#737B86);
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 110%; /* 19.8px */
`;

const Input = styled.input`
min-width: ${props=> props.$w};
height:30px;
border-radius: 8px;
border: 1px solid rgba(4, 7, 47, 0.40);
padding-left:5px;

 
`;


const ForgotPasswordLink = styled.a`
  display: block;
  color: #F78719;
  text-decoration: none;
  font-size: 12px;
`;
const A = styled.a`
  color: #F78719;
  text-decoration: underline;
 
  `;
 
const RandomDiv= styled.div`
display:flex;
justify-content: space-between;


`
const RandomDiv2= styled.div`
display:flex;
justify-content: space-between;

`

const Divforbutton = styled.div`
text-align:center;
`

const SubmitButton = styled.button`
width:300px;

  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
background:  #1575A7;
  padding: 0.5rem 1rem;
  cursor: pointer;


  @media (max-width: 768px) {
    /* Styles for mobile devices */
    width:200px;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    width:200px;
  }

 

`;



const ToggleButton = styled.button`
  background: transparent;
  border: none;
  font-size: 14px;
  cursor: pointer;
  margin-left: -30px;

`;
const Images = styled.img`
width: 100%;

`


function App() {

const [passwordVisible, setPasswordVisible] = useState(false);
const [password, setPassword] = useState('');

const togglePasswordVisibility = () => {
  setPasswordVisible(!passwordVisible);
};

const handleSubmit = (e) => {
  e.preventDefault(); 
};

  return (
   
     <Containers>
<Banner>
  <Images src={img}  />
 
</Banner>
<Feilds>

  <Card>
     <Headertext>
      LogIn
     </Headertext>



     <Form onSubmit={handleSubmit}>
        <FormControl>
          <Label>Login ID</Label>
          <Input type="text" $w='100%' placeholder="Enter Login ID" required />
        </FormControl>
        <FormControl>
          <Label>Password</Label>
          <RandomDiv2>
             <Input
            type={passwordVisible ? 'text' : 'password'}
            placeholder="password"
            value={password}
           $w='100%'
            onChange={(e) => setPassword(e.target.value)}
            required
            maxLength={6}
          />
          <ToggleButton onClick={togglePasswordVisibility}>
            {passwordVisible ? <FaEyeSlash/>:<FaEye/> }
          </ToggleButton>
          </RandomDiv2>

         
          
        </FormControl>
        <FormControl>
        <RandomDiv>
        <Label>  <input type="checkbox">
          </input>
          Remember Me</Label>
          <ForgotPasswordLink>Change Password</ForgotPasswordLink>
        </RandomDiv>
        <Label>  <input type="checkbox">
          </input>
          Agree to <A>Terms & Conditions</A>     </Label>
        </FormControl>
      
        <FormControl>
          <Divforbutton>
            <SubmitButton>Login</SubmitButton>
          </Divforbutton>
          
        </FormControl>

  <FormControl>
  <Divforbutton>
       <Label>  
          Don’t have an account? 
          <A>Register Here</A>     </Label>
  </Divforbutton>
     
        </FormControl>


      </Form>
   

    
  </Card>




 
</Feilds>
   
     
      </Containers>

  )
}

export default App
