import React from 'react';

import './footer.css'

import { useTranslation } from 'react-i18next';

export default function Footer() {
  const [t,i18n]=useTranslation();
  return (
    <>
      <footer className='fixed-bttom text-center pt-3  pb-2 text-white-50'>
        <h6>{t('Copyright © 2023 All rights reserved 🧡')} </h6>
        <h6> {t('Source Ahmed-Khaled')}</h6>
      </footer>
    </>
   
  );
}


