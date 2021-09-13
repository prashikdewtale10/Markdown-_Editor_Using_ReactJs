// import logo from './logo.svg';
import './App.css';
import Markdown from './components/Markdown';

function App() {
  return (
    <div style={{width:'100%' , background:'white' , textAlign:'center'}} >
            <div style={{display:'flex' , justifyContent:'center',alignItems:'center'}} >
            <img src="https://commonmark.org/help/images/favicon.png" alt="" /> <h1 style={{margin:'10px'}}> Markdown Convertor</h1>
            <a href="https://commonmark.org/help/" style={{float:'right',marginLeft:'100px' ,textDecoration:'none',color:'black'}} target='_blank'>Learn About MarkDown</a>
            </div>
     <div className="App-header">
      <Markdown />
    </div>
    </div>

  );
}

export default App;
