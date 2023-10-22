import { isBrowser } from 'react-device-detect'
import { useStylesPC } from './stylePC'
import { useStylesMobile } from './styleMobile'

export const InformationContainer = () => {
  const classesPC = useStylesPC()
  const classesMobile = useStylesMobile()
  return (
    <div
      className={
        isBrowser
          ? classesPC.informationContainer
          : classesMobile.informationContainer
      }
    >
      <div className='topLane'>
        <button>
          <a href='/about'>ABOUT</a>
        </button>
      </div>
      <div className='midLane'>
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
      <div className='botLane'>
        <div className='introText'>
          <div>
            Debaters' toolkit is an open-source software licensed under the{' '}
            <a href='https://choosealicense.com/licenses/mit/'>
              <span>MIT license</span>
            </a>{' '}
            that aims to be useful to all debaters. Our motions are collected
            from various sources. While we strive to update the database as
            regularly as possible, we cannot warrant absolute correctness for
            all motions. If you have any issue with our content or detect any
            bug in our app, please contact us at{' '}
            <a href='mailto: quyanh.nguyen@helsinki'>
              <span>quyanh.nguyen@helsinki</span>
            </a>
            .
          </div>
          <div>© 2021 Quy Anh Nguyen.</div>
        </div>
      </div>
    </div>
  )
}
