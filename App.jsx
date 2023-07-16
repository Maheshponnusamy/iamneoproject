import logo from './logo.svg';

function App() {
  return (
    <>
    <div className='sidebar'>
    <div className='sidebar-column'>
    <i style={{color:"white"}} class="fa-solid fa-earth-europe"></i>
    <i style={{color:"white"}} class="fa-solid fa-passport"></i>
    <i style={{color:"white"}} class="fa-solid fa-briefcase"></i>
    <i style={{color:"white"}} class="fa-solid fa-user-group"></i>
    </div> 
    </div>
    <div className="App">
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center",marginBottom:"5px"}}>
     <div>
      <span className='avatarb'> <i class="fa-solid fa-user"></i></span>
     <span style={{paddingLeft:"10px"}}>iamneo.ai Talent Center</span>
     </div>
       <div className='top-right-sec'>
       <input type="text" placeholder='search'/>
        <button className='publish-btn'> <i style={{color:"white"}} class="fa-solid fa-earth-europe"></i> +Add New</button>
        <i class="fa-solid fa-gift"></i>
        <i class="fa-regular fa-circle-question"></i>
        <div className='avatar'>
          S
        </div>
       </div>
      </div>
      <div style={{textAlign:"right" ,backgroundColor:"#f4f4f4"}}>
        <select name="" id="" placeholder='Add Canditate'>
          <option>Add Candidate</option>
        </select>
        <button className='publish-btn'> <i style={{color:"white"}} class="fa-solid fa-earth-europe"></i> Published</button>
      </div>
     <div style={{marginLeft:"20px"}}>
     <div className='lil-box-wrap'>
        <LittleBox text="open - 11" />
        <LittleBox text="open - 11" />
        <LittleBox text="open - 11" />
        <LittleBox text="open - 11" />
      </div>
      <div className='big-box-wrap'>
      <BigBox />
      <BigBox />
      <BigBox />
      <BigBox />
      <BigBox />
      <BigBox />
      <BigBox />
      <BigBox />
      <BigBox />
      <BigBox />
      <BigBox />
      </div>
    </div>
     </div>
    </>
  );
}

function LittleBox({text}) {
  return(
    <div className='little-box'>
      <span></span>
      <i>{text}</i>
      </div>
  )
}

function BigBox() {
  return(
    <div className='big-box'>
    <div>
      <div style={{color:"blueviolet"}}>Gowtham Shanmugam</div>
      <div>Embarckle</div>
    </div>   
   <div style={{textAlign:"right"}}>REQ: #1062</div>
   <div className='big-box-bottom'>
    <span><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></span>
    <i class="fa-solid fa-ellipsis-vertical"></i>
   </div>
  </div>
  )
}
export default App;
