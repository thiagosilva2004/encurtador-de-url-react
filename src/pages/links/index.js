import './links.css';

import { useEffect, useState} from 'react';

import {FiArrowLeft, FiLink, FiTrash} from 'react-icons/fi';
import {Link} from 'react-router-dom';

import {getLinkSalvos, deletarLink} from '../../services/storeLink';
import ModalLink from '../../componets/modalLink';

export default function Links(){
    const [myLinks, setMyLinks] = useState([]);

    const [data, setData] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const [emptyList, setEmptyList] = useState(false);

    useEffect( () => {
      async function getLink(){
        const result = await getLinkSalvos('@encurtarLink');
        
        if(result.length === 0){
          // lista vazia
          setEmptyList(true);
        }

        setMyLinks(result);
      }

      getLink();

    }, [] );

    function handleOpenLink(link){
      setData(link);
      setShowModal(true);
    }

    async function handleDelete(id){
      const resultado = await deletarLink(myLinks, id);

      if(resultado.length === 0){
        setEmptyList(true);
      }

      setMyLinks(resultado);

    }

    return(
      <div className='links-container'>
        <div className='links-header'>
          <Link to="/">
            <FiArrowLeft size={38} color='#fff' />  
          </Link>
          <h1>Meus Links</h1>
        </div>

        { emptyList && (
            <div className='links-item'>
              <h2 className='empty-text'>Sua Lista está vazia</h2>
            </div>
        )}

        { myLinks.map( link => (
          <div key={link.id} className='links-item'>
            <button className='link' onClick={ () => handleOpenLink(link)}>
              <FiLink size={18} color='#fff' />
                {link.long_url}
            </button>
        
            <button className='link-delete' onClick={() => handleDelete(link.id)}>
              <FiTrash size={24} color='#ff5454' />
            </button>
        
          </div>
        )) }

        { showModal && (
          <ModalLink
            closeModal={() => setShowModal(false) }
            content={data}
          />
        )}

      </div>
    )
  }