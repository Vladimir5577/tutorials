package math

func Add(x, y int) int {
	return x + y
}

func Subtract(x, y int) int {
	return x - y
}

func Divide(x, y int) float64 {
	if y == 0 {
		return float64(0)
	}
	return float64(x / y)
}

func Multiply(x, y int) int {
	return x * y
}
