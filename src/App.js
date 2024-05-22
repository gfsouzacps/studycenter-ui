import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import NovoIcone from './assets/NovoIcone.jpeg';

import Materias from './components/Materias/Materias';  // Caminho correto para importar o componente

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h3>Cadastro de Matérias</h3>
                {/*<img src={NovoIcone} alt='Icone' />*/}
                <Materias />
            </header>
        </div>
    );
}

export default App;
