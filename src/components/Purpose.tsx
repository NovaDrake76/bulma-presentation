import React from 'react';

const Purpose: React.FC = () => {
    return (
        <div className="content container">
            <h2 className="title is-2 has-text-primary">Para que serve o Bulma?</h2>
            <p className="has-text-white is-size-4 has-text-justified">
                Bulma serve como uma poderosa ferramenta para acelerar o desenvolvimento web.
                Fornecendo uma ampla gama de estilos e componentes prontos para usar, Bulma facilita
                a criação de páginas web atraentes e responsivas sem a necessidade de estilos ou scripts adicionais.
            </p>
            <p className="has-text-white is-size-4 has-text-justified">
                Bulma é especialmente útil quando se trata de responsividade. Permite que os sites se adaptem
                de forma eficaz a diferentes tamanhos de tela, tornando-os acessíveis em uma variedade de dispositivos.
            </p>
            <h3 className="title is-3 has-text-primary">Exemplo:</h3>
            <button className="button is-primary">Botão primário</button>
            <button className="button is-link">Botão de link</button>
            <p className='has-text-white'>Estes são exemplos de botões Bulma, que já vêm com estilos pré-definidos. Além disso, Bulma oferece muitas outras classes para personalizar ainda mais esses botões.</p>
            <h3 className="title is-3 has-text-primary">Responsividade:</h3>
            <div className="columns is-mobile">
                <div className="column">
                    <div className="notification is-primary">Coluna 1</div>
                </div>
                <div className="column">
                    <div className="notification is-link">Coluna 2</div>
                </div>
            </div>
            <p className='has-text-white'>Estas colunas irão empilhar verticalmente quando a tela for muito pequena, graças à classe `is-mobile`.</p>
        </div>
    );
};

export default Purpose;
