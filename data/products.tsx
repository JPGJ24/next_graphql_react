import { ImgDescription } from '../styles/Styles-Product-Description/ProductDescription.styles'
import { Drum, Gallon, Liter } from '../assets/Icons-SVG/Icons-Home/IconosDescriptionProduct';
import { IPresentation } from '../interfaces/IProduct';
import { getProductPresentations } from '../utils';

const PRODUCTS_PRESENTATION = [
  {
    name: "Litro",
    component: ImgDescription,
    image: <Liter />,
    isVisible: false
  },
  {
    name: "Galon",
    component: ImgDescription,
    image: <Gallon />,
    isVisible: true
  },
  {
    name: "20Lt",
    component: ImgDescription,
    image: <Drum />,
    isVisible: false
  },
] as IPresentation[];


export const PRODUCTS = {
  desincrustante: {
    title: "Desincrustante",
    description: "Limpia, elimina manchas de oxido y descurte superficies de cerámica, porcelana y cemento.",
    composition: "Tensoactivo no ionico, estabilizante, componentes minoritarios, agua.",
    useConditions: "Usar puro o diluir. Aplicar sobre la superficie a tratar y dejar por unos minutos, frotar y enjuagar con agua.",
    warnings: `<h5><strong>Precauciones particulares de empleo:</strong></h5> Mantener fuera del alcance de niños.  preparar en un lugar
    abierto y con suma precaución debido al tipo de ácido que se usan. No mezclar con otros productos. Usar guantes. Almacenar y
    transportar protegido de temperaturas extremas.
    <h5><strong>Advertencias:</strong></h5> Provoca irritación ocular. EN CASO DE CONTACTO CON LOS OJOS: Lavar con abundante
    agua por varios minutos. Acudir al médico. EN CASO DE INGESTIÓN: Beber abundante agua y acudir al
    médico. EN CASO DE INHALACIÓN: Desplazarse al aire libre y mantener el reposo.`,
    presentations: getProductPresentations(PRODUCTS_PRESENTATION, 'Desincrustante') as unknown as IPresentation[],
  },
  blanqueador: {
    title: "Blanqueador multiusos",
    description: `Desinfectante altamente concentrado, contiene 7% de hipoclorito de sodio. Es efectivo para limpiar, desinfectar y desodorizar
    superficies. También se puede utilizar en el proceso de blanqueo de superficies y de textiles como trapero, manteles y
    servilletas de tela.`,
    composition: "Hipoclorito de sodio, componentes minoritarios.",
    useConditions: "Usar puro o diluir. Aplicar sobre la superficie a tratar y dejar por unos minutos, frotar y enjuagar con agua.",
    warnings: `<h5><strong>Precauciones particulares de empleo:</strong></h5> Mantener fuera del alcance de niños. No mezclar con 
    otros productos. Usar guantes. Almacenar y transportar protegido de temperaturas extremas
    <h5><strong>Advertencias:</strong></h5> Provoca irritación ocular. EN CASO DE CONTACTO CON LOS OJOS: Lavar con abundante 
    agua por varios minutos. Acudir al médico. EN CASO DE INGESTIÓN: Beber abundante agua y acudir al 
    médico. EN CASO DE INHALACIÓN: Desplazarse al aire libre y mantener el reposo.`,
    presentations: getProductPresentations(PRODUCTS_PRESENTATION, 'Blanqueador') as unknown as IPresentation[],
  },
  desengrasante: {
    title: "Desengrasante",
    description: `Remueve fácilmente la suciedad y la grasa. Su alta concentración lo hace ideal para ser utilizado en
    cocinas industriales, parrillas, asadores, entre otras superficies con grasa animal y vegetal difícil de remover.`,
    composition: "Tensoactivo aniónico, hidróxido de sodio, componentes minoritarios, agua.",
    useConditions: `Usar puro o diluir. Aplicar sobre la superficie a tratar, dependiendo de la grasa dejar por unos minutos, 
    frotar y enjuagar con agua.`,
    warnings: `<h5><strong>Precauciones particulares de empleo:</strong></h5> Mantener fuera del alcance de niños.  No mezclar
    con otros productos. Usar guantes. Almacenar en un lugar fresco.
   <h5><strong>Advertencias:</strong></h5> EN CASO DE CONTACTO CON LOS OJOS: Lavar con abundante agua por varios 
   minutos. Acudir al médico. EN CASO DE INGESTIÓN: Beber abundante agua y acudir al médico.`,
    presentations: getProductPresentations(PRODUCTS_PRESENTATION, 'Desengrasante') as unknown as IPresentation[],
  },
  limpiadorMultiusos: {
    title: "Limpiador Multiusos",
    description: `Este producto es de rápida acción y combina el poder detergente y desinfectante en un solo paso, limpiando las
    superficies y deja un agradable aroma a lavanda.`,
    composition: "Tensoactivo catiónico, conservantes, componentes minoritarios.",
    useConditions: "Usar puro. Aplicar sobre la superficie con aspersor o trapo húmedo.",
    warnings: `<h5><strong>Precauciones particulares de empleo:</strong></h5> Mantener fuera del alcance de niños. 
    No mezclar con otros productos. Almacenar y transportar protegido de temperaturas extremas.
   <h5><strong>Advertencias:</strong></h5> EN CASO DE CONTACTO CON LOS OJOS: Lavar con abundante agua por 
   varios minutos. Acudir al médico. EN CASO DE INGESTIÓN: Beber abundante agua y acudir al médico. EN CASO 
   DE INHALACIÓN: Desplazarse al aire libre y mantener el reposo.`,
    presentations: getProductPresentations(PRODUCTS_PRESENTATION, 'LimpiadorMultiusos') as unknown as IPresentation[],
  },
  lavalozaNeutro: {
    title: "Lavaloza Neutro",
    description: `Remueve la suciedad y la grasa con facilidad de superficies y utensilios de cocina. Tiene compuesto que evitan que
    las manos se maltraten. Este producto genera la espuma necesaria en el proceso de lavado, así se evita el mal gasto de
     agua a la hora ser enjuagado de las diferentes superficies.`,
    composition: "Tensoactivo aniónico, agentes quelantes, humectante, componentes minoritarios, agua.",
    useConditions: "Usar puro o diluir. Aplicar sobre la superficie a tratar, frotar y enjuagar con agua.",
    warnings: `<h5><strong>Precauciones particulares de empleo:</strong></h5> Mantener fuera del alcance de niños.  No mezclar con otros productos.
    <h5><strong>Advertencias:</strong></h5> EN CASO DE CONTACTO CON LOS OJOS: Lavar con abundante agua por varios minutos. Acudir al médico. 
    EN CASO DE INGESTIÓN: Beber abundante agua y acudir al médico.`,
    presentations: getProductPresentations(PRODUCTS_PRESENTATION, 'LavalozaNeutro') as unknown as IPresentation[],
  },
};
