import { BsSearch } from 'react-icons/bs'
import styled from 'styled-components'
import FirstBannerImage from '../../assets/images/banner.jpg'
import { BannerContainer, Title, InfoContainer, Paragraph, Found, BannerContainerChild } from './style'
import Luz from '../../assets/images/white.png'
import Noite from '../../assets/images/dark.png'

export const Banner = () => { 

    const BannerIdeia = styled.div`
        position: relative;
        left: 200px;
        top: 79px;

        @media(max-width: 768px){
            display: none;
        }
        
        img {
            position: absolute;
            height: 100px;
        }

        @keyframes on {
            0% {
                opacity: 0.3;
                
            }

            50% {
                opacity: 0.7;
            }

            100% {
                opacity: 1;
            }
        }
        #luz {
            opacity: 0;
            animation: on 1s infinite;
            margin-left: -5px;
        }
    `

    return (

        <BannerContainer className='flex'>
            <BannerContainerChild>
                <div className="content">
                    <BannerIdeia>
                        <img src={Noite} alt=""  width={100}/>
                        <img src={Luz} alt="" width={115} id={'luz'} />
                    </BannerIdeia>

                </div>
                <img src={FirstBannerImage} alt="" width={500}/>
            </BannerContainerChild>
            <InfoContainer>
                <Title>
                    Sabia que com a <strong>Fast Log</strong> você pode <strong>Rastrear</strong> o seu pedido aonde ele estiver?
                </Title>
                <Paragraph>
                    Aqui você consegue não somente consultar o status, 
                    mas saber exatamente onde ele está
                    <br />
                    
                </Paragraph>
                <BannerContainerChild>
                    <Found type={'text'} placeholder={'Codigo do seu pedido'}/>
                    <BsSearch className='btn-search'/>
                </BannerContainerChild>

            </InfoContainer>

        </BannerContainer>

    )

}