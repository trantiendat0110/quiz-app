import ErrorPage from "../pages/404"
import HomePage from "../pages/Home"
import LoginPage from "../pages/Login"
import QuizApp from '../pages/QuizApp'
const publicRoute = [
  {path: '/', component: HomePage, layout: true},
  {path: '/quiz-app/:id', component: QuizApp, layout: true},
  {path: '/login', component: LoginPage, layout: false},
  {path: '/404', component: ErrorPage, layout: false},
]

export {publicRoute}