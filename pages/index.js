import clientPromise from '../lib/mongodb'
import Styled from 'styled-components';
import {fontSizes, colors} from '../styles';
import NextLink from 'next/link';

const Container = Styled.body`
  margin:0px;
  width: 100%;
  min-width:100%;
  display: grid;
  grid-template-columns:repeat(2, 100%);
  height:100vh;
`;
const Title = Styled.div`
  font-family: 'Libre Barcode 128 Text', cursive;
  font-size: ${fontSizes.h1};
  display:flex;
  width:100%;
  height:100vh;
  flex-direction: row;
    * {
      cursor:pointer;
      display: flex;
      align-items: center;
      flex-direction:row;
      height:100vh;
    }
`;
const Black = Styled.div` 
  text-align:right;
  background-color: ${colors.black};
  color: ${colors.white}; 
`;

const Spacer = Styled.div`

min-width:35%;
max-width:35%;
flex:1; 
`;
const BlackSpacer = Styled.div`

min-width:35%;
max-width:35%;
flex:1;
background-color: ${colors.black};
`;
const White = Styled.div`
flex-basis:fill;  
background-color: ${colors.white};
  color: ${colors.black}; 
`;

export default function Home({ isConnected }) {
  return (
  <Container>
    <Title>
      <BlackSpacer />
      <NextLink href="https://www.facebook.com/dvrksydvrstalent/">
          <Black>
            DVRK
          </Black>
        </NextLink>      
        <NextLink href="https://www.facebook.com/dvrksydvrstalent/">
          <White>
            SYDERS
          </White>
        </NextLink>
      <Spacer/>
    </Title>
  </Container>
  )
}

export async function getServerSideProps(context) {
  try {
    // client.db() will be the default database passed in the MONGODB_URI
    // You can change the database by calling the client.db() function and specifying a database like:
    // const db = client.db("myDatabase");
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands
    await clientPromise
    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}
