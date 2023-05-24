import React from 'react';

const HowToUse: React.FC = () => {
    return (
        <div className="content container">
            <h2 className="title is-2 has-text-primary">Como usar o Bulma</h2>
            <p className="has-text-white is-size-4 has-text-justified">
                Usar Bulma é bastante simples. Primeiro, você precisa instalar e importar o Bulma em seu projeto.
                Uma vez importado, você pode começar a usar as classes CSS do Bulma para estilizar seus elementos HTML.
            </p>
            <h3 className="title is-3 has-text-primary">Exemplo de instalação:</h3>
            <pre><code>npm install bulma</code></pre>
            <p className='has-text-white'>Esse comando instala o Bulma em seu projeto via npm.</p>
            <h3 className="title is-3 has-text-primary">Exemplo de importação:</h3>
            <pre><code>@import 'bulma/css/bulma.css';</code></pre>
            <p className='has-text-white'>Essa linha importa o CSS do Bulma para o seu arquivo. Lembre-se de adicioná-la ao seu arquivo CSS principal.</p>
        </div>
    );
};

export default HowToUse;
