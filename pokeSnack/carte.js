let pokesnackscartes =
    [
        [
            "img/pokeSnack/essai1.jpg",
            "Le repas d'évoli",
            "article",
            "img/pokeSnack/evoli.png",
            "Un repas populaire qui est maintenant plus grand que jamais !",
            "9.99"
        ],
        [
            "img/pokeSnack/essai1.jpg",
            "Le repas de Ronflex",
            "article",
            "img/pokeSnack/ronflex.png",
            " Remplissez votre ventre ! Deviendrez-vous somnolent comme Ronflex ?",
            "12.99"
        ],
        [
            "img/pokeSnack/essai1.jpg",
            "Crêpes aux fruits Pokémon Cafe",
            "article",
            "img/pokeSnack/crepes.png",
            " Dégustez des crêpes originales avec une garniture de fruits abondante.Remplissez votre ventre de bonheur !",
            "15.99"
        ],
        [
            "img/pokeSnack/essai1.jpg",
            "Je vous choisis !",
            "article",
            "img/pokeSnack/pokeball.png",
            "Ce qu'il y a à l'intérieur est un secret jusqu'à ce que vous arriviez ! Quel Pokémon allez-vous recevoir ?",
            "15.99"
        ],
      
    ]
//     Titre carte n°2 : Le repas d'évoli
// description carte n°2:  Un repas populaire qui est maintenant plus grand que jamais !
// Titre carte n°3 : Le repas de Ronflex
// Description carte n°3 : Remplissez votre ventre ! Deviendrez-vous somnolent comme Ronflex ?
// Titre carte n°4: Crêpes aux fruits Pokémon Cafe
// Description n°4: Dégustez des crêpes originales avec une garniture de fruits abondante.
// Remplissez votre ventre de bonheur !
// Titre carte n°5 : Je vous choisis !
// Description carte n°5:  Ce qu'il y a à l'intérieur est un secret jusqu'à ce que vous arriviez ! Quel Pokémon allez-vous recevoir ?

let fabrique = tab => {
    let liste = ""
    
    tab.forEach(ele => {
        liste +=

            `<table id="modele" width="280" height="400" align="center" background="${ele[0]}">
<thead valign=top>
    <tr>
        <th rowspan="2" width=6 ></th> 
        <th colspan="3" height=1>
            <font size="1" height=1>
                <h2 align="left">${ele[1]}</h2>
            </font>
        </th>
        <th rowspan="2" width=6 ></th >
    </tr >
    <tr height="160">
        <th colspan="4" valign=center colspan="2" height=1 >
            <!-- <th valign = center  height="200"> -->
            <a href="${ele[2]}.html">
                <img width="240" height="150" src="${ele[3]}" alt="" >

            </a>
        </th>

    </tr>
</thead>
<tbody>
    <tr>
        <td rowspan="2"></td>
        <td rowspan="2" width=25></td>
        <td rowspan="1" valign = baseline align = center width=150 height=100>
            
                <p align=left ><font size="3"  >${ele[4]} <a href="${ele[2]}.html">[voir plus...]</font></p>
            
        </td>
        
        <td width=6 rowspan = "1"  colspan = "2" align = center >
            <font size="2">
                <h3 >${ele[5]}&euro;</h3>
                
            </font>
            <br>
           
        </td>
    
    </tr >
    <tr>
        <td colspan="2" valign=top align= right>
            <form action="../form/panier.html" method="get">
            <input type="hidden" name="${ele[2]}">
                <input type="submit" value="Achetez">&nbsp;  
            </form>
        </td>
    </tr>
</tbody>
</table >`
    });
    return liste
}
document.querySelectorAll(".lesCartes").forEach(x=> x.insertAdjacentHTML('afterbegin', fabrique(pokesnackscartes)))

