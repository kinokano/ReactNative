import { Text, View, Image, Button, TouchableOpacity, TextInput, ScrollView } from "react-native";

export default function Index() {
  return (
    
    <View className="bg-gray-200 flex-1">

      <View className="bg-blue-600 w-full">
            <Text className="text-2xl text-white ml-2 p-2">Dashboard</Text>
      </View>

        <View className="flex-row align-center justify-center m-2 gap-1">

            <View className=" bg-white rounded-xl shadow-xl w-1/3 flex-1 align-center justify-center p-4">
                <Text className="text-2xl text-gray-600 font-semibold">Visitas</Text>
                <Text className="text-blue-500 text-3xl font-bold">1,500</Text>
                <Text className="text-gray-500 text-sm">Últimos 7 dias</Text>
            </View> 

            <View className=" bg-white rounded-xl shadow-xl w-1/3 flex-1 align-center justify-center p-4">
                <Text className="text-2xl text-gray-600 font-semibold">Vendas</Text>
                <Text className="text-green-600 text-3xl font-bold">320</Text>
                <Text className="text-gray-500 text-sm">Últimos 7 dias</Text>
            </View> 

            <View className=" bg-white rounded-xl shadow-xl w-1/3 flex-1 align-center justify-center p-4">
                <Text className="text-2xl text-gray-600 font-semibold">Novos Usuários</Text>
                <Text className="text-yellow-600 text-3xl font-bold">120</Text>
                <Text className="text-gray-500 text-sm">Últimos 7 dias</Text>
            </View> 

        </View>

    
        <ScrollView className="flex-1">

        <View className=" bg-white rounded-xl shadow-xl flex-1 align-center justify-center p-4 m-2">

            <Image className="w-96 h-96 rounded-full"
            source={{uri:"https://img.irroba.com.br/fit-in/600x600/filters:fill(transparent):quality(80)/moletoms/catalog/camisetas/001.png"}}
            
            />
    
            <Text className="text-2xl text-gray-500 ml-2 p-2 font-bold">Item 1 </Text>
            <Text className="text-lg text-gray-400 ml-2 p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum culpa reiciendis suscipit officia illo!</Text>
    
            <TouchableOpacity className="bg-blue-600 rounded-3xl p-1 m-1">
                <Text className="text-xl text-white p-1 text-center">Ver mais</Text>
            </TouchableOpacity>
            
        </View>

        <View className=" bg-white rounded-xl shadow-xl flex-1 align-center justify-center p-4 m-2">

            <Image className="w-96 h-96 rounded-full"
            source={{uri:"https://img.irroba.com.br/fit-in/600x600/filters:fill(transparent):quality(80)/moletoms/catalog/camisetas/001.png"}}
            
            />
    
            <Text className="text-2xl text-gray-500 ml-2 p-2 font-bold">Item 1 </Text>
            <Text className="text-lg text-gray-400 ml-2 p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum culpa reiciendis suscipit officia illo!</Text>
    
            <TouchableOpacity className="bg-blue-600 rounded-3xl p-1 m-1">
                <Text className="text-xl text-white p-1 text-center">Ver mais</Text>
            </TouchableOpacity>
            
        </View>

        <View className=" bg-white rounded-xl shadow-xl flex-1 align-center justify-center p-4 m-2">

            <Image className="w-96 h-96 rounded-full"
            source={{uri:"https://img.irroba.com.br/fit-in/600x600/filters:fill(transparent):quality(80)/moletoms/catalog/camisetas/001.png"}}
            
            />
    
            <Text className="text-2xl text-gray-500 ml-2 p-2 font-bold">Item 1 </Text>
            <Text className="text-lg text-gray-400 ml-2 p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum culpa reiciendis suscipit officia illo!</Text>
    
            <TouchableOpacity className="bg-blue-600 rounded-3xl p-1 m-1">
                <Text className="text-xl text-white p-1 text-center">Ver mais</Text>
            </TouchableOpacity>
            
        </View>

        <View className=" bg-white rounded-xl shadow-xl flex-1 align-center justify-center p-4 m-2">

            <Image className="w-96 h-96 rounded-full"
            source={{uri:"https://img.irroba.com.br/fit-in/600x600/filters:fill(transparent):quality(80)/moletoms/catalog/camisetas/001.png"}}
            
            />
    
            <Text className="text-2xl text-gray-500 ml-2 p-2 font-bold">Item 1 </Text>
            <Text className="text-lg text-gray-400 ml-2 p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum culpa reiciendis suscipit officia illo!</Text>
    
            <TouchableOpacity className="bg-blue-600 rounded-3xl p-1 m-1">
                <Text className="text-xl text-white p-1 text-center">Ver mais</Text>
            </TouchableOpacity>
            
        </View>

        <View className=" bg-white rounded-xl shadow-xl flex-1 align-center justify-center p-4 m-2">

            <Image className="w-96 h-96 rounded-full"
            source={{uri:"https://img.irroba.com.br/fit-in/600x600/filters:fill(transparent):quality(80)/moletoms/catalog/camisetas/001.png"}}
            
            />
    
            <Text className="text-2xl text-gray-500 ml-2 p-2 font-bold">Item 1 </Text>
            <Text className="text-lg text-gray-400 ml-2 p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum culpa reiciendis suscipit officia illo!</Text>
    
            <TouchableOpacity className="bg-blue-600 rounded-3xl p-1 m-1">
                <Text className="text-xl text-white p-1 text-center">Ver mais</Text>
            </TouchableOpacity>
            
        </View>

        
    </ScrollView>
    </View>
    
  );
}
