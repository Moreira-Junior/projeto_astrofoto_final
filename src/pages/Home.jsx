import React, {useState, useEffect} from 'react';
import Card from '/src/components/Card'
import api from '/src/js/api'


export default function Home() 
{
const [data, setData] = useState([]);

const readData = async () => {
  const data = await api.sendApiRequest()
  setData(data);
}

useEffect(() => {
readData()
}, []);


// const objeto = [

//   {
//     url: 'https://apod.nasa.gov/apod/image/0909/UVAndromeda_swiftH600.jpg',
//     title: 'teste',
//     explanation: 'explicacao',
//     copyright: 'autor1'
//   },
//   {
//     url: 'https://apod.nasa.gov/apod/image/0909/iss020e038481_482anapublic_c.jpg',
//     title: 'teste2',
//     explanation: 'explicacao2',
//     copyright: 'autor2'
//   }
// ]


  return (
    <div className="all">
    <header className='img-fundo' >
        <h1 className="text-center display-1 justify-content-center">
        AstroFoto do Dia
        </h1>
        
    </header>
    <p className='text-center mt-5'>Essa API fornecida pela NASA é utilizada para obtenção das fotos astronômicas do dia, com funcionamento a partir de 16-06-1995. Basta inserir as datas nos formulários abaixo.</p>
     <div className="container text-center box-form">
      <div className="">
        <div className="row align-self-center d-flex justify-content-center">
          <div className="col-auto">
            <label htmlFor="dia" className="col-form-label">Data inicial</label>
          </div>
          <div className="col-auto">
            <input type="text" id="dia" className="form-control" placeholder="17/09/2009">
            
            </input>
          </div>
        
          <div className="col-auto">
            <label htmlFor="dia2" className="col-form-label">Data final</label>
          </div>
          <div className="col-auto">
            <input type="text" id="dia2" className="form-control" placeholder="20/09/2009">
            
            </input>
          </div>
          <div className="col-auto">
            <button id="search" type="submit" className="btn btn-outline-danger">
                <img id ="buscar-icon" src="/src/telescopio.png" alt="icon-submit" className="icone" onClick={readData}>
                </img>
           </button>
          </div>
        </div>
      </div>
    </div>
     {data.map((d) => (
      <Card url={d.url} title={d.title} explanation={d.explanation} copyright={d.copyright} key={d.title} key={d.title} />
    ))}

    </div>
    
    
  );
}
