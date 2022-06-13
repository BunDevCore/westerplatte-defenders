import {DARK, LIGHT, HIGH_CONTRAST} from "./index";
import THEMES from "./theme";

export const getTheme = themeName => {
    switch (themeName) {
        case THEMES.DARK:
            return DARK;
        case THEMES.HIGH_CONTRAST:
            return HIGH_CONTRAST;
        default:
            return LIGHT;
    }
}