// Array de URLs das imagens
var images = [
    "https://i.postimg.cc/MGn9GJXw/family.jpg",
    "https://i.postimg.cc/qqyYvVbq/grandpa.jpg",
    "https://i.postimg.cc/wjMnFtMX/father.jpg",
    "https://i.postimg.cc/5ymDKL83/bro.jpg",
    "https://i.postimg.cc/JnL6wtrd/sister.jpg",
    "https://i.postimg.cc/bw5W5zSK/mother.jpg"
 ];
 
 
 // Array de nomes correspondentes às imagens
 var names = ["Álbum de Família", "Rodrigo Silva", "Diego Silva", "Roberto Silva", "Aline Silva", "Sonia Silva"];
 
 
 // Índice para rastrear a posição atual no array
 var i = 0;
 
 
 // Função para atualizar a imagem e o nome exibidos
 function update() {
    // Incrementa o índice
    i++;
 
 
    // Número total de membros da família no array
    var number_of_family_members_in_array = 5;
 
 
    // Se o índice ultrapassar o número total de membros, reinicia para o primeiro
    if (i > number_of_family_members_in_array) {
        i = 0;
    }
 
 
    // Obtém a URL da imagem e o nome atualizados com base no índice
    var updatedImage = images[i];
    var updatedName = names[i];
 
 
    // Atualiza o elemento de imagem no HTML
    document.getElementById("family_member_image").src = updatedImage;
 
 
    // Atualiza o elemento de texto no HTML
    document.getElementById("family_member_name").innerHTML = updatedName;
 }
 