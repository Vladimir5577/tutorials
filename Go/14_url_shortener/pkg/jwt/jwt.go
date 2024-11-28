package jwt

import "github.com/golang-jwt/jwt/v5"

type JWTData struct {
	Email string
}

type jWT struct {
	Secret string
}

func NewJWT(secret string) *jWT {
	return &jWT{
		Secret: secret,
	}
}

func (j *jWT) Create(data JWTData) (string, error) {
	t := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"email": data.Email,
	})
	s, err := t.SignedString([]byte(j.Secret))
	if err != nil {
		return "", err
	}
	return s, nil
}

func (j *jWT) Parse(token string) (bool, *JWTData) {
	t, err := jwt.Parse(token, func(t *jwt.Token) (interface{}, error) {
		return []byte(j.Secret), nil
	})
	if err != nil {
		return false, nil
	}
	email := t.Claims.(jwt.MapClaims)["email"]
	return t.Valid, &JWTData{
		Email: email.(string),
	}

}
