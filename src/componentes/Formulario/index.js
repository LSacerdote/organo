import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import Botao from '../Botao'

const Formulario =  () => {
    const times = [
        'Programação',
        'Front-end',
        'Data Science',
        'Devops',
        'Ux e Desing',
        'Inovação e gestão'
    ]
return (

<section className='formulario'>
<form>
    <h2>Preencha os dados para criar o card de colaborador</h2>
    <CampoTexto label="Nome" placeholder="Escreva seu nome"/>
    <CampoTexto label="Cargo" placeholder="Escreva seu Cargo"/>
    <CampoTexto label="Imagem" placeholder="Insira o endereço da imagem"/>
    <ListaSuspensa label="Time" items={times}/>
    <Botao texto="Criar card" />
</form>
</section> 


)
}
export default Formulario