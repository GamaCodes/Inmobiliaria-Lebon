import React from "react";
import { Button } from "antd";
import { DownCircleOutlined } from "@ant-design/icons";
import QueueAnim from "rc-queue-anim";
import TweenOne, { TweenOneGroup } from "rc-tween-one";
import BannerAnim, { Element } from "rc-banner-anim";
import "rc-banner-anim/assets/index.css";

const BgElement = Element.BgElement;
class Banner extends React.PureComponent {
  render() {
    const { ...props } = this.props;
    const { dataSource, isMobile } = props;
    delete props.dataSource;
    delete props.isMobile;
    const childrenToRender = dataSource.BannerAnim.children.map((item, i) => {
      const elem = item.BannerElement;
      const elemClassName = elem.className;
      delete elem.className;
      const bg = item.bg;
      const textWrapper = item.textWrapper;
      const title = item.title;
      const content = item.content;
      const button = item.button;
      const page = item.page;
      const follow = !isMobile
        ? {
            delay: 1000,
            minMove: 0.1,
            data: [
              {
                id: `bg${i}`,
                value: 15,
                type: "x",
              },
              { id: `wrapperBlock${i}`, value: -15, type: "x" },
            ],
          }
        : null;
      return (
        <Element
          key={i.toString()}
          followParallax={follow}
          {...elem}
          prefixCls={elemClassName}
        >
          <BgElement key="bg" {...bg} id={`bg${i}`} />
          <div {...page}>
            <QueueAnim
              type={["bottom", "top"]}
              delay={200}
              key="text"
              {...textWrapper}
              id={`wrapperBlock${i}`}
            >
              <div key="logo" {...title}>
                <svg
                  width="148"
                  height="203"
                  viewBox="0 0 148 203"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M147.215 49.1066L88.3843 31.9693C88.5549 34.1746 88.6296 36.432 88.6296 38.7453V39.1746L139.5 53.992V142.151H147.215V50.2026H146.896L147.215 49.1066Z"
                    fill="#F04D44"
                  />
                  <path
                    d="M147.215 201.719H139.501V142.151H147.215V201.719Z"
                    fill="#F04D44"
                  />
                  <path
                    d="M12.6825 194.716L8.2545 194.723L8.2305 179.609L11.6758 179.604C15.1892 179.599 16.6692 181.003 16.6758 185.572L16.6825 189.859C16.6878 193.515 15.2838 194.712 12.6825 194.716ZM8.19983 159.576L11.9265 159.571C14.6665 159.567 15.8652 161.111 15.8705 164.625L15.8745 167.367C15.8798 171.303 14.1252 172.571 11.2425 172.576L8.21983 172.579L8.19983 159.576ZM18.6278 175.517C22.0705 173.895 23.6105 170.659 23.6025 165.597L23.5998 163.84C23.5892 156.248 20.1398 152.528 12.1265 152.541L0.458496 152.559L0.533162 201.763L12.6932 201.744C20.4252 201.733 24.4265 197.649 24.4145 190.059L24.4078 186.051C24.3998 180.851 22.7772 177.127 18.6278 175.517"
                    fill="#1BAAA1"
                  />
                  <path
                    d="M46.3049 195.28C43.8449 195.284 42.2969 193.951 42.2916 190.436L42.2502 163.864C42.2449 160.351 43.7889 159.015 46.2489 159.011C48.7102 159.007 50.2582 160.339 50.2636 163.853L50.3049 190.424C50.3089 193.939 48.7649 195.276 46.3049 195.28ZM46.2396 151.98C38.6476 151.992 34.5062 156.496 34.5196 164.368L34.5582 189.956C34.5702 197.828 38.7236 202.321 46.3156 202.309C53.9076 202.299 58.0476 197.793 58.0356 189.92L57.9969 164.333C57.9849 156.461 53.8302 151.969 46.2396 151.98"
                    fill="#1BAAA1"
                  />
                  <path
                    d="M56.2195 95.3501L35.1328 95.3821L35.2075 144.587L56.2941 144.554L56.2835 137.526L42.9288 137.546L42.9061 123.135L53.5208 123.119L53.5101 116.091L42.8955 116.106L42.8741 102.399L56.2301 102.379L56.2195 95.3501Z"
                    fill="#1BAAA1"
                  />
                  <path
                    d="M92.344 7.13335V1.87906e-05L85.496 1.99468L0.395996 26.784V87.3907H8.11066V31.6707L85.496 9.12935V144.587H92.344V7.13335Z"
                    fill="#1BAAA1"
                  />
                  <path
                    d="M0.395996 119.828H0.495996L0.534663 144.587L20.9893 144.556L20.9787 137.528L8.256 137.547L8.19066 95.3707H8.11066V94.804H0.395996V119.828Z"
                    fill="#1BAAA1"
                  />
                  <path
                    d="M85.4957 151.719V154.053H85.545L85.5877 181.987L77.5997 152.547L67.8997 152.561L67.9743 201.765L74.933 201.755L74.8797 166.117L84.5623 201.741L92.5063 201.729L92.4317 152.524H92.3437V151.719H85.4957Z"
                    fill="#1BAAA1"
                  />
                </svg>
              </div>
              <div key="content" {...content}>
                {content.children}
              </div>
              <Button type="ghost" key="button" {...button}>
                {button.children}
              </Button>
            </QueueAnim>
          </div>
        </Element>
      );
    });
    return (
      <div {...props} {...dataSource.wrapper} id="inicio">
        <TweenOneGroup
          key="bannerGroup"
          enter={{ opacity: 0, type: "from" }}
          leave={{ opacity: 0 }}
          component=""
        >
          <BannerAnim key="BannerAnim" {...dataSource.BannerAnim}>
            {childrenToRender}
          </BannerAnim>
        </TweenOneGroup>
        <TweenOne
          animation={{
            y: "-=20",
            yoyo: true,
            repeat: -1,
            duration: 1000,
          }}
          className="banner2-icon"
          style={{ bottom: 40 }}
          key="icon"
        >
          <DownCircleOutlined />
        </TweenOne>
      </div>
    );
  }
}

export default Banner;
