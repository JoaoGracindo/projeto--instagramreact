const icons = ['paper-plane-outline',
               'compass-outline',
               'heart-outline',
               'person-outline',
               "logo-instagram",
               'home',
               'search-outline',
               'add-circle-outline',
               "ellipsis-horizontal",
               "chatbubble-outline",
               "bookmark-outline",
               ];


export default function Icon (props){
    return(
        <ion-icon name={props.name}></ion-icon>
    )
}

