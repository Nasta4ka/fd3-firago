import { useState, useEffect } from "react";
import axios from "axios";

export default function NoMatch() {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/search/photos?query=error&per_page=20&client_id=Pf1mebDZRa8U9Am9FSD5uznrYTV_fJIPHdJn1I94ri4"
      )
      .then((res) => {
        console.log(res);
        setImageUrl(res.data.results[6].urls.small);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Страница не найдена</h1>
      <img src={imageUrl} width={320} alt="картинка" />
    </>
  );
}
