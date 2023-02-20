import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    code: "MAR",
    name: "Morocco",
    continent: "Africa",
    surfaceArea: 446550,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg",
    indepYear: 1956,
    population: 36910558,
    cities: [
      {
        name: "Casablanca",
        district: "Casablanca-Settat",
        population: 3359818,
        capital: false
      },
      {
        name: "Rabat",
        district: "Rabat-Salé-Kénitra",
        population: 577827,
        capital: true
      },
      {
        name: "Marrakesh",
        district: "Marrakesh-Safi",
        population: 928850,
        capital: false
      }
    ]
  },
  {
    code: "DZA",
    name: "Algeria",
    continent: "Africa",
    surfaceArea: 2381741,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg",
    indepYear: 1962,
    population: 43851043,
    cities: [
      {
        name: "Algiers",
        district: "Algiers Province",
        population: 2881603,
        capital: true
      },
      {
        name: "Oran",
        district: "Oran Province",
        population: 1008734,
        capital: false
      },
      {
        name: "Constantine",
        district: "Constantine Province",
        population: 448374,
        capital: false
      }
    ]
  },
  {
    code: "TUN",
    name: "Tunisia",
    continent: "Africa",
    surfaceArea: 163610,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg",
    indepYear: 1956,
    population: 11818619,
    cities: [
      {
        name: "Tunis",
        district: "Tunis Governorate",
        population: 638845,
        capital: true
      },
      {
        name: "Sfax",
        district: "Sfax Governorate",
        population: 321828,
        capital: false
      },
      {
        name: "Sousse",
        district: "Sousse Governorate",
        population: 221530,
        capital: false
      }
    ]
  },
  {
    code: "FR",
    name: "France",
    continent: "Europe",
    surfaceArea: 643801,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png",
    indepYear: 1945,
    population: 66710000,
    cities: [
      {
        name: "Paris",
        district: "Île-de-France",
        population: 2140526,
        capital: true
      },
      {
        name: "Marseille",
        district: "Provence-Alpes-Côte d'Azur",
        population: 861635,
        capital: false
      },
      {
        name: "Lyon",
        district: "Auvergne-Rhône-Alpes",
        population: 518635,
        capital: false
      }
    ]
  },
];

  

const paysSlice = createSlice({
    name : 'pays',
    initialState : initialState,
    reducers: {
        ajoutePay(state,action){
            state.push(action.payload)
        },
        moddifierPopulation(state,action){
          state.forEach((pay)=>{
            if (pay.name  === action.payload.name){
              pay.population = action.payload.population
            }
          })
        },
        Filter(state,action){
            state
        }
    }
})


export const { ajoutePay, moddifierPopulation } = paysSlice.actions
export default paysSlice.reducer