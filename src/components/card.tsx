interface Icard {
    id:number,
    paragrafo:string,
    details:string
}

export const Card = ({id , paragrafo,details}:Icard,) =>{
  
    return(
        <div>
            <h1>Card{id}</h1>
            <p>{paragrafo}</p>
            <p>{details}</p>
        </div>
    )
}
