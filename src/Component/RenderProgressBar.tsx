import { StyleSheet, View } from "react-native";

export const RenderProgressBar = (progressValue:number) => {
    return (
      <View style={styles.topBarContainer}>
        <View style={styles.progressBarTrack}>
          <View
            style={[styles.progressBarFill, { width: `${progressValue}%` }]}
          />
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
      topBarContainer: {
    marginTop: 10,
    marginBottom: 5,
    paddingHorizontal: 5,
  },
  progressBarTrack: {
    width: '100%',
    height: 6,
    backgroundColor: '#E0E0E0',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 3,
  },
})