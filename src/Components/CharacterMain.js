import React, {useState} from 'react'
import CharacterInfo from './CharacterInfo.js';
import CharacterModal from './CharacterModal.js';

const CharacterMain = () => {
  const [model, setModal] = useState(false);
  const [tempdata, setTempdata] = useState([]);

  const getCharacterInfo = (img, title, info, lgimg) => {
    let tempData = [img, title, info, lgimg];
    setTempdata(item => [1, ...tempData]);

    return setModal(true);
  }

 
    return (
      <>
      <h1 className="main-header">Characters</h1>
      <h3 className="main-subheader">Click on the learn more buttons to learn more about your favorite characters.</h3>
        <section className="py-4 py-lg-5 container">
          <div className="row justify-content-center align-item-center">
            {CharacterInfo.getCharacterInfo.map((item, index) => {
              return(
                <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" key={index}>
                  <div className="card p-0 overflow-hidden h-100 shadow">
                    <img src={item.img} className="card-img-top" alt='character'/>
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <button className="btn btn-primary"
                      onClick={() => getCharacterInfo(item.img, item.title, item.info, item.lgimg)}>Learn More</button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
        {
          model === true ?  <CharacterModal img={tempdata[0]} title={tempdata[2]} info={tempdata[3]} lgimg={tempdata[4]} hide={() => setModal(false)} />: ''
        }
       </>
    )
  }
export default CharacterMain;
