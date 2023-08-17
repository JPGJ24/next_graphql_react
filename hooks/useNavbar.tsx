import Router, { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'


const useNavbar = () => {
  const [show, setShow] = useState(false);
const { pathname } = useRouter()
const [expanded, setExpanded] = useState(false);

const router = useRouter()
const ShoppingCart = () => {
  router.push("/ShoppingCart")}
  
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const handleScroll = () => {
    const element = document.getElementById(pathname.replace("#", ""));

    if (element) {
      setTimeout(() => {
        window.scrollTo({
          behavior: element ? "smooth" : "auto",
          top: element ? element.offsetTop : 0
        });
      }, 100);
    }
  };

  useEffect(() => {
    handleScroll()
  }, [pathname]);

  return{
    show,
    setShow,
    pathname,
   
    expanded,
    setExpanded,
    ShoppingCart,
    handleClose,
    handleShow,
    handleScroll,
  }
}

export default useNavbar