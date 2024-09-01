import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  Image,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { style, theme } from "../Constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import Cast from "../Components/Cast";
import MovieList from "../Components/MovieList";
import Loading from "../Components/Loading";

let movieName = "Ant-Man and the wasp : Quantumania";
const { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";
const topMargin = ios ? "" : "mt-5";

export default function MovieScreen() {
  const navigation = useNavigation();
  const [isFavorite, toggleFavorite] = useState(false);
  const [cast, setCast] = useState([1, 2, 3, 4, 5]);
  const [loading, setLoading] = useState(false);

  const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5]);
  const { params: item } = useRoute();
  useEffect(() => {
    // Call the movie details api
  }, [item]);

  // render
  return (



    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className=" flex-1 bg-neutral-800 "
    >
      {/* Back buttom and movie poster */}
      <View className="w-full">
        <SafeAreaView
          className={
            " absolute  z-20 w-full flex-row justify-between items-center px-4 " +
            topMargin
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
            onPress={() => toggleFavorite(!isFavorite)}
            className="rounded-xl p-1"
          >
            <HeartIcon
              size="35"
              color={isFavorite ? theme.background : "white"}
            />
          </TouchableOpacity>
        </SafeAreaView>

        {/* {loading ? <Loading /> : <></>} */}

        <View>
          <Image
            source={require("../../assets/Images/movie-poster2.jpg")}
            style={{ width, height: height * 0.55 }}
          />
          <LinearGradient
            colors={["transparent", "rgba(38,38,38,0.8)", "rgba(38,38,38, 1)"]}
            style={{ width, height: height * 0.4 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className="absolute bottom-0"
          />
        </View>
      </View>
      {/* Movie detail view */}
      <View
        style={{
          marginTop: -(height * 0, 9),
        }}
        className="space-y-3"
      >
        <Text className="font-bold text-center text-white text-3xl tracking-wider">
          {movieName}
        </Text>

        {/* Status , relese , runtime  */}
        <Text className="text-center font-semibold text-base text-neutral-400">
          Released | 2023 | 170min
        </Text>
        {/* Genders */}
        <View className="flex-row justify-center items-center mx-4 space-x-2">
          <Text className="text-base text-center text-neutral-400 font-semibold">
            Action |
          </Text>
          <Text className="text-base text-center text-neutral-400 font-semibold">
            Trill |
          </Text>
          <Text className="text-base text-center text-neutral-400 font-semibold">
            Comedy
          </Text>
        </View>
        {/* movie description */}
        <Text className=" mx-4 tracking-wider text-neutral-400 ">
          Cassie partage la passion de sa nouvelle famille pour la science et la
          technologie, notamment en ce qui concerne le domaine quantique. Mais
          sa curiosité les entraîne tous dans une odyssée imprévue et sans
          retour dans le vaste monde subatomique, un endroit mystérieux où ils
          rencontreront l'avenir.
        </Text>
      </View>

      {/* Cast */}

      <Cast navigation={navigation} cast={cast} />

      {/* Similar Movies */}

      <MovieList
        title={"Similar Movies"}
        data={similarMovies}
        hideSeeAll={true}
      />
    </ScrollView>
  );
}
