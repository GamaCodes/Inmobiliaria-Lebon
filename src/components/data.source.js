export const Banner20DataSource = {
  wrapper: { className: "banner2" },
  BannerAnim: {
    children: [
      {
        name: "elem0",
        BannerElement: { className: "banner-user-elem" },
        page: { className: "home-page banner2-page" },
        textWrapper: { className: "banner2-text-wrapper" },
        bg: { className: "bg bg0" },
        title: { className: "banner2-title", children: "Ant Motion" },
        content: {
          className: "banner2-content banner2-lebon",
          children: "INMOBILIARIA",
        },
        button: {
          className: "banner2-button",
          children: "Conócenos",
          href: "#nosotros",
        },
      },
    ],
  },
};
export const Content30DataSource = {
  wrapper: { className: "home-page-wrapper content3-wrapper" },
  page: { className: "home-page content3" },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <span>
            <p>¿Qué ofrecemos?</p>
          </span>
        ),
        className: "title-section",
      },
    ],
  },
  block: {
    className: "content3-block-wrapper",
    children: [
      {
        name: "block0",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png",
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "企业资源管理" },
          content: {
            className: "content3-content",
            children:
              "云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。",
          },
        },
      },
      {
        name: "block1",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png",
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "云安全" },
          content: {
            className: "content3-content",
            children:
              "按金融企业安全要求打造的完整云上安全体系，全方位保障金融应用及数据安全。",
          },
        },
      },
      {
        name: "block2",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png",
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "云监控" },
          content: {
            className: "content3-content",
            children:
              "分布式云环境集中监控，统一资源及应用状态视图，智能分析及故障定位。",
          },
        },
      },
      {
        name: "block3",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png",
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "移动" },
          content: {
            className: "content3-content",
            children:
              "一站式移动金融APP开发及全面监控；丰富可用组件，动态发布和故障热修复。",
          },
        },
      },
      {
        name: "block4",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png",
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "分布式中间件" },
          content: {
            className: "content3-content",
            children:
              "金融级联机交易处理中间件，大规模分布式计算机，数万笔/秒级并发能力，严格保证交易数据统一性。",
          },
        },
      },
      {
        name: "block5",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png",
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "大数据" },
          content: {
            className: "content3-content",
            children:
              "一站式、全周期大数据协同工作平台，PB级数据处理、毫秒级数据分析工具。",
          },
        },
      },
    ],
  },
};
export const Footer00DataSource = {
  wrapper: { className: "home-page-wrapper footer0-wrapper" },
  OverPack: { className: "home-page footer0", playScale: 0.05 },
  copyright: {
    className: "copyright",
    children: (
      <span>
        ©2021{" "}
        <a href="#inicio" className="link-lebon">
          L E B O N
        </a>{" "}
        Derechos Reservados
      </span>
    ),
  },
};
