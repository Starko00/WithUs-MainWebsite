import axios from "axios"
import BlogComponentLongStyle from './BlogComponentLongStyle.module.css'
import { useState, useEffect } from "react"
import {useLocation} from 'react-router-dom';
export const BlogComponentLong = ()=>{
    const {state} = useLocation()
    const style = BlogComponentLongStyle
    console.log(state)
    return <div className={style.container}>
        <div className={style.imgHolder}><img src={'http://www.with-us.me/static/blogImgs/'+state?.img} /></div>
        <h1>{state?.tittle}</h1>
        <div className={style.innrContainer}>
        <div className={style.listHolder}>
            <ul>
                <li>Blog 1</li>
                <li>Blog 2</li>
                <li>Blog 3</li>
            </ul>
        </div>
        <div  dangerouslySetInnerHTML={{__html:state?.text}}>
        </div>
        </div>
        
    </div>
}