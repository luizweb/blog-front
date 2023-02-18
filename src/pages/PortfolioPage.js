import stateofdata1 from "../assets/stateofdata1.png"
import stateofdata2 from "../assets/stateofdata2.png"

function PortfolioPage() {
    return ( 
        
        <div className="container mt-5">
            <div className="row">

                
                <div className="col-lg-12">
                    <h2 className="mb-3">Portfolio</h2>

                    <div className="mb-2">
                    <p>texto sobre o portfolio</p>
                    </div>

                    <div className="row border-botom py-2 rounded shadow-sm mb-3">
                        <div className="col-lg-4">

                            <div id="carouselExample" className="carousel slide">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                    <img src={stateofdata1} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                    <img src={stateofdata2} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                    <img src="https://via.placeholder.com/300x200" className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>

                        </div>
                        
                        
                        <div className="col-lg-8">
                            <h5>State of Data</h5>
                            <p>descrição do projeto</p>
                            <p>
                                <a href="https://www.kaggle.com/code/luizweb/um-caminho-para-os-melhores-sal-rios-vers-o-com-ml">Link</a>
                            </p>
                        </div>
                    </div>

                    <div className="row border-botom py-2 rounded shadow-sm mb-3">
                        
                        <div className="col-lg-4">                            
                            <div id="carouselExample" className="carousel slide">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                    <img src="https://via.placeholder.com/300x200" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                    <img src="https://via.placeholder.com/300x200" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                    <img src="https://via.placeholder.com/300x200" className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>

                        </div>                       
                        <div className="col-lg-8">
                            <h5>Calculadora de Faixa Salarial</h5>
                            <p>descrição do projeto</p>
                            <p>
                                <a href="https://luizweb-stateofdata2021-app-4mkdsm.streamlit.app/">Link</a>
                            </p>
                        </div>
                        
                    </div>

                    <div className="row border-botom py-2 rounded shadow-sm mb-3">
                        <div className="col-lg-4">

                            <div id="carouselExample" className="carousel slide">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                    <img src="https://via.placeholder.com/300x200" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                    <img src="https://via.placeholder.com/300x200" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                    <img src="https://via.placeholder.com/300x200" className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>

                        </div>
                        
                        
                        <div className="col-lg-8">
                            <h5>This Blog</h5>
                            <p>descrição do projeto</p>
                        </div>
                    </div>


                    <div className="row border-botom py-2 rounded shadow-sm mb-3">
                        <div className="col-lg-4">

                            <div id="carouselExample" className="carousel slide">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                    <img src="https://via.placeholder.com/300x200" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                    <img src="https://via.placeholder.com/300x200" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                    <img src="https://via.placeholder.com/300x200" className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>

                        </div>
                        
                        
                        <div className="col-lg-8">
                            <h5>Connect 4 - Game</h5>
                            <p>descrição do projeto</p>
                        </div>
                    </div>



                </div>
            </div>
        </div>

     );
}

export default PortfolioPage;