import React from "react";

const Freelancer = () => {
  return (
    <div className="text-slate-300">
      <div className="flex flex-wrap">
        <a href="https://www.freelancer.com/u/Nolan332933">
          <img
            src="https://cdn6.f-cdn.com/ppic/249545628/logo/78227726/profile_logo_78227726.jpg"
            style={{
              float: "left",
              marginRight: 20,
              marginBottom: 10,
              width: 100,
              maxHeight: 100,
              borderRadius: 5,
            }}
          />
        </a>
        <div style={{ minHeight: 40 }}>
          <a
            style={{ textDecoration: "underline", fontWeight: "bold" }}
            href="https://www.freelancer.com/affiliates/email/78227726/"
          >
            Kaung Myat Kywal
          </a>
          <p
            style={{
              margin: 0,
              marginBottom: 6,
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            React, Node
          </p>
          <p style={{ margin: 0 }}>
            <strong>P:</strong> +66966498913
          </p>
          <p style={{ margin: 0 }}>
            <strong>E:</strong> nolanshelby81@gmail.com
          </p>
          <p style={{ margin: 0 }}>
            <strong>A:</strong>
            Wattanavit Place, SukSawat(40), Bangkok 10110
          </p>
        </div>
      </div>
      <img
        src="https://www.freelancer.com/static/css/images/landingpage/hireme-widget-builder/fl-bird-icon.png"
        style={{ clear: "left", float: "left", margin: "10px 0" }}
      />
      <a
        href="https://www.freelancer.com/affiliates/email/78227726/"
        style={{
          display: "block",
          textDecoration: "underline",
          margin: "10px 0 10px 10px",
          verticalAlign: "middle",
          height: 21,
          float: "left",
        }}
      >
        Hire me on Freelancer.com
      </a>
      <img
        src="//t.flnwdgt.com/1px.gif?username=minthetpaing376&en=externalHireme&method=img&label=hiremeEmailImpression&ip=184.22.100.222&type=emailSignature"
        alt=""
        style={{ float: "left" }}
      />
    </div>
  );
};

export default Freelancer;
