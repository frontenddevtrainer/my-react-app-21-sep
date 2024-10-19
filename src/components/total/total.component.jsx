import { useEffect } from "react";

export default function TotalComponent({ values, name }) {
  
    useEffect(() => {
    console.log("running useEffect");
  }, [values, name]);

  useEffect(() => {
    console.log("running useEffect");
  }, [name]);



  return <p>{values.join("|")}</p>;
}
