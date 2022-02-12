// buscar link salvos
export async function getLinkSalvos(key) {
    const myLinks = await localStorage.getItem(key);

    let linkSalvos = JSON.parse(myLinks) || [];

    return linkSalvos;
}

// salvar link 
export async function salvarLink(key, newLink){
    let linkStore = await getLinkSalvos(key);

    // verifica se esse link já foi salvo
    const hasLink = linkStore.some( link => link.id === newLink.id )

    if(hasLink){
        console.log("Esse link já existe");
        return;
    }

    // adicionar o link na lista
    linkStore.push(newLink);
    await localStorage.setItem(key, JSON.stringify(linkStore));

}

// deletar link
export function deletarLink(links, id){
    let myLinks = links.filter(item => {
        return(item.id !== id)
    });

    localStorage.setItem('@encurtarLink', JSON.stringify(myLinks));
    console.log("Link deletado com sucesso");

    return myLinks;
}