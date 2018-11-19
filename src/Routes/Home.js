import React, { Component } from 'react';
import '../App.scss';

// Component Imports
import Header from '../Components/Header/Header'
import Hero from '../Components/Hero/Hero'
import ContentBlock from '../Components/ContentBlock/ContentBlock'
import FeatureBlock from '../Components/FeatureBlock/FeatureBlock'
import Form from '../Components/Form/Form'
import Footer from '../Components/Footer/Footer'

// Image Import
import FocusIllu from '../Assets/Images/focus-illu.svg'
import LoopIllu from '../Assets/Images/loop-illu.svg'

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ContentBlock title='GitHub Issue Management' text=' in a native app, Tabby keeps you organised and productive.' />
        <Hero />
        <ContentBlock title='Declutter' text=' your GitHub issues and gain clarity.' />
        <section id='feature-blocks'>
          <FeatureBlock img={FocusIllu} title='Get Stuff Done' text='An all new do-do based approch to GitHub issue management' />
          <FeatureBlock img={FocusIllu} title='Remain Focused' text='Reduce outside distraction and remain focused on an individual issue' />
          <FeatureBlock img={FocusIllu} title='Clearly Compose' text='Compose thoughtful responses using Tabbys distraction free writing environment' />
          <FeatureBlock img={LoopIllu} title='Your Own Inbox' text='Create your own Inbox based on only the issues that matter to you' />
        </section>
        <ContentBlock title={['Made by ',<a href='http://www.twitter.com/danthms' target='_blank' rel="noopener noreferrer">@danthms</a>]} text=' – Tabby is a not for profit side project' />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default Home;
