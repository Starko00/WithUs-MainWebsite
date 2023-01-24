import BlogPageStyle from './BlogPageStyle.module.css'
import {useEffect, useState} from 'react'
import axios from 'axios'
import { BlogComponentShort } from '../../components/BlogComponents.js/BlogComponentShort'
export const BlogPage = ()=>{
    const [blogsData,setBlogsData] = useState([])

    useEffect(()=>{
        axios.get("http://www.with-us.me/api/withus/v1/blog").then(res=>{
            console.log(res.data.blogs)
            if(res.status === 200){
                setBlogsData(res.data.blogs)
            } else {
                setBlogsData('null')
            }
        })
    },[])
    return<div>
        {blogsData=='null'? "No blogs at the moment":blogsData.map(blog =>{
            return <BlogComponentShort blogData = {blog}/>
        })}
    </div>
}