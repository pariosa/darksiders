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
  height: calc(var(--vh, 1vh) * 100);
`;
const Title = Styled.div`
  font-family: 'Libre Barcode 128 Text', cursive;
  font-size: ${fontSizes.h1};
  display:flex;
  width:100%; 
  align-items:space-around;
  height: calc(var(--vh, 1vh) * 100);
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
  
  background-color: ${colors.white};
  color: ${colors.black}; 
`;

const Spacer = Styled.div`
  min-width: 15%;
  background-color: ${colors.white};
  max-width: 35%;
  flex: 1; 
`;
const BlackSpacer = Styled.div`
  min-width: 15%;
  max-width: 43%;
  flex: 1;
  background-color: ${colors.black};
`;
const White = Styled.div`
  flex-basis: fill;  
  
  background-color: ${colors.black};
  color: ${colors.white}; 
`;

export default function Home({ isConnected }) {
  return (
    <>
      <NextLink passHref href="https://www.facebook.com/dvrksydvrstalent/">
        <Container>
          <Title>
            <BlackSpacer />
                <Black>
                  DVRK
                </Black>
                <White>
                  SYDERS
                </White> 
            <Spacer/>
          </Title>
        </Container>
      </NextLink>
    </>
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
