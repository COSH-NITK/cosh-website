import React from "react"
import { BrowserRouter, Route } from "react-router-dom"

export default (
 <BrowserRouter>
    <Route path='/home' />
    <Route path='/collaborate' />
    <Route path='/blog' />
    <Route path='/blog/:slug' />
    <Route path='/about' />
    <Route path='/contact' />
    <Route path='/how-we-work' />
    <Route path='/domains' />
    <Route path='/project/:id' />
    <Route path='/events' />
    <Route path='/events/:id' />
    <Route exact path="/" />
 </BrowserRouter>
)