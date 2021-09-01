import React from "react";
import { Divider, Card } from "antd";
import TweenOne from "rc-tween-one";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";

export default function Main() {
  return (
    <div className="main-wrapper" id="nosotros">
      <Card title="¿Quiénes somos?" className="main-card" hoverable>
        <OverPack playScale="0.05">
          <TweenOne
            animation={{ y: "+=30", opacity: 0, type: "from" }}
            key="footer"
          >
            <section className="main-img">
              <img
                width="80%"
                src="https://images.pexels.com/photos/3182826/pexels-photo-3182826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="quienes somos"
              />
            </section>
            <p>
              Somos una empresa ubicada en La Ciudad de México, dedicada a la
              promoción para venta y renta de casas nuevas y usadas;
              departamentos y terrenos, así como al asesoramiento y construcción
              de todo tipo de inmuebles comerciales, departamentales,
              industriales, institucionales y de servicios, edificaciones o de
              vivienda.
            </p>
            <Divider plain>Valores</Divider>
            <p>
              En Inmobiliaria LEBON tenemos fuertemente arraigados valores como:
              el respeto, responsabilidad, formalidad y calidad en el servicio.
              Es por esto que estamos comprometidos en conseguir tu total
              satisfacción y brindarte a ti y a tu familia la mejor opción para
              formar tu patrimonio.
            </p>
            <p>
              Nos esmeramos en darte una adecuada asesoría personalizada, de
              acuerdo a las necesidades de tu familia y de acuerdo a las
              circunstancias actuales del mercado inmobiliario.
            </p>
            <section className="main-img">
              <img src="/valores.png" alt="valores" />
            </section>
            <p>
              Con nuestros conocimientos y experiencia encontrarás un excelente
              aliado para elegir la mejor opción, al ofrecerte un asesoramiento
              personalizado. Calidad, buen servicio y experiencia nos distinguen
              y respaldan.
            </p>
            <Divider orientation="right" plain>
              Misión
            </Divider>
            <p>
              Ser la empresa líder en el asesoramiento y comercialización de
              bienes inmuebles y el apoyo para perfecto para todo tipo de
              construcciones y edificaciones, satisfaciendo las necesidades de
              nuestros clientes por encima de sus expectativas, brindándoles
              servicios de alta calidad. Asimismo, buscando el crecimiento
              sostenido de nuestra empresa y el desarrollo de nuestros
              colaboradores.
            </p>
            <section className="main-img">
              <img src="/mision.png" alt="mision" />
            </section>
            <Divider orientation="left" plain>
              Visión
            </Divider>
            <p>
              Nos proyectamos como la mejor opción en el mercado inmobiliario y
              de construcción, reconocidos por la excelencia en el servicio que
              ofrecemos.
            </p>
            <section className="main-img">
              <img src="/vision.png" alt="vision" />
            </section>
          </TweenOne>
        </OverPack>
      </Card>
    </div>
  );
}
