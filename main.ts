let Distancia = 0
music.play(music.stringPlayable("E B C5 A B G A F ", 71), music.PlaybackMode.InBackground)
basic.showString("HOLA ")
basic.showIcon(IconNames.Ghost)
mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.OFF)
basic.forever(function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Green)
    Distancia = sonar.ping(
    DigitalPin.P14,
    DigitalPin.P15,
    PingUnit.Centimeters
    )
    if (Distancia < 10) {
        mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Blue)
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Back)
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Right, 52)
    } else {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 84)
    }
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
    if (mbit_Robot.Line_Sensor(mbit_Robot.enPos.LeftState, mbit_Robot.enLineState.White) && mbit_Robot.Line_Sensor(mbit_Robot.enPos.RightState, mbit_Robot.enLineState.White)) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 54)
    } else if (mbit_Robot.Line_Sensor(mbit_Robot.enPos.LeftState, mbit_Robot.enLineState.Black) && mbit_Robot.Line_Sensor(mbit_Robot.enPos.RightState, mbit_Robot.enLineState.White)) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Left, 55)
    } else if (mbit_Robot.Line_Sensor(mbit_Robot.enPos.LeftState, mbit_Robot.enLineState.White) && mbit_Robot.Line_Sensor(mbit_Robot.enPos.RightState, mbit_Robot.enLineState.Black)) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Right, 55)
    } else if (mbit_Robot.Line_Sensor(mbit_Robot.enPos.LeftState, mbit_Robot.enLineState.Black) && mbit_Robot.Line_Sensor(mbit_Robot.enPos.RightState, mbit_Robot.enLineState.Black)) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
    }
    mbit_Robot.Music_Car(mbit_Robot.enMusic.ringtone)
})
