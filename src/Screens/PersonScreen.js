//All Imports

import {
  View,
  Text,
  Dimensions,
  Platform,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import {
  Bars3CenterLeftIcon,
  ChevronLeftIcon,
} from "react-native-heroicons/outline";
import { style, theme } from "../Constants/theme";
import { HeartIcon, MagnifyingGlassIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import MovieList from "../Components/MovieList";
import Loading from "../Components/Loading";

//Global Variables

const { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";
const verticalMargin = ios ? "" : "py-5";
const marginTop = ios ? "" : "";

//Components

export default function PersonScreen() {
  // State and components constants
  const navigation = useNavigation();
  const [isFavitite, toggleFavorite] = useState(false);
  const [personMovies, setPersonMovies] = useState([1,2,3,4,5]);
    const [loading, setLoading] = useState(false);


  //Component Behaviours

  //Component Render

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-neutral-900 "
    >
      {/* Back button and person poster */}

      <View className="w-full">
        <SafeAreaView
          className={
            "  z-20 w-full flex-row justify-between items-center px-4  " +
            verticalMargin +
            marginTop
          }
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={style.background}
            className="rounded-xl p-1"
          >
            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => toggleFavorite(!isFavitite)}
            className="rounded-xl p-1"
          >
            <HeartIcon
              size="35"
              color={isFavitite ? theme.background : "white"}
            />
          </TouchableOpacity>
        </SafeAreaView>
      </View>



      {/* Person details */}

      {
        loading ? (
          <Loading/>
        ) : (
           <View>
        <View
          className="flex-row justify-center    "
          style={{
            shadowColor: "gray",
            shadowRadius: 40,
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 1,
          }}
        >
          <View className="items-center  justify-between rounded-[250px] overflow-hidden w-72 h-72 border-2 border-neutral-500 ">
            <Image
              source={require("../../assets/Images/john-wick.jpg")}
              style={{ height: height * 0.43, width: width * 0.74 }}
            />
          </View>
        </View>
        <View className="mt-6">
          <Text className="text-3xl text-white text-center font-bold">
            Keanu Reeves
          </Text>
          <Text className="text-base text-neutral-500 text-center ">
            London , United Kingdom
          </Text>
        </View>
        <View className="mx-3 mt-6 rounded-[250px] p-4 flex-row justify-between items-center bg-neutral-700 border border-neutral-500">
          <View className=" items-center border-r-2 border-r-neutral-400 px-2">
            <Text className="text-white font-semibold ">Gender</Text>
            <Text className="text-neutral-300 text-sm ">Male</Text>
          </View>
          <View className="  items-center border-r-2 border-r-neutral-400 px-2">
            <Text className="text-white font-semibold ">Birthday</Text>
            <Text className="text-neutral-300 text-sm ">1946-03-15</Text>
          </View>
          <View className=" items-center border-r-2 border-r-neutral-400 px-2">
            <Text className="text-white font-semibold ">Know for</Text>
            <Text className="text-neutral-300 text-sm ">Actor</Text>
          </View>
          <View className=" items-center px-2">
            <Text className="text-white font-semibold ">Popularity</Text>
            <Text className="text-neutral-300 text-sm ">64.23</Text>
          </View>
        </View>
        <View className='my-6 mx-4 space-y-2'>
            <Text className='text-white text-lg'>Biographie</Text>
            <Text className='text-neutral-400 tracking-wide'>Fictional character biography. John was born Jardani Jovonovich in a Padhorje village somewhere in the Byelorussian SSR of the Soviet Union to a Ruska Roma family on September 2, 1964. He was orphaned at a young age before being taken in by an old friend of his father, Winston, who would eventually become John's mentor</Text>
        </View>
        {/* Person Movies */}

        <MovieList data={personMovies} title={'Movies'}  hideSeeAll={true} />
      </View>
        )
      }

     
    </ScrollView>
  );
}
