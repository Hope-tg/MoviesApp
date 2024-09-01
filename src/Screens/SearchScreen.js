import {
  View,
  Text,
  Dimensions,
  Platform,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import React, { useState } from "react";
import { XMarkIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import Loading from "../Components/Loading";

//Global variables
const { height, width } = Dimensions.get("window");
const ios = Platform.OS == "ios";
let movieName = "Ant-Man and the wasp : Quantumania";

export default function SearchScreen() {
  //SZtate and components variables
  const navigation = useNavigation();
  const [results, setResults] = useState([1, 2, 3, 4]);
  const [loading, setLoading] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-neutral-800 py-5">
      <View className="mx-4 mb-3 mt-3 border border-neutral-400 flex-row justify-between items-center rounded-[250px]">
        <TextInput
          placeholder="Search Movie"
          placeholderTextColor={"lightgray"}
          className="pb-1 pl-6 flex-1 text-white text-base font-semibold tracking-wider "
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          className="p-3 m-1 bg-neutral-500 rounded-[250px]"
        >
          <XMarkIcon size="25" color="white" />
        </TouchableOpacity>
      </View>

      {/* search result */}

      {loading ? (
        <Loading />
      ) : results.length != 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          className="space-y-3"
        >
          <Text className="font-semibold ml-1 text-white">
            Results ({results.length}){" "}
          </Text>
          <View className="flex-1 flex-row justify-between flex-wrap">
            {results.map((item, index) => {
              return (
                <TouchableWithoutFeedback
                  onPress={() => navigation.push("Movie", item)}
                >
                  <View className="mb-4 space-y-2">
                    <Image
                      className="rounded-3xl"
                      source={require("../../assets/Images/movie-poster2.jpg")}
                      style={{ width: width * 0.44, height: height * 0.3 }}
                    />
                    <Text className="font-semibold text-neutral-300 ml-1">
                      {movieName.length > 21
                        ? movieName.slice(0, 21) + "..."
                        : movieName}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <View className="flex-row   justify-center items-center px-5">
          <Image
            source={require("../../assets/Images/no-result.png")}
            className="h-80 w-96"
          />
        </View>
      )}
    </SafeAreaView>
  );
}
