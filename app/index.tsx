import { Text, View, Image, Button, TouchableOpacity, TextInput, ScrollView } from "react-native";

export default function Index() {
  return (
    // <ScrollView>

    //   <View className="flex-1 justify-center items-center">

    //     <Image className="w-96 h-96"
    //     source={{uri: "https://embratur.com.br/wp-content/uploads/2022/07/Embratur-Brasil-ultrapassa-marca-de-1-milhao-de-turistas-estrangeiros-recebidos-pela-primeira-vez-desde-2020-1.png"}}
    //     />

    //     <Image className="w-96 h-96"
    //     source={require("../assets/images/onca.jpg")}
    //     />

    //     <Text className="text-5xl text-dark-200 font-bold">Bem vindo</Text>

    //     <Button title="Teste"/>

    //     <TouchableOpacity className="bg-slate-600 p-5 rounded-xl hover:bg-slate-400">
    //       <Text>Clique</Text>
    //     </TouchableOpacity>

    //     <TextInput placeholder="Digite aqui" className=" border-2 border-solid border-red-600"/>

    //   </View>

    // </ScrollView>
    <View className="flex-1 justify-center items-center">
      {/* <Image className="w-80 h-80 rounded-full"
        source={{uri: "https://dimensaosete.com.br/static/c245f6e9ae59ce20442165df9aedf1a3/8a681/luffy-gear-5.webp"}}/> */}

      <Image
        source={require('../assets/images/gojo.jpg')}
        style={{ width: 320, height: 320, borderRadius: 9999 }}
      />

      <View className="gap-2 items-center">
        <Text className="text-3xl font-bold">Kin Okano</Text>
        <Text className="text-xl">Idade: 23 anos</Text>
        <Text className="text-xl">Localização: Campo Grande, MS</Text>
        <TouchableOpacity className="bg-blue-500 p-2 rounded-2xl hover:bg-blue-950">
          <Text className="text-xl color-white">Editar Perfil</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
