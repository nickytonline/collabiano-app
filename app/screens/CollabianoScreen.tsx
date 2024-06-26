import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import {
  BlackPianoKey,
  MAJOR_OCTAVE_NOTES,
  MAJOR_OCTAVE_SHARP_NOTES,
  MajorOctaveNote,
  MajorOctaveSharpNote,
  Screen,
  Text,
  WhitePianoKey,
} from "app/components"
import { Audio } from "expo-av"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface CollabianoScreenProps extends AppStackScreenProps<"Collabiano"> {}

type Note = MajorOctaveNote | MajorOctaveSharpNote

const onPlayNote = async (note: Note) => {
  console.log(`play ${note}`)
  console.log("Loading Sound")
  const { sound } = await Audio.Sound.createAsync(
    require("../../assets/sounds/default-theme/a-sharp-4.mp3"),
  )
  await sound.playAsync()
}

export const CollabianoScreen: FC<CollabianoScreenProps> = observer(function CollabianoScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={$root} preset="scroll">
      <View style={{ flex: 1, flexDirection: "column", alignItems: "center", gap: 10, margin: 10 }}>
        <Text text="Collabiano" />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            gap: 5,
            justifyContent: "center",
          }}
        >
          {MAJOR_OCTAVE_NOTES.map((note) => (
            <WhitePianoKey
              key={note}
              note={note}
              onPress={(event) => {
                onPlayNote(note)
              }}
            />
          ))}
        </View>
        <View
          style={{
            position: "absolute",
            top: 38,
            left: 50,
            flex: 1,
            flexDirection: "row",
            gap: 15,
            justifyContent: "center",
          }}
        >
          {MAJOR_OCTAVE_SHARP_NOTES.filter((n) => ["C#4", "D#4"].includes(n)).map((note) => (
            <BlackPianoKey
              key={note}
              note={note}
              onPress={(event) => {
                onPlayNote(note)
              }}
            />
          ))}
        </View>
        <View
          style={{
            position: "absolute",
            top: 38,
            left: 185,
            flex: 1,
            flexDirection: "row",
            gap: 15,
            justifyContent: "center",
          }}
        >
          {MAJOR_OCTAVE_SHARP_NOTES.filter((n) => !["C#4", "D#4"].includes(n)).map((note) => (
            <BlackPianoKey key={note} note={note} onPress={() => console.log(`play ${note}`)} />
          ))}
        </View>
      </View>
    </Screen>
  )
})

const $root: ViewStyle = {
  marginTop: 20,
  flex: 1,
}
