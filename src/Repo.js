import React from 'react'
import useStyles from './styles';
import List from "./components/List";
import withListLoading from "./components/withListLoading";
import { useEffect, useState } from "react";
import Navbar from './components/Navbar';

function Repo() {
    const classes = useStyles();
    const ListLoading = withListLoading(List);
    const [appState, setAppState] = useState({
        loading: false,
        repos: null,
    });

    useEffect(() => {
        setAppState({ loading: true });
        const apiUrl = `https://api.github.com/users/shroukksobhy/repos`;
        fetch(apiUrl)
            .then((res) => res.json())
            .then((repos) => {
                setAppState({ loading: false, repos: repos });
            });
    }, [setAppState]);

    return (
        <div>
            <Navbar />

            <div className={classes.container}>
                <h1 className="title">My Repositories</h1>
                <div className="repo-container">
                    <ListLoading isLoading={appState.loading} repos={appState.repos} />
                </div>
            </div>
        </div>
    )
}
export default Repo;
