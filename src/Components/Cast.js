import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
let personName = "Keanu Reevs";
let CharacterName = "John Wick";
export default function Cast({ cast , navigation }) {
  return (
    <View className="my-6">
      <Text className="text-lg text-white mx-4 mb-5">Top Cast</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {cast &&
          cast.map((person, index) => {
            return (
              <TouchableOpacity key={index} 
              onPress={() => navigation.navigate('Person' , person)}
              className="mr-4 items-center">
                <View className='overflow-hidden h-20 w-20 rounded-full items-center border border-neutral-500'>
                  <Image
                    source={require("../../assets/Images/john-wick.jpg")}
                    className="rounded-2xl h-24 w-20"
                  />
                </View>

                <Text className="text-xs text-white mt-1">
                  {CharacterName.length > 10
                    ? CharacterName.slice(0, 10) + "..."
                    : CharacterName}
                </Text>
                <Text className="text-xs text-neutral-400 mt-1">
                  {personName.length > 10
                    ? personName.slice(0, 10) + "..."
                    : personName}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
}
