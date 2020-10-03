import * as constants from '../constants';
import ClickSound from '../assets/sound/click.mp3';

export const exampleAction = (data) => {
    return {
        type: constants.EXAMPLE_ACTION
    }
}

export const exampleActionSecond = (data) => {
    return {
        type: constants.EXAMPLE_ACTION_SECOND,
        exampleData: data
    }
}

export const playSoundClick = () => {
    const sound = new Audio(ClickSound)
    sound.play()
    return {
        type: constants.PLAY_SOUND_CLICK,
    }
}