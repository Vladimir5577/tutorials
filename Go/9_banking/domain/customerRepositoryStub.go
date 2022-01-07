package domain

type CustomerRepositoryStub struct {
	customers []Customer
}

func (s CustomerRepositoryStub) FindAll() ([]Customer, error) {
	return s.customers, nil
}

func NewCustomerRepositoryStub() CustomerRepositoryStub {
	customers := []Customer{
		{Id: "1001", Name: "Bob", City: "London", Zipcode: "110011", DateofBirth: "2000-01-01", Status: "1"},
		{Id: "1002", Name: "Mike", City: "Moscow", Zipcode: "110011", DateofBirth: "2000-01-01", Status: "1"},
	}

	return CustomerRepositoryStub{customers}
}
