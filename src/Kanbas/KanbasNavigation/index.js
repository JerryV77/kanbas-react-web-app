import { Link, useLocation } from 'react-router-dom';
import { IconContext } from 'react-icons';
import {FaQuestionCircle, FaTachometerAlt,
        FaBook, FaCalendarAlt,
        FaInbox, FaRegClock,
        FaYoutubeSquare, FaSignOutAlt} from 'react-icons/fa';
import { PiUserCircleFill } from 'react-icons/pi';

import './index.css';

function KanbasNavigation() {
  const textAndLogo = [['Dashboard', <FaTachometerAlt />],
                      ['Courses', <FaBook />],
                      ['Calendar', <FaCalendarAlt />],
                      ['Inbox', <FaInbox />],
                      ['History', <FaRegClock />],
                      ['Studio', <FaYoutubeSquare />],
                      ['Commons', <FaSignOutAlt />],
                      ['Help', <FaQuestionCircle />]];
  const { pathname } = useLocation();
  const accountActive = pathname.includes('Account');
  const accountInactiveLogo = { size: 30, color: 'white', };
  const accountActiveLogo = { size: 30, color: 'grey', };
  const redLogo = { size: 20, color: 'crimson', };
  return (
    <ul className='wd-kb-nav-ul'>
            <li className='wd-kb-nav-li'>
                <div>
                    <img className='wd-kb-nav-logo' src='/nu-logo.png' alt='nu logo' />
                </div>
            </li>
            <li className={`wd-kb-nav-li ${accountActive ? 'wd-kb-nav-li-active' : ''}`}>
                <Link to='Account'>
                    <div>
                        <IconContext.Provider value={accountActive ? accountActiveLogo : accountInactiveLogo}>
                            <PiUserCircleFill />
                        </IconContext.Provider>
                    </div>
                    <div>
                        Account
                    </div>
                </Link>
            </li>
            {textAndLogo.map((item, index) =>
            (<li className={`wd-kb-nav-li ${pathname.includes(item[0]) ? 'wd-kb-nav-li-active' : ''}`} key={index}>
                <Link to={item[0] === 'Courses' ? '#' : item[0]}>
                    <div>
                        <IconContext.Provider value={redLogo}>
                            {item[1]}
                        </IconContext.Provider>
                    </div>
                    <div>
                        {item[0]}
                    </div>
                </Link>
            </li>)
            )}
      </ul >
  );
}

export default KanbasNavigation;