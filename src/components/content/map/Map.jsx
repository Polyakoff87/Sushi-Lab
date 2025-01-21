import React from "react";

export default function Map() {
  return (
    <div style={{minHeight: '85vh', width: "66%", padding: "0px 15% 0px 15%", display: "flex", justifyContent: "center"}}>
      <iframe
        title="This is a unique title"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A7b7a4037fde8be1de64d3376d07b261786082e1b233d27910182396c7bb8d687&amp;source=constructor"
        width="90%"
        height="700px"
        frameBorder="0"
      ></iframe>
    </div>
  );
}
