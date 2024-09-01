import {
  View,
  Text,
  StatusBar,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Navigation from "../Constants/AppNavigation";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { style } from "../Constants/theme";
import TrendingMovies from "../Components/TrendingMovies";
import MovieList from "../Components/MovieList";
import { useNavigation } from "@react-navigation/native";
import Loading from "../Components/Loading";

const ios = Platform.OS == "ios";
export default function HomeScreen() {
  const [trending, setTrending] = useState([1, 2, 3]);
  const [upcoming, setUpcoming] = useState([1, 2, 3]);
  const [toprated, setToprated] = useState([1, 2, 3]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-neutral-800">
      <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-4 mt-5">
          <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white" />
          <Text className="text-3xl font-bold text-white">
            <Text style={style.text}>M</Text>
            ovies
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {loading ? (
        <Loading />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
        >
          {/* Trending Movie carousel */}
          <TrendingMovies data={trending} />
          {/* Upcoming movies */}
          <MovieList title="Upcoming" data={upcoming} />
          {/* Top Rated movies */}
          <MovieList title="Top Rated" data={toprated} />
        </ScrollView>
      )}
    </View>
  );
}
