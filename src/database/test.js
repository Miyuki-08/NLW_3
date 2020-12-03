const Database = require('./db');
const saveOrphanage = require('./saveorphanage')

//async cor diferente
Database.then(async db =>{
    //inserir dados na tabela 
    // await saveOrphanage(db, {
    //     lat: "-23.5559288",
    //     lng: "-46.64143",
    //     name: "Abrigo LGBTQ+",
    //     about: "Presta assistencia para pessoas LGBTs desabrigadas devido suas escolhas",
    //     whatsapp: "",
    //     images:[
    //         "https://static1.purebreak.com.br/articles/7/94/59/7/@/367960-lgbtqia-descubra-o-significado-do-diapo-2.jpg",

    //         "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9xN84gGGn0QKEsJ6V_02XifI5cWcvi3DnFg&usqp=CAU"
    //     ].toString(),
    //     instructions: "Presta assistencia para pessoas LGBTs desabrigadas devido suas escolhas",
    //     opening_hours: "Horário de visita das 13:00 às 18:00",
    //     open_on_weekends: "0"
    // })

    //consultar dados da tabela
    // const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    // console.log(selectedOrphanages)

    // //consultar somente id
    // //const orphanageId = await db.all("SELECT * FROM orphanages WHERE id = '3'")
    // //console.log(orphanageId)

    // //DELETE FROM orphanages == deleta tudo
    // console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))

})