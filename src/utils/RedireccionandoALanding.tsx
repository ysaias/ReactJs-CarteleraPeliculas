import { Redirect } from "react-router-dom";

export default function RedireccionarALanding(){
    return < Redirect to={{pathname: '/'}} />
}