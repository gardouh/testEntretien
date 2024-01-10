import React, { useEffect } from "react";
import { View, Text, ActivityIndicator, Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchTmps } from "../store/actions/tmpsActions";
import { LineChart } from "react-native-chart-kit";

const LoadingIndicator = () => (
  <View style={styles.centeredView}>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
);

const ErrorMessage = ({ error }) => (
  <View style={styles.centeredView}>
    <Text>Une erreur est survenue : {error.toString()}</Text>
  </View>
);

const TemperatureChart = ({ tmps }) => {
  const data = {
    labels: Object.keys(tmps),
    datasets: [
      {
        data: Object.values(tmps),
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        strokeWidth: 3,
      },
    ],
  };

  return (
    <LineChart
      data={data}
      width={Dimensions.get("window").width} // from react-native
      height={220}
      yAxisInterval={1}
      chartConfig={{
        backgroundColor: "#757ce8",
        backgroundGradientFrom: "#3f50b5",
        backgroundGradientTo: "#3f50b5",
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16,
        },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#000",
        },
      }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
    />
  );
};

const HomeScreen = () => {
  const { tmps, loading, error } = useSelector((state) => state.tmps);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTmps());
  }, [dispatch]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <View style={styles.centeredView}>
      {tmps ? (
        <TemperatureChart tmps={tmps} />
      ) : (
        <Text>Aucune donnée de température disponible.</Text>
      )}
    </View>
  );
};

const styles = {
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
};

export default HomeScreen;
