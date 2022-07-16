import Icon from "./icones";
import React from "react";

function Post (props){

    const src = ('assets/img/' + props.user +'.svg');
    const srcCurtida = ('assets/img/' + props.curtidoPor +'.svg');
    return(
      <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src={src} />
            {props.user}
          </div>
          <div class="acoes">
            <Icon name="ellipsis-horizontal" />
          </div>
        </div>

        <div class="conteudo">
          <img src={props.imgPost} />
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <Icon name="heart-outline" />
              <Icon name="chatbubble-outline" />
              <Icon name="paper-plane-outline" />
            </div>
            <div>
              <Icon name="bookmark-outline" />
            </div>
          </div>

          <div class="curtidas">
            <img src={srcCurtida} />
            <div class="texto">
              Curtido por <strong>{props.curtidoPor}</strong> e <strong>outras {props.quantidadeCurtidas} pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    )
}


export default function Posts(){
    return(
      <div class="posts">

        <Post user='meowed' imgPost='assets/img/gato-telefone.svg' curtidoPor='respondeai' quantidadeCurtidas='101.523' />
        <Post user='barked' imgPost='assets/img/dog.svg' curtidoPor='adorable_animals' quantidadeCurtidas='99.159' />

      </div>
    )
}