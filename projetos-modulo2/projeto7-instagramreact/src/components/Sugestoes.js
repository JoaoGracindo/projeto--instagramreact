import Icon from "./icones";

const usuariosSugeridos = [
    {name:'bad.vibes.memes',
    razao:'Segue você'
    },

    {name:'chibirdart',
    razao:'Segue você'
    },

    {name:'razoesparaacreditar',
    razao:'Novo no Instagram'
    },

    {name:'adorable_animals',
    razao:'Segue você'
    },

    {name:'smallcutecats',
    razao:'Segue você'
    }
]

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
        
        {usuariosSugeridos.map(obj => <Sugestao user={obj.name} razao={obj.razao} />)}

      </div>
    )
}