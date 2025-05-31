import { Text, View, Image, Button, TouchableOpacity, TextInput, ScrollView } from "react-native";
import {useState} from "react";

export default function Index() {
    const [contTarefas, setContTarefas] = useState(0);
    const [tarefa, setTarefa] = useState("");
    const [lista, setLista] = useState([]);
  
    function addTarefa() {
      if (tarefa.trim() === "") return; 
      setLista([...lista, tarefa]);      
      setContTarefas(contTarefas + 1);    
      setTarefa("");                      
    }
  
    return (
      <View className="flex-1 items-center bg-black">
        <Text className="text-4xl text-white m-3">Lista de tarefas</Text>
        
        <TextInput
          className="bg-white rounded-xl p-3 m-3 w-3/4"
          placeholder="Digite aqui"
          value={tarefa}
          onChangeText={setTarefa}
        />
  
        <TouchableOpacity
          className="bg-blue-600 rounded-xl p-2 m-2 w-3/4 "
          onPress={addTarefa}
        >
          <Text className="text-xl text-white text-center">Adicionar tarefa</Text>
        </TouchableOpacity>
  
        <Text className="text-2xl text-white">
          Total de tarefas: {contTarefas}
        </Text>
  
        {lista.map((item) => (
          <Text  className="text-xl text-white">
            • {item}
          </Text>
        ))}
      </View>
    );
  }