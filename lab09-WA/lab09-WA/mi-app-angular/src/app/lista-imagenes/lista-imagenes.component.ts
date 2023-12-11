import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-imagenes',
  templateUrl: './lista-imagenes.component.html',
  styleUrls: ['./lista-imagenes.component.css']
})
export class ListaImagenesComponent {
  imagenes = [
    {
      titulo: 'Titanic',
      descripcion: 'Revive el épico romance entre Jack y Rose en el viaje inaugural del transatlántico Titanic. A bordo del barco más famoso de la historia, se enfrentarán a un amor imposible que perdura en el tiempo.',
      genero: 'Drama/Romance',
      duracion: '195 minutos',
      url: 'https://m.media-amazon.com/images/I/51gEpO63aRL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      titulo: 'El Exorcista',
      descripcion: 'Cuando una niña es poseída por una fuerza maligna, un sacerdote valiente se enfrenta a lo desconocido para salvarla. Prepárate para una escalofriante batalla entre el bien y el mal en este clásico del terror.',
      genero: 'Terror',
      duracion: '122 minutos',
      url: 'https://i.pinimg.com/1200x/42/59/82/425982ee791c9b7a9f10fa5dada841d9.jpg'
    },
    {
      titulo: 'Avengers: Endgame',
      descripcion: 'Un épico enfrentamiento entre los superhéroes más poderosos del universo y el temible Thanos. Únete a Iron Man, Capitán América, Thor y muchos más en una misión para salvar el universo en esta emocionante aventura de acción.',
      genero: 'Acción/Aventura',
      duracion: '181 minutos',
      url: 'https://m.media-amazon.com/images/I/81ai6zx6eXL._AC_SL1304_.jpg'
    },
    {
      titulo: 'Barbie',
      descripcion: 'Después de ser expulsada de Barbieland por no ser una muñeca de aspecto perfecto, Barbie parte hacia el mundo humano para encontrar la verdadera felicidad.',
      genero: 'Animación/Familiar',
      duracion: '76 minutos',
      url: 'https://www.themoviedb.org/t/p/original/fNtqD4BTFj0Bgo9lyoAtmNFzxHN.jpg'
    },
    {
      titulo: 'Los Juegos del Hambre',
      descripcion: 'En un mundo distópico, Katniss Everdeen se convierte en el símbolo de una revolución en el opresivo Panem. Acompáñala en su valiente lucha por la libertad y la justicia.',
      genero: 'Acción/Aventura',
      duracion: '142 minutos',
      url: 'https://i.pinimg.com/originals/5a/fc/1d/5afc1d5501a5b8aafa09e0b434d73f31.jpg'
    }
  ];
}
