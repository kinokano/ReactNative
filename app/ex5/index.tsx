import { Text, View, Image, Button, TouchableOpacity, TextInput, ScrollView } from "react-native";
import {useState, useEffect} from "react";

export default function Index() {
    
    const [nomePokemon, setNomePokemon] = useState("");
    const [dadosPokemon, setDadosPokemon] = useState();

    async function BuscarPokemon(){
        if (nomePokemon != ""){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`);
        const data = await response.json();
        if (data){
            setDadosPokemon(data);
            }
        }
    }

    useEffect(() => {
        BuscarPokemon();
    }, [nomePokemon]);

    

    return (
      <View className="flex-1 items-center bg-black">
        
        <TextInput
        className="text-white"
        placeholder="Digite o nome do pokemon..."
        onChangeText={setNomePokemon}/>

        <TouchableOpacity
        className="bg-blue-600 rounded-xl p-2 m-2 w-3/4 "
        onPress={BuscarPokemon}
        >
          <Text className="text-xl text-white text-center">Buscar pokemon</Text>
        </TouchableOpacity>

        <View>



      </View>
    );
  }