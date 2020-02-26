lettres="AZERTYUIOPQSDFGHJKLMWXCVBN";
array_lettres=lettres.split('');

ligne= $("#clavier").children(".ligne")[0];
$ligne=$(ligne);

for (let i=0; i< array_lettres.length; i++){
    $ligne.append("<div class='touche'>"+array_lettres[i]+"</div>")

    if(array_lettres[i]=="P"|| array_lettres[i]== 'M'){
        $ligne=$($ligne).next();
    }
}
