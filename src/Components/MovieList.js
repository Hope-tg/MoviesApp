import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { style } from "../Constants/theme";
import { useNavigation } from "@react-navigation/native";

var { width, height } = Dimensions.get("window");

export default function MovieList({ title, data, hideSeeAll }) {
  const navigation = useNavigation();
  let movieName = "Ant-Man and the wasp : Quantumania";
  return (
    <View className="mb-8 space-y-4">
      <View className="flex-row justify-between items-center mx-4">
        <Text className="text-xl text-white">{title}</Text>

        {!hideSeeAll && (
          <TouchableOpacity onPress={() => navigation.navigate("Movie")}>
            <Text style={style.text} className="text-lg text-white">
              See All
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {data.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => navigation.push("Movie", item)}
            >
              <View className="space-y-1 mr-4">
                <Image
                  source={require("../../assets/Images/movie-poster2.jpg")}
                  className="rounded-3xl"
                  style={{
                    width: width * 0.33,
                    height: height * 0.22,
                  }}
                />
                <Text className="text-neutral-300 ml-1">
                  {movieName.length > 14
                    ? movieName.slice(0, 14) + "..."
                    : movieName}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
}
