import Icon from "./icones"
const users = ["9gag",
               "meowed",
               "barked",
               "nathanwpylestrangeplanet",
               "wawawicomics",
               "respondeai",
               "filomoderna",
               "memeriagourmet",
                ];




function Story (props){
    const src = ('assets/img/' + props.user +'.svg')
    return(
      <div class="story">
        <div class="imagem">
          <img src={src} />
        </div>
        <div class="usuario">
          {props.user}
        </div>
      </div>
    )
}

export default function Stories (){
    return(
      <div class="stories">
        
        {users.map((u) => <Story user={u} />)}

        <div class="setinha">
          <Icon name="chevron-forward-circle" />
        </div>
      </div>
    )
}