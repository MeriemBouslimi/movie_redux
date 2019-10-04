import {ADD_MOVIE} from "../actions/action-type"
import {carte} from "../data"



// const carte= [{ figure:"https://vvww.guitare-luthier.fr/uploads/images/a7aaac9857e29db2fb47a9ad360aaf56a30b883b.jpg", title: "The.Queens.Corgi", rating: 3 },
// { figure: "https://vvww.guitare-luthier.fr/uploads/images/f4cb52363ae41a41cd81197140ae4345c79c2795.jpg", title: "Godzilla.King.of.the.Monsters", rating: 4 },
// { figure: "https://vvww.guitare-luthier.fr/uploads/images/23639aeff99dc90170c5cbe024730bdd_20190306161531.jpg", title: "La course des tuques",rating: 4 },
// { figure: "https://vvww.guitare-luthier.fr/uploads/images/6fc6b3bd7a44953dbe20859089347096d04a5baf.jpg", title: "Annabelle.Comes.Home", rating: 2 },
// { figure: "https://vvww.guitare-luthier.fr/uploads/images/94eb9f4e944f23b20a438082c692a544f9eb9e76.jpg", title: "Stars.80", rating: 3 },
// { figure: "https://vvww.guitare-luthier.fr/uploads/images/fed608fbc8412ae29ca879fa817c9e0243553737.jpg", title: "A.Better.Tomorrow", rating: 5 },
// { figure: "https://vvww.guitare-luthier.fr/uploads/images/14104323f97862b190fdf8e626ff8aa1f5d697a2.jpg", title: "The.Secret.Life.of.Pets 2", rating: 5 },
// { figure: "https://vvww.guitare-luthier.fr/uploads/images/09806946cbda3a082ff4fc734ba1684e_01.jpg", title: "The.After.Party.", rating: 3 },
// ]


function movieReducer(state = carte, action) {
    if (action.type === ADD_MOVIE) {
       return state.concat(action.payload)
 
      }
    return state;
  };

  export default movieReducer