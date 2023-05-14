import React, { useState, useEffect } from "react";
import "./homePage.scss";
import Header from "../../components/Header";
import CardWrapper from "../../components/CardWrapper";
import Footer from "../../components/Footer";
import Pagination from "../../components/Pagination";
import WelcomeModal from "../../components/WelcomeModal";
import { HomeProvider } from "../../context";
import { useSearchParams } from "react-router-dom";

const HomePage = () => {
  const url = "https://rickandmortyapi.com/api/character/";
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [firstTenResults, setFirstTenResults] = useState(true);
  const [pageCount, setPageCount] = useState(1);
  const [responseFail, setResponseFail] = useState(false);
  const [welcome,setWelcome] = useState(JSON.parse(window.sessionStorage.getItem("welcome")))
  const [searchParams, setSearchParams] = useSearchParams({});

  useEffect(() => {
    const existingName = searchParams.get("name");
    const isEven = parseInt(searchParams.get("page")) % 2 === 0;
    const existingPage = isEven
      ? parseInt(searchParams.get("page")) / 2
      : (parseInt(searchParams.get("page")) + 1) / 2;
    const newUrl = existingName
      ? existingPage
        ? url +
          "?" +
          new URLSearchParams({
            name: existingName,
            page: existingPage,
          })
        : url + "?" + new URLSearchParams({ name: existingName })
      : existingPage
      ? url + "?" + new URLSearchParams({ page: existingPage })
      : url;
    setLoading(true);
    const fetchData = async () => {
      const response = await fetch(newUrl);
      if (response.status < 400) {
        setLoading(false);
        setResponseFail(false);
        const data = await response.json();
        setCharacters(data.results);
        setFirstTenResults(isEven ? false : true);
        setPageCount(Math.ceil(data.info.count / 10));
      } else {
        setLoading(false);
        setResponseFail(true);
      }
    };
    fetchData();
  }, [searchParams]);

  useEffect(()=>{
    if (welcome===null){
      window.sessionStorage.setItem("welcome", false)
          setWelcome(true)
    }
  },[welcome])

  return (
    <HomeProvider
      value={{
        characters,
        firstTenResults,
        setFirstTenResults,
        pageCount,
        responseFail,
        loading,
        setSearchParams,
        searchParams,
      }}
    >
      <div className="homePage">
        <Header />
        <CardWrapper />
        <Pagination />
        <Footer />
        {welcome === true &&<WelcomeModal setWelcome={setWelcome}/>}
      </div>
    </HomeProvider>
  );
};

export default HomePage;
