import { Text, View, Image, Button, TouchableOpacity, TextInput, ScrollView } from "react-native";

export default function Index() {
  return (
    <ScrollView>

      <View className="bg-blue-600 w-full">
            <Text className="text-2xl text-white ml-2 p-2">Detalhes do Produto</Text>
      </View>

        <View className="flex-1 justify-center items-center m-4">
            <Image
            source={require('../../assets/images/camisa.png')}
            style={{ width: 320, height: 320, borderRadius: 9999 }}
            />
        </View>
    
        <View>
            <Text className="text-3xl text-black ml-2 p-2 font-bold">Produto Excepcional </Text>
            <Text className="text-lg text-black ml-2 p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum culpa reiciendis suscipit officia illo nulla quaerat, fugit, excepturi quo ex earum recusandae obcaecati fuga! Voluptatem obcaecati ex repellendus rerum qui!</Text>
            <Text className="text-3xl text-green-400 ml-2 p-2 font-bold">R$99,99</Text>
        </View>

        <View className="">
            <TouchableOpacity className="bg-blue-600 rounded-3xl p-1 m-1">
                <Text className="text-2xl text-white ml-2 p-2 text-center">Comprar agora</Text>
            </TouchableOpacity>
        </View>


    </ScrollView>
   
  );
}
