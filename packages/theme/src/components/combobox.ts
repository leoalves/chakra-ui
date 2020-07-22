import { BaseStyle, mode } from "@chakra-ui/theme-tools"

const register = {
  parts: ["comboboxList", "comboboxListItem", "comboboxInput", "command"],
} as const

const baseStyle: BaseStyle<typeof register> = (props) => {
  return {
    comboboxList: {
      bg: mode(`#fff`, `gray.700`)(props),
      boxShadow: mode(`sm`, `dark-lg`)(props),
      color: "inherit",
      minWidth: "3xs",
      paddingY: "2",
      zIndex: 1,
      borderRadius: "md",
      borderWidth: "1px",
    },

    comboboxListItem: {
      paddingY: "0.4rem",
      paddingX: "0.8rem",
      transition: "background 50ms ease-in 0s",
      _focus: {
        bg: mode(`gray.100`, `whiteAlpha.100`)(props),
      },
      _hover: {
        bg: mode(`gray.100`, `whiteAlpha.100`)(props),
      },
      _active: {
        bg: mode(`gray.200`, `whiteAlpha.200`)(props),
      },
      _expanded: {
        bg: mode(`gray.100`, `whiteAlpha.100`)(props),
      },
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed",
      },
    },
    comboboxInput: {
      width: "100%",
      backgroundColor: "red",
    },
    command: {
      opacity: 0.6,
    },
  }
}

const combobox = {
  register,
  baseStyle,
}

export default combobox
