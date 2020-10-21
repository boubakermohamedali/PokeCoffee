let pokesnackscartes =
    [
        [
            "chemin_back.png",
            "titredfdsqf",
            "article",
            "chemin_illustration",
            "desc",
            "prix"
        ],
        [
            "img.png",
            "Le repas d'évoli",
            "article",
            "illustration",
            "Un repas populaire qui est maintenant plus grand que jamais !",
            "prix"
        ],
        [
            "img.png",
            "Le repas de Ronflex",
            "article",
            "illustration",
            "Remplissez votre ventre ! Deviendrez-vous somnolent comme Ronflex ?",
            "prix"
        ]
    ]


let mugs =
    [
        [
            "../img/carte.jpg",
            "Le BulbiMug",
            "bulbimug",
            "img/bulbiMug.jpg",
            "Un Mug bizarre et original, bulbizar ré-haussera vos thés",
            "14,99"
        ],
        [
            "../img/carte.jpg",
            'Le "NANI" mug',
            "nanimug",
            "img/naniMug.jpg",
            "Rien de mieux pour exprimer votre surprise à un nippon comme Pikachu !",
            "9,99"
        ],
        [
            "../img/carte.jpg",
            "Le PokeBall mug",
            "pokeballmug",
            "img/pokeMug.jpg",
            "Stocker votre boisson chaud... Attraper les Tous !",
            "12,99"
        ],
        [
            "../img/carte.jpg",
            "Le BulbiMug",
            "bulbimug",
            "img/bulbiMug.jpg",
            "Un Mug bizarre et original, bulbizar ré-haussera vos thés",
            "14,99"
        ],
        [
            "../img/carte.jpg",
            'Le "NANI" mug',
            "nanimug",
            "img/naniMug.jpg",
            "Rien de mieux pour exprimer votre surprise à un nippon comme Pikachu !",
            "9,99"
        ],
        [
            "../img/carte.jpg",
            "Le Poke mug",
            "pokemug",
            "img/pokeMug.jpg",
            "Stocker votre boisson chaud... Attraper les Tous !",
            "12,99"
        ]
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

let fabrique = (tab, enLigne = true) => {

    tab.length
    let table = [
        `<table align="center">
        <thead>
    <tbody>
        <tr align="center">`,
        `</tr>
    </tbody>
</table>`
    ],
        tr = ['<tr>', '</tr>'],
        td = ['<td>', '</td>']
    let liste = ""
    liste += enLigne ? table[0] : ""

    tab.forEach((ele, i) => {

        liste += i % 3 === 0 && i !== 0 ?
            tr[1] + tr[0]
            : ""
            liste += enLigne ? td[0] : ""

        liste +=

            `<table id="carte${i}" width="280" height="400" align="center" background="${ele[0]}">
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
            
                <p align=left ><font size="3"  >${ele[4]} <a href="${ele[2]}.html"><br>[voir plus...]</font></p>
            
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
</table>`

        liste += enLigne ? td[1] : ""
    });
    liste += enLigne ? table[1] : ""
    return liste
}

let selecteur
document.querySelectorAll(".lesCartes").forEach(x => x.insertAdjacentHTML('afterbegin', fabrique(mugs)))

