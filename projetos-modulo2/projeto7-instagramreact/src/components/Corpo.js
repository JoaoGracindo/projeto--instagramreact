import Icon from "./icones";
import Stories from "./Stories";
import Posts from "./Posts";
import Sugestoes from "./Sugestoes";

function Sugestao (props){
    const src = ('assets/img/' + props.user +'.svg');
    return(
      <div class="sugestao">
        <div class="usuario">
          <img src={src} />
          <div class="texto">
            <div class="nome">{props.user}</div>
            <div class="razao">{props.razao}</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>
    )
}


function Corpo () {
    return(
      <div class="corpo">
        <div class="esquerda">

          <Stories />

          <Posts />

        </div>

        <div class="sidebar">
          <div class="usuario">
            <img src="assets/img/catanacomics.svg" />
            <div class="texto">
              <strong>catanacomics</strong>
              Catana
            </div>
          </div>

          <Sugestoes />

          {/* <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

            <Sugestao user='bad.vibes.memes' razao='Segue você' />
            <Sugestao user='chibirdart' razao='Segue você' />
            <Sugestao user='razoesparaacreditar' razao='Novo no Instagram' />
            <Sugestao user='adorable_animals' razao='Segue você' />
            <Sugestao user='smallcutecats' razao='Segue você' />

          </div> */}

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
      </div>
        
    )
}

export default Corpo