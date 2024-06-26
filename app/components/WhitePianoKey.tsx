import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "app/theme"
import { Text } from "app/components/Text"
import { Button } from "./Button"

type MajorOctaveNote = "C4" | "D4" | "E4" | "F4" | "G4" | "A4" | "B4"

export interface WhitePianoKeyProps {
  note: MajorOctaveNote
  onPress: React.ComponentProps<typeof Button>["onPress"]
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const WhitePianoKey = observer(function WhitePianoKey(props: WhitePianoKeyProps) {
  const { style, onPress, note } = props
  const $styles = [style, $noteStyle]

  return (
    <Button onPress={onPress}>
      <View style={$styles} aria-label={`plays the ${note} note`}>
        <Text style={$noteTextStyle}>{note}</Text>
      </View>
    </Button>
  )
})

const $noteStyle: TextStyle = {
  flex: 1,
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "center",
  width: 15,
  height: 140,
}

const $noteTextStyle: TextStyle = {
  fontFamily: typography.primary.semiBold,
  fontSize: 10,
  color: colors.palette.neutral900,
}
