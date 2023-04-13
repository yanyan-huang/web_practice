import {Link} from 'react-router-dom';
import {useLocation} from 'react-router';

function CourseNavigator({highlight = 'Home'}) {
  const {pathname} = useLocation();
  console.log(pathname)

  const sections = [
    {label: 'Home', href: 'index.html', to:'home'},
    {label: 'Modules', href: 'modules.html', to:'modules'},
    {label: 'Piazza', href: 'http://piazza.com', to:'piazza'},
    {label: 'Zoom', href: '#', to:'zoom'},
    {label: 'Assignments', href: 'assignments.html', to:'assignments'},
    {label: 'Quizzes', href: 'quizzes.html', to:'quizzes'},
    {label: 'Grades', href: 'grades.html', to:'grades'},
    {label: 'People', href: '#', to:'people'},
    {label: 'Announcements', href: '#', to:'announcements'},
    {label: 'Pages', href: '#', to:'pages'},
    {label: 'Discussions', href: '#', to:'discussions'},
    {label: 'Syllabus', href: '#', to:'syllabus'},
  ]

  return (
    
    <div className="list-group">
        {
          sections.map(section => {
            const active = pathname === `/tarp/${section.to}`;
            return (
              <Link className={`list-group-item ${active ? 'active' : ''}`}
              to={`/tarp/${section.to}`}>
              {section.label}
           </Link>
            )
          }

          )
        }
    </div>
  )
}
export default CourseNavigator