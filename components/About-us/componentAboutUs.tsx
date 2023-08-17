import ImgMonsiblue from '../../assets/Img-App/Img-AboutUs/isologo.png'
import Title from '../../assets/Img-App/Img-AboutUs/aboutUs.png'
import TitleCoworkers from '../../assets/Img-App/Img-AboutUs/coworkers.png'
import ImgJuanP from '../../assets/Img-App/Img-AboutUs/juanpa.png'
import ImgDaniela from '../../assets/Img-App/Img-AboutUs/daniela.png'
import ImgAngie from '../../assets/Img-App/Img-AboutUs/angie.png'
import ImgDiego from '../../assets/Img-App/Img-AboutUs/Diego.png'
import ImgFernando from '../../assets/Img-App/Img-AboutUs/Fernando.png'
import ImgConsuelo from '../../assets/Img-App/Img-AboutUs/Ma-consuelo-.png'
import ImgSebasR from '../../assets/Img-App/Img-AboutUs/sebastian.png'
import ImgSebasC from '../../assets/Img-App/Img-AboutUs/Sebas-.png'
import ImgOlga from '../../assets/Img-App/Img-AboutUs/olga.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ContainerAbout, DivAboutUs, DivCoworkers, TextoAboutUs, Responsive, CoworkersName, CoworkersProfession } from '../../styles/Styles-About-us/AboutUs.Styles';
import Image from 'next/image'



const ComponentAboutUs = () => {
  return (
    <ContainerAbout>
  
        <Image className={'ImgMonsiBlue'} src={ImgMonsiblue} alt={'monsi'}/>
        <DivAboutUs>
            <Image className={'ImgTitle'} src={Title} alt={'Quienes somos'}/>
            <TextoAboutUs>
               Somos una empresa dedicada a la fabricación y comercialización de productos de aseo, desinfección y limpieza de alta calidad, amigable con el medio ambiente para la  industria y el hogar.<br></br><br></br>
               Nuestro objetivo es lograr la satisfacción de nuestros clientes, cubriendo sus necesidades de limpieza, higiene y sanitización, con el mejor servicio y calidad posible teniendo como prioridad  el cuidado del medio ambiente y  la salud de los usuarios.
            </TextoAboutUs>
        </DivAboutUs>
        <DivCoworkers>
            <Image className={'TitleAboutCoworkes'} src={TitleCoworkers} alt={'nuestros colaboradores'}/>
            <Carousel responsive={Responsive}> 
            <div className={'divContent'}><Image  className={'ImgCoworkers'} src={ImgAngie} alt={"Angie"} /><CoworkersName>Angie Lora</CoworkersName><CoworkersProfession>Jefe de Producción</CoworkersProfession></div>
            <div className={'divContent'}><Image  className={'ImgCoworkers'} src={ImgDaniela} alt={"Daniela"} /><CoworkersName>Daniela Chacón</CoworkersName><CoworkersProfession>CEO</CoworkersProfession></div>
            <div className={'divContent'}><Image  className={'ImgCoworkers'} src={ImgDiego} alt={"Diego"} /><CoworkersName>Diego Acevedo</CoworkersName><CoworkersProfession>Diseñador Gráfico</CoworkersProfession></div>
            <div className={'divContent'}><Image  className={'ImgCoworkers'} src={ImgFernando} alt={"Fernando" }/><CoworkersName>Fernando Pérez</CoworkersName><CoworkersProfession>Área Contable</CoworkersProfession></div>
            <div className={'divContent'}><Image  className={'ImgCoworkers'} src={ImgJuanP} alt={"JuanPablo"} /><CoworkersName>Juan Pablo Gallego</CoworkersName><CoworkersProfession>Programador Junior</CoworkersProfession></div>
            <div className={'divContent'}><Image  className={'ImgCoworkers'} src={ImgConsuelo} alt={"Consuelo"} /><CoworkersName>María Consuelo Palacio</CoworkersName><CoworkersProfession>Área de Ventas</CoworkersProfession></div>
            <div className={'divContent'}><Image  className={'ImgCoworkers'} src={ImgOlga} alt={"olga"} /><CoworkersName>Olga Muñoz</CoworkersName><CoworkersProfession>Área Mantenimiento</CoworkersProfession></div>
            <div className={'divContent'}><Image  className={'ImgCoworkers'} src={ImgSebasR} alt={"Sebastian"} /><CoworkersName>Sebástián Rodríguez</CoworkersName><CoworkersProfession>Programador Junior</CoworkersProfession></div>
            <div className={'divContent'}><Image  className={'ImgCoworkers'} src={ImgSebasC} alt={"Sebastian"} /><CoworkersName>Sebastián Serna</CoworkersName><CoworkersProfession>Operario de producción</CoworkersProfession></div>
            </Carousel>
        </DivCoworkers>
    </ContainerAbout>
  )
}
export default ComponentAboutUs