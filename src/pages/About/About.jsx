import { Helmet } from 'react-helmet'
// import MessengerCustomerChat from 'react-messenger-customer-chat'
import { useDeviceBreakPoint, usePageTracker } from '../../core/hooks'
import './style.scss'

export const About = () => {
  const { isPhone, isTablet, isExtraSmall } = useDeviceBreakPoint()
  usePageTracker()
  return (
    <div className='about'>
      <Helmet>
        <title>About</title>
        <meta name='description' content='About this toolkit.' />
        <link rel='canonical' href='https://elliotathelsinki.github.io/debaters-toolkit/about' />
      </Helmet>
      {/* <MessengerCustomerChat
        pageId={process.env.REACT_APP_FB_PAGE_ID}
        appId={process.env.REACT_APP_FB_APP_ID}
      /> */}
      <div className='topStuffs'>
        <div className='aboutHeader'>About</div>
        <div className='aboutSubHeader'>
          debaters-toolkit is a handy toolkit for all debaters.
        </div>
        <div className='aboutSubHeader'>
          Search over 7000 motions, calculate break chances or use a free online
          timekeeping tool.
        </div>
        {!isExtraSmall ? (
          <div className='aboutSubHeader'>
            Help make debaters-toolkit better by contributing code, ideas and
            features at its{' '}
            <a href='https://github.com/ElliotAtHelsinki/debaters-toolkit'>
              <span>GitHub Repository</span>
            </a>
            .
          </div>
        ) : (
          <></>
        )}
        <div className='aboutSubHeader'>
          Special thanks to the following contributors:
        </div>
        <div className='contributors'>
          <div className='aboutSubHeaderInContributors'>
            -{' '}
            <a
              href='https://www.facebook.com/hoangdieulinh215'
              id='specialATag'
            >
              <span>Ms. Dieu Linh Hoang</span>
            </a>
            for giving me the idea ;)
          </div>
          <div className='aboutSubHeaderInContributors'>
            -{' '}
            <a href='https://www.facebook.com/MojiDebate' id='specialATag'>
              <span>Moji Debate</span>
            </a>{' '}
            for their{' '}
            <a href='https://drive.google.com/drive/folders/1OX39izeTiz8DMFWhrw9v3qpk8fg3_ylV'>
              <span>Motions for Vietnam Debate Community</span>
            </a>
            .
          </div>
          <div className='aboutSubHeaderInContributors'>
            -{' '}
            <a href='https://www.facebook.com/puzzles.ams' id='specialATag'>
              <span>Puzzles Ams</span>
            </a>{' '}
            for their{' '}
            <a href='https://docs.google.com/spreadsheets/d/1e11Rh2G_Bb9mNARLhnA6WjqgDO3Np6QpYnasVqXkGZY/'>
              <span>Motion Database 2020-2021</span>
            </a>
            .
          </div>
        </div>
        <div className='aboutSubHeader'>
          Follow me on social media or support my work by becoming a Patron:
        </div>
        <div className='icons'>
          {/* I no longer use Facebook. */}
          <a href='about:blank'>
            <button>
              <i className='fab fa-facebook-square' />
            </button>
          </a>
          {/* I no longer use Twitter. */}
          <a href='about:blank'>
            <button>
              <i className='fab fa-twitter-square' />
            </button>
          </a>
          <a href='https://github.com/ElliotAtHelsinki'>
            <button>
              <i className='fab fa-github-square' />
            </button>
          </a>
          {/* I no longer use Patreon. */}
          <a href='about:blank'>
            <button>
              <i className='fab fa-patreon' />
            </button>
          </a>
        </div>
      </div>
      <div className='bottomStuffs'>
        <div className='aboutSubHeader'>
          Licensed under
          <a href='https://choosealicense.com/licenses/mit/'>
            <span>MIT license</span>
          </a>
          .
        </div>
        <div className='aboutSubHeader'>© 2021 Quy Anh Nguyen.</div>
      </div>
    </div>
  )
}
