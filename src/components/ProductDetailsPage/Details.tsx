import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

interface DetailsProps {
  productMD: string;
}

const Details = ({ productMD }: DetailsProps) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(productMD)
      .then((res) => res.text())
      .then((text) => {
        setContent(text);
      });
  }, []);

  return (
    <div className="text-danger py-3">
      <ReactMarkdown children={content} />
    </div>
  );
};

export default Details;
