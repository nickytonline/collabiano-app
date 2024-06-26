import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "app/theme"
import { Text } from "app/components/Text"
import { Button } from "./Button"

export const MAJOR_OCTAVE_SHARP_NOTES = ["C#4", "D#4", "F#4", "G#4", "A#4"] as const
type MajorOctaveSharpNote = (typeof MAJOR_OCTAVE_SHARP_NOTES)[number]

export interface BlackPianoKeyProps {
  note: MajorOctaveSharpNote
  onPress: React.ComponentProps<typeof Button>["onPress"]
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

type ColorPaletteValue = (typeof colors.palette)[keyof typeof colors.palette]

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
