import styled from "styled-components"
import { CustomersCompare } from "../../data/customers"

export const Customers = () => {

    const Container = styled.div`
        background: ;
    `
    const ListCustomers = styled.ul`
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        
        @media (max-width: 800px){
            
            img{
                width: 100px;
            }
            
        }

    `
    const ListItemCustormer = styled.li`
        margin: 0 15px;
        padding: 15px;

        
    `
    const ImageCustomer = styled.img``
    const Title = styled.h2`
        font-size: 2.5em; 
        margin: 15px;
        text-align: center;  
        font-weight: 100;
    `


    return (
        <>
        <Title></Title>
        <Container id="customers">
            <ListCustomers className='flex'>
                { CustomersCompare.map((customer, i) => {
                    return (
                        <ListItemCustormer>
                            <ImageCustomer src={customer.image} width={220}/>
                        </ListItemCustormer>
                    )
                })}
            </ListCustomers>
        </Container>
        </>
    )

}