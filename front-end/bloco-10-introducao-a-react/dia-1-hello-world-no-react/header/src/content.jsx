import React from "react";

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
];

class Content extends React.Component {
    render() {
        return (
            <div>
                {conteudos.map((elem) => (
                    <div key='elem.conteudo'>
                        <h4 className='conteudo'>{`O conteudo é: ${elem.conteudo}`}</h4>
                        <p className ='status'>{`status: ${elem.status}`}</p>
                        <p className='bloco'>{ `bloco: ${elem.bloco}`}</p>
                    </div>
                ))}
            </div>
            
        )
    }
}

export default Content;
