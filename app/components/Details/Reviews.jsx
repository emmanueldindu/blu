import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

const Reviews = () => {
  const route = useRoute();
  const { item } = route.params;
  const reviewsData = {
    rating: item.star,
    ratings: {
      5: 80,
      4: 15,
      3: 3,
      2: 1,
      1: 1,
    },
    comments: [
      {
        id: "1",
        name: "Harry Udechukwu",
        date: "12/6/2024",
        rating: 4.5,
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },

      {
        id: "2",
        name: "Enzo ",
        date: "12/3/2024",
        rating: 4.1,
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      // Add more comments as needed
    ],
  };

  const StarRating = ({ rating, totalStars = 5 }) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 ? 1 : 0;
    const emptyStars = totalStars - fullStars - halfStars;

    return (
      <View style={{ flexDirection: "row" }}>
        {[...Array(fullStars)].map((_, index) => (
          <Ionicons key={`full-${index}`} name="star" size={18} color="green" />
        ))}
        {halfStars ? (
          <Ionicons name="star-half" size={18} color="green" />
        ) : null}
        {[...Array(emptyStars)].map((_, index) => (
          <Ionicons
            key={`empty-${index}`}
            name="star-outline"
            size={18}
            color="green"
          />
        ))}
      </View>
    );
  };

  // Ratings distribution component
  const RatingDistribution = ({ ratings }) => {
    const route = useRoute();
    const { item } = route.params;
    const totalRatings = Object.values(ratings).reduce((a, b) => a + b, 0);

    return (
      <View style={{ marginVertical: 10 }}>
        {Object.keys(ratings).map((star) => (
          <View
            key={star}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 5,
            }}
          >
            <Text style={{ width: 20 }}>{star} ★</Text>
            <View
              style={{
                flex: 1,
                height: 6,
                backgroundColor: "#e0e0e0",
                marginHorizontal: 10,
                borderRadius: 3,
              }}
            >
              <View
                style={{
                  width: `${(ratings[star] / totalRatings) * 100}%`,
                  height: "100%",
                  backgroundColor: "green",
                  borderRadius: 3,
                }}
              />
            </View>
          </View>
        ))}
      </View>
    );
  };

  // Comment component
  const Comment = ({ comment }) => (
    <View
      style={{ marginVertical: 10 }}
      className="bg-[#F5F5F5] rounded-2xl p-4 grid"
    >
      <View className="flex-row w-full">
        <Image
          source={{ uri: "https://via.placeholder.com/40" }} // Placeholder image URL
          style={{ width: 40, height: 40, borderRadius: 20 }}
        />
        <View style={{ marginLeft: 10, flex: 1 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontWeight: "bold" }}>{comment.name}</Text>
          </View>
          <View className="flex-row">
            <StarRating rating={comment.rating} />
            <Text style={{ color: "gray", justifyContent: "center" }}>
              {comment.date}
            </Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={{ marginTop: 5, lineHeight: 15, marginTop: 10 }}>
          {comment.comment}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
          Reviews
        </Text>

        {/* Overall Rating */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Text style={{ fontSize: 48, fontWeight: "bold", marginRight: 10 }}>
            {reviewsData.rating}
          </Text>
          <View>
            <Text style={{ fontSize: 16, color: "gray" }}>Out of 5</Text>
            <StarRating rating={reviewsData.rating} />
          </View>
        </View>

        {/* Ratings Distribution */}
        <RatingDistribution ratings={reviewsData.ratings} />
      </View>
      {/* Comments */}
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
        Comments
      </Text>
      <FlatList
        data={reviewsData.comments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Comment comment={item} />}
        ListFooterComponent={() => (
          <TouchableOpacity style={{ padding: 10, alignSelf: "center" }}>
            <Text style={{ color: "green" }}>See more</Text>
          </TouchableOpacity>
        )}
      />

<TouchableOpacity className='w-[95%] h-[48px] items-center justify-center rounded-[30px] mt-5 bg-[#00472B] mx-auto' >
        <Text className='text-white'>Write a review </Text>
    </TouchableOpacity>
    </View>
  );
};

export default Reviews;
