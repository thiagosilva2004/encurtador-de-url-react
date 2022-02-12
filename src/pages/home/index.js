import {useState} from 'react';
import {FiLink} from 'react-icons/fi';
import './home.css';

import Menu from '../../componets/menu';
import ModalLink from '../../componets/modalLink';

import api from '../../services/api';

import {salvarLink} from '../../services/storeLink';

export default function Home(){
    const [link, setLink] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState({});

    async function encurtarLink(){
      try{
        const response = await api.post('/shorten', {
          long_url: link
        });

        setData(response.data);
        setShowModal(true);
        salvarLink('@encurtarLink', response.data);
        setLink('');

      }catch{
        alert("Algo deu errado");
        setLink('');
      }
      // setShowModal(true);
    }

    return(
      <div className="container-home">

        <div className="logo">
          <img src="/logo.png" alt="sujeito link logo"/>
          <h1>SujeitoLink</h1>
          <span>Cole seu link para encurtar</span>
        </div>

        <div className="area-input">
          <div>
            <FiLink size={24} color="#fff" />  
            <input 
              placeholder='Cole seu link aqui...'
              value={link}
              onChange={ (e) => setLink(e.target.value) }
            />
          </div>

          <button onClick={encurtarLink}>Encurtar Link</button>
        </div>

        <Menu/>

        { showModal && (
          <ModalLink
            closeModal={ () => setShowModal(false) }
            content={data}
          />
        )}

      </div>

      
    )
  }