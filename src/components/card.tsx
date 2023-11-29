interface Icard {
    id:number,
    paragrafo:string
}

export const Card = ({id , paragrafo}:Icard,) =>{
    console.log(paragrafo)
    return(
        <div>
            <h1>Card{id}</h1>
            <p>{paragrafo}</p>
            <p>detail about</p>
        </div>
    )
}
