import React from 'react'
import Layout from '../../layout'
import { AddNewCollectionContainer, InputForm, InputLine, InputLineWrapper, ListingButton, ListingButtonContainter, LogImage, MainPartContainer, PhotoInput, SelectForm } from './styles'
const category = [1,2];
const Dashboard = () => {
  return (
    <Layout>
        <AddNewCollectionContainer>
            <MainPartContainer>
            <InputForm>

                <InputLine type="text" placeholder='Name:' onChange= {() =>console.log("name change")}/>
                <InputLine type="text" placeholder='Price:' onChange= {() =>console.log("price change")}/>
                <InputLineWrapper>
                <label>
          Category:
          <SelectForm value={category[0]} onChange={() => console.log("category changed")}>
            <option value={category[0]}>Spot</option>
            <option value={category[1]}>Raffle</option>
          </SelectForm>
        </label>
          </InputLineWrapper>
          <InputLineWrapper>
        <label >Photo:</label>
        <PhotoInput type="file" onChange={() => console.log("photo changed")} />
        </InputLineWrapper>
            </InputForm>
                <LogImage src = 'assets/placeholder.png' />

            </MainPartContainer>
            <ListingButtonContainter>
                <ListingButton type="submit" />
            </ListingButtonContainter>
        </AddNewCollectionContainer>
    </Layout>
  )
}

export default Dashboard