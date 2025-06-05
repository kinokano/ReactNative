import { Text, View, Image, Button, TouchableOpacity, TextInput, ScrollView, ActivityIndicator } from "react-native";
import {useState, useEffect} from "react";

export default function Index() {
    
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchProdutos = async () => {
        try {
          const response = await fetch('https://fakestoreapi.com/products');
          const data = await response.json();
          setProdutos(data);
          setLoading(false);
          
        } catch (error) {
          console.error('Erro ao buscar produtos:', error);
          setLoading(false);
        }
      }

      fetchProdutos();
    }, []);
    
    console.log(produtos)

    if(loading){
      return(
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }
    return (
      <View className="flex-1 items-center bg-black">
        
      <Text className="text-4xl text-white m-3">🏬 Loja virtual</Text>

      <ScrollView className="flex-1" >
      {produtos.map((produto) => (

          <View className="bg-white rounded-xl p-3 m-3 text-left">
            <View className="flex-1 justify-center items-center">
              <Image className="w-52 h-52 m-5"
              source={{uri:produto.image}}
              resizeMode="contain"
              
              />
            </View>
    
            <View >

              <Text  className="text-lg text-black font-bold text-left">
                {produto.title}
              </Text>
              <Text className="text-sm text-gray-600 text-left">
                {produto.category}
              </Text>
              
              <Text className="text-lg text-green-600 text-left">R$ {produto.price}</Text>

            </View>

          </View>
        ))}
      </ScrollView>


      </View>
    );
  }