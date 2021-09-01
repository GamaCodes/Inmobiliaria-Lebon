import React from "react";
import Texty from "rc-texty";
import "rc-texty/assets/index.css";

import { Typography, Carousel } from "antd";

const { Paragraph, Text } = Typography;

class Content3 extends React.PureComponent {
  getDelay = (e, b) => (e % b) * 100 + Math.floor(e / b) * 100 + b * 100;

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;

    return (
      <div {...props} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          <div className="texty-demo title-section" style={{ marginTop: 64 }}>
            <Texty>¿Qué ofrecemos?</Texty>
          </div>
          <Typography className="typo-align">
            <Paragraph>
              En
              <Text strong className="content-strong">
                {" "}
                Inmobiliaria LEBON
              </Text>
              , le ofrecemos los servicios de: venta de casas, terrenos, trámite
              de su crédito (en el caso de que usted, ya tenga la vivienda),
              trabajos de mantenimiento en su casa, pues sabemos lo importante
              que es la conservación de su patrimonio.
            </Paragraph>
            <Paragraph>
              La administración y supervisión de construcción de cualquier clase
              bienes inmuebles, ya sean comerciales, institucionales, de
              servicios, vivienda o de cualquier tipo.
            </Paragraph>
            <Paragraph>
              La compra, venta, arrendamiento y subarrendamiento de toda clase
              de bienes muebles e inmuebles, construcciones, terrenos, oficinas,
              bodegas, planta, condominios horizontales y verticales, fábricas,
              talleres, vehículos automotores, maquinaria para construcción,
              enseres domésticos, de oficina, profesionales y demás
              relacionados.
            </Paragraph>
            <Paragraph>
              Así mismo proporcionamos el servicio de construir, demoler, dar
              mantenimiento, realizar mejoras de todo tipo de construcciones y
              edificaciones destinadas a uso habitacional, comercial y en
              general a cualquier tipo.
            </Paragraph>
            <Paragraph>
              Contamos con asesores inmobiliarios certificados, capacitados y
              con una amplia experiencia. Operamos en la Ciudad de México, con
              inicio de actividades en el año 2018.
            </Paragraph>
          </Typography>
          <div className="div-content">
            <div className="texty-demo title-section" style={{ marginTop: 64 }}>
              <Texty>Trámite de créditos</Texty>
              <Texty>Hipotecarios y asesoría</Texty>
            </div>
            <Typography className="typo-align">
              <Paragraph>
                En el caso que ya tengas elegida la casa de tus sueños, te
                podemos ayudar en el
                <Text strong className="content-strong">
                  {" "}
                  trámite de tu crédito
                </Text>
                , bancario, INFONAVIT ó FOVISSSTE.
              </Paragraph>
              <Paragraph>
                Olvídate de las largas filas y pérdida de tu tiempo, nosotros
                hacemos los trámites por ti y te atendemos en el lugar que nos
                indiques, o bien, puedes venir a nuestras oficinas.
              </Paragraph>
              <Paragraph>
                Nos interesamos en tu satisfacción total, enfocándonos en que tu
                trámite se haga de forma rápida y segura.
              </Paragraph>
            </Typography>
            <Carousel autoplay>
              <div>
                <h3 className="contentStyle first"> </h3>
              </div>
              <div>
                <h3 className="contentStyle second"> </h3>
              </div>
              <div>
                <h3 className="contentStyle three"> </h3>
              </div>
              <div>
                <h3 className="contentStyle four"> </h3>
              </div>
            </Carousel>
          </div>
          <div className="div-content">
            <div className="texty-demo title-section" style={{ marginTop: 64 }}>
              <Texty>Mantenimiento a</Texty>
              <Texty>casa-habitación</Texty>
            </div>
            <Typography className="typo-align">
              <Paragraph>
                En
                <Text strong className="content-strong">
                  {" "}
                  Inmobiliaria LEBON
                </Text>
                , sabemos lo importante que es preservar tu patrimonio. por eso
                ponemos a tu disposición el servicio de mantenimiento, pintura y
                remodelación.
              </Paragraph>
              <Paragraph> - Servicios</Paragraph>
              <Paragraph> - Materiales</Paragraph>
              <Paragraph> - Asesoría y Diseño</Paragraph>
            </Typography>
            <Carousel>
              <div>
                <h3 className="contentStyle f1"> </h3>
              </div>
              <div>
                <h3 className="contentStyle f2"> </h3>
              </div>
              <div>
                <h3 className="contentStyle f3"> </h3>
              </div>
              <div>
                <h3 className="contentStyle f4"> </h3>
              </div>
            </Carousel>
          </div>
          <div className="div-content">
            <div className="texty-demo title-section" style={{ marginTop: 64 }}>
              <Texty>Construcción</Texty>
            </div>
            <Typography className="typo-align">
              <Paragraph>
                Te asesoramos y contribuimos en tus diseños para construcciones,
                terrenos, oficinas, bodegas, plantas, condominios horizontales y
                verticales, fábricas, talleres.
              </Paragraph>
              <Paragraph> - Oficinas</Paragraph>
              <Paragraph> - Bodegas</Paragraph>
              <Paragraph> - Plantas</Paragraph>
            </Typography>
            <Carousel autoplay>
              <div>
                <h3 className="contentStyle s1"> </h3>
              </div>
              <div>
                <h3 className="contentStyle s2"> </h3>
              </div>
              <div>
                <h3 className="contentStyle s3"> </h3>
              </div>
              <div>
                <h3 className="contentStyle s4"> </h3>
              </div>
              <div>
                <h3 className="contentStyle s5"> </h3>
              </div>
              <div>
                <h3 className="contentStyle s6"> </h3>
              </div>
            </Carousel>
          </div>
          <div className="div-content">
            <div className="texty-demo title-section" style={{ marginTop: 64 }}>
              <Texty>Vende o traspasa</Texty>
              <Texty>tu propiedad</Texty>
            </div>
            <Typography className="typo-align">
              <Paragraph>
                Te ayudamos a vender tu terreno, casa nueva o usada
              </Paragraph>
              <Paragraph>
                {" "}
                Sugiérenos tu propiedad, te ayudamos a venderla. ¿Si estas
                pagando aún tu crédito INFONAVIT ó Bancario y quieres vender tu
                casa?
              </Paragraph>
              <Paragraph>
                {" "}
                No importa, solo tienes que cumplir con algunos requisitos,
                nosotros te ayudamos a promoverla.
              </Paragraph>
              <Paragraph>
                Te sorprenderás lo rápido que podemos colocarla. Además, te
                asesoramos y apoyamos en todo momento para concluir la venta de
                tu propiedad.
              </Paragraph>
            </Typography>
            <div className="img-div">
              <img
                src="https://images.pexels.com/photos/313691/pexels-photo-313691.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="ventas"
                width="100%"
              />
            </div>
          </div>
          <div className="div-content">
            <div className="texty-demo title-section" style={{ marginTop: 64 }}>
              <Texty>Asesoría para</Texty>
              <Texty>créditos Hipotecarios</Texty>
            </div>
            <Typography className="typo-align">
              <Paragraph>
                Contamos con un grupo de asesores altamente capacitados y que te
                podrán apoyar desde la primera cita en los siguientes puntos:
              </Paragraph>
              <Paragraph>
                - Validar que la documentación de la casa que hayas elegido,
                esté correcta jurídicamente hablando.
              </Paragraph>
              <Paragraph>
                - Si técnicamente la vivienda es apta para tu crédito.
              </Paragraph>
              <Paragraph>
                - Te explicamos en que consiste tu crédito hipotecario.
              </Paragraph>
              <Paragraph>
                - Te asignamos a un colaborador que te dará asesoría
                personalizada.
              </Paragraph>
            </Typography>
            <div className="img-div">
              <img
                src="https://images.pexels.com/photos/7579201/pexels-photo-7579201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="crdito"
                width="100%"
              />
            </div>
          </div>
          <div className="div-content">
            <div className="texty-demo title-section" style={{ marginTop: 64 }}>
              <Texty>Atención a Clientes</Texty>
            </div>
            <Typography className="typo-align-c">
              <Paragraph>¿Necesitas más información?</Paragraph>
              <Paragraph>¿Requieres de un servicio?</Paragraph>
              <Paragraph>Contactanos</Paragraph>
            </Typography>
            <div
              className="texty-demo title-section-s"
              style={{ marginTop: 10 }}
            >
              <Texty>diseno@inmobiliarialebon.com</Texty>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content3;
