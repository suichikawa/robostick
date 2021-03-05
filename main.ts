radio.onReceivedNumber(function (receivedNumber) {
	
})
input.onGesture(Gesture.ScreenUp, function () {
    radio.sendString("s")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("r")
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("s")
})
input.onGesture(Gesture.ThreeG, function () {
    radio.sendString("s")
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("l")
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendString("b")
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendString("f")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("s")
})
radio.setGroup(1)
basic.showIcon(IconNames.Square)
basic.pause(500)
basic.showIcon(IconNames.SmallSquare)
basic.forever(function () {
	
})
