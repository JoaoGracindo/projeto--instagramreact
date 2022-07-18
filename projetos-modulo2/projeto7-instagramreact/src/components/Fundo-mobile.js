

import Icon from "./icones";

const icones = ["home","search-outline","add-circle-outline","heart-outline","person-outline"]

function FundoMobile(){
    return (
      <div class="fundo-mobile">
        {icones.map(icone => <Icon name={icone} />)}
        {/* <Icon name="home" />
        <Icon name="search-outline" />
        <Icon name="add-circle-outline" />
        <Icon name="heart-outline" />
        <Icon name="person-outline" /> */}
      </div>
    )
}

export default FundoMobile;