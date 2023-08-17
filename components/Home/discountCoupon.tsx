import Image from "next/image";
import { use, useEffect, useState } from "react"
import Modal from 'react-bootstrap/Modal';
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { COUPONS_DATA } from "../../interfaces/lCoupon";
import { BtnCupon, DivImgCupon, TitleCupon, DivContent, DivContentInfo,BtnThanks} from "../../styles/Styles-Home/Coupon.styles";


export const Coupon = ({coupons}:COUPONS_DATA) => {
const data = coupons[0];
const title = data.name;
const imgCoupon = data.image.mediaItemUrl;
const imgAlt = data.image.altText;
const textBtnDescuento = data.textBtn;
const colorTitle = data.colorName;
const colorbackground = data.backgroundcolor;
const colorbackgroundBtn = data.backgroundColorBtn;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  useEffect(function () {
    setShow(true)
    },[])

  return (
    <>
     
        <Modal 
          style={{marginTop:'90px'}}
          show={show}
          backdrop="static"
          keyboard={false}
          size="lg">
            <DivContent>
                <DivImgCupon style={{background:`#${colorbackground}`}}>
                  <img className="ImgCupon" src={imgCoupon} alt={imgAlt}/>
                </DivImgCupon>
              <DivContentInfo>
                 <TitleCupon style={{color:`#${colorTitle}`}} 
                            dangerouslySetInnerHTML={{__html: title  }} />
                <p>Escribe tu correo electrónico y obtén el cupón de descuento</p>
                <label htmlFor="text-input"></label>
                  <input className="inputCupon" placeholder="Escribe tu Email aquí" type="email" />
                  <label>
                    <input type="checkbox" className="checkbox"/>
                    Acepto recibir noticias y ofertas especiales.
                  </label>
                <BtnCupon style={{background:`#${colorbackgroundBtn}`}} 
                        dangerouslySetInnerHTML={{__html: textBtnDescuento }}></BtnCupon>  
                <BtnThanks onClick={handleClose}>No, Gracias</BtnThanks>  
              </DivContentInfo>
            </DivContent>
        </Modal>
 
    </>
  )
}
