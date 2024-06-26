import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "app/theme"
import { Text } from "app/components/Text"
import { Button } from "./Button"

type MajorOctaveSharpNote = "C#4" | "D#4" | "F#4" | "G#4" | "A#4"

export interface BlackPianoKeyProps {
  note: MajorOctaveSharpNote
  onPress: React.ComponentProps<typeof Button>["onPress"]
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

type Value = any // typeof Object.values(colors.palette[number])

// create a union type of all the value for the keys of ColorPalette
type ColorPaletteKeys = keyof ColorPalette

type ColorPaletteValue =
  | "#000000"
  | "#1A1A1A"
  | "#333333"
  | "#4D4D4D"
  | "#666666"
  | "#808080"
  | "#999999"
  | "#B3B3B3"
  | "#CCCCCC"
  | "#E6E6E6"
  | "#F0F0F0"
  | "#F9F9F9"
  | "#FFFFFF"

/**
 * Describe your component here
 */
export const BlackPianoKey = observer(function BlackPianoKey(props: BlackPianoKeyProps) {
  const { style, onPress, note } = props
  const $styles = [style, $noteStyle]
  const [bgColor, setBgColor] = React.useState<ColorPaletteValue>(colors.palette.neutral900)

  return (
    <Button
      style={{
        backgroundColor: bgColor,
      }}
      onPress={onPress}
      onPressIn={() => setBgColor(colors.palette.neutral700)}
      onPressOut={() => setBgColor(colors.palette.neutral900)}
    >
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
  width: 10,
  height: 100,
}

const $noteTextStyle: TextStyle = {
  fontFamily: typography.primary.bold,
  fontSize: 8,
  color: colors.palette.neutral100,
}
