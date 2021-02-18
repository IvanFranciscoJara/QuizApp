import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import * as jwt from 'jsonwebtoken'
import "../GlobalFiles/Global.sass";
import Home from "../Pages/Home";
import Question from "../Pages/Question";
import End from "../Pages/End";

// import { ToogleNavbarAction, ToogleNavbarUsuAction } from '../Redux/GlobalStateDuck'
// import store from '../Redux/store'

// const Autenticado = (PERMISO?: any) => {
//   const token = localStorage.getItem('token')
//   const publicKey = localStorage.getItem('PUBLIC_KEY')
//   try {
//     const CONTENIDO_TOKEN: any = jwt.verify(token, publicKey, { algorithms: ['RS256'] })
//     localStorage.setItem('DATOS', JSON.stringify(CONTENIDO_TOKEN))

//     const Ahora: any = new Date()
//     const FechaExpiracion: any = new Date(CONTENIDO_TOKEN.exp * 1000)
//     const MinutosRestantes: any = Math.floor((FechaExpiracion - Ahora) / 100 / 60) / 10
//     // console.log('MinutosRestantesdeSesión', MinutosRestantes)
//     // console.log(PERMISO)
//     if (typeof PERMISO === 'undefined') {
//       return 'ok'
//     }
//     if (CONTENIDO_TOKEN.PERMISOS.findIndex((PERM: any) => PERM.toString() === PERMISO.toString()) !== -1) {
//       return 'no permiso'
//     }

//     localStorage.clear()
//     return 'error'
//   } catch (error) {
//     console.log(error)
//     localStorage.clear()
//     return 'error'
//   }
// }

// const LoginRoute: React.FC<any> = (a) => (
//   <Route
//     exact
//     path={a.path}
//     render={(props) => {
//       return Autenticado() !== 'error' ? <Redirect to={{ pathname: '/Tablero' }} /> : <a.component {...props} />
//     }}
//   />
// )

// const PrivateRoute: React.FC<any> = (a) => {
//   const permiso = Autenticado(a.permiso)
//   // console.log(a.permiso, permiso)
//   return (
//     <Route
//       exact
//       path={a.path}
//       render={(props) => {
//         switch (permiso) {
//           case 'ok':
//             return <a.component {...props} />
//           case 'no permiso':
//             return <Redirect to={{ pathname: '/Notificaciones' }} />
//           case 'error':
//             return <Redirect to={{ pathname: '/' }} />
//           default:
//             break
//         }
//       }}
//     />
//   )
// }

export const ReactRouter: React.FC<any> = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Question/:index" component={Question} />
      <Route exact path="/End" component={End} />
    </Switch>
  </BrowserRouter>
);
