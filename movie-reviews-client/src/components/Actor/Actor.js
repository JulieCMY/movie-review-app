import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API_KEY from "../Data/api";
import './actor.scss';

const Genre = () => {
    const [actor, setActor] = useState([]);
    let { actorId } = useParams();

    const getActorRequest = async () => {
        const url = `https://api.themoviedb.org/3/person/${actorId}?api_key=${API_KEY}`;
        const response = await fetch(url);
        const responsJson = await response.json();
        setActor(responsJson);
    }

    useEffect(() => {
        getActorRequest();
    }, []);

    return (
            <div className="actor-wrapper">
                <div className="actor-profile">
                    <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt="actor"></img>
                </div>
                <div className="actor-info">
                    <p><strong>Birthday: </strong>{actor.birthday} —— {actor.deathday}</p>
                    <p><strong>Place of birth: </strong> {actor.place_of_birth}</p>
                    {actor.homepage && <p><strong>Homepage: </strong><a href={`${actor.homepage}`}>{actor.homepage}</a></p>}
                    <p><strong>Biography:</strong></p>
                    <p className="bio">{actor.biography}</p>
                </div>
            </div>
    );
}

export default Genre;