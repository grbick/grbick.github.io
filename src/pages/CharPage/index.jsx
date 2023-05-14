import React, { useEffect, useState } from "react";
import "./charPage.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CharacterWrapper from "../../components/CharacterWrapper";
import { useParams } from "react-router-dom";

const CharPage = () => {
  const [character, setCharacter] = useState(null);
  const [responseFail, setResponseFail] = useState(false)
  const { id } = useParams();
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/${id}`; 
    setLoading(true);
    const fetchData = async () => {
      const response = await fetch(url);
      if (response.status < 400) {
        setLoading(false);
        const data = await response.json();
        setCharacter(data)
      } else {
        setLoading(false);
        setResponseFail(true);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="charPage">
      <Header />
      <CharacterWrapper selectedCharacter={character} loading={loading} responseFail = {responseFail}/>
      <Footer />
    </div>
  );
};

export default CharPage;
