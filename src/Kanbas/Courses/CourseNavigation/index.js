import { Link, useParams, useLocation } from 'react-router-dom';
import './index.css';

function CourseNavigation() {
  const links = ['Home', 'Modules', 'Piazza', 'Zoom Meetings', 'Assignments', 'Quizzes',
                 'Grades', 'People', 'Panopto Video', 'Discussions', 'Announcements', 'Pages',
                 'Files', 'Rubrics', 'Outcomes', 'Collaborations', 'Syllabus', 'Settings',];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <ul className='wd-ac-nav-ul' >
            {links.map((link, index) => (
                <li key={index} className={`wd-ac-nav-li ${decodeURI(pathname).includes(link) && 'wd-ac-nav-li-active'}`}>
                    <Link
                        key={index}
                        to={`/Kanbas/Courses/${courseId}/${link}`}
                    >
                        {link}
                    </Link>
                </li>
            ))}
    </ul>
  );
}


export default CourseNavigation;