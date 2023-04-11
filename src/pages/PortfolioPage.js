import stateofdata0 from "../assets/stateofdata0.png"
import stateofdata1 from "../assets/stateofdata1.png"
import stateofdata2 from "../assets/stateofdata2.png"

import calculadora0 from "../assets/calculadora0.png"

import blog0 from "../assets/blog0.png"
import blog1 from "../assets/blog1.png"

import connect0 from "../assets/connect0.png"
import connect1 from "../assets/connect1.png"


function PortfolioPage() {
    return ( 
        
        <div className="container mt-5">
            <div className="row">

                
                <div className="col-lg-12">
                    <h2 className="mb-3">Portfolio</h2>

                    <div className="mb-2">
                    <p>Confira a seguir alguns trabalhos realizados!</p>
                    </div>

                    <div className="row border-botom py-2 rounded shadow-sm mb-3">
                        <div className="col-lg-4">

                            <div id="carousel0" className="carousel slide">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={stateofdata0} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={stateofdata1} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={stateofdata2} className="d-block w-100" alt="..." />
                                    </div>
                                    
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carousel0" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carousel0" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>

                        </div>
                        
                        
                        <div className="col-lg-8">
                            <h4 className="mb-3">Challenge State of Data Brazil</h4>
                            <p>
                            State of Data Brazil Challenge 2022 - um desafio realizado pela comunidade <strong>Datahackers</strong> e hospedado na plataforma <strong>Kaggle</strong> que deu prêmios incríveis para as melhores análises dos dados da pesquisa State of Data Brazil, o maior mapeamento do mercado de trabalho de dados do Brasil. A pesquisa foi realizada entre outubro e dezembro de 2021 e contou com mais de 2.600 respondentes espalhados por todo o Brasil. <br></br>
                            Minha análise ficou em <strong>1º lugar</strong>! 

                            </p>
                            <p>
                                <a href="https://www.kaggle.com/code/luizweb/um-caminho-para-os-melhores-sal-rios-vers-o-com-ml" target="_blank" rel="noreferrer"><button type="button" className="btn btn-primary">Visitar!</button></a>
                            </p>
                        </div>
                    </div>

                    <div className="row border-botom py-2 rounded shadow-sm mb-3">
                        
                        <div className="col-lg-4">                            
                            <div id="carousel1" className="carousel slide">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={calculadora0} className="d-block w-100" alt="..." />
                                    </div>
                                    
                                </div>
                                
                            </div>

                        </div>                       
                        <div className="col-lg-8">
                            <h4 className="mb-3">Calculadora de Faixa Salarial</h4>
                            <p>

                            Com base nos dados da pesquisa State of Data (projeto acima), desenvolvi uma ferramenta com <i><strong>Machine Learning</strong></i> para calcular uma estimativa da Faixa Salarial baseada nas informações dos dados demográficos e conhecimentos técnicos na área de dados!

                            </p>
                            <p>
                                <a href="https://luizweb-stateofdata2021-app-4mkdsm.streamlit.app/"  target="_blank" rel="noreferrer"><button type="button" className="btn btn-primary">Visitar!</button></a>
                            </p>
                        </div>
                        
                    </div>

                    <div className="row border-botom py-2 rounded shadow-sm mb-3">
                        <div className="col-lg-4">

                            <div id="carousel2" className="carousel slide">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={blog0} className="d-block w-100" alt="..." />
                                    </div>

                                    <div className="carousel-item">
                                        <img src={blog1} className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carousel2" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carousel2" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>

                        </div>
                        
                        
                        <div className="col-lg-8">
                            <h4 className="mb-3">Blog</h4>
                            <p>Este Blog é um projeto pessoal para, além de compartilahr conhecimentos, adquirir experiêcia no desenvolvimento web. Ele foi projetado utilzando a stack "MERN": <strong>MongoDB</strong> - banco de dados não relacional que é ideal para aplicações web, pois realiza consultas e rotornos utilizando JSON; <strong>Express</strong> - framework utilizado no backend que facilita a criação de API's REST, gerenciando rotas e requisições; <strong>React</strong> - biblioteca JavaScript para construir interfaces de usuário; <strong>Node.js</strong> - plataforma para desenvolvimento de aplicações server-side.</p>
                        </div>
                    </div>


                    <div className="row border-botom py-2 rounded shadow-sm mb-3">
                        <div className="col-lg-4">

                            <div id="carousel3" className="carousel slide">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={connect0} className="d-block w-100" alt="..." />
                                    </div>

                                    <div className="carousel-item">
                                        <img src={connect1} className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carousel3" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carousel3" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>

                        </div>
                        
                        
                        <div className="col-lg-8">
                            <h4 className="mb-3">Connect4 - Jogo</h4>
                            <p>
                            Connect4 é um jogo para 2 jogadores em que os jogadores devem colocar as fichas estrategicamente na base, de forma a formar uma sequência com as 4 fichas da sua cor, ao mesmo tempo em que devem prestar atenção para bloquear as tentativas do oponente fazer o mesmo!<br></br> 
                            Jogo desenvolvido em JavaScript!
                            </p>

                            <p>
                                
                                <a href="https://luizweb.github.io/connect4/"  target="_blank" rel="noreferrer"><button type="button" className="btn btn-primary">Visitar!</button></a>
                            </p>
                        </div>
                    </div>



                </div>
            </div>
        </div>

     );
}

export default PortfolioPage;