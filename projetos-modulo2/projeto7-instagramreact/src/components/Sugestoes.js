import Icon from "./icones";

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

export default function Sugestoes(){
    return(
      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>

        <Sugestao user='bad.vibes.memes' razao='Segue você' />
        <Sugestao user='chibirdart' razao='Segue você' />
        <Sugestao user='razoesparaacreditar' razao='Novo no Instagram' />
        <Sugestao user='adorable_animals' razao='Segue você' />
        <Sugestao user='smallcutecats' razao='Segue você' />

      </div>
    )
}