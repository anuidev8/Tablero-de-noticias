import React from 'react';

import MainLayout from '../layout/MainLayout'


//Components

import TopNavigationBar from '../components/TopNavigationBar/TopNavigationBar'
import ImageProfile from '../components/Profile/ProfileImage'
import Notification from '../components/Notification'
import CatgorySilder from '../components/Categorys/CategorySlider'
import SectionPost from '../components/Home/SectionPost'


const Home = () => {
  return (
    <MainLayout>
      <TopNavigationBar>
        <ImageProfile path="https://cdn.pixabay.com/photo/2017/05/12/11/29/girl-2306829__340.jpg" />
        <Notification />
      </TopNavigationBar>

      <div className="main-container">
        <div className="wrapper-container">
          <div className="slider-wrapper">
            <CatgorySilder />
          </div>
          <SectionPost />

        </div>
      </div>

    </MainLayout>
  )

}

export default Home
