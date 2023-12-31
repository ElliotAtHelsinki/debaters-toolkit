import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Select from 'react-select'
// import MessengerCustomerChat from 'react-messenger-customer-chat'
import {
  Placeholder,
  SingleValue,
  Option,
} from '../../core/components/SelectComponents'
import { topicStyle, languageStyle } from './styles'
import { customTheme, languages, topics } from '../../core/constants'
import motionsFromDatabase from '../../core/constants/motionsFromDatabase.json' // import separately to avoid netlify error
import { usePageTracker } from '../../core/hooks'
import './style.css'

export const MotionGenerator = () => {
  const [topic, setTopic] = useState('')
  const [language, setLanguage] = useState('')
  const [keyword, setKeyword] = useState('')
  const [currentMotion, setCurrentMotion] = useState(undefined)
  const [loading, setLoading] = useState(false)
  const [configJustChanged, setConfigJustChanged] = useState(true)
  const [onStartUp, setOnStartUp] = useState(true)
  const [validMotions, setValidMotions] = useState(motionsFromDatabase)
  function changeTopic(val) {
    setConfigJustChanged(true)
    if (val == null) {
      setTopic('')
    } else {
      setTopic(val.value)
    }
  }
  function changeLanguage(val) {
    setConfigJustChanged(true)
    if (val == null) {
      setLanguage('')
    } else {
      setLanguage(val.value)
    }
  }
  function changeKeyword(e) {
    setConfigJustChanged(true)
    setKeyword(e.target.value)
  }
  const loadMotions = async () => {
    if (onStartUp) {
      setOnStartUp(false)
    }
    if (configJustChanged) {
      let currentValidMotions = []
      motionsFromDatabase.forEach((motion) => {
        currentValidMotions.push(motion)
      })
      if (language != '') {
        currentValidMotions = currentValidMotions.filter((motion) => {
          return motion.language == language
        })
      } else {
        currentValidMotions = currentValidMotions.filter((motion) => {
          return motion.language == 'English'
        })
      }
      if (topic != '') {
        currentValidMotions = currentValidMotions.filter((motion) => {
          return Object.keys(motion.topic).includes(topic)
        })
      }
      if (keyword != '') {
        currentValidMotions = currentValidMotions.filter((motion) => {
          return (
            motion.content.toUpperCase().includes(keyword.toUpperCase()) ||
            motion.infoSlide.toUpperCase().includes(keyword.toUpperCase())
          )
        })
      }
      setValidMotions(currentValidMotions)
      setConfigJustChanged(false)
    } else {
      setCurrentMotion(
        validMotions[Math.floor(Math.random() * validMotions.length)]
      )
    }
  }
  useEffect(() => {
    if (!onStartUp) {
      setCurrentMotion(
        validMotions[Math.floor(Math.random() * validMotions.length)]
      )
    }
  }, [validMotions])
  usePageTracker()
  return (
    <div className='motionGenerator'>
      <Helmet>
        <title>Motion Generator</title>
        <meta name='description' content='Generate a random debate motion.' />
        <link
          rel='canonical'
          href='https://elliotathelsinki.github.io/debaters-toolkit/generator'
        />
      </Helmet>
      {/* <MessengerCustomerChat
        pageId={process.env.REACT_APP_FB_PAGE_ID}
        appId={process.env.REACT_APP_FB_APP_ID}
      /> */}
      <div className='options'>
        <Select
          className='option'
          theme={customTheme}
          placeholder='Topic'
          isSearchable={false}
          options={topics}
          onChange={changeTopic}
          isClearable={true}
          components={{ Placeholder, SingleValue, Option }}
          styles={topicStyle}
        />
        <Select
          className='option'
          theme={customTheme}
          placeholder='Language'
          isSearchable={false}
          options={languages}
          onChange={changeLanguage}
          isClearable={false}
          components={{ Placeholder, SingleValue, Option }}
          styles={languageStyle}
          defaultValue={{ value: 'English', label: 'English' }}
        />
        <input
          type='text'
          placeholder='Keyword'
          className='option'
          id='keywordBox'
          spellCheck={false}
          value={keyword}
          onChange={changeKeyword}
        />
      </div>
      <button
        className='generateButton'
        onClick={() => {
          loadMotions()
        }}
        disabled={currentMotion == {} ? true : false}
      >
        <div>New motion</div>
      </button>
      <div
        className='loadingRandomMotionMessage'
        style={
          loading
            ? {
                display: 'flex',
                margin: '1rem',
                width: '100%',
                justifyContent: 'center',
              }
            : { display: 'none' }
        }
      >
        Loading
      </div>
      <div className='displayRandomMotion'>
        {currentMotion ? (
          currentMotion.infoSlide ? (
            <div className='currentMotion hasInfoslide'>
              <div className='motionInfo'>
                Infoslide: {currentMotion.infoSlide}
              </div>
              <div className='motionInfo'>{currentMotion.content}</div>
            </div>
          ) : (
            <div className='currentMotion noInfoslide'>
              <div className='motionInfo'>{currentMotion.content}</div>
            </div>
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}
