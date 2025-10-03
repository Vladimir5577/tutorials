Дженерик --- метапрограммирование в компэил тайме.

Рефлексия --- метапрограммирование в рантайме.

Рефлексия дает возможность анализировать интерфейс.

Рефлексия --- способность компьютерной программы изучать и моднфицировать
свою структуру и поведение (значения, мета-данные, свойства и функции)
во время выполнения (отдельная форма метопрограммирования).

На базовом уровне reflect является всего лишь механизмом 
для изучения пары тип и значение, хранящейся внутри переменной иньерфейса.

Чтобы начать работу. есть 2 типа, о которых нам нужно знать:
    1. reflect.Type
    2. reflect.Value
Эти 2 типа предоставляют доступ к содержимому интерфейсной переменной
и возвращаются простыми функциями:
    1. reflect.TypeOf()
    2. reflect.ValueOf()
они выделяют части из значения интерфейса.

// ==============================================

var value float64 = 3.4

// неявное преобразование в пустой интерфейс
fmt.Println("type:", reflect.TypeOf(value))  // func TypeOf(i any) reflect.Type
fmt.Println("type:", reflect.ValueOf(value)) // func ValueOf(i any) reflect.Value

equal := reflect.ValueOf(value).Type() == reflect.TypeOf(value)
fmt.Println("equal:", equal)

kind := reflect.ValueOf(value).Kind()
fmt.Println("equal reflect.Float64:", reflect.Float64 == kind)

value = reflect.ValueOf(value).Float()
_ = value

// ==============================================

    Анализ структуры при помощи рефлексии.
    --------------------------------------

type Data struct {
	Count int
	Title string
}

func (d Data) Do() {}

func main() {
	data := Data{}

	tData := reflect.TypeOf(data)
	fmt.Println("Kind:", tData.Kind())
	fmt.Println("PkgPath:", tData.PkgPath())

	fmt.Println("NumField:", tData.NumField())
	fmt.Println("Field(0):", tData.Field(0).Name)
	fmt.Println("Field(1):", tData.Field(1).Name)

	fmt.Println("NumMethod:", tData.NumMethod())
	fmt.Println("Method(0):", tData.Method(0).Name)
	fmt.Println("Method(0).NumIn:", tData.Method(0).Type.NumIn())
	fmt.Println("Method(0).NumOut:", tData.Method(0).Type.NumOut())
}

// ==============================================
// ==============================================
// ==============================================
// ==============================================