import React,{useState} from 'react'
import ReactMarkdown from 'react-markdown';
import '../App.css';

export default function Markdown() {
    const [markdown , setMarkdown] = useState('### this is Markdown Converter App')
    return (
        <div className="center_area">
       
            <textarea 
            className="left" 
            placeholder="write your markdown here .." 
            value={markdown}
            onChange={(e)=>setMarkdown(e.target.value)}
            >
            </textarea>
      
            <div className="right"> 
            <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>

        </div>
    )
}
