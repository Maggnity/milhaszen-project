import "./_home.scss";
import ContactSVG from "../../assets/img/contact.svg";

export default function Home() {
    return (
        <body className="container">
            <div className="sidebar">
                <button title="menu" type="button" className="sidebar__button btn"><span></span></button>
            </div>
            <div className="header">
                <h3 className="header__sub heading-3">planeje sua viagem com</h3>
                <h1 className="header__main heading-1">Milhas Zen</h1>
                <button className="btn header__btn">Buscar passagens</button>
            </div>


            <div className="search">
                <h3 className="search__title heading-3">Busque sua viagem</h3>
                <label
                    className="search__from__label"
                    htmlFor="search-from"
                >
                    Saindo de:
                </label>
                <input
                    id="search-from"
                    type="text"
                    className="search__from__input"
                />
                <input
                    className="search__from__date"
                    title="date-from"
                    type="date"
                />
                <label
                    className="search__to__label"
                    htmlFor="search-to"
                >
                    Para:
                </label>
                <input
                    id="search-to"
                    type="text"
                    className="search__to__input"
                />
                <input
                    title="date-to"
                    type="date"
                    className="search__to__date"
                />

            </div>


            <div className="trips__pictures">Trips</div>
            <div className="trips__content">Trips</div>
            <div className="features">
                <div className="feature__box feature__box--1">
                    <picture className="feature__box__picture">
                        <img src="https://viagemeturismo.abril.com.br/wp-content/uploads/2016/10/londres-big-ben.jpeg?quality=70&strip=info&w=925&w=636" alt="" />
                    </picture >
                    <div className="feature__box__content">
                        <h3 className="feature__box__title heading-3">Inglaterra</h3>
                        <div className="feature__box__location">UK</div>
                        <p className="feature__box__description">description</p>
                        <div className="feature__box__price">$897</div>
                        <button className="feature__box__btn btn">Comprar agora</button>
                    </div>
                </div>
                <div className="feature__box feature__box--2">
                    <picture className="feature__box__picture">
                        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/16/a6/88/con-la-primavera-in-giappone.jpg?w=700&h=-1&s=1" alt="" />
                    </picture >
                    <div className="feature__box__content">
                        <h3 className="feature__box__title heading-3">Japao</h3>
                        <div className="feature__box__location">UK</div>
                        <p className="feature__box__description">description</p>
                        <div className="feature__box__price">$897</div>
                        <button className="feature__box__btn btn">Comprar agora</button>
                    </div>
                </div>
                <div className="feature__box feature__box--3">
                    <picture className="feature__box__picture">
                        <img src="https://viagemeturismo.abril.com.br/wp-content/uploads/2016/10/londres-big-ben.jpeg?quality=70&strip=info&w=925&w=636" alt="" />
                    </picture >
                    <div className="feature__box__content">
                        <h3 className="feature__box__title heading-3">Inglaterra</h3>
                        <div className="feature__box__location">UK</div>
                        <p className="feature__box__description">description</p>
                        <div className="feature__box__price">$897</div>
                        <button className="feature__box__btn btn">Comprar agora</button>
                    </div>
                </div>

            </div>
            <div className="contact">
                <h3 className="contact__title heading-3" >Entre em contato!</h3>

                <form className="contact__form" action="">
                    <picture >
                        <img
                            className="contact__img"
                            //@ts-ignore
                            src={<ContactSVG />} alt="" />
                    </picture>
                    <label
                        className="contact__label"
                        htmlFor="name"
                    >
                        Nome:
                    </label>
                    <input
                        className="contact__input"
                        id="name"
                        type="text"
                    />
                    <label
                        className="contact__label"
                        htmlFor="email"
                    >
                        E-mail:
                    </label>
                    <input
                        className="contact__input"
                        id="email"
                        type="email"
                    />
                    <label
                        className="contact__label"
                        htmlFor="telephone"
                    >
                        Nome:
                    </label>
                    <input
                        className="contact__input"
                        id="telephone"
                        type="tel"
                    />
                    <label
                        className="contact__label"
                        htmlFor="message"
                    >
                        Mensagem:
                    </label>
                    <textarea
                        className="contact__text"
                        name="message"
                        id="message"
                        cols={30}
                        rows={10} />
                    <button className="btn contact__button">Enviar!</button>
                </form>
            </div>
            <footer className="footer">

                <button title="Home" type="button" className="btn footer__btn">
                    <a href="">Home</a>
                </button>
                <button title="Home" type="button" className="btn footer__btn">
                    <a href="">Pesquisar</a>
                </button>
                <button title="Home" type="button" className="btn footer__btn">
                    <a href="">Quem somos</a>
                </button>
                <button title="Home" type="button" className="btn footer__btn">
                    <a href="">Viagens</a>
                </button>
                <button title="Home" type="button" className="btn footer__btn">
                    <a href="">Contato</a>
                </button>
            </footer>
        </body>
    )
}