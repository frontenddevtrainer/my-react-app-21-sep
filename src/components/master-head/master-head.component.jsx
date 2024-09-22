import React from "react";

const MasterHead = () => {
  const componentId = "message";
  const bgColor = "orange";
  const text = "This is the content to show on Master Head";

  function createMessage(){
    return "This is the content to show on Master Head time is: " + new Date().toISOString();
  }

  return (
    <>
      <section id={componentId} style={{ backgroundColor: bgColor }}>
        {createMessage()}
      </section>
      <div>Application Name</div>
    </>
  );
};

export default MasterHead;
