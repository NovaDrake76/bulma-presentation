import React from 'react';

const WhatIsBulma: React.FC = () => {
    return (
        <div className="content container">
            <h2 className="title is-2 has-text-primary">O que é Bulma?</h2>
            <p className="has-text-white is-size-4 has-text-justified">
                Bulma é um framework CSS moderno, gratuito e open-source baseado no Flexbox.
                Sendo totalmente responsivo, modular e flexível, ele permite que os desenvolvedores
                construam rapidamente interfaces de usuário elegantes e funcionais.
            </p>
            <p className="has-text-white is-size-4 has-text-justified">
                Bulma é baseado em Flexbox, uma poderosa ferramenta CSS que permite a criação de layouts
                responsivos sem a necessidade de flutuar elementos ou manipular a exibição de propriedades inline.
            </p>
            <h3 className="title is-3 has-text-primary">Exemplo com Flexbox:</h3>
            <div className="columns is-multiline">
                <div className="column">
                    <div className="box">Coluna 1</div>
                </div>
                <div className="column">
                    <div className="box">Coluna 2</div>
                </div>
                <div className="column is-half">
                    <div className="box">Coluna 3 - Ocupa metade do espaço disponível</div>
                </div>
            </div>
            <p className='has-text-white'>Estamos usando o sistema de flex do Bulma para criar colunas flexíveis com espaçamento igual e responsivas. Note que o uso de classes como `is-half` permite uma flexibilidade ainda maior.</p>
        </div>
    );
};

export default WhatIsBulma;
