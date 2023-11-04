import React, { useEffect, useState } from 'react';
import  axios from 'axios';

import './Home.css'
import { getValue } from '@testing-library/user-event/dist/utils';
import Imge from '../image/News Site.jpg';
import Images from '../image/photo_2023-09-13_04-54-55.png.png'
import  {Link}  from 'react-router-dom';
import Loadingscreen from '../Loading screen/Loadingscreen';
import { useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';


export default function Home() {

  
  const [t,i18n]=useTranslation();
  const reduxCountry = useSelector((state)=>state.country);
  const lang = useSelector((state)=>state.lang)
  const [loding ,setLoding] =useState( true );
  const [country, setCountry] = useState();
  const [category, setCategory] = useState("general");
  const [apikey, setApikey] = useState("3da4c7b85cea8057589f084446ab66aa");
  const [dataNews, setDataNews] = useState([]);
  const urlApi = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=${lang}&country=${reduxCountry}&max=50&apikey=${apikey}`;
  
  // ==============================================================================

  // get All data api by Axios ( country & category & apikey )




  useEffect(() => {
    fetch(urlApi)
    .then((res) => {
      return res.json()
    }).then((data) => {
      setDataNews(data.articles);
      setCountry(reduxCountry);
      setLoding(false);
    })
    
  }, [lang,reduxCountry])
  
 
// ===============================================================================================

  return (
    <>
      <div className='container w-80'>
        {loding==true? <Loadingscreen/>: ' '}
        
        <div className="row">

          <div className="row row-cols-1 row-cols-md-4 g-3 mb-3">
            <div className="col">
              <div className="card">
                <img src={Images} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h2 className="card-title text-center">A-Kh-News</h2>
                </div>
              </div>
            </div>

            {dataNews.map((news,i)=>
                <div key={i} className="col">
                    <div className="card">
                      <div className='card-img'>
                        {news.image?<img src={news.image} className="card-img-top w-100 " alt={news.title}/>: <img src={Images} alt={news.title} className='rounded-top-3' /> }
                      </div>
                      <div className="card-body">
                        {news.title!=='[Removed]'?<h6 className="card-title">{news.title}</h6>:<h2 className="card-title text-center">A-Kh-News</h2>}
                        {news.description!=='[Removed]'?<p className="card-text mb-5">{news.description}</p> : <p className="card-text">A new news website has been created</p>}
                      </div>
                      <Link to={`/details/${i}/${category}/${country}/`}  className='card-more position-absolute to'>
                        <h6 className='p-2' dir={`${lang=="en"?'ltr':'rtl'}`}>{t('More...')} <span><i className="fa-solid fa-arrow-right-long"></i></span></h6>
                      </Link>
                    </div>                  
                </div> )}
                
          </div>
        </div>
      </div>
    </>
  );
}
