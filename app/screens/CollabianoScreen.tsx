import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { MAJOR_OCTAVE_NOTES, Screen, Text, WhitePianoKey } from "app/components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface CollabianoScreenProps extends AppStackScreenProps<"Collabiano"> {}

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
            <WhitePianoKey key={note} note={note} onPress={() => console.log(`play ${note}`)} />
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
