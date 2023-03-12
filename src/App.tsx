import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom'
import {PostsPage} from "./pages/PostsPage";
import {PostPage} from "./pages/PostPage";
import {Navigation} from "./components/Navigation";

function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<PostsPage/>}/>
                <Route path="/post/:id" element={<PostPage/>}/>
            </Routes>
        </>
    );
}

export default App;
