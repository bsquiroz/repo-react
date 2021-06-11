import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import axios from "axios";
import "./css.css";
import Song from "./components/Song";
import Info from "./components/Info";
import Loader from "./components/Loader";

const Principal = () => {
    const [queryLyrics, setQueryLyrics] = useState({});
    const [lyrics, setLyrics] = useState("");
    const [information, setInformation] = useState({});
    const [loader, setLoader] = useState(false);
    const { artista, cancion } = queryLyrics;

    useEffect(() => {
        queryApiLyrics();
        //eslint-disable-next-line
    }, [queryLyrics]);

    const queryApiLyrics = async () => {
        if (Object.keys(queryLyrics).length === 0) return;
        const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
        const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

        const [lyrics, information] = await Promise.all([
            axios(url),
            axios(url2),
        ]);

        setLyrics(lyrics.data.lyrics);
        setInformation(information.data.artists[0]);

        setLoader(true);
        setTimeout(() => {
            setLoader(false);
        }, 3000);
    };

    return (
        <div className="bodyEjemplo10">
            <Formulario setQueryLyrics={setQueryLyrics} />
            {loader ? (
                <Loader />
            ) : (
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <Info information={information} />
                        </div>
                        <div className="col-md-6">
                            <Song lyrics={lyrics} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Principal;
