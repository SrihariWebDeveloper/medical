import Acetaminophen from "../images/Acetaminophen.png"
import Ibuprofen from "../images/Ibuprofen.png"
import Dextromethrophan from "../images/Dextromethrophan.png"
import Guaifenesin from "../images/Guaifenesin.png"
import Cough from "../images/cough-serap.png"
import Aspirin from "../images/Aspirin.png"
import Pseudoephedrine from "../images/Pseudoephedrine.png"
import Phenylephrine from "../images/Phenylephrine.png"
import Excedrin from "../images/Excedrin.png"
import Ranitidine from "../images/Ranitidine.png"
import Omperatole from "../images/Omperatole.png"
import Tums from "../images/Tums.png"
import Rolaids from "../images/Rolaids.png"
import Diphenlydramine from "../images/Diphenlydramine.png"
import Loratadime from "../images/Loratadime.png"
import Hydrocortisone from "../images/Hydrocortisone.png"
import Calamine from "../images/Calamine.png"
import Prednisone from "../images/Prednisone.png"
import Ondansetron from "../images/Ondansetron.png"
import Metoclopramide from "../images/Metoclopramide.png"
import Loperamide from "../images/Loperamide.png"
import Albuterol from "../images/Albuterol.png"
import Levelbuterol from "../images/Levelbuterol.png"
import Salmeterol from "../images/Salmeterol.png"
import Formoteral from "../images/Formoteral.png"
import Fluticasone from "../images/Fluticasone.png"
import Budesonide from "../images/Budesonide.png"




const ListIteams = [
  //one
  {
    _id:1,
    name:'Acetaminophen',
    age:['childres','teenages','adults'], 
    category:'Fever', 
    image:Acetaminophen
  },
  {
    _id:2,
    name:'Ibuprofen',
    age:['childres','teenages','adults'],
    category:'Fever', 
    image:Ibuprofen
  }, 
  //two
  {
    _id: 2,
    name: 'Dextromethrophan',
    age:['childres','teenages','adults'],
    category: 'Cough',
    image: Dextromethrophan
  }, 
  {
    _id: 4,
    name: 'Guaifenesin',
    age:['childres','teenages','adults'],
    category: 'Cough',
    image: Guaifenesin
  }, 
  {
    _id: 5,
    name: 'Cough',
    age:['childres','teenages','adults'],
    category: 'Cough',
    image: Cough
  }, 
  {
    _id: 6,
    name: 'Aspirin',
    age:['childres','teenages','adults'],
    category: 'Cough',
    image: Aspirin
  }, 
  //three
  {
    _id: 7,
    name: 'Excedrin',
    age:['childres','teenages','adults'],
    category: 'HeadAche',
    image: Excedrin
  },
  {
    _id: 8,
    name: 'Acetaminophen',
    age:['childres','teenages','adults'],
    category: 'HeadAche',
    image: Acetaminophen
  },
  {
    _id: 9,
    name: 'Ibuprofen',
    age:['childres','teenages','adults'],
    category: 'HeadAche',
    image: Ibuprofen
  },
  //fourth
  {
    _id: 10,
    name: 'Pseudoephedrine',
    age:['childres','teenages','adults'],
    category: 'Cold',
    image: Pseudoephedrine
  }, 
  {
    _id: 11,
    name: 'Phenylephrine',
    age:['childres','teenages','adults'],
    category: 'Cold',
    image: Phenylephrine
  },
  {
    _id: 12,
    name: 'Dextromethrophan',
    age:['childres','teenages','adults'],
    category: 'Cold',
    image: Dextromethrophan
  }, 
  {
    _id: 13,
    name: 'Guaifenesin',
    age:['childres','teenages','adults'],
    category: 'Cold',
    image: Guaifenesin
  }, 
  //five
  {
    _id: 14,
    name: 'Ranitidine',
    age:['childres','teenages','adults'],
    category: 'StomachPain',
    image: Ranitidine
  }, 
  {
    _id: 15,
    name: 'Omperatole',
    age:['childres','teenages','adults'],
    category: 'StomachPain',
    image: Omperatole
  }, 
  {
    _id: 16,
    name: 'Tums',
    age:['childres','teenages','adults'],
    category: 'StomachPain',
    image: Tums
  }, 
  {
    _id:17,
    name:'Rolaids',
    age:['childres','teenages','adults'],
    category:'StomachPain', 
    image:Rolaids
  },
  //six
  {
    _id: 18,
    name: 'Acetaminophen',
    age:['childres','teenages','adults'],
    category: 'BackPain',
    image: Acetaminophen
  },
  {
    _id: 19,
    name: 'Ibuprofen',
    age:['childres','teenages','adults'],
    category: 'BackPain',
    image: Ibuprofen
  },
  //seven
  {
    _id:20,
    name:'Diphenlydramine',
    age:['childres','teenages','adults'],
    category:'BodyAhes', 
    image:Diphenlydramine
  }, 
  {
    _id: 21,
    name: 'Loratadime',
    age:['childres','teenages','adults'],
    category: 'BodyAhes',
    image: Loratadime
  }, 
  {
    _id: 22,
    name: 'Hydrocortisone',
    age:['childres','teenages','adults'],
    category: 'BodyAhes',
    image: Hydrocortisone
  }, 
  {
    _id: 23,
    name: 'Calamine',
    age:['childres','teenages','adults'],
    category: 'BodyAhes',
    image: Calamine
  }, 
  {
    _id: 24,
    name: 'Prednisone',
    age:['childres','teenages','adults'],
    category: 'BodyAhes',
    image: Prednisone
  }, 
  //eight
  {
    _id: 25,
    name: 'Ondansetron',
    age:['childres','teenages','adults'],
    category: 'Vomting',
    image: Ondansetron
  }, 
  {
    _id: 26,
    name: 'Metoclopramide',
    age:['childres','teenages','adults'],
    category: 'Vomting',
    image: Metoclopramide
  }, 
  {
    _id: 27,
    name: 'Loperamide',
    age:['childres','teenages','adults'],
    category: 'Vomting',
    image: Loperamide
  }, 
  //nine
  {
    _id: 28,
    name: 'Acetaminophen',
    age:['childres','teenages','adults'],
    category: 'LegPain',
    image: Acetaminophen
  },
  {
    _id: 29,
    name: 'Ibuprofen',
    age:['childres','teenages','adults'],
    category: 'LegPain',
    image: Ibuprofen
  },
  //ten
  {
    _id: 30,
    name: 'Albuterol',
    age:['','teenages','adults'],
    category: 'Asthama',
    image: Albuterol
  }, 
  {
    _id: 31,
    name: 'Levelbuterol',
    age:['','teenages','adults'],
    category: 'Asthama',
    image: Levelbuterol
  }, 
  {
    _id: 32,
    name: 'Salmeterol',
    age:['','teenages','adults'],
    category: 'Asthama',
    image: Salmeterol
  },
  {
    _id: 33,
    name: 'Formoteral',
    age:['','teenages','adults'],
    category: 'Asthama',
    image: Formoteral
  }, 
  {
    _id: 34,
    name: 'Fluticasone',
    age:['','teenages','adults'],
    category: 'Asthama',
    image: Fluticasone
  }, 
  {
    _id: 35,
    name: 'Budesonide',
    age:['','teenages','adults'],
    category: 'Asthama',
    image: Budesonide
  }
]

export default ListIteams
